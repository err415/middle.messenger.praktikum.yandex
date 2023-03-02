import tpl from './tpl';
import Component from "../../services/Component";
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export class Input extends Component<Props> {
    protected render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        (this.element as Props).querySelectorAll('input').forEach((l: Props) => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.removeEventListener(key, value as Props);

                });
            }
        });
        super.removeEvents();
    }

    protected addEvents() {
        (this.element as Props).querySelectorAll('input').forEach((l: Props) => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as Props);

                });
            }
        });
        super.addEvents();
    }
}

