import tpl from './tpl';
import Component from '../../services/Component';
import Nav from "../../components/nav/nav";

interface IndexLayoutProps {
    props: any;
    events: {
        click:  (e: Event) => void;
    };

}
export default class Index extends Component<IndexLayoutProps> {

    constructor(tag = 'div', props: any = {}) {
        props['nav'] = new Nav(
            'div',
            {
                items: [
                    {url: '/', title: 'MainLayout'},
                    {url: '/form', title: 'FormLayout'}
                ],
                events: {
                    click : (e: Event) => {
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
   /* componentDidUpdate(oldProps: Record<string, any>, newProps: Record<string, any>) {
        return oldProps['title'] !== newProps['title'];
    }*/

    render() {
        console.log('layout render');
        return this.compile(tpl);
    }
}
