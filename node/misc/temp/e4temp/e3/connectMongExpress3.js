mongoose.connect("mongodb://localhost/brain", function () {
	$l('mongo connected')
})
models = $m = require('./models')
require('./mongodb') // raw mongo
mongoStore = new (connectMongo(express))({db: 'brain'})
$a = express()
$a.set('port', process.env.PORT || 4000)
$l('env: ' + $a.get('env'))
$a.set('view engine', 'jade')
$a.set('views', __dirname + '/../views/')
//$a.use( express.logger('dev') )
//if(a.get('env')=="development"){a.use(express.errorHandler())}
$a.use(express.bodyParser({uploadDir: __dirname + "/public/uploads", keepExtensions: true}))
$a.use(cookieParser = express.cookieParser('xyz'))
$a.use(express.session({
	store: mongoStore,
	secret: 'xyz'
}))
$a.use(express.favicon())
$w = middleware = require('./middleware')
$a.use(middleware)
$a.get('/render/:page', function (req, res, next) {
	res.render(req.params.page)
})
//
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
httpServer = http.createServer($a)
httpServer.listen(80, function () {
	$l('server listening on port 80')
})
io = socketIO.listen(httpServer)
io.set('log level', 1)
require('./sockets')(
		io,
		new sessionSocketIO(io, mongoStore, cookieParser)
)


