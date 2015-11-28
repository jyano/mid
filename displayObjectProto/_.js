dO._ = function (fn) {
	var dO = this
	Q(function () {fn(dO)})
	return dO
}
	