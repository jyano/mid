gx = cjs.Graphics.prototype

  
gx.cCL = gx.fC = gx.fs = function (f, s, w) {var gx=this
	gx.f(O(f) ? f : oO('c', f || 'z'))
	gx.s(O(s) ? s : oO('c', s))
	gx.ss(N(w,2))
	
	return gx
} 

  
gx.sC = function (s, w) {
	var gx = this
	w = N(w) ? w : 2
	s = O(s) ? s : oO('c', s || null)
	gx.s(s)
	gx.ss(w)
	return gx
}

  gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}

  gx._bs = function (i, tf) {

	return this.bs(i, null, tf)
}

gx.pol =gx.poly = function (pts, f, s, w) {var gx = this,g=G(arguments)
	//  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()

	if (N(pts[0])) {
		_.e(g, function (pt) {gx.lt(pt[0], pt[1])})
		 
	}

	else {
		gx.fs(f, s, w)
		_.e(pts, function (pt) {gx.lt(pt[0], pt[1])});
		
	}
	
	
	return gx.cp()

}

//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
gx._lt = function (x, y) {
	var gx = this, g = G(arguments), o
	o = {x: g.f, y: g.s}
	gx.lt(o.x, o.y)
	return gx
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
 
GX1=function(){st=_$St()

}