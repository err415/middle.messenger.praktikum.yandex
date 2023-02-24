import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";

interface WelcomePageProps {
    content: any;

}
export default class WelcomePage extends Component<WelcomePageProps> {
    constructor(tag = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'welcome-wrap',
        }
        props.title =  'Добро пожаловать в Spectre!';
        props['button'] = new Button(
            'button',
            {
                label: 'Войти',
                events: {
                    click: (e: Event) => {
                        console.log('Нажали кнопочку');
                        window.location.href = '/signin';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'button',
                    id: 'welcomePage-btn',
                }
            }
        );

    super( tag, props );
    };
    render() {
        console.log('welcomePage render');
        return this.compile(tpl);
    }
}

