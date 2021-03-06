CUPBALL = function () {//should zoom in when near cup
	CUPS()
	b = w.D(w.W / 2, w.H / 2, 'w', [[10]]).r(.8).track()
	cjs.tick(function () {
		b.F(0, -20)
	})
	w.showOff()
}
TRACKEE = function () {
	W([1200, 600, 2400, 600], {g: 10})
	w.S(400, 2500, 'r', 200, 100)
	w.S(800, 2300, 'z', 100, 100)
	w.S(1200, 2300, 'b', 300, 100)
	w.S(1600, 2300, 'z', 100, 100)
	w.S(2000, 2300, 'r', 200, 100)
	_.times(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).den(.1)
	})
	y = w.ship(50, 50).mid()
	y2 = w.ship(100, 300).C('x').rot(180)
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	w.tRightLeft()
	w.showOff()
	setTimeout(function () {
		setInterval(function changeT() {
			if (w.t == y2) {
				w.C('b');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
	}, 5000)
}
CAMFOLLOW = function () {
	W(500, 500, 1600, 1000).G(0)
	a = w.ship().C('b')
	b = w.ship(400, 400).C('o').track()
	I(5, function () {
		if (w.follA) {
			b.track();
			w.follA = 0
		}
		else {
			a.track();
			w.follA = 1
		}
	})
}
CB = TRACKEECB = function () {
	W([1200, 600, 2400, 1200], {g: 300})
	_.t(10, function (i) {
		w.D(100 + i * 100, 100, $r(), 35).d(.1)
	})
	w.Z('-')
	p = w.p(1175, 100)
	w.t = p // no need to call track?
	_.ev(1, function () {
		w.t.cb = function () {
			w.Z(w.z + .001)
		}
	})
}
CHANGETRACKEE = KEE = function () {
	W([600, 600, 1200, 600])
	//i thought i may want t for timer/ticker.. but time has no x and y !
	//move the stage by manipulating the trackee x,y
	//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
	//  y = w.ship(50,50 ).C('d').mid().track()
	y2 = w.y(100, 300).C('x')
	y = w.y(100, 300).C('u')
	_.ev(1,
			function () {
				if (w.t == y2) {
					w.C('x');
					w.t = y
				}
				else {
					w.C('u');
					w.t = y2
				}
			})
}
 
	SCG = SCROLLGAME = function () {
		
		//no buffer to worry about
		//it lets u gradually move past the target point.. until hits limit
		W([1200, // x
			600,
			4800, // x
			1200
		], {g: 0, t: 0})
		w.S(1200, 300, 'r', 400, 100)
		w.S(1200, 900, 'r', 400, 100)
		w.S(1200, 600, 'w', [[400, 500, '-']])
		y = w.ship(200, 200).rot(120).damp(1, 10)
		w.track(y, 600, 300)
		// w.dot(600,300)
		//w.hud.dot(600,300)
//    w.dot(1200,600)
		//   w.hud.dot(1200,600)
		y.XY(1400, 600).rot(90).lD(0).lV(1)
	}
	SLOOM = function () {
		W([800, 500, 2400, 500], {g: 0}).Z(1.5)
				.Y(200, 200).showOff().bricks(
				[400, 300, 'r', 200, 100], [800, 300, 'z', 100, 100],
				[1200, 300, 'b', 300, 100], [1600, 300, 'z', 100, 100],
				[2000, 300, 'r', 200, 100]
		)
		y.damp(1, 10).track()
		_.in(4, function () {
			y.bS('me', .5)
		})
		_.t(5, function () {
			w.p(100, 100)
		})
	}
	KISS = function () {
		W([1200, 600, 2400, 600], {g: 10})
		w.D(800, 300).cir({
			r: 120,
			C: 'y', l: 2, bf: 'me', ls: ['y', 'x']//?
		}).den(.1)
		y = w.ship(50, 50).C('d').mid()
		y2 = w.ship(100, 300).C('x').rot(180)
		//i thought i may want t for timer/ticker.. but time has no x and y !
		//move the stage by manipulating the trackee x,y
		//these funcs can change stage, or the tick can update it every tick based on its value w.tx/ w.ty?
		w.tRightLeft()
		w.showOff()
		I(function changeT() {
			if (w.t == y2) {
				w.C('w');
				w.t = y
			} else {
				w.C('z');
				w.t = y2
			}
		}, 5000)
		b = w.D(100, 300)
		pf = b.pol({s: 1, C: 'y', v: [[-200, -100], [0, -200], [100, -100]]})
		pfs = b.pol({s: 1, C: 'o', v: [[-100, 0], [0, -200], [100, 20], [0, -150]]})
		cf = b.cir({k: 'cir', r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, C: 'x'})
		rf = b.rec({x: 100, y: 100, w: 10, h: 100, C: 'x'})
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		//FROM POL ->0, -100]] })
		w.D(800, 300).pol({
			v: [
				[[5, 100], [0, -100], [200, -150], [200, 150]],
				[[-50, 50], [-50, -100], [450, -50], [450, 50]]
			],
			c: 'b', C: 'X',
			bm: 1
		})
	}
	WORLDPAN = function () {
		W([1200, 600, 2400, 600], {g: 0})
		w.S(400, 300, 'r', 200, 100)
		w.S(800, 300, 'z', 100, 100)
		w.S(1200, 300, 'b', 300, 100)
		w.S(1600, 300, 'z', 100, 100)
		w.S(2000, 300, 'r', 200, 100)
		b = w.D(100, 100, 'b', 30).lV(-10, -20).rest(.2)
		co = w.tCo().B(b.tr())
		_.t(10, function (i) {
			co.B(w.D(100 + 30 * i, 100, 'r', 30).lV(10, 20).r(.2))
		})
		y = w.y(100, 100).rt(120).aD(100)
		w.pan('*')
	}
	ZOOM = SCORE = ADV = ADVENTURE = function () {
		W([1200, 600, 2400, 1200])//.P('+')
		//$.test=true
		w.Z(.1)
		w.roof.kill()
		w.S(100, 570, 'w', 200, 30).r(0).fr(0)
		w.S(325, 570, 'g', 230, 30).r(.3).fr(10)
		w.S(550, 570, 'r', 200, 30).r(.7).fr(.3)
		w.S(100, 400, 'g', 230, 30).r(.3).fr(10)
		w.plat([800, 300, 100], [260, 240, 60], [550, 250, 100], [1350, 550, 100], [300, 200, 100], [300, 500, 60, 30], [150, 400, 60, 30])
		w.S(1200, 500, 'w', 100, 100)
		w.S(1240, 450, 'w', 180, 30)
		w.S(1420, 500, 'y', 180, 30)
		w.S(1560, 450, 'y', 300, 30)
		w.S(1600, 500, 'y', 180, 30)
		w.S(1960, 450, 'w', 300, 30)
		w.S(1900, 500, 'w', 180, 30)
		w.S(11300, 200, 'w', 180, 30)
		speed = 1
		//  p.tr()
		p = w.p().cn('jump').tr()
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		w.p(100, 100, .8)
		//p.lD(1)
///    w.show(function(){ return  'in air: '+ p.inAir() })
		//w.goomba(400).fr(0)
		setup = function () {
			score = 0
			p.XY(150, 100).lV(0, 0)
			w.s.XY(0, 0)
		}
		setup()
		T.t(function () {
			w.s.X(speed, '-')//.pen(score++)
			if (p.Y() > 600) {
				setup()
			}
		})
	}
	CAMBALL = TRACKEE = function () {
		
		//W([1200,600,2400,600],{g:[10,10]}).Y()
		W([1200, 600, 2400, 600], {g: 100}).Y()
		mick(700, 100, {c1: 'b', c2: 'X'})
		mick(700, 300, {c2: 'b'})
		//  mick(100,100, { y2:10 })
		//  mick(100,200, { y2:200 })
		//  mick(100,300, { x2:100 })
		function mick(x, y, lf) {
			var g = G(arguments)
			w.i.h(x, y, '+').c({l: 20, C: 0, lf: lf || 1})
					.dc([50], [200, 0, 100], [100, 100, 100])
			if (g.p) {
				w.i.h(x, y).c({l: 20, C: 0, ls: lf || 1})
						.dc([50], [200, 0, 100], [100, 100, 100])
			}
		}
		
		y.i.c('y').dc(100, 100, 30)
				.c('o').dc(100, 100, 10)
				.c('X', 'g', 8)
				.mt([
					[100, 100], [300, 300], [400, 100],
					[500, 300], [450, 450]],
				[[500, 0], [600, 100]])
				.cir(600, 300, 'u', 'g', 10)
		h = w.i.h(600, 300, '+')
		h.cir(105, 100, 20, 'b')
				.cir(100, 20, 100, 'g')
				.cir(105, 100, 8, 'z')
				.cir(200, 100, 20, 'b')
				.cir(200, 100, 8, 'z')
		w.t = b = w.D(300, 300, 'r', 80).bo(.8).den(.1)
	}
