import tpl from './tpl';
import Component from "../../services/Component";
import {Textarea} from "../../components/textarea/textarea";
import ChatList from "../../components/chatList/chatList";
import {Input} from "../../components/input/input";
import ListHeader from "../../components/chatList/listHeader/listHeader";
import Item from "../../components/chatList/Item/item";
import Chat from "../../components/chat/chat";
import chatHeader from "../../components/chat/chatHeader/chatHeader";
import chatBody from "../../components/chat/chatBody/chatBody";
import chatFooter from "../../components/chat/chatFooter/chatFooter";


export default class MainPage extends Component {

    constructor(tag = 'div', props: any = {}) {

        tag = 'section';
        props['attr'] = {
            class: 'main-wrapper',
        }
        //Данные
        props.chat1_user_name = 'Faina Ranevskaya';
        props.chat1_user_shortMsg = 'Привет, как ты?';
        props.chat1_user_datetime =  'Пт';
        props.chat1_user_msg_count =  '12';
        props.chat2_user_name = 'Иван Будько';
        props.chat2_user_shortMsg = 'Никак...';
        props.chat2_user_datetime =  '13:00';
        props.chat2_user_msg_count =  '1';
        //CSS Классы
        props.class_article_left_item =  'listHeader-article-left',
        props.class_left_section =  'wrap-left';
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
        props.class_block_msgCount = 'chatList_block_msgCount';
        props.class_item_msgCount = 'chatList_item_msgCount';
        props.class_topBlock =  'section-left-block';
        props.class_setting_list= 'list-left';
        props.class_search= 'search-right';
        props.class_search_img= 'class_search_img';
        props.class_chatlist_item= 'chatlist-item';
        props.class_right_section= 'wrap-right';
        props.class_right_header= 'right_section_header';
        props.class_right_body= 'right_section_body';
        props.class_right_footer= 'right_section_footer';
        props.class_header_block_right= 'header_block_right';
        props.class_header_block_left= 'header_block_left';
        props.class_message_icon_smile_wrap= 'icon-smile-wrapper';
        props.class_message_icon_clip_wrap= 'icon-clip-wrapper';
        props.class_message_icon_smile= 'icon-smile-item';
        props.class_message_icon_clip= 'icon-clip-item';
        props.class_header_block_left_avatar= 'header_chat_user_avatar';
        props.class_header_block_left_name= 'header_chat_user_name';
        props.class_header_icon_search= 'header_chat_user_icon_search';
        props.class_header_icon_phone= 'header_chat_user_icon_phone';
        props.class_header_icon_list= 'header_chat_user_icon_list';
        props.class_list_chat_avatar = 'item_avatar';
        props.class_shortMsg = 'chatList_shortMsg';
        props.class_shortName = 'chatList_shortName';
        props.class_chatList_shortInfoMain = 'chatList_shortInfoMain';
        props.class_chatList_shortInfoSlave = 'chatList_shortInfoSlave';
        props.class_chatList_shortInfoSlave = 'chatList_shortInfoSlave';
        props.class_shortDateTime = 'chatList_shortDateTime';
        props.class_block_msgCount = 'chatList_block_msgCount';
        props.class_item_msgCount = 'chatList_item_msgCount';

        props['chatList'] = new ChatList(
            'section',
            {
                attr: {
                    class: props.class_left_section,
                },

                item_list_header: new ListHeader (
                    'section',
                    {
                        attr: {
                            class: 'chatlist-Header',
                        },
                        class_setting_list: props.class_setting_list,
                        class_search: props.class_search,
                        class_search_img: props.class_search_img,
                        input_search: new Input (
                            'input',
                            {
                                attr: {
                                    class: 'input-search',
                                    name: 'search',
                                    type: 'text',
                                    placeholder: 'Поиск',
                                }
                            }
                        ),
                    },
                ),
                item_list: new Item(
                    'section',
                    {
                        attr: {
                            class: 'chatlist-item-list',
                        },
                        events: {
                            click: (e: Event) => {
                                console.log('item click');

                                e.preventDefault();
                                e.stopPropagation();
                            }
                        },
                        items: [
                            {
                                chat_user_name: props.chat1_user_name,
                                chat_user_shortMsg: props.chat1_user_shortMsg,
                                chat_user_datetime: props.chat1_user_datetime,
                                chat_user_msg_count: props.chat1_user_msg_count,
                                class_chatlist_item: props.class_chatlist_item,
                                class_list_chat_avatar: props.class_list_chat_avatar,
                                class_chatList_shortInfoMain: props.class_chatList_shortInfoMain,
                                class_shortName: props.class_shortName,
                                class_shortMsg: props.class_shortMsg,
                                class_chatList_shortInfoSlave: props.class_chatList_shortInfoSlave,
                                class_shortDateTime: props.class_shortDateTime,
                                class_block_msgCount: props.class_block_msgCount,
                                class_item_msgCount: props.class_item_msgCount,
                            },
                            {
                                chat_user_name: props.chat2_user_name,
                                chat_user_shortMsg: props.chat2_user_shortMsg,
                                chat_user_datetime: props.chat2_user_datetime,
                                chat_user_msg_count: props.chat2_user_msg_count,
                                class_chatlist_item: props.class_chatlist_item,
                                class_list_chat_avatar: props.class_list_chat_avatar,
                                class_chatList_shortInfoMain: props.class_chatList_shortInfoMain,
                                class_shortName: props.class_shortName,
                                class_shortMsg: props.class_shortMsg,
                                class_chatList_shortInfoSlave: props.class_chatList_shortInfoSlave,
                                class_shortDateTime: props.class_shortDateTime,
                                class_block_msgCount: props.class_block_msgCount,
                                class_item_msgCount: props.class_item_msgCount,
                            },
                            {
                                chat_user_name: props.chat1_user_name,
                                chat_user_shortMsg: props.chat1_user_shortMsg,
                                chat_user_datetime: props.chat1_user_datetime,
                                chat_user_msg_count: props.chat1_user_msg_count,
                                class_chatlist_item: props.class_chatlist_item,
                                class_list_chat_avatar: props.class_list_chat_avatar,
                                class_chatList_shortInfoMain: props.class_chatList_shortInfoMain,
                                class_shortName: props.class_shortName,
                                class_shortMsg: props.class_shortMsg,
                                class_chatList_shortInfoSlave: props.class_chatList_shortInfoSlave,
                                class_shortDateTime: props.class_shortDateTime,
                                class_block_msgCount: props.class_block_msgCount,
                                class_item_msgCount: props.class_item_msgCount,
                            },
                            {
                                chat_user_name: props.chat2_user_name,
                                chat_user_shortMsg: props.chat2_user_shortMsg,
                                chat_user_datetime: props.chat2_user_datetime,
                                chat_user_msg_count: props.chat2_user_msg_count,
                                class_chatlist_item: props.class_chatlist_item,
                                class_list_chat_avatar: props.class_list_chat_avatar,
                                class_chatList_shortInfoMain: props.class_chatList_shortInfoMain,
                                class_shortName: props.class_shortName,
                                class_shortMsg: props.class_shortMsg,
                                class_chatList_shortInfoSlave: props.class_chatList_shortInfoSlave,
                                class_shortDateTime: props.class_shortDateTime,
                                class_block_msgCount: props.class_block_msgCount,
                                class_item_msgCount: props.class_item_msgCount,
                            },
            ],
                    }
                )
            }
        );
        props['Chat'] = new Chat(
          'section',

            {
                attr: {
                  class: props.class_right_section,
                },
                chat_header: new chatHeader(
                    'header',
                    {
                        attr: {
                          class: props.class_right_header,
                        },
                    }

                ),
                chatBody: new chatBody(),
                chatFooter: new chatFooter(),
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
        super(tag, props);
    };

    protected render(): DocumentFragment {
        return this.compile(tpl);
    }
}
