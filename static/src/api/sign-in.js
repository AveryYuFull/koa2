import Request from '../utils/request'

const signInApi = async function (userInfo) {
    let result = await Request.post({
        url: '/api/user/signIn.json',
        data: userInfo
    });
    return result;
}

export {
    signInApi
}
