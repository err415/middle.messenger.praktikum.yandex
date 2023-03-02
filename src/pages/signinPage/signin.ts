import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Input} from "../../components/input/input";
import {isValidSignIn} from "../../utils/validate";

type Props<P extends Record<string, unknown> = any> = { events?: Record<string, () => void> } & P;

export default class SigninPage extends Component<Props> {
    constructor(tag = 'div', props: Props = {}) {
        tag = 'section';
        props['attr'] = {
          class: 'signin-wrapper',
        };
        props.title = 'Авторизация';
        props.class_validate_err = 'valid-err--msg';
        props.valid_error = 'Введите корректный e-mail';
        props['button'] = new Button(
          'button',
            {
                label: 'ДАЛЕЕ',
                events: {
                    click: (e: Props) => {

                        const formIn = document.getElementsByClassName('input-signin');
                        Object.values(formIn).forEach(( value) => {
                            if(isValidSignIn((value as Props).value)) {
                                window.location.href = '/signin-pass';
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
                        isValidSignIn(value as Props);
                    },
                    blur: (e: Props) => {

                        const value = (<Props>e.target).value;
                        isValidSignIn(value as Props);
                    },

                },
                attr: {
                    class: 'input-signin',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Введите ваш E-mail',
                },
            }
        );
        super( tag, props );
    }

     render () : DocumentFragment {

        return this.compile(tpl);
    }
}
