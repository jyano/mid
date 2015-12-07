function paralax(){
	function DivLayer(bg) {
		var div = $.d('y', 500, 500).P('a').width('100%').H(256)
		if (bg) {
			div.css('backgroundImage', bg)
		}
		return div
	}
	
	function transparent(i, num) {
		if (!N(num)) {
			return 'transparent url(' + i + '.png)'
		}
		return 'transparent url(' + i + '.png)' + num + '% 0px'
	}
	
	function CanvasLayer(bg) {
		var can = $.c('y', 500, 500).A()
				.P('a').width('100%').H(256)
		if (bg) {
			can.bg(bg)
		}
		return can
	}
	
	function int() {
		xp += speed
		back.bgP(xp + 'px 0px')
		front.bgP((xp * 3) + 'px 0px')
	}
	
	function mOut(e) {
		speed = 0
	}
	
	function mMove(e) {
		speed = e.pageX - ( W() / 2 )
		speed /= ( W() / 2 )
		$l(speed)
	}
	
	LAX = PARALLAX = function () {
		CanvasLayer(transparent('me', 10)).A()
		CanvasLayer(transparent('guy', 300)).A()
	}
	PBM = PARALLAXBYMOUSE = function () {
		//awesome!!!!!
		back = DivLayer(transparent('me'))
		front = DivLayer(transparent('guy'))
		speed = 0
		xp = 0
		$('body').mousemove(mMove)
		$('body').mouseout(mOut)
		setInterval(int, 30)
	}
}
__C = function () {
	z();
	c = $.c('y').drag()
	x = c.ctx()
	return c
}
$.fn.drag = $.fn.drag || function () {
	return this
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
} 