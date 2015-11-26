ct.h = function () {
	var ct = this,
			h = $H.apply($H, arguments)
	ct.A(h)
	return h
}
ct.poly = function () {
	var ct = this // ?
	var h = ct.h()
	h.poly.apply(h, arguments)
	return h
}
ct.pol = function () {
	var ct = this, g = G(arguments), p,
			h = ct.h()
	if (N(g.f)) {
		h.XY(
				g.shift(),
				g.shift())
	}
	p = $a(h, 'pol', g)
	if (g.p) {
		p.drag()
	}
	return p
}
ct.rec = function () {
	var ct = this, g = G(arguments), o, ct2, h
	if (g.OO_) {
		g.e(this, 'rec');
		return this
	} //it doesnt know that's this! (scope talk)
	o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
			g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
	o.al = N(o.al, 1)
	o.rt = N(o.rt, 0)
	o.c = o.c || 'z';
	o.C = o.C || 'w'
	ct2 = ct.ct();
	h = ct2.h(o.x, o.y);
	h.rt(o.rt);
	h.c(o).al(o.al)
	if (o.lf) {
		h.lf(o)
	} else if (o.rf) {
		h.rf(o)
	}
	if (o.bm) {
		h.bR({i: 'me', hs: [o]})
	}
	else {
		h.rec(o.w, o.h)
	}
	if (g.p) {
		ct.drag()
	}
	return ct2
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
ct.circle = function (x, y, rad, color) {
	this.A(
			cjs.circle(x, y, rad, color)
	)
	return this
}
function ctProto() {
	ct.shape = function () {
		return cjs.shape.apply(cjs, arguments).a2(this)
	}
	ct.cir = function (x, y, r, f, s, width, opt) {
		return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
	}
	ct.poly = function () { // ?
		var h = this.shape()
		h.poly.apply(h, arguments)
		return h
	}
	ct.art = function (x, y, f, s) {
		var g = G(arguments)
		if (U(x)) {
			alert('must at LEAST define x');
			return
		}
		if (!N(x)) {
			alert('x not a number! but must be, lah');
			return
		}
		y = N(g[1]) ? g[1] : x
		f = S(g[2]) ? oO('c', g[2]) : null
		s = S(g[2]) ? oO('c', g[3]) : f
		var shp = cjs.shp(x, y, f, s)
		this.A(shp)
		if (g.p) {
			shp.drag()
		}
		return shp
	}
	ct.rec = function () {
		var ct = this, g = G(arguments), o, ct2, h
		if (g.OO_) {
			g.e(this, 'rec');
			return this
		} //it doesnt know that's this! (scope talk)
		o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
				g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
		o.al = N(o.al, 1)
		o.rt = N(o.rt, 0)
		o.c = o.c || 'z';
		o.C = o.C || 'w'
		ct2 = ct.ct();
		h = ct2.h(o.x, o.y);
		h.rt(o.rt);
		h.c(o).al(o.al)
		if (o.lf) {
			h.lf(o)
		} else if (o.rf) {
			h.rf(o)
		}
		if (o.bm) {
			h.bR({i: 'me', hs: [o]})
		}
		else {
			h.rec(o.w, o.h)
		}
		if (g.p) {
			ct.drag()
		}
		return ct2
	}
	ct.poly = function () {
		var ct = this, h = ct.h(), g = G(arguments)
		h.pol.apply(h, arguments)
		return !g.p ? h : h.drag()
	}
	ct.pol = function () {
		var ct = this, h = ct.h(), g = G(arguments)
		if (N(g.f)) {
			h.XY(g.shift(), g.shift())
		}
		var h = $a(h, 'pol', g)
		return !g.p ? h : h.drag()
	}
}
ct.circle = function (x, y, rad, color) {
	this.A(
			cjs.circle(x, y, rad, color)
	)
	return this
}
ct.circle = function (x, y, rad, color) {
	this.A(
			cjs.circle(x, y, rad, color)
	)
	return this
}
	function DITTO() {
		ct.shape = function () {
			return cjs.shape.apply(cjs, arguments).a2(this)
		}
		ct.cir = function (x, y, r, f, s, width, opt) {
			return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
		}
		ct.poly = function () { // ?
			var h = this.shape()
			h.poly.apply(h, arguments)
			return h
		}
		ct.art = function (x, y, f, s) {
			var g = G(arguments)
			if (U(x)) {
				alert('must at LEAST define x');
				return
			}
			if (!N(x)) {
				alert('x not a number! but must be, lah');
				return
			}
			y = N(g[1]) ? g[1] : x
			f = S(g[2]) ? oO('c', g[2]) : null
			s = S(g[2]) ? oO('c', g[3]) : f
			var shp = cjs.shp(x, y, f, s)
			this.A(shp)
			if (g.p) {
				shp.drag()
			}
			return shp
		}
	}
}