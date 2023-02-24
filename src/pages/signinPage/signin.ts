import tpl from './tpl';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
import {Input} from "../../components/input/input";



export default class SigninPage extends Component {
    constructor(tag: string = 'div', props: any = {}) {
        tag = 'section';
        props['attr'] = {
          class: 'signin-wrapper',
        };
        props.title = 'Авторизация';
        props['button'] = new Button(
          'button',
            {
                label: 'ДАЛЕЕ',
                events: {
                    click: (e: Event) => {
                        console.log('Авторизация click');
                        document.location = '/signin-pass';
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
                    class: 'input-signin',
                    type: 'email',
                    placeholder: 'Введите ваш E-mail',
                },
            }
        );
        super( tag, props );
    };

     render () {
        console.log('SigninPage render');
        return this.compile(tpl);
    }
}
