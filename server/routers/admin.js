const router = require('koa-router')()
const adminController = require('../controllers/admin')

module.exports = router.get('/', adminController)
