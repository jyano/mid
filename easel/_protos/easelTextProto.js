t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}

t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
	return this.lW(w).lH(N(h, w))
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.ol = _.gS(t, 'outline')
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
	return this
}
t.mW = t.measW = t.measuredW = function () {
	return this.getMeasuredWidth()
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
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.tA = function (a) {
	$l('tA')
	if (U(a)) {
	}
	this.textAlign = (a)
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.bl = function (bl) {
	var g = G(arguments)
	if (g.p) {
		bl = 'bottom'
	}
	if (g.n) {
		bl = 'top'
	}
	if (bl === '') {
		bl = 'middle'
	}
	if (U(bl)) {
		return this.textBaseline
	}
	this.textBaseline = bl
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
