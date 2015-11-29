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
//function advanced() {
h.same = h.copy = function () {
	return $h(this) // cjs.shape(this)
}
 