SPACEOLD = function () {
	wMs(function (b, s) {
		stage = s
		stage.wh(2000)
		stage.bgi('/space.jpg')
		b.sxy(.2)
		b.fn(RT, SL)
	})
}
SPACE = function () {
	z()
	$stage(2000, 2000).tick().A().backgroundImage('/space.jpg').mug(
			function (mug) {
				mug.sXY(.2).drag().rotate()
			}
	)
}
