const router = require('koa-router')()
const workController = require('../controllers/work')

module.exports = router.get('/', workController.indexPage)
