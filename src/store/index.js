import { createStore } from 'vuex';
import websiteData from './websiteData';
import libraries from './libraries';
import data from './data';
 import front from './front';

export default createStore({
    modules: {
        websiteData,
        libraries,
        data,
         front,
    },
 });
