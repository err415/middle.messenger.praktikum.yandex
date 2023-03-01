import tpl from './tpl';
import Component from "../../services/Component";

export class Button extends Component {
	protected render() : DocumentFragment {
		return this.compile(tpl);
	}
	protected removeEvents() {
		this.element!.querySelectorAll('button').forEach(b => {
			if (this.props.events != undefined){
				Object.entries(this.props.events).forEach(([ key, value ]) => {

					b.removeEventListener(key, value as any);

				});
			}
		});
		super.removeEvents();
	}

	protected addEvents() {
		this.element!.querySelectorAll('button').forEach(b => {
			if (this.props.events != undefined){
				Object.entries(this.props.events).forEach(([ key, value ]) => {

						b.addEventListener(key, value as any);

				});
			}
		});
		super.addEvents();
	}


}

