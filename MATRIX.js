$Rec = function (a, b, c, d) {
	return new cjs.Rectangle(a, b, c, d)
}
mx = cjs.Matrix2D.prototype
mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
	x = N(x, 0)
	y = N(y, 0)
	scaleX = N(scaleX, 1)
	scaleY = N(scaleY, 1)
	rotation = N(rotation, 0)
	return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
}
$Mx = cjs.m2d = function () {
	var _MxOb = function (mx) {
		return new cjs.Matrix(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
	}
	var g = G(arguments), o;
	if (A(g.f)) {
		return $Mx.apply(null, g.f)
	}
	o = g.O ? g.f :
			U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
			{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
	var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		o.a = N1(o.a)
		o.b = N0(o.b)
		o.c = N0(o.c)
		o.d = N1(o.d)
		o.tx = N0(o.tx)
		o.ty = N0(o.ty)
		return o
	}
	return _MxOb($mxDf(o))
}
$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
}
h._bfTf = h._bfT = function (img) {
	var g = G(arguments)
	var props = A(g.s) ? g.s : g.r
	return this._bf(img, $Tf(props)) //gant!
}
h._bfTfArrs= h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		var fn = _.tFn(o.fn)
		fn(h._bf(g.f, $Tf(_.tA(o.tf))))
	})
	return h
}
dO.tf = dO.transform = function () {
	var dO = this, g = G(arguments)
	dO.setTF = dO.sTf = function () {
		var dO = this, g = G(arguments)
		dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
		return dO
	}
	dO.getTf = dO.gTf = dO.getTransform = function () {
		var dO = this
		return [
			dO.x, dO.y, dO.scaleX, dO.scaleY,
			dO.rotation, dO.skewX, dO.skewY,
			dO.regX, dO.regY
		]
	}
	
	return g.f ?
			dO.sTf.apply(dO, g.A_ ? g.f : g) :
			dO.gTf()
}
dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
	var dO = this, g = G(arguments)
	dO.nominalBounds = $Rec(a, b, c, d)
	return dO
}
dO.setBds= dO.sBd = dO.gTB = function () {var dO=this, g=G(arguments)
	
	if(g.u){return dO.getTransformedBounds() }
	dO.setBounds.apply(dO, g)
	return dO
}
dO.catProps= dO.gCDP = function () {
	var dO = this
	return dO.getConcatenatedDisplayProps()
}
dO.mx = dO.gM = function () {
	return this.getMatrix()
}
dO.mxMx=dO.cMx= dO.ccMx=dO.gCM = function () {
	var dO = this
	return dO.getConcatenatedMatrix()
}

/*
 getConcatenatedDisplayProps ( [props] ) DisplayProps
 Inherited from DisplayObject: getConcatenatedDisplayProps:999
 Generates a DisplayProps object representing the combined 
 display properties of the object
  and all of its parent Containers up to the highest level ancestor 
  (usually the Stage).
 Parameters:

 [props] DisplayProps optional
 A DisplayProps object to populate with the calculated values. 
 If null, a new DisplayProps object is returned.
 Returns:

 DisplayProps: The combined display properties.
 */
 
 