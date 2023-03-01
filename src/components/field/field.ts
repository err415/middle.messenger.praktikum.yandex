import tpl from './tpl';
import Component from "../../services/Component";

export class Field extends Component {
    protected render() : DocumentFragment {

        return this.compile(tpl);
    }
    protected removeEvents() {
        (this.element as HTMLElement).querySelectorAll('label').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.removeEventListener(key, value as () => void);

                });
            }
        });
        (this.element as HTMLElement).querySelectorAll('input').forEach(input => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    input.removeEventListener(key, value as () => void);

                });
            }
        });
        super.removeEvents();
    }

    protected addEvents() {
        (this.element as HTMLElement).querySelectorAll('label').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as () => void);

                });
            }
        });
        (this.element as HTMLElement).querySelectorAll('input').forEach(input => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    input.addEventListener(key, value as () => void);

                });
            }
        });
        super.addEvents();
    }


}

