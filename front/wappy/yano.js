Y.IMS = {}
Y = function (app) {
	Y.render(app)
	return Y
}


$d2 = $to = $rd = Y.directTo = Y.load = load = Y.to = function (a) {
	window.location = '/wap/' + a
}

$logOut = Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
}
 

Y.run = function (app) {
	if (F(app = Y[app.toUpperCase()] || window[app.toUpperCase()])) {
		app();return true} //return false
}

Y.render = function (app) {
	if (F(Y[app])) {
		Y[app]();
		return true
	}  //;  return false
}


Y.popUser = Y.uPop = function (un) {
	if (!un) {
		return $('.pop').$(function () {
			k.em('pop', {t: $('.pt').v, b: $('.pb').v})
		})
	}
	
	
	
	$.P('getMugByUsername', {username: un}, function (mug) { //$l('clicked ' + username + ' - ' + mug)
		
		d = $.d()
		
		
		dv.A(
				$.br(),
				$.hr(),
				$.h3('User: ' + un), $.br(),
				$.c(300).fit(mug),
				d = $.d(),
				msg = $.ta().C('w', 'z'),
				$.btMail(msg, un),
				$.btCh(un, msg),
				$.bt('fullPf', function () {Y.loc('/wap/profiles/' + un)})
		)
		
		
		
		
		$.w(dv )
			
		
			
		$.sts(un, d);   $.pf(un, d)
		
		
	
	})
		
		
		
		
}




Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
Y.clr = function () {
	z();
	Y.nav()
}
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
$(appInit)
$(function () {
	if (window[_app = uC(_app)]) {
		window[_app]()
	}
})
