function color() {
	cjs.HSL = function (a, b, c) {
		if (U(a)) {
			return HSL(Math.rand() * 360, 100, 50)
		}
		return cjs.Graphics.getHSL(a, b, c)
	}
}
