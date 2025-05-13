<template>
    <div>
        <svg
            v-if="icon == TableIconsEnum.TABLE_INSERT"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="23" cy="23" r="7" fill="currentColor" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 1C1.34315 1 0 2.34315 0 4V26C0 27.6569 1.34315 29 3 29H16.2917C15.7549 28.4003 15.2974 27.7281 14.9355 27H11V20H14.5121C14.7638 19.2879 15.1025 18.617 15.5155 18H11V12H17L17 16.2917C17.5997 15.7549 18.2719 15.2974 19 14.9355V12H26V14.5121C26.7121 14.7638 27.383 15.1025 28 15.5155V4C28 2.34315 26.6569 1 25 1H3ZM2 4C2 3.44772 2.44772 3 3 3H9V10H2V4ZM11 10V3L17 3V10H11ZM9 20V27H3C2.44772 27 2 26.5523 2 26V20H9ZM9 18H2V12H9V18ZM19 10H26V4C26 3.44772 25.5523 3 25 3H19V10Z"
                fill="currentColor"
            />
            <line x1="19" y1="23" x2="27" y2="23" stroke="white" stroke-width="2" />
            <line x1="23" y1="27" x2="23" y2="19" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.ROW_INSERT_BEFORE"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 20L2 10L26 10L26 16.0703C26.7528 16.5057 27.4281 17.0604 28 17.7084L28 10C28 8.89543 27.1046 8 26 8L2 8C0.895431 8 1.5627e-07 8.89543 1.43099e-07 10L2.38498e-08 20C1.06779e-08 21.1046 0.895431 22 2 22L14.0619 22C14.149 21.3014 14.3262 20.6307 14.5815 20L2 20Z"
                fill="currentColor"
            />
            <circle cx="22" cy="23" r="7" transform="rotate(-90 22 23)" fill="currentColor" />
            <line x1="6" y1="9" x2="6" y2="2" stroke="currentColor" stroke-width="2" />
            <path d="M6 1.58933e-07L10.3301 4.5L1.66987 4.5L6 1.58933e-07Z" fill="currentColor" />
            <line x1="22" y1="27" x2="22" y2="19" stroke="white" stroke-width="2" />
            <line x1="26" y1="23" x2="18" y2="23" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.ROW_INSERT_AFTER"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 16L2 6L26 6L26 12.0703C26.7528 12.5057 27.4281 13.0604 28 13.7084L28 6C28 4.89543 27.1046 4 26 4L2 4C0.895431 4 1.5627e-07 4.89543 1.43099e-07 6L2.38498e-08 16C1.06779e-08 17.1046 0.895431 18 2 18L14.0619 18C14.149 17.3014 14.3262 16.6307 14.5815 16L2 16Z"
                fill="currentColor"
            />
            <circle cx="22" cy="19" r="7" transform="rotate(-90 22 19)" fill="currentColor" />
            <line
                y1="-1"
                x2="7"
                y2="-1"
                transform="matrix(-1.19249e-08 1 1 1.19249e-08 7 17)"
                stroke="currentColor"
                stroke-width="2"
            />
            <path d="M6 26L10.3301 21.5L1.66987 21.5L6 26Z" fill="currentColor" />
            <line x1="22" y1="23" x2="22" y2="15" stroke="white" stroke-width="2" />
            <line x1="26" y1="19" x2="18" y2="19" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.COLUMN_INSERT_BEFORE"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 3H24V27H17.9297C17.4943 27.7528 16.9396 28.4281 16.2916 29H24C25.1046 29 26 28.1046 26 27V3C26 1.89543 25.1046 1 24 1H14C12.8954 1 12 1.89543 12 3V15.0619C12.6986 15.149 13.3693 15.3262 14 15.5815L14 3Z"
                fill="currentColor"
            />
            <circle cx="11" cy="23" r="7" fill="currentColor" />
            <line y1="-1" x2="7" y2="-1" transform="matrix(-1 0 0 1 13 8)" stroke="currentColor" stroke-width="2" />
            <path d="M4 7L8.5 11.3301L8.5 2.66987L4 7Z" fill="currentColor" />
            <line x1="7" y1="23" x2="15" y2="23" stroke="white" stroke-width="2" />
            <line x1="11" y1="27" x2="11" y2="19" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.COLUMN_INSERT_AFTER"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 3H16V15.5815C16.6307 15.3262 17.3014 15.149 18 15.0619V3C18 1.89543 17.1046 1 16 1H6C4.89543 1 4 1.89543 4 3V27C4 28.1046 4.89543 29 6 29H13.7084C13.0604 28.4281 12.5057 27.7528 12.0703 27H6L6 3Z"
                fill="currentColor"
            />
            <circle cx="19" cy="23" r="7" fill="currentColor" />
            <line x1="17" y1="7" x2="24" y2="7" stroke="currentColor" stroke-width="2" />
            <path d="M26 7L21.5 11.3301L21.5 2.66987L26 7Z" fill="currentColor" />
            <line x1="15" y1="23" x2="23" y2="23" stroke="white" stroke-width="2" />
            <line x1="19" y1="27" x2="19" y2="19" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.ROW_DELETE"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 16L2 6L26 6L26 12.0703C26.7528 12.5057 27.4281 13.0604 28 13.7084L28 6C28 4.89543 27.1046 4 26 4L2 4C0.895431 4 1.5627e-07 4.89543 1.43099e-07 6L2.38498e-08 16C1.06779e-08 17.1046 0.895431 18 2 18L14.0619 18C14.149 17.3014 14.3262 16.6307 14.5815 16L2 16Z"
                fill="currentColor"
            />
            <circle cx="22" cy="19" r="7" transform="rotate(-90 22 19)" fill="currentColor" />
            <line x1="26" y1="19" x2="18" y2="19" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.COLUMN_DELETE"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14 3H24V27H17.9297C17.4943 27.7528 16.9396 28.4281 16.2916 29H24C25.1046 29 26 28.1046 26 27V3C26 1.89543 25.1046 1 24 1H14C12.8954 1 12 1.89543 12 3V15.0619C12.6986 15.149 13.3693 15.3262 14 15.5815L14 3Z"
                fill="currentColor"
            />
            <circle cx="11" cy="23" r="7" fill="currentColor" />
            <line x1="7" y1="23" x2="15" y2="23" stroke="white" stroke-width="2" />
        </svg>

        <svg
            v-else-if="icon == TableIconsEnum.TABLE_DELETE"
            class="icon"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="23" cy="23" r="7" fill="currentColor" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 1C1.34315 1 0 2.34315 0 4V26C0 27.6569 1.34315 29 3 29H16.2917C15.7549 28.4003 15.2974 27.7281 14.9355 27H11V20H14.5121C14.7638 19.2879 15.1025 18.617 15.5155 18H11V12H17L17 16.2917C17.5997 15.7549 18.2719 15.2974 19 14.9355V12H26V14.5121C26.7121 14.7638 27.383 15.1025 28 15.5155V4C28 2.34315 26.6569 1 25 1H3ZM2 4C2 3.44772 2.44772 3 3 3H9V10H2V4ZM11 10V3L17 3V10H11ZM9 20V27H3C2.44772 27 2 26.5523 2 26V20H9ZM9 18H2V12H9V18ZM19 10H26V4C26 3.44772 25.5523 3 25 3H19V10Z"
                fill="currentColor"
            />
            <line x1="19" y1="23" x2="27" y2="23" stroke="white" stroke-width="2" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'TableIcon',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    data: () => ({
        TableIconsEnum: {
            TABLE_INSERT: 'table-insert',
            ROW_INSERT_BEFORE: 'row-insert-before',
            ROW_INSERT_AFTER: 'row-insert-after',
            ROW_DELETE: 'row-delete',
            COLUMN_INSERT_BEFORE: 'column-insert-before',
            COLUMN_INSERT_AFTER: 'column-insert-after',
            COLUMN_DELETE: 'column-delete',
            TABLE_DELETE: 'table-delete',
        },
    }),
};
</script>
