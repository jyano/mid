dO._hT = function () {
	return this.hitTest.apply(arguments, this)
}
dO.hT = function (x, y) {
	var dO = this
	if (cjs.iDO(x)) {
		return dO.hT(
				dO.gTL(x)
		)
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	return dO._hT(x, y)
} //= dO.test
dO._hT = function () {
	return this.hitTest.apply(arguments, this)
}
dO.hT = function (x, y) {
	var dO = this
	if (cjs.iDO(x)) {
		return dO.hT(
				dO.gTL(x)
		)
	}
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	return dO._hT(x, y)
} //= dO.test
 