 
export default {
    _getApiUrl() {
        return process.env.VUE_APP_API_URL;
    },
    _getPluginsUrl() {
        return process.env.VUE_APP_PLUGINS_URL;
    },
    _getPreviewUrl() {
        const designInfo = wwLib.$store.getters['websiteData/getDesignInfo'];
        if (designInfo.wewebPreviewURL) {
            return designInfo.wewebPreviewURL;
        }

        return process.env.VUE_APP_PREVIEW_URL;
    },
    _getCdnUrl() {
        return process.env.VUE_APP_CDN_URL;
    },
 };
