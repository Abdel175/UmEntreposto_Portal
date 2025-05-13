// import { escape } from 'html-escaper';

export function escapeHTMLInObject(obj) {
    return obj;

    // if (typeof obj === 'string' || obj instanceof HTMLElement) {
    //     return obj;
    // }

    // for (let key in obj) {
    //     try {
    //         if (typeof obj[key] === 'string') {
    //             obj[key] = escape(obj[key]);
    //         } else if (typeof obj[key] === 'object') {
    //             obj[key] = escapeHTMLInObject(obj[key], deep + 1);
    //         }
    //     } catch (error) {
    //         wwLib.wwLog.warn('Cannot escape HTML in object', obj, error);
    //     }
    // }
    // return obj;
}
