dO.underMouse = dO.uM = function () {
	var dO = this, stg = dO.getStage()
	if (stg.mouseInBounds) {
		var pt = dO.gTL(stg.mouseX, stg.mouseY)
		return dO.hitTest(pt.x, pt.y)
		// alt : return hitTest( pt )
	}
}
dO.mouEn = function (en) {
	var dO = this, g = G(arguments)
	if (g.u) {
		return dO.mouseEnabled
	}
	dO.mouseEnabled = g.f ? true : false
	return dO
}
dO.$ = dO.click = function (fn) {
	return this.on('click', fn)
}
dO.$$ = dO.dblclick = function (fn) {
	return this.on('dblclick', fn)
}
events = ['added',
	'mouseover', 'rollover', 'rollout', 'mouseout',
	'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
	'removed',
	'tick'
]