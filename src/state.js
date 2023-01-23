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
    profile: {
        edit: {
            title: 'Изменить профиль',
            login: 'Mark',
            mainFormLabel: 'Имя (обязательно)',
            slaveFormLabel: 'Имя пользователя',
            buttonPasswordChange: 'Сменить пароль',
            mainFormLastNamePlaceholderOne: '"Фамилия (необязательно)"',
            mainFormLastNamePlaceholderTwo: '"О себе"',
            descriptonFormMain: 'Любые подробности, например: возраст, род занятий или город. \n Пример: 20 лет, сам себе программист из МСК.',
            discriptionFormSlaveOne: 'Вы можете выбрать публичное имя пользователя в Spectre. В\n' +
                'этом случае - другие люди смогут найти вас по такому имени и\n' +
                'связаться, не зная вашего телефона.',
            discriptionFormSlaveTwo: 'Вы можете использовать символы a-z, 0-9 и подчеркивания.\n' +
                '            Минимальная длина - 5 символов.',
        }

    }
}
