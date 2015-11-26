  
ob.rot = function (rotation) {
	var args = G(arguments);
	rotation = args[0]
	if (args.p) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation + rotation)
	}
	if (args.n) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation - rotation)
	}
	if (U(rotation)) {
		return this.rotation
	}
	this.rotation = rotation
	return this
}
ob.rt = ob.rot = function (rotation) {
	var args = G(arguments);
	rotation = args[0]
	if (args.p) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation + rotation)
	}
	if (args.n) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation - rotation)
	}
	if (U(rotation)) {
		return this.rotation
	}
	this.rotation = rotation
	return this
}
ob.cX = ob.centerX = function (a) {
	if (U(a)) {
		return this.x + this.W() / 2
	}
	return this.X(a - this.W() / 2)
}
ob.cY = ob.centerY = function (a) {
	if (U(a)) {
		return this.y + this.H() / 2
	}
	return this.Y(a - this.H() / 2)
}
ob.cX = ob.centerX = function (a) {
	if (U(a)) {
		return this.x + this.W() / 2
	}
	return this.X(a - this.W() / 2)
}
ob.cY = ob.centerY = function (a) {
	if (U(a)) {
		return this.y + this.H() / 2
	}
	return this.Y(a - this.H() / 2)
}
ob.cX = ob.centerX = function (a) {
	if (U(a)) {
		return this.x + this.W() / 2
	}
	return this.X(a - this.W() / 2)
}
ob.cY = ob.centerY = function (a) {
	if (U(a)) {
		return this.y + this.H() / 2
	}
	return this.Y(a - this.H() / 2)
}
i.toFront = function () {
	return this.ix(this.sib().length - 1)
}
ob.toFront = function () {
	numChildren = this.parent.children.length
	this.parent.setChildIndex(this, numChildren - 1)
	return this
} 