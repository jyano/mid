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

