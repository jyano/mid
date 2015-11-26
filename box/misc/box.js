//divide by 30 to get meters
//all bx-obs have reg at center
//fixture: shape, friction, density[1], restitution
//body: x,y,type
//shape.setasbox(w,h)    .. again, divide values by 30
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//worldstep(time(keep in sync with easel),
// vel iterations?(calcs forces - higher is more accurate but more intensive),
//  pos iterations  //can set both to 10
// )
//world clearforces
//static body for ground, dynamic for objs
//
//
TOMAKETOUCHWORKAGAIN = function () {
	
	/*
	
	 //  w._mouseJoint = null //  w._mouseIsDown = false
	
	 w.mouseJoints()
	
	 $.touchstart(function(e){
	
	 w._mouseIsDown = true
	
	 recordMouseCoords(e)
	 $.touchmove(recordMouseCoords)
	 function recordMouseCoords(e){
	 var touch = e.originalEvent.touches[0]
	 mX = (touch.clientX-w.x)/30
	 mY = (touch.clientY-w.y)/30
	 }
	
	
	 }).touchend( function(){w._mouseIsDown = false})
	
	
	
	 setInterval(function(){//handleMouseJoints()
	 w.draw(1/60)
	 if(F(ops.cb)){ops.cb()}
	 w.stage.update()
	 }, 1000/60) */
}
w.S = function () {
	var w = this, g = G(arguments), bD, b, fs, k, o//,D=b2d.D


	if ( S(_.l(g)) ) { k = g.pop() }
	
	//here, we just have two options..
	// we can pass in x and y as numbers..
	// or as an object
	// the rest (non-position-related) args form an array of fixtures
	
	o = g.N_ ? {
		b: V(g.f, g.s),
		f: _.r(g, 2)
	} : {
		b: V(g.f),
		f: _.r(g)
	}
	o.b = b2d.S(o.b)
	if (k) {
		o.k = k
	}
	b = w.cB(o.b)
	if (g.n) {
		o.f.push('-')
	}
	b.f.apply(b, o.f)
	if (o.k) {
		b.K(o.k)
	}
	return b
	
}

function WSAlpha() {
	//array of multiple fixtures
	if (g.A) {//alert('see w.D'); $l('mult')
		_.e(o.f, function (f) {
			if (g.n) {
				b.f(f, '-')
			}
			else {
				b.f(f)
			}
		})
		if (o.k) {
			b.K(o.k)
		}
		return b
	}
}
//ab = b2d.AB(100 / 30, 100 / 30, 500 / 30, 500 / 30)
//FIXTURE CREATION
b.cF = function (fD) {return this.CreateFixture(fD)}
b.A = function (fD) {
	this.cF(fD);
	return this
}
fD.DBF = function (d, bo, fr) {
	this.d(N(d, 1))
	this.bo(N(bo, .9))
	this.fr(N(fr, .5))
	return this
}
b.sP = function (x, y) {
	var v = V(x, y)
	this.SetPosition(V(v.x / 30, v.y / 30))
	return this
}
 
 
 function spazzy(){
ADD = function () {
	W().P()
	b = w.brick().C('r')
	p = M.p(b)
	//v=p.vs()
	//p.reg(b)
	w.S(100, 0).pol('z', M.p(b))
	_.in(function () {
		// w.S(0,0).pol('y',v)
	})
	//v1= v.add(400,500)
}
 };spazzy()

  
SABB = function () {
	 w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	 _.ev(.1, function () {
		 w.go(1 / 5, '+')
	 })
	 cir = w.dB(220, 60)
	 cir.A($cir(60).DBF(1, .7, .4))
	 box = w.dB(300, 400)
	 box.A($rec(100, 100).DBF(1, .7, .4))
	 w.dB(500, 1000).A(
			 $rec(1200, 100)).stat()
 }
 
$dJt = function (a, b) {
	 var jd = new b2d.DistanceJointDef
	 jd.bodyA = a
	 jd.bodyB = b
	 return jd
 }
 
BOXDISTJOINT = BDJ = function () {
	 w = $bW().sDD($dD($.c('z', 1800, 1500))) //the_circle = new b2CircleDef()
	 _.ev(.1, function () {
		 w.go(1 / 5, '+')
	 })
	 w.dB(500, 1000).A($rec(1200, 100)).stat()
	 b = w.dB(210, 230)
	 b.A($cir(70).DBF(1, .3, .4))
	 r = w.dB(200, 60)
	 r.A($rec(100, 200))
	 r.den(1)
	 jd = $dJt(b, r)
	 w.CreateJoint(jd)
 }
ORBOX= function () {


	box(function(){
		//$l('step'+n)
	})
	
	
	cir = w.dB(320, 360).stat()
	cir.A($cir(60).DBF(1, .7, .4))
	
	cir.A(
	
			$rec(10, 500, 0,0,50)
			
	)
	
	
}