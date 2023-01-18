import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.css';
import button from './components/button';
import welcome from './pages/welcome';
import h1Welcome from './pages/welcome/components';


console.log(tpl);


const mainIndexTplComp = Handlebars.compile(tpl);
const mainIndexTplRes = mainIndexTplComp({
    //Main Indexes Props
    btn: button('welcome-btn','ВХОД'),
    h1: h1Welcome('welcome-h1','Доброе пожаловать в ','Spectre')
});

document.getElementById('root').innerHTML = mainIndexTplRes;

document.getElementById('root').querySelector('button').addEventListener('click', (e) => {
    console.log('privet')
})

window.createButton = (id, value) => {

    const htmlTpl = document.createElement('template');
    htmlTpl.innerHTML = button(id,value);

    document.getElementById('root').appendChild(htmlTpl.content);
}
window.createHeader = (id, value, spanValue) => {
    const htmlTpl = document.createElement('template1');
    htmlTpl.innerHTML = h1Welcome(id, value, spanValue);

    document.getElementById('root').appendChild(htmlTpl.content);
}

