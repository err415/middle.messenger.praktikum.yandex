import Component from '../../services/Component';
import tpl from './tpl';
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

export default class Nav extends Component<Props> {
    render() : DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as Props).querySelectorAll('a').forEach((a: Props) => {
        if(this.props.events !=undefined) {
            Object.entries(this.props.events).forEach(([key, value]) => {
                a.removeEventListener(key, value as Props);


            });
        }
    });
        super.removeEvents();
    }

    addEvents() {
        (this.element as Props).querySelectorAll('a').forEach((a: Props) => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {
                    a.addEventListener(key, value as Props);


                });
            }
        });
        super.addEvents();
    }
}
