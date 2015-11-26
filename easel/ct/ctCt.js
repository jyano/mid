 
ct.ct = function (x, y) {
	var ct = this, g = G(arguments),o
	o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
	
	var ct1 = $Ct().a2(ct)
	
	if (o.fn) {
		o.fn(ct1, ct)
	}
	
	else if (N(o.x)) {
		ct1.XY(o.x, o.y)
	}
	
	
	if (g.p) {cjs.bindSlide(ct1)}
	return ct1
}
ct.Ct = function () {var ct=this
	ct.ct.apply(ct, arguments)
	return ct
}

