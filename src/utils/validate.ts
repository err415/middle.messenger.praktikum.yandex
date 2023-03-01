export function isValidFirstName(value: string | null): boolean {
    if (value!.length < 4) {
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');


        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[0].classList.remove('view');
        let nameRegex = /^[a-zA-Z\\-]+$/;
        let validFirstName = value!.match(nameRegex);
        if (validFirstName === null) {
            document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[0].classList.remove('view');
            return true;
        }
    }

}

export function isValidLastName(value: string | null): boolean {
    if (value!.length < 4) {
        document.getElementsByClassName('valid-err--msg')[1].classList.add('view');

        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[1].classList.remove('view');
        let nameRegex = /^[a-zA-Z\\-]+$/;
        let validLastName = value!.match(nameRegex);
        if (validLastName === null) {
            document.getElementsByClassName('valid-err--msg')[1].classList.add('view');

            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[1].classList.remove('view');
            return true;
        }
    }
}

export function isValidlogin(value: string | null): boolean {
    if (value!.length < 5) {
        document.getElementsByClassName('valid-err--msg')[2].classList.add('view');

        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[2].classList.remove('view');
        let nameRegex = /^[a-zA-Z0-9\\-]+$/;

        if (value!.match(nameRegex) === null) {
            document.getElementsByClassName('valid-err--msg')[2].classList.add('view');
            //document.getElementById(id as string)!.classList.add('view');
            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[2].classList.remove('view');
            return true;
        }
    }
}

export function isValidEmail(value: string | null): boolean {
    if (value!.length < 1) {
        document.getElementsByClassName('valid-err--msg')[3].classList.add('view');

        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[3].classList.remove('view');
        let nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        let validEmail = value!.match(nameRegex);
        if (validEmail === null) {
            document.getElementsByClassName('valid-err--msg')[3].classList.add('view');
            //document.getElementById(id as string)!.classList.add('view');
            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[3].classList.remove('view');
            return true;
        }
    }
}

export function isValidSignIn(value: string | null): boolean {
    if (value!.length < 1) {

        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');
        return false;

    } else {
        document.getElementsByClassName('valid-err--msg')[0].classList.remove('view');

        let nameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        let validEmail = value!.match(nameRegex);

        if (validEmail === null) {
            document.getElementsByClassName('valid-err--msg')[0].classList.add('view');
            //document.getElementById(id as string)!.classList.add('view');
            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[0].classList.remove('view');
            return true;
        }
    }
}
export function isValidSignInPassword(value: string | null): boolean {
    let nameRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    let validPass = value!.match(nameRegex);
    if (validPass === null) {
        console.log('false')
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');
        return false;
    } else {
        console.log('true')
        document.getElementsByClassName('valid-err--msg')[0].classList.remove('view');
        return true;
    }
}

export function isValidPhone(value: string | null): boolean {
    if (value!.length < 11) {
        document.getElementsByClassName('valid-err--msg')[4].classList.add('view');
        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[4].classList.remove('view');
        let nameRegex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        let validPhone = value!.match(nameRegex);
        if (validPhone === null) {
            document.getElementsByClassName('valid-err--msg')[4].classList.add('view');
            return false;
        } else {
            document.getElementsByClassName('valid-err--msg')[4].classList.remove('view');
            return true;
        }

    }
}

export function isValidPass(value: string | null): boolean {
    let nameRegex = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
    let validPass = value!.match(nameRegex);
    if (validPass === null) {
        document.getElementsByClassName('valid-err--msg')[5].classList.add('view');
        return false;
    } else {
        document.getElementsByClassName('valid-err--msg')[5].classList.remove('view');
        return true;
    }
}

export function isValidConfigPass(value: string | null): boolean {
    const confirm = (document.getElementsByName('password')[0] as HTMLInputElement).value;

    if (value !== confirm) {
        document.getElementsByClassName('valid-err--msg')[6].classList.add('view');
        return false;

    } else {
        document.getElementsByClassName('valid-err--msg')[6].classList.remove('view');
        return true;
    }
}

export function isValid(name: string | null, value: string | null) {
    switch (name) {
        case 'first_name':
            return isValidFirstName(value);

        case 'last_name':
            return  isValidLastName(value);

        case 'login':
            return isValidlogin(value);

        case 'email':
            return isValidEmail(value);

        case 'phone':
            return isValidPhone(value);

        case 'password':
            return isValidPass(value);

        case 'password_verify':
            return isValidConfigPass(value);

        case 'signin_email':
            return isValidSignIn(value);

        case 'signin_pass':
            return isValidSignInPassword(value);

        default:
            return false;
    }

}
