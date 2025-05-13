---
name: ww-image
description: Display images with customizable options such as aspect ratio, object-fit, overlays, filters, responsive styles, multi-language alt text, and loading capabilities.
keywords:
  - image display
  - aspect ratio
  - object-fit
  - image overlays
  - css filters
  - alt text
  - multi-language support
  - lazy loading
  - responsive styles
  - linkable images
---

#### ww-image

Component Purpose: Display an image with various customization options.

***Properties:***
- url: string - Image URL. Default: "https://cdn.weweb.app/public/images/no_image_selected.png"
- objectFit: null | 'cover' | 'contain' - Image resize behavior. Default: null. Set `objectFit` to `cover` by default so the image does not look stretched
- overlay: string | null - CSS color/gradient overlay. Default: null
- filter: string - CSS filter. Default: ""
- alt: string | { [lang]: string } - Alt text with multi-language support. Default: { en: "" }
- loading: 'lazy' | 'eager' - Loading strategy. Default: "lazy"

***Children:*** none

***Special Features:***
- Responsive and state-based styles for objectFit, overlay, filter
- Linkable for URL navigation
- Controllable aspect ratio via CSS

***Events:*** none

***Variables:*** none

***Important***:
- Use valid unsplash urls
- Avoid using images that are more than 2000x2000px: use properly sized images
- Set `objectFit` to `cover` by default so the image does not look stretched
