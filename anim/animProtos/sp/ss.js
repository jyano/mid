ss = cjs.SpriteSheet.prototype
ss.addFlipped = function (a, b, c) {
	cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
	return this
}

