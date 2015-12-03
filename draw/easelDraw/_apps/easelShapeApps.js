 MTLT = function () {
	St()
	h.graphics.C('r', 'b')
	h.dg()
	h.lt(100, 100)
	h.lt(150, 190)
	h.lt(300, 300)
	h.lt(350, 390)
	if (R()) {
		h.cp()
	}
	h.mt(240, 210)
	h.lt(450, 410)
	h.lt(600, 500)
	h.lt(500, 500)
	h.cp()
	MTLT1 = function () {
		St();
		h.dg()
		h.lt(100, 100)
		h.lt(150, 190)
		h.lt(300, 300)
		h.lt(350, 390)
		if (R()) {
			h.cp()
		}
		h.mt(240, 210)
		h.lt(450, 410)
		h.lt(600, 500)
		h.lt(500, 500)
		h.cp()
	}
}
DRAWLINE = XX5 = HDL11 = function () {
	St()
	h.dl(50, 50, 200, 200)
	h.dl(V(300, 500), [500, 200])
	DRAWLINE1 = DLN = function () {
		St()
		h.dl(50, 50, 200, 200)
		h.dl(V(300, 500), [500, 200])
	}
}
SHAPEZ8 = function () {
	SHAPS8 = function () {
		z()
		s = stage = $St(500, 500)
		//s.bm('me', function(bm){ bm.sxy(.2)   })
		s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
		s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
		s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
		s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
		s.Sh().cir(150, 150, 120, 'c', 'd')
			//.fn(SL)
				.cir(30, 'x', 'x')
	}
	SHAPES9 = function () {
		z()
		s = stage = St(500, 500).a()
		//s.bm('me', function(bm){ bm.sxy(.2)   })
		s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
		s.Circle(100, 100, 10, 'r', 'y').fn(SL)
		s.Circle(10, 100, 100, 'z', 'x').fn(SL)
		s.Circle(100, 10, 100, 'a', 'c').fn(SL)
		s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
		//s.bm('me', function(bm){ bm.sxy(.2)   })
		s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
		s.Circle(100, 100, 10, 'r', 'y').fn(SL)
		s.Circle(10, 100, 100, 'z', 'x').fn(SL)
		s.Circle(100, 10, 100, 'a', 'c').fn(SL)
		s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
	}
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
CENTERSHAPE8 = function () {
	CENTERSHAPE9 = function () {
		z()
		stage = St(500, 600).A()
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
	stage = $St(500, 600)
	shape = stage.Sh()
	gx = shape.graphics.FS()
	SL(shape)
	shape.rec(0, 0, 100, 100, 'a')
	shape.rec(0, -75, 25, 50, 'b')
	shape.rec(0, -200, 100, 100, 'r')
	shape.cir(100, 200, 40, 'z', 'x')
	gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
	gx.beginFill("orange").drawPolyStar(
			100, 100, 50, 5, 0.6, -90)
	shape.XY(200)
	stage.bm('me', function (b) {
		me = b
		me.rgc()
		me.XY(200)
		me.sXY(.4)
	})
	CENTERSHAPE9 = function () {
		z()
		stage = St(500, 600).A()
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
}
YSTAR = CENSHP = function () {
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
LAYS= USINGLAYERSINEASEL9 = function () {
	z()
	s = St(500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.sxy(3)
		drawCar()
		s.tick(function () {
			b.x(-1 * (g.x() * 2))
			b.y(-1 * (g.y() * 2))
		})
	})
	bt = $.button('safd', function () {
		s.sxy(2)
	}).A()
	function drawCar() {
		s.bm('guy', function (bm) {
			g = bm
			bm.sxy(.5)
			SL(bm)
		})
	}
	
	USINGLAYERSINEASEL9 = function () {
		z()
		s = St(500).A()
		s.bm('me', function (bm) {
			b = bm
			bm.sxy(3)
			drawCar()
			s.tick(function () {
				b.x(-1 * (g.x() * 2))
				b.y(-1 * (g.y() * 2))
			})
		})
		bt = $.button('safd', function () {
			s.sxy(2)
		}).A()
		function drawCar() {
			s.bm('guy', function (bm) {
				g = bm
				bm.sxy(.5)
				SL(bm)
			})
		}
	}
}
function roundRec() {
	RRR8 = ROUNDREC = function () {
		s = $St()
		h = s.h()
		gx = h.graphics.FS()
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
	TXH8 = function () {
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
		return
		//function exceedsStackSize() {
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
function margin() {
	MARGINAUTO9 = function () {
		z()
		o = outer = $.div('b', 500, 500).A()
		o.A(i = inner = $.div('r', 100, 100))
		i.mar('auto')
		o.mar('auto')
	}
	MARGINAUTO9 = function () {
		z()
		o = outer = $.div('b', 500, 500).A()
		o.A(i = inner = $.div('r', 100, 100))
		i.mar('auto')
		o.mar('auto')
	}
}
function mobileHeader() {
	MOBILEHEADERS9 = function () {
	}
	MOBILEHEADERS9 = function () {
	}
}
function squareGame(){
SQUAREGAMES9 = function () {
	z()
	s = St(400, 400).A()
}
	SQUAREGAMES9 = function () {
		z()
		s = St(400, 400).A()
	}
}
 
 