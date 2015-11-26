//linVelFromWorPt()
b.lVW = function () {
	var b = this, g = G(arguments);
	return b.GetLinearVelocityFromWorldPoint(V(g.f, g.s))
}   // return  b.GetLinearVelocityFromWorldPoint(V(g.f, g.s).d()).m()
LVW = function () {
	W([2000, 1500, 2000, 1500]).G(200).C('b');
	var b1, b2
	// y and remote control fireball
	var y = w.y(300, 100, '+')
	farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
	nearMoon = w.D(400, 200, 'y', 100)
	T.t(function () {
		var lV = y.lVW(y.X(), y.Y()).mult(20)
		nearMoon.lV(lV.x, lV.y)
	})
	p = w.p(900, 400).cn('jump').cl(_.mo(function () {
		w.D(300, 100, 'r', 5)
	}))
	sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
	sun.cl(function (f, cx) {
		var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
		w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
	})
}
//////////
cx.with = cx.includesBetween = cx.w = function () {
	var cx = this, g = G(arguments)
	// (k/o)  : (k/o,  fn)  //  (k/o,  k1/o)  :   (k/o,k1/o, fn)
	//if you have a second pam,, but its not a function
	
	cx.includes=cx.ic = function () {
		var cx = this, g = G(arguments)
		/* protosig
		 //     str    :  str,fn   :   obj   :   obj,fn
		
		 w.b(function(cx){
		 cx.ic(fisherman1, function(fish){this.eat(fish.B( ))  })
		 var oneWasFisherman1 = cx.ic(fisherman1); if(oneWasFisherman1){$l('the fish is: '+Fisherman1[1])}
		 cx.ic('fish', function(fisherman){  this.swimTo( fisherman.B( ))  })
		 var oneWasFish = cx.ic('fish'); if(oneWasFish){$l('the fish is: '+oneWasFish[0])}
		 })
		 */
		if (F(g.s)) {
			if (cx.A().of(g.f)) {
				_.b(g.s, cx.A())(cx.B(), cx)
			}
			else if (cx.B().of(g.f)) {
				_.b(g.s, cx.B())(cx.A(), cx)
			}
			return cx
		}
		//if this fixture 'of' that string(kind),fixt,or body
		//if so always passed back an array with the first mentioned selector in the [0] pos
		return cx.A().of(g.f) ? [cx.A(), cx.B()] :
				cx.B().of(g.f) ? [cx.B(), cx.A()] :
						false
		//if fixA is 'of' k, then run fn with fixA as 'this' and pass in fixB, cx
	}
	
	cx.between = cx.bw = function () {
		var cx = this,
				g = G(arguments),
		// bw(k,k1)  or  bw(k,k1,fn)
				a = cx.A(), b = cx.B()
		if (F(g.t)) {
			if (a.of(g.f) && b.of(g.s)) {
				g.t.apply(a, [b, cx])
			}
			else if (b.of(g.f) && a.of(g.s)) {
				g.t.apply(b, [a, cx])
			}
			return cx
		}
		return cx.A().of(g.f) && cx.B().of(g.s) ? [cx.A(), cx.B(), cx] : cx.B().of(g.f) && cx.A().of(g.s) ? [cx.B(), cx.A(), cx] : false
	}
	
	return g.s && !F(g.s) ?
			cx.bw(g.f, g.s, g.t) :
			cx.ic(g.f, g.s)
}
cx.worMan=cx.getWorMan = cx.getWorFold=cx.m = function () {
	var cx = this, m = new b2d.Collision.b2WorldManifold
	cx.GetWorldManifold(m);
	return m
}

cx.pt = cx.cen = function () {
	return V(this.pX(), this.pY())
}
cx.pX = function () {
	return parseInt(this.m().m_points[0].m().x)
}

cx.pY = function () {

	return parseInt(this.m().m_points[0].m().y)
}

cx.lP = function (b) {
	return b.lP(  this.pX(), this.pY()  )
}

cx.norm=cx.n = function (n) {
	return this.m().m_normal.toFixed(2).m(N(n, 1))
}

cx.normX=cx.nX = function (n) {
	return this.n(n).x
}

cx.normY=cx.nY = function (n) {
	return this.n(n).y
}

w.tanFuture=cx.t = function () {
}//what about tangent?
//presolve

cx.setEn=cx.setEnab=cx.e = cx.en = function (a) {
	var cx = this
	if (U(a)) {
		return cx.IsEnabled()
	}
	cx.SetEnabled(a ? true : false);
	return cx
}

////
cx.getNx=cx.N = function () {
	return this.GetNext()
}

cx.getMan=cx.getFold=cx.ty = cx.T = function () {
	return this.GetManifold().m_type
}
////

cx.getFxtA=cx.A = function () {return this.GetFixtureA()}


cx.getFxtB=cx.B = function () {return this.GetFixtureB()}
cx.getBodA=cx.a = function () {return this.A().B()}
cx.getBodB=cx.b = function () {return this.B().B()}
//////
cx.isCont=cx.isContin= cx.c = cx.cont = cx.continuous = cx.iC = function () {
	var cx = this
	return cx.IsContinuous()
} //Does this contact generate TOI events for continuous simulation
cx.isSen=cx.iS = cx.s = cx.sen = function () {
	var cx = this, g = G(arguments)
	if (g.u) {
		return cx.IsSensor()
	}
	cx.SetSensor(g.f ? true : false)
	return cx
}
cx.isTouch=cx.doesTouch=cx.iT = cx.tch = cx.touching = cx.iT = function () {
	return this.IsTouching()
}

PRESOLVE = function () {
	W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
	var b1, b2
	plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
	pf = plat(900, 1700)
	// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
	function plat(x, y) {
		var g = G(arguments)
		if (g.O_) {
			g.e(function (g) {
				plat(g[0], g[1])
			});
			return
		}
		return w.S(x, y, 'o', 500, 40).K('pf')
	}
	
	p.K('p').tr()//.cl(_.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
	p.cl(w._t, //when player coll roof,
			function () {
				w.C('z');
				w.G(1000)
			})
	//one way wall
	w.pre('pf', function (f, cx) {
		if (p.Y() - this.B().Y() > 10) {
			cx.en(0)
		}
	})
}
//point:
CXPT = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
LCXPT = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
PAINTBALL = function () {
	W().randRects().Y() //only works on NON-sensors?
	y.stat()
	w.y(100, 100)
	w.b(function (cx) {
		w.i.dot($r(), cx.pt().x, cx.pt().y)
	})
}
BUB = SPRINK = BUBBLEPOP = function () {
	W({W: 2000, g: 0}).Y();
	_.t(10, function () {
		w.D(800, 200, 'r', 20).K('r')
	})
	w.S(50, 550, 'o', 200);  //w.S(800,300,'z', 80)
	b = w.S(300, 0, 'o', 200, 300).K('r')
	r = w.D(300, 300, 'r', 80).K('b')
	// dot both upper and lower bounds of AABB of both fixts
	w.cl(function (f, cx) {
		var ab, lb, up
		ab = f.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		ab = this.GetAABB();
		lb = ab.lowerBound;
		ub = ab.upperBound
		w.i.dot('w', ub.x * 30, ub.y * 30);
		w.dot('p', lb.x * 30, lb.y * 30)
		f.dot('g')
		this.dot('r')   //dot center of both fixts
		w.i.dot('y', M.lC(f.cen(), this.cen()))   //dot center of their centers
		cx.w(b, col)
		cx.w('b', 'r', col);
		cx.w(b, r, col);
		cx.w('b', r, col)
	})
	w.end(function (cx) {
		cx.w('b', col)
	})
	function col(f) {
		this.C($r())
	}
	
	//2do:draw line to connect these pts..
	// w.chalk('center of the two fixtures not necessarily  same as the cX pt. (can only represent col center if fSs are sSAME size... maybe halfway btwen this and the actual contact point would be nice')
}  //M.lC is not a function

BRUISE = CORNERBATTLE = function () {
	W([3000, 1000], {g: 0, t: 0})
	//<- var lP=cx.lP(b) //b.lP( cx.pX(), cx.pY() )
	w.p()
	w.p()
	w.p()
	w.p()
	w.p()
	
	b = w.D(300, 400, 'b', 200, 200).cn('thrust').K('sqr')
	
	b.bS('sun')
	 
	
	
	r = w.D(300, 400, 'r', 200, 200).cn('thrust').K('sqr')
	
	
	b.SetBullet(true)
	w.b(function (cx) {
		cx.w(
				'sqr',
				function () {
					if (!cx.w('bruise')) {
						b.cir({c: 'z', r: 15, x: cx.lP(b).x, y: cx.lP(b).y})
								.K('bruise')
					}
				}
		)
	})
	CRAZY = function () {
		W({g: 0}).randRects();
		b = w.D(300, 400, 'r', 200, 200).cn('thrust')
		w.b(function (cx) {
			w.dot($r(), cx.p())
			lP = b.lP(cx.p())
			b.cir({c: 'z', r: 15, x: lP.x, y: lP.y})
		})
	}
}
function collide() {
	FIXROT = JUMP = CEN = LVW = SMASH = function () {
		W([2000, 1500, 2000, 1500]).G(200).C('b');
		var b1, b2
		// y and remote control fireball
		var y = w.y(300, 100, '+')
		farMoon = w.D(600, 100, 'y', 150).K('b').r(1.2).lV(200, 0).cn('thrust').fR()
		nearMoon = w.D(400, 200, 'y', 100)
		T.t(function () {
			var lV = y.lVW(y.X(), y.Y()).mult(20)
			nearMoon.lV(lV.x, lV.y)
		})
		p = w.p(900, 400).cn('jump').cl(_.m(function () {
			w.D(300, 100, 'r', 5)
		}))
		sun = r1 = w.S(600, 300, 'r', 30, '-').K('r').bS('sun')
		sun.cl(function (f, cx) {
			var pt = cx.cen(), v1 = b.lVW(pt), v2 = r1.lVW(pt)
			w.D(630, 350, 'r', 10).I(v1.x - v2.x, v1.y - v2.y)
		})
	}
	PLAT = DOODLE = function () {
		W([1200, 600, 1200, 2000], {g: -1000}).stats().P(600, 1800)
		var b1, b2
		plat([300, 300], [900, 600], [300, 900], [300, 1000], [1000, 1200], [500, 1400])
		pf = plat(900, 1700)
		// PreSolve
// gives us a chance to change the characteristics of the contact
// before the collision response is calculated,
// or even to cancel the response altogether,
//  Here are the alterations you can make to the contact in PreSolve:
//  cx.SetFriction( friction)  // persists for duration of contact
//  cx.SetRestitution(  restitution)   //persists for duration of contact
//  cx.SetEnabled( false )//SetEnabled(bool flag); //non-persistent - need to set every time step
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
// It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
// The contact is only disabled for the current time step
// (or sub-step in continuous collision).
		function plat(x, y) {
			var g = G(arguments)
			if (g.O_) {
				g.e(function (g) {
					plat(g[0], g[1])
				});
				return
			}
			return w.S(x, y, 'o', 500, 40).K('pf')
		}
		
		p.K('p').tr()//.cl($.mo(function(){w.D(p.X(), p.Y()-150,'w',5,5,0,0,45)}))
		p.cl(w._t, //when player coll roof,
				function () {
					w.C('z');
					w.G(1000)
				})
		//one way wall
		w.pre('pf', function (f, cx) {
			if (p.Y() - this.B().Y() > 10) {
				cx.en(0)
			}
		})
	}
}