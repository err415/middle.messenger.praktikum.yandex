import Handlebars from 'handlebars';
//import Handlebars from 'handlebars/dist/handlebars.runtime';
import tpl from './tpl.hbs';


Handlebars.registerPartial('button', tpl);

export default (id, value) => {
	return tpl({ id, value });
}
