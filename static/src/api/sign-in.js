import Request from '../utils/request'

const signInApi = async function (userInfo) {
    let result = await Request.post({
        url: '/api/user/signIn.json',
        data: userInfo
    });
    return result;
}

const signInForm = function (userInfo) {
    userInfo.source = 'form'
    return Request.form({
        url: '/api/user/signIn.json',
        data: userInfo
    })
}

export {
    signInApi,
    signInForm
}
