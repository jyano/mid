BORDERS = function () {
	z()
	change = function () {
		$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
				.J({"border-top-width": 10}, 1000)
				.J({"border-bottom-width": 10}, 1000)
				.J({"border-left-width": 10}, 1000)
				.J({"border-right-width": 10}, 1000)
				.J({"padding-top": 10}, 1000)
				.J({"padding-bottom": 10}, 1000)
				.J({"padding-left": 10}, 1000)
				.J({"padding-right": 10}, 1000)
				.J({"margin-top": 10}, 1000)
				.J({"margin-bottom": 10}, 1000)
				.J({"margin-left": 10}, 1000)
				.J({"margin-right": 10}, 1000)
				.J({"margin-top": 0}, 1000)
				.J({"margin-bottom": 0}, 1000)
				.J({"margin-left": 0}, 1000)
				.J({"margin-right": 0}, 1000)
				.J({"padding-top": 0}, 1000)
				.J({"padding-bottom": 0}, 1000)
				.J({"padding-left": 0}, 1000)
				.J({"padding-right": 0}, 1000)
				.J({"border-top-width": 0}, 1000)
				.J({"border-bottom-width": 0}, 1000)
				.J({"border-left-width": 0}, 1000)
				.J({"border-right-width": 0}, 1000)
	}
	$.$$(
			function () {
				z();
				_.times(10, change)
			}
	)
	_.times(10, change)
}
BORDERS1 = function () {
	change = function () {
		$.img('me').WH(100).A().C('g').bs('-')  //bs??
				.j({bt: 40}, 1000)
				.j({bb: 40}, 1000)
				.j({bl: 40}, 1000)
				.j({br: 40}, 1000)
				.j({gt: 40}, 1000)
				.j({gb: 40}, 1000)
				.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
				.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
				.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
				.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
				.j({bt: 0}, 1000)
				.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
	}
	m$$(function () {
		z();
		_.times(10, change)
	})
	_.times(10, change)
}

