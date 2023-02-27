import Component from "../../services/Component";
import tpl from './tpl';

export default class Chat extends Component {

    render(): DocumentFragment {
        console.log('ChatWindow render');
        return this.compile(tpl);
    };

};
