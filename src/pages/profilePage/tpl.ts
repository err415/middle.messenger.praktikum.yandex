const tpl = `

    <div class="edit-profile-window">
        <div class="edit-profile-block-main">
            <div class="edit-profile-title-block">
                <div class="edit-profile-back-arrow">
                    <i class="icono-arrow1-right"></i>
                </div>
                <h1 id="edit-profile-title">{{ title }}</h1>
            </div>

            <div class="edit-profile-ava-block">
                <div class="edit-profile-avatar"></div>
                <span class="ava-block-btn-upload-img"></span>
                <span class="edit-profile-login">{{ login }}</span>
            </div>

            {{{ formMain }}}
        </div>
        <div class="edit-profile-block-slave">
            {{{ formSlave }}}
        </div>
        <div class="edit-profile-btn-password-change">

            <a>
                <span class="edit-profile-change-pwd-btn">
                    {{{ button }}}
                </span>
            </a>

        </div>

    </div>

`;
export default tpl;
