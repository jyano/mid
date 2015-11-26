b = cjs.SpriteSheetBuilder.prototype
b.Z = function (sc) {
	if (U(sc)) {
		return this.scale
	}
	this.scale = sc;
	return this
}
b.maxW = function (sc) {
	if (U(sc)) {
		return this.maxWidth
	}
	this.maxWidth = sc;
	return this
}
b.A = function (mc) {
	this.addMovieClip(mc)
	return this
}
b.complete = function (func) {
	this.on("complete", func)
	return this
}
b.async = function (funcNum, num) {
	if (F(funcNum)) {
		this.complete(funcNum)
		this.buildAsync(num)
	}
	else {
		this.buildAsync(funcNum)
	}
	return this
}
//
b = cjs.SpriteSheetBuilder.prototype
b.Z = function (sc) {
	if (U(sc)) {
		return this.scale
	}
	this.scale = sc;
	return this
}
b.maxW = function (sc) {
	if (U(sc)) {
		return this.maxWidth
	}
	this.maxWidth = sc;
	return this
}
b.A = function (mc) {
	this.addMovieClip(mc)
	return this
}
b.complete = function (func) {
	this.on("complete", func)
	return this
}
b.async = function (funcNum, num) {
	if (F(funcNum)) {
		this.complete(funcNum)
		this.buildAsync(num)
	}
	else {
		this.buildAsync(funcNum)
	}
	return this
}
