/**
 * controller 层定义中间件
 */

 module.exports = {
     async indexPage (ctx) {
         if (ctx.session && ctx.session.isLogin) {
            await ctx.render('work', {title: 'work页面'})
         } else {
             ctx.redirect('/error')
         }
     }
 }
