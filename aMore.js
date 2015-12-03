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