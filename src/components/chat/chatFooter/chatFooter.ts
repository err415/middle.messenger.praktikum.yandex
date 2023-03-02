import Component from "../../../services/Component";
import tpl from './tpl';
type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class chatFooter extends Component<Props> {

    protected render(): DocumentFragment {

        return this.compile(tpl);
    }

}
