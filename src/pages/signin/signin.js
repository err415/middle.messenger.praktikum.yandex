import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './signin.hbs';
import {state} from "../../state";
import button from '../../components/button'
//import button from '../../components/button';

//import button from './components/button';

export default (root) => {

    return root.innerHTML = tpl({state});
}