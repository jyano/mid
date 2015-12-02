pD.ifHasPol = function () {
	var pD = this
	if (pD.hasAtLeastOnePoly()) {
		return pD
	}
}
pD.bigEnough = function () {
	return this.getArea() > 2000
}
pD.tooSmall = function () {
	return !this.bigEnough()
}