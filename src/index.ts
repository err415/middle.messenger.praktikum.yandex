import renderDOM from "./utils/render";
import './style.scss';
import MainPage from "./pages/mainPage/main";
import ProfilePage from "./pages/profilePage/profile";
import SigninConfirmPage from "./pages/signinPage/ComfirmPage/signin-pass";
import SigninPage from "./pages/signinPage/signin";
import SignupPage from "./pages/signupPage/signup";
import WelcomePage from "./pages/welcomePage/welcome";
import Error404Page from "./pages/404Page/404";
import Error500Page from "./pages/500Page/500";

/*const nav = new Nav(
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
                /!*if(e.target && e.target.getAttribute('href'))
                {
                    console.log('Nav link clicked');
                    e.preventDefault();
                    e.stopPropagation();
                }
                else {
                    console.log('No link clicked')
                }*!/
            }
        },
    }
);*/

switch (window.location.pathname) {
    case '/':
        renderDOM('.root', new WelcomePage());
        break;
    case '/404':
        renderDOM('.root', new Error404Page());
        break;
    case '/500':
        renderDOM('.root', new Error500Page());
        break;
    case '/signin':
        renderDOM('.root', new SigninPage());
        break;
    case '/signin-pass':
        renderDOM('.root', new SigninConfirmPage());
        break;
    case '/signup':
        renderDOM('.root', new SignupPage());
        break;
    case '/main':
        renderDOM('.root', new MainPage());
        break;
    case '/edit-profile':
        renderDOM('.root', new ProfilePage());
        break;
}


/*window.changePageContent = () => {

    const newContext = new Button(
        'button',
        {
            field: 'Изменил заголовок',
        }

    );
    Pages.getWelcome()?.setProps({ content: newContext } as any);
}*/


//window.page = Pages.getWelcome();


//renderDOM('.root', root);
