cjs.diamond = function (width, height, fc, sc) {
	fc = fc || 'green'
	sc = sc || 'white'
	width = width || 100
	height = height || width
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -halfheight)
			.lt(-halfwidth, 0).lt(0, halfheight)
			.lt(halfwidth, 0).lt(0, -halfheight)
	return h
}
cjs.diamond = function self(w, h, fc, sc) {
	var h = $H(),
			gx = h.graphics
	sc = sc || 'white'
	w = w || 100
	h = h || w
	hW = w / 2
	hH = h / 2
	gx.f(fc || 'green').s(sc || 'white')
	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
}
cjs.diamond = function self(w, h, fc, sc) {
	var h = $H(),
			gx = h.graphics
	sc = sc || 'white'
	w = w || 100
	h = h || w
	hW = w / 2
	hH = h / 2
	gx.f(fc || 'green').s(sc || 'white')
	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
}