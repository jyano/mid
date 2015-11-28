testImgRegCenter = function () {
	mockStage()
	s.bm('me', function (bm) {
		b1 = bm
		bm.spin().drag()
	})
	s.bm('me', function (bm) {
		b2 = bm
		bm.sXY(0.5, 0.3).spin().drag()
	})
	s.A(c = cjs.circle(4).XY(200))
}

