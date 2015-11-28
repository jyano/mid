gx.fillStroke = gx.fs = function (f, s, w) {var gx=this
	gx.f(O(f) ? f : oO('c', f || 'z'))
	gx.s(O(s) ? s : oO('c', s))
	gx.ss(N(w,2))
	
	return gx
} 

gx.fillStrokeSS =gx.cCL = gx.fC = gx.fs = function (c, C, l) {
	var gx = this
	gx.f(oO('c', c || 'z'))
	gx.s(oO('c', C || null))
	gx.ss(N(l) ? l : 2)
	return gx
}

gx.strokeColor = gx.sC = function (s, w) {
	var gx = this
	w = N(w) ? w : 2
	s = O(s) ? s : oO('c', s || null)
	gx.s(s)
	gx.ss(w)
	return gx
}

gx._bitmapFill= gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}

gx._bitmapStroke = gx._bs = function (i, tf) {

	return this.bs(i, null, tf)
}
gx.poly = function (pts, f, s, w) {var gx = this,g=G(arguments)
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