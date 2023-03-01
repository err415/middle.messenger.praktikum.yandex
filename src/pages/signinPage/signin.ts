import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Input} from "../../components/input/input";
import {isValid, isValidSignIn} from "../../utils/validate";



export default class SigninPage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
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
                    click: (e: Event) => {


                        const formEl = document.getElementsByClassName('signin-form')[0];
                        const name = document.getElementsByClassName('input-signin')[0].getAttribute('name')
                        const formData  = new FormData(formEl as HTMLFormElement);
                        const value = formData.get('signin_email');
                        console.log(name, value as string);
                        console.log(isValidSignIn(value as string));
                        if (isValidSignIn(value as string)) {
                            window.location.href = '/signin-pass';
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
                        console.log('Input click');
                        //document.location = '/signin-pass';
                        e.preventDefault();
                        e.stopPropagation();
                    },
                    keyup: (e: Event) => {
                        //const id = (<HTMLInputElement>e.target).getAttribute('id');
                        const name = (<HTMLInputElement>e.target).getAttribute('name');
                        const value = (<HTMLInputElement>e.target).value;
                        console.log((<HTMLInputElement>e.target).getAttribute('name'));
                        console.log((<HTMLInputElement>e.target).value);

                        isValid(name, value);
                    }

                },
                attr: {
                    class: 'input-signin',
                    name: 'signin_email',
                    type: 'email',
                    placeholder: 'Введите ваш E-mail',
                },
            }
        );
        super( tag, props );
    };

     render () : DocumentFragment {
        console.log('SigninPage render');
        return this.compile(tpl);
    }
}
