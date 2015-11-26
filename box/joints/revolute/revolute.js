//shifman youtube https://www.youtube.com/watch?v=SUVH8Bh4ruw ..doesnt say much

b2d.p()

//localAnchorA - the point in body A around which it will rotate
//localAnchorB - the point in body B around which it will rotate
//referenceAngle - an angle between bodies considered to be zero
// for the joint angle
rJD.init = rJD.i = function () {
	var jd = this, g = G(arguments)
	//just a shortcut to call initialze.  
	// have i ever even done that?  laaaame waaah waaaaah
	jd.Initialize.apply(jd, g)
	return jd
}
//rev joints need 'anchor point'

rJ.limits = rJ.lm = function () {
	var j = this, g = G(arguments),
			a = g[0], b = g[1]
	if (a === true) {
		j.EnableLimit(true);
		return
	}
	j.SetLimits(M.tR(a), M.tR(b))
	if (g.N) {
		j.EnableLimit(true)
	}
	return j
}
rJ.motor = rJ.mt = function (s, tor) {
	var j = this, g = G(arguments)
	j.SetMotorSpeed(s)
	j.SetMaxMotorTorque(_.tN(tor, 100000))
	if (g.N) {
		j.EnableMotor(true)
	}
	return j
}
rJ.speed = rJ.sp = function (s) {
	var j = this
	if (U(s)) {
		return j.GetMotorSpeed()
	}
	j.SetMotorSpeed(s);
	return j
}
 
$rJD = function(a,b){
	var jD =  new b2d.RevoluteJointDef
	jD.bodyA  = a
	jD.bodyB = b
	return jD
}


G.jt=function(g){
	var o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	 o= o|| {}
	return o
}

w._rJ = function () {

	var w = this, g=G(arguments), o = G.jt(g)
	return w.J( $rJD(o.a, o.b) )
}




w.rJDemo=function(x,y){var w=this, g=G(arguments),  
		 
	b = (g.p?b1:g.m?b2:b3)(x,y)  
	
	return  g.d ? b.stat() : b

	function b1(x, y) {return w.D(x, y, 'y', 10, 10).den(1).bo(.5)}
	function b2(x, y) {return w.D(x, y, $r(), 50, 15)}
	function b3(x, y) {return w.D(x, y, 'r', 4, 20).den(4).bo(2)}
}

 
w.rJ = function () {var w = this, g = G(arguments), o, jd; if (g.N_ || ( b2d.iB(g.f) && U(g.s) )) {var v = V(g.f, g.s); return w.rJDemo(v.x, v.y)}
	
	if (g.p) { g.s.XY(g.f) }
	
	o = b2d.iB(g.f) ? {a: g.f, b: g.s} : g.f
	
	jd = $rJD(o.a, o.b)
	if ( N(g.fo ) ) {
		jd.lAA(g.t, g.fo)
		if (N(g.si) ) { jd.lAB(g.fi, g.si) }
	} else if ( O(g.fo) ) { jd.lAA( g.fo )
		if ( O(g.fi) ){ jd.lAB( g.fi ) }
	}
	else {
		var a = o.a.wC()
		var	b = o.b.wC()
		var xDif= b.x - a.x
		var yDif= b.y - a.y
		//this is the halfway point of the line connecting their world centers!!!
		jd.lAA(xDif, yDif)	//bCenter - aCenter (in world verts)
	}
	
	if ( g.m ) { jd.cl(true) }
	return w.J(jd)
}

b.rJ = function (b1, yOff) {
	var b = this, w = b.W(), g = G(arguments), c, cc
	if (b2d.iF(b1)) {
		b1 = b1.B()
	}
	if (b2d.iB(b1)) {
		b1.XY(b.X(), b.Y())
		w.rJ(b, b1)
		return b1
	}
	if (R()) {
		c = 'r'
		cc = 1
	}
	else {
		c = 'g'
	}
	_.t(N(g[0], 1), function () {
		var nB = w.rJ(b)
		nB.Y(N(g[1], 8), '+')
		w.rJ(b, nB)
		b = nB
	})
	
	return b
	//pad=N(pad,15)
}



b.revPin = b.pin = function () {
	var b = this, w = b.W(), j,
			b1 = w.S(b.X(), b.Y())
	w.rJ(b1, b)
	return b
}

// rev joint uses:  wheels or rollers,  chains or swingbridges (using multiple revolute joints), rag-doll joints,  rotating doors, catapults, levers

WRJ = REVJ = function () {
	W()
	c = w.D(300, 300)
	c.cir({r: 60, c: 'd', rf: 1})
	w.rJ(c, w.D(300, 300, 'h', 30, 300))
	box = w.D(150, 150, 'n', 80, 40)
	w.rJ(
			box,
			w.D(130, 130, 'p', 50))
}
REVMOTORS = RJM = RVM = function () {
	W()
	w.rJ(
			w.S(400, 200, 'o', 60).d(1),
			w.D(400, 200, 'o', 200, 40).d(1)).mt(-2)
	w.rJ(
			w.D(400, 30, 'g', 30, 50),
			w.D(400, 30, 'g', 30, 50)).mt(3)
}
RVM2 = function () {
	W()
	w.rJ(
			w.D(400, 30, 'u', 10, 80),
			w.D(400, 30, 'r', 20, 160)
	).mt(10)
	w.rJ(
			w.D(400, 30, 'p', 50),
			w.D(400, 30, 'o', 20, 160)
	).mt(7)
	w.rJ(
			w.D(120, 50, 'y', 50, 50),
			w.D(100, 50, 'x', 50, 50)
	).mt(2)
}
REVSPEED = RVS = function () {
	W()
	j = w.rJ(w.S(700, 280), w.D(800, 280, 'r', 200, 40)).mt(4, 100000)
	_.in2(function () {
		j.lm(0, 200)
	})
	_.ev4(function () {
		j.sp(-j.sp())
	})
}
WPIN = ROUL = function () {
	W().Y()
	w.D(400, 200, 'b', [
		[60],
		[100, 50, 0, 200]
	]).pin()
}
CLICKPIN = function () {
	W()
	y = w.D(800, 200, 'y', [
		[60],
		[40, 80, 0, 60]])
	x = w.D(500, 200, 'x', 50)
	w.$$(function () {
		j1 = w.rJ(y, x)
	})
}
REVGUY = function () {
	w.rJ(
			w.D(350, 200, [
				['b', 125, 20],
				['o', 20, 60, -80, -40, 200]
			]),
			w.D(210, 210, [
				['g', 150, 10, 0, 0, 0, 1],
				['r', 10, 20, -140, -30, 0, 1]
			]),
			-80, -90, 60, 0
	).mt(10)
}
BINOTAFUNCTION = DEMOREV = REV = function () {
	W()
	w.rJ(a = w.S(100, 100, 20), b = w.D(100, 100, 100, 40)).mt(5, 1)
	w.rJ(w.S(250, 100, 20), w.D(250, 100, 100, 40)).mt(5, 2)
	w.rJ(w.S(400, 100, 20), w.D(400, 100, 100, 40)).mt(5, 10000)
	w.rJ(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5)
	w.rJ(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10)
	w.rJ(a2 = w.baa(850, 100), b2 = w.bi(850, 100, 100, 40, 'o')).mt(20, 10000)
	w.rJ(w.baa(100, 220), w.bi(100, 220, 100, 40)).lm(0, 0)
	w.rJ(w.baa(250, 220), w.bi(250, 220, 100, 40)).lm(0, 10)
	w.rJ(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180)
	w.rJ(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0)
	w.rJ(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180)
	w.rJ(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000)
	w.rJ(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1)
	w.rJ(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2)
	w.rJ(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000)
	w.rJ(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5)
	w.rJ(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10)
	w.rJ(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000)
	w.rJ(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1)
	w.rJ(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2)
	w.rJ(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000)
	w.rJ(
			w.baa(550, 460), w.bi(550, 460, 100, 40)
	)
			.lm(-180, 0).mt(-20, 5)
	w.rJ(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10)
	w.rJ(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
}
BALLBALL = EYEBALLTETHERBALL = CARNOTDEFINED = HORSE = HOR = function () {
	W({w: 'L'}).P()
	s = w.D(300, 400, 'b', 90, 30).d(1000).stat()
	//w.rJ(w.D(300-40, 400+50,'o',30), s)//.mt( 2)
	b = w.D(300 + 60, 400 + 50)
	b.cir({c: 'x', r: 30, rf: 1})
	w.rJ(b, s)//.mt(2)
	//   w.car(100, 350, -2, 2)
	//  w.car(440, 350, 2, -2)
	// w.car(440,350,4)
	// w.car(540,350,2)
//w.makeCar()
	//car = w.car()
	w.dst(p, car).len(0)
	w.floor.fr(.1)
	w.roller()
	//_.t(3, function(){w.roller()})
//    _.ev(2000, function(){w.roller()})
	//  p.X(1750)
}
REVPIN = PIN = function () {
	W({m: 0, g: 0}).Y()
	//  p1 = V(300,300) ;w.dot(p1)
	//  p2 = V(360,360) ;w.dot(p2)
	//  p3 = V(450,450) ;w.dot(p3)
	b = w.D(300, 300).lV(2).aV(1)
	b.cir({r: 150, lf: ['x', 'u']}).d(1)
	w.rJ(b,
			w.D(300, 300, 'b', 500, 40, 0, 0, 30)
	)
	//blue pin spinner in middle
	b1 = w.D(600, 300, 'b', 100, 50).pin()
	r1 = w.D(600, 300, 'r', 100, 100)
	w.$$(function () {
		w.rJ(b1, r1)
	})
}
function revJ() {
	PINBALL = function () {
		W([420, 600], {})
		w.floor.kill()
		w.S(215, 520, 'r', 30).K('bump').DBF(10, .8, 0)
		w.S(215, 100, 'b', 100, 10).K('shelf')
		w.D(215, 90, 'r', 20)
				.bS('sun', .24)
				.K('sun')
				.rot(10, 100)
		flip = w.flips(100, 430)
		$.tap(function () {
					var b = w.D(R(300, 40), 160, 'g', 20).DBF(1, .2, 2)
					if (!R(10)) {
						b.bS('me', .24)
					}
					flip()
				}
		)
	}
	TRICYCLE = function () {
		W([1200, 600, 10000, 600], {})
		//yy=w.y().aD(5000)//.fixRot()
		dir = 12
		car = w.D(300, 300, 'r', [
			[200, 20],
			[20, 165, -50, -50, 45],
			[20, 165, 50, -50, -45]
		]).fr(5).track()
		_.t(30, function () {
			w.me(R(9000, 500), 100, R(2, .5))
		})
		wh = wheel(250, 300).C('b').bS('me', .7)
		j = w.rJ(
				wh, //.lD(100).aD(100).fr(100),
				car,
				0,
				0,
				100,
				0
		)
		w.rJ(
				wh2 = wheel(250, 300, 50, 10).C('g')
						.bS('me', .4).aD(10).fr(2),
				car, 0, 0, -100, 0
		)
		j = w.rJ(
				wh3 = wheel(250, 300, 25, 6).C('y').bS('me', .2).lD(100).aD(100).fr(100),
				car, 0, 0, 0, -100
		)
		function wheel(x, y, r, n) {
			r = N(r, 80)
			n = N(n, 15)
			pC = [b2d.pC(r, n)]
			return w.D(x, y, 'w', pC)//.d(5).r(0).lD(100).aD(100).fr(100)
		}
		
		// j.mt(-50)
		T.t(function () {
			var K = $.K
			car.I(0, 5000)
			if (K.r) {
				wh.ApplyTorque(3500)
				wh2.ApplyTorque(3500)
				wh3.ApplyTorque(150)
			}
			if (K.l) {
				wh.ApplyTorque(-3500)
				wh2.ApplyTorque(-3500)
				wh3.ApplyTorque(-150)
			}
			if (K.u) {
				wh.ApplyTorque(1500)
				wh3.ApplyTorque(-500)
			}
			if (K.d) {
				wh2.ApplyTorque(-500)
				wh3.ApplyTorque(1500)
			}
		})
		//car.aD(1000).lD(1000)
	}
	SPERCH = function () {
		W([1200, 600, 1200, 1200], {}).P()
		p.tr()
		w.perch()
		w.seesaw(600, 1100)
		w.seesaw(600, 700)
		w.seesaw(600, 500)
		w.spinner(400, 900)
		w.spinner(800, 900, '-')
	}
	ELEVS = function () {
		W([1200, 600, 2400, 1200], {}).P(100, w.h - 200)
		//p.d(.1).fr(1)
		p.K('p').track()
		speed = 10
		j = w.pJ({
			a: w.S(400, w.h - 200, 's', [[40, 40, '-']]).d(1).fr(1),
			b: w.D(500, w.h - 300, 'd', 200, 40).d(.1).K('elv'),
			lm: [-250, 100]
		}).mt(speed)
		w.cl('elv', _.debounce(function () {
			j.mt(speed *= -1)
		}, 200, true))
		speed2 = -100
		j2 = w.pJ({
			a: w.S(800, 300, 's', 40, 40).d(1).fr(1),
			aV: [-30, 2],
			b: w.D(800, 200, 'd', 200, 40).d(1).K('box'),
			ax: V(0, 1),
			rA: 45
		}).mt(speed2)
		w.cl('box', 'p', function () {
			speed2 *= -1
			j2.mt(speed2)
		})
		w.p(500, 200, 'thrust').K('p').d(.02)
		w.pJ(
				w.S(1000, 800, 'y', 40, 40).d(1).fr(1),
				w.D(1100, 900, 'b', 200, 40).d(1), [1, -.5], 25
		).L(-300).U(200).lm('+')
		j3 = w.pJ({
			a: w.S(240, 150, 's', 180, 90),
			b: w.D(200, 200, 'd', 200, 20),
			aV: V(100, 10),
			rA: 5
		})
		j3.mt(-10)
		_.in(2, function () {
			j3.mt('-')
		})
		_.in(4, function () {
			j3.mt('+')
		})
	}
}
 