h.ef = function () {
	var h = this, gx = h.graphics
	gx.f()
	return h
}
 

h.ef = function () {
	this.graphics.endFill.apply(
			this.graphics, arguments)
	return this
}
 
 
 
h.es = function () {
	var h = this, gx = h.graphics
	gx.es()
	return h
}

h.cp = function () {
	this.graphics.cp();
	return this
}
 