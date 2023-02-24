import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Field} from "../../components/field/field";



export default class SignupPage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'signup-wrapper',
        }
        props.title = 'Регстриция';
        props['button'] = new Button(
            'button',
            {
                label: 'Зарегистрироваться',
                events: {
                    click: (e: Event) => {
                        console.log('Регистрация click');
                        window.location.href = '/signin';
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
                        input_type: 'text'
                    },
                    {
                        class_wrap_fields: 'field',
                        label_class: 'field-signup',
                        label_for: 'second_name',
                        label_value: 'Введите вашу Фамилию:',
                        input_class: 'input-signup',
                        input_name: 'first_name',
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
                        input_name: 'password-verify',
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
