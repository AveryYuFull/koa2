import Request from '../utils/request'
import validator from 'validator'
import userCode from '../../../codes/user'

const signUp = async (userInfo) => {
    const result = validateUserInfo(userInfo);
    
    if (!result.success) {
        return result;
    }

    let requestParams = {
        url: '/api/user/signUp.json',
        data: userInfo
    };
    return await Request.post(requestParams);
}

const validateUserInfo = (userInfo) => {
    const result = {
        success: false,
        message: ''
    }

    if (!/[a-zA-Z0-9\_\-]{6,16}/.test(userInfo.userName)) {
        result.message = userCode.ERROR_USER_NAME;
    } else if (!validator.isEmail(userInfo.email)) {
        result.message = userCode.ERROR_EMAIL;
    } else if (!/[\w+]{6,16}/.test(userInfo.password)) {
        result.message = userCode.ERROR_PASSWORD;
    } else if (userInfo.password !== userInfo.confirmPassword) {
        result.message = userCode.ERROR_PASSWORD_CONFIRM;
    } else {
        result.success = true
    }

    return result;
}

export {
    signUp
}