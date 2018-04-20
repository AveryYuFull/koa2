/**
 * controller 层定义中间件
 */

 module.exports = {
     async indexPage (ctx) {
         console.log('ctx: ', ctx.session)
        //  if (ctx.session && ctx.session.isLogin) {
        //     await ctx.render('work', {title: 'work页面'})
        //  } else {
        //      ctx.redirect('/error')
        //  }
        await ctx.render('work', {title: 'work页面'})
     }
 }
