ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
	return this.stage
}
ct.N = function (n) {
	var s = this;
	if (U(n)) {
		return s.nextStage
	}
	s.nextStage = n;
	return s
}
ct.cX = function () {
	return this.St().cen().x
}
ct.cY = function () {
	return this.St().cen().y
}
ct.noAutoClear = function () {
	this.autoClear = false
	return this
}
ct.eMO = function (en) {
	this.enableMouseOver(en ? true : false);
	return this
}
ct.au = function (au) {
	this.autoClear = au ? true : false;
	return this
}
ct.noAuCl = function () {
	this.autoClear = false;
	return this
}