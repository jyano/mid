 
cjs.chalk = function (text, color) {
	color = oO('c', color || 'white')
	return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
}
CHALK = function () {
	w = b2.mW()
	s = w.s
	s.bm('me')
	text = cjs.chalk('some information ....')
	text2 = cjs.chalk('some more').XY(50, 90)
	s.A(text, text2)
}