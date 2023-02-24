const tpl = `
<div class="{{ class_labelBlock }}">
{{#each labels}}
<label class="{{ class_label }}" for="{{ forLabel }}"> {{ label_value }}</label>
{{/each}}
</div>
{{#each inputs}}
<input id="{{ input_id }}" name="{{ input_name }}" class="{{ class_inputEditProfile }}" 
type="{{input_type}}" placeholder="{{ input_placeholder }}">
{{/each}}
<div class="{{ class_descBlock }}">
{{#each descriptions}}
<p class="{{ class_desc }}">{{ desc_value }}</p>
{{/each}}
    </div>
  
  `;
export default tpl;
