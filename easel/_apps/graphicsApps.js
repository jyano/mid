 
GXPOL = function () {
	$S$().Gx().FS().poly([vs1])
}
GXLT = function () {
	$S$().Gx().FS()._mt(100, 300)._lt(300, 100)._lt(500, 200)._lt(800, 200)
			._lt(100, 300)
}
GXP = function () {
	$S$().Gx().FS()._pol(vs1)
}
GX1 = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	gx = st.Gx()
	gx.C('b').dc(200, 100, 40)
}
GX2 = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	gx = st.Gx().SS()
	$.i('me', function (img) {
		gx.F()
		gx.dc(200, 200, 200).S()
		gx.dc(400, 400, 200).S()
		gx.dc(700, 700, 200).S()
		gx._bf(img)
		gx.dc(200, 200, 200).S()
		gx.dc(400, 400, 200).S()
		gx.dc(700, 700, 200).S()
	})
}
GOB = function () {
	st = _$St().t()
	//good gx = $Sh().a2(st).graphics
	//good gx = st.Sh().graphics
	h = st.Sh().drag()
	gx = h.graphics.SS()
	$.i('me', function (img) {
		gx.F()
		//gx._bf(img)
		gx.dcO({x: 100, y: 200, r: 200})
		gx.C('R').dcO({x: 200, y: 200, r: 200})
		gx.C('b', 'g', 30)._dc(100, 300)
	})
}
REC1 = function () {
	st = _$St().t()
	h = st.Sh().drag()
	gx = h.graphics
	gx.FS()._dr()
}
GDR = function () {
	st = _$St().t()
	gx = st.Gx().FS()._dr(100, 100, 500, 10)
	st.Gx().FS()._dr(500, 10)
}

