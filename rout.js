var router = require('koa-router')()

const posts = [];
router.get('/',list)
    .get('/list/add',add)
    .get('/list/:id',show)
    .post('/add',create)

    

async function list(ctx){
    await ctx.render('list',{posts:posts})
 }
 async function add(ctx){
    await ctx.render('add')
}
async function create(ctx){
    let post = ctx.request.body
    const id = posts.push(post) - 1;
    post.create_time = new Date();
    post.id = id;
    ctx.redirect('/')
}
async function show(ctx){
    let id = ctx.params.id
    post = posts[id]
    if(!post) ctx.throw(404,'err post id')
    await ctx.render('show',{posts:post})
}
module.exports = router;