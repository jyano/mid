Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new createjs.Container().drag()
	var innerCont = new createjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(
			function (m) {
				m.sXY(.4)
				createjs.bindSlide(m, outerCont)
				outerCont.bm('arm', function (b) {
					b.name = 'arm'
					b.sX(-.8).XY(140, 100).rXY(200, 80)
					createjs.bindRotate(b)
					b.on('dblclick', function () {
						tweens.rpunch(b)
					})
				})
				innerCont.XY(40, 120).rXY(40, 100)
				innerCont.bm('uparm', function (b) {
					b.name = 'lu'
					b.sX(.8).XY(80, 180).rXY(200, 80)
					createjs.bindRotate(b, innerCont)
				})
				innerCont.bm('forearm', function (b) {
					b.name = 'lf'
					b.XY(-100, 140).sX(.8).rXY(20, 120)
					createjs.bindRotate(b)
					innerCont.on('dblclick', function () {
						tweens.lpunch(b)
					})
				})
			})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = createjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new createjs.Container().drag()
	var innerCont = new createjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(
			function (m) {
				m.sXY(.4)
				createjs.bindSlide(m, outerCont)
				outerCont.bm('arm', function (b) {
					b.name = 'arm'
					b.sX(-.8).XY(140, 100).rXY(200, 80)
					createjs.bindRotate(b)
					b.on('dblclick', function () {
						tweens.rpunch(b)
					})
				})
				innerCont.XY(40, 120).rXY(40, 100)
				innerCont.bm('uparm', function (b) {
					b.name = 'lu'
					b.sX(.8).XY(80, 180).rXY(200, 80)
					createjs.bindRotate(b, innerCont)
				})
				innerCont.bm('forearm', function (b) {
					b.name = 'lf'
					b.XY(-100, 140).sX(.8).rXY(20, 120)
					createjs.bindRotate(b)
					innerCont.on('dblclick', function () {
						tweens.lpunch(b)
					})
				})
			})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = createjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
Bod2 = function () {
	var c1 = new createjs.Container(),
			cL = new createjs.Container()
	c1.mug(function (m) {
		SL(m, c1)
		m.sXY(.4)
		// c1.cI(m, 0)
	})
	c1.bm('arm', function (b) {//arm=b;
		b.name = 'arm';
		b.sX(-.8).X(140).Y(100).rX(200).rY(80)
		RT(b)
		b.on('dblclick', function () {
			tweens.rpunch(b)
		})
	})
	cL.bm('uparm',
			function (b) {//lu=b
				b.name = ('lu')
				RT(b, cL)
				b.sX(.8).X(80).Y(180).rX(200).rY(80)
				cL.on('dblclick',
						function () {
							tweens.lpunch(cL)
						})
				cL.X(140).Y(100).rX(100).rY(100)
			})
	cL.bm('forearm',
			function (b) {//lf=b
				b.name = ('lf')
				b.sX(.8).X(-100).Y(140).rX(20).rY(120)
				RT(b)
			})
	return c1.A(cL)
}
Bod1 = function () {
	var outerCont = new cjs.Container().drag()
	var innerCont = new cjs.Container()
	outerCont.A(innerCont)
	outerCont.mug(function (m) {
		cjs.bindSlide(m.scXY(.4), outerCont)
		outerCont.bm('arm', function (b) {
			b.name = 'arm'
			cjs.bindRotate(b.sX(-.8).XY(140, 100).rXY(200, 80))
			b.on('dblclick', function () {
				tweens.rpunch(b)
			})
		})
		innerCont.XY(40, 120).rXY(40, 100)
		innerCont.bm('uparm', function (b) {
			b.name = 'lu'
			b.sX(.8).XY(80, 180).rXY(200, 80)
			cjs.bindRotate(b, innerCont)
		})
		innerCont.bm('forearm', function (b) {
			b.name = 'lf'
			cjs.bindRotate(b.XY(-100, 140).sX(.8).rXY(20, 120))
			innerCont.on('dblclick', function () {
				tweens.lpunch(b)
			})
		})
	})
	return b = outerCont
}
BODS = function () {
	z()
	createjs.stage(800, 800).A().tick()
			.A(Bod1(), Bod2())
}
BOD = function () {
	z()
	s = cjs.stage(800, 800).A().tick()
	var b1 = Bod1(), b2 = Bod2().XY(300),
			f = Flame1().XY(300, 500),
			cyc = Cycle1().X(400), cyc2 = Cycle2().X(500)
	s.A(b1, f, b2, cyc, cyc2)
}
