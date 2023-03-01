import tpl from './tpl';
import Component from "../../services/Component";

export class Button extends Component {
	protected render() : DocumentFragment {
		return this.compile(tpl);
	}
	protected removeEvents() {
		(this.element as HTMLElement).querySelectorAll('button').forEach(b => {
			if (this.props.events != undefined){
				Object.entries(this.props.events).forEach(([ key, value ]) => {

					b.removeEventListener(key, value as () => void);

				});
			}
		});
		super.removeEvents();
	}

	protected addEvents() {
		(this.element as HTMLElement).querySelectorAll('button').forEach(b => {
			if (this.props.events != undefined){
				Object.entries(this.props.events).forEach(([ key, value ]) => {

						b.addEventListener(key, value as () => void);

				});
			}
		});
		super.addEvents();
	}


}

