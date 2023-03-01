import Component from '../../../services/Component';
import tpl from './tpl';

export default class Item extends Component {
    render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as HTMLElement).querySelectorAll('article').forEach(item => {
                if (this.props.events != undefined) {
                    Object.entries(this.props.events).forEach(([key, value]) => {
                        item.removeEventListener(key, value as () => void);

                    });
                }
            }
        );
        super.removeEvents();
    }

    protected addEvents() {
        (this.element as HTMLElement).querySelectorAll('article').forEach(item => {

                if (this.props.events != undefined) {
                    Object.entries(this.props.events).forEach(([key, value]) => {
                        item.addEventListener(key, value as () => void);

                    });
                }

                super.addEvents();
            }
        );

    }
}
