import Component from '../../../services/Component';
import tpl from './tpl';
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class Item extends Component<Props> {
    render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as Props).querySelectorAll('article').forEach((item: Props) => {
                if (this.props.events != undefined) {
                    Object.entries(this.props.events).forEach(([key, value]) => {
                        item.removeEventListener(key, value as Props);

                    });
                }
            }
        );
        super.removeEvents();
    }

    protected addEvents() {
        (this.element as Props).querySelectorAll('article').forEach((item: Props) => {

                if (this.props.events != undefined) {
                    Object.entries(this.props.events).forEach(([key, value]) => {
                        item.addEventListener(key, value as Props);

                    });
                }

                super.addEvents();
            }
        );

    }
}
