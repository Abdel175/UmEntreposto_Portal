---
name: ww-map
description: The ww-map component integrates with Google Maps JavaScript API to display an interactive map on a webpage, offering customizable map types, styles, controls, and markers, while supporting data binding and event emissions for enhanced user interaction.
keywords:
  - google maps integration
  - interactive map
  - custom map styles
  - map controls
  - marker customization
  - geographic visualization
  - map events
  - google api key
  - map markers
  - map zoom level
---

#### ww-map

Displays an interactive Google Maps within the webpage for visualizing geographic locations, navigation, and marker interactions.

Properties:
- defaultMapType: 'roadmap' | 'satellite' | 'hybrid' | 'terrain' - Type of map. Default: 'roadmap'
- mapStyle: null | 'silver' | 'retro' | 'dark' | 'night' | 'aubergine' | 'custom' - Style of map. Default: 'dark'
- markersIcon: boolean - Use custom marker icons. Default: false
- markersAutoSize: boolean - Auto size marker icons. Default: true
- defaultMarkerUrl: string | null - Default marker icon URL. Default: null
- defaultMarkerWidth: number - Default marker icon width. Default: 40
- defaultMarkerHeight: number - Default marker icon height. Default: 40
- mapStyleJSON: { code: string } - Custom JSON style for map
- googleKey: string - Google API key. Default: ''
- lat: string - Initial latitude. Default: '40.712784'
- lng: string - Initial longitude. Default: '-74.005941'
- zoom: number - Initial zoom level. Default: 11
- markers: array - Array of marker objects. Default: [{name:'New York',lat:40.712784,lng:-74.005941},{name:'Brooklin',lat:40.650002,lng:-73.949997}]
- nameField: string | null - Field name for marker name. Default: null
- latField: string | null - Field name for marker latitude. Default: null
- lngField: string | null - Field name for marker longitude. Default: null
- urlField: string | null - Field name for marker icon URL. Default: null
- widthField: string | null - Field name for marker icon width. Default: null
- heightField: string | null - Field name for marker icon height. Default: null
- markerTooltipTrigger: null | 'hover' | 'click' - Trigger for marker tooltips. Default: 'hover'
- fixedBounds: boolean - Fix map bounds to markers. Default: true
- zoomControl: boolean - Show zoom control. Default: true
- scaleControl: boolean - Show scale control. Default: true
- rotateControl: boolean - Show rotate control. Default: true
- streetViewControl: boolean - Show Street View control. Default: true
- fullscreenControl: boolean - Show fullscreen control. Default: true
- mapTypeControl: boolean - Show map type control. Default: true

Children:
- wwObjects: any[] - Child components to display inside map

Events:
- map:click - Triggered when map is clicked. Payload: {latLng: {lat, lng}, domEvent, pixel: {x, y}}
- marker:mouseover - Triggered when mouse enters marker. Payload: {marker: {content, position, rawData}, domEvent}
- marker:mouseout - Triggered when mouse leaves marker. Payload: {marker: {content, position, rawData}, domEvent}
- marker:click - Triggered when marker is clicked. Payload: {marker: {content, position, rawData}, domEvent}

Variables: none

Note: If no API key is provided, inform user to provide one for map functionality.
