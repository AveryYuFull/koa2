const userInfoModel = require('../models/user-info')

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
    }
}
