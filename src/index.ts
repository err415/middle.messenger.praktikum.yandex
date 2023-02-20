//import Handlebars from "handlebars";

//import {state} from './state.js';
import './style.css';
//import button from './components/button';
import { WelcomePage } from './pages/welcome/welcome';
// import err500Component from './pages/500/500.js';
// import err404Component from './pages/404/404.js';
// import signinComponent from './pages/signin/signin.js';
// import signinPassComponent from './pages/signin/signin-pass.js';
// import signupComponent from './pages/signup/signup.js';
// import mainComponent from './pages/main/main.js';
// import editProfileComponent from './pages/profile/profile.js';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    const welcomePage = new WelcomePage();

    root!.append(welcomePage.getContent()!);
})


