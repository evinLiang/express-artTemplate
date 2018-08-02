var express = require('express');	//引入express
var app = express();
var indexRouter = require('./routes/index');	//引入路由

app.use('/', indexRouter);//使用路由

//使用art-template作为模板,设置html结尾为模板文件
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

//监听3000端口
var server = app.listen(3000)


