module.exports = async ctx => {
    await ctx.render('home', {title: 'home'})
}
