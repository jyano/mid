h.f = function (fill) {
	if (S(fill)) {
		fill = oO('c', fill)
	}
	this.graphics.f(fill)
	return this
}
 
h.s = function (fill) {
	if (S(fill)) {
		fill = oO('c', fill)
	}
	this.graphics.s(fill)
	return this
} 
 
h.fs = function () {
	this.graphics.fs.apply(
			this.graphics, arguments)
	return this
}
 
h.l = h.ss = function (l, b, c) {
	var h = this, gx = h.graphics;
	gx.ss(l || 1, b, c)
	return h
}
h.ss = function (a) {
	var h = this, gx = h.graphics, g, o
	if (S(a)) {
		this.C(a);
		return this.ss.apply(this, _.rest(arguments))
	}
	g = G(arguments)
	o = {l: g[0], caps: g[1], jts: g[2], mit: g[3], ignSc: false}
	o.l = N(o.l) ? o.l : 4
	if (o.caps == 'r') {
		o.caps = 'round'
	}
	if (o.caps == 's') {
		o.caps = 'square'
	}
	if (o.caps == 'b') {
		o.caps = 'butt'
	}
	if (o.mit == 'r') {
		o.mit = 'round'
	}
	if (o.mit == 'm') {
		o.mit = 'miter'
	}
	if (o.mit == 'b') {
		o.mit = 'bevel'
	}
	o.jts = o.jts || 0
	if (U(o.mit)) {
		o.mit = 100
	}
	if (g.n) {
		o.ignSc = true
	}
	gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
	return h
}
 
 
