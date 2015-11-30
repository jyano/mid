$datURL = function (q) {
	return {
		uId: q.uId, dU: q.du
	}
}
un_ = function (un) {
	return {un: un}
}
$user = function (user) {
	return {
		id: user.id,
		un: user.un,
		mug: user.mug || 'no mug',
		status: user.status || 'no status'
	}
}
toUser = function (u) {
	return {
		id: u.id,
		un: u.un, mug: u.mug || null,
		status: u.status || 'no status'
	}
}
toUser = function (u) {
	if (A(u)) {
		return _.m(u, toUser)
	}
	return {
		id: u.id,
		un: u.username,
		mug: u.mug || 'no mug',
		status: u.status || 'no status'
	}
}
_val = function (val) {
	return val.value
}
json_ = jD = pjd = function (p, str) {
	return function (z, da) {
		S(str) ? p.json(da [str]) :
				p.json(da)
	}
}

_pm = function (q, pm) {
	return q.params[pm]
}
_byUn = function (q) {
	return {un: _pm(q, 'un')}
}
_fByUn = function (m) {
	return function (q, p) {
		$m[m].find(_byUn(q), _json(p))
	}
}
_findP = function (m, byOb) {
	return function (q, p) {
		$m[m].find(byOb, _json(p))
	}
}


 


//files = pics //cutouts  = images
// $N=Number
//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}
_se = __send = function (p) {
	return _pFn('send')
}
q$ = function (q) {
	q.auth = function () {
		var q = this
		q.loggedIn = isLoggedIn(q)
		q.un = q.ss.un;
		// =  p.lc.loggedIn
		//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
		return q
	}
	q.un_ = function () {
		return un_(this.pm.un)
	}
	q.pm = q.params
	q.b = q.body
	q.un = function () {
		return {un: this.un}
	}
	q.parUr = q.parseUser = function (ur) {
		var q = this
		if (ur) {
			q.user = p.lc.user = ur   //res.locals.U = req.U =
			q.un = p.lc.un = ur.un//res.locals.u = req.u =
			q.uId = p.lc.urId = ur._id //res.locals.I = req.I =
		}
	}
	q.urs = q.users = function (fn) {
		Ur.fi(q.b, fn)
	} // q.users( wUrs )
	return q
}
ss$ = $ss = function (ss) {
	ss.sv = ss.save;
	return ss
}
p$ = $res = function (p) {
	p.js = p.j = p.json
	p.newUserSucc = function (q, ur) {
		var p = p$(this)
		// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
		//set session u=u.u (user name= user.username)
		ss.un = user.un
		//set session li=true (loggedIn=true)
		ss.loggedIn = true
		//save ss and send back a json obj of username -so a string?
		//_.x(q.session, {un: u.un, loggedIn: true})
		ss.sv(function () {
			p.js(ur.un)
		})
	}
	p.da = function (da, fn) {
		fn = fn || function (a) {
			return a
		}
		if (da) {
			p.js(fn(da))
		}
	}
	p.daFn = function (fn) {
		var p = this
		return function (z, da) {
			p.da(da, fn)
		}
	}
	p.f1 = function (m, ob) {
		m.f1(ob, _js(this))
	} // ***
	return p
}// ***
nx$ = function (nx) {
	nx.if = function (z) {
		if (z) {
			this(z)
		}
	}
	return nx
}
qp = qpn$ = function (fn, q, p, nx) {
	q = q$(q)
	q.ss = ss$(q.session)
	p = p$(p)
	nx = nx$(nx)
	return function () {
		fn(q, p, nx)
	}
}
$a.G = $a.GET = function (url, fn) {
	var $a = this
	$a.get(url, $w.user, fn)
}
$a.PO = $a.POST = function (url, fn) {
	this.po(url, $w.user, fn)
}
$a.DEL = function (url, fn) {
	this.del(url, $w.user, fn)
}
$get = function (url, fn) {
	$a.g(url, qp(function (q, p, nx) {
		fn(q, p, nx)
	}, q, p, nx))
}
$post = function (url, fn) {
	$a.po(url, qp(function (q, p, nx) {
		fn(q, p, nx)
	}, q, p, nx))
}
$post = function (q) {
	return {
		un: q.un,
		title: q.body.title,
		content: q.body.content,
		dataURL: q.body.dataURL
	}
}
$post('/sendMail', function (q, p) {
	Ml.cr($mail(q.b.to, q.un, q.b.text), _json(p))
})
$dtMl = function (datetime, text, from) {
	return {datetime: datetime, text: text, from: from}
}
miniQP = function (q, p) {
	miniQ(q)
	miniP(p)
}
miniQ = function (q) {
	q.ss = q.session;
	return q
}
miniP = function (p) {
	p.lc = p.locals
	return p
}
