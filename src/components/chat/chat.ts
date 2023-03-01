import Component from "../../services/Component";
import tpl from './tpl';

export default class Chat extends Component {


    protected render(): DocumentFragment {

        return this.compile(tpl);
    }
}
