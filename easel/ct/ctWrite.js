ct.chalk = function () {
	var ct = this, g = G(arguments),
			h = 0
	g.e(function (t) {
		ct.T(t, 26, 'w', 475, h += 35)
	})
	return this
}
p.chalk = function () {
	var height = 50,
			that = this,
			text
	_.each(arguments, function (arg) {
		text = cjs.chalk(arg).Y(height).X(50 - that.X())
		height += 40
		that.A(text)
	})
	return text
}
p.pen = function self(arg) {
	var that = this
	if (O(self.text)) {
		self.text.remove()
	}
	self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
	that.A(self.text)
	return self.text
}
ct.chalk = function () {
	var ct = this, g = G(arguments),
			h = 0
	g.e(function (t) {
		ct.T(t, 26, 'w', 475, h += 35)
	})
	return this
}