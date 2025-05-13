---
name: ww-icon
description: Renders a customizable icon with adjustable color, and type, linkable to URL/action for interactive functionality.
keywords:
  - icon rendering
  - customizable size
  - customizable color
  - icon type
  - linkable icon
  - responsive properties
  - state bindings
  - url redirection
  - action trigger
  - icon class name
---

#### ww-icon

Component Purpose: Renders an icon element with customizable size, color, and icon type. Can be linked to URL or action.
When put inside a ww-button, do not forget to ad the proper margin to the left or right.

Properties:
- color: string - Color of icon (name, hex, RGB/RGBA). (Mandatory)
- icon: string - iconSet/name. Default: "phosphor-regular/heart" (Mandatory)

Children: none

Features:
- Linkable for URL redirection or action triggers
- Responsive fontSize and color values with states support
- Icon property supports state bindings
- When the icon is the child of a button, do not forget to add the proper margin
- Icon property must match an available iconSet in the current project

Events: none

Variables: none

*** IMPORTANT ***: The `color` property are in the `props` key of the element, not in the `styles` key.
*** IMPORTANT ***: The size of the icon is managed using common `width` and `height` properties, `height` can be set to auto
<example>
  Icon with different color and backgroundColor on hover:
  {"uid":"hover_icon","tag":"ww-icon","name":"Hover Icon","props":{"default":{"color":"red", ...},"_wwHover_default":{"color":"blue"},"_wwHover_mobile":{"color":"blue"}},"styles":{"default":{"backgroundColor":"yellow", ...},"_wwHover_default":{"backgroundColor":"green"}}}
</example>
