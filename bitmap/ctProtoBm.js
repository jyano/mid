$l('ctProtoBm.js')
ct = cjs.Container.prototype
h=cjs.Shape.prototype
ct.bm = ct.b = function () {
	var ct = this, g = G(arguments), o, bm
	o = N(g.s) ? {i: g.f, sc: g.s, fn: g.t} :
			N(g.f) ? {sc: g.f, fn: g.s} :
			{i: g.f, fn: g.s}
	o.sc = N(o.sc, 1)
	o.i = o.i || 'me';
	o.al = N(o.al, 1)
	if (O(o.i)) {
		bm = ct.A(_$Bm(o.i))
		return bm
	}
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		o.fn($Bm(o.i).a2(ct))
		return ct
	}
	$.i(o.i, function (i) {
		var bm = _$Bm(i).a2(ct).scXY(o.sc)
		bm.rCenter()//if (!g.n) {bm.rC()}
		//bm.XY( ct.W()/2, ct.H()/2 )
		//works with stage i guess.. but fucks with 'container' - cant check bounds
		bm.XY(ct.W() / 2, ct.H() / 2)
		if (g.n) {
			bm.XY(-1000)
		}
		if (g.p) {
			bm.drag()
		}
		if (o.fn) {
			o.fn(bm, ct)
		}
	})
	return ct
}
ct.aBm = ct.Bm = function () {
	this.bm.apply(this, arguments)
	return this
}
ct.bmRegCenterX = ct.bm0X = function (img, func) {
	var that = this
	$.img(img, function (image) {
		var bm = new cjs.Bitmap(image[0])
		bm.regX = bm.W() / 2
		bm.regY = bm.H() / 2
		that.addChild(bm);
		if (func) {
			func(bm)
		}
	})
	return this
}
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
$l('ct.qB = ct.bQ in ctProtoBm.js')
	var b, g = G(arguments)
	b = Q.b(name)
			.XY(N(x, 0), N(y, 0))
			.sXY(N(sX, 1), N(sY, sX || 1))
			.rt(N(rt, 0))
	if (!g.n) {
		b.rC()
	}
	
	if (g.p) {
		b.drag()
	}
	this.A(b);
	return b
}
//below was old ! :
h.bf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	if (O(g.f) && A(g.f.hs)) {
		o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
	}
	else {
		o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
	}
	o.i = o.i || 'me'
	if (!Q.ran) {
		if (o.hs) {
			$.i(o.i, function (i) {
				_bf(i, o.mx);
				if (o.fn) {
					_.e(o.hs, o.fn)
				}
			})
		}
		else if (S(o.i)) {
			$.i(o.i, function (i) {
				_bf(i, o.mx, o.fn)
			})
		}
	}
	else if (S(o.i)) {
		_bf(Q.i(o.i), o.mx, o.fn)
	}
	else {
		_bf(o.i, o.mx)
	}
	return h
	function _bf(i, mx, fn, hs) {
		var g = G(arguments),
				o = {
					i: g.f,
					mx: A(g.s) ? $Mx(g.s) : g.s,
					fn: _.tFn(g.t),
					hs: g[3]
				}
		h._bf(i, o.mx)
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
}
h.bf1 = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s} :
			{i: g.f, mx: g.s, fn: g.t}
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o.mx, o.fn)
			if (o.hs) {
				_.e(o.hs, o.fn)
			}
		})
	}
	if (S(o.i)) {
		o.i = Q.i(o.i)
	}
	_bf(o.i, o.mx, o.fn)
	return h
	function _bf(i, mx, fn, hs) {
		var g = G(arguments),
				o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
						F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
						{i: g.f, mx: g.s, hs: g.t}
		o.i = S(o.i) ? Q.i(o.i) : o.i
		o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
		o.fn = _.tFn(o.fn)
		h._bf(i, o.mx)
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) :
				o.fn(h)
	}
}
 
//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
h._bf = function (i, tf) {
	this.graphics._bf(i, tf)
	return this
}
h.bf = function () {
	var h = this, gx = h.graphics, g = G(arguments), o
	o = O(g.f) && A(g.f.hs) ? g.f :
			F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
			{i: g.f, mx: g.s, hs: g.t}
	o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
	o.fn = _.tFn(o.fn)
	o.i = o.i || 'me'
	if (S(o.i) && !Q.ran) {
		$.i(o.i, function (i) {
			_bf(i, o)
		})
	}
	else {
		_bf(S(o.i) ? Q.i(o.i) : o.i, o)
	}
	return h
	function _bf(i, o) {
		h._bf(i, o.mx);
		o.hs ? _.e(o.hs, function (shp) {
			o.fn(shp, h)
		}) : o.fn(h)
	}
}
h.bmCir = h.bC = function (o) {
	o = o || {}
	var h = this
	o.i = o.i || 'me'
	o.circs = o.circs || []
	o.cs = o.cs || []
	o.hs = o.hs || []
	$.i(o.i, function (i) {
		_.e(o.circs, function (c) {
			h.bf(i).dc(c)
		})
	})
	return h
}
h.bR = function (o) {
	var h = this;
	h.bf(o, function (h1) {
		if (o.hs) {
			_.e(o.hs, function (r) {
				w.rec(r.w, r.h)
			})
		}
		else {
			h.rec(o.hs)
		}
	})
	return h
}
h.bP = h.bV = function (o) {
	var h = this, g = G(arguments), o
	h._bVAsy = function (i, v) {
		var h = this
		i = i || 'me'
		$.i(i, function (i) {
			h._bV(i, v)
		})
		return h
	}
	h._bV = function (i, vs) {
		i = i || 'me'
		return this.bf(i).lt(vs).cp()
	}
	o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
	if (Q.ran) {
		h._bV(o.i, o.v)
	}
	else {
		h._bVAsy(o.i, o.v)
	}
	return h
}
// bitmap stroke
h.bitmapStroke = h.bs = function (i) {
	var h = this;
	h.graphics.bs(i);
	return h
}
 