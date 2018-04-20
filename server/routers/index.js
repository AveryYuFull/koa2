/**
 * compose sub-router
 */

const routers = require('koa-router')()
const home = require('./home')
const admin = require('./admin')
const api = require('./api')
const work = require('./work')

routers.use('/', home.routes(), home.allowedMethods())
routers.use('/admin', admin.routes(), admin.allowedMethods())
routers.use('/api', api.routes(), api.allowedMethods())
routers.use('/work', work.routes(), work.allowedMethods())

module.exports = routers
