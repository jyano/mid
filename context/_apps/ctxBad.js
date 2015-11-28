CANCROP = function () {
	__C()
	x.d("me")
	x.cr()
}
DRAWN = function () {
	__C()
	x.s('u').l(6).lC('round')
}
GCOMP = XORSTAMP = function () {
	__C()
	x.fit('chicks')
	x.xo()
	c.$(function (xx, yy) {
		$.i('me', function (e, i) {
			x.drawImage(
					i[0],
					xx - ($(i).W() / 2), yy - ($(i).H() / 2)
			)
		})
	})
}
VS = function () {
	W()
	b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
	w.pDraw(b.P(), 50, 10).dot()
}
HOL = HOLE = function () {
	W(0)
	b = w.S(400, 400, 'r', 300, 300).f()
	b1 = w.S(400, 400, 'z', 100, 100).f()
	d = M.p(b).D(b1)
	out = w.S(300, 300, 'b', 200, 200)
	inn = w.S(300, 300, 'c', 100, 100)
	out.dif(inn)
	inn.dyn()
}
PXC = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPS(flatTri, 'r', 'v')
}
PXX = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
}