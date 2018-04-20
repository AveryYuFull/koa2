module.exports = async ctx => {
    await ctx.render('admin', {title: '管理员页面'})
}