const tpl = `
{{#each items}}
<section>
<h1 class="{{ class_msg_date }}">today</h1>
<div class="{{ class_msg }} {{ class_msg_me }}">
<blockquote>{{ msg_me }}</blockquote>

</div>

<div class="{{ class_msg }} {{ class_msg_them }}">
 
<blockquote> {{{ msg_them }}}</blockquote>
    
</div>

</section>
{{/each}}

`;
export default tpl;
