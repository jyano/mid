KEYS = WHYQ = function () {
	cjs.Keys.l = cjs.Keys.left = false
	cjs.Keys.r = cjs.Keys.right = false
	cjs.Keys.u = cjs.Keys.up = false
	cjs.Keys.d = cjs.Keys.down = false
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		cjs.Keys.l = cjs.Keys.left = false
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		cjs.Keys.l = cjs.Keys.left = true
		cjs.Keys.dir = 'left'
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		cjs.Keys.r = cjs.Keys.right = true
		cjs.Keys.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		cjs.Keys.r = cjs.Keys.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		cjs.Keys.u = cjs.Keys.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		cjs.Keys.u = cjs.Keys.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		cjs.Keys.d = cjs.Keys.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		cjs.Keys.d = cjs.Keys.down = false
	})
}