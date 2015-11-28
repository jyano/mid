ct.backgroundImage = function (image) {
	var that = this
	this.bm(image, function (b) {
				that.setChildIndex(b, 0)
			}
	)
	return this
}
ct.backgroundColor = function (c) {
	$(this.canvas).C(c)
	return this
}
ct.backgroundImage = function (image) {
	var that = this
	this.bm(image, function (b) {
				that.setChildIndex(b, 0)
			}
	)
	return this
}
ct.backgroundColor = function (c) {
	$(this.canvas).C(c)
	return this
}
ct.backgroundImage = function (image) {
	var that = this
	this.bm(image, function (b) {
				that.setChildIndex(b, 0)
			}
	)
	return this
}
ct.backgroundColor = function (c) {
	$(this.canvas).C(c)
	return this
}
ct.bgI = ct.bg = function (i) {
	var ct = this
	ct.bm(i, function (b) {
		ct.ch(b, 0)
	})
	return ct
}