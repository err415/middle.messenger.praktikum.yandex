const tpl = `
    <div class="signin-pass-msg">
        <p>Введите ваш пароль:</p>
    </div>

    <form class="pass-form" action="/main">
        {{{ input }}}

        <a href="/main">{{{ button }}}</a>
    </form>

`;
export default tpl;
