console.log('......\n...\n.\n\n\n');
require('./server/serverBoth');
$l(' - final - forty - \n');
require('./server/superNode')
 
$Js = function(arr){
 
	var $jsA = function (jsArr) {
	
		var $js = function () {
			var str = ''
			_.each(arguments, function (src) {
				str += '<script src="/' + src + '.js"></script>'
			})
			return str
		}
		
		return $js.apply($js, jsArr)
	}
	
	
	if (A(arr)){
		var scripts = ''
		
		_.e(arguments, function (arr) {
			arr = A(arr)? arr : [arr]
			scripts += $jsA(arr)
		})
		
		return scripts
	}
	return $jsA(arguments)
}


 



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
require('./app/_superApp')
$a.s({
	port: process.env.PORT || 4000,
	'view engine': 'jade',
	views: __dirname + '/jade/'
})

require('./app/_mong')
require('./app/_connectMW')

 
$a.g('/render/:page', function (q, p) {p.render(q.params.page)})
$a.use(require('./app/_$Mw'))

require('./tweetServer')
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
 
require('./app/_libs')

dirN = __dirname 
 
	
_.e(dirs, function (dir) {
		$a.use($e.static(dirN + '/' + dir))
		$a.use($e.static(dirN + '/' + dir + '/_deps'))
		$a.use($e.static(dirN + '/' + dir + '/_apps'))
		$a.use($e.static(dirN + '/' + dir + '/_protos'))
		$a.use($e.static(dirN + '/' + dir + '/_data'))
})


$a.get('/', function (q, p) {
	p.send(' / / /// ')
})

$a.g('/js', function (q, p) {
	p.send('<h1>hi</h1>bye' + $js('us'))
})
$a.g('/j', function(q,p){
	
	scripts = $jsA(both)
	
	p.send('<h1>hi</h1>bye' + scripts)

})
$a.g('/w', function (q, p) {
	  

	p.send('<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty, 'init') )
	
})

$a.g('/a/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	$l('app: ' + app)
	html = '<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty)
	html += '<script>$l("app:  ' +app +'"); '+app+'()</script>'
	p.send( html )
})
$a.g('/g/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	$l('app: ' + app)
	html = '<h1>hi</h1>bye' + $Js(both, superJQ, handy, sty, graphics)
	html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
	
	p.send(html)
})
$a.g('/b/:app', function (q, p) {
	app = q.params.app.toUpperCase()
	$l('app: ' + app)
	html = '-' + $Js(both, superJQ, handy, sty, graphics, bone, boneLS)
	html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
	p.send(html)
})
//$hS = $h.createServer($a)
httpServer = http.createServer($a)
httpServer.listen(80, function () {
	
	$l('server listening on port 80')
})




//require('./app/_serverSockets')
  