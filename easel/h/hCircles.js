 
h._dc = function () {
	var h = this, gx = h.graphics, g = G(arguments),
			o = g.O ? g.f :
			{x: g.f, y: g.s, r: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	gx.dc(o.x, o.y, o.r)
	return h
}
h.dc = function () {
	var h = this
	h.graphics.dc.apply(h.graphics, arguments)
	return this
}
h.dc = function () {
	var h = this, gx = h.graphics,
			g = G(arguments), o
	if (g.A) {
		return $a(h, 'dc', g.f)
	}
	if (g.OO_) {
		return h.cirs(g)
	}
	o = g.O ? g.f :
			N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[2]} :
							N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} : {c: g.f, C: g.s, l: g.t}
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
	return h
}
  
 
h.cir = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} :
			N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
					g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
					{c: g.f, C: g.s, l: g.t}
	h.c(o)
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
}
h.cir = function (rad, x, y, fc, sc) {
	var gx = this.graphics
	x = N(x) ? x : 0
	y = N(y) ? y : 0
	if (fc) {
		this.fs(fc)
	}
	if (sc) {
		this.ss(fc)
	}
	gx.dc(x, y, rad)
	return this
}
h.cirs = function () {
	var h = this, g = G(arguments)
	g.e(function (c) {
		h.dc(c)
	})
	return this
}
h.cir2 = function (rad, fc, sc) {
	var gx = this.graphics
	if (fc) {
		gx.f(fc)
	}
	if (sc) {
		gx.s(fc)
	}
	gx.dc(0, 0, rad)
	return this
}

 
h.circ = h.circle = function (x, y, radius, fc, sc) {var gx = this.graphics
	if (fc) {
		gx.f(fc)
	}
	if (sc) {
		gx.s(fc)
	}
	gx.dc(x, y, radius)
	return this
}

//tricky short name:
OVERLAPNAMEWITHCOLOR = h.c = function (rad) {
	return this.dc(0, 0, rad)
}

 
 