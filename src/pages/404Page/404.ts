import tpl from './tpl';
import Component from "../../services/Component";
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class Error404Page extends Component<Props> {

	constructor(tag = 'div', props: Props = {}) {
		tag = 'section';
		props['attr'] = {
			class: 'wrapper-err-404',
		}
		props.title = '404';
		props.text_title = '(-_-)';
		props.text_1 = 'Домик неплохой, но райончик так себе.';
		super( tag, props);
	}
	protected render() : DocumentFragment {
		console.log('404 Page render')
		return this.compile(tpl);
	}
}
