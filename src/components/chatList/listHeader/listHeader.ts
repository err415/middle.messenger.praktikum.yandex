import Component from '../../../services/Component';
import tpl from './tpl';
//import {Input} from "../../input/input";

export default class ListHeader extends Component {

    render(): DocumentFragment {
        console.log('chatList render');
        return this.compile(tpl);
    }
    addEvents() {
        this.element!.querySelectorAll('input').forEach(i => {
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
                    i.addEventListener(key, value as any);
                    console.log('Автомат ивент input search');

                });
            }
        });
        super.addEvents();
    }
}
