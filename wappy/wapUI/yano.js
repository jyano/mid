Y.IMS = {}
Y = function (page) {
	Y.render(page)
	return Y
}
 
Y.to = Y.load = function (a) {
	window.location = '/wap/' + a
}
 
Y.logOut = function () {
	$.Gj('logOut', function () {
		Y('GuestPage')
	})
}
Y.clr = function () {
	z();
	Y.nav()
}
Y.nav = function () {
	navbarCollapse = $.nbC().A($.n(
					// $.dd('stuff', ['tangle', 'corners', 'grid' , 'fullcan' , 'solar',  'ship',  'connect','matrix', 'iso' ]),
					$.dd('make', ['upload', 'uploads', 'cutouts', 'edit', 'avatar']),
					$.dd('draw', ['paint', 'filters', 'sprite', 'pack', 'showcase']),
					$.dd('play', ['bod', 'tween', 'space', 'hit', 'solar']),
					$.dd('talk', ['chat', 'universe', 'post']),
					$.dd('social', ['users', 'profiles', 'posts'])
					
					
					//$.dd('mvc',['sorty', 'object', 'ranky',   'dirt','knocks',  'site'])
			),
			$.nR(
					$.dd('account', ['status', 'profile', 'messages']),
					$.liA('logged: ' + _username),
					$.liA('logout', Y.logOut)
			)
	)
	$.Ct().A($.nb().A($.nbH('wappy', '/wap/tween'), navbarCollapse))
}//=Y.n
 
Y.chan = function (chan, fn) {
	alert('Y.chan')
	chan = io.connect('http://localhost/' + chan)
	if (fn) {
		chan.on('connect', fn)
	}
	return chan
}
Y.popUser = Y.uPop = function (un) {
	if (un) {
		$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
			$.w($.d().A($.br(), $.hr(),
					$.h3('User: ' + un), $.br(),
					$.c(300).fit(mug),
					d = $.d(),
					msg = $.ta().C('w', 'z'),
					$.btMail(msg, un),
					$.btCh(un, msg),
					$.bt('fullPf', function () {
						Y.loc('/wap/profiles/' + un)
					})))
			$.sts(un, d)
			$.pf(un, d)
		})
	}
	else {
		$('.pop').$(function () {
			k.em('pop', {t: $('.pt').v, b: $('.pb').v})
		})
	}
}


 
Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
} //logOut =
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
Y.run = function (app) {
	app = app.toUpperCase()
	app = Y[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}
Y.render = function (page) {
	page = Y[page]
	if (page) {
		page();
		return true
	}
	return false
}
 
Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
} //logOut =
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
$(appInit)
Y.directTo = Y.load = load = function (a) {
	window.location = '/wap/' + a
}
Y.directTo = Y.load = load = function (a) {
	window.location = '/wap/' + a
}
$(function () {
	if (window[_app = uC(_app)]) {
		window[_app]()
	}
})






