import Component from '../../services/Component';
import tpl from './tpl';
//import Item from "./Item/item";
//import ListHeader from "./listHeader/listHeader";

export default class ChatList extends Component {
/*    constructor(tag = 'div', props: any  = {}) {

        //tag = 'section';

        /!*props['item-list-chatHeader'] = new ListHeader (
          'section',
            {
                attr: {
                    class: 'chatlist-chatHeader',
                },
                class_setting_list: props.class_setting_list,
                class_search: props.class_search,
                class_search_img: props.class_search_img,
                input_search: props.input_search,
            }*!/
        );*/
        /*props['item-list'] = new Item(
            'section',
            {
                attr: {
                    class: 'chatlist-item-list',
                },
                chat_user_name : props.chat_user_name,
                chat_user_shortMsg : props.chat_user_shortMsg,
                chat_user_datetime : props.chat_user_datetime,
                chat_user_msg_count : props.chat_user_msg_count,
                class_chatlist_item : props.class_chatlist_item,
                class_list_chat_avatar : props.class_list_chat_avatar,
                class_shortMsg : props.class_shortMsg,
                class_shortName : props.class_shortName,
                class_chatList_shortInfoMain : props.class_chatList_shortInfoMain,
                class_chatList_shortInfoSlave : props.class_chatList_shortInfoSlave,
                class_shortDateTime : props.class_shortDateTime,
                class_block_msgCount : props.class_block_msgCount,
                class_item_msgCount : props.class_item_msgCount,
            }
        );
        super(tag, props);
    };*/

    render(): DocumentFragment {
        console.log('chatList render');
        return this.compile(tpl);
    }
    addEvents() {
        this.element!.querySelectorAll('div').forEach(div => {
            //Конкретный инвент кидаем
            //a.addEventListener('click', this.props.events.click);
            //Обработчик здесь
            /*a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Link clicked')
            })*/
            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    div.addEventListener(key, value as any);
                    console.log('Автомат ивент div');

                });
            }
        });
        super.addEvents();
    }
}
