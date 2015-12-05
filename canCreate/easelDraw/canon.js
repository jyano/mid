canon = function (box, x, y) {
	var vx, vy, ball
	x = x || box.x || 100
	y = y || box.y || 500
	stage.A(ball = Ball(12).XY(x, y))
	if (box.rotation > 0) {
		vx = 8 * (1 + Math.toRads(box.rotation))
		vy = 16 * (1 - Math.toRads(box.rotation))
	}
	else {
		vx = 8 * (-1 + Math.toRads(box.rotation))
		vy = 16 * (1 + Math.toRads(box.rotation))
	}
	stage.tick(function () {
		vy -= 0.5
		ball.X(vx, '+').Y(vy, '-')
	})
}
CANON = function () {
	stage = cjs.stage(1000, 600).tick().A()
	box = Box(20, 100).X(500).B(600)
	stage.A(box)
	kD('l', function () {
		box.rT(4, '-')
	})
	kD('r', function () {
		box.rT(4, '+')
	})
	kD('d', function () {
		box.rotation = 0
	})
	kD('s', function () {
		canon(box)
	})
	setInterval(function () {
		var degs = Math.toRads(box.rotation)
		canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
				(500 + Math.asin(degs) * 30) + box.y - 540)
	}, 500)
}





