import tpl from './tpl';
import Component from "../../services/Component";

export class Input extends Component {
    protected render() {
        console.log('Input render');
        return this.compile(tpl);
    }
    protected addEvents() {
        this.element!.querySelectorAll('input').forEach(l => {
            if (this.props.events != undefined){
                Object.entries(this.props.events).forEach(([ key, value ]) => {

                    l.addEventListener(key, value as any);
                    console.log('Input click');
                });
            }
        });
        super.addEvents();
    }
}

