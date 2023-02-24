import tpl from './tpl';
import Component from "../../../services/Component";
import { Button } from "../../../components/button/button";
import {Input} from "../../../components/input/input";



export default class SigninConfirmPage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'signin-wrapper',
        };
        props.title = 'Авторизация';
        props['button'] = new Button(
            'button',
            {
                label: 'ВХОД',
                events: {
                    click: (e: Event) => {
                        console.log('Авторизация пароль click');
                        window.location.href = '/main';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'button',
                    id: 'welcomePage-btn',
                },
            }
        );
        props['input'] = new Input(
            'input',
            {
                events: {
                    click: (e: Event) => {
                        console.log('Input click');
                        //document.location = '/signin-pass';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'input-signin-pass',
                    type: 'password',

                },
            }
        );



        super( tag, props );
    };

    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
