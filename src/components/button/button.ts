//import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './button.hbs';
import Component from "../../services/Component";

interface ButtonProps {
	//id: string;
	value: string;
	events: {
		click: () => void;
	};
}
export class Button extends Component {
	constructor(props: ButtonProps) {
		super('button', props);
	}

	protected render() {
		return this.compile(template, { value: this.props.value });
	}
}

