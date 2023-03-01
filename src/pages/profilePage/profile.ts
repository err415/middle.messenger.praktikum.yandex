import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import Form from "../../components/form/form";



export default class ProfilePage extends Component {
    constructor(tag = 'div', props: Record<string, unknown> = {}) {
        tag = 'section';
        props['attr'] = {
            class: 'edit-profile-wrapper',
        }
        props.title = 'Изменить профиль';
        props['button'] = new Button(
            'button',
            {
                label: 'Сменить пароль',
                events: {
                    click: (e: Event) => {

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
        props['formMain'] = new Form(
            'form',
            {
                class_labelBlock: 'edit-profile-label-block',
                class_descBlock: 'edit-profile-description',
                labels: [
                    {
                        class_label: 'label-edit-profile',
                        forLabel: 'first_name',
                        label_value: 'Имя (обязательно)'
                    },
                ],
                inputs: [

                    {
                        input_name: 'first_name',
                        class_inputEditProfile: 'input-edit-profile',
                        input_type: 'text',
                        input_placeholder: ''

                    },
                    {
                        input_name: 'last_name',
                        class_inputEditProfile: 'input-edit-profile',
                        input_type: 'text',
                        input_placeholder: 'Фамилия (необязательно)'

                    },
                    {
                        input_name: 'about_myself',
                        class_inputEditProfile: 'input-edit-profile',
                        input_type: 'text',
                        input_placeholder: 'О себе'

                    },
                    {
                        input_name: 'e-mail',
                        class_inputEditProfile: 'input-edit-profile',
                        input_type: 'text',
                        input_placeholder: 'testtest@yandex.ru'

                    },
                    {
                        input_name: 'phone',
                        class_inputEditProfile: 'input-edit-profile',
                        input_type: 'text',
                        input_placeholder: '8 (999) 999 99-99'

                    },
                    {
                        input_name: 'nickname',
                        class_inputEditProfile: 'input-edit-profile',
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


                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'edit-profile-form-main',

                },
            }
        );
        props['formSlave'] = new Form(
            'form',
            {
                class_labelBlock: 'edit-profile-label-block',
                class_descBlock: 'edit-profile-description',
                labels: [
                    {
                        class_label: 'label-edit-profile',
                        forLabel: 'login',
                        label_value: 'Имя пользователя'
                    },
                ],
                inputs: [

                    {
                        input_id: 'edit-profile-form-slave-input',
                        input_name: 'login',
                        class_inputEditProfile: 'input-edit-profile',
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

                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                attr: {
                    class: 'edit-profile-form-slave',

                },
            }
        );

        super( tag, props );
    }

    protected render (): DocumentFragment {
        return this.compile(tpl);
    }
}
