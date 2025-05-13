import qs from 'qs';

export default {
    /*=============================================m_ÔÔ_m=============================================\
        Collection API
    \================================================================================================*/
    async _fetchCollection(collection) {
        if (collection.mode === 'dynamic' && !collection.config.isThroughServer) {
            try {
                const { url, method, data, headers, queries, resultKey, dataType, useRawBody, isWithCredentials } =
                    collection.config;
                const responseData = await this._apiRequest(
                    url,
                    method,
                    data,
                    headers,
                    queries,
                    dataType,
                    useRawBody,
                    isWithCredentials
                );
                return { data: _.get(responseData, resultKey, responseData), error: null };
            } catch (err) {
                return {
                    error: Object.getOwnPropertyNames(err).reduce((obj, key) => ({ ...obj, [key]: err[key] }), {}),
                };
            }
        } else {
            return { data: null, error: null };
        }
    },
    async apiRequest(
        {
            url,
            method,
            data,
            headers,
            queries: params,
            dataType,
            isThroughServer,
            useRawBody = false,
            isWithCredentials = false,
        },
        wwUtils
    ) {
        if (isThroughServer) {
            const websiteId = wwLib.wwWebsiteData.getInfo().id;
            const pluginURL = wwLib.wwApiRequests._getPluginsUrl();

            return await axios.post(`${pluginURL}/designs/${websiteId}/rest-api/request`, {
                url,
                method,
                data,
                queries: params,
                headers,
                dataType,
                useRawBody,
            });
        } else {
            return await this._apiRequest(url, method, data, headers, params, dataType, useRawBody, isWithCredentials);
        }
    },
    async _apiRequest(url, method, data, headers, params, dataType, useRawBody, isWithCredentials) {
        const payload = computePayload(method, data, headers, params, dataType, useRawBody);

        const response = await axios({
            url,
            method,
            data: payload.data,
            params: payload.params,
            headers: payload.headers,
            withCredentials: isWithCredentials,
        });

        return response.data;
    },
};

function computePayload(method, data, headers, params, dataType, useRawBody) {
    if (!useRawBody) {
        data = computeList(data);

        switch (dataType) {
            case 'application/x-www-form-urlencoded': {
                data = qs.stringify(data);
                break;
            }
            case 'multipart/form-data': {
                const formData = new FormData();
                for (const key in data) formData.append(key, data[key]);
                data = formData;
                break;
            }
            default:
                break;
        }
    }

    switch (method) {
        case 'OPTIONS':
        case 'GET':
        case 'DELETE':
        default:
            break;
    }

    return {
        data,
        params: computeList(params),
        headers: {
            'content-type': dataType || 'application/json',
            ...computeList(headers),
        },
    };
}

function computeList(list) {
    return (list || []).reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {});
}
