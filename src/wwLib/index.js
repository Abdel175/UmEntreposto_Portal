import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b from '@/components/plugins/plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b/src/wwPlugin.js';
import plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186 from '@/components/plugins/plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/src/wwPlugin.js';
import plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa from '@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/src/wwPlugin.js';
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-cabb43dd-6161-4140-8ebf-03b6fb045a0b', plugin_cabb43dd_6161_4140_8ebf_03b6fb045a0b);
wwLib.wwPluginHelper.registerPlugin('plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186', plugin_f9ef41c3_1c53_4857_855b_f2f6a40b7186);
wwLib.wwPluginHelper.registerPlugin('plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa', plugin_1fa0dd68_5069_436c_9a7d_3b54c340f1fa);
wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"e7bd7b0a-800b-4c28-a0b3-d6f529fa53ec":"#E5E5E5","0a4f156f-9b58-4e42-ac3b-6a2394b0e8e7":"#404040","0eaa2282-ac1c-4fd4-b71d-bdecc494bfac":"#96B242","628ba5da-0c73-4199-91af-8722b4f3ecee":"#3B5233","03f97d03-e8b5-4260-b9a6-84b4e9ac4edb":"#000000D9","db07d869-7076-4fff-8cb5-8f81b9060866":"#00000040","afb0622b-008d-4d99-893c-0f0ebe9cb2ae":"#00000073","7135d9d0-003f-4d5b-979b-4835ed0b65bd":"#0000000F","269e56d1-6215-4b79-9d82-7e6cee40fa2a":"#000000D9","8fbac7c3-9c29-4120-a916-efddf0ee92e0":"#00000040","b841af6a-0836-4052-adfd-99ee3aa9ee4a":"#FFFFFF","a30feb65-a942-4bac-9f38-16dfb4436c11":"#e1e3e5","02e08795-d352-49fd-bc93-5286044ef953":"#c2c7ce","c8122ad7-6c9a-437c-84eb-04e924772175":"#a3acb9","e04035ac-59ff-4f90-9036-1e77cda9cb24":"#8692a1","fdb7537c-e7ec-40ba-a311-0e01c275a6ee":"#6c7888","a74a44a9-425f-4705-b866-f1421c68df52":"#545f6c","781a330b-49ce-4467-80f7-40a4a21b1299":"#3f4750","34573081-741e-4f9b-bb0a-b54fa699d29d":"#2a2f34","04645073-e69e-4e73-80ef-5f1f56118c99":"#151618","44df1337-b30d-48d2-9cdf-9c0ce338502e":"#e2e2e2","b56a2bd5-4834-484d-8ecb-7760c0ebc14b":"#c7c7c7","e964af1c-8020-4e44-96df-93b418abf1ff":"#ababab","aed66389-4433-45b2-be66-5622e3df32e7":"#919191","5172739f-2906-4f10-a758-a1d4929606dc":"#777777","eb5500ae-9ab2-4f6a-83e9-afdc2e3bc1b2":"#5e5e5e","1804f5dd-ffbe-4d0f-a18e-7d9af9eb1c8f":"#464646","f0e9c89a-44ab-4e0e-b1d4-1c223f5c1088":"#2e2e2e","4cb797eb-6ee0-474f-b1dc-99461ce603bc":"#161616","9e8130f5-d6e8-45fe-a977-2cc5e23c6bbb":"#f8f8f7","0f661c98-70c5-4b0f-9ce1-6f860eb63b49":"#e5e2de","bb3eaa2d-d4b7-4b14-8e3d-245d1ff7d00b":"#cdc5bc","0b2b321a-ec10-4f3b-bbbb-469272549bdb":"#b5aa9c","6b06c6ba-a34b-4c75-ad9b-bfb7e3d302d4":"#9b8f7f","f61a0146-c1a8-43c8-84e7-9167aa1bb25f":"#817566","a182872b-7383-46fd-a619-8f51d0d52e37":"#675c50","7950677e-aad2-4e7e-a55b-a0e4b568b0c6":"#4c443b","a1277df6-36d4-45aa-b73c-b3e8c1ead1b5":"#322d27","bfdde87c-ea57-4199-bdd9-93db2a273c9a":"#181613","04b93f0a-1fe2-4b5d-8f1a-a487c7c67ef3":"#d1e4ff","d4334cce-a468-42bf-9a6d-51aed19f8289":"#a2caff","b5bcca88-2522-4e68-880e-aee6d63a2e47":"#6faeff","b8065e7d-980b-4ae1-9b66-71c23c085a2a":"#3090ff","c9179837-9d7e-4518-9fa7-8e065db8409d":"#0075df","9821eac7-4263-4bb8-964c-47ddd1b963cf":"#005db1","8bea7fb1-7617-43d7-8391-a42a8ba2ed9f":"#004585","18dcd57b-d6f9-4fa8-9967-a2082f8b8c8e":"#002e5b","dbefda4d-f2df-4a94-aa56-d154013e03e3":"#001631","e9446b2b-09b0-4e6b-90aa-7d5760edcf4b":"#f5ddcf","0fb23398-7e19-4878-943c-6cc4cb22e0c7":"#f6b791","032d8d1a-8928-494b-86d7-0b10c8b6bb69":"#f68c47","95f27f34-c853-49ff-ace4-f3d827bef530":"#de6c0b","d1b5feb5-be21-4239-a938-9b35641d53c2":"#b95700","5cf45ebd-4fc2-4d74-b7cf-022e9de4249f":"#944403","ea6e1fcd-450b-4bf8-a835-8c85eb7e7f73":"#6f3207","31c43a43-4017-45f3-a88b-fc93427b6464":"#49220a","61a949be-2329-417a-8c47-8d5060a73eed":"#231107","e3bb1f43-e60f-47a9-8d3d-f436511c95eb":"#faf8ed","b19a2186-b06d-4a00-abc7-59a8b7252439":"#f1e3a9","eaebb6eb-2114-42ef-9d3f-66c1037222f0":"#c8aa19","c17c036a-24b7-435f-b6d0-2be3936c5447":"#8d7500","14f92e1b-c639-4e6a-b09d-6a189218f090":"#544406","4f0c4735-5c98-4ddc-9714-73d4410e47f9":"#382d07","defdd300-5ef6-4a2e-9852-0328005bf8b7":"#f4faf3","23aa7fa3-11f0-4d27-aa14-fb0a7d2473ed":"#c6f0c5","b4a51e39-8e67-48ae-82b5-041ab116b358":"#53c954","4c0c4797-47f3-416e-8f49-9e7749abc810":"#2aad2c","efd91745-2fb2-4e7e-a5b0-9f0a372dcdcd":"#1e7118","e5693771-d83f-46ab-85b6-7e9b0f1ea8c3":"#1a3616","a0df6c5b-9408-4825-809c-bd96f7a6ccb8":"#faf7f7","fb469904-507a-456a-930a-982b7010ca01":"#f6efee","6bd67ea2-8fa9-43a5-8cf5-50f625558e3c":"#f3b5b0","c8ad9641-1f8b-4f9e-972e-24d3d7c79164":"#fa444d","fb8a0c40-ded1-491a-bac7-14016b364ef0":"#af1129","2c7bfcbf-d833-46b0-9e49-bff3a2696a1f":"#4f1a1c","abd52525-b934-474f-8b93-e976fece5f80":"#e3c645","1ddbd5a9-0bf6-4f67-99f4-c4846032af7f":"#ab8f05","24ab4fe2-969e-4cbc-9985-89c353066a89":"#705c03","13fc8b4f-a356-4975-ba62-96bb6aa8fd25":"#1c1604","fa4d9179-2c75-4b4e-ac46-90ca735cc6d2":"#e6f6e6","cacd1009-7dcd-4c7b-a9d4-8978050bcaf9":"#7ee27f","9475d0e1-b273-475a-b540-5fe7d8df2ea6":"#009100","ae584ace-7bbd-4b34-8713-e000815bf128":"#23521d","157c9b53-591d-410e-9018-916de18e1c0f":"#0d1a0a","dcf7d119-b64f-4e4f-ba82-20185e1e3375":"#f2dddb","74b3c7e8-14ef-4488-9962-388f8c533d23":"#f78580","1c7b698e-806f-42aa-87ae-3ca740940b00":"#de0030","dba3598f-a6ac-4791-a54d-c335ef510ac8":"#7e1a23","199b6fa5-1912-4926-801c-ad88ee962d63":"#241010","b44bfa26-84ac-4ce2-805c-6ab1ba8e9fec":"#f7f1d9","5e7f9d06-2093-42b5-b06f-3c49c3cc5696":"#f2f0ef","6c1d3a95-c836-4dc6-9135-2e0ce966be72":"#f8f8f8","b8db72c0-cb8d-4f74-8de8-ae23882ccea2":"#f0f1f1","a9bc8da4-0ee2-46ab-97aa-5980cd432c9e":"#fbf7f4","8c2636a5-8f0c-4dd3-b5dc-1db6770c94fd":"#f8efe9","530fd98b-c9ff-4178-8122-dfa61ebd54b2":"#f8f8f8","be1705aa-2fa3-45e3-9a2d-b1e3154688a1":"#f1f1f1","08b2c1eb-4626-4895-ad53-022caf0279fe":"#f4f8ff","57730e5b-3d41-4c65-b5c5-591a2b4f2c6c":"#e8f2ff"} : {"e7bd7b0a-800b-4c28-a0b3-d6f529fa53ec":"#E5E5E5","0a4f156f-9b58-4e42-ac3b-6a2394b0e8e7":"#404040","0eaa2282-ac1c-4fd4-b71d-bdecc494bfac":"#96B242","628ba5da-0c73-4199-91af-8722b4f3ecee":"#3B5233","03f97d03-e8b5-4260-b9a6-84b4e9ac4edb":"#000000D9","db07d869-7076-4fff-8cb5-8f81b9060866":"#00000040","afb0622b-008d-4d99-893c-0f0ebe9cb2ae":"#00000073","7135d9d0-003f-4d5b-979b-4835ed0b65bd":"#0000000F","269e56d1-6215-4b79-9d82-7e6cee40fa2a":"#000000D9","8fbac7c3-9c29-4120-a916-efddf0ee92e0":"#00000040","b841af6a-0836-4052-adfd-99ee3aa9ee4a":"#FFFFFF","a30feb65-a942-4bac-9f38-16dfb4436c11":"#e1e3e5","02e08795-d352-49fd-bc93-5286044ef953":"#c2c7ce","c8122ad7-6c9a-437c-84eb-04e924772175":"#a3acb9","e04035ac-59ff-4f90-9036-1e77cda9cb24":"#8692a1","fdb7537c-e7ec-40ba-a311-0e01c275a6ee":"#6c7888","a74a44a9-425f-4705-b866-f1421c68df52":"#545f6c","781a330b-49ce-4467-80f7-40a4a21b1299":"#3f4750","34573081-741e-4f9b-bb0a-b54fa699d29d":"#2a2f34","04645073-e69e-4e73-80ef-5f1f56118c99":"#151618","44df1337-b30d-48d2-9cdf-9c0ce338502e":"#e2e2e2","b56a2bd5-4834-484d-8ecb-7760c0ebc14b":"#c7c7c7","e964af1c-8020-4e44-96df-93b418abf1ff":"#ababab","aed66389-4433-45b2-be66-5622e3df32e7":"#919191","5172739f-2906-4f10-a758-a1d4929606dc":"#777777","eb5500ae-9ab2-4f6a-83e9-afdc2e3bc1b2":"#5e5e5e","1804f5dd-ffbe-4d0f-a18e-7d9af9eb1c8f":"#464646","f0e9c89a-44ab-4e0e-b1d4-1c223f5c1088":"#2e2e2e","4cb797eb-6ee0-474f-b1dc-99461ce603bc":"#161616","9e8130f5-d6e8-45fe-a977-2cc5e23c6bbb":"#f8f8f7","0f661c98-70c5-4b0f-9ce1-6f860eb63b49":"#e5e2de","bb3eaa2d-d4b7-4b14-8e3d-245d1ff7d00b":"#cdc5bc","0b2b321a-ec10-4f3b-bbbb-469272549bdb":"#b5aa9c","6b06c6ba-a34b-4c75-ad9b-bfb7e3d302d4":"#9b8f7f","f61a0146-c1a8-43c8-84e7-9167aa1bb25f":"#817566","a182872b-7383-46fd-a619-8f51d0d52e37":"#675c50","7950677e-aad2-4e7e-a55b-a0e4b568b0c6":"#4c443b","a1277df6-36d4-45aa-b73c-b3e8c1ead1b5":"#322d27","bfdde87c-ea57-4199-bdd9-93db2a273c9a":"#181613","04b93f0a-1fe2-4b5d-8f1a-a487c7c67ef3":"#d1e4ff","d4334cce-a468-42bf-9a6d-51aed19f8289":"#a2caff","b5bcca88-2522-4e68-880e-aee6d63a2e47":"#6faeff","b8065e7d-980b-4ae1-9b66-71c23c085a2a":"#3090ff","c9179837-9d7e-4518-9fa7-8e065db8409d":"#0075df","9821eac7-4263-4bb8-964c-47ddd1b963cf":"#005db1","8bea7fb1-7617-43d7-8391-a42a8ba2ed9f":"#004585","18dcd57b-d6f9-4fa8-9967-a2082f8b8c8e":"#002e5b","dbefda4d-f2df-4a94-aa56-d154013e03e3":"#001631","e9446b2b-09b0-4e6b-90aa-7d5760edcf4b":"#f5ddcf","0fb23398-7e19-4878-943c-6cc4cb22e0c7":"#f6b791","032d8d1a-8928-494b-86d7-0b10c8b6bb69":"#f68c47","95f27f34-c853-49ff-ace4-f3d827bef530":"#de6c0b","d1b5feb5-be21-4239-a938-9b35641d53c2":"#b95700","5cf45ebd-4fc2-4d74-b7cf-022e9de4249f":"#944403","ea6e1fcd-450b-4bf8-a835-8c85eb7e7f73":"#6f3207","31c43a43-4017-45f3-a88b-fc93427b6464":"#49220a","61a949be-2329-417a-8c47-8d5060a73eed":"#231107","e3bb1f43-e60f-47a9-8d3d-f436511c95eb":"#faf8ed","b19a2186-b06d-4a00-abc7-59a8b7252439":"#f1e3a9","eaebb6eb-2114-42ef-9d3f-66c1037222f0":"#c8aa19","c17c036a-24b7-435f-b6d0-2be3936c5447":"#8d7500","14f92e1b-c639-4e6a-b09d-6a189218f090":"#544406","4f0c4735-5c98-4ddc-9714-73d4410e47f9":"#382d07","defdd300-5ef6-4a2e-9852-0328005bf8b7":"#f4faf3","23aa7fa3-11f0-4d27-aa14-fb0a7d2473ed":"#c6f0c5","b4a51e39-8e67-48ae-82b5-041ab116b358":"#53c954","4c0c4797-47f3-416e-8f49-9e7749abc810":"#2aad2c","efd91745-2fb2-4e7e-a5b0-9f0a372dcdcd":"#1e7118","e5693771-d83f-46ab-85b6-7e9b0f1ea8c3":"#1a3616","a0df6c5b-9408-4825-809c-bd96f7a6ccb8":"#faf7f7","fb469904-507a-456a-930a-982b7010ca01":"#f6efee","6bd67ea2-8fa9-43a5-8cf5-50f625558e3c":"#f3b5b0","c8ad9641-1f8b-4f9e-972e-24d3d7c79164":"#fa444d","fb8a0c40-ded1-491a-bac7-14016b364ef0":"#af1129","2c7bfcbf-d833-46b0-9e49-bff3a2696a1f":"#4f1a1c","abd52525-b934-474f-8b93-e976fece5f80":"#e3c645","1ddbd5a9-0bf6-4f67-99f4-c4846032af7f":"#ab8f05","24ab4fe2-969e-4cbc-9985-89c353066a89":"#705c03","13fc8b4f-a356-4975-ba62-96bb6aa8fd25":"#1c1604","fa4d9179-2c75-4b4e-ac46-90ca735cc6d2":"#e6f6e6","cacd1009-7dcd-4c7b-a9d4-8978050bcaf9":"#7ee27f","9475d0e1-b273-475a-b540-5fe7d8df2ea6":"#009100","ae584ace-7bbd-4b34-8713-e000815bf128":"#23521d","157c9b53-591d-410e-9018-916de18e1c0f":"#0d1a0a","dcf7d119-b64f-4e4f-ba82-20185e1e3375":"#f2dddb","74b3c7e8-14ef-4488-9962-388f8c533d23":"#f78580","1c7b698e-806f-42aa-87ae-3ca740940b00":"#de0030","dba3598f-a6ac-4791-a54d-c335ef510ac8":"#7e1a23","199b6fa5-1912-4926-801c-ad88ee962d63":"#241010","b44bfa26-84ac-4ce2-805c-6ab1ba8e9fec":"#f7f1d9","5e7f9d06-2093-42b5-b06f-3c49c3cc5696":"#f2f0ef","6c1d3a95-c836-4dc6-9135-2e0ce966be72":"#f8f8f8","b8db72c0-cb8d-4f74-8de8-ae23882ccea2":"#f0f1f1","a9bc8da4-0ee2-46ab-97aa-5980cd432c9e":"#fbf7f4","8c2636a5-8f0c-4dd3-b5dc-1db6770c94fd":"#f8efe9","530fd98b-c9ff-4178-8122-dfa61ebd54b2":"#f8f8f8","be1705aa-2fa3-45e3-9a2d-b1e3154688a1":"#f1f1f1","08b2c1eb-4626-4895-ad53-022caf0279fe":"#f4f8ff","57730e5b-3d41-4c65-b5c5-591a2b4f2c6c":"#e8f2ff"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"802450d4-96e6-46b9-88b5-4ff2ad0c2a9c":"4px","0a3be4c7-8af6-4f2a-8356-cfc9a654bedb":"8px","d3c878ba-280d-4a58-b439-dec4f641301e":"12px","c5f92a83-8757-46c9-a0b3-a6def1d6d25f":"16px","35f471a8-fb6a-4b4f-85cd-d6eb927956ee":"20px","b4d95d06-8a9f-4fbc-8696-2796a7a458b2":"24px","f52b33fb-9a7f-462d-b467-a670c2a12f7f":"2px","b363e15d-300e-4ff3-b2ac-f63ea21f5e16":"4px","7f9785c9-45e0-4bab-91b0-6122b1deafe7":"8px","02c62812-8afe-4200-a60a-2d9bd080e86c":"12px","492a9411-1702-4f94-828e-f03daf553237":"16px","6f3edf1a-cab9-4568-8e22-f912fa436965":"20px","b1f0e218-59f1-44f9-bc1e-eb5e50523d75":"32px","407b6723-0694-4e59-8df2-b5259c1d28d5":"40px","78490985-6b3f-48bb-a2ef-8187f3bfc8a6":"2px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"7419c94a-472d-45eb-89ac-debf7ef21b35":"400 14px/22px var(--ww-default-font-family, sans-serif)","b49b91a8-996d-45e6-ae47-795f8322c041":"500 38px/46px var(--ww-default-font-family, sans-serif)","e9d2a21b-ea8d-459b-87bf-131e4d6af9ee":"500 30px/40px var(--ww-default-font-family, sans-serif)","8d14c83a-63a5-4f4f-a12a-97af4258074d":"500 24px/32px var(--ww-default-font-family, sans-serif)","1a3aa549-d178-4106-bc9e-5d1e7bb34c8c":"500 16px/24px var(--ww-default-font-family, sans-serif)","6b591379-573d-425b-bc53-12a4426e1513":"600 14px/22px var(--ww-default-font-family, sans-serif)","d9f75b67-53a7-4a7f-9a0e-f4ab7985cde6":"400 12px/20px var(--ww-default-font-family, sans-serif)","4ef5bd5d-6c26-4512-8a87-f23d0269918a":"600 16px/24px var(--ww-default-font-family, sans-serif)","af4a2331-71bc-44af-9661-b38551756eab":"600 12px/18px var(--ww-default-font-family, sans-serif)","dba66191-af24-45ac-ae67-dd3770eec837":"400 12px/18px var(--ww-default-font-family, sans-serif)","04a090b3-eb67-4f3d-8946-bb1896dd0c4b":"400 16px/22px var(--ww-default-font-family, sans-serif)","0fa89c8c-d0cf-4c33-81cc-1a4524267593":"400 12px/20px var(--ww-default-font-family, sans-serif)","38ffbeff-764d-4bfc-9245-65b7bc0554d3":"500 20px/28px var(--ww-default-font-family, sans-serif)","f0d118f6-8610-4be0-85a6-7732ededbcbd":"400 60px/60px var(--ww-default-font-family, sans-serif)","c3f20f8d-c404-4890-a149-528c554d3a45":"400 48px/52px var(--ww-default-font-family, sans-serif)","188c18b9-1d63-48aa-b183-a0e339c28999":"400 36px/36px var(--ww-default-font-family, sans-serif)","b47fda5e-c8a2-479d-a3d2-000ef4b6ee4e":"400 24px/30px var(--ww-default-font-family, sans-serif)","d92a1cb7-94b6-4feb-9413-e70e51979f97":"400 18px/26px var(--ww-default-font-family, sans-serif)","f2a71115-b847-4f32-ade9-6ec28c04d178":"400 16px/24px var(--ww-default-font-family, sans-serif)","6991fe26-2f58-467a-a1c7-e9a576888df6":"400 12px/16px var(--ww-default-font-family, sans-serif)","413f19fe-06f4-4af0-bc58-613b9c444489":"300 48px/52px var(--ww-default-font-family, sans-serif)","36c90402-a417-43a8-9707-91580919116e":"300 24px/30px var(--ww-default-font-family, sans-serif)","fd2aa2ea-6285-4979-9dd4-0afe769b1cf7":"300 16px/24px var(--ww-default-font-family, sans-serif)","0ed994cb-55a6-4345-a079-6317154abeb9":"300 12px/16px var(--ww-default-font-family, sans-serif)","47176e75-5460-40c9-add9-f675437da5c3":"500 60px/60px var(--ww-default-font-family, sans-serif)","a46682a1-6522-4402-851e-ac1aba0b897c":"500 36px/36px var(--ww-default-font-family, sans-serif)","f59d015e-c1a5-41b0-a0bd-d7685bfa9e04":"500 18px/26px var(--ww-default-font-family, sans-serif)","90e4433f-28ec-48c5-8432-3a4ad4f12c6a":"500 14px/20px var(--ww-default-font-family, sans-serif)","1a0dc46e-3d23-4ac0-ada4-bc80d295dd7f":"500 11px/16px var(--ww-default-font-family, sans-serif)","e6d49f9e-afe0-4248-8d07-d27a1c9b6230":"700 48px/52px var(--ww-default-font-family, sans-serif)","63427591-e191-4f49-bcd0-e63f63c1f0d0":"700 24px/30px var(--ww-default-font-family, sans-serif)","ad5de84f-abf6-4f14-81d9-ee7fdc1674f6":"700 16px/24px var(--ww-default-font-family, sans-serif)","4dba5634-32ac-49d9-9e3b-1c227801b3a8":"700 12px/16px var(--ww-default-font-family, sans-serif)","f4a28b33-58fd-41ca-b1fd-feda6a0a7e75":"400 14px/20px var(--ww-default-font-family, sans-serif)","c895a4f5-7855-4344-9a83-dff3321d79e6":"400 11px/16px var(--ww-default-font-family, sans-serif)","b593a132-fc74-46b5-beca-3b5698188264":"300 60px/60px var(--ww-default-font-family, sans-serif)","306b96db-c31c-4957-832b-199fd5382cb2":"300 36px/36px var(--ww-default-font-family, sans-serif)","a849b37a-ec69-4519-8689-7ca0ec99905e":"300 18px/26px var(--ww-default-font-family, sans-serif)","355d65f8-3e12-4e04-a4d3-3181e93175b8":"300 14px/20px var(--ww-default-font-family, sans-serif)","c455b4ea-99a3-49f6-a60c-659ec8afdf31":"300 11px/16px var(--ww-default-font-family, sans-serif)","c924f875-829c-4696-8dbc-a392f579d23f":"500 48px/52px var(--ww-default-font-family, sans-serif)","3d798d9f-1dff-4804-987f-f3a7192ef9c9":"500 24px/30px var(--ww-default-font-family, sans-serif)","a610bd35-596d-4cec-b59c-6aa7e996721b":"500 16px/24px var(--ww-default-font-family, sans-serif)","d7a3303e-30a9-4e87-a23c-cb6e262d91e7":"500 12px/16px var(--ww-default-font-family, sans-serif)","261e7097-5da3-4f2d-98ce-77accbcaabb3":"700 60px/60px var(--ww-default-font-family, sans-serif)","5cd34ef8-3e66-48d9-a40c-173b6be0752a":"700 36px/40px var(--ww-default-font-family, sans-serif)","4e3cfba6-0330-4c70-bf29-d8dd3d4d3b94":"700 18px/26px var(--ww-default-font-family, sans-serif)","665adc55-24af-4037-8838-a84d19562ea2":"700 14px/20px var(--ww-default-font-family, sans-serif)","94e99de8-68eb-4787-80af-c99d29e791d5":"700 11px/16px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(process.env.VUE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
