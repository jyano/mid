BMH8 = function () {
	s = $St()
	v = [[-100, 0], [0, -100], [100, 50]]
	h = s.h(100, 300)
	h.drag()
	h.bmCir({
		cirs: [{r: 150},
			{x: 200, r: 150},
			[300, 100, 100], [400, 100, 100]]
	})
	h2 = s.h(700, 300)
	h2.drag()
	h2.bV({
		v: [
			[[-100, 0], [0, -100], [100, 50]],
			[[-200, 0], [-100, -100], [0, 50]],
			[[0, 200], [0, -200], [400, -300], [400, 300]]]
	})
}//D
//good:
MXD = function () {
	z()
	st = $St()
	m = $tMx(210, 230, .5, .5)
	$.i('chicks', function (i) {
		h = st.h(100, 100, '+').l(0)
		gx = h.graphics
		h.dr(0, 0, 200, 200)
		gx.bf(i, null, m)
		h.l(20).C('r', 20).dc(100, 100, 100)
	})
}
M2D = CJSM2D = function () {
	z()
	m = $Mx()
	$l(m)
	$St().bm('me', function (bm) {
		b = bm.XY(400, 200)
		p = b.getConcatenatedDisplayProps();
		$l(p)
		cm = b.getConcatenatedMatrix()
		$l(cm)
	})
}
HBFHS = function () {
	st = $St(1800, 500).t()
	h = st.h(300, 100)
	h.bf({
		i: 'me',
		hs: [100, 300, 500, 700, 900],
		fn: function (x) {
			h.dc(x, 30, 120).es()
		}
	})
}
HBF = function () {
	$St().t().h(300, 300).bf('me', function (h) {
		h.dc(300)
	})
}
HBMCIR = function () {
	st = $St().t()
	st.h(300, 200).bmCir({
		circs: [{r: 100}, {x: 200, y: 200}, {}]
	})
}
//loader:
BMCR = function () {
	$St()._(function (st) {
		h = st.h('+')
		h.bC({
			circs: [
				{x: 200, y: 100, r: 150},
				{r: 100}, {x: 300}
			]
		})
	})
}
TXB = function () {
	$St()._(function (st) {
		h = st.h('+')
		h._bfT(Q.i('me'), -100)
		h.dr(0, 0, 500, 200).dr(100, 100, 500, 200).C('z').dr(0, 0, 40, 40)
	})
}
BMFV = function () {
	Q(function () {
		__St()
		im = Q.i('me')
		$im = $(im).A()
		h.bf(im)
		h.cir({x: 40, y: 289, r: 100})
		h.mt(vs1)
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		])//.cp()
		h.mt([
			[750, 20],
			[900, 100], [900, 300], [700, 120]
		], 50, 200)//.cp()
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		], 0, 50)//.cp()
		h.cir({
			x: 550, y: 20, r: 20, c: 'b'
		})
		h.cir({
			x: 800, y: 100, r: 30, c: 'b'
		})
		h.cir({
			x: 700, y: 300, r: 20, c: 'g'
		})
		h.cir({
			x: 500, y: 120, r: 30, c: 'g'
		})
	})
}
HBFF = function () {
	st = $St().t()
	Q('me', function () {
		st.h(300, 200, '+').bf(Q.i('me')).dc(100)
		st.h(500, 100, '+').bf('me').dc(100)
	})
}
SAND = function () {
	Q(function () {
		__St()
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function () {
			return st.h('+').l(20).bf(ch).bs(me)
		}
		Ch().rec(200, 200, 200, 300)
		Ch().rec(400, 250, 200, 300)
		Ch().rec(600, 250, 200, 300)
		Ch().rec(750, 350, 200, 300)
		Ch().rec(900, 250, 200, 300)
		h = st.h('+')
		h.l(20).bf(me).bs(ch)
		h.rec(200, 200, 200, 300)
		h.rec(400, 250, 200, 300)
		h.rec(600, 250, 200, 300)
		h.rec(750, 350, 200, 300)
		h.rec(900, 250, 200, 300)
	})
}
SAN = function () {
	$St(1000, 500)._(function (st) {
		st.h(810, 410, '+').l(8).bf(Q.i('chicks'), $Mx(1, 0, 0, 1, -800, -400))
				.rec(1600, 800)
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function (x, y) {
			var h = st.h(x, y).l(8)
			h.graphics.bf(ch)
			h.bs(me)
			cjs.SL(h)
			return h
		}
		Ch(200, 200).rec(200, 300)
		Ch(400, 250).rec(200, 300)
		Ch(600, 250).rec(200, 300)
		Ch(750, 350).rec(200, 300)
		Ch(900, 250).rec(200, 300)
	})
}
 EASELPHYS = function () {
	i = cjs.DisplayObject.prototype
	i.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	i.go = function () {
		$t(this.move())
	}
	$St().bm('me', function (b) {
		b.go(10, 10)
		$.t(function () {
			$l(b.inStage())
		})
	})
}