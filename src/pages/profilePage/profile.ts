import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import Form from "../../components/form/form";



export default class ProfilePage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'editProfile-wrapper',
        }
        props.title = 'Изменить профиль';
        props['button'] = new Button(
            'button',
            {
                label: 'Сменить пароль',
                events: {
                    click: (e: Event) => {
                        console.log('Profile click');
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'button',
                    id: 'WelcomePage-btn',
                },
            }
        );
        props['formMain'] = new Form(
            'form',
            {
                class_labelBlock: 'editProfile-labelBlock',
                class_descBlock: 'editProfile-description',
                labels: [
                    {
                        class_label: 'label-editProfile',
                        forLabel: 'first_name',
                        label_value: 'Имя (обязательно)'
                    },
                ],
                inputs: [

                    {
                        input_name: 'first_name',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: ''

                    },
                    {
                        input_name: 'last_name',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: 'Фамилия (необязательно)'

                    },
                    {
                        input_name: 'about_myself',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: 'О себе'

                    },
                    {
                        input_name: 'e-mail',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: 'testtest@yandex.ru'

                    },
                    {
                        input_name: 'phone',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: '8 (999) 999 99-99'

                    },
                    {
                        input_name: 'nickname',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: 'Фаина Раневская'

                    },
                ],
                descriptions: [
                    {
                        class_desc: 'descriptions',
                        desc_value: 'Любые подробности, например: возраст, род занятий или город.' +
                            ' \\n Пример: 20 лет, сам себе программист из МСК.'
                    },
                ],

                events: {
                    click: (e: Event) => {
                        console.log('Input click');
                        //document.location = '/signin-pass';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'editProfile-form-main',

                },
            }
        );
        props['formSlave'] = new Form(
            'form',
            {
                class_labelBlock: 'editProfile-labelBlock',
                class_descBlock: 'editProfile-description',
                labels: [
                    {
                        class_label: 'label-editProfile',
                        forLabel: 'login',
                        label_value: 'Имя пользователя'
                    },
                ],
                inputs: [

                    {
                        input_id: 'editProfile-formSlave-input',
                        input_name: 'login',
                        class_inputEditProfile: 'input-editProfile',
                        input_type: 'text',
                        input_placeholder: 'Mark'

                    },
                ],
                descriptions: [
                    {
                        class_desc: 'descriptions',
                        desc_value: 'Вы можете выбрать публичное имя пользователя в Spectre. В\n' +
                                    'этом случае - другие люди смогут найти вас по такому имени и\n' +
                                    'связаться, не зная вашего телефона.',
                    },
                    {
                        class_desc: 'descriptions',
                        desc_value: 'Вы можете использовать символы a-z, 0-9 и подчеркивания.\n' +
                                    'Минимальная длина - 5 символов.',
                    },
                ],

                events: {
                    click: (e: Event) => {
                        console.log('Input click');
                        //document.location = '/signin-pass';
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'editProfile-form-slave',

                },
            }
        );



        super( tag, props );
    };

    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
