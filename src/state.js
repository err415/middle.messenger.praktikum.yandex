import button from "./components/button";

export const state = {
    welcome: {
        welcomeTitle: 'Добро пожаловать в Spectre',
    },
    h1: 'Title',
    content: 'Содержимое',
    fname: 'students',
    welcomeButton: button('welcome-btn','Войти'),

    signin: {
        title: 'Авторизация',
        signinButton: button('welcome-btn','ДАЛЕЕ'),
        signinPassButton: button('welcome-btn','ВХОД'),
    },
    signup: {
      title: 'Регистрация',
        signupButton: button('welcome-btn','Зарегистрироваться'),

    },
    main: {
        title: 'Здесть что-то будет!!! Осталость совсем немного... :)',

    },
}