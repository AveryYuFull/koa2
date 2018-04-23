const dbUtils = require('../utils/dbUtil')

module.exports = {
    /**
     * 根据用户名和密码查找用户
     * @param {object} options 用户名和密码对象
     * @return {object || null}
     */
    async getOneByUserNameAndPassword(options) {
        let sql = `
            SELECT 
                * 
            FROM 
                user_info
            WHERE 
                name='${options.name}' AND password='${options.password}'
            LIMIT 1`
        let result = await dbUtils.query(sql)
        if (Array.isArray(result) && result.length > 0) {
            return result[0]
        } else {
            return null
        }
    },

    async getExistOne(options) {
        const sql = `
            SELECT 
                name, email 
            FROM 
                user_info
            WHERE
                name='${options.name}' OR email='${options.email}'`
        let result = await dbUtils.query(sql)
        if (Array.isArray(result) && result.length > 0) {
            return result[0]
        } else {
            return null
        }
    },

    async registerUser (options) {
        return await dbUtils.add('user_info', options)
    }
}
