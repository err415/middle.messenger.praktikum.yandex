import tpl from './tpl';
import Component from '../../services/Component';
import Nav from "../../components/Nav";
import extend = Handlebars.Utils.extend;

export default class Index extends Component<Record<string, any>> {

    constructor(tag = 'div', props: Record<string, {}> = {}) {
        props['nav'] = new Nav(
            'div',
            {
                items: [
                    {url: '/', title: 'MainLayout'},
                    {url: '/form', title: 'FormLayout'}
                ],
                events: {
                    click : e => {
                        console.log('NavLayout link clicked');
                        e.preventDefault();
                        e.stopPropagation();
                        /*if(e.target && e.target.getAttribute('href'))
                        {
                            console.log('Nav link clicked');
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        else {
                            console.log('No link clicked')
                        }*/
                    }
                },
            }
        );
        super(tag, props);
    }
    componentDidUpdate(oldProps, newProps) {
        return oldProps['title'] !== newProps['title'];
    }

    render() {
        console.log('layout render');
        return this.compile(tpl);
    }
}
