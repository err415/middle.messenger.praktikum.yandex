import Component from '../../services/Component';
import tpl from './tpl';

export default class Nav extends Component {
    render(){
        console.log('Nav render');
        return this.compile(tpl);
    }

    addEvents() {
        this.element!.querySelectorAll('a').forEach(a => {
            /*a.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Link clicked')
            })*/
            a.addEventListener('click', this.props.events.click);

        });
        super.addEvents();
    }
}
