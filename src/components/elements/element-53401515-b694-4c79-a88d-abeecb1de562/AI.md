---
name: ww-expand
description: Accordion-style interface element that toggles content visibility with a button or clickable area, featuring transition animations and customizable layouts for both collapsed and expanded states.
keywords:
  - accordion component
  - expand collapse
  - toggle button
  - transition animations
  - content area
  - initial value
  - toggle layout
  - active toggle layout
  - content layout
  - editor mode
---

#### ww-expand

Accordion-style component that hides/reveals content via expand/collapse state with toggle button and animated transitions.

Properties:
- value: boolean - Initial expand/collapse state. Default: false.

Children:
- toggleLayout: any[] - Components for toggle area
- activeToggleLayout: any[] - Components for expanded toggle area (requires all styles from toggleLayout)
- contentLayout: any[] - Components for content area

Note: All 3 children are required.

Events:
- change: {domEvent: Event, value: boolean} - Triggered when expand state changes via user interaction
- initValueChange: {value: boolean} - Triggered when initial value changes

Variables:
- value: boolean - Current expand state of the component
