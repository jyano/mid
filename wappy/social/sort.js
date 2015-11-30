SORTY = function () {
	format()
	s1(
			$.h1('your sorts'),
			$.div().WH('auto').A(
					$.h1('new sort'),
					textInputSpan('post', '/srt')
			),
			$.h4('recent: '))
	qG('/srt', function (t) {
		d1($.button(t.t, function () {
					sorty(t.t)
				}),
				$.br(2))
	}, '+')
	s2(
			$.img('me'))
}