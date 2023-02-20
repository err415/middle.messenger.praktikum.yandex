//import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './button.hbs';
import Component from "../../utils/Component";

interface ButtonProps {
	//id: string;
	value: string;
}
export class Button extends Component {
	constructor(props: ButtonProps) {
		super('button', props);
	}

	protected render() {
		return template({value: this.props.value});
	}
}

