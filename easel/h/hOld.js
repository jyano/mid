 
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
 
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
