console.log('......\n...\n.\n\n\n');
require('./nod/_deps/$serverBoth$');
$l(' - final - forty - \n');
require('./nod/$nod$')
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
$a = $e();
require('./xap/$superApp$')
$a.s({
	port: process.env.PORT || 4000,
	'view engine': 'jade',
	views: __dirname + '/jade/'
})
require('./goo/$mong$')
require('./xap/midware/$connectMW$')
//$a.g('/render/:page', function (q, p) {p.render(q.params.page)})
$a.use(require('./xap/midware/$$Mw$'))
require('./REST/$api$')
require('./REST/$twitServer$')
require('./REST/$blogRollServer$')
//require('./REST/$wappyPost$')
$a.g('/', function (q, p) {
	p.send('it worked jason..')
})
$a.g('/www/:a?/:p?', function (q, p) {
	$l("rendering basic jode.. " + Math.random())
	p.render('basic', {
		app: q.params.a,
		pam: q.params.p
	})
})
//require('./_staticServer')(__dirname)
require('./$libs$')
//$hS = $h.createServer($a)
httpServer = http.createServer($a)
httpServer.listen(80, function () {
	
	$l('server listening on port 80')
})
//require('./app/_serverSockets') 