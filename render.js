var views = require('koa-views');
var path = require('path');

module.exports = views(path.join(__dirname,'/templates'),{
    map:{html:'swig'}
}); 
