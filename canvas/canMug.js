_superCanvasMug = function (cv) {
	cv.drawMug = el.me = function me(interval) {
		//randomly draw my face
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (that.drawMug.shouldDrawId) {
			clearInterval(that.drawMug.shouldDrawId)
			that.drawMug.shouldDrawId = false
		}
		else {
			that.drawMug.shouldDrawId = setInterval(function () {
				that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))
			}, interval)
		}
		return this
	}
cv.drawMug.shouldDrawId = false
	cv.fitMug = el.mug = function (user) {
		var that = this
		$.post('/mug', {u: user}, function (userMug) {
			that.fit(userMug)
		})
		return this
	}
	cv.drawMug = cv.me = function me(interval) {
		//randomly draw my face
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (that.drawMug.shouldDrawId) {
			clearInterval(that.drawMug.shouldDrawId)
			that.drawMug.shouldDrawId = false
		}
		else {
			that.drawMug.shouldDrawId = setInterval(function () {
				that.draw(window['mug'] || 'me', _.random(that.W() - 200), _.random(that.W() - 200))
			}, interval)
		}
		return this
	}
	cv.drawMug.shouldDrawId = false
	cv.fitMug = cv.mug = function (user) {
		var that = this
		$.post('/mug', {u: user}, function (userMug) {
			that.fit(userMug)
		})
		return this
	}
}