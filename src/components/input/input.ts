import tpl from './tpl';
import Component from "../../services/Component";

export class Input extends Component {
    protected render(): DocumentFragment {

        return this.compile(tpl);
    }

    protected removeEvents() {
        this.element!.querySelectorAll('input').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.removeEventListener(key, value as any);

                });
            }
        });
        super.removeEvents();
    }

    protected addEvents() {
        this.element!.querySelectorAll('input').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as any);

                });
            }
        });
        super.addEvents();
    }
}

