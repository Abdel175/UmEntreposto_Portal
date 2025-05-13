/* eslint-disable no-console */
import { VueCookieNext } from 'vue-cookie-next';

export default {
    isAllowed: false,
    init() {
        this.isAllowed = process.env.NODE_ENV == 'development' || VueCookieNext.getCookie('debug');
    },
    log(...args) {
        if (this.isAllowed) console.log(...args);
    },
    debug(...args) {
        if (this.isAllowed) console.debug(...args);
    },
    group(...args) {
        if (this.isAllowed) console.group(...args);
    },
    groupEnd(...args) {
        if (this.isAllowed) console.groupEnd(...args);
    },
    warn(...args) {
        console.warn(...args);
    },
    info(...args) {
        console.info(...args);
    },
    error(...args) {
        console.error(...args);
    },
};
