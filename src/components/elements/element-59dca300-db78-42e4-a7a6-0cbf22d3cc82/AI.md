---
name: ww-button
description: Configurable button component with styling, icons, and form submission capabilities.
keywords: [button, submit, reset, icon, form, styling]
---

#### ww-button

Purpose: Renders a button element with configurable type, styling, and icon support.
Ex: Button without icon: {"uid": "cta","tag": "ww-button","name": "Button","states": [],"props": {"default": { ... }},"styles": {"default": { "cursor":"pointer", ... }},"children": {}}

Properties:
- text: string|object - Button text content. Can be an object with {"lang":"text"} format (e.g: {"en":"English text","fr":"French text"})
- backgroundColor: string|null - Text background color
- buttonType: 'button'|'submit'|null - Button type
- disabled: boolean - Disables button
- hasLeftIcon: boolean - Shows left icon
- hasRightIcon: boolean - Shows right icon

Children:
- ww-button does have a `children` key. Only `leftIcon` and `rightIcon`.
- leftIcon: ww-icon - Left icon with right margin on the icon
- Ex:
  <elements>
  {"uid":"left-icon-cta","tag":"ww-button","name":"With left icon","states":[],"props":{"default":{"hasLeftIcon":true}},"styles":{"default":{"color":"#ff0000","fontSize":"20px","cursor":"pointer"}},"children":{"leftIcon":{"uid":"left-icon"}}}
  {"uid":"left-icon","tag":"ww-icon","name":"Left Icon","states":[],"props":{"color":"#ff0000","fontSize":"20","icon":"icon name"},"styles":{"default":{"margin":"0 12px 0 0"}}}
  </elements>
- rightIcon: ww-icon - Right icon with left margin on the icon
- Ex: 
  <elements>
  {"uid":"right-icon-cta","tag":"ww-button","name":"With right icon","states":[],"props":{"default":{"hasRightIcon":true}},"styles":{"default":{"color":"#ff0000","fontSize":"20px","cursor":"pointer"}},"children":{"rightIcon":{"uid":"right-icon"}}}
  {"uid":"right-icon","tag":"ww-icon","name":"Right Icon","states":[],"props":{"color":"#ff0000","fontSize":"20","icon":"icon name"},"styles":{"default":{"margin":"0 0 0 12px"}}}
  </elements>

Features:
- Inherits ww-text properties
- Action triggering support
- Form submission integration
- Button color and size are not passed to the icons. These styles are mandatory on the icon props (no unit on icon).

Events:
- focus: Triggered when button receives focus. No payload.
- blur: Triggered when button loses focus. No payload.

Variables: none
