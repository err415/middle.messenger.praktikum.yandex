import Component from "../../../services/Component";
import tpl from './tpl';

export default class chatHeader extends Component {

    protected render(): DocumentFragment {

        return this.compile(tpl);
    }

}
