import tpl from './tpl';
import Component from "../../services/Component";

export default class Error404Page extends Component {

	constructor(tag = 'div', props: any = {}) {
		tag = 'section';
		props['attr'] = {
			class: 'wrapper_err404',
		}
		props.title = '404';
		props.text_title = '(-_-)';
		props.text_1 = 'Домик неплохой, но райончик так себе.';
		super( tag, props);
	};
	protected render() {
		console.log('404 Page render')
		return this.compile(tpl);
	}
};
