---
name: ww-loader
description: The ww-loader component provides a customizable collection of CSS-animated loading spinner styles, allowing developers to indicate processing states with various animations, colors, and sizes using the spinkit library.
keywords:
  - loading spinner
  - css animations
  - spinkit library
  - spinner styles
  - loading indicators
  - configurable component
  - application design
  - spinner types
  - color customization
  - size adjustment
---

#### ww-loader

Component Purpose: Renders various loading spinner animations to indicate loading or processing states within an application.

Properties:
- spinner: 'plane' | 'chase' | 'bounce' | 'wave' | 'pulse' | 'flow' | 'swing' | 'circle' | 'circle-fade' | 'grid' | 'fold' | 'wander' - Type of spinner animation. Default: 'plane'
- color: string - Spinner color.
- size: string - Spinner size in pixels, must include 'px' unit suffix (only 'px' is supported).

Children: none

Special Features:
Uses spinkit library for spinner animations
CSS-based animations for smooth performance

Example:
<elements>
{"uid":0,"tag":"ww-loader","name":"Plane Loader","props":{"default":{"spinner":"plane","color":"#3090ff","size":"17px"}},"styles":{"default":{"padding":"24px","borderRadius":"12px","boxShadow":"0 2px 4px rgba(0,0,0,0.1)","backgroundColor":"#ffffff"}}}
</elements>
