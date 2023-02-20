//import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './welcome.hbs';
import Component from "../../utils/Component";
import { Button } from "../../components/button/button";
//import {template} from "handlebars";
//import {state} from "../../state";
//import button from '../../components/button'
//import button from '../../components/button';

//import button from './components/button';
export class WelcomePage extends Component {
    constructor() {
        super('div');
    }

    protected render() {
        const button = new Button({
            value: 'TESTTEST',
        });
        return template({button: button.getContent()?.outerHTML});
    }
}

