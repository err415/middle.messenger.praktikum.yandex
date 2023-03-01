import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Field} from "../../components/field/field";
import {isValidFirstName} from '../../utils/validate';



export default class SignupPage extends Component {

    constructor(tag: string = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'signup-wrapper',
        }
        props.title = 'Регистрация';
        props.valid_value = '';
        props['button'] = new Button(
            'button',
            {
                label: 'Зарегистрироваться',
                events: {
                    click: (e: Event) => {
                        console.log('Регистрация click');

                        //window.location.href = '/signin';
                        e.preventDefault();
                        const formEl = document.getElementsByClassName('signup-form')[0];
                        const formData  = new FormData(formEl as HTMLFormElement);
                        const first_name = formData.get('first_name');
                        const validFirstName = isValidFirstName(first_name);
                        console.log(validFirstName);
                        const last_name = formData.get('last_name');
                        const login = formData.get('login');
                        const email = formData.get('email');
                        const phone = formData.get('phone');
                        const password = formData.get('password');
                        const password_verify = formData.get('password_verify');
                        console.log('Имя: ' + first_name ,
                            ' Фамилия: ' + last_name,
                            ' Логин: ' + login,
                            ' E-mail: ' + email,
                            ' Телефон: ' + phone,
                            ' Пароль: ' + password,
                            ' Подтверждение пароля: ' + password_verify);

                        e.stopPropagation();

                    },
                },
                attr: {
                    class: 'button',
                    id: 'welcomePage-btn',
                    type: 'submit',
                },
            }
        );
        props['label'] = new Field(
            'div',
            {
                items: [
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'first_name',
                        label_value: 'Введите ваше Имя:',
                        input_class: 'input-signup',
                        input_name: 'first_name',
                        input_type: 'text',
                        class_validate_err: 'valid-err--msg',
                        valid_error: '[A-Z, a-z]',
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'last_name',
                        label_value: 'Введите вашу Фамилию:',
                        input_class: 'input-signup',
                        input_name: 'last_name',
                        input_type: 'text'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'login',
                        label_value: 'Придумайте ваш login:',
                        input_class: 'input-signup',
                        input_name: 'login',
                        input_type: 'text'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'email',
                        label_value: 'Введите ваш E-mail:',
                        input_class: 'input-signup',
                        input_name: 'email',
                        input_type: 'email'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'password',
                        label_value: 'Придумайте пароль:',
                        input_class: 'input-signup',
                        input_name: 'password',
                        input_type: 'password'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'password-verify',
                        label_value: 'Повторите пароль:',
                        input_class: 'input-signup',
                        input_name: 'password_verify',
                        input_type: 'password'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'phone',
                        label_value: 'Укажите ваш телефон:',
                        input_class: 'input-signup',
                        input_name: 'phone',
                        input_type: 'text'
                    },

                ],
                events: {
                    click: (e: Event) => {
                        console.log('Label click');
                        //window.location.href = '/signin';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'mainField',

                }
            }
        )



        super( tag, props );
    };

    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
