import tpl from './tpl';
import Component from "../../../services/Component";
import { Button } from "../../../components/button/button";
import {Input} from "../../../components/input/input";
import {isValid} from "../../../utils/validate";



export default class SigninConfirmPage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
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
                        const formEl = document.getElementsByClassName('pass-form')[0];
                        const name = document.getElementsByClassName('input-signin-pass')[0].getAttribute('name')
                        const formData  = new FormData(formEl as HTMLFormElement);
                        const value = formData.get('signin_pass');

                        if (isValid(name as string,value as string)) {
                            window.location.href = '/main';
                        }
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
                    click: (e: Event) => {

                        e.preventDefault();
                        e.stopPropagation();
                    },
                    keyup: (e: Event) => {

                        const name = (<HTMLInputElement>e.target).getAttribute('name');
                        const value = (<HTMLInputElement>e.target).value;

                        isValid(name, value);
                    },
                },
                attr: {
                    class: 'input-signin-pass',
                    type: 'password',
                    name: 'signin_pass',

                },
            }
        );



        super( tag, props );
    };

    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
