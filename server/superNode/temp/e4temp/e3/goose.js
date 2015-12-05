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
