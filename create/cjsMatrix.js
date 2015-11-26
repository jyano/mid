cjs.M = cjs.Mx = cjs.Matrix2D
$Mx = cjs.m2d = function () {
	var g = G(arguments), o
	if (A(g.f)) {
		return $Mx.apply(null, g.f)
	}
	o = g.O ? g.f :
			U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
			{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
	dfMx(o)
	return new cjs.Mx(o.a, o.b, o.c, o.d, o.tx, o.ty)
	function dfMx(o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		o.a = N1(o.a)
		o.b = N0(o.b)
		o.c = N0(o.c)
		o.d = N1(o.d)
		o.tx = N0(o.tx)
		o.ty = N0(o.ty)
		return o
	}
}
$tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	return $Mx().appendTransform(
			N0(x), N0(y), N1(sx), N1(sy), rt, kx, ky, rx, ry)
}