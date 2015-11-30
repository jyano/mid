miniQ = function (q) {
	q.ss = q.session;
	return q
}
miniP = function (p) {
	p.lc = p.locals
	return p
}
miniQP = function (q, p) {
	miniQ(q)
	miniP(p)
}
pjdX = _json
json_ = jD = pjd = function (p, str) {
	return function (z, da) {
		S(str) ? p.json(da [str]) :
				p.json(da)
	}
}
$fi = $find = find = function (m, o, f) {
	$m[m].find(o, F(f) ? f : json_(f))
}
$cr = $create = create = function (m, q, p) {
	$m[m].create({
				un: q.un, content: q.body.content
			}, _json(p)
	)
}
$crP = $createP = createP = function (a) {
	$a.PO('/' + a, function (q, p) {
		create(a, q, p)
	})
}
$cre = cre = function (m, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	$m [m].create(o, f)
}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
$f1 = f1 = function (m, o, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].findOne(o, f)
}
$fId = $fById = fById = function (m, o, f) {
	$m[m].findById(o, F(f) ? f : pjd(f))
}
$ALL = ALL = function (route, model) {
	$a.get(route, function (req, res) {
		$m[model].find(function (err, data) {
			return res.json(data)
		})
	})
}
$rmId = $rmById = rmById = function (m, i, f) {
	if (O(i)) {
		i = i._id
	}
	if (!F(f)) {
		f = pjd(f)
	}
	$m[m].findByIdAndRemove(
			i,
			f
	)
}
$rm = $remove = remove = function (m, o, f) {
	$m[m].remove(o, f)
}
$all = all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].find(f)
}
//$N=Number
//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}
jD = pjd = function (res, str) {
	return function (err, data) {
		S(str) ? res.json(data[str]) : res.json(data)
	}
}
pjdX = function (res) {
	return function (err, data) {
		res.json(data)
	}
}
find = function (m, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	models[m].find(o, f)
}
create = function (model, req, res) {
	models[model].create(
			{
				username: req.username,
				content: req.body.content
			},
			function (err, data) {
				res.json(data)
			}
	)
}
createP = function (a) {
	$a.post('/' + a, $w.u, function (q, p) {
		create(a, q, p)
	})
}
cre = function (model, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	models[model].create(o, f)
}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
f1 = function (m, o, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	models[m].findOne(o, f)
}
fById = function (m, o, f) {
	$m[m].findById(o, F(f) ? f : pjd(f))
}
ALL = function (route, model) {
	$a.get(route, function (req, res) {
		models[model].find(function (err, data) {
			return res.json(data)
		})
	})
}
rmById = function (m, i, f) {
	if (O(i)) {
		i = i._id
	}
	if (!F(f)) {
		f = pjd(f)
	}
	models[m].findByIdAndRemove(
			i,
			f
	)
}
remove = function (m, o, f) {
	models[m].remove(o, f)
}
all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	models[m].find(f)
}
//$N=Number
//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}
Ml = Mail = $m.mail
$mail = function (to, from, txt) {
	return {to: to, from: from, text: txt}
}
$post('/sendMail', function (q, p) {
	Ml.cr($mail(q.b.to, q.un, q.b.text), _json(p))
})
$dtMl = function (datetime, text, from) {
	return {datetime: datetime, text: text, from: from}
}
_val = function (val) {
	return val.value
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
_pFn = function (p, met) {
	return function (z, da) {
		p[met](da)
	}
}
_json = function (p) {
	return _pFn('json')
}
_send = function (p) {
	return _pFn('send')
}
$find = function () {
	var g = G(arguments)
	$m[g.f].find.apply($m[g.f], g.r)
}
$findAll = function (m, fn) {
	$find(m, {}, fn)
}
$findAllP = function (m, p) {
	$findAll(m, _json(p))
}
_pm = function (q, pm) {
	return q.params[pm]
}
_byUn = function (q) {
	return {un: _pm(q, 'un')}
}
_findP = function (m, byOb) {
	return function (q, p) {
		$m[m].find(byOb, _json(p))
	}
}
_fByUn = function (m) {
	return function (q, p) {
		$m[m].find(_byUn(q), _json(p))
	}
}
$datURL = function (q) {
	return {
		uId: q.uId, dU: q.du
	}
}
$cutout = function (q) {
	return {
		un: q.un,
		d: q.body.d,
		dats: q.body.dats,
		data: q.body.d,
		physicsData: q.body.dats
	}
}
_back = function (p) {
	p.redirect('back')
}
$mug = function (fn) {
	$.get('/getMug', fn)
}
home = function () {
	Y.render('HomePage')
}
guest = function () {
	if (un == 'guest' || !un) {
		return Y.render('GuestPage')  //renderGuestPage();
	}  //usr=
}
appInit = function () {
	$.getJSON('/loggedIn', function (un) {
		$l('un: ' + un);
		Y._userName = _un = un
		notLoggedIn(un) ?
				Y.render('GuestPage') : enterSite()
		////////// guest(); getMug(); socks(); home()
	})
}
getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}
enterSite = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
	socks()
	home()
}
socks = function () {
	socket.emit('id', un)
	socket.emit('joinRoom', _un)
}
goToGuestPage = function (p) {
	p.send('guest')
}
notLoggedIn = function (un) {
	return un == 'guest' || !un
}
isLoggedIn = function (q) {
	return q.ss.un ? true : false
}
isAuthed = function (q) {
	return q.loggedIn
}
unAuthed = function (q) {
	return !isAuthed(q)
}
auth = function (q, p, n, successFn) {
	unAuthed(q) ? goToGuestPage(p) : successFn(q, p, n)
}
loginSuccess = function (q, p, user) {
	q.user = p.lc.user = user
	q.un = p.lc.un = user.un
	q.uId = p.lc.uId = user._id
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
$logOut = function (fn) {
	$a.G('/logOut', function (q, p, n) {
		$l('logging out')
		fn(q, p, n)
	})
}
User = $m.user
_title = function (q) {
	return {title: q.query.title}
}
$post = function (q) {
	return {
		un: q.un,
		title: q.body.title,
		content: q.body.content,
		dataURL: q.body.dataURL
	}
}
//files = pics 
//cutouts  = images
$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
}
Cut = Cutout = $m.cutout
$arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}
$eachPush = function () {
}
Ur = User = $m.user
Js = Json = function (p, da, fn) {
	fn = fn || function (a) {
		return a
	}
	if (da) {
		p.json(fn(da))
	}
}
$js = function (p, da) {
	p.json(da)
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
	return p
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
ss$ = $ss = function (ss) {
	ss.sv = ss.save;
	return ss
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
qp = qpn$ = function (fn, q, p, nx) {
	q = q$(q)
	q.ss = ss$(q.session)
	p = p$(p)
	nx = nx$(nx)
	return function () {
		fn(q, p, nx)
	}
}
un_ = function (un) {
	return {un: un}
}
nx$ = function (nx) {
	nx.if = function (z) {
		if (z) {
			this(z)
		}
	}
	return nx
}
Req = $m.req
User = $m.user
_toFr = function (to, fr) {
	return {to: to, fr: fr}
}
$toFr = function (q) {
	return __toFr(q.body.to, q.u)
}
Fl = $m.file
_js = _json
_se = _send
