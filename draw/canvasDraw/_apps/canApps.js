CAN3 = THREECANS = function () {
	c1 = $.can('a', 800, 400)
	c2 = $.can('b', 800, 400)
	c3 = $.can('X', 800, 400)
}
CV1= FLOATCV = function () {
	__C()
	x.b('r', 'b', 50)
	x.mt(100, 100, 300, 300).f().s()
	x.b('b', 'r', 50).a(100, 75, 50).f().s()
}
CV2=PIX = function () {
	c = $.c('y', 900, 500).A()
	c.draw('me', 100, 100)
	setTimeout(
			function () {
				c.pD(c.gD(100, 100, 500, 500), 120, 120)
				c.f("r").fr(10, 10, 50, 50)
				imgData = c.gD(10, 10, 50, 50)
				c.pD(imgData, 10, 70)
			}, 200
	)
} 
CV3 = SHAD = function () {
	c = $.c('b', 700).A()
	c.draw('me', 100, 100)
	c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
	c.draw('me', 200, 200)
	c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
	c.shadowColor('g')
	c.draw('me', 0, 300)
	c.shadow('p', 30, 200, 20)
	c.draw('guy', 400, 200)
}
CV4= CANFIT = function () {
	c = __C();
	c.fit('me')
	
	m = $.c(800).fit('me')
	g = $.c('b', 600).fit('guy')
}
CV5=CANBOR = function () {
	$CSS({
		canvas: {
			B: '33px dashed red'
		}
	})
	__C()
	x.jD('me')
}
CV6=FANN = function () {
	$l('fan')
	x = $.c('y', 1000, 800).A()
	y = $.c('x', 400).A()
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	guidewires = false
	dragging = false
	mousedown = {}
	loc = {}
	restoreDrawingSurface = function () {
	}
	updateRubberband = function (m) {
		x.ln(
				mousedown.x,
				mousedown.y,
				m.x,
				m.y
		)
	}
	drawGuidewires = function () {
	}
	x.MD(
			function (X, Y) {
				dragging = true
				mousedown = {x: X, y: Y}
			}
	)
	x.MM(
			function (X, Y) {
				if (dragging) {
					restoreDrawingSurface()
					updateRubberband({x: X, y: Y})
				}
				if (guidewires) {
					drawGuidewires(loc.x, loc.y)
				}
			}
	)
	x.MU(
			function (X, Y) {
				dragging = false
				restoreDrawingSurface()
				updateRubberband({x: X, y: Y})
			}
	)
}
 
 