<template>
    <div
        class="ww-input-file-drop"
        @click="openFileExplorer"
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragleave.prevent
        @dragover="onDragOver"
        @drop.prevent="drop($event)"
    >
        <wwLayout class="ww-input-file-drop__layout" path="layout" />
        <input
            ref="inputFile"
            :value="localValue"
            class="ww-input-file-drop__input"
            type="file"
            :name="wwElementState.name"
            :required="required"
            :readonly="isReadonly"
            :multiple="content.multiple"
            :accept="accept"
            @input="handleManualInput($event)"
        />
    </div>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
        uid: { type: String, required: true },
        wwElementState: { type: Object, required: true },
    },
    emits: ['trigger-event', 'add-state', 'remove-state'],
    setup(props) {
        const { value: variableValue, setValue } = wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'value',
            defaultValue: null,
            componentType: 'element',
            type: 'file',
            readonly: true,
            resettable: true,
        });

        wwLib.wwVariable.useComponentVariable({
            uid: props.uid,
            name: 'progress',
            defaultValue: 0,
            componentType: 'element',
            type: 'number',
            readonly: true,
        });

        return { variableValue, setValue };
    },
    data() {
        return {
            isDragging: false,
        };
    },
    computed: {
        required() {
            return this.content.required && !this.variableValue;
        },
        isEditing() {
            // eslint-disable-next-line no-unreachable
            return false;
        },
        value() {
            return this.variableValue;
        },
        accept() {
            switch (this.content.accept) {
                case 'image':
                    return 'image/*';
                case 'video':
                    return 'video/*';
                case 'audio':
                    return 'audio/*';
                case 'pdf':
                    return '.pdf';
                case 'csv':
                    return '.csv';
                case 'excel':
                    return '.xls,.xlsb,.xlsm,.xlsx';
                case 'word':
                    return '.doc,.docm,.docx';
                case 'json':
                    return '.json';
                case 'custom':
                    return this.content.acceptCustom;
                case 'any':
                default:
                    return '';
            }
        },
        isReadonly() {
            return this.wwElementState.props.readonly === undefined
                ? this.content.readonly
                : this.wwElementState.props.readonly;
        },
    },
    watch: {
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
        isDragging: {
            immediate: true,
            handler(value) {
                if (value) {
                    this.$emit('add-state', 'drop');
                } else {
                    this.$emit('remove-state', 'drop');
                }
            },
        },
    },
    methods: {
        drop(event) {
            this.isDragging = false;

            const blobs = event.dataTransfer?.files;

            if (!blobs) return;
            const files = [...blobs].map(
                blob =>
                    new File([blob], blob.name, {
                        type: blob.type,
                    })
            );
            const validFiles = files.filter(file => {
                if (!this.accept) {
                    return true;
                } else {
                    const types = this.accept.split(',');
                    for (const type of types) {
                        if (file.name.trim().toLowerCase().endsWith(type.trim())) {
                            return true;
                        }
                        if (file.type.trim().toLowerCase() === type.replace(".","").trim()) {
                            return true;
                        }
                    }
                }
                return false;
            });

            const invalidFiles = files.filter(file => !validFiles.includes(file));

            if (invalidFiles.length) {
                const isMultiple = this.content.multiple;
                this.$emit('trigger-event', {
                    name: 'invalidFile',
                    event: { domEvent: event, value: isMultiple ? invalidFiles : invalidFiles[0] },
                });
            }

            this.handleFiles(event, validFiles);
        },
        handleManualInput(event) {
            this.handleFiles(event, [...this.$refs['inputFile'].files]);
        },
        handleFiles(event, files) {
            if (!files || !files.length) return;
            const isMultiple = this.content.multiple;
            this.setValue(isMultiple ? files : files[0]);
            this.$emit('trigger-event', {
                name: 'change',
                event: { domEvent: event, value: isMultiple ? files : files[0] },
            });
        },
        openFileExplorer() {
            if (this.isEditing || this.isReadonly) return;
            this.$refs['inputFile'].click();
        },
        onDragEnter(event) {
            if (this.isEditing || this.isReadonly) return;
            event.preventDefault();
            event.stopPropagation();

            this.isDragging = true;
        },
        onDragLeave(event) {
            if (this.isEditing || this.isReadonly) return;
            event.preventDefault();
            event.stopPropagation();

            this.isDragging = false;
        },
        onDragOver(event) {
            if (this.isEditing || this.isReadonly) return;
            event.preventDefault();
            event.stopPropagation();
        },
    },
};
</script>

<style lang="scss" scoped>
.ww-input-file-drop {
    align-items: center;
    &__layout {
        width: 100%;
    }
    &__input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
    }
}
</style>
