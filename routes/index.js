var express = require('express');
var router = express.Router();

// '/'的get 路由
router.get('/', function(req, res, next) {
  	
  	//指向index.html模板，并且设置data 
  	res.render('index.html', {
		user: {
			name: 'aui',
			tags: ['art', 'template', 'nodejs']
		}
	});
});

module.exports = router;