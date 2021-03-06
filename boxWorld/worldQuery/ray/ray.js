w.ray = function () {
	var w = this, g = G(arguments), o, arr
	o = g.S_ ? {k: g.f, x: g.s, y: g.t, x1: g[3], y1: g[4], fn: g[5]} : {
		x: g.f,
		y: g.s,
		x1: g.t,
		y1: g[3],
		fn: g[4]
	}
	arr = [];
	w.RayCast(function (f) {
		if (f.of(o.k)) {
			arr.push(f)
		}
	}, V(o.x, o.y, '-'), V(o.x1, o.y1, '-'))
	if (!o.fn) {
		return arr
	}
	if (g.p) {
		o.fn(_.f(arr))
	}
	else if (g.n) {
		o.fn(_.l(arr))
	}
	else {
		_.e(arr, function (f) {
			o.fn(f)
		})
	}
	return w  //2do: use 'G' to scrape off 'k' manually (g = w.G('k', arguments)
}
w.rC1 = function () {
	var w = this
	w.RayCastOne
}
w.rCA = function () {
	var w = this
	w.RayCastAll
}
w.rC = function (fn, v1, v2) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
w._rC = function (v1, v2, fn) {
	var w = this
	return w.RayCast(fn, V(v1).div(), V(v2).div())
}
//// ray
f.rC = function () {
	var inp, res
	i = inp = new b2d.Collision.b2RayCastInput(V(0, 0, '-'), V(430, 450, '-'))
	res = this.RayCast(inp)
	return res
}
b2d.Seg = function (x, y, x1, y1) {
	seg = new b2d.Collision.b2Segment(V(x, y), V(x1, y1))
	return seg
}
b2d.rCIp = function (x, y, x1, y1, maxFrac) {
	maxFrac = N(maxFrac, 1)
	return new b2d.Collision.b2RayCastInput(V(x, y, '-'), V(x1, y1, '-'), maxFrac)
}
b2d.rCOp = function (nX, nY, maxFrac) {
	maxFrac = N(maxFrac, 1)
	op = new b2d.Collision.b2RayCastOutput(
			maxFrac, V(nX, nY)
	)
	op.maxFraction = 1
	return op
}
 
IMP = function () {
	W({g: 0, w: 0}).Y()
	
	// y.rt(90).XY(200,240)
	w.D(200, 235, 'b', 10).lV(20, 0).d(10)
	w.D(900, 200, 'r', 100, 100).rt(45)
	r = w.D(1100, 500, 'r', [[80], [20, 300]]).d(.1)
	r.$(function () {
		this.B().I(100, -2000)
	})
	f = r.f()
	w.i.dot(856, 240)
	/*
	 s = b2d.Seg(0,0,1200, 600)
	 s1 = b2d.Seg(1200,0, 0, 600)
	 lArr =  'the shape world transform'
	 nl = '2Vec2 — returns the hit fraction.'
	 // You can use this to compute the contact point
	 // p = (1 - lambda) segment.p1 + lambda segment.p2.
	 sg = ''//segment:b2Segment — returns the normal at the contact point. If there is no intersection, the normal is not set.
	 maxLam = 1000000//:Number — defines the begin and end point of the ray cast.
	 s.TestSegment(lArr, nl, s1, maxLam )
	 */
	ip = b2d.rCIp(0, 0, 1200, 600)

//	op = b2d.rCOp(1, 2)

//	res = f.rC(op, ip)
}

RAY = function () {
	W().C('z')
	w.S(200, 200, 'f', 100);
	w.S(500, 500, 'l', 160, 60)
	rs = w.ray(0, 0, 800, 800)
	_.in(function () {
		w.ray(0, 0, 500, 500, function (f) {
			f.C('g')
		})
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('me')
		}, '-')
		w.ray(0, 0, 500, 500, function (f) {
			f.B().bS('sun')
		}, '+')
	})
}
RC = function () {
	W();
	var p1, p2, d, l
	w.me(400, 100);
	w.S(200, 200, 'r', 400, 20)
	w.$(function (v) {
		if (!p1) {
			p1 = v;
			return
		}
		if (!p2) {
			p2 = v
		} else {
			p1 = p2;
			p2 = v
		}
		w.i.e(function (c) {
			if (c.of('dot') || c.of('line')) {
				c.rm()
			}
			// if( c.K() == 'dot' || c.K()=='line' ){c.rm()}
		})
		w.d('b', p1);
		w.d('r', p2);
		w.l(p1.x, p1.y, p2.x, p2.y).K('line')
		w.rC(function (f) {
			f.B().dot()
		}, p1, p2)
	})
}
 