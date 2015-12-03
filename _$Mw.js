$Mw = function (q, p, next) {
	p.lc = p.l = p.locals
	p.rr = p.ren = p.r = p.render
	p.s = p.send
	p.j = p.js = p.json
	p.rd = p.d = p.redirect
	q.b = q.bd = q.body
	q.fl = q.f = q.files
	
	// q.n  = q.flash
	q.ss = q.session
	q.q = q.query
	q.p = q.pm = q.params// q.p= function(a){return q.params[a]}
	p.lc.loggedIn = q.loggedIn = (q.ss.un) ? true : false   //=  res.locals.li=  req.li
	q.un = q.ss.un
	// $l('MAIN middleware says req.username = ' + req.username)
	next()
}

module.exports = $Mw