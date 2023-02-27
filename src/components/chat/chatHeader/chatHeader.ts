import Component from "../../../services/Component";
import tpl from './tpl';

export default class chatHeader extends Component {

    protected render(): DocumentFragment {
        console.log('chatHeader render')
        return this.compile(tpl);
    }

}
