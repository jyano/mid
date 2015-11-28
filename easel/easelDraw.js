vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
cjs.circ = cjs.circle = function (rad, fc) {
	if (!N(rad)) {
		return cjs.circ(8, rad)
	}
	fc = oO('c', fc || 'z')
	return cjs.shape().f(fc).dc(0, 0, rad)
}
cjs.circle2 = function (r, z, x, y) {
	graphics = new cjs.Graphics()
	if (!S(r)) {
		return circle2('red', r, z, x)
	}
	z = N(z) ? z : 32
	x = N(x) ? x : 100
	y = N(y) ? y : 100
	graphics.ss(z / 8).f(r, 'black').dc(0, 0, z)
	return cjs.shape(graphics).XY(x || 100, y || 100)
}
cjs.circle3 = function (x, y, r, fc, sc) {
	var shape, h
	shape = h = cjs.shape()
	if (O(x)) {
		return cir0(x.x, x.y, x.r, x.fc, x.sc)
	}
	x = x || 0
	y = y || 0
	r = r || 8
	fc = fc || 'w'
	sc = sc || 'z'
	shape.circle(x, y, r, fc, sc)
	SL(shape)
	return shape
}
cjs.cir = function () {
	var g = G(arguments), o, h
	o = g.O ? g.f :
			(N(g.t) && N(g.s)) ?
			{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							{c: g.f, C: g.s, l: g.t}
	h = new cjs.Shape()
	o.r = N(o.r, 50)
	o.c = o.c || 'w'
	o.C = o.C || 'z'
	o.l = N(o.l, 4)
	h.dc(o.r, o.c, o.C, o.l)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (N(o.x)) {
		h.regX = -o.x
	}
	if (N(o.y)) {
		h.regY = -o.y
	}
	h.alpha = N(o.al, 1)
	return h
}
cjs.diamond = function (w, h, fc, sc) {
	var h = $H(), gx = h.graphics;
	fc = fc || 'green';
	sc = sc || 'white';
	w = w || 100;
	h = h || w
	var hW = w / 2
	var hH = h / 2
	//var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -hW)
			.lt(-hW, 0).lt(0, hW)
			.lt(hW, 0).lt(0, -hW)
	//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
}
function cjsBalls() {
	s.cannonBall = function (x, y) {
		var s = this, h
		h = s.h(x, y)
		h.rf('a', 'z', 18).dc(18).ef()
		return h
	}
	s.basketBall = function (x, y) {
		var s = this
		return this.h(x, y).rf('w', 'o', 18).dc(18).ef()
	}
	s.beachBall = function (x, y) {
		var s = this
		return s.h(x, y)
				.rf('b', 'r', 18).dc(18).ef()
	}
	s.snowBall = function (x, y) {
		var s = this
		return s.h(x, y).rf('a', 'w', 18).dc(18).ef()
	}
}
$Gx = cjs.Gx = cjs.gx = function (a) {
	return new cjs.Graphics(a)
}
cjs.HSL = function (a, b, c) {
	return U(a) ?
			HSL(M.r() * 360, 100, 50) :
			cjs.Graphics.getHSL(a, b, c)
}
$H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} :
					{x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	return h
}
ct.h = function () {
	var ct = this,
			h = $H.apply($H, arguments)
	ct.A(h)
	return h
}
function toBoth() {
	AO = function (a) {
		return A(a) && O(a[0])
	}
}
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
cjs.iH = function (h) {
	return O(h) && h.graphics
}
cjs.cir = function () {
	var g = G(arguments), o, h
	o = g.O ? g.f :
			(N(g.t) && N(g.s)) ?
			{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							{c: g.f, C: g.s, l: g.t}
	h = new cjs.Shape()
	o.r = N(o.r, 50)
	o.c = o.c || 'w'
	o.C = o.C || 'z'
	o.l = N(o.l, 4)
	h.dc(o.r, o.c, o.C, o.l)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (N(o.x)) {
		h.regX = -o.x
	}
	if (N(o.y)) {
		h.regY = -o.y
	}
	h.alpha = N(o.al, 1)
	return h
}
ct.cir = function () {
	var h = this.h()
	return h.cir.apply(h, arguments)
}
ct.cir = function () {
	var ct = this, g = G(arguments),
			h = this.h(), o
	o = g.O ? g.f :
			N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
			{r: g.f, c: g.s}
	o.y = N(o.y, 0);
	o.x = N(o.x, 0)
	o.r = N(o.r, 50)
	h.c(o.c)
	h.dc(o.x, o.y, o.r)
	return h
}
cjs.graphics = function (a) {
	return new cjs.Graphics(a)
}
$load()
cjs.rect2 = function (width, height, x, y, fc, sc) {
	width = width || 100
	height = height || width
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	fc = fc || 'purple'
	sc = sc || 'orange'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, halfheight + y)
			.lt(halfwidth + x, halfheight + y)
			.lt(halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, -halfheight + y)
	return h
}
cjs.rect = function self(width, height, fc, sc) {
	width = width || 100
	height = height || width
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
	return h
}
gx.pol = function () {
}
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
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
h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
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
gx = cjs.Graphics.prototype
h = cjs.Shape.prototype
cjs.isShape = function (h) {
	return O(h) && h.graphics
}
cjs.graphics = function (a) {
	return new cjs.Graphics(a)
}
cjs.isCont = function (cont) {
	if (O(cont)) {
		if (cont.addContainer) {
			return true
		}
		else {
			return false
		}
	}
}
cjs.circ = cjs.circle = function (radius, fc) {
	if (!N(radius)) {
		return cjs.circ(8, radius)
	}
	fc = oO('c', fc || 'z')
	return cjs.shape().f(fc).dc(0, 0, radius)
}
cjs.diamond = function self(width, height, fc, sc) {
	fc = fc || 'green'
	sc = sc || 'white'
	width = width || 100
	height = height || width
	halfwidth = width / 2
	halfheight = height / 2
	var h = new createjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -halfheight)
			.lt(-halfwidth, 0).lt(0, halfheight)
			.lt(halfwidth, 0).lt(0, -halfheight)
	return h
}
cjs.rect2 = function self(width, height, x, y, fc, sc) {
	width = width || 100
	height = height || width
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new createjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, halfheight + y)
			.lt(halfwidth + x, halfheight + y)
			.lt(halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, -halfheight + y)
	return h
}
cjs.rect = function self(width, height, fc, sc) {
	width = width || 100
	height = height || width
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
	return h
}
//canon
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
cjs.circle2 = function (r, z, x, y) {
	graphics = new cjs.Graphics()
	if (!S(r)) {
		return circle2('red', r, z, x)
	}
	z = N(z) ? z : 32
	x = N(x) ? x : 100
	y = N(y) ? y : 100
	graphics.ss(z / 8).f(r, 'black').dc(0, 0, z)
	return cjs.shape(graphics).XY(x || 100, y || 100)
}
cjs.circle3 = function (x, y, r, fc, sc) {
	var shape, h
	shape = h = cjs.shape()
	if (O(x)) {
		return cir0(x.x, x.y, x.r, x.fc, x.sc)
	}
	x = x || 0
	y = y || 0
	r = r || 8
	fc = fc || 'w'
	sc = sc || 'z'
	shape.circle(x, y, r, fc, sc)
	SL(shape)
	return shape
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
ct = cjs.Container.prototype
cjs.shape = cjs.shp = function (x, y, f, s, width, opt) {
	if (cjs.isShape(x)) {
		return new cjs.Shape(x.graphics)
	}
	var h = new cjs.Shape()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}
cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
	var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
	shp.dc(0, 0, r)
	return shp
}
$H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	return h
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
}
 
h.dl = h.ln = h.line = function () {
	var h = this, g = G(arguments), o
	o = g.N_ ?
	{x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
	{x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
	this.mt(o.x1, o.y1).lt(o.x2, o.y2)
	return this
}
function _pre() {
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
}
//toAlert:
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	alert('gx.fancyLt = gx.poly')
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
//alpha:
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
old = function () {
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