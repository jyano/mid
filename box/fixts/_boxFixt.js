$cH =  function (rad) {
	rad = rad || 25
	return new b2d.CircleShape(rad  / 30)
}
$pH =   function (wd, ht, xy, ang, ang2) {
	var pol = new b2d.PolygonShape()
	var g = G(arguments), wd = (g[0] || 100) / 60, ht = (g[1] || wd) / 60, xy = g[2], ang = g[3], ang2 = g[4]
	if (U(xy)) {pol.SetAsBox(wd, ht)}
	else if (N(xy)) {pol.SetAsOrientedBox(wd, ht, V(xy / 30, ang / 30), Math.toRadians(ang2 || 0))}
 	return pol
}


fD.H = function (h) {
	if (U(h)) {return this.shape}
	this.h = h
	return this
}
fD.de = function (de) {
	if (U(de)) {
		return this.density
	}
	this.density = de;
	return this
}
fD.fr = function (fric) {
	if (U(fric)) {
		return this.friction
	}
	this.friction = fric;
	return this
}
fD.re = function (rest) {
	if (U(rest)) {
		return this.restitution
	}
	this.restitution = rest;
	return this
}
 
f.B = f.body = f.gB = f.getBody = function () {
	return this.GetBody()
}
f.K = f.uD = function (data) {
	if (U(data)) {
		return this.GetUserData()
	}
	this.SetUserData(data);
	return this
}
f.is = function (kindOrFixt) {
	if (S(kindOrFixt)) {
		return this.K() == kindOrFixt
	}
	if (b2d.isFixt(kindOrFixt)) {
		return this == kindOrFixt
	}
	return false
}
f.of = function (what) {
	return this.is(what) || (this.B().K() == what)
	return false
}


 
f.remove = function () {
	this.B().destroyFixt(this)
}  
f.kill = function () {
	if (this.sprite) {
		this.sprite.remove()
	}
	this.remove();
	return
}
f.coll = function (what, func) {
	
 
	var that = this, beginFunc
	if (F(what)) {
		func = what
		func = _.bind(func, this)
		beginFunc = function (cx) {
		 
			if (cx.A() == that) {
				func(cx.B())
			}
		 
			if (cx.B() == that) {
				func(cx.A())
			}
		}
		w.begin(beginFunc)
		return this
	}
	func = _.bind(func, this)
	if (S(what)) {
		beginFunc = function (cx) {
			if (cx.A() == that && cx.B().of(what)) {
				func(cx.B())
			}
			if (cx.B() == that && cx.A().of(what)) {
				func(cx.A())
			}
		}
	}
	else if (b2d.isFixt(what)) {
		beginFunc = function (cx) {
			if (cx.A() == that && cx.B() == what) {
				func(cx.B())
			}
			if (cx.B() == that && cx.A() == what) {
				func(cx.A())
			}
		}
	}
	else if (b2d.isBody(what)) {
		
		 
		beginFunc = function (cx) {
			if (cx.A() == that && cx.b() == what) {
				func(cx.B())
			}
			if (cx.B() == that && cx.a() == what) {
				func(cx.A())
			}
		}
	}
	w.begin(beginFunc)
	return this
}
f.next = function () {
	return this.GetNext()
}
f.de = f.den = f.d = function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	return this
}
f.fr = f.fric = f.f = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.re = f.rest = f.r = function (rest) {
	if (U(rest)) {
		return this.GetRestitution()
	}
	this.SetRestitution(rest);
	return this
}
f.H =   function (shape) {
	if (U(shape)) {
		return this.GetShape()
	}
	this.m_shape = shape  
	return this
}


 
$fD =   function (shape) {
	var fixt = new b2d.Dynamics.b2FixtureDef()
	if (b2d.isShape(shape)) {
		fixt.shape = shape
	}
	return fixt
}


$rF =   function (wd, ht, xy, ang, ang2) {
	var g = G(arguments), fixt
	wd = g[0];
	ht = g[1];
	xy = g[2];
	ang = g[3];
	ang2 = g[4]
 
	wd = wd || 100
	ht = N(ht) ? ht : wd
	fixt = $fD(
			__polyShape = $pH(wd, ht, xy, ang, ang2)
	)
	
	fixt.density = 1    
	fixt.friction = .2
	fixt.restitution = .2
	if (g.n) {
		fixt.isSensor = true
	}
	return __fixt = fixt
}

 

$cF = function (rad, x, y) {
	 	 
	var g = G(arguments), fixt
	rad = g[0];
	x = g[1];
	y = g[2];
	rad = rad || M.r() + .1
	x = N(x) ? x : 0
	y = N(y) ? y : x
	var circle = $cH(rad)
	circle.SetLocalPosition(V(x, y, '-'))
	fixt = $fD(circle)  
	if (g.n) {fixt.isSensor = true}
	return fixt
}


b2d.isFixt = function (fixt) {
	if (!fixt) {
		return false
	}
	return fixt.constructor.name == "b2Fixture"
}
b2d.fixtParse = function (arr) {
	return _.map(arr, function (fixt) {
		var len
		if (!A(fixt)) {
			return fixt
		}
		if (fixt.isSensor) {
			b2d.polySens = function (kind) { 
				return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
			}
			return b2d.polySens.apply(null, fixt)
			return b2d.poly.apply(null, _.rest(arguments)).sensor(true).K(kind)
		}
		len = fixt.length
		if (len == 1) {
			return b2d.circ(fixt[0])
		}
		else if (len == 2) {
			return b2d.poly.apply(null, fixt)
		}
		else if (len == 3) {
			return b2d.circ.apply(null, fixt)
		}
		return b2d.poly.apply(null, fixt)
	})
}