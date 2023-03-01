import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";

export default class WelcomePage extends Component {
    constructor(tag = 'div', props: Record<string, unknown> = {}) {
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
    }
    render() : DocumentFragment {

        return this.compile(tpl);
    }
}

