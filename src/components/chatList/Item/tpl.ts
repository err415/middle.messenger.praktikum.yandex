const tpl = `

{{#each items}}
<article class="{{ class_chatlist_item }}">
<span class="{{ class_list_chat_avatar }}"></span>
    <div class="{{ class_chatList_shortInfoMain}}">
<span class="{{ class_shortName }}"> {{ chat_user_name }}</span>
<span class="{{ class_shortMsg }}"> {{ chat_user_shortMsg }}</span>
</div>
<div class="{{ class_chatList_shortInfoSlave}}">
<span class="{{ class_shortDateTime }}"> {{ chat_user_datetime }}</span>
<div class="{{ class_block_msgCount }}">

<span class="{{ class_item_msgCount }}"> {{ chat_user_msg_count }}</span>
</div>
</div>
</article>
    {{/each}}
`;
export default tpl;
