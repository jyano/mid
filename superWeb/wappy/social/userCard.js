//old // does something :)
card = function (a, b) { //to see a users profile
	if (O(a)) {
		return card(a.u, a.m)
	}
	var d = $.divA('y', 300)//.cen()
	d.dblclick(function () {
		$(this).remove()
	})
	d.A($.h3(a || 'anon'), $.img(b || 'me').WH(200))
	d.el().A()
	return d
}
shUcards = function () {
	z();
	var t = 100
	usrs(function (u) {
		_.each(u, function (u) {
			$.P(
					'/getImageById', u.m,
					function (m) {
						_d().p('a').lt(t).c('r').a().drg()(
								h2(u.u),
								im(m).w(200).h(200)
						)
						t += 20
					})
		})
	})
}
