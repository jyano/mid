x.Cd = function (i, x, y) {
	var ctx = this
	x = N(x, 100)
	y = N(y, 100)
	i = Q.i(i || 'me')
	ctx.d(i, x - i.W() / 2, y - i.H() / 2)
	return ctx
}
x.scImCen = function (i, s, x, y) {
	if (S(i) && i.length < 100) {
		i = Q.i(i)
	}
	x = N(x, 0)
	y = N(y, 0)
	var w = this.W(),
			h = this.H(),
			s = s || 1
	this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
}
x.scaleImCenSpiralMe = function () {
	var scaleNum = 1,
			that = this
	_.t(100, function () {
		that.scaleImCen('me', scaleNum)
		scaleNum *= .9
	})
}
x.scaleImCenSpiral = function () {
	var scaleNum = 1, that = this
	_.t(100, function () {
		that.scaleImCen('me', scaleNum)
		scaleNum *= .9
	})
}