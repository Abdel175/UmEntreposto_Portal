<template>
    <div>
        <DatePicker
            ref="wwDatePicker"
            class="ww-date-time-picker"
            :class="[
                { 'calendar-only': content.enableCalendarOnly },
                content.enableCalendarOnly && content.calendarOnlyFit,
            ]"
            :day-names="customDayNames"
            :model-value="formatedValue"
            @update:model-value="handleSelection"
            :format-locale="formatLocale"
            :format="previewFormat"
            :clearable="false"
            :locale="locale"
            :time-picker="content.dateMode === 'time'"
            :month-picker="content.dateMode === 'month'"
            :year-picker="content.dateMode === 'year'"
            :week-picker="content.dateMode === 'week'"
            :range="content.selectionMode === 'range'"
            :multi-dates="content.selectionMode === 'multi'"
            :multi-dates-limit="content.multiDatesLimit ? content.multiDatesLimit : null"
            :auto-range="content.rangeMode === 'auto' ? content.autoRange : null"
            :partial-range="
                content.enableCalendarOnly && content.rangeMode === 'free'
                    ? true
                    : content.rangeMode === 'free'
                    ? content.enablePartialRange
                    : null
            "
            :min-range="content.rangeMode === 'minmax' ? content.minRange : null"
            :max-range="content.rangeMode === 'minmax' ? content.maxRange : null"
            :multi-calendars="content.enableMultiCalendars ? content.multiCalendars : false"
            :multi-calendars-solo="content.multiCalendarsSolo"
            :inline="content.enableCalendarOnly"
            :vertical="content.orientation === 'vertical'"
            :enable-time-picker="content.dateMode === 'datetime' || content.dateMode === 'time'"
            :enable-seconds="content.enableSeconds"
            :is-24="content.use24"
            :autoApply="content.autoApply"
            :close-on-auto-apply="content.closeOnAutoApply"
            :flow="content.enableFlow ? content.flowSteps : null"
            :timezone="timezone"
            :week-numbers="content.weekNumbers === 'none' ? null : content.weekNumbers"
            :hide-offset-dates="content.hideOffsetDates"
            :min-date="content.minDate"
            :max-date="content.maxDate"
            :prevent-min-max-navigation="content.preventMinMaxNavigation"
            :start-date="content.startDate"
            :week-start="content.weekStart"
            :ignore-time-validation="content.ignoreTimeValidation"
            :disable-month-year-select="content.disableMonthYearSelect"
            :allowed-dates="content.allowedDates"
            :disabled-dates="content.disabledDates"
            :disabled-week-days="content.disabledWeekDays"
            :no-disabled-range="content.noDisabledRange"
            :model-type="modelType"
            :position="content.menuPosition || 'center'"
            :teleport=" (content.enableCalendarOnly || content.stickedDatePicker) ? null : body"
            :dpStyle="{ ...themeStyle }"
            :readonly="isReadOnly || isEditing"
            :key="dpKey"
        >
            <template #dp-input="{ value }">
                <wwLayoutItemContext
                    :index="0"
                    :item="null"
                    :data="{ preview: value, value: formatOutputValue(formatedValue) }"
                    is-repeat
                >
                    <wwLayout path="triggerZone" />
                </wwLayoutItemContext>
            </template>
            <template #action-select>
                <wwElement v-bind="content.actionSelectElement" @click="selectDate" />
            </template>
            <template #left-sidebar v-if="content.enableLeftSidebar">
                <wwLayout path="leftSidebarZone" />
            </template>
            <template #right-sidebar v-if="content.enableRightSidebar">
                <wwLayout path="rightSidebarZone" />
            </template>
        </DatePicker>
        <input class="required-handler" type="text" :required="content.required" :value="formatedValue" />
    </div>
</template>

<script>
import DatePicker from "./vue-datepicker.js";
import * as DateFnsLocal from 'date-fns/locale';
import "./main.css";
import { computed, ref } from "vue";

export default {
    components: {
        DatePicker,
    },
    emits: ["update:content", "add-state", "remove-state", "trigger-event"],
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
    },
    setup(props) {
        const initValue = computed(() =>
            props.content.selectionMode === "single"
                ? props.content.initValueSingle || null
                : props.content.selectionMode === "range"
                ? {
                      start: props.content.initValueRangeStart || null,
                      end: props.content.initValueRangeEnd || null,
                  }
                : Array.isArray(props.content.initValueMulti)
                ? props.content.initValueMulti
                : []
        );
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: "value",
            defaultValue: initValue,
        });

        const body = wwLib.getFrontDocument().body;

        const wwDatePicker = ref(null);
        const selectDate = () => {
            wwDatePicker.value.selectDate();
        };

        return {
            variableValue,
            setValue,
            body,
            initValue,
            wwDatePicker,
            selectDate,
        };
    },
    watch: {
        initValue(newValue, oldValue) {
            if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return;
            this.setValue(newValue);
            this.$emit("trigger-event", {
                name: "initValueChange",
                event: { value: newValue },
            });
        },
        isReadOnly: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit("add-state", "readonly");
                } else {
                    this.$emit("remove-state", "readonly");
                }
            },
        },
    },
    computed: {
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        /* https://github.com/date-fns/date-fns/blob/main/docs/unicodeTokens.md */
        previewFormat() {
            const format = this.content.format === "custom" ? this.content.customFormat : this.content.format;
            if (!format) return null;
            return format.replace(/Y/g, "y").replace(/D/g, "d").replace(/A/g, "a");
        },
        formatedValue() {
            return this.formatInputValue(this.variableValue);
        },
        locale() {
            if (this.content.lang === "pageLang") {
                return wwLib.wwLang.lang;
            }

            return this.content.lang;
        },
        formatLocale() {
            try {
                return DateFnsLocal[this.locale];
            } catch (e) {
                return "en";
            }
        },
        timezone() {
            if (!this.content.timezone || this.content.timezone === "locale") return null;
            return this.content.timezone;
        },
        dpKey() {
            return (
                this.content.selectionMode +
                "-" +
                this.content.dateMode +
                "-" +
                (this.content.menuPosition || "center") +
                (this.content.enableCalendarOnly ? "-only" : "") +
                (this.content.enableRightSidebar ? "-rightside" : "") +
                (this.content.enableLeftSidebar ? "-leftside" : "")
            );
        },
        modelType() {
            if (this.content.dateMode === "date") return "yyyy-MM-dd";
            if (this.content.dateMode === "time") return "HH:mm:SS";
            if (this.content.dateMode === "month") return "yyyy-MM";
            return null;
        },
        isReadOnly() {
            return this.wwElementState.props.readonly === undefined
                ? this.content.readonly
                : this.wwElementState.props.readonly;
        },
        customDayNames() {
            if (this.locale == "ar") {
                /*
                    Sun - أحد (Ahad)
                    Mon - إثن (Ithn)
                    Tue - ثلاث (Thulath)
                    Wed - أربع (Arba')
                    Thu - خمس (Khams)
                    Fri - جمعة (Jumu'ah)
                    Sat - سبت (Sabt)
                */
                const arDayList = ['أحد','إثن','ثلاث','أربع','خمس','جمعة','سبت'];
                const weekStartIndex = this.content.weekStart; // 0 to 6
                return arDayList.slice(weekStartIndex).concat(arDayList.slice(0, weekStartIndex));
            }
            return null;
        },
        themeStyle() {
            return {
                // COLORS
                "--dp-background-color": this.content.themeBackgroundColor,
                "--dp-text-color": this.content.themeTextColor,
                "--dp-hover-color": this.content.themeHoverColor,
                "--dp-hover-text-color": this.content.themeHoverTextColor,
                "--dp-hover-icon-color": this.content.themeHoverIconColor,
                "--dp-primary-color": this.content.themePrimaryColor,
                "--dp-primary-text-color": this.content.themePrimaryTextColor,
                "--dp-secondary-color": this.content.themeSecondaryColor,
                "--dp-border-color": this.content.themeBorderColor,
                "--dp-menu-border-color": this.content.themeMenuBorderColor,
                "--dp-border-color-hover": this.content.themeBorderHoverColor,
                "--dp-disabled-color": this.content.themeDisabledColor,
                "--dp-scroll-bar-background": this.content.themeScrollBarBackgroundColor,
                "--dp-scroll-bar-color": this.content.themeMScrollBarColor,
                "--dp-success-color": this.content.themeSuccessColor,
                "--dp-success-color-disabled": this.content.themeSuccessDisabledColor,
                "--dp-icon-color": this.content.themeIconColor,
                "--dp-danger-color": this.content.themeDangerColor,
                "--dp-highlight-color": this.content.themeHighlightColor,
                // GENERAL
                "--dp-font-family": this.content.themeFontFamily || "unset",
                "--dp-border-radius": this.content.themeBorderRadius,
                "--dp-cell-border-radius": this.content.themeCellBorderRadius,
                "--dp-font-size": this.content.themeFontSize,
                "--dp-preview-font-size": this.content.themePreviewFontSize,
                "--dp-time-font-size": this.content.themeTimeFontSize,
                "--dp-cell-size": this.content.themeCellSize,
                "--dp-cell-padding": this.content.themeCellPadding,
                "--dp-menu-min-width": this.content.themeMenuMinWidth,
            };
        },
    },
    methods: {
        handleSelection(value) {
            if (this.content.dateMode === "datetime" && value) {
                value = Array.isArray(value)
                    ? value.map((date) => (date ? date.toISOString() : null))
                    : value.toISOString();
            }
            const newValue = this.formatOutputValue(value);
            if (JSON.stringify(this.variableValue) === JSON.stringify(newValue)) return;
            this.setValue(newValue);
            this.$emit("trigger-event", {
                name: "change",
                event: { value: newValue },
            });
        },
        formatInputValue(value) {
            if (!value) return null;
            else if (this.content.selectionMode === "single") return value;
            else if (this.content.selectionMode === "range") return [value.start, value.end].filter((value) => value);
            else if (this.content.selectionMode === "multi") return value;
        },
        formatOutputValue(value) {
            if (!value) return null;
            else if (this.content.selectionMode === "single") return value;
            else if (this.content.selectionMode === "range") return { start: value[0], end: value[1] };
            else if (this.content.selectionMode === "multi") return value;
        },
        clearValue() {
            const clearValue = this.content.selectionMode === "single"
                ? null
                : this.content.selectionMode === "range"
                ? {
                      start: null,
                      end: null,
                  }
                : []
            this.setValue(clearValue);
        },
    },
};
</script>

<style>
.dp__action_row {
    width: 100% !important;
}
</style>

<style lang="scss" scoped>
.calendar-only.stretch::v-deep .dp__outer_menu_wrap {
    width: 100% !important;
}
.calendar-only.center {
    justify-content: center;
}
.required-handler {
    opacity: 0;
    width: 100%;
    height: 0;
    position: absolute;
    pointer-events: none;
}
</style>
