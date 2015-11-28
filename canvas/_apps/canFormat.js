CAN1 = function () {
	var picHolder
	$.fm()
	s2.A(picHolder = $.sp().id('pics'))
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(
				function () {
					var mouse = $('#mouse')
					mouse.val('click')
					mouse.change()
					mug = img.d
				}
		)
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			x = canvas = $.c('yellow', 1000, 800)
	)
	setInterval(
			function () {
				//  x.bc()
			}, 10000
	)
	s1(
			$.lb('mouse'),
			$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
					function (s) {
						x.q.ub()
						if (s == 'click') {
							x.$(
									function (X, Y) {
										x.Cd(mug, X, Y)
									}
							)
						}
						if (s == 'enter') {
							x.ME(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'leave') {
							x.ML(function (X, Y) {
								x.Cd(mug, X, Y)
							})
						}
						if (s == 'move') {
							x.MD(function () {
								x.MM(function (X, Y) {
									x.Cd(mug, X, Y)
								})
							})
							x.MU(function () {
								x.q.ub('mousemove')
							})
						}
					}
			),
			$.lb('global comp'),
			sl.apply(this, V(oO('g'))).$(function (v) {
				x.gc(v)
			}),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt(
					'SAVE(sv)', function () {
						x.sv()
					}
			), $.br(2),
			$.bt(
					'CUT(dots)', function () {
						x.q.q.unbind()
						qi('mouse').v('none')
						x.dots()
					}
			), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				x.d($w['mug'] || 'me')
			}), $.br(2),
			$.bt('dC:draw center', function () {
				x.dC($w['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt(
					'tictactoe', function () {
						x.ln(tictactoe)
					}
			), $.br(4),
			$.bt(
					'sampLinGrad', function () {
						x.sampLinGrad()
					}
			),
			$.br(2),
			$.bt(
					'sampRadGrad', function () {
						x.sampRadGrad()
					}
			),
			$.br(2),
			$.bt(
					'xxx', function () {
						xxx('barney')
					}
			), $.br(2),
			$.bt(
					'bads', function () {
						bad(x, 200, 8)
					}
			), $.br(2),
			$.bt(
					'coins', function () {
						coin(x, 200, 8)
					}
			), $.br(2)
	)
}