export function checkVariableType(variable, value, { path, arrayUpdateType } = {}) {
    switch (variable.type) {
        case 'boolean':
            if (value === 'true') value = true;
            if (value === 'false') value = false;
            if (typeof value !== 'boolean') throw new Error('value must be a boolean');
            break;
        case 'query':
        case 'string':
            if (value !== null && typeof value === 'object')
                throw new Error('value must be a string, a number or a boolean');
            if (value !== null) value = `${value}`;
            break;
        case 'number':
            if (typeof value === 'string') {
                try {
                    value = parseFloat(value);
                    if (isNaN(value)) value = null;
                } catch (error) {
                    value = null;
                }
            }
            if (value !== null && typeof value !== 'number') throw new Error('value must be a number');
            break;
        case 'array':
            if (value !== null && !Array.isArray(value) && !arrayUpdateType) throw new Error('value must be an array');
            break;
        case 'object':
            if (value !== null && typeof value !== 'object' && !path) throw new Error('value must be an object');
            break;
    }

    return value;
}
