ob.W = function (a) {
	if (U(a)) {
		return this.getBounds().width * this.scaleX
	}
	this.sX(this.scaleX * a / this.W())
	return this
}
ob.H = function (a) {
	if (U(a)) {
		return this.getBounds().height * this.scaleY
	}
	this.sY(this.scaleY * a / this.H())
	return this
}
ob.WH = function (w, h) {
	return this.W(w).H(h || w)
}
ob.W = function (a) {
	if (U(a)) {
		return this.getBounds().width * this.scaleX
	}
	this.sX(this.scaleX * a / this.W())
	return this
}
ob.H = function (a) {
	if (U(a)) {
		return this.getBounds().height * this.scaleY
	}
	this.sY(this.scaleY * a / this.H())
	return this
}
ob.WH = function (w, h) {
	return this.W(w).H(h || w)
}
ob.W = function (a) {
	if (U(a)) {
		return this.getBounds().width * this.scaleX
	}
	this.sX(this.scaleX * a / this.W())
	return this
}
ob.H = function (a) {
	if (U(a)) {
		return this.getBounds().height * this.scaleY
	}
	this.sY(this.scaleY * a / this.H())
	return this
}
ob.WH = function (w, h) {
	return this.W(w).H(h || w)
}