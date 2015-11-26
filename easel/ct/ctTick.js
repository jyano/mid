ct.t = ct.tick = function () {
	cjs.Ticker.addEventListener('tick', this)
	return this
}
 

ct.t = ct.oT = ct.tick = function (fn) {
	var g = G(arguments)
	if (F(fn)) {
		if (!g.n) {
			fn()
		}
		return this.on('tick', fn)
	}
	else {
		T.on('tick', this);
		return this
	}
}
ct.xT = function (fn) {
	this.off('tick', fn)
	return this
} 