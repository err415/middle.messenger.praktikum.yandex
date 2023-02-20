import Component from '../../services/Component';
import tpl from './tpl';

export default class IndexPage extends Component {
    render() {
        console.log('Page render');
        return this.compile(tpl, this.props);
    }
}
