---
name: ww-progressbar-donut
description: The `ww-progressbar-donut` component is a customizable, donut-shaped progress bar that supports dynamic styling, color adjustments, animations, and real-time updates, utilizing the `vue-ellipse-progress` library and `ResizeObserver` API for responsive design.
keywords:
  - donut-shaped progress bar
  - customizable styles
  - vue-ellipse-progress
  - resizeobserver api
  - dynamic updates
  - variable binding
  - change event
  - animation duration
  - fillcolor
  - emptycolor
---

#### ww-progressbar-donut

Renders a donut-shaped progress bar with customizable styles, colors, and animations.

Properties:
- value: number - Current progress value. Default: 65
- style: 'center' | 'out' | 'out-over' | 'in' | 'in-over' - Progress bar style. Default: "center"
- offset: string - Progress line offset from center (px). Visible with "out" or "in" style
- thickness: string - Fill progress line thickness (px)
- emptyThickness: string - Empty progress line thickness (px)
- fillColor: string | null - Filled portion color
- emptyColor: string | null - Empty portion color
- animationDuration: string - Animation duration (ms)
- animationDelay: string - Animation delay (ms)

Children:
- container: ww-text[] - Text array for progress value display

Features:
- Uses vue-ellipse-progress library
- Responsive sizing via ResizeObserver API
- Dynamic updates through variable binding
- Change event emission on value updates

Example:
{"tag":"ww-progressbar-donut","props":{"default":{"style":"center","value":65,"fillColor":"#22c55e","thickness":"8px","emptyColor":"#e2e8f0","animationDuration":"1500ms"}},"styles":{"default":{"width":"120px","height":"120px"}},"children":{"container":[{"tag":"ww-div","name":"Container","styles":{"default":{"width":"100%","display":"flex","maxWidth":"940px","flexDirection":"column"}},"children":{"children":[{"tag":"ww-text","props":{"default":{"tag":"p","text":{"en":{"__wwtype":"f","defaultValue":"New","code":"'65%'"}}}},"styles":{"default":{"color":"#000000","fontSize":"18px","textAlign":"center","fontWeight":700}}},{"tag":"ww-text","props":{"default":{"tag":"p","text":{"en":"New"}}},"styles":{"default":{"color":"#64748b","fontSize":"14px","textAlign":"center"}}}]}}]}}

Events:
- change: Triggered when value changes
  Payload: { value: number }
  Description: Emitted when the progress value is updated

Variables:
- value: number
  Default: content.value or 0
  Description: Current progress value that can be bound to external data
