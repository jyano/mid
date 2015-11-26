t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (f) {
	if (U(f)) {
		return this.font
	}
	this.font = N(f) ? f + 'px Arial' : f
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
 
 
