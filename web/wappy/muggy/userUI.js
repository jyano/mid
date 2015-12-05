$.user = function (u) {
	$.wStatus = function (user, fn) {
		$.g('sts1', {u: user},
				function (sts) {
					fn(sts.c)
				})
	} //with first status?
	var userA = $.a('', function () {
		window.location = '/wap/user/' + u.username
	}).K('thumbnail')
	userA.A(
			$.i(u.mug || defaultMug),
			$.h4(u.username),
			$.h5('status: ' + u.status),
			$.bt('X', function () {
			}),
			$.bt('be me', function () {
			})
	)
	return userA
}