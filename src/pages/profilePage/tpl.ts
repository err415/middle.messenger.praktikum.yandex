const tpl = `

    <div class="editProfile-window">
        <div class="editProfile-blockMain">
            <div class="editProfile-titleBlock">
                <div class="editProfile-backAarrow">
                    <i class="icono-arrow1-right"></i>
                </div>
                <h1 id="editProfile-title">{{ title }}</h1>
            </div>

            <div class="editProfile-avaBlock">
                <div class="editProfile-avatar"></div>
                <span class="avaBlock-btn-upload-img"></span>
                <span class="editProfile-login">{{ login }}</span>
            </div>

            {{{ formMain }}}
        </div>
        <div class="editProfile-blockSlave">
            {{{ formSlave }}}
        </div>
        <div class="editProfile-btn-passwordChange">

            <a>
                <span class="editProfile-changePwd-btn">
                    {{{ button }}}
                </span>
            </a>

        </div>

    </div>

`;
export default tpl;
