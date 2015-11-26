 
ob.X = function (x, duration) {//can add easing :)
	var g = G(arguments)
	if (U(x)) {
		return this.x
	}
	if (g.p) {
		x = this.x + x
	}
	else if (g.n) {
		$l('n')
		x = this.x - x
	}
	else if (g.m) {
		$l('m')
		x = this.x * x
	}
	else if (g.d) {
		$l('d')
		x = this.x / x
	}
	if (N(duration)) {
		tw([this], [{x: x}, duration])
	}
	else {
		this.x = x
	}
	return this
}



i.X = function (x, dur) {
	var i = this, g = G(arguments)
	if (U(x)) {
		return i.x
	}
	
	i.x = g.p ? i.x + x
			: g.n ? i.x - x
			: g.m ? i.x * x
			: g.d ? i.x / x
			: x
	return i
	//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
}