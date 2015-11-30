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
$arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}
$eachPush = function () {
}

 