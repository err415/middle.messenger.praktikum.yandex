import tpl from './tpl';
import Component from "../../services/Component";


export default class MainPage extends Component {
    constructor(tag = 'div', props: any  = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'editProfile-form-main',
        }
        props.title = 'Страница с чатами';
        super( tag, props );
    };

    protected render(): DocumentFragment {
        return this.compile(tpl);
    }

}
