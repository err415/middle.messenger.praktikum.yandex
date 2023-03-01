import Component from '../../../services/Component';
import tpl from './tpl';

export default class ListHeader extends Component {

    render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as HTMLElement).querySelectorAll('input').forEach(i => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    i.removeEventListener(key, value as () => void);


                });
            }
        });
        super.removeEvents();
    }

    addEvents() {
        (this.element as HTMLElement).querySelectorAll('input').forEach(i => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    i.addEventListener(key, value as () => void);

                });
            }
        });
        super.addEvents();
    }
}
