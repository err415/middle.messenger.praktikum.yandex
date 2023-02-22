//import Handlebars from "handlebars";
//import {state} from './state.js';
import './style.css';
//import button from './components/button';
//import { WelcomePage } from './pages/welcome/welcome';
//import {Button} from "./components/button/button";
// import err500Component from './pages/500/500.js';
// import err404Component from './pages/404/404.js';
// import signinComponent from './pages/signin/signin.js';
// import signinPassComponent from './pages/signin/signin-pass.js';
// import signupComponent from './pages/signup/signup.js';
// import mainComponent from './pages/main/main.js';
// import editProfileComponent from './pages/profile/profile.js';

/*window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    const button = new Button({
        value: 'TESTTEST',
        events: {
            click: () => console.log('Click Welcome Page'),
        }
    });

    const welcomePage = new WelcomePage({ button });

    root!.append(welcomePage.getContent()!);
})*/
import renderDOM from './utils/render';
import IndexLayout from './layout/main/index';
import Nav from './components/nav/nav';
import Page from './pages/IndexPage/index';


const nav = new Nav(
    'ul',
    {
        items: [
            {url: '/', title: 'Main'},
            {url: '/form', title: 'Form'}
        ],
        events: {
            click : (e: Event) => {
                console.log('Nav link clicked');
                e.preventDefault();
                e.stopPropagation();
                /*if(e.target && e.target.getAttribute('href'))
                {
                    console.log('Nav link clicked');
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    console.log('No link clicked')
                }*/
            }
        },
    }
);

const content = new Page(
    'div',
    {
        text: 'Some text...'
    }
);
const page = new IndexLayout(
    'div',
    {
        nav: nav,
        title: 'Title',
        content: content,
        attr: {
            class: 'page',
        }
    }
);

window.page = page;
window.content = content;
window.changePageContent = () => {

    const newContext = new Page(
        'div',
        {
            text: 'Another some text...'
        }

    );
    page.setProps({ content: newContext } as any);
}
renderDOM('#root', page);
