import { isObject } from 'lodash';
import { computed } from 'vue';
import { _wwFormulas } from '@/_common/helpers/code/wwFormulas';

const ERROR_CODES = {
    UNEXPECTED_END_OF_FORMULA: "Unexpected token ';'",
};

export const _collections = computed(() => {
    const collections = wwLib.$store.getters['data/getCollections'];
    return Object.keys(collections).reduce((obj, key) => {
        const item = collections[key];
        obj[item.name] = item;
        obj[key] = item;
        return obj;
    }, {});
});

export const _formulas = computed(() =>
    Object.values(wwLib.$store.getters['data/getFormulas']).reduce((obj, item) => {
        obj[item.name] = obj[item.id] = (...args) => {
            const __wwParameters = (item.parameters || []).map(parameter => parameter.name || '');
            const __wwClosureParameters = ['__wwItem', ...__wwParameters];
            // eslint-disable-next-line no-unused-vars
            const __wwargs = [item, ...args];
            return eval(`
            (function(${__wwClosureParameters.join(', ')}) {
                return getValue(
                    {...__wwItem, __wwtype: __wwItem.type},
                    {},
                    { recursive: false, args: {names: '${__wwParameters.join(', ')}', value: args } }
                );
            })(...__wwargs)`);
        };
        return obj;
    }, {})
);

export const _pluginFormulas = computed(() => {
    return Object.values(wwLib.$store.getters['data/getPluginFormulas']).reduce((obj, item) => {
        if (!obj[item.pluginId]) obj[item.pluginId] = {};
        const plugin = wwLib.wwPlugins[item.pluginId];
        obj[item.pluginId][item.name] = (...args) => plugin[item.name].call(plugin, ...args);
        return obj;
    }, {});
});

// eslint-disable-next-line no-unused-vars
export function evaluateCode({ code, filter, sort, __wwmap }, context, event, args) {
 
    // eslint-disable-next-line no-unused-vars
    const plugins = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const collections = _collections.value;
    // eslint-disable-next-line no-unused-vars
    const formulas = _formulas.value;
    // eslint-disable-next-line no-unused-vars
    const pluginFormulas = _pluginFormulas.value;
    // eslint-disable-next-line no-unused-vars
    const wwFormulas = _wwFormulas;
    // eslint-disable-next-line no-unused-vars
    const variables = wwLib.globalVariables.customCodeVariables;
    // eslint-disable-next-line no-unused-vars
    const pluginVariables = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const globalContext = wwLib.globalContext;

    try {
        const rawValue = eval(`(function (${args?.names || ''}) {${code}\n})(...(args?.value || []))`);
        return mapFilterSortData(rawValue, filter, sort, __wwmap, context, event, args);
    } catch (error) {
        return { error };
    }
}

// eslint-disable-next-line no-unused-vars
export async function executeCode(code, context, event, wwUtils) {
 
    // eslint-disable-next-line no-unused-vars
    const plugins = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const collections = _collections.value;
    // eslint-disable-next-line no-unused-vars
    const formulas = _formulas.value;
    // eslint-disable-next-line no-unused-vars
    const pluginFormulas = _pluginFormulas.value;
    // eslint-disable-next-line no-unused-vars
    const wwFormulas = _wwFormulas;
    // eslint-disable-next-line no-unused-vars
    const variables = wwLib.globalVariables.customCodeVariables;
    // eslint-disable-next-line no-unused-vars
    const pluginVariables = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const globalContext = wwLib.globalContext;

    try {
        return await eval(`(async function () {${code}\n})()`);
    } catch (error) {
        wwLib.wwLog.error(error);
        delete error.stack;
        throw error;
    }
}

// eslint-disable-next-line no-unused-vars
export function evaluateFormula({ code, filter, sort, __wwmap }, context, event, args) {
 
    // eslint-disable-next-line no-unused-vars
    const plugins = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const collections = _collections.value;
    // eslint-disable-next-line no-unused-vars
    const formulas = _formulas.value;
    // eslint-disable-next-line no-unused-vars
    const pluginFormulas = _pluginFormulas.value;
    // eslint-disable-next-line no-unused-vars
    const wwFormulas = _wwFormulas;
    // eslint-disable-next-line no-unused-vars
    const variables = wwLib.globalVariables.customCodeVariables;
    // eslint-disable-next-line no-unused-vars
    const pluginVariables = wwLib.wwPlugins;
    // eslint-disable-next-line no-unused-vars
    const globalContext = wwLib.globalContext;

    try {
        const rawValue = eval(`(function (${args?.names || ''}) {return ${code}\n;})(...(args?.value || []))`);
        return mapFilterSortData(rawValue, filter, sort, __wwmap, context, event, args);
    } catch (error) {
        if (error.message) {
            let errorMessage = error.message;
            switch (error.message) {
                case ERROR_CODES.UNEXPECTED_END_OF_FORMULA:
                    errorMessage = 'Unexpected end of formula';
            }
            return { error: errorMessage };
        } else return { error };
    }
}

export function evaluateGlobalFormula(__wwformula, __wwcontext, parameters) {
    const __wwnames = parameters.map(parameter => parameter.label).join(', ');
    // eslint-disable-next-line no-unused-vars
    function evaluate(...args) {
        return eval(`
                (function(${__wwnames}) {
                    return ${__wwformula.type === 'f' ? 'evaluateFormula' : 'evaluateCode'}(
                        __wwformula,
                        __wwcontext,
                        null,
                        { names: '${__wwnames}', value: args }
                    );
                })(...args)`);
    }

    try {
        const args = parameters.map(parameter => parameter.value);
        return evaluate(...args);
    } catch (error) {
        if (error.message) {
            let errorMessage = error.message;
            switch (error.message) {
                case ERROR_CODES.UNEXPECTED_END_OF_FORMULA:
                    errorMessage = 'Unexpected end of formula';
            }
            return { error: errorMessage };
        } else return { error };
    }
}

function mapFilterSortData(rawValue, filter, sort, __wwmap, context, event, args) {
    let value = rawValue;
    if (Array.isArray(value)) {
        let data = value; // TODO: remove this when no side effects are expected
        if (__wwmap) data = mapData(value, __wwmap, context, event, args);
        if (filter) data = filterData(data, filter, context, event, args);
        if (sort) data = sortData([...data], sort, context, event, args);
        return { value: data, rawValue };
    } else if (isObject(value) && Array.isArray(value.data) && value.type === 'collection') {
        let data = value.data; // TODO: remove this when no side effects are expected
        if (__wwmap) data = mapData(value.data, __wwmap, context, event, args);
        if (filter) data = filterData(data, filter, context, event, args);
        if (sort) data = sortData([...data], sort, context, event, args);
        return { value: { ...value, data, total: data.length }, rawValue };
    }
    return { value, rawValue };
}

export function getJsValue({ code, filter, sort, __wwmap }, context, event, args) {
    const { value } = evaluateCode({ code, filter, sort, __wwmap }, context, event, args);
    return value;
}
export function getFormulaValue({ code, filter, sort, __wwmap }, context, event, args) {
    const { value } = evaluateFormula({ code, filter, sort, __wwmap }, context, event, args);
    return value;
}

export function sortData(data, sort, context, event, args) {
    if (!Array.isArray(data)) return data;
    const computedSort = getValue(sort, context, { event, args });
    data.sort((a, b) => {
        for (const elem of computedSort) {
            let result = 0;

            const _a = a?.[elem.key];
            const _b = b?.[elem.key];

            let type = _a === null || _a === undefined ? (_b === null ? 'undefined' : typeof _b) : typeof _a;
            switch (type) {
                case 'boolean':
                    result = _a == _b ? 0 : _a ? 1 : -1;
                    break;
                case 'string':
                    result = (_a || '').localeCompare(_b || '');
                    break;
                case 'number':
                    result = (_a || 0) > (_b || 0) ? 1 : (_a || 0) < (_b || 0) ? -1 : 0;
                    break;
                case 'object':
                    result = JSON.stringify(_a || {}).localeCompare(JSON.stringify(_b || {}));
                    break;
                case 'undefined':
                    if (_a === _b) {
                        result = 0;
                    } else if (_a === undefined) {
                        result = -1;
                    } else {
                        result = 1;
                    }
                    break;
            }
            if (elem.direction === 'DESC' && result) result *= -1;
            if (result) return result;
        }
        return 0;
    });

    return data;
}

function filterDataElem(elem, filter) {
    if (!isObject(filter)) return true;
    if (filter.if === false) return null;
    if (!filter.conditions || !filter.conditions.length) return null;
    if (!elem) return false;

    const filteredConditions = filter.conditions.filter(
        condition => !(condition.isEmptyIgnored && wwLib.wwUtils.isEmpty(condition.value))
    );

    let result = null;
    for (const condition of filteredConditions) {
        let rCondition = null;
        if (condition.link) {
            rCondition = filterDataElem(elem, condition);
        } else {
            switch (condition.operator) {
                case '$eq':
                    rCondition = elem[condition.field] === condition.value;
                    break;
                case '$ne':
                    rCondition = elem[condition.field] !== condition.value;
                    break;
                case '$lt':
                    rCondition = elem[condition.field] < condition.value;
                    break;
                case '$gt':
                    rCondition = elem[condition.field] > condition.value;
                    break;
                case '$lte':
                    rCondition = elem[condition.field] <= condition.value;
                    break;
                case '$gte':
                    rCondition = elem[condition.field] >= condition.value;
                    break;
                case '$iLike:contains':
                    if (typeof elem[condition.field] !== 'string' && typeof condition.value === 'string') {
                        rCondition = JSON.stringify(elem[condition.field] || '')
                            .toLowerCase()
                            .includes(condition.value.toLowerCase());
                    } else if (typeof condition.value === 'string') {
                        rCondition = elem[condition.field].toLowerCase().includes(condition.value.toLowerCase());
                    } else {
                        rCondition = false;
                    }
                    break;
                case '$notILike:contains':
                    if (typeof elem[condition.field] !== 'string' && typeof condition.value === 'string') {
                        rCondition = !JSON.stringify(elem[condition.field] || '')
                            .toLowerCase()
                            .includes(condition.value.toLowerCase());
                    } else if (typeof condition.value === 'string') {
                        rCondition = !elem[condition.field].toLowerCase().includes(condition.value.toLowerCase());
                    } else {
                        rCondition = false;
                    }
                    break;
                case '$iLike:startsWith':
                    rCondition =
                        typeof elem[condition.field] === 'string' && typeof condition.value === 'string'
                            ? elem[condition.field].toLowerCase().startsWith(condition.value.toLowerCase())
                            : false;
                    break;
                case '$iLike:endsWith':
                    rCondition =
                        typeof elem[condition.field] === 'string' && typeof condition.value === 'string'
                            ? elem[condition.field].toLowerCase().endsWith(condition.value.toLowerCase())
                            : false;
                    break;
                case '$eq:null':
                    rCondition =
                        elem[condition.field] == null ||
                        elem[condition.field] === '' ||
                        (isObject(elem[condition.field]) && !Object.keys(elem[condition.field]).length) ||
                        (Array.isArray(elem[condition.field]) && !elem[condition.field].length);
                    break;
                case '$ne:null':
                    rCondition =
                        elem[condition.field] != null &&
                        elem[condition.field] !== '' &&
                        (!isObject(elem[condition.field]) || !!Object.keys(elem[condition.field]).length) &&
                        (!Array.isArray(elem[condition.field]) || !!elem[condition.field].length);
                    break;
                case '$in':
                    rCondition = Array.isArray(condition.value) && condition.value.includes(elem[condition.field]);
                    break;
                case '$notIn':
                    rCondition = Array.isArray(condition.value) && !condition.value.includes(elem[condition.field]);
                    break;
                case '$overlap':
                    rCondition =
                        Array.isArray(condition.value) &&
                        Array.isArray(elem[condition.field]) &&
                        condition.value.some(val => elem[condition.field].includes(val));
                    break;
                case '$notOverlap':
                    rCondition =
                        Array.isArray(condition.value) &&
                        Array.isArray(elem[condition.field]) &&
                        !condition.value.some(val => elem[condition.field].includes(val));
                    break;
                case '$contains':
                    rCondition =
                        Array.isArray(condition.value) &&
                        Array.isArray(elem[condition.field]) &&
                        condition.value.every(val => elem[condition.field].includes(val));
                    break;
                case '$has':
                    rCondition = elem[condition.field]?.[condition.value] != null;
                    break;
                case '$hasNot':
                    rCondition = elem[condition.field]?.[condition.value] == null;
                    break;
                case '$match':
                    rCondition =
                        stringToRegex(condition.value) && stringToRegex(condition.value).test(elem[condition.field]);
                    break;
                case '$notMatch':
                    rCondition =
                        stringToRegex(condition.value) && !stringToRegex(condition.value).test(elem[condition.field]);
                    break;
            }
        }

        if (rCondition === null) continue;
        else if (result === null) result = rCondition;
        else result = filter.link === '$or' ? result || rCondition : result && rCondition;
    }

    return result;
}

function stringToRegex(str) {
    if (!str) return;
    const main = str.match(/\/(.+)\/.*/) && str.match(/\/(.+)\/.*/)[1] ? str.match(/\/(.+)\/.*/)[1] : '';
    const options = str.match(/\/.+\/(.*)/) && str.match(/\/.+\/(.*)/)[1] ? str.match(/\/.+\/(.*)/)[1] : '';

    return new RegExp(main, options);
}

export function filterData(data, filter, context, event, args) {
    if (!Array.isArray(data)) return data;
    const computedFilter = getValue(filter, context, { event, args });
    return data.filter(elem => {
        const result = filterDataElem(elem, computedFilter);
        return result === null || result;
    });
}

function mapData(data, __wwmap, context, event, args) {
    if (!Array.isArray(data)) return data;
    return data.map((elem, index) => {
        const mappedElem = {};
        Object.keys(__wwmap).forEach(key => {
            mappedElem[key] = getValue(__wwmap[key], { ...context, mapping: { value: elem, index } }, { event, args });
        });
        return mappedElem;
    });
}

export function getValue(rawValue, context, { event, recursive = true, defaultUndefined, args } = {}) {
    if (rawValue === undefined) return _.cloneDeep(defaultUndefined);
    if (!rawValue) return rawValue;

    if (rawValue.__wwtype === 'd') {
        return rawValue.data.map(raw => getValue(raw, context, { event, args }));
    } else if (rawValue.__wwtype === 'f') {
        return getFormulaValue(
            { code: rawValue.code, filter: rawValue.filter, sort: rawValue.sort, __wwmap: rawValue.__wwmap },
            context || {},
            event,
            args
        );
    } else if (rawValue.__wwtype === 'js') {
        return getJsValue(
            { code: rawValue.code, filter: rawValue.filter, sort: rawValue.sort, __wwmap: rawValue.__wwmap },
            context || {},
            event,
            args
        );
    } else if (Array.isArray(rawValue) && recursive) {
        return rawValue.map(raw => getValue(raw, context, { event, args }));
    } else if (typeof rawValue === 'object' && recursive) {
        const value = {};
        Object.keys(rawValue).forEach(key => {
            value[key] = getValue(rawValue[key], context, { event, args });
        });
        return value;
    } else {
        return rawValue;
    }
}
