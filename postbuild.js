const fs = require('fs');

const collectionPages = {};

for (const collectionName in collectionPages) {
    const template = fs.readFileSync(`./dist${collectionName}/index.html`, 'utf8');

    const collectionId = collectionName.split('/').pop().replace('path__', '');

    const titleRegex = new RegExp(`${collectionId}title__`, 'g');
    const descRegex = new RegExp(`${collectionId}desc__`, 'g');
    const imageRegex = new RegExp(`image" content="[^"]*${collectionId}image__`, 'g');
    const socialTitleRegex = new RegExp(`${collectionId}socialTitle__`, 'g');
    const socialDescRegex = new RegExp(`${collectionId}socialDesc__`, 'g');
    const keywordsRegex = new RegExp(`${collectionId}keywords__`, 'g');
    const pathRegex = new RegExp(`${collectionId}path__/"`, 'g');

    collectionPages[collectionName].forEach(collectionItem => {
        fs.mkdirSync(`./dist/${collectionItem.path}`, { recursive: true });

        const index = template
            .replace(titleRegex, collectionItem.title || '')
            .replace(descRegex, collectionItem.desc || '')
            .replace(imageRegex, `image" content="${collectionItem.image || ''}`)
            .replace(socialTitleRegex, collectionItem.socialTitle || '')
            .replace(socialDescRegex, collectionItem.socialDesc || '')
            .replace(keywordsRegex, collectionItem.keywords || '')
            .replace(pathRegex, `${collectionItem.path}/"`);

        fs.writeFileSync(`./dist/${collectionItem.path}/index.html`, index);
    });

    fs.rmSync(`./dist${collectionName}/index.html`);
    fs.rmdirSync(`./dist${collectionName}`);
}
