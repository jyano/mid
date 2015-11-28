x.cr = function (x1, y1, x2, y2) {
	var ctx = this
	var cv = ctx.cv()
	var i = this.u()
	if (A(x1)) {
		return ctx.crop(
				x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
		)
	}
	ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
	return cv
}
