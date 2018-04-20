const userInfoSevice = require('../services/user-info')
const userCode = require('../codes/user')

module.exports = {
    /**
     * 登录业务
     * @param {Object} ctx 上下文对象
     */
    async signIn (ctx) {
        let formData = ctx.request.body
        let response = {
            success: true,
            message: ''
        }

        let userInfo = userInfoSevice.signIn(formData)
        if (!userInfo) {
            response.success = false
            response.message = userCode.FAIL_USER_NAME_OR_PASSWORD_ERROR
        }
        ctx.response.type = 'html'
        ctx.response.body = response
    }
}
