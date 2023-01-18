import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.css';

Handlebars.registerPartial('h1Welcome', tpl);

export default (id, value, spanValue) => {
    return Handlebars.compile(tpl)({ id, value, spanValue });
}