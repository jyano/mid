function cir(){
SIR1 = function () {
  
	
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	
	
	$.h1('SIR')
	
	
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $h().a2(st)
	
	h.dc()
	h.dc(36)
	h.cir(18, 'o')
	h.dc(200, 100)
	h.cir(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	
	
	return
	//
	st2 = new cjs.Stage($.c(600, 300)[0]).t()
	st2.A(new cjs.Text('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = new cjs.Stage($.c(600, 300)[0]).t()
	st1.A(new cjs.Text('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = new cjs.Stage($.c(600, 300)[0]).t()
	st3.A(new cjs.Text('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A(
			$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	)
}
SIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
	h.dc(36)
	h.dc(18, 'o')
	h.dc(200, 100)
	h.dc(300, 100, 20, 'r')
	h.dc(300, 200, 20)
	//
	st2 = new cjs.Stage($.c(600, 300)[0]).t()
	st2.A(new cjs.Text('h.cirs', '50px Arial', 'white').X(400))
	st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
	//
	st1 = new cjs.Stage($.c(600, 300)[0]).t()
	st1.A(new cjs.Text('cjs.cir', '50px Arial', 'white').X(400))
	st1.A(cjs.cir(300, 'g'))
	st1.A(cjs.cir(140, 220, 20, 'o').dc())
	st1.A(cjs.cir('r').XY(220, 200))
	st3 = new cjs.Stage($.c(600, 300)[0]).t()
	st3.A(new cjs.Text('cjs.cirs', '50px Arial', 'white').X(400))
	st3.A(
			$H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
	)
}
TSIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()}
TSIR = function () {
	$.C('b')
	$S({
		body: {fZ: 40, c: 'o'},
		canvas: {M: 20}
	})
	$.h1('SIR')
	st = new cjs.Stage($.c(600, 300)[0]).t()
	st.A(new cjs.Text('h.dc', '50px Arial', 'white').X(400))
	h = $H().a2(st)
	h.dc()
}
}
function pol(){
HPOL = function () {
	st = $St()
	h = st.h('+').XY(0, 0)
	h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
	h.pol(vs1, 'r', 'y', 30)
	h.pol(vs1, 200, 200, 'r', 'y', 3)
}
}
HDL = function () {
	__St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
}
CLT1 = function () {
	__St();
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 390)
	if (R()) {
		h.cp()
	}
}
CLT = function () {
	__St();
	h.dg()
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
CLT = function () {
	__St()
	h.mt(240, 210)
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.lt([V(450, 410), V(600, 500), V(500, 500)])
	h.cp()
}
CJGPC = CJG = function () {
	$.h1('easel gpc');
	st = $St();
	h = st.h()
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	Bt('diff', 'D');
	Bt('inter', 'I');
	Bt('uni', 'U');
	Bt('xor', 'X')
	setup()
	function drawP(pol, sC, ox, oy) {
		pol.e(function (p, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
			h.vs(p.pts(), ox, oy)
					.cp().s().f()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function Bt(tx, op) {
		return $.bt(tx, function () {
			var p = p1[op](p2)
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
}
CJG2 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
					.l(4).s(col)
					.vs(innerPoly.pts(), ox, oy).cp()
					.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CJG1 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
					fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
					v = innerPoly.pts()
			h.c(fCol, sCol, 4).mt(v, ox, oy)
			//h.pol(v, ox, oy, fCol, sCol, 4)
			h.cp();
			h.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CPOL = function () {
	__St()
	vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.pol({
		c: 'r',
		C: 'b',
		l: 20,
		v: vs
	})
}
USINGLAYERSINEASEL = function () {
	Q(['me', 'guy'], function (q) {
		s = cjs.S()
		me = q.bm('me').a2(s).sXY(3)
		guy = q.bm('guy').a2(s).sXY(.5).drag()
		$.button('s.sXY(2)', function () {
			s.sXY(2)
		}).A()
		cjs.tick(function () {
			me.X(guy.x * 2.2 - 140)
			me.Y(guy.y * .2)
		})
	})
}
SHAPES = function () {
	z()
	s = cjs.stage(500, 500).A()
	s.can.P('a').XY(300)
	s.bm('me', 0.2, function (bm) {
	})
	s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
	s.circle(100, 100, 10, 'red', 'yellow')
			.circle(10, 100, 100, 'black', 'purple')
			.circle(100, 10, 100, 'blue', 'red')
			.circle(150, 150, 120, 'red', 'blue')
			.circle(30, 'brown', 'gray')
}
EASELART = function () {
	z()
	s = stage = cjs.stage(500, 600).A()
	s.can.P('a').XY(300)
	s.A(h = shape = cjs.shape())
	h.rect(100, 200, 0, 200, 'red')
			.rect(100, 100, 100, 20, 'green')
			.rect(145, 120, 10, 80, 'orange')
			.circ(105, 100, 20, 'blue')
			.circ(105, 100, 8, 'black')
			.circ(200, 100, 20, 'blue')
			.circ(200, 100, 8, 'black')
			.circ(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.tweenLoop(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.tweenLoop(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
CENTERSHAPE = function () {
	z()
	stage = cjs.stage(500, 600).A()
	shape = new cjs.Shape()
	SL(shape)
	stage.A(shape)
	shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.XY(200)
		me.sXY(.4)
	})
}
GRAPHICSTEST = function () {
	stage = cjs.stage(800, 500).A()
	canvas = stage.canvas
	// grab canvas width and height for later calculations:
	w = canvas.width
	h = canvas.height
	img = $.img('me', layout)[0]
	function layout() {
		var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
			createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
		var padding = 5
		var _width = 155
		var _height = 155
		var cols = 4
		var space = 0
		var border = createBorder();
		_.times(arr.length, function (i) {
			var tile = arr[i]()
			tile.x = 42 + (_width + padding) * (i % cols)
			tile.y = 42 + (i / cols | 0) * (_height + padding)
			stage.A(tile)
		})
		stage.A(border)
		stage.update()
	}
	
	function createBorder() {
		var s = cjs.shape()
		s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
		return cjs.container().A(s)
	}
	
	function createBitmapFill() {
		var container = createTile();
		var s = cjs.shape().XY(12, 10)
		var mtx = new createjs.Matrix2D().rotate(1)
		s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
				.beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
		return cjs.container().A(s)
	}
	
	function createRectGradientFill() {
		var s = cjs.shape().XY(12, 10)
		s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
		return createTile().A(s)
	}
	
	function createEllipse() {
		var s = cjs.shape().XY(40, 10)
		s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
				.setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
				.drawEllipse(0, 0, 70, 140, 8)
		return createTile().A(s)
	}
	
	function createRadialGradientFill() {
		var s = cjs.shape().XY(80)
		s.graphics.ss(8).beginStroke("#f0f")
				.beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
		return createTile().A(s)
	}
	
	function createLineTo() {
		var s = cjs.shape()
		s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
				.moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
		return createTile().A(s)
	}
	
	function createHex() {
		var s = cjs.shape().XY(80, 40)
		s.graphics.beginFill("pink")
				.drawPolyStar(0, 0, 40, 6)
				.drawPolyStar(0, 75, 40, 6)
				.drawPolyStar(45, 45, 20, 6)
		return createTile().A(s)
	}
	
	function createStar() {
		var s = cjs.shape().XY(80, 85)
		s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
				.beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
		return createTile().A(s)
	}
	
	function createRoundRect() {
		var s = cjs.shape().XY(12)
		s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
		return createTile().A(s)
	}
	
	function createTile() {
		var bg = cjs.shape()
		bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
		bg.alpha = 0.25
		return cjs.container().A(bg)
	}
}
nip = function () {
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	var h = cjs.shape(10, 10).a2(s).drag().opacity(.8)
	h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
			x1, y1, r1, x2, y2, r2)
			.dc(0, 0, 100)
			.endFill()
	return h
}
EASELCONVEX = function () {
	s = cjs.S()
	s.poly([[-100, -10], [0, 100], [100, 20]],
			'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly(
			[[-40, 40], [-40, -40], [40, -40], [40, 30]],
			'blue', 'white').XY(200, 200)
}
CONVEX = function () {
	w = b2d.W({grav: 0}).debug()
	b = w.dyn(300, 300)
	f = b.convex('green', [[0, 0], [0, -200], [100, 0]])
	b.convex('blue', [[0, 30], [-300, -20], [100, 0]])
	b.convex('pink', [[0, 0], [0, -20], [10, 0]],
			[[0, 30], [-30, -20], [10, 0]])
	b2 = w.dyn(300, 300)
	b2.convex('red', [[0, 0], [0, -20], [10, 0]])
	b2.convex([[0, 30], [-30, -20], [10, 0]])
	b3 = w.dyn(300, 300)
	b3.convex('green', [
		[-150, 0], [-120, -20], [-80, -50], [0, -30]
	])
	b3.convex('red',
			[[-30, -30], [-20, 10], [-10, 60]
			])
	b3.convex('orange',
			[[-30, -30], [-20, -50], [10, -20]
			])
	w.verts(300, 500,
			[
				['pink', [-20, -20], [0, -30], [10, 10]],
				['brown', [0, 0], [30, -50], [50, -10]]
			]
	)
	dot = function () {
		b.dot()
		f.dot()
	}
	//setTimeout(dot, 5000)
	//w.convex !!!!
	_.times(50, function () {
		w.circ(200, 30, 5)
	})
	b.fixedRot(true)
	cjs.tick(function () {
		b.linVel(0)
		b.angVel(0)
	})
}
VERTS = function () {
	w = b2d.W().debug()
	thingy = [['pink', [-20, -20], [0, -30], [10, 10]],
		['brown', [0, 0], [30, -50], [50, -10]]]
	_.times(100, function () {
		w.verts(Math.random() * 600, Math.random() * 300 + 200, thingy)
	})
}
PITFALL = function () {
	b2d.levelScrollX()
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	turtle2 = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	t = w.vertsKin(400, 280, turtle).fixedRot(true)
	t2 = w.vertsKin(700, 280, turtle2).fixedRot(true)
	setInterval(function () {
		t2.linVel(5, 0)
		setTimeout(function () {
			t2.linVel(-5, 0)
		}, 1000)
	}, 2000)
}
LINGRADBG = function () {
	w = b2d.W()
	s = w.s
	h = s.shape()
}
THREECANS = function () {
	c1 = $.can('a', 800, 400)
	c2 = $.can('X', 800, 400)
	c3 = $.can('X', 800, 400)
}
HDL = function () {
	__St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
}
CLT1 = function () {
	__St();
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 390)
	if (R()) {
		h.cp()
	}
}
CLT2 = function () {
	__St();
	h.dg()
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
}
CLT3 = function () {
	__St()
	h.mt(240, 210)
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.lt([V(450, 410), V(600, 500), V(500, 500)])
	h.cp()
}
CJGPC = CJG = function () {
	$.h1('easel gpc');
	st = $St();
	h = st.h()
	p1 = $pD(vs1);
	p2 = $pD(vs2)
	Bt('diff', 'D');
	Bt('inter', 'I');
	Bt('uni', 'U');
	Bt('xor', 'X')
	setup()
	function drawP(pol, sC, ox, oy) {
		pol.e(function (p, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
			h.vs(p.pts(), ox, oy)
					.cp().s().f()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function Bt(tx, op) {
		return $.bt(tx, function () {
			var p = p1[op](p2)
			setup();
			drawP(p, 'g', 0, 150)
		})
	}
}
CJG20 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
			h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
					.l(4).s(col)
					.vs(innerPoly.pts(), ox, oy).cp()
					.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CJG10 = function () {
	__St()
	bts()
	setup()
	function drawP(pD, sC, ox, oy) {
		pD.e(function (innerPoly, i, n) {
			var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
					fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
					v = innerPoly.pts()
			h.c(fCol, sCol, 4).mt(v, ox, oy)
			//h.pol(v, ox, oy, fCol, sCol, 4)
			h.cp();
			h.f().s()
		})
	}
	
	function setup() {
		h.clr(400, 400);
		drawP(p1, "b", 0, -30);
		drawP(p2, "r", 0, -30)
	}
	
	function bts() {
		Bt('diff', 'D');
		Bt('inter', 'I');
		Bt('uni', 'U');
		Bt('xor', 'X')
		function Bt(tx, op) {
			return $.bt(tx, function () {
				var p = p1[op](p2)
				setup();
				drawP(p, 'g', 0, 150)
			})
		}
	}
}
CPOL0 = function () {
	__St()
	vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
	//h.lt([450, 410],[600, 500], [500, 500])
	//h.lt([[450, 410], [600, 500], [500, 500]])
	//h.lt( V(450, 410), V(600, 500), V(500, 500))
	h.pol({
		c: 'r',
		C: 'b',
		l: 20,
		v: vs
	})
}
RMEVT = function () {
	St()
	st.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	st.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
	})
	///////
	s.can.P('a').XY(300)
	s.A(h = shape = $h())
	h.rec(100, 200, 0, 200, 'red')
			.rec(100, 100, 100, 20, 'green')
			.rec(145, 120, 10, 80, 'orange')
			.cir(105, 100, 20, 'blue')
			.cir(105, 100, 8, 'black')
			.cir(200, 100, 20, 'blue')
			.cir(200, 100, 8, 'black')
			.cir(100, 20, 100, 'green')
			.rXY(100, 300).XY(100, 300).drag()
	p = function () {
		shape.twL(
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
		shape.twL(
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
HPOLY = function () {
	St()
	v = [[-100, 0], [0, -100], [100, 50]]
	s.h(600, 300).poly({v: v, bf: 'me'})
	s.h(900, 300).poly({v: v, lf: 1})
	s.h(800, 300).poly({v: v, rf: 1})
	h = s.h(200, 300).drag().bf('me', function () {
		h.dc([150], [200, 0, 150])
	})
	st.u()
}//C
CIRS = function () {
	W(10).Y()
	w.D(200, 160).cir({r: 120, rf: {c1: 'r', c2: 'b'}}, {r: 100, C: 'y', l: 2, bf: 'me'})
	w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	w.D(300, 200).cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
			.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
			.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	w.s.h().dc([50], [200, 0, 100], [100, 100, 100]).c({
		l: 20,
		C: 0,
		ls: 1
	}).dc([50], [200, 0, 100], [100, 100, 100])
}
TXH = function () {
	St()
	h = $H().a2(st)
	h.f('red').s('black')
	h.graphics.dc(400, 400, 200)
	h.graphics.dr(100, 0, 200, 200)
	/////////
	h.rec(100, 100, 100, 100, 'y')
	h.rec(200, 200, 100, 100, 'b')
	h.c('o').polyStar(300, 100,
			50, 5, 0.6, -90)
	h.c('w', 'z')
			.roundRectComplex(400, 300,
			300, 300, 20, 20, 30, 40)
	h.cir(500, 200, 40, 'b', 'x', 10)
	function exceedsStackSize() {
		////////////////
		h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]], [[500, 0], [600, 100]
				])
		h.cir(600, 300, 'u', 'g', 10)
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		//two ways to make the same thing
		s.h().poly({
			v: v,
			lf: lf
		})
		s.h(250, 50).lf(lf).mt(v)
	}
}
TWORECS = function () {
	St()
	ct = s.ct(1000, 300).drag()
	ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
	h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
	h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
	st.u()
}//C-
CIRCRG = function () {
	s = St()
	nip = function () {
		x1 = 0
		y1 = 0
		r1 = 10
		x2 = 0
		y2 = 0
		r2 = 100
		var h = $h(10, 10).a2(s).drag().al(.8)
		h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
				x1, y1, r1, x2, y2, r2)
				.dc(0, 0, 100)
				.endFill()
		return h
	}
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
		// x--
		// r1++
		// r2++
	}
	setInterval(change, 1000)
	change()
	n = nip()
	h2 = $h(500, 100).a2(s);
	h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
	////////
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
}//C
REC = function () {
	s = $St()
	s.h(600, 300).graphics.rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(600, 100).graphics.rf(
			['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(800, 300).rf(
			['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h(400, 300).rf(
			['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
	).dc(0, 0, 100).ef()
	s.h().cir(0, 0, 10)
	///////////////
	x1 = 100
	y1 = 150
	r1 = 20
	x2 = 100
	y2 = 150
	r2 = 100
	h = $h(10, 10).a2(s).drag()
	change = function () {
		
		//  h.remove()
		// h=cjs.shape(10, 10).a2(s).drag()
		h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
		r1++
		r2++
	}
	setInterval(change, 1000)
	change()
	h = s.h(480, 270).drag()
	h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
			.dr2({w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
	s.h(180, 270).drag()
			.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
			{w: 300, h: 100, x: 0, y: -100},
			{w: 100, h: 300})
}//B+
OVALS = SETTRANSFORM = function () {
	s = $St(800).bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
	//////
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({
		C: 'b',
		lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
	}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
			.de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B+
ROTREC = function () {
	St()
	ct = s.ct(600, 300)
	ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
	ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
	h = ct.rec({
		w: 100, h: 200, a: 20,
		c: 'b', C: 'w', l: 20, bm: 1
	}).X(100)
	_.in(8, function () {
		h.X(0)
	}) //notice how gradient is seen behind the bm!!!
}//D
BMH = function () {
	s = $St()
	v = [[-100, 0], [0, -100], [100, 50]]
	h = s.h(100, 300)
	h.drag()
	h.bmCir({
		cirs: [{r: 150},
			{x: 200, r: 150},
			[300, 100, 100], [400, 100, 100]]
	})
	h2 = s.h(700, 300)
	h2.drag()
	h2.bmV({
		v: [
			[[-100, 0], [0, -100], [100, 50]],
			[[-200, 0], [-100, -100], [0, 50]],
			[[0, 200], [0, -200], [400, -300], [400, 300]]]
	})
}//D
CIRCS = function () {
	St()
	// h.dc(100,100,50) -> no color
	h.c().dc(100, 100, 50) // black fill, l4 white stroke
	h.c('*').dc(100, 200, 50).dc(100, 250, 50)
	h.c('***').dc(200, 200, 50).dc(200, 250, 50)
	h.c({C: 'r'}).dc(300, 300, 50)
	h.cir({
		r: 50, x: 200, y: 200,
		C: ['y', 10],
		lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
		ls: {c1: 'u', c2: 'o'}
	})
	h.cir({
		r: 50, x: 500, y: 200,
		C: ['y', 2],
		rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
		rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
	})
	h = s.h().drag().lf({}).dc()
			.c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
	cjs.me = function (fn) {
		Q(['me'], function (q) {
			fn(q.getResult('me'))
		})
	}
	cjs.me(function (i) {
		h.c({
			l: 200,
			rf: ['w', 'u', 800],
			rs: {c1: 'w', c2: 'x', r2: 800}
		}).dc({x: 0, y: 0, r: 200})
		s.h().c({
			l: 200,
			lf: {c1: 'w', c2: 'u', y2: 200},
			ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
		}).dc({x: 0, y: 0, r: 200}).drag()
		s.h().lf('y', 'r', 10).dc({r: 200}).c({
			l: 0,
			c: 'y',
			//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
			bs: i, bf: i
		}).dc({r: 200}).drag()
		s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
	})
}//D
EASELCONVEX = function () {
	s = $St()
	s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
	s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
	s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
}
CIRCTEST = function () {
	St()
	s.h().drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
			[{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
	s.h().drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
			[{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
}//D better as wap
CIRCSTROKE = function () {
	St()
	gx = h.graphics
	h.c('b', 'r', 10).XY(-100, -100)
	h.dc([200, 200, 50], [400, 200, 50], [600, 200, 50])
	/*  h.dc(300,300,50)
	 gx.dc(400,400,50)
	 h.dc(500,500,50)
	 gx.dc(600,600,50)
	 */
}//C (PLAY needs update, WAP not?!) 
GRAPHTEST = function () {
	St();
	img = $.i('me', function () {
		s.ct().h()
		s.A($Bm(img))
		s.ss(32).dr(20, 20, 920, 360);
		_.each([
					function () {
						return $h(12, 10)
								.lf('b', 'g', 130).dr(130)
					},
					function () {
						return $h(40, 10, 'b', 16)
								.ls('r', 'w', 70, 140).de(70, 140)
					},
					function () {
						return $h(80, 80)
								.C('b', 8).rf('w', 'y', 40).dc(40)
					},
					function () {
						return $h(12, 10, 18)
								.bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
					},
					function () {
						return $h(12, 12, 'g', 'r', 8)
								.rr(130, 30)
					}, //w(h) and r
					function lt() {
						return $h().C('o')
								.ss(16, 'round', 'round')
								.mt([40, 10], [90, 90], [90, 140])
					},
					function star() {
						return $h(80, 85, 'y', 'b', 3)
								.pStr(0, 0, 80, 5, .8, -95)
					},
					function hex() {
						return $h(80, 40, 'p')
								.pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
					}
				],
				function (cont, i) {
					var W = 155, H = 155, P = 5, C = 4 //pad, cols
					s.A(tile(cont()).XY(
							42 + (W + P) * (i % C),
							42 + (i / C | 0) * (H + P)))
				})
	})[0]
	tile = createTile = function (x, y) {
		var bg, til
		bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
		til = cjs.ct().A(bg)
		if (N(x)) {
			til.X(x)
		}
		if (N(y)) {
			til.Y(y)
		}
		if (O(x)) {
			til.A(x)
		}
		return til
	}
}//D better with WAP
RR = ROUNDREC = function () {
	s = $St()
	h = s.h()
	h.c('b', 'r', 5).dc(100, 100, 100)
	h.dr(300, 200, 100, 50)
	h.dr2(500, 200, 100, 50)
	h.rr2(500, 200, 100, 50, 50)
	h.de2(500, 200, 100, 50)
	s.dot(100, 100)
	s.dot(300, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.dot(500, 200)
	s.u()
}//C+

EASELART = function () {
	z()
	stage = SuperStage(500, 600).A()
	shape = stage.Shape()
	shape.rectangle(100, 200, 0, 200, 'a')
	shape.rectangle(100, 100, 100, 20, 'g')
	shape.rectangle(145, 120, 10, 80, 'o')
	shape.circle(105, 100, 20, 'b')
	shape.circle(105, 100, 8, 'x')
	shape.circle(200, 100, 20, 'b')
	shape.circle(200, 100, 8, 'x')
	//shape.circle(100,20,100,'g')
	SL(shape)
	shape.rx(100).ry(300).x(100).y(300)
	p = function () {
		EaselTween([shape, {l: 1}],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
				[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200]
		)
		EaselTween([shape, {l: 1}],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
				[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
		)
	}
	p()
}
CENTERSHAPE = function () {
 
	stage = SuperStage(500, 600).A()
	shape = stage.Shape();
	SL(shape)
	shape.RECT(0, 0, 100, 100, 'a')
	shape.RECT(0, -75, 25, 50, 'b')
	shape.RECT(0, -200, 100, 100, 'r')
	shape.circle(100, 200, 40, 'z', 'x')
	shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	shape.g.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.xy(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.xy(200)
		me.sxy(.4)
	})
}

SHAPS = function () {
	z()
	s = stage = SuperStage(500, 500).a()
	//s.bm('me', function(bm){ bm.sxy(.2)   })
	
	s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
	s.Circle(100, 100, 10, 'r', 'y').fn(SL)
	s.Circle(10, 100, 100, 'z', 'x').fn(SL)
	s.Circle(100, 10, 100, 'a', 'c').fn(SL)
	s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')

}




BUB =MOUSEVENTS= BUBBLE = function () {
	St()
	output = $T(
			"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
			"13px courier").lWH(280, 13).XY(190, 10)
	bg = $H().n("background")
	bg.graphics.f("red").rr(0, 0, 150, 60, 10)
	lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
	// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
	// button.mouseChildren = false;
	st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
	// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
	_.e([st, bt, lb, bg], function (tg) {
		tg.$(handleClick, false);
		tg.$(handleClick, true)
	})
	st.u()
	function handleClick(e) {
		if (e.currentTarget == st && e.eventPhase == 1) {
			output.text = "target : eventPhase : currentTarget\n"
		}// this is the first dispatch in the event life cycle, clear the output.
		output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
		if (e.currentTarget == st && e.eventPhase == 3) {
			st.u()
		}// this is the last dispatch in the event life cycle, render the stage.
	}
}//B+

SHAPEZ = function () {
	St()
	s.can.P('a').XY(200)
	s.b('me')
	s.bm('me', 0.2, function (bm) {
	})
	h = $h().cir()
	s.A(
			$h().cir(100, 'blue', 'green').XY(100, 100).drag()
	)
	s.h().cir(100, 100, 10, 'red', 'yellow')
	s.h().cir(10, 100, 100, 'black', 'purple')
	s.h().cir(100, 10, 100, 'blue', 'red')
	s.h().cir(150, 150, 120, 'red', 'blue')
	s.h().cir(30, 'brown', 'gray')
	s.u()
}//C- only PLAY!?
HITC= HITCIRCLES = function () {
	z()
	var pt
	st = $St(1000, '+') // look no .tick() necesary!! look below :)
	ct = $Ct()
	st.A(ct.XY(150))
	_.t(25, function () {
		$H().XY(
				randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
	})
	T.on("tick", function (e) {
		ct.rotation += 3
		n = ct.getNumChildren()
		ct.ch(function (ch) {
			uM = ch.uM()
			ch.alpha = ch.uM() ? 1 : 0.1
			pt = ch.globalToLocal(st.m().x, st.m().y)
			if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
				ch.al(1)
			}
		})
	})
	
	function randomLocation() {
		return M.random() * 300 - 150
	}
	
	function randomHSL() {
		return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
	}
}//A
function drawSquare(ct, x, y) {
	var h = $H()
	h.a2(ct).f($r())
	h.graphics.dr(5, 5, 70, 70)
	if (x) {
		h.X(x)
	}
	if (y) {
		h.Y(y)
	}
	return h
}
function circle() {
	HITCIRCLES = function () {
		z()
		var pt
		st = $St(1000, '+') // look no .tick() necesary!! look below :)
		ct = $Ct()
		st.A(ct.XY(150))
		_.t(25, function () {
			$H().XY(
					randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
		})
		T.on("tick", function (e) {
			ct.rotation += 3
			n = ct.getNumChildren()
			ct.ch(function (ch) {
				uM = ch.uM()
				ch.alpha = ch.uM() ? 1 : 0.1
				pt = ch.globalToLocal(st.m().x, st.m().y)
				if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
					ch.al(1)
				}
			})
		})
		function randomLocation() {
			return M.random() * 300 - 150
		}
		
		function randomHSL() {
			return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
		}
	}//A
	ROTCIRS = function () {
		z()
		ct = $Ct().XY(150).a2($St(1000, '+'))
		h = $H().f('r').a2(ct)
		h.dc(30)
		h.dc(30, 20)
		h.dc(250, 250)
		h.XY(100, 100)
		T.on("tick", function (e) {
			ct.rotation += 3
		})
	}
	ONECIR = function () {
		z()
		ct = $Ct().XY(0, 0).a2($St(1000, '+'))
		h = $H().a2(ct).XY(0, 0)
		//x,y,r
		h.f('o')
				.dc(100, 300, 125)
		///x, r , r = 50
		h.f('z').dc(100, 300)
		h.f('r').dc(100, 300, 50)
		h.f('b').dc(100, 300)
		//r, x=0, y=0
		h.f('r').dc(100)
	}
	CJSCIR = function () {
		z()
		ct = $Ct().XY(0, 0).a2($St(1000, '+'))
		h = $H().a2(ct).XY(0, 0)
		ct.A(
				cjs.cir({
					r: 100,
					c: 'r', C: 'g', l: 50,
					oX: 100
				})//.XY(0,0)//.XY(300,400)
		)
		ct.A(
				cjs.cir(80, 300, 300, 'g', 'y', 30)
		)
		ct.A(
				h = cjs.cir(400, 300)
		)
		h.f('r').dc(28, 40, 40)
	}
	CIRTUT = function () {
		z()
		cv = $.c(1000, 500).A()
		st = new cjs.S(cv[0])
		st.t()//.b()
		ct = $Ct().XY(0, 0).a2(st)
		h = $H().a2(ct).XY(0, 0).a2(ct)
		h.f('b').dc(400, 100, 10)
		/*
		 ct.A(
		 cjs.cir({
		 r: 100,
		 c: 'r', C: 'g', l: 50,
		 oX: 100
		
		 })//.XY(0,0)//.XY(300,400)
		 )
		
		 */
	}
}
function _pre() {
	cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
		var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
		shp.dc(0, 0, r)
		return shp
	}
}