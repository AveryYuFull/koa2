const router = require('koa-router')()
const userInfoController = require('../controllers/user-info')

module.exports = router
    .post('/user/signIn.json', userInfoController.signIn)
    .post('/user/signUp.json', userInfoController.signUp)
