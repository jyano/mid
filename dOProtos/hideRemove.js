dO.rm = dO.remove = function () {
	var dO = this
	if (O(dO) && O(dO.parent)) {
		dO.parent.removeChild(dO)
	}
	return dO
}
dO.hd = dO.hide = function () {
	return this.vsb(0)
}
dO.rm = dO.remove = function () {
	var dO = this
	if (O(dO) && O(dO.parent)) {
		dO.parent.removeChild(dO)
	}
	return dO
}
dO.hd = dO.hide = function () {
	return this.vsb(0)
}
dO.vis = dO.vsb = function (vsb) {
	var dO = this
	if (U(vsb)) {
		return dO.visible
	}
	dO.visible = vsb ? true : false
	return dO
}
dO.al = dO.opacity = function (al) {
	var dO = this
	if (U(al)) {
		return dO.alpha
	}
	dO.alpha = al;
	return dO
}
dO.vis = dO.vsb = function (vsb) {
	var dO = this
	if (U(vsb)) {
		return dO.visible
	}
	dO.visible = vsb ? true : false
	return dO
}
dO.al = dO.opacity = function (al) {
	var dO = this
	if (U(al)) {
		return dO.alpha
	}
	dO.alpha = al;
	return dO
}
 
