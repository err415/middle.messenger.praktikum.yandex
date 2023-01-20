import button from "./components/button";

export const state = {
    welcome: {
        welcomeTitle: 'Добро пожаловать в Spectre',
    },
    h1: 'Title',
    content: 'Содержимое',
    fname: 'students',
    welcomeButton: button('welcome-btn','Войти'),
    signinButton: button('welcome-btn','ДАЛЕЕ'),
}