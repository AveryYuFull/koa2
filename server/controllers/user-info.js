const userInfoService = require('../services/user-info')
const userCode = require('../../codes/user')

module.exports = {
    /**
     * 登录业务
     * @param {Object} ctx 上下文对象
     */
    async signIn (ctx) {
        let formData = ctx.request.body;
        let response = {
            success: true,
            message: ''
        }

        let userInfo = await userInfoService.signIn(formData)
        if (!userInfo) {
            response.success = false;
            response.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR;
        }

        if (response.success && formData.source === 'form') {
            let session = ctx.session;
            session.userName = userInfo.name;
            session.isLogin = true
            session.userId = userInfo.id
            ctx.redirect('/work')
        } else {
            ctx.body = response;
        }
    },

    async signUp (ctx) {
        let formData = ctx.request.body;
        let response = {
            success: false,
            message: ''
        }

        const validateRes = userInfoService.validateUserInfo(formData)
        if (validateRes && !validateRes.success) {
            response.message = validateRes.message;
            ctx.body = response;
            return;
        }

        const existOneRes = await userInfoService.getExistOne(formData)
        if (existOneRes) {
            if (existOneRes.name === formData.userName) {
                response.message = userCode.ERROR_USER_NAME_IS_EXIST
            } else if (existOneRes.email === formData.email) {
                response.message = userCode.ERROR_EMAIL_IS_EXIST
            }
            ctx.body = response
            return
        }

        const insertRes = await userInfoService.registerUser({
            name: formData.userName,
            email: formData.email,
            password: formData.password,
            create_time: new Date().getTime(),
            level: 1
        });
        if (insertRes && insertRes.insertId * 1 > 0) {
            response.success = true
        } else {
            response.message = userCode.ERROR_SYS
        }
        ctx.body = response
    }
}
