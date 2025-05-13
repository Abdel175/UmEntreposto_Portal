import { isEqual } from 'lodash';
import { escape } from 'html-escaper';

function isObject(obj) {
    return !obj || Array.isArray(obj) || typeof obj !== 'object' ? false : true;
}

// RFC 5322 compliant email regex
const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const _wwFormulas = {
    if(cond, iftrue, iffalse) {
        return cond ? iftrue : iffalse;
    },
    ifEmpty(cond, val) {
        if (wwLib.wwUtils.isEmpty(cond)) {
            return val;
        } else {
            return cond;
        }
    },
    //DEPRECATED
    ifempty(cond, val) {
        wwLib.wwLog.error('ifempty is deprecated. Please use ifEmpty instead');
        return this.ifEmpty(cond, val);
    },
    not(val) {
        return !val;
    },
    compare(val1, val2) {
        return isEqual(val1, val2);
    },
    switch(cond, value, result, ...args) {
        const values = [value, result, ...args].filter((_, i) => i % 2 === 0);
        const results = [value, result, ...args].filter((_, i) => i % 2 === 1);
        const index = values.findIndex(val => val === cond);
        if (index === -1) {
            return values.length > results.length ? values[results.length] : undefined;
        } else {
            return results[index];
        }
    },
    average(arr, ...args) {
        if (!Array.isArray(arr)) {
            arr = [arr, ...args];
        }
        if (arr.length === 0) return 0;
        return arr.reduce((sum, val) => sum + val, 0) / arr.length;
    },
    sum(arr, ...args) {
        if (!Array.isArray(arr)) {
            arr = [arr, ...args];
        }
        return arr.reduce((sum, val) => sum + val, 0);
    },
    round(value, precision = 0) {
        const multiplier = Math.pow(10, precision);
        return Math.round(value * multiplier) / multiplier;
    },
    length(arr) {
        if (typeof arr === 'string') return arr.length;
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection) or a string';
        return arr.length;
    },
    keys(obj) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        return Object.keys(obj);
    },
    values(obj) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        return Object.values(obj);
    },
    objectToArray(obj) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        return Object.entries(obj);
    },
    slice(arr, start, end) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return arr.slice(start, end);
    },
    merge(...args) {
        const _args = args.map(arg => {
            const _arg = wwLib.wwUtils.getDataFromCollection(arg);
            if (!Array.isArray(_arg)) throw 'All parameters must be arrays (or collections)';
            return _arg;
        });
        return [].concat(..._args);
    },
    contains(arr, value) {
        if (!arr && arr !== '') return false;
        if (typeof arr === 'string') {
            return arr.includes(value);
        }
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection) or a string';
        return arr.includes(value);
    },
    map(arr, key, ...keys) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        if (keys.length === 0) {
            return arr.map(val => val && _.get(val, key));
        } else {
            keys = [key, ...keys];
            return arr.map(val => {
                if (!val) return {};
                else {
                    const obj = {};
                    for (let k of keys) {
                        obj[k] = val[k];
                    }
                    return obj;
                }
            });
        }
    },
    reverse(arr) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return [...arr].reverse();
    },
    distinct(arr) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return arr.reduce((result, value) => {
            if (!result.some(resultValue => _.isEqual(value, resultValue))) result.push(value);
            return result;
        }, []);
    },
    groupBy(arr, key) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        const result = {};
        for (let value of arr) {
            const _value = _.get(value, key);
            if (value) {
                if (!result[_value]) {
                    result[_value] = [value];
                } else {
                    result[_value].push(value);
                }
            }
        }
        return result;
    },
    rollupSum(arr, key) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';

        return arr.reduce(
            (total, value) => (value && _.get(value, key) ? total + parseFloat(_.get(value, key)) : total),
            0
        );
    },
    //DEPRECATED
    rollupCount(arr, key) {
        wwLib.wwLog.error('rollupCount is deprecated. Please use rollupSum instead');
        return this.rollupSum(arr, key);
    },
    sort(arr, order = 'asc', key) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        const moveUp = order === 'asc' ? 1 : -1;
        const moveDown = order === 'asc' ? -1 : 1;
        if (!key) {
            return [...arr].sort((a, b) => ((a || '') > (b || '') ? moveUp : moveDown));
        } else {
            return [...arr].sort((a, b) =>
                ((a && _.get(a, key)) || '') > ((b && _.get(b, key)) || '') ? moveUp : moveDown
            );
        }
    },
    flat(arr) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return arr.flat();
    },
    concatenate(...args) {
        return `${args.join('')}`;
    },
    split(str, separator) {
        if (!str || typeof str !== 'string') throw 'First parameter must be a text';
        return str.split(separator);
    },
    //DEPRECATED
    lower(str) {
        if (!str || typeof str !== 'string') throw 'First parameter must be a text';
        return str.toLowerCase();
    },
    lowercase(str) {
        if (!str || typeof str !== 'string') throw 'First parameter must be a text';
        return str.toLowerCase();
    },
    capitalize(s) {
        if (!s || typeof s !== 'string') throw 'First parameter must be a text';

        let str = '';
        for (let i = 0; i < s.length; i++) {
            let prevChar = i === 0 ? ' ' : s[i - 1];
            if (
                prevChar === ' ' ||
                (prevChar.match(/[\u0020-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/) &&
                    prevChar !== "'" &&
                    prevChar !== '_')
            ) {
                str += s[i] !== '_' ? s[i].toUpperCase() : s[i];
            } else if (
                (prevChar === "'" &&
                    (i <= 1 || s[i - 2].match(/[\u0020-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E]/))) ||
                prevChar.match(/[\u00A0-\u00BF\u02B0-\u036F\u2000-\u206F\u20A0-\u20CF\u2100-\u218F]/)
            ) {
                str += s[i] !== '_' ? s[i].toUpperCase() : s[i];
            } else {
                str += s[i];
            }
        }
        return str;
    },
    uppercase(str) {
        if (!str || typeof str !== 'string') throw 'First parameter must be a text';
        return str.toUpperCase();
    },
    indexOf(str, val, start = 0) {
        if (!str || typeof str !== 'string') throw 'First parameter must be a text';
        return str.indexOf(val, start);
    },
    add(arr, ...args) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return [...arr, ...args];
    },
    prepend(arr, ...args) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return [...args, ...arr];
    },
    remove(arr, value) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return arr.filter(val => !_.isEqual(val, value));
    },
    filterByKey(arr, key, value) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        if (value === undefined) {
            return arr.filter(i => _.get(i, key));
        }
        if (Array.isArray(value)) {
            return arr.filter(i => value.includes(_.get(i, key)));
        }
        return arr.filter(i => _.get(i, key) === value);
    },
    removeByKey(arr, key, value) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        if (value === undefined) {
            return arr.filter(i => !_.get(i, key));
        }
        if (Array.isArray(value)) {
            return arr.filter(i => !value.includes(_.get(i, key)));
        }
        return arr.filter(i => _.get(i, key) !== value);
    },
    removeByIndex(arr, index) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        const _index = parseInt(index);
        if (isNaN(_index)) throw 'Second parameter must be a number';
        if (_index < 0 || _index >= arr.length) return arr;
        const result = [...arr];
        result.splice(_index, 1);
        return result;
    },
    getKeyValue(obj, key) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        return _.get(obj, key);
    },
    // DEPRECATED
    getByKey(obj, key) {
        wwLib.wwLog.error('getByKey is deprecated. Please use getKeyValue instead');
        return this.getKeyValue(obj, key);
    },
    setKeyValue(obj, key, value) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        return { ...obj, [key]: value };
    },
    // DEPRECATED
    setByKey(obj, key, value) {
        wwLib.wwLog.error('setByKey is deprecated. Please use setKeyValue instead');
        return this.setKeyValue(obj, key, value);
    },
    toText(value) {
        return `${value}`;
    },
    trim(value) {
        return `${value}`.trim();
    },
    trimStart(value) {
        return `${value}`.trimStart();
    },
    trimEnd(value) {
        return `${value}`.trimEnd();
    },
    toNumber(value) {
        return parseFloat(value);
    },
    createObject(...args) {
        const keys = [...args].filter((_, i) => i % 2 === 0);
        const values = [...args].filter((_, i) => i % 2 === 1);
        const result = {};
        keys.forEach((key, i) => {
            if (!key || Array.isArray(key) || typeof key === 'object') {
                throw `${key} is an invalid key`;
            }
            result[`${key}`] = values[i];
        });

        return result;
    },
    //DEPRECATED
    toObject(...args) {
        wwLib.wwLog.error('toObject is deprecated. Please use createObject instead');
        return this.createObject(...args);
    },
    createArray(...args) {
        return [...args];
    },
    //DEPRECATED
    toList(...args) {
        wwLib.wwLog.error('toList is deprecated. Please use createArray instead');
        return this.createArray(...args);
    },
    pick(obj, ...args) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        const keys = [...args];
        return keys.reduce((result, key) => {
            result[key] = _.get(obj, key);
            return result;
        }, {});
    },
    omit(obj, ...args) {
        if (!isObject(obj)) throw 'First parameter must be an object';
        const keys = Object.keys(obj).filter(key => !args.includes(key));
        return keys.reduce((result, key) => {
            result[key] = _.get(obj, key);
            return result;
        }, {});
    },
    now() {
        wwLib.wwLog.error('now is deprecated. Please use date from the date plugin instead');
        const tzoffset = new Date().getTimezoneOffset() * 60000;
        const localISOTime = new Date(Date.now() - tzoffset).toISOString();

        return localISOTime;
    },
    timestamp() {
        wwLib.wwLog.error('timestamp is deprecated. Please use toTimestamp from the date plugin instead');
        const tzoffset = new Date().getTimezoneOffset() * 60000;
        const localISOTime = new Date(Date.now() - tzoffset);

        return localISOTime.getTime();
    },
    join(arr, separator = ',') {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        if (typeof separator !== 'string') throw 'Second parameter must be a text';
        return arr.join(separator);
    },
    getByIndex(arr, index) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        const _index = parseInt(index);
        if (isNaN(_index)) throw 'Second parameter must be a number';
        return arr[_index];
    },
    fileToUrl(file, placeholder = '') {
        if (file) {
            return URL.createObjectURL(file);
        } else {
            return placeholder;
        }
    },
    toBool(value) {
        return Boolean(value);
    },
    lookup(value, arr, key = 'id') {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'Second parameter must be an array (or collection)';
        return arr.filter(item => _.get(item, key) === value).shift();
    },
    lookupArray(arrValues, arr, key = 'id') {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        arrValues = wwLib.wwUtils.getDataFromCollection(arrValues);
        if (!Array.isArray(arrValues)) throw 'First parameter must be an array (or collection)';
        if (!Array.isArray(arr)) throw 'Second parameter must be an array (or collection)';
        return arr.filter(item => arrValues.includes(_.get(item, key)));
    },
    rollup(arr, key, distinct) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';

        const values = arr.reduce((result, value) => {
            const _value = _.get(value, key);
            if (_value === undefined || _value === null) return result;
            return result.concat(_value);
        }, []);

        return distinct ? this.distinct(values) : values;
    },
    findIndex(arr, value) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        return arr.findIndex(v => _.isEqual(v, value));
    },
    findIndexByKey(arr, key, value) {
        arr = wwLib.wwUtils.getDataFromCollection(arr);
        if (!Array.isArray(arr)) throw 'First parameter must be an array (or collection)';
        if (typeof key !== 'string') throw 'Second parameter must be a text';
        return arr.findIndex(v => _.isEqual(_.get(v, key), value));
    },
    textLength(text) {
        if (typeof text !== 'string') throw 'First parameter must be a text';
        return text.length;
    },
    subText(text, start, end) {
        if (typeof text !== 'string') throw 'First parameter must be a text';
        start = parseInt(start);
        if (isNaN(start)) throw 'Second parameter must be a number';
        if (end !== undefined) {
            end = parseInt(end);
            if (isNaN(end)) throw 'Third parameter must be a number';
        }
        return text.substring(start, end);
    },
    sanitize(text) {
        text = `${text}`;
        if (typeof text !== 'string') throw 'First parameter cannot be converted to a text';
        return escape(text);
    },
    translate(text) {
        return wwLib.wwLang.getText(text);
    },
    isEmail(email) {
        if (!email || typeof email !== 'string') return false;
        return EMAIL_REGEX.test(email);
    },
};

export const WW_FORMULAS_CATEGORIES = [
    {
        label: 'Conditional',
        values: [
            { name: 'if', arrity: 3 },
            { name: 'ifEmpty', arrity: 2 },
            { name: 'not', arrity: 1 },
            { name: 'switch', arrity: 6 },
        ],
    },
    {
        label: 'Math',
        values: [
            { name: 'average', arrity: 1 },
            { name: 'rollupSum', arrity: 2 },
            { name: 'round', arrity: 2 },
            { name: 'sum', arrity: 1 },
            { name: 'toNumber', arrity: 1 },
        ],
    },
    {
        label: 'Array',
        values: [
            { name: 'add', arrity: 2 },
            { name: 'contains', arrity: 2 },
            { name: 'createArray', arrity: 2 },
            { name: 'compare', arrity: 2 },
            { name: 'distinct', arrity: 1 },
            { name: 'filterByKey', arrity: 2 },
            { name: 'findIndex', arrity: 2 },
            { name: 'findIndexByKey', arrity: 3 },
            { name: 'getByIndex', arrity: 2 },
            { name: 'groupBy', arrity: 2 },
            { name: 'join', arrity: 1 },
            { name: 'length', arrity: 1 },
            { name: 'lookup', arrity: 2 },
            { name: 'lookupArray', arrity: 2 },
            { name: 'map', arrity: 2 },
            { name: 'merge', arrity: 2 },
            { name: 'prepend', arrity: 2 },
            { name: 'remove', arrity: 2 },
            { name: 'removeByIndex', arrity: 2 },
            { name: 'removeByKey', arrity: 3 },
            { name: 'reverse', arrity: 1 },
            { name: 'rollup', arrity: 2 },
            { name: 'slice', arrity: 2 },
            { name: 'sort', arrity: 1 },
            { name: 'flat', arrity: 1 },
        ],
    },
    {
        label: 'Text',
        values: [
            { name: 'capitalize', arrity: 1 },
            { name: 'concatenate', arrity: 2 },
            { name: 'contains', arrity: 2 },
            { name: 'indexOf', arrity: 2 },
            { name: 'lower', arrity: 1, deprecated: true },
            { name: 'sanitize', arrity: 1 },
            { name: 'split', arrity: 2 },
            { name: 'subText', arrity: 2 },
            { name: 'textLength', arrity: 1 },
            { name: 'toText', arrity: 1 },
            { name: 'trim', arrity: 1 },
            { name: 'trimStart', arrity: 1 },
            { name: 'trimEnd', arrity: 1 },
            { name: 'lowercase', arrity: 1 },
            { name: 'uppercase', arrity: 1 },
            { name: 'translate', arrity: 1 },
            { name: 'isEmail', arrity: 1 },
        ],
    },
    {
        label: 'Object',
        values: [
            { name: 'createObject', arrity: 2 },
            { name: 'getKeyValue', arrity: 2 },
            { name: 'compare', arrity: 2 },
            { name: 'keys', arrity: 1 },
            { name: 'omit', arrity: 2 },
            { name: 'pick', arrity: 2 },
            { name: 'setKeyValue', arrity: 3 },
            { name: 'values', arrity: 1 },
            { name: 'objectToArray', arrity: 1 },
        ],
    },
    {
        label: 'Date',
        values: [
            { name: 'now', arrity: 0, deprecated: true },
            { name: 'timestamp', arrity: 0, deprecated: true },
        ],
    },
    {
        label: 'File',
        values: [{ name: 'fileToUrl', arrity: 1 }],
    },
    {
        label: 'Utils',
        values: [{ name: 'toBool', arrity: 1 }],
    },
];
