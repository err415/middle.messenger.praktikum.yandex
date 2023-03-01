import Component from '../../services/Component';
import tpl from './tpl';

export default class Form extends Component {
    render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        this.element!.querySelectorAll('a').forEach(a => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    a.removeEventListener(key, value as any);

                });
            }
        });
        super.removeEvents();
    }

    addEvents() {
        this.element!.querySelectorAll('a').forEach(a => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    a.addEventListener(key, value as any);

                });
            }
        });
        super.addEvents();
    }
}
