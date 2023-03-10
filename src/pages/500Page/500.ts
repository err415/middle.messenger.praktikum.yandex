import tpl from './tpl';
import Component from "../../services/Component";
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class Error500Page extends Component {
	constructor(tag = 'div', props: Props = {}) {
		tag = 'section';
		props['attr'] = {
			class: 'wrapper-err-500',
		};
		props.title = '500';
		props.text_title = '(-_-) ';
		props.text_1 = 'Великаны не тортики, правда? ';
		props.text_2 = 'P.S. уже разбираемся :)';
		super( tag, props );
	}

	protected render(): DocumentFragment {
		return this.compile(tpl);
	}
}
