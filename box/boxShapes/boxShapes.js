 





//
b2d.Shape = b2d.Shapes.b2Shape
//
bH = b2d.Shape.prototype
bH.vs = function () {
	return this.m_vertices
}
/////////////////////
b2d.tA = function (vs) {
	return _.m(vs, function (v) {
		return v.tA(v)
	})
}

$cH = b2d.cH = function (r, x, y) {
	var g = G(arguments)
	var r = N(g.f, 50)
	var cH = new b2d.CircleShape(r / 30)
	if (g.s) {
		cH.lP(g.s, g.t)
	}
	return cH
}
$ba = $xyr = $xyR = function () {
	var b = w.dB(545, 195)
	b.A(
			fD = b2d.cFD(50).DBF()
	)
	return b
}
cH = b2d.CircleShape.prototype
cH._sLP = function () {
	this.SetLocalPosition.apply(this, arguments)
	return this
}
cH.lP = cH.sLP = function (x, y) {
	var v = V(x, y),
			cH = this,
			pos = V(v.x, v.y).d()
	return this._sLP(pos)
}
fD.H = function (h) {
	if (U(h)) {
		return this.shape
	}
	this.shape = h
	return this
}
fD.vrt = fD.verts = function () {
	var h = this.H()
	var verts = h.vs()
	return [vs[0].m(), vs[1].m(), vs[2].m(), vs[3].m()]
}
b2d.m = function (vs) {
	return _.m(vs, b2d.mult)
}

$fD = b2d.fD = b2d.f = function () {
	var g = G(arguments)
	var fD = new b2d.FixtureDef
	if (g.n) {
		fD.isSensor = true
	}
	if (O(g.f)) {
		fD.shape = g.f
		if (g.s) {//only cir?
			fD.shape.lP(g.s, g.t)
		}
	}
	return fD
}
G.boxCir = function (g) {
	return $df.cF(g.O ? g.f : {x: g.f, y: g.s, r: g.t, d: g.fo})
}
$cir = $cF = $cFD = b2d._cir = b2d.cFD = function () {
	var g = G(arguments)//r,x,y
	var cH = b2d.cH(g.f)
	var fD = $fD(cH, g.s, g.t)
	return fD
}
b2d.cir = function () {
	var g = G(arguments)
	var o = G.boxCir(g)
	var cH = $cH(o.r, o.x, o.y)
	var fD = $fD(cH, g.o)
	fD.den(o.d)
	return fD
}


f.rad = function () {
	return this.H().m_radius * 30
}
b._r = function (n) {
	n = N(n, 100)
	h = this.f().H()
	if (h.SetRadius) h.SetRadius(n / 30)
}
f.iC = function () {
	return this.H() && this.H().m_type == 0
}
f.getShape = f.H = function (h) {
//should let user specify dimensions of shape, 
// not just have to pass formed shape in
	if (U(h)) {
		return this.GetShape()
	}
	this.m_shape = h
	// it DOES WORK! 
	return this
	// but is this much different than 
	// just replacing the fixt?
}
f.pos = function () {// for circs
	return V(this.H().m_p.x * 30, this.H().m_p.y * 30)
}
f.pX = function () {
	return this.pos().x
}
f.pY = function () {
	return this.pos().y
}
f.hT = f.hType = function () {
	return this.H().m_type
}
f.cen = f.mid = f.cent = f.center = function () {
	//center point of its BOUNDING BOX
	var f = this, b = f.B(), w = b.W(), g = G(arguments),
			bd = f.GetAABB(),
			v = M.lC(bd.lowerBound, bd.upperBound).mult()
	if (g.p) {
		w.dot(v)
	}
	return v
}
b.rad = function () {
	return this.f().rad()
}
b.mass = function (m) {
	if (U(m)) {
		return ( this.GetMass() * 900 ) / 100
	}
}
b.type = p.T = p.ty = p.t = function (a) {
	var b = this
	if (U(a)) {
		return b.GetType()
	}
	b.SetType(a)
	return b
}
 

