import Component from '../../services/Component';
import tpl from './tpl';

interface IndexPageProps {
    content: any;
}
export default class IndexPage extends Component<IndexPageProps> {
    render() {
        console.log('Page render');
        return this.compile(tpl);
    }
}
