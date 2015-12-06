console.log('......\n...\n.\n\n\n');
require('./superNode/_deps/$serverBoth$');
$l(' - final - forty - \n');
require('./superNode/$superNode$')
 

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
require('./superNode/express/$superApp$')
$a.s({
	port: process.env.PORT || 4000,
	'view engine': 'jade',
	views: __dirname + '/jade/'
})

require('./superNode/mongoose/$mong$')
require('./superNode/express/midware/$connectMW$')
//$a.g('/render/:page', function (q, p) {p.render(q.params.page)})
$a.use(require('./superNode/express/midware/$$Mw$'))

require('./superNode/$tweetServer$')
require('./superNode/$blogRoll$')

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
 
function past(){
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
	html = '-' + $Js(superWeb)
	html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
	p.send(html)
})
}

//$hS = $h.createServer($a)
httpServer = http.createServer($a)
httpServer.listen(80, function () {
	
	$l('server listening on port 80')
})
 
//require('./app/_serverSockets')
  function moreOld(){
	  srv = function () {
		  $a.ls($a.port(), function () {
			  $l(lA = 'listening at ... ' + srv.port) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)
			  host = srv.address()
			  port = srv.a().port
			  $l('listening still at ' + host + ' ' + port)
		  })
	  }
	  srv.a = function () {
		  var a = this.address()
		  a.p = a.port
		  a.a = a.address
		  return a
	  }
	  function moreButUnneeded() {
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
	  function $Rts(rtrs) {	// this is a cool function
// it lets me design a rtr object and then pass it to it
// {hello:fn, fun:fn}
// it calls $a.rt ... ?
		  _.e(rtrs, function (rtr, rtrNm) {
			  $a.rt(rtrNm, rtr.mw, rtr.rts)
		  })
	  }
  }
 