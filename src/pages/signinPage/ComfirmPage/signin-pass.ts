import tpl from './tpl';
import Component from "../../../services/Component";
import { Button } from "../../../components/button/button";
import {Input} from "../../../components/input/input";
import {isValidSignInPassword} from "../../../utils/validate";


type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;
export default class SigninConfirmPage extends Component {
    constructor(tag = 'div', props: Props = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'signin-wrapper',

        };
        props.title = 'Авторизация';
        props.class_validate_err = 'valid-err--msg';
        props.valid_error = 'Неверный пароль';
        props['button'] = new Button(
            'button',
            {
                label: 'ВХОД',
                events: {
                    click: (e: Event) => {
                        const formIn = document.getElementsByClassName('input-signin-pass');
                        Object.values(formIn).forEach(( value) => {
                            if(isValidSignInPassword((value as Props).value)) {
                                window.location.href = '/main';
                            }
                        });
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'button',
                    id: 'welcomePage-btn',
                    type: 'submit',
                },
            }
        );
        props['input'] = new Input(
            'input',
            {
                events: {
                    click: (e: Props) => {

                        e.preventDefault();
                        e.stopPropagation();
                    },
                    focus: (e: Props) => {

                        const value = (<Props>e.target).value;
                        isValidSignInPassword(value as Props);
                    },
                    blur: (e: Event) => {

                        const value = (<Props>e.target).value;
                        isValidSignInPassword(value as Props);

                    },
                },
                attr: {
                    class: 'input-signin-pass',
                    type: 'password',
                    name: 'password',

                },
            }
        );



        super( tag, props );
    }
    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
