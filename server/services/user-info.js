const userInfoModel = require('../models/user-info')
const userCode = require('../../codes/user')
const validator = require('validator')

module.exports = {
    /**
     * 处理登录业务
     * @param {object} data 用户名和密码信息
     * @return {object} 用户相关信息
     */
    signIn (data) {
        return userInfoModel.getOneByUserNameAndPassword({
            name: data.userName,
            password: data.password
        })
    },

    validateUserInfo (userInfo) {
        const result = {
            success: false,
            message: ''
        }
        if (!/[a-zA-Z0-9\_\-]{6,16}/.test(userInfo.userName)) {
            result.message = userCode.ERROR_USER_NAME
        } else if (!validator.isEmail(userInfo.email)) {
            result.message = userCode.ERROR_EMAIL
        } else if (!/[\w+]{6,16}/.test(userInfo.password)) {
            result.message = userCode.ERROR_PASSWORD
        } else if (userInfo.password !== userInfo.confirmPassword) {
            result.message = userCode.ERROR_PASSWORD_CONFIRM
        } else {
            result.success = true
        }

        return result;
    },

    async getExistOne (userInfo) {
       return await userInfoModel.getExistOne({
           name: userInfo.userName,
           email: userInfo.email
       })
    },

    async registerUser (userInfo) {
        return await userInfoModel.registerUser(userInfo)
    }
}
