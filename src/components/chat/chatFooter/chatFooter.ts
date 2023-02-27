import Component from "../../../services/Component";
import tpl from './tpl';

export default class chatFooter extends Component {

    protected render(): DocumentFragment {
        console.log('chatFooter render')
        return this.compile(tpl);
    }

}
