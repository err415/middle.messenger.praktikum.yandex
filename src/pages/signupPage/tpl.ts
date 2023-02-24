const tpl = `

    <h1>{{ title }}</h1>
    <form class="signup-form" action="/signin">
        
            {{{ label }}}
       
        <a href="/signin">{{{ button }}}</a>
    </form>

`;
export default tpl;
