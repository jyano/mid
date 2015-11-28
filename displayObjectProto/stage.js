dO.pa = dO.P = function () {return this.parent}
dO.sib = function () {return this.P().ch()}


dO.belowStg = function () {
	return this.y > this.getStage().H()
}

dO.toFront = function () {
	numChildren = this.parent.children.length
	this.parent.setChildIndex(this, numChildren - 1)
	return this
}

//tricky short method name?:
dO.St = dO.S = dO.st =	dO.stg = function () {
		return this.getStage()
	}

 