import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Field} from "../../components/field/field";
import {
    isValid,
    isValidEmail,
    isValidFirstName,
    isValidLastName,
    isValidlogin,
    isValidPass,
    isValidPhone
} from '../../utils/validate';



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
                        const last_name = formData.get('last_name');
                        const login = formData.get('login');
                        const email = formData.get('email');
                        const phone = formData.get('phone');
                        const password = formData.get('password');
                        const password_verify = formData.get('password_verify');
                        console.log(isValidFirstName(first_name as string));
                        console.log(isValidLastName(last_name as string));
                        console.log(isValidlogin(login as string));
                        console.log(isValidEmail(email as string));
                        console.log(isValidPhone(phone as string));
                        console.log(isValidPass(password as string));
                        console.log(isValidPass(password_verify as string));
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
                        input_id: 0,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'first_name',
                        label_value: 'Введите ваше Имя:',
                        input_class: 'input-signup',
                        input_name: 'first_name',
                        input_type: 'text',
                        class_validate_err: 'valid-err--msg',
                        valid_error: 'Кол-во символов > 3 и буквы: [A-Z, a-z]',
                    },
                    {
                        input_id: 1,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'last_name',
                        label_value: 'Введите вашу Фамилию:',
                        input_class: 'input-signup',
                        input_name: 'last_name',
                        input_type: 'text',
                        class_validate_err: 'valid-err--msg',
                        valid_error: 'Кол-во символов > 3 и буквы: [A-Z, a-z]',
                    },
                    {
                        input_id: 2,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'login',
                        label_value: 'Придумайте ваш login:',
                        input_class: 'input-signup',
                        input_name: 'login',
                        input_type: 'text',
                        class_validate_err: 'valid-err--msg',
                        valid_error: 'Кол-во символов > 4 и буквы с цифрами: [A-Z, a-z, 0]',
                    },
                    {
                        input_id: 3,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'email',
                        label_value: 'Введите ваш E-mail:',
                        input_class: 'input-signup',
                        input_name: 'email',
                        input_type: 'email',
                        class_validate_err: 'valid-err--msg',
                        valid_error: '[A-Z, a-z]',
                    },
                    {
                        input_id: 4,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'phone',
                        label_value: 'Укажите ваш телефон:',
                        input_class: 'input-signup',
                        input_name: 'phone',
                        input_type: 'text',
                        class_validate_err: 'valid-err--msg',
                        valid_error: '[A-Z, a-z]',
                    },
                    {
                        input_id: 5,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'password',
                        label_value: 'Придумайте пароль:',
                        input_class: 'input-signup',
                        input_name: 'password',
                        input_type: 'password',
                        class_validate_err: 'valid-err--msg',
                        valid_error: '[A-Z, a-z]',
                    },
                    {
                        input_id: 6,
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'password-verify',
                        label_value: 'Повторите пароль:',
                        input_class: 'input-signup',
                        input_name: 'password_verify',
                        input_type: 'password',
                        class_validate_err: 'valid-err--msg',
                        valid_error: 'Пароли не совпадают',
                    },


                ],
                events: {
                    click: (e: Event) => {
                        console.log('Label click');
                        //window.location.href = '/signin';
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
