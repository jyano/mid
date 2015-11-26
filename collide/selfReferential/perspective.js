b.gL=b.g2L= b.lcPt=b.locPt= b.localPt = b.lP = function (x, y) {
	return this.GetLocalPoint(  V(x, y, '-')  ).m()
}
b.gLVFLP= b.GetLinearVelocityFromLocalPoint
b.wayYouAppearToBePointingOnTheScreen = b.rtDir=b.lVFLcPt=b.linVelFromLocPt= b.lVL = function (x, y) {
	return this.gLVFLP( V(x, y).div() ).mult().dec(2)
//i think this is your rotation direction?
// the way you appear to be pointing on the screen
}
w.when = w.wn = function () {
	var w = this, g = G(arguments), o
	o = F(g[0]) ? {b: g[0], e: g[1]}
			: F(g[1]) ? {k: g[0], b: g[1], e: g[2]}
			: {k: g[0], k2: g[1], b: g[2], e: g[3]}
	
	
	//when b,[e]  k,b,[e]  k,k2,b,[e]
	if (o.k2) {
		w.b(o.k, o.k2, o.b);
		if (o.e) {
			w.end(o.k, o.k2, o.e)
		}
	}
	
	else if (o.k) {
		w.b(o.k, o.b);
		if (o.e) {
			w.end(o.k, o.e)
		}
	}
	
	
	else {
		w.b(o.b);
		if (o.e) {
			w.end(o.e)
		}
	}
	
	return w
}
w.while =w.wl = function (k, k2, fn) {
	var w = this, push
	if (F(fn)) {
		w.wn(k, k2,
				function () {
					push = true
				},
				function () {
					push = false
				})
		T.t(function () {
			if (push) {
				fn()
			}
		})
	}
	else if (F(k2)) {
		w.wn(k, function () {
			push = true
		}, function () {
			push = false
		});
		T.t(function () {
			if (push) {
				k2()
			}
		})
	}
	return w
}
b.while = b.wl = function (k, fn) {
	var b = this, w = b.W()
	w.wl(b, k, fn)
	return b
}
b.when = b.wn = function (k, oB, oE) {
	var b = this,
			w = b.W()
	w.wn(b, k, oB, oE)
	return b
}
b.whenFxt= b.bindFxt = b.bindMyFxt= b.bindMyFxtWhen=b.my = function (k, fn) {
	var b = this, w = b.W()
//my: to specify a sp body on what to do when one of its own fixts of a certain k has a col
	if (F(fn)) {
		w.b(function (cx) {
			cx.w(b,
					function (f) {
						if (this.of(k)) {
							_.b(fn, this)(f, cx)
						}
					})
		})
	}
	else {
		w.wn(b,
				function () {
					b.my[k] = 1
				},
				function () {
					b.my[k] = 0
				})
	}
	return b
}
f.sp = function () {return this.sprites[0]}
f.al = function (al) {
	var sp = this.sp()
	if (sp) {sp.al( N(al,.8) )}
	return this
}

VORTEX1=function(){W([1200, 800], {g: 8}).Y()

	
	vor = w.S(600, 200)
	
	cir = vor.cir({s: 1, c: 'z', r: 140, C: 'z', l: 20})
	
	cir.sp().al(.5)

	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})

	y.wl(vor, function () {
	
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	
	})

}
MES=FEET = function(){W()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () {
			this.lV(-2, -10)
		})
		w.me(700, 100, 5).fR().my('feet', function () {
			this.lV(2, -10)
		})
	})
}
TETHER1 = function () {
	W([1200, 800], {g: 8}).Y()
//w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
 
	//  w.D(500, 200, 'z',30).K('z'); w.wn('z', function () {$l('beg')}, function () {$l('end')})
	b = w.D(100, 100, 'b', 40).warp()
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	w.S(1000, 200).cir({r: 300, c: 'w', C: 'o', l: 10, o: 0.2, s: 1}).K('vor')
	y.warp()
			.wl('vor', function () {
				b.vY(-20)
			})
			.wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
 }
PLAT1 = function () {
 	 w.plat(400,500,40,20).K('pf').cl('x', function(){w.D(50,100,'x',60,60).K('x').warp()})
	 w.D(440,100,'y',50).K('ball'); w.cl('ball', function(cx){this.B().dot() })
}
w.ledge = function () {
	var w = this
	w.S(200, 250, 'r', 400, 20);
	w.S(400, 250, 'w', 20, 40)
	_.t(10, function () {
		w.D(100, 100, 'z', 10).K('ball')
		w.D(200, 100, 'w', 10)
	})
	return this
}
VORTEX = LEDGE =  function () {
	W([1200, 800], {g: 8}).Y()
	
	vor = w.S(600, 200)
	
	vor.cir({s: 1, c: 'z', r: 140, o: .2, C: 'z', l: 20})
	
	w.ledge()
	

 
	
	y.wl(vor, function () {
		w.e('ball', function (b) {
			b.tow(600, 200)
		})
	
	}).warp().wl('vor', function () {
				b.vY(-20)
			}).wn('vor', function () {
				x.vY(-20)
			}, function () {
				w.C($r())
			})
			
}
DIVEBALL = DOT = PLAT=function(){W()
	 w.plat(400,500,40,20).K('pf').cl('x', function(){w.D(50,100,'x',60,60).K('x').warp()})
 w.D(440,100,'y',50).K('ball'); w.cl('ball', function(cx){this.B().dot() })


}

SPETHER = ALPHA =  WARPBALL = WARP = OPACITY = CLOUD =  function(){
	W([1200, 800], {g: 8, w:'='}).Y()
	w.y().warp()
	b = w.D(100, 100, 'b', 40).warp()
	_.t(3, function () {
		w.me(900, 100, 5).fR().my('feet', function () { this.lV(-2, -10) })
		w.me(700, 100, 5).fR().my('feet', function () { this.lV(2, -10) })
	})
	 w.chalk('box goes up on coll with vortex, and right AFTER', 'ball goes up with continued pressure')
	w.D(500, 200, 'z',30).K('z'); 
	w.wn('z', function () {$l('beg')}, function () {$l('end')})
	x = w.D(50, 100, 'x', 60, 60).K('x').warp()
	b = w.S(1000, 200)
	b.cir({r: 300, c: 'w', C: 'o', l: 10, al: 0.2, s: 1}).K('vor')
	b.f().sprites[0].al(.8)
}
WCIR = WBALL = WCIRC = ALPHA = MY = function () {
	W()
// could i automatically have body listen to their sens?
	w.ball().r(.3)
	workingGoomba = p = w.p(900, 450).cn('jump')
	p.my('hat', function () {
		p.bS('guy')
	})
	p.my('right');
	p.my('left')
	$.space(function () {
		if (p.my.right) {
			p.I(100, -400)
		}
		if (p.my.left) {
			p.I(-100, -400)
		}
	})
}
 