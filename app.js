const express = require('express');	//引入express
const session = require('express-session');
const bodyParser = require('body-parser'); /*post方法*/
const flash = require('connect-flash');
const indexRouter = require('./routes/index');	//引入路由

const app = express();
app.use(bodyParser.json()); // 添加json解析
app.use(bodyParser.urlencoded({ extended: false }));

// 使用 session 中间件
app.use(session({
    secret: 'secrett', // 对session id 相关的cookie 进行签名
    resave: false,
    key: 'secrettDb',
    cookie: {
        maxAge: 1000 * 60, // 设置 session 的有效时间，单位毫秒
    },
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());

app.use('/', indexRouter);//使用路由

//使用art-template作为模板,设置html结尾为模板文件
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

app.use(function (req, res, next) {
    res.locals.errors = req.flash('error');
    res.locals.infos = req.flash('info');
    next();
});

//监听3000端口
var server = app.listen(3000)


