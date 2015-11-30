SHOOTY = function () {
	z()
	stage = cjs.stage(800).tick().A().drag()
	stage.mug(function (mug) {
		m = mug
		mug.XY(100, 100).WH(150)
		SL(mug)
		key(mug, '-')
		// ugun(mug)
	})
	canvas = ghostMe().A().drag().XY(10)
	function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
		return $.canvas('X', 500, 500).fit('me').opacity(.1)
	}
}



