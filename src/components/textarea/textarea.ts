import tpl from './tpl';
import Component from "../../services/Component";

export class Textarea extends Component {
    protected render(): DocumentFragment {
        console.log('Textarea render');
        return this.compile(tpl);
    }

    protected removeEvents() {
        this.element!.querySelectorAll('textarea').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.removeEventListener(key, value as any);

                });
            }
        });
        super.removeEvents();
    }

    protected addEvents() {
        this.element!.querySelectorAll('textarea').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as any);
                });
            }
        });
        super.addEvents();
    }
}

