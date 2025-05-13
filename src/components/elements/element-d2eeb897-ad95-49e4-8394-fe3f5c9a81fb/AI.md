---
name: ww-datagrid-ag
description: An advanced datagrid supporting sort, filter, selection and virtual scroll. Based on AG grid
keywords:
    - datagrid
    - table
---

#### ww-datagrid-ag

1. **Component Purpose:**
A highly customizable data grid/table component that supports features like sorting, filtering, pagination, row selection, and custom actions. It's designed to handle large datasets efficiently with various data types and styling options. Its based on the AGGrid framework

2. **Properties:**
   - `rowData`: `Array<object>` - MANDATORY - Data to display in the grid. Default: `[]`.
   - `idFormula`: `Formula` - MANDATORY - Formula to generate unique IDs for each row. . Always use 'context.mapping...'
   - `height`: `string` - Height of the grid. Default: `"400px"`.
   - `textColor`: `string` - Color of all the text in the grid. Use more specific field if needed (headerTextColor, cellColor, actionColor)
   - `headerBackgroundColor`: `string | null` - Background color of the header cells.
   - `headerTextColor`: `string | null` - Text color of the header cells.
   - `headerFontWeight`: `null | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900` - Font weight of header text.
   - `headerFontSize`: `string` - Font size of header text.
   - `headerFontFamily`: `string` - Font family for header text.
   - `borderColor`: `string | null` - Color of grid borders.
   - `cellColor`: `string | null` - Text color of grid cells.
   - `cellFontFamily`: `string` - Font family for cell text.
   - `cellFontSize`: `string` - Font size for cell text.
   - `rowBackgroundColor`: `string | null` - Background color for rows.
   - `rowAlternateColor`: `string | null` - Background color for alternate rows. Be sure it works well with cell default text color, as the color is common
   - `rowHoverColor`: `string | null` - Background color when hovering over rows. Must be a semi transparent color, at it will be an overlay on top
   - `rowVerticalPaddingScale`: `Number | null` - A number for scaling the vertical padding of cells. Use 2 to multiply it by 2 or a number between 0 and 1 to make it smaller.
   - `columnHoverHighlight`: `string | null` - Does column highlight on hover is active 
   - `columnHoverColor`: `string | null` - If active, column hover highlight. Must be a semi transparent color, at it will be an overlay on top
   - `selectedRowBackgroundColor`: `string | null` - Background color for selected rows. Must be a semi transparent color, at it will be an overlay on top
   - `menuTextColor`: `string | null` - Text color for the filter menu
   - `menuBackgroundColor`: `string | null` - Background color for the filter menu
   - `selectionCheckboxColor`: `string | null` - Override the theme background color for selection checkboxes
   - `cellSelectionBorderColor`: `string | null` - Override the theme boder color for cell selection
   - `actionColor`: `string | null` - Text color for action buttons.
   - `actionBackgroundColor`: `string | null` - Background color for action buttons.
   - `actionPadding`: `string` - Padding for action buttons.
   - `actionBorder`: `string` - Border style for action buttons.
   - `actionBorderRadius`: `string` - Border radius for action buttons.
   - `actionFontSize`: `string`: Font size of the button in action column
   - `actionFontFamily`: `string`: Font family of the button in action column
   - `actionFontWeight`: `string`: Font weight of the button in action column
   - `actionFontStyle`: `string`: Font style of the button in action column
   - `actionLineHeight`: `string`: Line height of the button in action column
   - `rowSelection`: `'none' | 'single' | 'multiple'` - Type of row selection. Default: `"none"`. Must be a semi transparent color, at it will be an overlay on top
   - `pagination`: `boolean` - Enable/disable pagination. Default: `false`.
   - `paginationPageSize`: `number` - Number of rows per page. Default: `10`.
   - `initialFilters`: `{id: { filterType, type, filter } }` (Optional): An aggrid object describing the initial filtering. Here is an example: `{ id1: { filterType: "number", type: "greaterThan", filter: 50}}`
   - `initialSort`: `Array<{colId: id, sort: 'asc' |'dsc'}>` (Optional): Description of the initial sort column. Here is an example: `[{colId: "ID", sort: "asc"}]`
   - `columns`: `Array<{
       headerName: string,
       cellDataType: 'text' | 'number' | 'boolean' | 'dateString',
       field: string,
       useCustomLabel: boolean, // Default: false, if true, displayLabelFormula is used to format the label
       displayLabelFormula: Formula, // Only if useCustomLabel is true
       widthAlgo: 'flex' | 'fixed', // Default: 'fixed'
       width: string, // Only if widthAlgo is 'fixed'
       flex: number, // Only if widthAlgo is 'flex'
       minWidth: string,
       maxWidth: string,
       width: string,
       flex: number,
       filter: boolean,
       sortable: boolean,
       pinned: undefined | 'left' | 'right'
     } | {
       headerName: string,
       cellDataType:'image',
       field: string,
       widthAlgo: 'flex' | 'fixed', // Default: 'fixed'
       width: string, // Only if widthAlgo is 'fixed'
       flex: number, // Only if widthAlgo is 'flex'
       minWidth: string,
       maxWidth: string,
       width: string,
       flex: number,
       imageWidth: string,
       imageHeight: string,
       pinned: undefined | 'left' | 'right'
     } | {
       headerName: string,
       cellDataType:'action',
       field: string,
       widthAlgo: 'flex' | 'fixed', // Default: 'fixed'
       width: string, // Only if widthAlgo is 'fixed'
       flex: number, // Only if widthAlgo is 'flex'
       minWidth: string,
       maxWidth: string,
       width: string,
       flex: number,
       actionName: string,
       actionLabel: string,
       pinned: undefined | 'left' | 'right'
     }>` - Column configurations. Each object describe a column of the grid, and some options may depends on the selected type of data. For each object, width can be undefined, if defined its must be a string in the shape of {value}px. Flex will be ignore if width is defined or equal to auto and must be an integer.`
  - `lang`: `'en' | 'fr' | 'de' | 'pt' | 'custom'` - Locale use for the interface. Default: `"en"`. If `custom` the property localeText should be provided
  - `localeText`: only needed when lang is set to custom. Must be an object provided to aggrid 

3. **Children Components:**

There is no children.

4. **Special Features:**
   - Supports multiple data types including text, numbers, dates, images, and action buttons
   - Advanced filtering and sorting capabilities
   - Customizable pagination
   - Single and multiple row selection modes
   - Custom action buttons with styling options
   - Responsive design with customizable column widths
   - Row hover and selection states
   - Alternate row coloring
   - Comprehensive header and cell styling options

7. **Events:**

- action: Triggered when clicking on a action cell. Payload: { actionName: 'name of the column', row: { /* row data */}, id: 0, index: 0, displayIndex: 0 }
- cellValueChanged: Triggered after a cell edition so that you can update the data source. Payload: { oldValue: {/* old value */}, newValue: { /* row data */}, columnId: "id", row: { /* row data */} }
- rowSelected: triggered when a row is selected. Payload: { row: { /* row data */} }
- rowDeselected: triggered when a row is deselected. Payload: { row: { /* row data */} }

8. **Notes:**

- idFormula is 'Formula' type (ex: `{ "wwFormula": "context.mapping..." }`, must always use wwFormula, wwJavascript is not allowed). Be sure it is unique per row
**CRITICAL** : You have to perfectly style this datagrid according to the page.
- Default theme is usually great, use other colors only if you need to be on brand

Example:
<elements>
{"uid":0,"tag":"ww-datagrid-ag","props":{"default":{"height":"400px","columns":[{"field":"id","width":"40px","filter":true,"sortable":true,"headerName":"ID","cellDataType":"number"},{"field":"avatar","width":"60px","filter":true,"sortable":true,"headerName":"Avatar","imageWidth":"32px","imageHeight":"32px","cellDataType":"image"},{"field":"email","filter":true,"minWidth":"200px","sortable":true,"widthAlgo":"flex","headerName":"Email"},{"field":"role","filter":true,"minWidth":"100px","sortable":true,"widthAlgo":"flex","headerName":"Role"},{"field":"status","filter":true,"minWidth":"100px","sortable":true,"widthAlgo":"flex","headerName":"Status"},{"field":"joinDate","filter":true,"minWidth":"120px","sortable":true,"widthAlgo":"flex","headerName":"Join date","cellDataType":"dateString","useCustomLabel":true,"displayLabelFormula":{"wwJavascript":"return new Date(context.mapping).toLocaleDateString('fr-FR')"}},{"field":"firstName","filter":true,"minWidth":"100px","sortable":true,"widthAlgo":"flex","headerName":"First name"},{"field":"lastName","filter":true,"minWidth":"100px","sortable":true,"widthAlgo":"flex","headerName":"Last name"},{"width":"100px","pinned":"right","actionName":"Edit","headerName":"Action","actionLabel":"Edit","cellDataType":"action"}],"rowData":{"defaultValue":[],"wwFormula":"variables['c3243c02-0872-48ef-bed5-5b81f37c140d']"},"idFormula":{"wwFormula":"context.mapping?.['id']"},"pagination":false,"rowSelection":"multiple","movableColumns":true,"resizableColumns":true,"paginationPageSize":10,"headerBackgroundColor":"#f8fafc","headerTextColor":"#0f172a","headerFontWeight":600,"headerFontSize":"14px","borderColor":"#e2e8f0","cellColor":"#334155","cellFontSize":"14px","rowBackgroundColor":"#ffffff","rowAlternateColor":"#f8fafc","rowHoverColor":"#3b82f60a","rowVerticalPaddingScale":1.2,"selectedRowBackgroundColor":"#3b82f614","columnHoverHighlight":true,"columnHoverColor":"#3b82f60a","menuTextColor":"#334155","menuBackgroundColor":"#ffffff","actionColor":"#3b82f6","actionPadding":"6px 12px","actionBorderRadius":"6px","actionFontSize":"14px","actionFontWeight":600}}}
</elements>

