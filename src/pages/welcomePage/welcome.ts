import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";

type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

export default class WelcomePage extends Component<Props>{
    constructor(tag = 'div', props: Props = {}) {
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
                    click: (e: Props) => {

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

