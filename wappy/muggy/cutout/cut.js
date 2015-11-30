cut = function (m) {
	z()
	$.format()
	// x =   xx(  $.canvas().id('can').W(100).H(100)  ).bc('w').Z(7).fit(m||'me')
	x = $.canvas('r', 500, 500).A().fit(m || 'me')
	// x.dots()
	// x.copy()
	s1.A($.button('save sprite', function () {
				x.snap()
				//fresh()
				EDIT()
			}),
			$.br(2),
			$.button('start cut', function () {
				//x.copy()
				x.dots()
			}),
			$.br(2),
			$.button('restart cut', function () {
				cut(m)
			}), $.br(2),
			$.button('file uploads',
					function () {
						window.location = '/wap/uploads'
					}
			))
	s2.A($.h2('click to start cut-out..'), x
			
			//   , dv('o',500,200).pp()(x)
	)
}