SHOWCASE = function () {
	format()
	s2($span().id('pics'))
	s2(x = cx('y', 500, 500))
	x.q.cen()
	eaI(function (v) {
		qi('pics')(xc(v.d, 1, function () {
			x.X();
			x.f(v.d)
			url$ = v.d
		}))
	})
	s2($.br(2), lb('caption'),
			cap$ = tx().w(500))
	s1(
			$.br(2),
			lb('category'),
			cat$ = tx().w(200), $.br(2),
			bt('post', function () {
				o = {
					t: cat$.V(),
					c: cap$.V(),
					du: url$
				}
				qP('/pst', o, function () {
					pop('posted')
				})
			}), $.br(2),
			bt('make a showcase', function () {
			}), $.br(2),
			bt('submit to ranky', function () {
			}), $.br(2)
	)
}

