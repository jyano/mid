pD.hasAtLeastOnePoly = function () {
	return this.m_List.get(0)
}
 
function hole() {
	ps.iHo = ps.iH = function () {
		return this.isHole()
	} //can't be!!! useless
	pD.iHo = pD.iH = function () {
		return this.isHole()
	}
	pD.hH = pD.hasHole = function () {
		var pD = this, h
		pD.ps(function (p) {
			if (p.isHole()) {
				h = true
			}
		})
		return h
	}
}
hole()
 useless = ps.getPoly = ps.gIP = ps.g = function (n) {
		return this.getInnerPoly(n || 0)
		//GETS ITSELF? //useless?
	}
//more
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
pD._dif = function (pol) {
	return this.difference(pol)
}
pD.dif = function (pol) {
	return this._dif($pD(pol))
}