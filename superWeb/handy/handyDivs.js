$._d = $.d_ = function () {
	var g = G(arguments),
			d = $('<div>')
	if (g.A()) {
		_.e(g.f, function (q) {
			d.A(q)
		})
	}
	else if (g.f) {
		d.A(g.f)
	}
	return d
}
$.d = $.div = function () {
	var g = G(arguments), d = $('<div>'), o
	o = g.A ? {a: g.f} : g.O ? g.f : S(g[1]) ?
	{c: g.f, k: g.s, w: g.t, h: g[3], x: g[4], y: g[5]} :
			g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
			{w: g.f, h: g.s, x: g.t, y: g[3]}
	if (o.c) {
		d.C(o.c)
	}
	if (N(o.w)) {
		d.W(o.w)
	}
	if (N(o.h)) {
		d.H(o.h)
	}
	if (N(o.x)) {
		d.ab(o.x, N(o.y, 0))
	}
	if (o.a) {
		_.e(g[0], function (g) {
			d.A(g)
		})
	}
	if (o.k) {
		d.K(o.k)
	}
	if (!g.n) {
		d.A()
	}
	if (g.p) {
		d.dg()
	}
	return _d = d
}
$.dI = function () {
	$l('$.dI')
	var g = G(arguments),
			d = $.d.apply($, g.r)
	d.id(g.f)
	return d
}
$.dK = function (k) {
	var g = G(arguments),
			d = $.d.apply($, _.r(arguments))
	return d.K(k)
}
$.dD = $.divD = function (c, w, h, x, y) {
	var d, g = G(arguments)
	w = N(w, 200)
	h = N(h, w)
	d = $.d(200, 200, '+')
	if (g.u) {
		return d.C('n')
	}
	if (g.S_) {
		d.C(c)
		if (N(w)) {
			d.W(w)
		}
		if (N(h)) {
			d.H(h)
		}
		if (N(x)) {
			d.X(x)
		}
		if (N(y)) {
			d.Y(y)
		}
		return d
	}
	if (g.N_) {
		return $.dD('o', c, w, h, x)
	}
}
$.dA = function func(col, w, height, x, y) {
	var g = G(arguments),
			div = $.d().P('absolute')
	if (U(col)) {
		return div.C('brown')
	}
	if (S(col)) {
		div.C(col);
		if (N(w)) {
			div.W(w)
		}
		if (N(height)) {
			div.H(height)
		}
		if (N(x)) {
			div.X(x)
		}
		if (N(y)) {
			div.Y(y)
		}
		if (g.p) {
			div.dg()
		}
		return div
	}
	if (N(col)) {
		return $.dA('o', col, w, height, x)
	}
}
$.dA = $.divA = function (c, w, h, x, y) {
	var g = G(arguments),
			d = $.d().P('absolute'),
			o = g.O ? g.f :
					g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
					{w: g.f, h: g.s, x: g.t, y: g[3]}
	if (N(o.w)) {
		d.W(o.w)
	}
	if (N(o.h)) {
		d.H(o.h)
	}
	d.XY(N(x, 0), N(y, 0))
	if (o.c) {
		d.C(o.c)
	}
	return d
}
$.dD = $.divD = function func(col, w, h, x, y) {
	w = N(w) ? w : 200;
	h = N(h) ? h : w;
	var div = $.div(200, 200).drag();
	if (U(col)) {
		return div.C('brown')
	}
	if (S(col)) {
		div.C(col);
		if (N(w)) {
			div.W(w)
		}
		if (N(h)) {
			div.H(h)
		}
		if (N(x)) {
			div.X(x)
		}
		if (N(y)) {
			div.Y(y)
		}
		return div
	}
	if (N(col)) {
		return func('orange', col, w, h, x)
	}
};
$.dIl = $.inlineDiv = function (a, b, c) {
	var d = dv(a, b, c);
	d.display('inline');
	return d
};
$.ilBl = $.inlineBlockDiv = function (a, b, c) {
	var d = $.d(a, b, c);
	d.display('inline-block');
	return d
};
$.dva = function (r, w, h, l, t) {
	//color, w, h, left, top
	var g = G(arguments),
			r = g[0], w = g[1], h = g[2], l = g[3], t = g[4], d
	if (!S(r)) {
		return g.n ?
				$.dva($r(), r, w, h, l, '-') :
				g.p ? $.dva($r(), r, w, h, l, '+') :
						$.dva($r(), r, w, h, l)
	}
	d = $.d(r).p('a').C(r)
	if (g.p) {
		if (w) {
			d.l(w)
		}
		;
		if (h) {
			d.t(h)
		}
		d.P(16)
		return d.auto()
	}
	w = w || 1;
	h = h || w;
	d.WH(w * 100, h * 100)
	l = l || 0;
	t = t || l;
	d.l(l * 100).t(t * 100)
	if (!g.n) {
		d.dg()
	}
	return d
}