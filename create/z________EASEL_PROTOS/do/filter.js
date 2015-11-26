dO.fl = function () {
	var ob = this, g = G(arguments), i
	if (A(g[0])) {
		return ob.fl.apply(ob, g[0])
	}
	ob.filters = ob.filters || []
	_.e(g, function (fl) {
		ob.filters.push(fl)
	})
	if (!g.n) {
		i = ob.image;
		this.ca(0, 0, i.width, i.height)
	}
	return ob
}

dO.fl2 = function () {
	var ob = this, g = G(arguments)
	ob.filters = []
	ob.filters = ob.filters || []
	_.e(g, function (fl) {
		ob.filters.push(fl)
	})
	if (!g.n) {
		i = ob.image;
		this.ca(0, 0, i.width, i.height)
	}
	return ob
}
dO.aF = function (h) {
	var ob = this
	ob.fl($AF(h))
	return ob
}
dO.aF2 = function (h) {
	var ob = this
	this.fl2($AF(h))
	return ob
}
dO.fl = function (fl, i) {
	this.filters = this.filters || []
	if (U(fl)) {
		return _.l(this.filters)
	}
	if (N(fl)) {
		return this.filters[fl]
	}
	if (O(fl)) {
		this.filters.push(fl)
	}
	if (O(i)) {
		this.ca(i)
	}
	return this
}
dO.Fl = function (fl, i) {
	this.filters = this.filters || []
	if (U(fl)) {
		return _.l(this.filters)
	}
	if (N(fl)) {
		return this.filters[fl]
	}
	if (O(fl)) {
		this.filters.push(fl)
	}
	if (O(i)) {
		this.ca(i)
	}
	return this
}
dO.cF = function (a, b, c, d, e, f, g, h) {
	var cf = $cF(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}
dO.bF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.aF = function (a, b, c, d, e, f, g, h) {
	var bf
	bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.aMF = function (a, b, c, d, e, f, g, h) {
	var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
	this.filters = this.filters || []
	this.filters.push(bf)
	return bf
}
dO.cMF = function (cM) {
	var cf = new cjs.ColorMatrixFilter(cM)
	this.filters = this.filters || []
	this.filters.push(cf)
	return cf
}