//SPACE BOWLING
//SPACE BOWLING
BOWL = function () {
	stage = s = createjs.stage(1000, 1000).tick().A()
	//append a container to the stage
	container = c = new createjs.Container()
	stage.A(container)
	plX = stage.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circle = cjs.circle(plX, plY, plR, 'yellow')
	container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: radius,
			m: m,  //?
			f: f,
			vX: 0, vY: 0, player: false
		}
	}
	_.times(nRng, function (r) {
		var crR = 0,
				ang = 0,
				rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.times(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * cos((ang * a) * PI / 180))
				y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			container.A(
					cjs.circle(10, 'black').XY(x, y))
		})
	})
}
BOWL = function () {
	stage = s = createjs.stage(1000, 1000).tick().A()
	//append a container to the stage
	container = c = new createjs.Container()
	stage.A(container)
	plX = stage.W() / 2
	plY = 150
	plR = 100
	plr = 75 // this seems to determine the radius of the 'cluster' of balls
	oRng = 8 //outer ring
	nRng = 3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
	circle = cjs.circle(plX, plY, plR, 'yellow')
	container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)
	rngSp = plr / (nRng - 1)
	aA = []
	var ast = function (x, y, r, m, f) {
		return {
			x: x, y: y, radius: radius,
			m: m,  //?
			f: f,
			vX: 0, vY: 0, player: false
		}
	}
	_.times(nRng, function (r) {
		var crR = 0,
				ang = 0,
				rngR = 0
		if (r == nRng - 1) {
			crR = 1
		}
		else {
			crR = oRng - (r * 3)
			ang = 360 / crR
			rngR = plr - (rngSp * r)
		}
		_.times(crR, function (a) {
			var x = 0, y = 0
			if (r == nRng - 1) {
				x = plX;
				y = plY
			}
			else {
				x = plX + (rngR * cos((ang * a) * PI / 180))
				y = plX + (rngR * sin((ang * a) * PI / 180)) - 350
			}
			aA.push(ast(x, y, 10, 5, 0.95))
			container.A(
					cjs.circle(10, 'black').XY(x, y))
		})
	})
}