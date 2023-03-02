const tpl = `
    <div class="signin-pass-msg">
        <p>Введите ваш пароль:</p>
    </div>

    <form class="pass-form" action="/main">
        {{{ input }}}
        <span  id="{{ class_validate_err }}" class="{{ class_validate_err }}">{{ valid_error }}</span>

        <a href="/main">{{{ button }}}</a>
    </form>

`;
export default tpl;
