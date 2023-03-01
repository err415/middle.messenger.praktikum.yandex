const tpl = `

    <h1>{{ title }}</h1>
    <form class="signin-form" action="/signin-pass">

        {{{ input }}}
        <span  id="{{ class_validate_err }}" class="{{ class_validate_err }}">{{ valid_error }}</span>

        <a href="/signin-pass">{{{ button }}}</a>


    </form>
    <a id="link_to_register" href="/signup">Нет аккаунта? - Зарегистрироваться</a>

`;

export default tpl;
