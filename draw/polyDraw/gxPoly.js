gx._pol = function () {
	var gx = this, g = G(arguments)
	if (g.A) {
		return gx._pol.apply(gx, g.f)
	}
	gx.mt(g.f[0], g.f[1])
	_.e(_.r(g), function (pt) {
		gx.lt(pt[0], pt[1])
	})
	gx.lt(g.f[0], g.f[1])
	return gx
}
gx.pol = function (pts, f, s, w) {
	var gx = this, g = G(arguments)
	//  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
	if (N(pts[0])) {
		_.e(g, function (pt) {
			gx.lt(pt[0], pt[1])
		})
	}
	else {
		gx.fs(f, s, w)
		_.e(pts, function (pt) {
			gx.lt(pt[0], pt[1])
		});
	}
	return gx.cp()
}
gx.fancyLt = gx.poly = function (vs, f, s, w) {
	var gx = this, g = G(arguments), o
	o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
	if (o.cCL) {
		gx.cCL.apply(gx, o.cCL)
	}
	_.e(o.vs, function (v) {
		gx.lt(v[0], v[1])
	})
	gx.cp()
	return this
}
 