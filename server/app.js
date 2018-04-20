const Koa = require('koa')
const koaLogger = require('koa-logger')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')
const path = require('path')
const views = require('koa-views')

const config = require('../config')
const routers = require('./routers/index')

const app = new Koa()

const mysqlSessionConfig = {
    host: config.database.HOST,
    port: config.database.PORT,
    user: config.database.USER,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
}

// session middleaware
app.use(session({
    key: 'SESSION_ID',
    store: new MysqlSession(mysqlSessionConfig)
}))

// logger middleaware
app.use(koaLogger())

// koa static middleaware
app.use(koaStatic(path.join(__dirname, '../static')))

// body parser middleaware
app.use(bodyParser())

// koa views middleaware
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

// router middleaware
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(config.PORT, config.HOST, () => {
    console.log(`app is running in ${config.HOST}:${config.PORT}`)
})