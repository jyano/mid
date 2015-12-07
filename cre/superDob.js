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
 

dO.shad = function (color, x, y, blur) {
	cjs.shad = function (color, x, y, blur) {
		alert('cjs.shad')
		if (color == '-') {
			return new cjs.Shadow(null, 0, 0, 0)
		}
		color = S(color) ? color : 'a'
		blur = N(blur) ? blur : 10
		x = N(x) ? x : 0
		y = N(y) ? y : 0
		var shad = new cjs.Shadow(oO('c', color), x, y, blur)
		return shad
	}// = cjs.shadow
	var shadow = cjs.shad(color, x, y, blur)
	this.shadow = shadow
	return this
}
dO.shad = function (color, x, y, blur) {
	cjs.shad = function (color, x, y, blur) {
		alert('cjs.shad')
		if (color == '-') {
			return new cjs.Shadow(null, 0, 0, 0)
		}
		color = S(color) ? color : 'a'
		blur = N(blur) ? blur : 10
		x = N(x) ? x : 0
		y = N(y) ? y : 0
		var shad = new cjs.Shadow(oO('c', color), x, y, blur)
		return shad
	}// = cjs.shadow
	var shadow = cjs.shad(color, x, y, blur)
	this.shadow = shadow
	return this
}
function center() {
	dO.cX = dO.centerX = function (a) {
		if (U(a)) {
			return this.x + this.W() / 2
		}
		return this.X(a - this.W() / 2)
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
	}
	dO.cY = dO.centerY = function (a) {
		if (U(a)) {
			return this.y + this.H() / 2
		}
		return this.Y(a - this.H() / 2)
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
	}
	dO.mdX = dO.cenX = dO.cX = function (a) {
		var dO = this
		if (U(a)) {
			return dO.x + dO.W() / 2
		}
		return dO.X(a - dO.W() / 2)
	}
	dO.mdY = dO.cenY = dO.cY = function (a) {
		var dO = this,
				hH = dO.H() / 2
		return U(a) ? dO.y + hH : dO.Y(a - hH)
	}
	dO.cX = dO.centerX = function (a) {
		if (U(a)) {
			return this.x + this.W() / 2
		}
		return this.X(a - this.W() / 2)
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
		}
	}
	dO.cY = dO.centerY = function (a) {
		if (U(a)) {
			return this.y + this.H() / 2
		}
		return this.Y(a - this.H() / 2)
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
		}
	}
	dO.mdX = dO.cenX = dO.cX = function (a) {
		var dO = this
		if (U(a)) {
			return dO.x + dO.W() / 2
		}
		return dO.X(a - dO.W() / 2)
	}
	dO.mdY = dO.cenY = dO.cY = function (a) {
		var dO = this,
				hH = dO.H() / 2
		return U(a) ? dO.y + hH : dO.Y(a - hH)
	}
}
function hideRemove() {
	dO.rm = dO.remove = function () {
		var dO = this
		if (O(dO) && O(dO.parent)) {
			dO.parent.removeChild(dO)
		}
		return dO
	}
	dO.hd = dO.hide = function () {
		return this.vsb(0)
	}
	dO.rm = dO.remove = function () {
		var dO = this
		if (O(dO) && O(dO.parent)) {
			dO.parent.removeChild(dO)
		}
		return dO
	}
	dO.hd = dO.hide = function () {
		return this.vsb(0)
	}
	dO.vis = dO.vsb = function (vsb) {
		var dO = this
		if (U(vsb)) {
			return dO.visible
		}
		dO.visible = vsb ? true : false
		return dO
	}
	dO.al = dO.opacity = function (al) {
		var dO = this
		if (U(al)) {
			return dO.alpha
		}
		dO.alpha = al;
		return dO
	}
	dO.vis = dO.vsb = function (vsb) {
		var dO = this
		if (U(vsb)) {
			return dO.visible
		}
		dO.visible = vsb ? true : false
		return dO
	}
	dO.al = dO.opacity = function (al) {
		var dO = this
		if (U(al)) {
			return dO.alpha
		}
		dO.alpha = al;
		return dO
	}
}
function cache() {
	dO.uCa = dO.updCa = function (ca) {
		this.updateCache(ca);
		return this
	}
	dO.uc = dO.uncache = function (ca) {
		this.uncache(ca);
		return this
	}
	dO.__ca = function () {
		this.cache.apply(this, arguments);
		return this
	}
	dO._ca = function (x, y, w, h) {
		var dO = this
		x = N(x, 0)
		y = N(y, 0)
		w = N(w, dO.width)
		h = N(h, dO.height)
		dO.__ca(x, y, w, h)
		return dO
	}
	dO.caCv = dO.cC = dO.cc = function () {
		return this.cacheCanvas
	}
	dO.gCDU = function (ca) {
		return this.getCacheDataURL(ca)
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
	dO.caCv = dO.cC = dO.cc = function () {
		return this.cacheCanvas
	}
	dO.gCDU = function (ca) {
		return this.getCacheDataURL(ca)
	}
}
function hitTest() {
	dO._hT = function () {
		return this.hitTest.apply(arguments, this)
	}
	dO.hT = function (x, y) {
		var dO = this
		if (cjs.iDO(x)) {
			return dO.hT(
					dO.gTL(x)
			)
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return dO._hT(x, y)
	} //= dO.test
	dO._hT = function () {
		return this.hitTest.apply(arguments, this)
	}
	dO.hT = function (x, y) {
		var dO = this
		if (cjs.iDO(x)) {
			return dO.hT(
					dO.gTL(x)
			)
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return dO._hT(x, y)
	} //= dO.test
}
function reggy() {
	dO.rgc = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g[0] === 0) {
			if (g.p) {
				this.rXY(0, 0, '+')
			}
			else {
				this.rXY(0, 0)
			}
		}
		else {
			if (g.p) {
				this.rXY(x, y, '+')
			}
			else {
				this.rXY(x, y)
			}
		}
		return this
	}
	dO.rgc = function () {
		var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
		return (g[0] === 0) ?
				i.rXY(0, 0, (g.p ? '+' : null))
				: i.rXY(x, y, (g.p ? '+' : null))
	}
	dO.rgc = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g[0] === 0) {
			if (g.p) {
				this.rXY(0, 0, '+')
			}
			else {
				this.rXY(0, 0)
			}
		}
		else {
			if (g.p) {
				this.rXY(x, y, '+')
			}
			else {
				this.rXY(x, y)
			}
		}
		return this
	}
	dO.rgc = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g[0] === 0) {
			if (g.p) {
				this.rXY(0, 0, '+')
			}
			else {
				this.rXY(0, 0)
			}
		}
		else {
			if (g.p) {
				this.rXY(x, y, '+')
			}
			else {
				this.rXY(x, y)
			}
		}
		return this
	}
	dO.rZero = function (a) {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(0, '+')
			//this.X(a, this.regX()-a, '+')
			this.rY(0, '+')
		}
		else {
			this.rX(0)
			this.rY(0)
		}
		return this
	}
	dO.rZero = function (a) {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(0, '+')
			//this.X(a, this.regX()-a, '+')
			this.rY(0, '+')
		}
		else {
			this.rX(0)
			this.rY(0)
		}
		return this
	}
	dO.rZero = function (a) {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(0, '+')
			//this.X(a, this.regX()-a, '+')
			this.rY(0, '+')
		}
		else {
			this.rX(0)
			this.rY(0)
		}
		return this
	}
	dO.rCenter = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(x, '+')
			this.rY(y, '+')
		}
		else {
			this.rX(x)
			this.rY(y)
		}
		return this
	}
	dO.rCenter = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(x, '+')
			this.rY(y, '+')
		}
		else {
			this.rX(x)
			this.rY(y)
		}
		return this
	}
	dO.rCenter = function () {
		var g = G(arguments),
				x = this.W() / 2,
				y = this.H() / 2
		if (g.p) {
			this.rX(x, '+')
			this.rY(y, '+')
		}
		else {
			this.rX(x)
			this.rY(y)
		}
		return this
	}
	dO.rC = function () {
		var i = this, g = G(arguments), x, y, hW, hH
		x = i.W() / 2
		hW = x
		y = i.H() / 2
		hH = y
		return (g.p) ?
				i.rX(hW, '+').rY(hH, '+') :
				i.rXY(hW, hH)
	}
}

dO.dg = dO.drag = function () {
	var i = this;
	cjs.SL(i); //<-SL(this)
	return i
} // ~ scroll
