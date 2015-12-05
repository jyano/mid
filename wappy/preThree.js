
$arr = function (fn) {
	var arr = []
	fn(arr)
	return arr
}
_back = function (p) {
	p.redirect('back')
}
_title = function (q) {
	return {title: q.query.title}
}
$mug = function (fn) {
	$.get('/getMug', fn)
} 

getMug = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
}

$picByUser = function (user, fn) {
	$m.pic.find({u: user}, fn)
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
loginSuccess = function (q, p, user) {
	q.user = p.lc.user = user
	q.un = p.lc.un = user.un
	q.uId = p.lc.uId = user._id
}
$logOut = function (fn) {
	$a.G('/logOut', function (q, p, n) {
		$l('logging out')
		fn(q, p, n)
	})
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
goToGuestPage = function (p) {
	p.send('guest')
}
auth = function (q, p, n, successFn) {
	unAuthed(q) ? goToGuestPage(p) : successFn(q, p, n)
}
socks = function () {
	socket.emit('id', un)
	socket.emit('joinRoom', _un)
}
enterSite = function () {
	$mug(function (mug) {
		Y._userMug = _userMug = mug
	})
	socks()
	home()
}