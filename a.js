console.log('......\n...\n.\n\n\n');
require('./server/serverBoth');
$l(' - final - forty - \n');
require('./superNode')
eApp()
mong()
mid()
function eApp() {
	$e = require('express')
	$e.stc = $e.st = $e.static
	$e.rt = $e.r = $e.R = $e.rtr = $Rtr = function (fn, ob) {
		var $e = this
		var rtr = $e.Router()
		rtr.a = rtr.all
		rtr.u = function (a) {
			rtr.use(a)
		}
		r.u = function (a) {
			r.use(a)
		}
		r.u = function (a) {
			r.use(a)
		}
		rtr._g = function () {
			this.get.apply(this, arguments)
			return this
		}
		rtr.g = function () {
			var rtr = this, g = G(arguments)
			if (g.O) {
				_.e(g.f, function (v, k) {
					k = S.slash(k.replace('_', '/'))
					rtr.g(k, v)
				})
			}
			else {
				rtr.get.apply(rtr, g)
			}
			return rtr
		}
		r.g = function () {
			var g = G(arguments)
			if (g.O) {
				_.e(
						g.f, function (v, k) {
							k = S.slash(k.replace('_', '/'))
							r.g(k, v)
						}
				)
			}
			else {
				r.get.apply(r, g)
			}
			return r
		}
		r.g = function () {
			var g = G(arguments)
			if (g.O) {
				_.e(g.f, function (v, k) {
					k = S.slash(k.replace('_', '/'))
					r.g(k, v)
				})
			}
			else {
				r.get.apply(r, g)
			}
			return r
		}
		rtr.d = rtr.del
		rtr.rt = rtr.r = r.route
		rtr.p = rtr.po = r.post
		rtr.pu = rtr.push
		rtr.pm = rtr.param
		rtr.st = rtr.uSt = function (a) {
			return this.u($e.st(a))
		}
		r.st = r.uSt = function (a) {
			return this.u($e.st(a))
		}
		r.st = r.uSt = function (a) {
			return this.u($e.st(a))
		}
		// r.u(E.p)
		if (fn) {
			rtr.u(fn)
		}
		if (ob) {
			return rtr.g(ob)
		}
		return rtr
	}
	$Rts = function (rtrs) {
		// this is a cool function
// it lets me design a rtr object and then pass it to it
// {hello:fn, fun:fn}
// it calls $a.rt ... ?
		_.e(rtrs, function (rtr, rtrNm) {
			$a.rt(rtrNm, rtr.mw, rtr.rts)
		})
	}
	$a = $e();
	$a.u = $a.use;
	$a.g = $a.get;
	$a.po = $a.post
	$a.get_ = $a.g = function () {
		var $a = this, g = G(arguments)
		if (S(g.f) && U(g.s)) {
			return $a.get(g.f)
		}
		if (g.A) {
			multPaths(g.f)
		}
		else if (g.O) {
			multRts(g.f)
		}
		else {
			$a.get(parPt(g.f), g.r)
		}
		return $a
		function multRts(rtsOb) {
			_.e(rtsOb, function (v, k) {
				$a.g(k, v)
			})
		}
		
		function multPaths(pts, fn1, fn2) {
			_.e(pts, function (pt) {
				$a.g(pt, fn1, fn2)
			})
		}
		
		$a.g = function () {
			var $a = this, g = G(arguments)
			if (S(g.f) && U(g.s)) {
				return $a.get(g.f)
			}
			if (g.A) {
				multPaths(g.f)
			}
			else if (g.O) {
				multRts(g.f)
			}
			else {
				$a.get(parPt(g.f), g.r)
			}
			return $a
			function multRts(rtsOb) {
				_.e(rtsOb, function (v, k) {
					$a.g(k, v)
				})
			}
			
			function multPaths(pts, fn1, fn2) {
				_.e(pts, function (pt) {
					$a.g(pt, fn1, fn2)
				})
			}
		}
	}
	$a.G = $a.GET = function (url, fn) {
		var $a = this
		$a.get(url, $w.user, fn)
	}
	$get = function (url, fn) {
		$a.g(url, qp(function (q, p, nx) {
			fn(q, p, nx)
		}, q, p, nx))
	}
	$a.po = function (a, b, c) {
		return $a.post(a, b, c)
	}
	$post = function (url, fn) {
		$a.po(url, qp(function (q, p, nx) {
			fn(q, p, nx)
		}, q, p, nx))
	}
	$a.de = function (a, b, c) {
		return $a.delete(a, b, c)
	}
	$a.PO = $a.POST = function (url, fn) {
		this.po(url, $w.user, fn)
	}
	$a.DEL = function (url, fn) {
		this.del(url, $w.user, fn)
	}
	$a.set_ = $a.s = function (k, v) {
		if (O(k)) {
			_.e(k, function (v, k) {
				$a.set(k, v)
			})
			return $a
		}
		$a.set(k, v)
		$a.s = function (k, v) {
			if (O(k)) {
				_.e(k, function (v, k) {
					$a.set(k, v)
				})
				return $a
			}
			$a.set(k, v)
		}
	}
	$a.use_ = $a.u = function (a) {
		var $a = this, g = G(arguments)
		if (g.A) {
			_.e(g.f, function (mw) {
				$a.use(mw)
			})
			return $a
		}
		$a.use.apply($a, g)
		return $a
		$a.u1 = function (a) {
			$ = function () {
			}
			$.u1 = $.use = function ($a, g) {
				$a.use.apply($a, g)
				return $a
			}
			$.u = function (mw) {
				$a.use(mw)
			}
			var $e = require('express')
			var $a = $e()
			var $a = this, g = G(arguments)
			g.eaFirIfArr = function (fn) {
				var g = this
				if (g.A) {
					_.e(g.f, fn)
					return true
				}
				return false
			}
			////////
			if (g.eaFirIfArr(use)) {
				return $a
			}
			function use(mw) {
				$a.use(mw)
			}
			
			$a.use.apply($a, g)
			return $a
		}
	}
	$a.static_ = $a.stc = $a.st = function (statDirs) {
		$a.st = $a.stc = function (statDirs) {
			_.e(statDirs, function (dir) {
				$a.use($e.stc($.j(__dirname, dir)))
			})
		}
	}
	$a.useStatic = $a.STC = $a.ST = $a.uSt = function (a) {
		return this.use($e.st(a))
	} // $a.st DOUBLEDWITH: 'stc'
	$a.rt = $a.r = $a.rtr = $a.notGreat = function () {
		var $a = this, g = G(arguments), o
		var rtr = $Rtr()
		//each of the second pam...
		_.e(g.s || {}, function (fn, pt) {
			rtr.get_(parsePth(pt), fn)
		})
		$a.u(parsePth(g.f), rtr)
		return $a
		function parsePth(pt) {
			return S.slash(_.rp(_.rp(_.rp(pt,
					'_', '/'), '$$', '?'), '$', ':'))
		}
	}
	$a.bP = $a.BODYPARSER = $a.b = function (bP) {
		var $a = this
		$a.u(bP.j())
		$a.u(bP.u({extended: true}))
		return $a
	}
	$a.bP = $a.b = function (bP) {
		var $a = this
		$a.u(
				bP.j()
		)
		$a.u(
				bP.u({extended: true})
		)
		return $a
	}
	$a.st = $a.stc = function (statDirs) {
		_.e(statDirs, function (dir) {
			$a.u(ep.stc(pt.j(__dirname, dir)))
		})
	}
	$a.a = $a.setup = function () {
		$a.views('jade', __dirname + '/../views/')
		$a.port(3456)
		$a.set('cb', function () {
			var add = srv.address()
			$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
		})
		start = function () {
			srv = $a.listen(
					$a.g('port'),
					$a.g('cb')
			)
		}
		return $a
	}
	$a.st = $a.uSt = function (a) {
		return this.u($e.st(a))
	}
	$a.l = $a.ls = function (port, fn) {
		var srv
		fn = fn || function () {
			$l('listening on port ' + port)
		}
		srv = this.listen(port, fn)
		return srv
	}
	$a.vw = $a.v = $a.vws = $a.views = function (eng, dir) {
		$a.s({'view engine': eng, views: dir})
		return $a
	}
	$a.port = function (port) {
		var $a = this
		if (U(port)) {
			return $a.g('port')
		}
		$a.s('port', port || process.env.PORT || 3333)
		return $a
	}
	$a.srv = function () {
		var http = require('http').Server($a)
		return http
	}
	$a.listen_ = $a.ls = $a.l = function (port, fn) {
		_ls = function (port, fn) {
			var srv
			fn = fn || function () {
				$l('listening on port ' + port)
			}
			srv = this.listen(port, fn)
			return srv
		}
		var srv
		fn = fn || function () {
			$l('listening on port ' + port)
		}
		srv = this.listen(port, fn)
		return srv
	}
	$a.lsSrv = function () {
		var $a = this
		srv.a = function () {
			var a = this.address()
			a.p = a.port
			a.a = a.address
			return a
		}
		$a.ls($a.port(), function () {
			$l(lA + srv.a().p) // $l('listening at ... '+ http:// ' + srv.a + ' : ' +  a.p)
			host = srv.a().a
			port = srv.a().p
			$l('listening still at ' + host + ' ' + port)
		})
	}
	$a.setup = $a.a = function () {
		$a.a = $a.setup = function () {
			$a.views('jade', __dirname + '/../views/')
			$a.port(3456)
			$a.set('cb', function () {
				var add = srv.address()
				$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
			})
			start = function () {
				srv = $a.listen(
						$a.g('port'),
						$a.g('cb')
				)
			}
			return $a
		}
		$a.views('jade', __dirname + '/../views/')
		$a.port(3456)
		$a.set('cb', function () {
			var add = srv.address()
			$l('listening on //' + add.address + '[' + add.port + '] ... ' + M.random())
		})
		start = function () {
			srv = $a.listen(
					$a.g('port'),
					$a.g('cb')
			)
		}
		return $a
	}
	$a.srv = function () {
		var http = require('http').Server($a)
		return http
	}
	$a.g = function () {
		var $a = this, g = G(arguments)
		if (S(g.f) && U(g.s)) {
			return $a.get(g.f)
		}
		if (g.A) {
			multPaths(g.f)
		}
		else if (g.O) {
			multRts(g.f)
		}
		else {
			$a.get(parPt(g.f), g.r)
		}
		return $a
		function multRts(rtsOb) {
			_.e(rtsOb, function (v, k) {
				$a.g(k, v)
			})
		}
		
		function multPaths(pts, fn1, fn2) {
			_.e(pts, function (pt) {
				$a.g(pt, fn1, fn2)
			})
		}
	}
	$a.s = function (k, v) {
		if (O(k)) {
			_.e(k, function (v, k) {
				$a.set(k, v)
			})
			return $a
		}
		$a.set(k, v)
	}
	$a.po = function (a, b, c) {
		return $a.post(a, b, c)
	}
	$a.de = function (a, b, c) {
		return $a.delete(a, b, c)
	}
	$a.v = $a.vw = $a.vws = $a.views = function (eng, dir) {
		$a.s({'view engine': eng, views: dir})
		return $a
	}
	$a.port = function (port) {
		var $a = this
		if (U(port)) {
			return $a.g('port')
		}
		$a.s('port', port || process.env.PORT || 3333)
		return $a
	}
	$a.u = function (a) {
		var $a = this, g = G(arguments)
		if (g.A) {
			_.e(g.f, function (mw) {
				$a.use(mw)
			})
			return $a
		}
		$a.use.apply($a, g)
		return $a
	}
	$a.s = function (ob, v) {
		var $a = this
		if (O(ob)) {
			_.e(ob, function (v, k) {
				$a.set(k, v)
			})
		}
		else {
			$a.set(ob, v)
		}
		return $a
	}
}
function mong() {
	$mg = require('mongoose')
	Schema = $mg.Schema
	$mg.connect("mongodb://localhost/final", function () {
		$l(' - mg - ')
	})
	SCHEMAS = {
		user: {
			username: {type: String, required: true},     //username: {type:String, required:true},
			password: String,
			//m: { type: String, default: '/me.png' },
			//mug: { type: String, default: '/me.png' },  //mugData.. no mugId //mugData.. no mugId
			mug: {
				type: String,
				default: require('./defaultMug')
			},
			status: {type: String, default: 'nothing much'},
			buds: [String]
		},
		pic: {
			user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
			//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
			date: {type: Date, default: Date.now},
			modified: Date,
			size: Number,
			name: String,
			ext: String
		},
		img: {
			username: String, u: String,
			date: Date,
			data: String, d: String,
			name: String,
			dats: [Number],
			physicsData: [Number]
		},
		thing: {name: String, age: Number},
		guy: {n: {type: S, required: true}, m: S, x: N, y: N}, //map:{n:S, guys:O},
		book: {
			userId: {
				type: $mg.Schema.Types.ObjectId,
				ref: 'user', required: true
			},
			title: String,
			chapters: ['chapter']  // ???
		},
		sort: {
			username: {type: String, required: true},
			datetime: {type: Date, default: Date.now},
			title: String,
			items: {type: [{}], default: []}
		},
		status: {
			datetime: {type: Date, default: Date.now},
			username: {type: String, required: true},
			text: String
		},
		availability: {
			datetime: {type: Date, default: Date.now},
			username: {type: String, required: true},
			text: String
		},
		post: {
			datetime: {type: Date, default: Date.now},
			username: {type: String, required: true},
			title: String,
			text: String,
			dataURl: String
		},
		message: { //msg
			from: {type: String, required: true},
			to: {type: String, required: true},
			datetime: {type: Date, default: Date.now},
			title: String,
			text: String
		},
		//buddy request
		buddyRequest: {
			from: {type: String, required: true},
			to: {type: String, required: true},
			datetime: {type: Date, default: Date.now}
		},
		Topic: {
			topic: String,
			items: {type: [{}], default: []}
		}, Message: {
			topicId: Number, //?
			topicName: String,
			text: String,
			score: Number
		}, Comment: {},
		link: {
			title: String,
			url: String
		}
	}
	$md = $m = {}
	for (var model in SCHEMAS) {
		
		//str += (' - ' + model )
		$md[model] = $mg.model(
				model,
				$mg.Schema(SCHEMAS[model])
		)
	}
	userSchema = new $mg.Schema({
		u: {type: String, required: true},     //username: {type:String, required:true},
		password: String,
		profile: Object,
		m: {type: String, default: '/me.png'},
		mug: {type: String, default: '/me.png'},  //mugData.. no mugId
		mugURL: String,
		buds: [String]
	})
	picSchema = new db.Schema({
		user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
		//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
		date: {type: Date, default: Date.now},
		modified: Date,
		size: Number,
		name: String,
		ext: String
	})
	imageSchema = new $mg.Schema({
		username: String,
		date: Date,
		data: String,
		name: String,
		dats: [Number],
		physicsData: [Number]
	})
	satusSchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	})
	availabilitySchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	})
	postSchema = new $mg.Schema({
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		title: String,
		text: String,
		dataURl: String
	})
	buddyRequestSchema = new $mg.Schema({
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now}
	})
	mailSchema = new $mg.Schema({
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now},
		title: String,
		text: String
	})
	User = $mg.model('User', userSchema)
	Profile = $mg.model('Profile', profileSchema)
	BlogSchema = new Schema({author: String, title: String, url: String})
	$mg.model('blog', BlogSchema)
	Blog = $mg.model('blog')
}
function mid(){
//$a.uCP().g('/', function(q){$l("cks: ", q.cks)})
notGreat = function () {
	$a.r = $a.rt = $a.rtr = function () {
		var $a = this, g = G(arguments),
				o = {pt: g.f, rts: g.s},
				r = $Rtr()
		_.e(o.rts || {}, function (cb, pt) {
			r.g(parPt(pt), cb)
		})
		$a.u(parPt(p.pt), r)
		return $a
	}
}
// useSomethingPath  $a.uCP().g('/', function(q){$l("cks: ", q.cks)})
//  $a.ls(port,[hostN],[backlog],[cb])  Binds/listens for cns  on  spec  host/port ~ $h.s.ls()
//    conven met  ~ fn: return http.createServer($a).listen.apply(srv, g) // hSrv = ht.Srv($a, 80)
//$a.s('port', process.env.PORT || 3000)
// $a is req-handling fn ,designed to be passed to $h srv
$ss = require('express-session')
//connectMongo = require('connect-mongo')
$cnMg = require('connect-mongo')($ss)
$ssSt = new (  $cnMg  )({url: 'mongodb://localhost/jy'})
$ssMw = $ss({
	store: $ssSt,
	secret: 'foo',
	resave: true,
	saveUninitialized: true
})
$cP = require('cookie-parser')
$cPMw = $cP('xyz')
$bP = require('body-parser');
$urlBPMw = $bP.urlencoded({
	extended: false,
	limit: '50mb'
})
$jsonBPMw = $bP.json({
	limit: '50mb'
})
$a.use($ssMw)
$a.use($cPMw)
$a.use($urlBPMw)
$a.use($jsonBPMw)


}
$a.s({
	port: process.env.PORT || 4000,
	'view engine': 'jade',
	views: __dirname + '/jade/'
})
//  $a.ls(port,[hostN],[backlog],[cb])  Binds/listens for cns  on  spec  host/port ~ $h.s.ls()
//    conven met  ~ fn: return http.createServer($a).listen.apply(srv, g) // hSrv = ht.Srv($a, 80)
//$a.s('port', process.env.PORT || 3000)
// $a is req-handling fn ,designed to be passed to $h srv
srv = function () {
	var srv
	lA = 'listening at ... '
	$a.ls(
			$a.port(), function () {
				$l(lA + srv.a().p) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)
				host = srv.a().a
				port = srv.a().p
				$l('listening still at ' + host + ' ' + port)
			})
}
srv.a = function () {
	var a = this.address()
	a.p = a.port
	a.a = a.address
	return a
}
$a.g('/render/:page', function (q, p) {
	p.render(q.params.page)
})
$.use($Mw)

$hS = $h.createServer($a)
$hS.listen(80, function () {
	$l('\n port 80 <-\n')
})
//socketIO = require('socket.io')
//sessionSocketIO = require('session.socket.io')
//require('./socket/serverSockets')
function parPt(pt) {
	pt = pt.replace('_', '/')
			.replace('$$', '?')
			.replace('$', ':')
	return S.slash(pt)
}
function $Rts(rtrs) {
	_.e(rtrs, function (rtr, rtrNm) {
		$a.r(rtrNm, rtr.mw, rtr.rts)
	})
}
function moreButUnneeded() {
	httpServer = http.createServer($a)
	httpServer.listen(80, function () {
		$l('server listening on port 80')
	})
}
function moreButNotSureIfFromExpress3() {
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
_.e(fileDirs, function (dir) {
	$a.use(
			$e.static(
					$p.join(__dirname, dir)
			))
})
httpServer = http.createServer($a)
httpServer.listen(80, function () {
	$l('BOOOOOOOOX  on port 8080')
})
io = socketIO.listen(httpServer)
io.set('log level', 1)
require('./sockets')(
		io,
		new sessionSocketIO(io, mongoStore, cookieParser)
)
io = socketIO.listen(httpServer)
io.set('log level', 1)
require('./sockets')(
		io,
		new sessionSocketIO(io, mongoStore, cookieParser)
)
}
// san leanro med record system: sorian from cerner