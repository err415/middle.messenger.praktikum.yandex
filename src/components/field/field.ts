import tpl from './tpl';
import Component from "../../services/Component";

export class Field extends Component {
    protected render() {
        console.log('Field render');
        return this.compile(tpl);
    }
    protected addEvents() {
        this.element!.querySelectorAll('label').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as any);
                    console.log('Label click');
                });
            }
        });
        super.addEvents();
    }
}

