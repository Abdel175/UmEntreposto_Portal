import { inject } from 'vue';
import { evaluateCode, evaluateFormula, getValue } from '@/_common/helpers/code/customCode.js';

export default {
    /**
     * @PUBLIC_API
     */
    getValue,

    /**
     * @PUBLIC_API
     */
    useFormula() {
        const bindingContext = inject('bindingContext', null);
        const localContext = inject('_wwLocalContext', null);

        const resolveMappingFormula = (formula, mappingContext = null, defaultValue = null) => {
            if (!formula || !formula.code || !formula.type) return defaultValue;
            const evaluate = formula.type === 'f' ? evaluateFormula : evaluateCode;
            try {
                const result = evaluate({ code: formula.code }, { mapping: mappingContext, item: bindingContext });
                return result.value;
            } catch (error) {
                return defaultValue;
            }
        };

        const resolveFormula = (formula, defaultValue = null) => {
            try {
                const evaluate = formula.type === 'f' ? evaluateFormula : evaluateCode;
                return evaluate(
                    { code: formula.code },
                    { item: bindingContext, local: { data: localContext.value.data } }
                );
            } catch (error) {
                return defaultValue;
            }
        };

        // Experimental
        const resolveMapping = (data, map = {}, defaultMap = {}) => {
            if (!Array.isArray(data) || !map) return [];
            return data.map((rawData, index) => ({
                rawData,
                ...defaultMap,
                ...Object.keys(map).reduce(
                    (result, key) => ({
                        ...result,
                        [key]: this.resolveMappingFormula(map[key], { rawData, index }, defaultMap[key]),
                    }),
                    {}
                ),
            }));
        };
        return { resolveMappingFormula, resolveFormula, resolveMapping };
    },
};
