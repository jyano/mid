//if you want to understand oriented boxes, understand this:
G.rectangle = G.boxBox = function (g) {
	var o = g.O ? g.f : O(g.t) ?
	{w: g.f, h: g.s, x: V(g.t).x, y: V(g.t).y, rt: g.fo} :
			N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
			{w: g.f, h: g.s, rt: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.rt = N(o.rt, 0)
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
pH = b2d.PolygonShape.prototype
pH._box = function () {
	var pH = this
	pH.SetAsOrientedBox.apply(this, arguments)
	return pH
}
pH.box = function () { // tx uses!
	var pH = this, g = G(arguments),
			o = G.boxBox(g)
	return pH._box(
			o.w / 60,
			o.h / 60,
			V(o.x, o.y, '-'),
			M.tR(o.rt)
	)
}
$pH = b2d.pH = function (W, H, x, y, a) {
	
	
	
	
	//makes a fixtDef with a polyShape
	//| 50,200[[,200,60,45
	//| [20,300],.. //-> g.a(p,'arr')// -> g.a(p.arr)
	var g = G(arguments)
	var pH = new b2d.PolygonShape()
	if (g.N_) {
		pH.box(g.f, g.s, g.t, g.fo, g.fi)
	}
	else if (g.OO_) {
		$a(pH, 'arr', g)
	}
	return pH
}
$rec = $pFD = $pF = function (wd, ht, x, y, rt) {
	var rec = $pH(wd, ht, x, y, rt)
	var fD = $fD(rec)
	return fD
}
fD.asBox = function (a, b) {
	this.shape.SetAsBox(a / 30, b / 30)
	return this
}
fD._sAOB = function (a, b, p, aa) {
	this.shape.SetAsOrientedBox(a, b, p, aa)
	return this
}
fD.asOrBox = function (a, b, p, aa) {
	return this._sAOB(a / 30, b / 30, p, aa)
}
fD.box = fD.sAB = function (a, b, p, A) {
	if (!p) {
		this.shape.SetAsBox(a / 30, b / 30)
	}
	else {
		this.shape.SetAsOrientedBox(a / 30, b / 30, p, A)
	}
	return this
}
pH.vs = pH.vertsx = function () {
	alert('pH.vs. see boxShapes.js')
	var pH = this
	return _.m(pH.m_vertices, function (v) {
		return [v.x * 30, v.y * 30]
	})
}
pH.arr = function (v) {
	var p = this
	v = _.m(v, function (v) {
		return V(v).d()
	})
	p.SetAsArray(v, v.length)
	return p
}
pH.setAsVec = function (v, sc) {
	var pH = this //used by SepLib
	pH.SetAsVector(_.m(v, function (v) {
		return V(v).d(N(sc, 30))
	}))
	return pH
}
b2d.pol = function () {
	return b2d.fD($a(b2d.pH, arguments))
			.d(1).fr(.2).r(.2)
}
b2d.rec = function () {
	var g = G(arguments), r, fD, o, v, p = b2d.pH()
	if (g.OO_) {
		p.arr(g)
	}  //b2d.cant make multiple recs at once anyway.. so this must mean VERTS!
	else {
		o = g.O ? g.f :
		{w: g.f, h: g.s, x: g.t, y: g[3], a: g[4], d: g[5]}
		p.box(o)
	}
	fD = b2d.fD(p).d(N(o.d, .5))
	if (g.n) {
		fD.isSensor = true
	}
	return fD
	/*
	 //will set cols unless you pass in 0
	 if(o.c==0){o.c=null}
	 if(o.c==00){o.c=null;o.C=null}
	 if(o.c=='*'){o.c=$r()}
	 if(o.c=='**'){o.c=$r();o.C=$r()}
	 o.c =o.c||'z'
	 o.C =o.C||'w'
	 o.l = _.tN(o.l,4)
	 o.c1 = o.c1||'z'
	 o.c2 = o.c2||'w'
	 o.s1= _.tN(o.s1)
	 o.s2= _.tN(o.s2,1)
	 //
	 o.x1 = _.tN(o.x1)
	 o.y1 = _.tN(o.y1)
	 o.x2 =_.tN(o.x2);
	 o.y2 = N(o.y2)?o.y2:N(o.r)? o.r*2:100
	 o.r1=_.tN(o.r1)
	 o.r2=_.tN(o.r2,200)
	 // o.i image
	 //o.k kind
	 // o.p  layer position
	
	
	 //o.bm//o.bM
	 //o.g gradient
	
	 //o.m mass
	 //o.t type
	 // o.v = o.v || [] //verts
	 //o.X
	 //o.z clr
	 */
}
$bi = $XYR = function () {
	var b = w.sB(545, 595)
	return b.A(b2d.cFD(150).DBF())
}
