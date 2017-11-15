var Koa = require('koa')
var router = require('./rout') //记载路由模块
var render = require('./render')
var logger = require('koa-logger')
var koabody = require('koa-body')
var app = new Koa()

app.use(logger());
app.use(render);
app.use(koabody());

app.use(router.routes());
app.listen(3200);