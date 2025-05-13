<template>
    <Multiselect
        v-if="!isReadonly"
        ref="select"
        :key="componentKey"
        v-model="internalValue"
        class="ww-input-select"
        mode="single"
        :style="cssVariables"
        :class="{ editing: isEditing }"
        :classes="{ containerOpen: 'is-open', containerOpenTop: 'is-open-top' }"
        v-bind="selectProps"
        @close="checkIsOpen"
        @focus.capture="interceptFocus"
        @focusin.capture="interceptFocus"
    >
        <!-- Placeholder -->
        <template #placeholder>
            <wwElement
                class="multiselect-placeholder-el"
                v-bind="content.placeholderElement"
                :ww-props="{ text: placeholder || '' }"
            />
        </template>

        <!-- Tag selected with remove icon -->
        <template #singlelabel="{ value }">
            <div class="multiselect-single-label" :style="value.style || defaultOptionStyle">
                <wwLayoutItemContext
                    :index="value => getValueIndex(value)"
                    :item="{}"
                    is-repeat
                    :data="{ ...value, label: getLabel(value) }"
                >
                    <wwText class="multiselect-single-label-el" :text="getLabel(value)"></wwText>
                </wwLayoutItemContext>
            </div>
        </template>

        <!-- Tag unselected in list -->
        <template #option="{ option }">
            <wwLayoutItemContext
                :index="option => getOptionIndex(option)"
                :item="{}"
                is-repeat
                :data="{ ...option, label: getLabel(option) }"
            >
                <OptionItem
                    :option="{ ...option, label: getLabel(option) }"
                    :layoutType="content.layoutType"
                    :flexboxElement="content.flexboxElement"
                    :imageElement="content.imageElement"
                    :textElement="content.textElement"
                    @mousedown="isEditing && $event.stopPropagation()"
                    @click="isEditing && $event.stopPropagation()"
                />
            </wwLayoutItemContext>
        </template>

        <!-- Small triangle displayed on the right of the input -->
        <template #caret>
            <wwElement v-bind="content.caretIconElement" @mousedown="isEditing && $event.stopPropagation()" />
        </template>

        <!-- Clear icon shown when the input has at least one selected options -->
        <template #clear>
            <div @mousedown.stop :style="{ zIndex: 2 }">
                <wwElement v-bind="content.clearIconElement" @click="clear" />
            </div>
        </template>
    </Multiselect>
    <div v-else class="multiselect-single-label-readonly">
        <wwText :text="valueLabel"></wwText>
        <wwElement style="opacity: 0; pointer-events: none" v-if="internalValue" v-bind="content.clearIconElement" />
        <wwElement style="opacity: 0; pointer-events: none" v-bind="content.caretIconElement" />
    </div>
</template>

<script>
import Multiselect from '@vueform/multiselect';
import OptionItem from './OptionItem.vue';
import { computed, inject } from 'vue';

const DEFAULT_LABEL_FIELD = 'label';
const DEFAULT_VALUE_FIELD = 'value';

export default {
    components: { Multiselect, OptionItem },
    props: {
        uid: { type: String, required: true },
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['trigger-event', 'update:content', 'update:content:effect', 'add-state', 'remove-state'],
    setup(props) {
        const { value: currentSelection, setValue: setCurrentSelection } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            type: 'string',
            defaultValue: computed(() => props.content.initialValue ?? ''),
        });

        const styles = inject('componentStyle');

        const cursor = computed(() => styles.cursor);

        return { currentSelection, setCurrentSelection, cursor };
    },
    data: () => ({
        options: [],
        componentKey: 0,
    }),
    computed: {
        currentLang() {
            return wwLib.wwLang.lang;
        },
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        selectProps() {
            return {
                closeOnSelect: this.content.closeOnSelect,
                searchable: this.content.searchable,
                required: this.content.required,
                disabled: this.content.disabled,
                placeholder: 'placeholder',
                noOptionsText: this.content.noOptionsText,
                noResultsText: this.content.noResultsText,
                canClear: this.content.clearIcon,
                canDeselect: this.content.canDeselect,
                caret: this.content.caretIcon,
                name: this.wwElementState.name,
                options: this.options,
                infinite: this.content.infiniteScroll,
                limit: this.content.limitedOptions ? this.content.limit : -1,
                resolveOnLoad: false,
                locale: this.currentLang,
            };
        },
        internalValue: {
            get() {
                if (this.content.allowCreation) {
                    // we need to make available custom options before using them
                    if (this.currentSelection && !this.options.some(option => option.value === this.currentSelection)) {
                        this.options.push(this.formatOption(this.currentSelection));
                    }
                }

                return this.currentSelection;
            },
            set(value) {
                this.setCurrentSelection(value);
                this.$emit('trigger-event', { name: 'change', event: { domEvent: {}, value } });
            },
        },
        placeholder() {
            return wwLib.wwLang.getText(this.content.placeholder);
        },
        valueLabel() {
            const _option = this.options.find(option => option.value == this.internalValue);
            return _option ? wwLib.wwLang.getText(_option.label) : this.internalValue;
        },
        defaultOptionStyle() {
            return {
                backgroundColor: this.content.optionsDefaultBgColor,
                color: this.content.optionsDefaultTextColor,
            };
        },
        cssVariables() {
            return {
                '--ms-dropdown-bg': this.content.dropdownBackgroundColor,
                '--ms-dropdown-border-width': this.content.dropdownBorderWidth || '0px',
                '--ms-dropdown-border-color': this.content.dropdownBorderColor,
                '--ms-dropdown-radius': this.content.dropdownBorderRadius || '0px',
                '--ms-max-height': this.content.dropdownMaxHeight || '10rem',
                '--ms-option-bg-pointed': 'transparent',
                '--ms-option-bg-selected': 'transparent',
                '--ms-option-bg-selected-pointed': 'transparent',
                '--ms-option-color-pointed': '#000000',
                '--ms-option-color-selected': '#000000',
                '--ms-option-color-selected-pointed': '#000000',
                '--ms-ring-width': '0px',
                '--ms-ring-color': 'transparent',
                '--ms-spinner-color': this.content.loadingRingColor,
                '--search-font-size': this.content.searchFontSize || 'inherit',
                '--search-font-family': this.content.searchFontFamily || 'inherit',
                '--search-font-color': this.content.searchFontColor || 'inherit',
                '--component-cursor': this.cursor || 'pointer',
            };
        },
        isReadonly() {
            return this.wwElementState.props.readonly === undefined
                ? this.content.readonly
                : this.wwElementState.props.readonly;
        },
    },
    watch: {
        textStyle() {
            return wwLib.getTextStyleFromContent(this.content);
        },
        async 'content.initialValue'(value) {
            this.init();

            // await to avoid mismatch (multiselect not rendering custom tags)
            await this.$nextTick();
            this.setCurrentSelection(value);
            this.$emit('trigger-event', { name: 'initValueChange', event: { value } });
        },
        'content.options': {
            deep: true,
            handler() {
                this.init();
            },
        },
        'content.layoutType'() {
            this.init();
        },
        'content.labelField'() {
            this.init();
        },
        'content.valueField'() {
            this.init();
        },
        currentLang() {
            this.componentKey += 1;
            this.$nextTick(() => {
                this.init();
            });
        },
        isReadonly: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'readonly');
                } else {
                    this.$emit('remove-state', 'readonly');
                }
            },
        },
        'content.limit'() {
            this.componentKey += 1;
            this.$nextTick(() => {
                this.init();
            });
        },
    },
    created() {
        this.init();
    },
    methods: {
        async init() {
            // reset selection and option to avoid mismatch
            this.options = [];
            const initialOptions = Array.isArray(this.content.options) ? [...this.content.options] : [];
            this.options.push(...initialOptions.map(option => this.formatOption(option)));

            // add initial values as custom options if not already included
            if (
                this.content.initialValue !== undefined &&
                this.content.allowCreation &&
                !this.options.some(
                    option => option === this.content.initialValue || option.value === this.content.initialValue
                )
            ) {
                this.options.push(this.formatOption(this.content.initialValue));
            }
        },
        getValueIndex(value) {
            return this.options.findIndex(option => option.value === value.value);
        },
        getOptionIndex(option) {
            return this.options.indexOf(option);
        },
        formatOption(option) {
            const labelField = this.content.labelField || DEFAULT_LABEL_FIELD;
            const valueField = this.content.valueField || DEFAULT_VALUE_FIELD;

            let label = wwLib.resolveObjectPropertyPath(option, labelField);
            const value = wwLib.resolveObjectPropertyPath(option, valueField);

            if (typeof label !== 'object') {
                label = wwLib.resolveObjectPropertyPath(option, wwLib.wwLang.getText(labelField));
            }

            if (this.content.layoutType === 'free')
                return {
                    label,
                    value,
                    data: option,
                };

            return typeof option === 'object'
                ? {
                      label,
                      value,
                      image: wwLib.resolveObjectPropertyPath(option, 'image'),
                      style: {
                          backgroundColor: wwLib.resolveObjectPropertyPath(option, 'bgColor') || '#FFFFFF00',
                          color: wwLib.resolveObjectPropertyPath(option, 'textColor') || '#000000',
                      },
                      data: option,
                  }
                : {
                      // to allow flat array / option
                      label: option,
                      value: option,
                  };
        },
        getLabel(option) {
            if (!option || option.label === undefined || option.label === null) return '';
            return `${wwLib.wwLang.getText(option.label)}`;
        },
        handleOpening(value) {
            if (!this.$refs.select) return;

            if (value) this.$refs.select.open();
            else this.$refs.select.close();
        },
        checkIsOpen() {
        },
        clear() {
            if (!this.isEditing) this.internalValue = '';
        },
        interceptFocus(event) {
            if (!this.isEditing) return;
            if (event.target.classList.contains('multiselect-wrapper')) {
                event.stopPropagation();
                event.preventDefault();
            }
        },
    },
};
</script>

<style src="@vueform/multiselect/themes/default.css"></style>

<style type="scss" scoped>
/* We need to use multiselect classname  */
.ww-input-select {
    cursor: var(--component-cursor);
    --ms-bg: transparent;

    --ms-border-width: 0px;
    position: relative;
    width: initial; /* to avoid the width 100% from the library */

    &.is-active {
        box-shadow: unset;
    }
}
.ww-input-select:deep(.multiselect-wrapper) {
    cursor: var(--component-cursor);
    height: inherit;
    min-height: unset;
}
.ww-input-select:deep(.multiselect-search) {
    font-size: var(--search-font-size);
    font-family: var(--search-font-family);
    color: var(--search-font-color);
    padding: 0px !important;
}

.ww-input-select:deep(.multiselect-single-label) {
    position: relative !important;
    line-height: inherit !important;
    width: inherit;
    padding: 0px !important;
    overflow: hidden;
}
.multiselect-single-label-readonly {
    position: relative;
    line-height: inherit;
    width: initial;
    transition: none;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.ww-input-select:deep(.multiselect-single-label-el) {
    width: inherit;
}
.ww-input-select:deep(.multiselect-option) {
    padding: 0px !important;
    width: 100%;
}
.ww-input-select:deep(.multiselect-placeholder-el) {
    flex-grow: 1;
    width: 100%;
}
.ww-input-select:deep(.multiselect-dropdown) {
    overflow-y: auto;
}


/* wwFront:start */
.ww-input-select:deep(.multiselect-placeholder-el) {
    pointer-events: none;
}
/* wwFront:end */

.ww-input-select:deep(.image-text-layout) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.ww-input-select:deep(.free-layout) {
    width: 100%;
}
.ww-input-select.is-disabled {
    overflow: hidden;
    border-radius: inherit;
}
</style>
