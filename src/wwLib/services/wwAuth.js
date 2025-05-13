import { ref } from 'vue';

export default {
    isInitialized: ref(false),
    get plugin() {
        if (!wwLib.$store.getters['websiteData/getAuthPlugin']) return null;
        return wwLib.wwPlugins[wwLib.$store.getters['websiteData/getAuthPlugin']?.namespace];
    },
    async init() {
        if (this.isInitialized.value) return;
        if (this.plugin?._initAuth) {
            try {
                await this.plugin._initAuth();
            } catch (error) {
                wwLib.wwLog.error('Error while initializing auth', error);
            }
        }
        this.isInitialized.value = true;
    },
    getUser() {
        if (this.plugin?._getUser) {
            return this.plugin._getUser();
        }
        return this.plugin?.user;
    },
    getIsAuthenticated() {
        if (this.plugin?._isAuthenticated) {
            return this.plugin._getIsAuthenticated();
        }
        return this.plugin?.isAuthenticated;
    },
    getUnauthenticatedPageId() {
        if (this.plugin?._getUnauthenticatedPageId) {
            return this.plugin._getUnauthenticatedPageId();
        }
        return this.plugin.settings.publicData.afterNotSignInPageId;
    },
    getUnauthorizedPageId() {
        if (this.plugin?._getUnauthorizedPageId) {
            return this.plugin._getUnauthorizedPageId();
        }
        return (
            this.plugin.settings.publicData.afterForbiddenPageId || this.plugin.settings.publicData.afterNotSignInPageId
        );
    },
    /**
     * Get user roles as an array of strings
     * @returns {Array<string>}
     */
    getUserRoles() {
        if (this.plugin?._getUserRoles) {
            return this.plugin._getUserRoles();
        }
        const rawRoles = _.get(this.getUser(), this.plugin.settings.publicData.roleKey);
        const roleType = this.plugin.settings.publicData.roleType;
        const roleTypeKey = this.plugin.settings.publicData.roleTypeKey;
        const localRoles = this.plugin.settings.publicData.roles;
        let roles = [];
        if (!rawRoles) return [];
        else if (roleType === 'string') roles = [rawRoles];
        else if (roleType === 'array-string' || !roleType) roles = rawRoles;
        else if (roleType === 'array-object') roles = rawRoles.map(role => role[roleTypeKey]);
        if (Array.isArray(localRoles))
            // We need to convert user roles as user groups store the id of local roles but the user roles contain the name
            roles = roles.map(role => localRoles.find(localRole => localRole.name === role)?.id || role);
        return roles;
    },
    matchUserGroups(userGroups) {
        if (this.plugin?._matchUserGroups) {
            return this.plugin._matchUserGroups(userGroups);
        }
        return userGroups.some(userGroup => userGroup && this.matchUserGroup(userGroup));
    },
    matchUserGroup(userGroup) {
        if (this.plugin?._matchUserGroup) {
            return this.plugin?._matchUserGroup(userGroup);
        }
        return this.matchRoles(userGroup?.roles.map(role => role.value));
    },
    /**
     * Check if the user has the required roles
     * @param {Array<string>} roles
     * @returns {boolean}
     */
    matchRoles(roles) {
        if (this.plugin?._matchRoles) {
            return this.plugin._matchRoles(roles);
        }
        return roles.every(role => this.getUserRoles().includes(role));
    },
 };
