---
name: ww-form-container
description: A form container component that manages form inputs, validation, and submission
keywords: [form, container, validation, submit, inputs]
---

#### ww-form-container

A form container component that provides form management capabilities including input registration, validation, and submission handling. It serves as a wrapper for form elements and manages their state and interactions.

Properties:
- validation: {type: 'submit' | 'change', defaultValue: 'submit'}
  - Controls when form validation occurs
- debounceDelay: {type: 'string', defaultValue: '500ms', responsive: true}
  - Delay before validation triggers when validation is set to 'change'
  - Only visible when validation is 'change'
  - Units: Only milliseconds is supported (ms)
  - Range: 1-5000ms
- autocomplete: {type: 'OnOff', defaultValue: true}
  - Enables/disables form autocomplete functionality

Children:
- formContent: any[] - The children of the form container

Events:
- submit: Triggered when the form is submitted

Variables:
- form: {type: 'object'}
  - fields: A record containing all form input values and validation states. Keys are field names
    - isValid: Boolean indicating if all form inputs are valid
    - value: Value of the field
  - isSubmitting: Boolean indicating if form is currently submitting
  - isSubmitted: Boolean indicating if form has been submitted
  - isValid: Boolean indicating if all form inputs are valid

Note:
For the inputs, if you want to add a validation formula, allows specify "customValidation": true in the props of the input.
Do not disable submit button when the form is invalid. The form handle validation error on its own.

Example:
<elements>
{"uid":0,"tag":"ww-div","name":"Form Container","styles":{"default":{"width":"100%","display":"flex","padding":"32px","maxWidth":"640px","boxShadow":"0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)","borderRadius":"12px","backgroundColor":"#FFFFFF","rowGap":"32px","columnGap":"32px","flexDirection":"column"}},"children":{"children":[{"uid":1},{"uid":4}]}}
{"uid":1,"tag":"ww-div","name":"Form Header","styles":{"default":{"margin":"0 0 16px 0","display":"flex","rowGap":"8px","columnGap":"8px","flexDirection":"column"}},"children":{"children":[{"uid":2},{"uid":3}]}}
{"uid":2,"tag":"ww-text","name":"Form Title","props":{"default":{"tag":"h1","text":{"en":"Input Components Showcase"}}},"styles":{"default":{"color":"#111827","fontSize":"24px","fontWeight":"600"}}}
{"uid":3,"tag":"ww-text","name":"Form Description","props":{"default":{"tag":"p","text":{"en":"This form demonstrates various input types and their interactions"}}},"styles":{"default":{"color":"#6B7280","fontSize":"14px"}}}
{"uid":4,"tag":"ww-form-container","name":"Showcase Form","settings":{"interactions":[{"id":"386a8ac1-e3b0-4a50-a26a-6b571b4c2123","actions":{"4233aa2a-1fcf-4a07-ade7-897082adab8b":{"id":"4233aa2a-1fcf-4a07-ade7-897082adab8b","type":"log","message":"sdfdsfsdf","preview":{"wwFormula":"context.local.data?.['form']?.['isSubmitted']"},"__wwdescription":"","next":"dbf3c6d2-f47f-47bf-8ceb-01403b096fc6"},"dbf3c6d2-f47f-47bf-8ceb-01403b096fc6":{"id":"dbf3c6d2-f47f-47bf-8ceb-01403b096fc6","type":"_wwLocalMethod_form.setFormState","args":[null,true]},"aac16a73-bb72-4499-b462-11a66398fcbe":{"id":"aac16a73-bb72-4499-b462-11a66398fcbe","type":"_wwLocalMethod_form.setFormState","next":"4233aa2a-1fcf-4a07-ade7-897082adab8b","args":[true]}},"trigger":"submit","firstAction":"aac16a73-bb72-4499-b462-11a66398fcbe"}]},"props":{"default":{"validation":"change","autocomplete":true,"debounceDelay":"2183ms"}},"styles":{"default":{"display":"block"}},"children":{"formContent":[{"uid":5}]}}
{"uid":5,"tag":"ww-div","name":"Basic Inputs Section","styles":{"default":{"display":"flex","rowGap":"24px","columnGap":"24px","flexDirection":"column"}},"children":{"children":[{"uid":6},{"uid":10},{"uid":14},{"uid":18}]}}
{"uid":6,"tag":"ww-div","name":"Text Input Group","styles":{"default":{"display":"flex","rowGap":"4px","columnGap":"4px","flexDirection":"column"}},"children":{"children":[{"uid":7},{"uid":8},{"uid":9}]}}
{"uid":7,"tag":"ww-text","name":"Text Input Label","props":{"default":{"tag":"p","text":{"en":"Full Name"}}},"styles":{"default":{"margin":"0 0 4px 0","color":"#374151"}}}
{"uid":8,"tag":"ww-input-basic","name":"Text Input","props":{"default":{"max":"10000","min":"0","rows":4,"step":1,"type":"text","value":"","resize":false,"maxDate":"","minDate":"","debounce":false,"readonly":false,"required":true,"fieldName":"full-name","precision":"0.1","hideArrows":false,"validation":{"code":"!! context.local.data?.['form']?.['fields']?.['full-name']?.['value']"},"autocomplete":false,"debounceDelay":"500ms","timePrecision":1,"displayPassword":false,"customValidation":true}},"styles":{"default":{"width":"100%","backgroundColor":"#FFFFFF"}}}
{"uid":9,"tag":"ww-text","name":"Name Error Message","props":{"default":{"tag":"p","text":{"en":"Please enter a valid name"}}},"styles":{"default":{"margin":"4px 0 0 0","display":{"wwJavascript":"```return context.local.data?.['form']?.['fields']?.['full-name']?.['value']===false```"},"color":"#DC2626","fontSize":"12px"}}}
{"uid":10,"tag":"ww-div","name":"Email Input Group","styles":{"default":{"display":"flex","rowGap":"4px","columnGap":"4px","flexDirection":"column"}},"children":{"children":[{"uid":11},{"uid":12},{"uid":13}]}}
{"uid":11,"tag":"ww-text","name":"Email Input Label","props":{"default":{"tag":"p","text":{"en":"Email"}}},"styles":{"default":{"margin":"0 0 4px 0","color":"#374151"}}}
{"uid":12,"tag":"ww-input-basic","name":"Email Input","props":{"default":{"max":"10000","min":"0","rows":4,"step":1,"type":"text","value":"","resize":false,"maxDate":"","minDate":"","debounce":false,"readonly":false,"required":true,"fieldName":"email","precision":"0.1","hideArrows":false,"validation":{"wwFormula":"wwFormulas.isEmail(context.local.data?.['form']?.['fields']?.['email']?.['value'])"},"autocomplete":false,"debounceDelay":"500ms","timePrecision":1,"displayPassword":false,"customValidation":true}},"styles":{"default":{"width":"100%","backgroundColor":"#FFFFFF"}}}
{"uid":13,"tag":"ww-text","name":"Email Error Message","props":{"default":{"tag":"p","text":{"en":"Please enter a valid email address"}}},"styles":{"default":{"margin":"4px 0 0 0","display":{"wwJavascript":"```return context.local.data.form.fields.email.isValid===false```"},"color":"#DC2626","fontSize":"12px"}}}
{"uid":14,"tag":"ww-div","name":"Password Input Group","styles":{"default":{"display":"flex","rowGap":"4px","columnGap":"4px","flexDirection":"column"}},"children":{"children":[{"uid":15},{"uid":16},{"uid":17}]}}
{"uid":15,"tag":"ww-text","name":"Password Input Label","props":{"default":{"tag":"p","text":{"en":"Password"}}},"styles":{"default":{"margin":"0 0 4px 0","color":"#374151"}}}
{"uid":16,"tag":"ww-input-basic","name":"Password Input","props":{"default":{"max":"10000","min":"0","rows":4,"step":1,"type":"text","value":"","resize":false,"maxDate":"","minDate":"","debounce":false,"readonly":false,"required":true,"fieldName":"password","precision":"0.1","hideArrows":false,"validation":{"wwJavascript":"```return wwFormulas.textLength(context.local.data?.['form']?.['fields']?.['password']?.['value'])>8```"},"autocomplete":false,"debounceDelay":"500ms","timePrecision":1,"displayPassword":false,"customValidation":true}},"styles":{"default":{"width":"100%","backgroundColor":"#FFFFFF"}}}
{"uid":17,"tag":"ww-text","name":"Password Error Message","props":{"default":{"tag":"p","text":{"en":"Password must be at least 8 characters"}}},"styles":{"default":{"margin":"4px 0 0 0","display":{"wwJavascript":"```return context.local.data?.['form']?.['fields']?.['password']?.['isValid']  === false```"},"color":"#DC2626","fontSize":"12px"}}}
{"uid":18,"tag":"ww-button","name":"Submit Button","states":[{"id":"_wwHover","label":"hover"},{"id":"_wwActive","label":"active"}],"props":{"default":{"text":{"en":"Submit Form"},"disabled":false,"buttonType":"submit"}},"styles":{"default":{"width":"100%","cursor":"pointer","margin":"16px 0 0 0","padding":"10px 20px","transition":"all 0.2s ease","borderRadius":"6px","backgroundColor":"#3B82F6","color":"#FFFFFF","fontSize":"14px","fontWeight":"500"},"_wwHover_default":{"backgroundColor":"#2563EB"},"_wwActive_default":{"backgroundColor":"#1D4ED8"}}}
</elements>
