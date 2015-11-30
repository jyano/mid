_superCanvasTransform=function(el) {
	//give scale cos(rads), skew:sin(rads)  ??
	el.norm = function () {
		el.context.scale(this.W() / 10, this.H() / 10)
		return this
	}
	el.scale = el.sc = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.scale(X, Y)
	}
	el.translate = el.tr = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.translate(X, Y)
	}
	el.rotate = el.rt = function (r) {
		var g = G(arguments),
				r = g[0] || 1
		//r=pi(-6)*r
		//x.fr(0,0,1,1)
		//x({f:$r('c')
		x.x.rotate(r)
	}
	
	
	el.transform = el.tf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('t', a, c, e, b, d, f)
	}
	el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('st', a, c, e, b, d, f)
	}
	return el
}