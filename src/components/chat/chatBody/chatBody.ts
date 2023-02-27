import Component from "../../../services/Component";
import tpl from './tpl';

export default class chatBody extends Component {

    protected render(): DocumentFragment {
        console.log('chatBody render')
        return this.compile(tpl);
    }

}
