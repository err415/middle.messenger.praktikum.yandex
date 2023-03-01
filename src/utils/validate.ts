
export function isValidFirstName(data: any){
    let nameRegex = /^[a-zA-Z\\-]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
export function isValidLastName(data: any){
    let nameRegex = /^[a-zA-Z\\-]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
export function isValidlogin(data: any){
    let nameRegex = /^[a-zA-Z\\-]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
export function isValidEmail(data: any){
    let nameRegex = /^[a-zA-Z\\-]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
export function isValidPhone(data: any){
    let nameRegex = /^[0-9]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
export function isValidPass(data: any){
    let nameRegex = /^[0-9]+$/;
    let validfirstName = data.match(nameRegex);
    if (validfirstName === null){
        document.getElementsByClassName('valid-err--msg')[0].classList.add('view');

        return 'Only characters A-Z, a-z and \'-\' are  acceptable.';
    }
    else {
        return true;
    }
}
