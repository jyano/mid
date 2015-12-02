x.fS = x.f = x.c = x.fs = function (c, C, l) {
	var g = G(arguments)
	if (g.u) {
		this.fill()
		if (g.p) {
			this.s()
		}
		return this
	}
	this.fillStyle = oO('c', c)
	if (C) {
		this.C(C)
	}
	if (N(l)) {
		this.l(l)
	}
	return this
}

x.sS= x.s = x.C = x.ss = function () {
	var g = G(arguments), o
	if (g.u) {
		this.stroke();
		if (g.p) {
			this.f()
		}
		return this
	}
	o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
	if (o.C) {this.strokeStyle = oO('c', o.C)}
	if (N(o.l)) {this.l(o.l)}
	return this
}
x.al = function (al) {
	this.globalAlpha = al;
	return this
}
