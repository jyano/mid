function tfPropMets(){
dO.scX= dO.sX = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleX
	}
	dO.scaleX = n
	return dO
}


dO.scY= dO.sY = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleY
	}
	dO.scaleY = n
	return dO
}
dO.scXY= dO.sXY = function (x, y) {
	var dO = this,
			g = G(arguments), v
	if (U(g[0])) {
		return dO
		return {x: dO.sX(), y: dO.sY()}
	}
	v = V(g[0], g[1])
	x = _.tN(v.x)
	y = _.tN(v.y, v.x)
	dO.sX(x)
	dO.sY(y)
	return dO
}

dO.rgX= dO.rX = function () {
	var dO = this, g = G(arguments), rX = g[0]
	if (U(rX)) {
		return dO.regX
	}
	dO.regX = g.p ?
	dO.regX + rX : rX
	return dO
}
dO.rgY= dO.rY = function () {
	var dO = this, g = G(arguments), rY = g[0]
	if (g.p) {
		dO.Y(dO.y + (rY - dO.regY))
	}
	if (U(rY)) {
		return dO.regY
	}
	dO.regY = rY
	return dO
}
dO.rgXY=dO.rXY = function () {
	var dO = this, g = G(arguments),
			x = _.tN(g[0]),
			y = _.tN(g[1], x)
	return dO.rX(x).rY(y)
}

dO.skX=dO.kX = function (skewX) {
	if (U(skewX)) {
		return this.skewX
	}
	this.skewX = skewX;
	return this
}
dO.skY=dO.kY = function (skewY) {
	if (U(skewY)) {
		return this.skewY
	}
	this.skewY = skewY;
	return this
}
dO.skXY=dO.kXY = function (x, y) {
	y = N(y) ? y : x
	return this.kX(x).kY(y)
}
dO.rt = function () {
	var dO = this, g = G(arguments), a = g[0]
	if (g.p) {
		return dO.rt(dO.rotation + _.tN(a, 1))
	}
	if (g.n) {
		return dO.rt(dO.rotation - _.tN(a, 1))
	}
	if (U(a)) {
		return dO.rotation
	}
	dO.rotation = a
	return dO
}
	dO.W = function (a) {
		var i = this
		if (U(a)) {
			var bds = i.getBounds()
			if (bds) {
				return bds.width * i.scaleX
			}
			return
		}
		i.sX(i.scaleX * a / i.W())
		return i
	}
	dO.H = function (a) {
		var i = this
		if (U(a)) {
			if (this.getBounds()) {
				return this.getBounds().height * this.scaleY
			}
			return
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.WH = function (w, h) {
		var i = this
		return this.W(w).H(h || w)
	}
}
function localGlobal(){
dO.gTL = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	return this.globalToLocal(x, y)
}
dO.lTG = function(){return this.localToGlobal.apply(this, arguments)}
dO.lTL = function () {
	return this.localToLocal.apply(this, arguments)
}
}
dO.vis = dO.vsb = function (vsb) {
	var dO = this
	if (U(vsb)) {
		return dO.visible
	}
	dO.visible = vsb ? true : false
	return dO
}
dO.al =  dO.opacity=function (al) {var dO = this
		if (U(al)) {return dO.alpha}
		dO.alpha = al;
		return dO
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

function getMatrix(){
dO.gM = function () {
	return this.getMatrix()
}
dO.gCDP = function(){var dO=this

	return dO.getConcatenatedDisplayProps()
}

dO.gCM = function () {
	var dO = this
	
	return dO.getConcatenatedMatrix()
	
	
}
}
function bounds(){
dO.gTB = function () {
	var dO = this
	
	return dO.getTransformedBounds()
	
}
dO.sBd = function () {
	this.setBounds.apply(this, arguments)
	return this
}
}
function center(){
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

function hitTest(){
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
dO.s2p = bO.snap2px = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.snapToPixel
	}
	dO.snapToPixel = g.f ? true : false
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
function mouse(){
	dO.$ = dO.click = function (fn) {
		return this.on('click', fn)
	}
	dO.$$ = dO.dblclick = function (fn) {
		return this.on('dblclick', fn)
	}
}