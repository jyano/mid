dO.uCx = dO.updateContext
dO.a2 = function (ct, x, y) {
	var dO = this
	ct.A(dO)
	if (N(x)) {
		dO.X(x)
	}
	if (N(y)) {
		dO.Y(y)
	}
	return dO
}
dO.a2 = function (ct, x, y) {
	var dO = this
	ct.A(dO)
	if (N(x)) {
		dO.X(x)
	}
	if (N(y)) {
		dO.Y(y)
	}
	return dO
}
dO.s = function () {
	return this.set.apply(this, arguments)
}
dO.s = function () {
	return this.set.apply(this, arguments)
}
dO.tkEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.tickEnabled
	}
	dO.tickEnabled = g.f ? true : false
	return dO
}
dO.tkEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.tickEnabled
	}
	dO.tickEnabled = g.f ? true : false
	return dO
}
dO.nm = dO.n = dO.N = function (name) {
	if (U(name)) {
		return this.name
	}
	this.name = name;
	return this
}
dO.nm = dO.n = dO.N = function (name) {
	if (U(name)) {
		return this.name
	}
	this.name = name;
	return this
}
dO.ix = function (n) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return
	}
	dO.parent.sChIx(dO, n)
	return dO
}
dO.ix = function (n) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return
	}
	dO.parent.sChIx(dO, n)
	return dO
}
dO.s2p = dO.snap2px = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.snapToPixel
	}
	dO.snapToPixel = g.f ? true : false
	return dO
}
dO.s2p = dO.snap2px = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.snapToPixel
	}
	dO.snapToPixel = g.f ? true : false
	return dO
}
dO.ca = function () {
	var dO = this, g = G(arguments), o
	var st = dO.getStage()
	var op
	if (!g.n && !g.p && O(dO.image)) {
		dO._ca($(dO.image)[0])
	}
	if (passTest(g)) {
		op = g.f;
		dO.updCa(op);
		return dO
	}
	o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.f} :
			N(g.s) ? {w: g.f, h: g.s} : {}
	if (O(o.i)) {
		o.i = toImg(o.i)
		dO = toObImg(dO)
		if (!g.n) {
			dO._ca()
		}
	}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
			st ? st.W() : 0)
	o.h = N(o.h) ? o.h :
			O(o.i) ? o.i.height :
					st ? st.H() : 0
	return dO._ca(o.x, o.y, o.w, o.h)
	function passTest(g) {
		return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
	}
	
	function toObImg(i) {
		return $(i.image ? i.image : i)[0]
	}
	
	function toImg(i) {
		return i.image ? i.image : $(i)[0];
	}
}
dO.cl = function () {
	return this.clone.apply(this, arguments)
}
dO.cl = function () {
	return this.clone.apply(this, arguments)
}
dO.dr = function () {
	this.draw.apply(this, arguments)
	return this
}
dO.dr = function () {
	this.draw.apply(this, arguments)
	return this
}
  