x.cjsTick = x.tick = function (func) {
	var x = this
	cjs.tick(function () {
		x.temp(func)
	})
	return this
}
tempDrawOnTickerTick = x.t = function (fn) {
	var x = this;
	T.t(function () {
		x.temp(fn)
	});
	return this
}