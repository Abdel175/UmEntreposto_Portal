export function getBackgroundStyle(style) {
    // FORMAT BACKGROUND IMAGE
    let backgroundImage;
    if (style.backgroundImage) {
        if (style.backgroundImage.startsWith('url(')) {
            backgroundImage = style.backgroundImage;
        } else if (
            style.backgroundImage.startsWith('https://') ||
            style.backgroundImage.startsWith('http://') ||
            style.backgroundImage.startsWith('data:image') ||
            style.backgroundImage.startsWith('blob:')
        ) {
            backgroundImage = wwLib.wwUtils.formatBgImgUrl(style.backgroundImage);
        } else {
             /* wwFront:start */
            backgroundImage = wwLib.wwUtils.formatBgImgUrl(style.backgroundImage);
            /* wwFront:end */
        }
    }

    const backgroundOrder = (style.backgroundOrder || 'grad,img,col').split(',');
    const isColorLast = backgroundOrder[2] === 'col';

    let background = '';

    for (let bgOrder of backgroundOrder) {
        switch (bgOrder) {
            case 'grad':
                if (style.backgroundGradient) {
                    if (background.length) background += ', ';
                    background += style.backgroundGradient;
                }
                break;
            case 'col':
                if (style.backgroundColor) {
                    if (background.length) background += ', ';
                    if (isColorLast) {
                        background += style.backgroundColor;
                    } else {
                        background += `linear-gradient(0deg, ${style.backgroundColor}, ${style.backgroundColor})`;
                    }
                }
                break;
            case 'img':
                if (backgroundImage) {
                    if (background.length) background += ', ';
                    //URL
                    background += backgroundImage;

                    //POSITION
                    let positionX = style.backgroundPositionX === 'auto' ? 'center' : style.backgroundPositionX;
                    let positionY = style.backgroundPositionY === 'auto' ? 'center' : style.backgroundPositionY;
                    background += ` ${positionX || 'center'} ${positionY || 'center'}`;

                    //SIZE
                    background += ` / ${style.backgroundSize || 'cover'}`;

                    //REPEAT
                    background += ` ${style.backgroundRepeat || 'no-repeat'}`;

                    //ATTACHEMENT
                    let attachement = style.backgroundAttachment === 'unset' ? null : style.backgroundAttachment;
                    background += ` ${attachement || 'scroll'}`;
                }
                break;
            default:
                break;
        }
    }

    return background.length ? background : 'none';
}
