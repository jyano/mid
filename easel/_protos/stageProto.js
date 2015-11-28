st.N = p.next = function (next) {
	if (U(next)) {
		return this.nextStage
	}
	this.nextStage = next
	return this
}
 
st.eMO = function (ms) {var st = this, g = G(arguments)
	
	st.enableMouseOver(ms)
	return st
}

st.eDE = function ( ) {
	var st = this, g = G(arguments)
	st.enableDOMEvents.apply(st, arguments)
	return st
}
st.tk = function (ms) {
	var st = this, g = G(arguments)
	st.tk.apply(st, g)
	return st
}
st.du =st.tDU = function (ms) {
	var st = this,
	 g = G(arguments)
	// same as? return this.canvas.toDataURL()
	st.toDataURL.apply(st, g)
	return st
}
 

st.sTPE=function(){

	var st = this, g = G(arguments)
	
	if(g.u){return st.snapToPixelEnabled }
	st.snapToPixelEnabled = g.f? true: false
	return st
}

st.pS=st.prevSel = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.preventSelection
	}
	st.preventSelection = g.f ? true : false
	return st
}
st.mMO = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseMoveOutside
	}
	st.
			mouseMoveOutside= g.f ? true : false
	return st
}
st.mIB = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.mouseInBounds
	}
	st.mouseInBounds = g.f ? true : false
	return st
}
st.tOU= st.tkOUpd  =   function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.tickOnUpdate
	}
	st.tickOnUpdate = g.f ? true : false
	return st
}
st.aC = st.auCl = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.autoClear
	}
	st.autoClear = g.f ? true : false
	return st
}
st.hEv = function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.handleEvent
	}
	st.handleEvent= g.f  
	return st
}
st.cv =  function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.canvas
	}
	st.canvas= g.f 
	return st
}
st.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a
	return this
}
st.H = function (a) {
	if (U(a)) {
		return this.canvas.height
	}
	this.canvas.height = a
	return this
}
st.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a;
	return this
}
st.H = function (a) {
	if (U(a)) {
		return this.canvas.height
	}
	this.canvas.height = a;
	return this
}
st.WH = function (w, h) {
	var st = this;
	if (U(w)) {
		return V(st.W(), st.H())
	}
	if (N(w)) {
		st.W(w)
	}
	if (N(h)) {
		st.H(h)
	}
	;
	return st
}
st.hW = function () {
	return this.W() / 2
}
st.hH = function () {
	return this.H() / 2
}
st.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a
	return this
}
st.H = function (a) {
	if (U(a)) {
		return this.canvas.height
	}
	this.canvas.height = a
	return this
}
s.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a
	return this
}
s.H = function (a) {
	if (U(a)) {
		return this.canvas.height
	}
	this.canvas.height = a
	return this
}
st.ab = st.abs = function (x, y) {
	this.can.abs(x, y);
	return this
}
s.abs = function (x, y) {
	this.can.abs(x, y)
	return this
}
st.snap = function (f) {
	$.post('/img', {
		d: this.toDataURL()//, dats: o.x.dats
	})
	sec(f)
	return this
}

events=['drawend',
'drawstart',
'mouseenter',
'mouseleave',
'stagemousedown',
'stagemousemove',
'stagemouseup',
'tickend',
'tickstart']
st.Bm = function (i) {
	return $Bm(i).a2(this)
}
st.cc = function () {
	return this.cacheCanvas
}
function write() {
	p.dot = function (color, x, y) {
		var that = this, dot, tween
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	p.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	p.dot = function (color, x, y) {
		var that = this,
				dot,
				tween
		if (b2d.isGPoly(color)) {
			_.each(color.verts(), function (v) {
				that.dot(V(v))
			})
			return this
		}
		if (A(color)) {
			_.each(color, function (args) {
				if (A(args)) {
					that.dot.apply(that, args)
				}
				else {
					that.dot(args)
				}
			})
			return
		}
		if (!S(color)) {
			y = x;
			x = color;
			color = 'yellow'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : this.W() / 2
		y = N(y) ? y : this.H() / 2
		dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
		tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
		dot.$$(function () {
			tween.toggle()
		})
		dot.N('dot')
		return this
	}
	p.squareDot = function (color, x, y) {
		var squareDot, tween
		if (!S(color)) {
			y = x;
			x = color;
			color = 'orange'
		}
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		x = N(x) ? x : 300
		y = N(y) ? y : 300
		__squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
		this.A(squareDot.XY(x, y)//.drag()
		)
		//tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
		// dot.$$(function(){tween.toggle()})
		return this
	}
	p.chalk = function () {
		var height = 50,
				that = this,
				text
		_.each(arguments, function (arg) {
			text = cjs.chalk(arg).Y(height).X(50 - that.X())
			height += 40
			that.A(text)
		})
		return text
	}
	p.pen = function self(arg) {
		var that = this
		if (O(self.text)) {
			self.text.remove()
		}
		self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
		that.A(self.text)
		return self.text
	}
	p.chalk = function () {
		var height = 50,
				that = this,
				text
		_.each(arguments, function (arg) {
			text = cjs.chalk(arg).Y(height).X(50 - that.X())
			height += 40
			that.A(text)
		})
		return text
	}
	p.pen = function self(arg) {
		var that = this
		if (O(self.text)) {
			self.text.remove()
		}
		self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
		that.A(self.text)
		return self.text
	}
}
function mouse() {
	st.mX = function () {
		return this.mouseX
	}
	st.mY = function () {
		return this.mouseY
	}
	st.m = function () {
		return $Pt(this.mX(), this.mY())
	}
	st.MD = function (fn) {
		return this.on('stagemousedown', fn)
	}
	st.MM = function (fn) {
		return this.on('stagemousemove', fn)
	}
	st.MU = function (fn) {
		return this.on('stagemouseup', fn)
	}
	st.mO = function () {
		var g = G(arguments), st = this
		if (U(g[0]) || g[0]) {
			st.enableMouseOver(N(g[0]) ? g[0] : true)
		}
		else {
			st.enableMouseOver(false)
		}
		return st
	}
	st.m = function (ob) {
		//uses Point
		var st = this
		if (U(ob)) {
			return cjs.P(st.mouseX, st.mouseY)
		}
		if (O(ob)) {
			if (ob.d) {
				st.MD(ob.d)
			}
			;
			if (ob.u) {
				st.MU(ob.u)
			}
			;
			if (ob.m) {
				st.MM(ob.m)
			}
		}
		return st
	}
	st.mx = st.mX = function () {
		return this.m().x
	}
	st.my = st.mY = function () {
		return this.m().y
	}
	st.trDr = function () {
		var st = this
		st._md = 0
		st.MD(function () {
			st._md = 1
		})
		st.MU(function () {
			st._md = 0
		})
		return this
	}
}