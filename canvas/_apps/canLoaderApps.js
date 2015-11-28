CLIPSTARS = function () {
	z()
	__C()
	Q(fn)
	//just draws green circ?
	function fn() {
		$l('--clipstars')
		x.Star = function (r) {
			var ctx = this
			r = N(r, R(4, 2))
			ctx.b(r, 0, 'w') // first point drawn is the right most point
			_.t(9, x9)
			return x.f()
			function x9(i) {
				x.rt(36).lt(i % 2 == 0 ? (r / 0.5) * 0.2 : r, 0)
			}
		}
		x.tl(75, 75).a(60).cl()
		x.lg({cS: {g: 0, z: 1}, y1: -75, y2: 75}).fr(-75, -75, 250)
		_.t(10, x10)
	}
	
	function x10() {
		$l('x10')
		x._(
				function () {
					x.tl(
							R(150, -75), R(150, -75)
					).Star()
				}
		)
	}
}
GLOBALCOMP = function () {
	c = __C()
	Q(
			function () {
				x.d('me', 100, 100)
				x.d('me', 200, 100)
				x.d('me', 300, 100)
				x.d('me', 400, 100)
				x.d('me', 500, 100)
				x.d('me', 150, 150) //  x.sO(); x.dO()
				x.xo()
				c.$(
						function () {
							var g = G(arguments), o
							o = {x: g.f, y: g.s}
							x.d('guy', o.x, o.y)
						}
				)
			}
	)
}
PIXELTEST = function () {
	c = __C();
	cjs.lq(
			['me'], function (q) {
				me = q('me')
				c.drawImage(me, 100, 100)
				d = c.gD(100, 100, 500, 500)
				// c.pD(d , 120, 120 )
				zeros = 0
				nums = 0
				_.each(
						d.data, function (d) {
							if (d == 0) {
								zeros++
							} else {
								nums++
							}
						}
				)
				$l('zeros: ' + zeros + ' - nums: ' + nums)
			}
	)
}
GCOMP = function () {
	Q(function () {
		__C()
		x.d('me', 100, 100)
		x.d('me', 200, 100)
		x.d('me', 300, 100)
		x.d('me', 400, 100)
		x.d('me', 500, 100)
		x.d('me', 150, 150) //  x.sO(); x.dO()
		x.xo()
		c.$(function () {
			var g = G(arguments), o
			o = {x: g.f, y: g.s}
			x.d('guy', o.x, o.y)
		})
	})
}
CVQLOADER = function () {
	__C()
	Q(['me'], function (q) {
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		c.pD(c.gD(100, 100, 500, 500), 120, 120)
		c.f("r").fr(10, 10, 50, 50)
		imgData = c.gD(10, 10, 50, 50)
		c.pD(imgData, 10, 70)
	})
}
PIXEL = function () {
	c = $.c();
	Q(['me'], function (q) {
		me = Q.i('me')
		c.drawImage(me, 100, 100)
		d = c.gD(100, 100, 500, 500)
		// c.pD(d , 120, 120 )
		zeros = nums = 0
		_.e(d.data, function (d) {
			if (d == 0) {
				zeros++
			} else {
				nums++
			}
		})
		$l('zeros: ' + zeros + ' - nums: ' + nums)
	})
}
CANVASQLOADER = function () {
	__C();
	cjs.lq(
			['me'], function (q) {
				me = q('me')
				c.drawImage(me, 100, 100)
				c.pD(c.gD(100, 100, 500, 500), 120, 120)
				c.f("red").fr(10, 10, 50, 50)
				imgData = c.gD(10, 10, 50, 50)
				c.pD(imgData, 10, 70)
			}
	)
}
_ADBE = function (fn) {
	return function () {
		Q(function () {
			__C()
			j = x.d('me', 100, 300)
			i = x.d('chicks', 600, 300)
			fn()
		})
	}
}
ADBE = _ADBE(function () {
	c.$(function (x1, y1) {
		x.a(x1, y1, 10).s()
	})
})
PATH = function () {
	Q(function () {
		s = c = $.c('g', 200, 200)
		d = $.c('x', 200, 200)
		f = $.dragFrame(c)
		f1 = $.dragFrame(d).X(300)
		x = c.ctx()
		xx = d.ctx()
		x.c('X', 'X').fr(0, 0, 1000, 1000)
		x.b(10, 30, 'r', 'X')
		x.lt([[30, 10], [160, 20], [50, 200]]).x()//.D()
		x.cl()
		x.d('me', 50, 50)
		d.ctx().d('me', 0, 0)
		_.in(function () {
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			xx.d(d, 35, 15)
			_.in(function () {
				x.d(d, 0, 0)
				_.in(function () {
					xx.c('X').clearRect(0, 0, 200, 200)
					xx.d(c)
				})
			})
		})
	})
}