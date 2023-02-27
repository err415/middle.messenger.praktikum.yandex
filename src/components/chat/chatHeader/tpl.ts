const tpl = `

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

`;

export default tpl;
