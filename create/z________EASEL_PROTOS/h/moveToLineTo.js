h._mt = function (x, y) {
	var g = G(arguments)
	var pt = V(g.f, g.s)
	this.graphics.mt(pt.x, pt.y)
	return this
}
h.mt = function (x, y) {
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

h._lt = h.lt = function (x, y) {
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
h.lt = function (x, y) {
	var v = V(x, y)
	this.graphics.lt(v.x, v.y)
	return this
}