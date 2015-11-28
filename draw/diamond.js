cjs.diamond = function (w, h, fc, sc) {var h = $H(), gx = h.graphics;

	fc = fc || 'green';
	 sc = sc || 'white';
	w = w || 100; h = h || w
	var hW = w / 2
	var hH = h / 2
	
	//var h = new cjs.Shape()
	
	h.graphics.f(fc).s(sc)
			.mt(0, -hW)
			.lt(-hW, 0).lt(0, hW)
			.lt(hW, 0).lt(0, -hW)
	//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
}
 