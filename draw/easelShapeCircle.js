 
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
ct.cir = function () {
	var h = this.h()
	return h.cir.apply(h, arguments)
}
	