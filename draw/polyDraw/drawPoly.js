h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
	var h = this,
			numVerts = poly.length
	_.each(poly, function (v) {
		v.X = v.x;
		v.Y = v.y
	})
	
	if (sc) {
		this.s(sc)
	}
	if (numVerts >= 3) {
		//move to the FIRST
		h.mt(poly[0])
		//lineTo the REST
		T(numVerts, function (i) {
			h.lt(poly[i % numVerts])
		}) //just a clever way to start from 1
	}
	return this
}
h.drawPolygons = function (paths, C, c) {
	var h = this
	h.C(C);
	if (c) {
		h.c(c)
	}
	_.e(paths, function (p) {
		h.drawPolygon(p)
	})
	return h
}
h.drawPolygons = function (paths, fc, sc) {
	var h = this
	h.f(fc).s(sc)
	_.each(paths, function (path) {
		h.drawPolygon(path)
	})
	return h
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
//alpha:
h.$vs = function (polVs, ox, oy) {
	if (gpc.iP(polVs)) {
		polVs = polVs.vs()
	}
	return this.vs(polVs, ox, oy)
}
h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
	var h = this, gx = h.graphics,
			g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
	o = N(g[3]) ? {
		x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
	} :
			N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
					O(g.f) ? g.f : {}
	o.a = N(o.a, 0);
	o.x = N(o.x, 0);
	o.y = N(o.y, 0)
	o.p = _.cap(o.p, 0, .99)
	gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
	return h
}

h.poly = function (vxs, f, s, wd) {
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) //verts passed in directly
		{
			_.each(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	h.poly = function (verts, f, s, width) {
		var that = this, gx = this.graphics
		if (N(verts[0])) { //verts passed in directly
			_.e(arguments,
					function (vert) {
						gx.lt(vert[0], vert[1])
					});
			gx.cp()
		}
		else {
			this.graphics.fs(f, s, width)
			{
				_.e(verts, function (vert) {
					gx.lt(vert[0], vert[1])
				});
				gx.cp()
			}
		}
		return this
	}
	var h = this, g = arguments
	h.fs(f, s, wd)
	if (A(vxs) && N(vxs[0])) {
		_.e(g, function (v) {
			h.lt(v[0], v[1])
		})
	}
	else {
		_.e(vxs, function (v) {
			h.lt(v)
		})
	}
	return h.cp()
}
h.pol = function () {
	var h = this, g = G(arguments), o;
	//O$ >>  O(o) && !F(o) && !A(o)
	o = O$(g.f) ? g.f :
			N(g.s) && N(g.t) ?
			{v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
			{v: g.f, c: g.s, C: g.t, l: g.fo}
	o.v = M.os(o.v, o.x, o.y)
	o = oDef(o || {})
	h.ef().es().c(o)
	if (o.bf) {
		var bf = S(o.bf) ? o.bf : 'me'
		h.bf(bf, function draw() {
			h.mt(o.v).cp()
		})
	}
	else {
		h.lt(o.v)
		h.cp()
	}
	return h
}
 
 