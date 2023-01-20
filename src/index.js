//import Handlebars from "handlebars";

import {state} from './state.js';
import './style.css';
import button from './components/button';
import welcomeComponent from './pages/welcome/welcome.js';
import err500Component from './pages/500/500.js';
import err404Component from './pages/404/404.js';
import signinComponent from './pages/signin/signin.js';

const root = document.getElementById('root');



/*window.createButton = (id, value) => {

	const htmlTpl = document.createElement('template');
	htmlTpl.innerHTML = button(id,value);

	console.log(document.getElementById('root').appendChild(htmlTpl.content));
}*/
const path = window.location.pathname;
console.log(path);
switch (path){
	case '/':
		return root.innerHTML = welcomeComponent(root);
	case '/500':
		return root.innerHTML = err500Component(root);
	case '/404':
		return root.innerHTML = err404Component(root);
	case  '/login':
		return root.innerHTML = signinComponent(root);

}


