old = function () {
	cjs.ball = function (z, fc, sc) {
		var b = cjs.circle(0, 0, z, fc, sc)
		b.r = z
		b.d = z + z
		b.T = function (a) {
			if (U(a)) {
				return b.y() - b.r
			}
			b.y(a + b.r);
			return b
		}
		b.B = function (a) {
			if (U(a)) {
				return b.y() + b.r
			}
			b.y(a - b.r);
			return b
		}
		b.L = function (a) {
			if (U(a)) {
				return b.x() - b.r
			}
			b.x(a + b.r);
			return b
		}
		b.R = function (a) {
			if (U(a)) {
				return b.x() + b.r
			}
			b.x(a - b.r);
			return b
		}
		b.F = 1
		b.fall = function (r) {
			b.t(function () {
				if (r) {
					if (ballBox(b, r)) {
						b.F = 0
					} else {
						b.F = 1
					}
				}
				if (b.F) {
					b.y(10, '+')
				}
			})
		}
		return b
	}
	cjs.box = function (w, h, fc, sc) {
		w = w || 200
		h = h || w
		var b = rct(
				0 - w / 2, 0 - h / 2, w, h, fc, sc
		)
		b.wr = w / 2
		b.hr = h / 2
		b.wd = w
		b.hd = h
		b.top = b.T = function (a) {
			if (U(a)) {
				return b.y() - b.hr
			}
			b.y(a + b.hr)
			return b
		}
		b.bottom = b.B = function (a) {
			if (U(a)) {
				return b.y() + b.hr
			}
			b.y(a - b.hr)
			return b
		}
		b.left = b.L = function (a) {
			if (U(a)) {
				return b.x() - b.wr
			}
			b.x(a + b.wr)
			return b
		}
		b.right = b.R = function (a) {
			if (U(a)) {
				return b.x() + b.wr
			}
			b.x(a - b.wr);
			return b
		}
		b.fall = function () {
			b.t(function () {
				if (b.F) {
					b.y(40, '+')
				}  //****
				if (ballBox(b, r)) {
					b.F = 0
				}
			})
		}
		return b
	}
	cjs.ballBox = function (bl, bx, buff) {
		buff = buff || 100
		var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
				bl.x() >= bx.left() && bl.x() <= bx.right()
		if (b) {
			bl.bottom(bx.top())
		}
		return b
	}
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
}
cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
	var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
	shp.dc(0, 0, r)
	return shp
}
GRID = function () {
	z()
	stage = s = createjs.stage(1000, 1000).tick().A()
	container = c = new createjs.Container()
	stage.A(container)
	cjs.bindSlide(container)
	rows = 5;
	cols = 6;
	sqP = 12;
	sqS = 80
	sqSP = sqS + sqP
	_.times(rows * cols, function (i) {
		drawSquare(container,
				sqSP * (i % cols),
				sqSP * Math.floor(i / cols)
		)
	})
	function drawSquare(container, x, y) {
		var rectangle = new createjs.Shape()
		container.A(rectangle)
		rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
		if (x) {
			rectangle.X(x)
		}
		if (y) {
			rectangle.Y(y)
		}
		return rectangle
	}
}
HUD = function () {
	st = cjs.HUD('r', 500, 500).A()
	st.bm('guy')
	st.HUD.A().bm('me', function (b) {
		TR(b)
	})
}
nip = function () {
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	var h = cjs.shape(10, 10).a2(s).drag().opacity(.8)
	h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
			x1, y1, r1, x2, y2, r2)
			.dc(0, 0, 100)
			.endFill()
	return h
}
function more() {
	h = cjs.Shape.prototype
	h._dc = function () {
		var h = this
		h.graphics.dc.apply(h.graphics, arguments)
		return this
	}
	h.dc = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.r = N(o.r, 50)
		gx.dc(o.x, o.y, o.r)
		return h
	}
	HDC = function () {
		h = $Sh()
		h.graphics.f('blue')
		h.dc(100, 100, 100)
		h.graphics.f('yellow')
		h.dc(200, 100, 100)
		//.cir()
		_$St().A(h).u()
	}
	h.cir = function () {
		var h = this, gx = h.graphics,
				g = G(arguments), o
		if (g.A) {
			return $a(h, 'cir', g.f)
		}
		if (g.OO_) {
			return h.cirs(g)
		}
		o = g.O ? g.f : N(g.t) ?
		{x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
		{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
				g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
				{c: g.f, C: g.s, l: g.t}
		//h.c(o)
		if (o.c) {
			h.c(o.c)
		}
		if (o.C) {
			h.C(o.C)
		}
		if (N(o.l)) {
			h.l(o.l)
		}
		h.cp()
		h._dc(o)
		if (o.bf) {
			if (N(o.bf)) {
				o.bm = 'me'
			}
			if (F(Q)) { //async
				h.bf(o.bf, function () {
					h.dc(o)
				})
			}
			else { //sync
				o.tf = o.tf || null;
				h.bf(o.bf, o.tf).dc(o)
			}
		}
		else {
			h.dc(o)
		}
		h.alpha = N(o.al, 1)
		return h
	} // h.circ h.circle = h.cir2 = h.cir = 
	HCR = function () {
		h = $Sh()
		h.graphics.f('blue')
		//h.cir(100, 100, 100)
		//h.graphics.f('yellow')
		h.cir(200, 100, 100, 'r')
		_$St().A(h).u()
	}
	h.cirs = function () {
		var h = this, g = G(arguments)
		g.e(function (c) {
			h.dc(c)
		})
		return this
	}
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
	h._dr = function () {
		this.graphics.dr.apply(
				this.graphics, arguments)
		return this
	}
	h.dr = function () {
		var h = this, gx = h.graphics, g = G(arguments),
				o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
		o.x = N(o.x, 0);
		o.y = N(o.y, 0);
		o.w = N(o.w, 100);
		o.h = N(o.h, o.w)
		gx.dr(o.x, o.y, o.w, o.h)
		return h
	}
	h.dr2 = function (x, y, W, H) {
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.dr2(g)
			});
			return h
		}
		o = g.O ? g.f :
				U(g.t) ? {w: g.f, h: g.s} :
				{x: g.f, y: g.s, w: g.t, h: g[3]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w)
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
		var gx = this.graphics
		if (fc) {
			gx.f(fc)
		}
		if (sc) {
			gx.s(fc)
		}
		gx.dr(x, y, w, h)
		return this
	}
	h.rec = function () {
		var h = this, g = G(arguments), o
		if (g.OO_) {
			g.e(function (g) {
				h.rec(g)
			});
			return h
		}
		o = g.O ? g.f :
				S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
						g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
								N(g.t) ?
								{x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
								{w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, 50)
		o.h = N(o.h, o.w)
		if (o.i) {
			h.bf(o.i, function () {
				o.i = null;
				h.rec(o)
			})
			return h
		}
		if (o.c) {
			h.c(o)
		}
		if (o.lf) {
			h.lf({
				c1: o.c1 || 'z', c2: o.c2 || 'w',
				s1: 0, s2: 1,
				x: o.x - o.w / 2, y: o.y - o.h / 2,
				x2: o.x - o.w / 2, y2: o.y + o.h / 2
			})
		}
		h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
		return h
	}
	h._lt = function (x, y) {
		var v = V(x, y)
		this.graphics.lt(v.x, v.y)
		return this
	}
	h.lt = h._lt = function (x, y) {
		var h = this, gx = h.graphics, g = G(arguments)
		//A(a) && O(a[0])
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
			return h
		}
		O(g.s) ?
				g.e(function (pt) {
					h.lt(pt)
				}) :
				gx.lt(V(x, y).x, V(x, y).y)
		return h
	}
	h.lt = function (x, y) {
		var h = this, g = G(arguments)
		if (AO(g.f)) {
			g.e(function (v) {
				h.lt.apply(h, v)
			})
		}
		else if (O(g.s)) {
			g.e(function (pt) {
				h.lt(pt)
			})
		}
		else {
			this.graphics.lt(V(x, y).x, V(x, y).y)
		}
		return this
	}
	h._mt = function (x, y) {
		var g = G(arguments)
		var pt = V(g.f, g.s)
		this.graphics.mt(pt.x, pt.y)
		return this
	}
	h._mt = function (x, y) {
		var v = V(x, y)
		this.graphics.mt(v.x, v.y)
		return this
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.mt = function () {
		var g = G(arguments), o
		if (g.N) {
			return this._mt(g.f, g.s)
		}
		o = AO(g) ? {
			firPt: _.f(g.f), restPts: _.r(g.f),
			ox: g.s, oy: g.t
		} : {firPt: g.f, restPts: g.r}
		return this._mt(
				o.firPt[0] + N(o.ox, 0),
				o.firPt[1] + N(o.oy, 0)
		).lt(M.os(o.restPts, o.ox, o.oy))
	}
	h.poly = function (vxs, f, s, wd) {
		h.poly = function (verts, f, s, width) {
			var that = this, gx = this.graphics
			if (N(verts[0])) //verts passed in directly
			{
				_.each(arguments,
						function (vert) {
							gx.lt(vert[0], vert[1])
						});
				gx.cp()
			}
			else {
				this.graphics.fs(f, s, width)
				{
					_.e(verts, function (vert) {
						gx.lt(vert[0], vert[1])
					});
					gx.cp()
				}
			}
			return this
		}
		h.poly = function (verts, f, s, width) {
			var that = this, gx = this.graphics
			if (N(verts[0])) { //verts passed in directly
				_.e(arguments,
						function (vert) {
							gx.lt(vert[0], vert[1])
						});
				gx.cp()
			}
			else {
				this.graphics.fs(f, s, width)
				{
					_.e(verts, function (vert) {
						gx.lt(vert[0], vert[1])
					});
					gx.cp()
				}
			}
			return this
		}
		var h = this, g = arguments
		h.fs(f, s, wd)
		if (A(vxs) && N(vxs[0])) {
			_.e(g, function (v) {
				h.lt(v[0], v[1])
			})
		}
		else {
			_.e(vxs, function (v) {
				h.lt(v)
			})
		}
		return h.cp()
	}
	h.pol = function () {
		var h = this, g = G(arguments), o;
		//O$ >>  O(o) && !F(o) && !A(o)
		o = O$(g.f) ? g.f :
				N(g.s) && N(g.t) ?
				{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
				{v: g.f, c: g.s, C: g.t, l: g.fo}
		o.v = M.os(o.v, o.x, o.y)
		o = oDef(o || {})
		h.ef().es().c(o)
		if (o.bf) {
			var bf = S(o.bf) ? o.bf : 'me'
			h.bf(bf, function draw() {
				h.mt(o.v).cp()
			})
		}
		else {
			h.lt(o.v)
			h.cp()
		}
		return h
	}
//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
	h._bf = function (i, tf) {
		this.graphics._bf(i, tf)
		return this
	}
	h.bf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
				{i: g.f, mx: g.s, hs: g.t}
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o)
			})
		}
		else {
			_bf(S(o.i) ? Q.i(o.i) : o.i, o)
		}
		return h
		function _bf(i, o) {
			h._bf(i, o.mx);
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
	}
	h._bfT = function (i) {
		var g = G(arguments)
		return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
	}
	h._bfTAs = function (str, tfPropsArr, fn) {
		var h = this, g = G(arguments), o
		o = A(g.s) ?
		{i: g.f, tf: g.s, fn: g.t} :
		{i: g.f, fn: g.s}
		$.i(o.i, function (i) {
			_.tFn(o.fn)(
					h._bf(g.f, $tMx(_.tA(o.tf))))
		})
		return h
	}
	h.bmCir = h.bC = function (o) {
		o = o || {}
		var h = this
		o.i = o.i || 'me'
		o.circs = o.circs || []
		o.cs = o.cs || []
		o.hs = o.hs || []
		$.i(o.i, function (i) {
			_.e(o.circs, function (c) {
				h.bf(i).dc(c)
			})
		})
		return h
	}
	h.bR = function (o) {
		var h = this;
		h.bf(o, function (h1) {
			if (o.hs) {
				_.e(o.hs, function (r) {
					w.rec(r.w, r.h)
				})
			}
			else {
				h.rec(o.hs)
			}
		})
		return h
	}
	h.bP = h.bV = function (o) {
		var h = this, g = G(arguments), o
		h._bVAsy = function (i, v) {
			var h = this
			i = i || 'me'
			$.i(i, function (i) {
				h._bV(i, v)
			})
			return h
		}
		h._bV = function (i, vs) {
			i = i || 'me'
			return this.bf(i).lt(vs).cp()
		}
		o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
		if (Q.ran) {
			h._bV(o.i, o.v)
		}
		else {
			h._bVAsy(o.i, o.v)
		}
		return h
	}
// bitmap stroke
	h.bitmapStroke = h.bs = function (i) {
		var h = this;
		h.graphics.bs(i);
		return h
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rg = function (o) {
		var h = this, g = G(arguments),
				gx = h.graphics,
				o
		if (A(g[0]) && A(g[1])) {
			gx.rf(
					[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			)
			return h
		}
		o = O(g[0]) ? g[0] :
				S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						N(g[7]) ?
						{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								: N(g[5]) ?
						{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								: N(g[4]) ?
						{x2: g[2], r1: g[3], r2: g[4]}
								: N(g[3]) ?
						{r1: g[2], r2: g[3]}
								:
						{r2: g[2]})
						: S(g[0]) ?
				{c2: g[0]}
						: {}
		$df.grad(o)
		o.x2 = N(o.x2, o.x1)
		o.y2 = N(o.y2, o.y1)
		o.r1 = N(o.r1, 1);
		o.r2 = N(o.r2, 100)
		return o
	}
	h.rf = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rf(
				[o.c1, o.c2],
				[o.s1, o.s2],
				o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
//
	h.dl = h.ln = h.line = function () {
		var h = this, g = G(arguments), o
		o = g.N_ ?
		{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
		{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
		this.mt(o.x1, o.y1).lt(o.x2, o.y2)
		return this
	}
//alpha:
	h.$vs = function (polVs, ox, oy) {
		if (gpc.iP(polVs)) {
			polVs = polVs.vs()
		}
		return this.vs(polVs, ox, oy)
	}
	h.ef = function () {
		this.graphics.endFill.apply(
				this.graphics, arguments)
		return this
	}
	h.es = function () {
		var h = this, gx = h.graphics
		gx.es()
		return h
	}
	h.cp = function () {
		this.graphics.cp();
		return this
	}
	h.clr = h.z = h.clear = function () {
		this.graphics.clear();
		return this
	}
	function curves() {
		h.arc = h._a = function (x, y, r, startA, endA, aCW) {
			var h = this, gx = h.graphics
			/*
			 Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
			 For example, to draw a full circle with a radius of 20 centered at (100, 100):
			 arc(100, 100, 20, 0, Math.PI*2)
			 */
			h.arc(x, y, r, startA, endA, aCW)
			return h
		}
		h.arc2 = h._a2 = function (x, y, X, Y, r) {
			var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
			gx.arcTo(x, y, X, Y, r)
			return h
		}
		h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
			var h = this,
					gx = h.graphics
			gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
			return h
		}
		h._qt = function (cpx, cpy, x, y) {
			var h = this, gx = h.graphics
			gx.quadraticCurveTo(cpx, cpy, x, y)
			return h
		}
		h.qt = function (a, b, c, d, e, f) {
			var h = this, gx = h.graphics
			if (O(a)) {
				a = V(a)
				b = V(b)
				gx.qt(a.x, a.y, b.x, b.y)
			}
			else {
				gx.qt(a, b, c, d, e, f)
			}
			return h
		}
		h.de = h.ell = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
							N(g.f) ? {w: g.f, h: g[1]} :
									O(g.f) ? g.f : {}
			o.x = _.tN(o.x)
			o.y = _.tN(o.y)
			o.w = _.tN(o.w, 100)
			o.h = _.tN(o.h, o.w)
			gx.drawEllipse(o.x, o.y, o.w, o.h)
			return h
		}
		h.de2 = function (x, y, W, H, r) {
			var h = this
			h.de(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h._rr = function () {
			this.graphics.rr.apply(this.graphics, arguments)
			return this
		}
		h.rr = function () {
			var h = this,
					gx = h.graphics,
					g = G(arguments),
					o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
							N(g[1]) ? {w: g.f, r: g[1]} :
									N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
											O(g.f) ? g.f : {}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, 100)
			o.h = N(o.h, o.w)
			return h._rr(o.x, o.y, o.w, o.h, o.r)
		}
		h.rr2 = function (x, y, W, H, r) {
			var h = this
			h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
			return h
		}
		h.rc = h.roundRectComplex = function () {
			var h = this, gx = h.graphics
			gx.drawRoundRectComplex.apply(gx, arguments)
			return h
		}
	}
	
	curves()
//function advanced() {
	h.dl = h.ln = h.line = function () {
		var h = this, g = G(arguments), o
		o = g.N_ ?
		{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
		{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
		this.mt(o.x1, o.y1).lt(o.x2, o.y2)
		return this
	}
	h.same = h.copy = function () {
		return $h(this) // cjs.shape(this)
	}
	h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
		var h = this, gx = h.graphics,
				g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
		o = N(g[3]) ? {
			x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
		} :
				N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
						O(g.f) ? g.f : {}
		o.a = N(o.a, 0);
		o.x = N(o.x, 0);
		o.y = N(o.y, 0)
		o.p = _.cap(o.p, 0, .99)
		gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
		return h
	}
//below was old ! :
	h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
		var h = this,
				numVerts = poly.length
		_.each(poly, function (v) {
			v.X = v.x;
			v.Y = v.y
		})
		if (sc) {
			this.s(sc)
		}
		if (numVerts >= 3) {
			//move to the FIRST
			h.mt(poly[0])
			//lineTo the REST
			T(numVerts, function (i) {
				h.lt(poly[i % numVerts])
			}) //just a clever way to start from 1
		}
		return this
	}
	h.drawPolygons = function (paths, C, c) {
		var h = this
		h.C(C);
		if (c) {
			h.c(c)
		}
		_.e(paths, function (p) {
			h.drawPolygon(p)
		})
		return h
	}
	h.drawPolygons = function (paths, fc, sc) {
		var h = this
		h.f(fc).s(sc)
		_.each(paths, function (path) {
			h.drawPolygon(path)
		})
		return h
	}
	h.bf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (O(g.f) && A(g.f.hs)) {
			o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
		}
		else {
			o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
		}
		o.i = o.i || 'me'
		if (!Q.ran) {
			if (o.hs) {
				$.i(o.i, function (i) {
					_bf(i, o.mx);
					if (o.fn) {
						_.e(o.hs, o.fn)
					}
				})
			}
			else if (S(o.i)) {
				$.i(o.i, function (i) {
					_bf(i, o.mx, o.fn)
				})
			}
		}
		else if (S(o.i)) {
			_bf(Q.i(o.i), o.mx, o.fn)
		}
		else {
			_bf(o.i, o.mx)
		}
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = {
						i: g.f,
						mx: A(g.s) ? $Mx(g.s) : g.s,
						fn: _.tFn(g.t),
						hs: g[3]
					}
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) : o.fn(h)
		}
	}
	h.bf1 = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = O(g.f) && A(g.f.hs) ? g.f :
				F(g.s) ? {i: g.f, fn: g.s} :
				{i: g.f, mx: g.s, fn: g.t}
		o.i = o.i || 'me'
		if (S(o.i) && !Q.ran) {
			$.i(o.i, function (i) {
				_bf(i, o.mx, o.fn)
				if (o.hs) {
					_.e(o.hs, o.fn)
				}
			})
		}
		if (S(o.i)) {
			o.i = Q.i(o.i)
		}
		_bf(o.i, o.mx, o.fn)
		return h
		function _bf(i, mx, fn, hs) {
			var g = G(arguments),
					o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
							F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
							{i: g.f, mx: g.s, hs: g.t}
			o.i = S(o.i) ? Q.i(o.i) : o.i
			o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
			o.fn = _.tFn(o.fn)
			h._bf(i, o.mx)
			o.hs ? _.e(o.hs, function (shp) {
				o.fn(shp, h)
			}) :
					o.fn(h)
		}
	}
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
}

function more() {
	MTLT = function () {
		St()
		h.graphics.C('r', 'b')
		h.dg()
		h.lt(100, 100)
		h.lt(150, 190)
		h.lt(300, 300)
		h.lt(350, 390)
		if (R()) {
			h.cp()
		}
		h.mt(240, 210)
		h.lt(450, 410)
		h.lt(600, 500)
		h.lt(500, 500)
		h.cp()
		MTLT1 = function () {
			St();
			h.dg()
			h.lt(100, 100)
			h.lt(150, 190)
			h.lt(300, 300)
			h.lt(350, 390)
			if (R()) {
				h.cp()
			}
			h.mt(240, 210)
			h.lt(450, 410)
			h.lt(600, 500)
			h.lt(500, 500)
			h.cp()
		}
	}
	DRAWLINE = XX5 = HDL11 = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
		DRAWLINE1 = DLN = function () {
			St()
			h.dl(50, 50, 200, 200)
			h.dl(V(300, 500), [500, 200])
		}
	}
	SHAPEZ8 = function () {
		SHAPS8 = function () {
			z()
			s = stage = $St(500, 500)
			//s.bm('me', function(bm){ bm.sxy(.2)   })
			s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
			s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
			s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
			s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
			s.Sh().cir(150, 150, 120, 'c', 'd')
				//.fn(SL)
					.cir(30, 'x', 'x')
		}
		SHAPES9 = function () {
			z()
			s = stage = St(500, 500).a()
			//s.bm('me', function(bm){ bm.sxy(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
			//s.bm('me', function(bm){ bm.sxy(.2)   })
			s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
			s.Circle(100, 100, 10, 'r', 'y').fn(SL)
			s.Circle(10, 100, 100, 'z', 'x').fn(SL)
			s.Circle(100, 10, 100, 'a', 'c').fn(SL)
			s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
		}
		St()
		s.can.P('a').XY(200)
		s.b('me')
		s.bm('me', 0.2, function (bm) {
		})
		h = $h().cir()
		s.A(
				$h().cir(100, 'blue', 'green').XY(100, 100).drag()
		)
		s.h().cir(100, 100, 10, 'red', 'yellow')
		s.h().cir(10, 100, 100, 'black', 'purple')
		s.h().cir(100, 10, 100, 'blue', 'red')
		s.h().cir(150, 150, 120, 'red', 'blue')
		s.h().cir(30, 'brown', 'gray')
		s.u()
	}//C- only PLAY!?
	CENTERSHAPE8 = function () {
		CENTERSHAPE9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape();
			SL(shape)
			shape.RECT(0, 0, 100, 100, 'a')
			shape.RECT(0, -75, 25, 50, 'b')
			shape.RECT(0, -200, 100, 100, 'r')
			shape.circle(100, 200, 40, 'z', 'x')
			shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
			shape.g.beginFill("orange").drawPolyStar(
					100, 100, 50, 5, 0.6, -90)
			shape.xy(200)
			stage.bm('me', function (b) {
				me = b
				me.rgc()
				me.xy(200)
				me.sxy(.4)
			})
		}
		stage = $St(500, 600)
		shape = stage.Sh()
		gx = shape.graphics.FS()
		SL(shape)
		shape.rec(0, 0, 100, 100, 'a')
		shape.rec(0, -75, 25, 50, 'b')
		shape.rec(0, -200, 100, 100, 'r')
		shape.cir(100, 200, 40, 'z', 'x')
		gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		gx.beginFill("orange").drawPolyStar(
				100, 100, 50, 5, 0.6, -90)
		shape.XY(200)
		stage.bm('me', function (b) {
			me = b
			me.rgc()
			me.XY(200)
			me.sXY(.4)
		})
		CENTERSHAPE9 = function () {
			z()
			stage = St(500, 600).A()
			shape = stage.Shape();
			SL(shape)
			shape.RECT(0, 0, 100, 100, 'a')
			shape.RECT(0, -75, 25, 50, 'b')
			shape.RECT(0, -200, 100, 100, 'r')
			shape.circle(100, 200, 40, 'z', 'x')
			shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
			shape.g.beginFill("orange").drawPolyStar(
					100, 100, 50, 5, 0.6, -90)
			shape.xy(200)
			stage.bm('me', function (b) {
				me = b
				me.rgc()
				me.xy(200)
				me.sxy(.4)
			})
		}
	}
	YSTAR = CENSHP = function () {
		z()
		stage = cjs.stage(500, 600).A()
		shape = new cjs.Shape()
		SL(shape)
		stage.A(shape)
		shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
		shape.RECT(0, 0, 100, 100, 'a')
		shape.RECT(0, -75, 25, 50, 'b')
		shape.RECT(0, -200, 100, 100, 'r')
		shape.circle(100, 200, 40, 'z', 'x')
		shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
		shape.XY(200)
		stage.bm('me', function (b) {
			me = b
			me.XY(200)
			me.sXY(.4)
		})
	}
	LAYS = USINGLAYERSINEASEL9 = function () {
		z()
		s = St(500).A()
		s.bm('me', function (bm) {
			b = bm
			bm.sxy(3)
			drawCar()
			s.tick(function () {
				b.x(-1 * (g.x() * 2))
				b.y(-1 * (g.y() * 2))
			})
		})
		bt = $.button('safd', function () {
			s.sxy(2)
		}).A()
		function drawCar() {
			s.bm('guy', function (bm) {
				g = bm
				bm.sxy(.5)
				SL(bm)
			})
		}
		
		USINGLAYERSINEASEL9 = function () {
			z()
			s = St(500).A()
			s.bm('me', function (bm) {
				b = bm
				bm.sxy(3)
				drawCar()
				s.tick(function () {
					b.x(-1 * (g.x() * 2))
					b.y(-1 * (g.y() * 2))
				})
			})
			bt = $.button('safd', function () {
				s.sxy(2)
			}).A()
			function drawCar() {
				s.bm('guy', function (bm) {
					g = bm
					bm.sxy(.5)
					SL(bm)
				})
			}
		}
	}
	function roundRec() {
		RRR8 = ROUNDREC = function () {
			s = $St()
			h = s.h()
			gx = h.graphics.FS()
			h.c('b', 'r', 5).dc(100, 100, 100)
			h.dr(300, 200, 100, 50)
			h.dr2(500, 200, 100, 50)
			h.rr2(500, 200, 100, 50, 50)
			h.de2(500, 200, 100, 50)
			s.dot(100, 100)
			s.dot(300, 200)
			s.dot(500, 200)
			s.dot(500, 200)
			s.dot(500, 200)
			s.u()
		}//C+
		TXH8 = function () {
			St()
			h = $H().a2(st)
			h.f('red').s('black')
			h.graphics.dc(400, 400, 200)
			h.graphics.dr(100, 0, 200, 200)
			/////////
			h.rec(100, 100, 100, 100, 'y')
			h.rec(200, 200, 100, 100, 'b')
			h.c('o').polyStar(300, 100,
					50, 5, 0.6, -90)
			h.c('w', 'z')
					.roundRectComplex(400, 300,
					300, 300, 20, 20, 30, 40)
			h.cir(500, 200, 40, 'b', 'x', 10)
			return
			//function exceedsStackSize() {
			////////////////
			h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
					.c('X', 'g', 8)
					.mt([
						[100, 100], [300, 300], [400, 100],
						[500, 300], [450, 450]], [[500, 0], [600, 100]
					])
			h.cir(600, 300, 'u', 'g', 10)
			lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
			v = [[300, 300], [320, 200], [640, 400], [280, 650]]
			//two ways to make the same thing
			s.h().poly({
				v: v,
				lf: lf
			})
			s.h(250, 50).lf(lf).mt(v)
		}
	}
	
	function margin() {
		MARGINAUTO9 = function () {
			z()
			o = outer = $.div('b', 500, 500).A()
			o.A(i = inner = $.div('r', 100, 100))
			i.mar('auto')
			o.mar('auto')
		}
		MARGINAUTO9 = function () {
			z()
			o = outer = $.div('b', 500, 500).A()
			o.A(i = inner = $.div('r', 100, 100))
			i.mar('auto')
			o.mar('auto')
		}
	}
	
	function mobileHeader() {
		MOBILEHEADERS9 = function () {
		}
		MOBILEHEADERS9 = function () {
		}
	}
	
	function squareGame() {
		SQUAREGAMES9 = function () {
			z()
			s = St(400, 400).A()
		}
		SQUAREGAMES9 = function () {
			z()
			s = St(400, 400).A()
		}
	}
	
	function cirApps() {
		SIR = function () {
			$.C('b')
			$S({
				body: {fZ: 40, c: 'o'},
				canvas: {M: 20}
			})
			$.h1('SIR')
			st = $St($.c(600, 300)[0]).t()
			st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
			h = $H().a2(st)
			h.dc()
			h.dc(36)
			h.dc(18, 'o')
			h.dc(200, 100)
			h.dc(300, 100, 20, 'r')
			h.dc(300, 200, 20)
			//
			st2 = $St($.c(600, 300)[0]).t()
			st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
			st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
			//
			st1 = $St($.c(600, 300)[0]).t()
			st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
			st1.A(cjs.cir(300, 'g'))
			st1.A(cjs.cir(140, 220, 20, 'o').dc())
			st1.A(cjs.cir('r').XY(220, 200))
			st3 = $St($.c(600, 300)[0]).t()
			st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
			st3.A(
					$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
			)
			return
			st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
			h = $Sh().a2(st)
			gx = h.graphics.FS()
			h.dc()
			h.dc(36)
			h.cir(18, 'o')
			h.dc(200, 100)
			h.cir(300, 100, 20, 'r')
			h.dc(300, 200, 20)
			st2 = $St($.c(600, 300)[0]).t()
			st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
			st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
			st1 = $St($.c(600, 300)[0]).t()
			st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
			st1.A(cjs.cir(300, 'g'))
			st1.A(cjs.cir(140, 220, 20, 'o').dc())
			st1.A(cjs.cir('r').XY(220, 200))
			st3 = $St($.c(600, 300)[0]).t()
			st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
			st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
		}
		TSIR = function () {
			$.C('b')
			$S({
				body: {fZ: 40, c: 'o'},
				canvas: {M: 20}
			})
			$.h1('SIR')
			st = $St($.c(600, 300)[0]).t()
			st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
			h = $H().a2(st)
			h.dc()
			st = $St($.c(600, 300)[0]).t()
			st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
			h = $H().a2(st)
			h.dc()
		}
		ROTCIRS = function () {
			z()
			ct = $Ct().XY(150).a2($St(1000, '+'))
			h = $H().f('r').a2(ct)
			h.dc(30)
			h.dc(30, 20)
			h.dc(250, 250)
			h.XY(100, 100)
			T.on("tick", function (e) {
				ct.rotation += 3
			})
		}
		ONECIR = function () {
			z()
			ct = $Ct().XY(0, 0).a2($St(1000, '+'))
			h = $H().a2(ct).XY(0, 0)
			//x,y,r
			h.f('o')
					.dc(100, 300, 125)
			///x, r , r = 50
			h.f('z').dc(100, 300)
			h.f('r').dc(100, 300, 50)
			h.f('b').dc(100, 300)
			//r, x=0, y=0
			h.f('r').dc(100)
		}
		CJSCIR = function () {
			z()
			ct = $Ct().XY(0, 0).a2($St(1000, '+'))
			h = $H().a2(ct).XY(0, 0)
			ct.A(
					cjs.cir({
						r: 100,
						c: 'r', C: 'g', l: 50,
						oX: 100
					})//.XY(0,0)//.XY(300,400)
			)
			ct.A(
					cjs.cir(80, 300, 300, 'g', 'y', 30)
			)
			ct.A(
					h = cjs.cir(400, 300)
			)
			h.f('r').dc(28, 40, 40)
		}
		CIRTUT = function () {
			z()
			cv = $.c(1000, 500).A()
			st = new cjs.S(cv[0])
			st.t()//.b()
			ct = $Ct().XY(0, 0).a2(st)
			h = $H().a2(ct).XY(0, 0).a2(ct)
			h.f('b').dc(400, 100, 10)
			/*
			 ct.A(
			 cjs.cir({
			 r: 100,
			 c: 'r', C: 'g', l: 50,
			 oX: 100
			
			 })//.XY(0,0)//.XY(300,400)
			 )
			
			 */
		}
		CIRCSTROKE8 = function () {
			St()
			gx = h.graphics.FS()
			h.c('b', 'r', 10).XY(-100, -100)
			h.dc(200, 200, 50).dc(400, 200, 50).dc(600, 200, 50)
			/*  h.dc(300,300,50)
			 gx.dc(400,400,50)
			 h.dc(500,500,50)
			 gx.dc(600,600,50)
			 */
		}//C (PLAY needs update, WAP not?!)
		CIRCS8 = function () {
			CIRCTEST8 = function () {
				St()
				s.Sh().f('b').s('g').drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
						[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
				s.Sh().f('b').s('g').drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
						[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
			}//D better as wap
			St()
			// h.dc(100,100,50) -> no color
			h.c().dc(100, 100, 50) // black fill, l4 white stroke
			h.c('*').dc(100, 200, 50).dc(100, 250, 50)
			h.c('***').dc(200, 200, 50).dc(200, 250, 50)
			h.c({C: 'r'}).dc(300, 300, 50)
			h.cir({
				r: 50, x: 200, y: 200,
				C: ['y', 10],
				lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
				ls: {c1: 'u', c2: 'o'}
			})
			h.cir({
				r: 50, x: 500, y: 200,
				C: ['y', 2],
				rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
				rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
			})
			h = s.h().drag().lf({}).dc()
					.c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
			cjs.me = function (fn) {
				Q(['me'], function (q) {
					fn(q.getResult('me'))
				})
			}
			cjs.me(function (i) {
				h.c({
					l: 200,
					rf: ['w', 'u', 800],
					rs: {c1: 'w', c2: 'x', r2: 800}
				}).dc({x: 0, y: 0, r: 200})
				s.h().c({
					l: 200,
					lf: {c1: 'w', c2: 'u', y2: 200},
					ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
				}).dc({x: 0, y: 0, r: 200}).drag()
				s.h().lf('y', 'r', 10).dc({r: 200}).c({
					l: 0,
					c: 'y',
					//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
					bs: i, bf: i
				}).dc({r: 200}).drag()
				s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
			})
		}//D
	}
	
	/*
	 Matrix2D Class
	 Defined in: Matrix2D:41
	 Module: EaselJS
	 Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
	
	 This matrix can be visualized as:
	
	 [ a  c  tx
	 b  d  ty
	 0  0  1  ]
	 Note the locations of b and c.
	
	 Constructor
	 Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
	 Defined in Matrix2D:41
	 Parameters:
	
	 [a=1] Number optional
	 Specifies the a property for the new matrix.
	
	 [b=0] Number optional
	 Specifies the b property for the new matrix.
	
	 [c=0] Number optional
	 Specifies the c property for the new matrix.
	
	 [d=1] Number optional
	 Specifies the d property for the new matrix.
	
	 [tx=0] Number optional
	 Specifies the tx property for the new matrix.
	
	 [ty=0] Number optional
	 Specifies the ty property for the new matrix.
	
	 IndexMethodsProperties
	 Item Index
	 Methods
	
	 append
	 appendMatrix
	 appendTransform
	 clone
	 copy
	 decompose
	 equals
	 identity
	 invert
	 isIdentity
	 prepend
	 prependMatrix
	 prependTransform
	 rotate
	 scale
	 setValues
	 skew
	 toString
	 transformPoint
	 translate
	 Properties
	
	 a
	 b
	 c
	 d
	 DEG_TO_RAD static
	 identity static
	 tx
	 ty
	 */
}