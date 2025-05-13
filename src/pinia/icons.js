import { defineStore } from 'pinia';
 
export const useIconsStore = defineStore('icons', () => {
    let values;
 
    return {
        async getIcon(name) {
             /* wwFront:start */
            const url = `/public/icons/${name}.svg`;
            const response = await fetch(url);
            if (!response.ok) {
                return null;
            }
            return response.text();
            /* wwFront:end */
        },
     };
});
