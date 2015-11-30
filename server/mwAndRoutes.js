$w = middleware = require('./middleware')
$a.use(middleware)
$a.get('/render/:page', function (req, res, next) {
	res.render(req.params.page)
})
require('../routes/routes')()
require('../routes/socialRoutes')()
require('../routes/bookRoutes')()
$a.use($a.router)
//
//where i can publically, statically fetch items from
_.each(fileDirs, function (dir) {
	$a.use(
			express.static(
					path.join(__dirname, dir)
			))
})
 