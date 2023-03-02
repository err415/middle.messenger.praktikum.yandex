import Component from '../../services/Component';
import tpl from './tpl';
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class ChatList extends Component<Props> {

    render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as Props).querySelectorAll('div').forEach((div: Props) => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {

                    div.removeEventListener(key, value as Props);

                });
            }
        });
        super.removeEvents();
    }

    addEvents() {
        (this.element as Props).querySelectorAll('div').forEach((div: Props) => {

            //Проверяем, пришли ли ивенты, если да - разбираем их и добавляем обработчик.
            if(this.props.events !=undefined) {
                Object.entries(this.props.events).forEach(([key, value]) => {

                    div.addEventListener(key, value as Props);

                });
            }
        });
        super.addEvents();
    }
}
