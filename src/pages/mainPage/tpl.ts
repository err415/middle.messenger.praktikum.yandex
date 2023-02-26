const tpl = `

    <section class="{{ class_left_section }}">
           <section class="{{ class_topBlock }}">
           
           <article class="{{ class_setting_list }}">
           
           </article>
           <article class=" {{ class_search }}">
           <span class="{{ class_search_img }}"></span>
           {{{ input_search }}}
           </article>
           
</section>
    <article class="{{ class_article_left_item }}">
           <span class="{{ class_list_chat_avatar }}"></span>
           <div class="{{ class_chatList_shortInfoMain}}">
           <span class="{{ class_shortName }}"> {{ chat_user_name }}</span>
           <span class="{{ class_shortMsg }}"> {{ chat_user_shortMsg }}</span>
</div>
<div class="{{ class_chatList_shortInfoSlave}}">
           <span class="{{ class_shortDateTime }}"> {{ chat_user_datetime }}</span>
           <span class="{{ class_msgCount }}"> {{ chat_user_msg_count }}</span>
</div>
    </article>
    
    
</section>
<section class="{{ class_right_section }}">
    <header class="{{ class_right_header }}">
        <div class="{{ class_header_block_left }}">
            <span class="{{ class_header_block_left_avatar }}"></span>
            <span class="{{ class_header_block_left_name }}">{{ chat_user_name }}</span>
        </div>
        <div class="{{ class_header_block_right }}">
            <span class="{{ class_header_icon_search }}"></span>
            <span class="{{ class_header_icon_phone }}"></span>
            <span class="{{ class_header_icon_list }}"></span>
        </div>
    </header>
<main class="{{ class_right_body }}">

BODY
</main>
<footer class="{{ class_right_footer }}">
<div class="{{ class_message_icon_smile_wrap }}">
    <span class="{{ class_message_icon_smile }}"></span>
</div>
    {{{ textarea_msg }}}
    <div class="{{ class_message_icon_clip_wrap}}">
    <span class="{{ class_message_icon_clip }}"></span>
</div>
</footer>

</section>

`;
export default tpl;
