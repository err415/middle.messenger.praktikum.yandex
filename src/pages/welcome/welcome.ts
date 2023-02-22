//import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './welcome.hbs';
import Component from "../../services/Component";
import { Button } from "../../components/button/button";
//import {template} from "handlebars";
//import {state} from "../../state";
//import button from '../../components/button'
//import button from '../../components/button';
interface WelcomePageProps {
    button: Button;
}
//import button from './components/button';
export class WelcomePage extends Component {
    constructor(props: WelcomePageProps) {
        super('div', props);
    }

    protected render() {

        return this.compile(template, { button: this.props.button });
    }
}

