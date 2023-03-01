const tpl = `
{{#each items}}
    <div class=" {{ class_wrap_fields }}">
        <label class="{{ label_class }}" for="{{ label_for }}">{{ label_value }}</label>
        <input class="{{ input_class }}" name="{{ input_name }}" type="{{ input_type }}">
        <span class="{{ class_validate_err }}">{{ valid_error }}</span>
        </div>
    {{/each}}
`;

export default tpl;
