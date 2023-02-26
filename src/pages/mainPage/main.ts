import tpl from './tpl';
import Component from "../../services/Component";
import {Input} from "../../components/input/input";
import {Textarea} from "../../components/textarea/textarea";


export default class MainPage extends Component {
    constructor(tag = 'div', props: any  = {}) {

        tag = 'section';
        props['attr'] = {
            class: 'mainPage-wrapper',
        }
        props.chat_user_name = 'Faina Ranevskaya';
        props.chat_user_shortMsg = 'Привет, как ты?';
        props.chat_user_datetime = 'Пт';
        props.chat_user_msg_count = '12';
        props.class_left_section = 'wrap-left';
        props.class_article_left_item = 'item-article-left';
        props.class_topBlock = 'section-left-block';
        props.class_setting_list = 'list-left';
        props.class_search = 'search-right';
        props.class_search_img = 'class_search_img';
        props.class_right_section = 'wrap-right';
        props.class_right_header = 'right_section_header';
        props.class_right_body = 'right_section_body';
        props.class_right_footer = 'right_section_footer';
        props.class_header_block_right = 'header_block_right';
        props.class_header_block_left = 'header_block_left';
        props.class_message_icon_smile_wrap = 'icon-smile-wrapper';
        props.class_message_icon_clip_wrap = 'icon-clip-wrapper';
        props.class_message_icon_smile = 'icon-smile-item';
        props.class_message_icon_clip = 'icon-clip-item';
        props.class_header_block_left_avatar = 'header_chat_user_avatar';
        props.class_header_block_left_name = 'header_chat_user_name';
        props.class_header_icon_search = 'header_chat_user_icon_search';
        props.class_header_icon_phone = 'header_chat_user_icon_phone';
        props.class_header_icon_list = 'header_chat_user_icon_list';
        props.class_list_chat_avatar = 'item_avatar';
        props.class_shortMsg = 'chatList_shortMsg';
        props.class_shortName = 'chatList_shortName';
        props.class_chatList_shortInfoMain = 'chatList_shortInfoMain';
        props.class_chatList_shortInfoSlave = 'chatList_shortInfoSlave';
        props.class_shortDateTime = 'chatList_shortDateTime';
        props.class_msgCount = 'chatList_msgCount';
        props['input_search'] = new Input(
          'input',
        {
            attr: {
                class: 'input-search',
                name: 'search',
                type: 'text',
                placeholder: 'Поиск',
            }
        }
        );
        props['textarea_msg'] = new Textarea(
          'textarea',
        {
            attr: {
                class: 'msg_textarea',
                name: 'area_msg',
                type: 'text',
                placeholder: 'Сообщение...',
                maxLength: '255',
                autocomplete: 'on',

            }
        }
        );
        super( tag, props );
    };
    protected render(): DocumentFragment {
        return this.compile(tpl);
    }
}
