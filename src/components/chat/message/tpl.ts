const tpl = `
{{#each items}}
<section>
<h1 class="{{ class_msg_date }}">today</h1>
<div class="{{ class_msg }} {{ class_msg_me }}">
<blockquote>{{ msg_me }}</blockquote>
</div>
{{#if isAttach_me}}
<img class="{{ class_img_attach }}" src="{{ src_img_attach }}" alt="{{ alt_img_attach }}">
{{/if}}

<div class="{{ class_msg }} {{ class_msg_them }}">
 
<blockquote> {{{ msg_them }}}</blockquote>
{{#if isAttach_them}}
<img class="{{ class_img_attach }}" src="../../../assets/img/slets.png" alt="{{ alt_img_attach }}">
{{/if}} 
</div>

</section>
{{/each}}

`;
export default tpl;
