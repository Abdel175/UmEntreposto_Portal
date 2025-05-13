import { OBJ, BOOL, ARR, NULL, parse } from 'partial-json';
import { jsonrepair } from 'jsonrepair';

/**
 * Parse a partial JSON string that might be streamed from an LLM
 * @param {string} partialJson - The incomplete JSON string
 * @returns {string} The autocompleted JSON string
 * @throws {Error} If the partial JSON is invalid or cannot be autocompleted
 * @example
 * autocompleteJson('{"name": "John", "age":') // Returns {"name": "John"}
 * autocompleteJson('{"users": ["Alice", "Bob", "Ch') // Returns {"users": ["Alice", "Bob"]}
 * autocompleteJson('{"name":}') // Returns {}
 * autocompleteJson('{"') // Returns {}
 */
export function parsePartialJson(partialJson) {
    try {
        return JSON.parse(partialJson);
    } catch (error) {
        //Try to remove an unexpected char. This can be the fault of css animations.
        const matches = error?.message?.match(/position\s([\d]*)\s\(/);
        if (matches?.[1]) {
            const position = parseInt(matches[1]);

            try {
                return JSON.parse(partialJson.slice(0, position - 1) + partialJson.slice(position));
            } catch (error) {}
        }
    }
    try {
        return parse(partialJson, OBJ | ARR | BOOL | NULL);
    } catch (error) {
        // We don't want to support partial strings
        if (partialJson.startsWith('"') && !partialJson.endsWith('"')) {
            throw error;
        }
    }
    return JSON.parse(jsonrepair(partialJson));
}
