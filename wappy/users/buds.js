$buddyRequestButton = btRq = function (user) {
	return $button('buddy-request',
			function () {
				$.post('/sRq', {to: user.u})
			})
}
johnX = function () {
	var o = {}
	o.d = 3
	o.a = function () {
		o.d++
	}
	o.g = function () {
		return o.d
	}
	return o
}
fredX = function () {
	var o = john();
	o.m = function () {
		o.d--
	}
	return o
}
REQUESTSX = function () {
	var c = CT(), d = dv('y', 800, 600)
	c(d(h1('Buddy requests'), br(),
			MB = _d().w(600).h(500)()).$$(function () {
				d.drg()
			}))
	qG('/gRq', function (msgs) {
		_e(msgs, function (msg) {
			MB(_d()(
					h6('from ' + msg.fr + ' on ' + msg.dt),
					h5(msg.m),
					bt('accept', function () {
						qP('/yRq', {u: msg.fr})
					}), bt('deny'), hr()))
		})
	})
}
$buddyRequestButton = btRq = function (user) {
	return $button('buddy-request',
			function () {
				$.post('/sRq', {to: user.u})
			})
}

 