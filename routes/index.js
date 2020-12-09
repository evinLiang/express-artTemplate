var express = require('express');
var router = express.Router();

// '/'的get 路由
router.get('/', function (req, res, next) {
	res.render('index.html', { errors: req.flash('errors') });
});

router.post('/', function (req, res, next) {
	const username = req.body.username
	const passwork = req.body.passwork
	if (!username) {
		req.flash('errors', '用户不能为空');
		res.redirect('/');
	} else if (!passwork) {
		req.flash('errors', '密码不能为空');
		res.redirect('/');
	} else {
		res.render('index.html', { success: '登录成功' });
	}
	//指向index.html模板，并且设置data 
	// req.flash('errors','用户不存在');
	// res.redirect('/');
	// res.render('index.html');
});

module.exports = router;