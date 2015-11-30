_superCanvasMug = function (cv) {
	
	cv.drawMug = el.me = function me(interval) {
		//randomly draw my face
		var cv=this
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (cv.drawMug.shouldDrawId) {
			clearInterval(cv.drawMug.shouldDrawId)
			cv.drawMug.shouldDrawId = false
		}
		
		else {
			cvdrawMug.shouldDrawId = setInterval(function () {
			cv.draw(window['mug'] || 'me', _.random(cv.W() - 200),
						_.random(that.W() - 200))
			}, interval)
		}
		return cv
	}
	
	cv.drawMug.shouldDrawId = false
	
	cv.fitMug = el.mug = function (ur) {
		var cv= this
		$.po('/mug', {u: ur}, function (mug) {
			cv.fit(mug)
		})
		return cv
	}
	
	cv.drawMug = cv.me = function me(interval) {
		var cv=this
		//randomly draw my face
		var that = this, g = G(arguments), args = g,
				interval = args[0] || 200
		if (cv.drawMug.shouldDrawId) {
			clearInterval(that.drawMug.shouldDrawId)
		cv.drawMug.shouldDrawId = false
		}
		else {
			cv.drawMug.shouldDrawId = setInterval(function () {
				cv.draw(window['mug'] || 'me', _.random(that.W() - 200),
						_.random(that.W() - 200))
			}, interval)
		}
		return cv
	}
	cv.drawMug.shouldDrawId = false
	
	cv.fitMug = cv.mug = function (ur) {var cv= this
		$.po('/mug', {u: ur}, function (mug) {cv.fit(mug)})
		return cv
	}
}