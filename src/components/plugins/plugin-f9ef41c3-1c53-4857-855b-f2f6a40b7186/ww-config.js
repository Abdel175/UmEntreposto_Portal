export default {
    features: {
        datasource: true,
    },
    editor: {
        settings: [
            {
                label: 'Connection',
                icon: 'advanced',
                edit: () => import('./src/components/Configuration/ConnectionEdit.vue'),
                summary: () => import('./src/components/Configuration/ConnectionSummary.vue'),
                getIsValid(settings) {
                    return !!settings.privateData.accessToken || settings.privateData.connectionMode === 'custom';
                },
                onSave: 'onSave',
            },
            {
                label: 'Configuration',
                icon: 'advanced',
                edit: () => import('./src/components/Configuration/SettingsEdit.vue'),
                summary: () => import('./src/components/Configuration/SettingsSummary.vue'),
                getIsValid(settings) {
                    return !!settings.publicData.projectUrl && !!settings.publicData.apiKey;
                },
                onSave: 'onSave',
            },
            {
                label: 'Realtime collections',
                icon: 'data',
                edit: () => import('./src/components/Realtime/SettingsEdit.vue'),
                summary: () => import('./src/components/Realtime/SettingsSummary.vue'),
                getIsValid(settings) {
                    return !!settings.publicData.realtimeTables;
                },
            },
        ],
        collection: {
            edit: () => import('./src/components/Collection/CollectionEdit.vue'),
            summary: () => import('./src/components/Collection/CollectionSummary.vue'),
            getIsValid({ table }) {
                return !!table;
            },
            modes: ['dynamic'],
            queryConfig: {
                hasNativePagination: true,
                hasNativeSort: true,
                hasNativeFilter: true,
                filterOperators: [
                    { label: 'Is', value: '$eq', acceptedTypes: ['string', 'boolean'] },
                    { label: 'Is not', value: '$ne', acceptedTypes: ['string', 'boolean'] },
                    { label: '=', value: '$eq', acceptedTypes: ['number'] },
                    { label: '≠', value: '$ne', acceptedTypes: ['number'] },
                    { label: '<', value: '$lt', acceptedTypes: ['number', 'string'] },
                    { label: '>', value: '$gt', acceptedTypes: ['number', 'string'] },
                    { label: '≤', value: '$lte', acceptedTypes: ['number', 'string'] },
                    { label: '≥', value: '$gte', acceptedTypes: ['number', 'string'] },
                    {
                        label: 'Contains',
                        value: '$iLike:contains',
                        acceptedTypes: ['string'],
                        defaultValue: '',
                    },
                    {
                        label: 'Does not contains',
                        value: '$notILike:contains',
                        acceptedTypes: ['string'],
                        defaultValue: '',
                    },
                    {
                        label: 'Starts with',
                        value: '$iLike:startsWith',
                        acceptedTypes: ['string'],
                        defaultValue: 'start',
                    },
                    { label: 'Ends with', value: '$iLike:endsWith', acceptedTypes: ['string'], defaultValue: 'end' },
                    { label: 'Is exactly', value: '$eq', acceptedTypes: ['array', 'object'] },
                    { label: 'Is empty', value: '$eq:null', acceptedTypes: ['string', 'number', 'array', 'object'] },
                    {
                        label: 'Is not empty',
                        value: '$ne:null',
                        acceptedTypes: ['string', 'number', 'array', 'object'],
                    },
                    { label: 'Is in', value: '$in', acceptedTypes: ['string', 'number'], defaultValue: [] },
                    { label: 'Is not in', value: '$notIn', acceptedTypes: ['string', 'number'], defaultValue: [] },
                    { label: 'Has any of', value: '$overlap', acceptedTypes: ['array'], defaultValue: [] },
                    { label: 'Has none of', value: '$notOverlap', acceptedTypes: ['array'], defaultValue: [] },
                    { label: 'Has all of', value: '$contains', acceptedTypes: ['array'], defaultValue: [] },
                ],
                typeDefaultOperator: {
                    string: '$iLike:contains',
                    number: '$eq',
                    object: '$has',
                    array: '$contains',
                    boolean: '$eq',
                },
            },
        },
    },
    triggers: [
        {
            label: 'On realtime database changes',
            value: 'realtime:postgres_changes',
            event: {
                channel: '',
                data: {
                    schema: 'public',
                    table: 'My Table',
                    commit_timestamp: '2024-08-01T20:17:03.216Z',
                    eventType: 'INSERT | UPDATE | DELETE',
                    errors: null,
                    new: {},
                    old: {},
                },
            },
            conditions: [
                {
                    name: 'Channel name',
                    key: 'channel',
                    placeholder: 'Default: All channels',
                    type: 'Text',
                },
                {
                    name: 'Event type',
                    key: 'event',
                    placeholder: 'Default: All events',
                    type: 'TextSelect',
                    options: [
                        { label: 'All events', value: null },
                        { label: 'INSERT', value: 'INSERT' },
                        { label: 'UPDATE', value: 'UPDATE' },
                        { label: 'DELETE', value: 'DELETE' },
                    ],
                },
            ],
        },
        {
            label: 'On realtime presence',
            value: 'realtime:presence',
            event: {
                channel: '',
                data: {
                    event: 'join',
                    key: '9fe543c6-4530-11ef-a6c3-0a58a9feac02',
                    currentPresences: [],
                    leftPresences: [],
                    newPresences: [],
                },
            },
            conditions: [
                {
                    name: 'Channel name',
                    key: 'channel',
                    placeholder: 'Default: All channels',
                    type: 'Text',
                },
                {
                    name: 'Event type',
                    key: 'event',
                    placeholder: 'Default: All events',
                    type: 'TextSelect',
                    options: [
                        { label: 'All events', value: null },
                        { label: 'Sync', value: 'sync' },
                        { label: 'Join', value: 'join' },
                        { label: 'Leave', value: 'leave' },
                    ],
                },
            ],
        },
        {
            label: 'On realtime broadcast',
            value: 'realtime:broadcast',
            event: { channel: '', data: { event: '', payload: '' } },
            conditions: [
                {
                    name: 'Channel name',
                    key: 'channel',
                    placeholder: 'Default: All channels',
                    type: 'Text',
                },
                {
                    name: 'Event name',
                    placeholder: 'Default: All events',
                    key: 'event',
                    type: 'Text',
                },
            ],
        },
    ],
    actions: [
        {
            name: 'Database | Select',
            code: 'select',
            parameters: [],
            isAsync: true,
        },
        {
            name: 'Database | Insert',
            code: 'insert',
            parameters: [{ name: 'data', type: 'object' }],
            isAsync: true,
        },
        {
            name: 'Database | Update',
            code: 'update',
            parameters: [
                { name: 'primaryData', type: 'object' },
                { name: 'data', type: 'object' },
            ],
            isAsync: true,
        },
        {
            name: 'Database | Upsert',
            code: 'upsert',
            parameters: [{ name: 'data', type: 'object' }],
            isAsync: true,
        },
        {
            name: 'Database | Delete',
            code: 'delete',
            parameters: [{ name: 'primaryData', type: 'object' }],
            isAsync: true,
        },
        {
            name: 'Storage | List all files',
            code: 'listFiles',
            getIsValid({ bucket }) {
                return !!bucket;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Upload a file',
            code: 'uploadFile',
            getIsValid({ bucket, path, file }) {
                return !!bucket && !!path && !!file;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Replace a file',
            code: 'updateFile',
            getIsValid({ bucket, path, file }) {
                return !!bucket && !!path && !!file;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Move a file',
            code: 'moveFile',
            getIsValid({ bucket, path, newPath }) {
                return !!bucket && !!path && !!newPath;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Copy a file',
            code: 'copyFile',
            getIsValid({ bucket, path, newPath }) {
                return !!bucket && !!path && !!newPath;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Delete files',
            code: 'deleteFiles',
            getIsValid({ paths }) {
                return !!paths;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Create signed URL',
            code: 'createSignedUrl',
            getIsValid({ bucket, path, expiresIn }) {
                return !!bucket && !!path && !!expiresIn;
            },
            isAsync: true,
        },
        {
            name: 'Storage | Retrieve public URL',
            code: 'getPublicUrl',
            getIsValid({ bucket, path }) {
                return !!bucket && !!path;
            },
            isAsync: false,
        },
        {
            name: 'Realtime | Subscribe to channel',
            code: 'subscribeToChannel',
            getIsValid({ channel, type }) {
                return !!channel && !!type;
            },
            isAsync: true,
        },
        {
            name: 'Realtime | Unsubscribe from channel',
            code: 'unsubscribeFromChannel',
            getIsValid({ channel }) {
                return !!channel;
            },
            isAsync: true,
        },
        {
            name: 'Realtime | Broadcast a message',
            code: 'sendMessageToChannel',
            getIsValid({ channel, event }) {
                return !!channel && !!event;
            },
            isAsync: true,
        },
        {
            name: 'Realtime | Update presence state',
            code: 'updateChannelState',
            getIsValid({ channel, state }) {
                return !!channel && !!state;
            },
            isAsync: true,
        },
        {
            name: 'Call a Postgres function',
            code: 'callPostgresFunction',
            getIsValid({ functionName }) {
                return !!functionName;
            },
            isAsync: true,
        },
        {
            name: 'Invoke an Edge function',
            code: 'invokeEdgeFunction',
            getIsValid({ functionName }) {
                return !!functionName;
            },
            isAsync: true,
        },
    ],
};
