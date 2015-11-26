w.wed = function () {
	var w = this, g = G(arguments)
	b2d.wed = function (a, b, ancA, ancB, ang, c, d) {
		
		// can set 2 local anchor points and a reference angle
		b2d.WeldJointDef = b2d.Joints.b2WeldJointDef
		var g = G(arguments),
				jd = new b2d.WeldJointDef()
		o = {a: a, b: b}
		jd.bodyA = o.a
		jd.bodyB = o.b
		if (N(g[2])) {
			o.ancA = V(g[2], g[3])
			o.ancB = V(g[4], g[5])
			o.ang = g[6]
			return jd
		}
		if (g[2]) {
			jd.localAnchorA = o.ancA.div()
		}
		if (o.ancB) {
			jd.localAnchorB = o.ancB.div()
		}
		if (N(o.ang)) {// use ang to set a 'referenceAngle'
			jd.referenceAngle = M.tR(o.ang)
		}
		return jd
	}
	return w.J(
			b2d.wed.apply(null, g))
}

b.dX = function (b1) {
	return this.X() - b1.X()
}

b.glu = function (b1) {
	var b = this, w = b.W()
	return w.wed(b, b1, -b.dX(b1), -b.Y(b1))
}

j.form = function () {
	var j = this, w = j.W(), a = j.A(), b = j.B()
	if (j.T() == 8) {
		$l('J.T()==8:COMMENCE WEDDING ' + (n++))
		return w.wed(a, b)
	}
}
WED = function () {
	W([1500, 1000], {g: 0})
	w.wed(
			w.D(300, 300, 'r', 130),
			w.D(300, 650, 'b', 130, 400)
	)
	w.wed(w.S(200, 100, 'x', 30),
			w.D(200, 100, 'v', 30), 0, 10)
	w.wed(w.S(300, 100, 'l', 30),
			w.D(300, 200, 'x', 30), 0, -10)
	w.wed(w.S(400, 100, 'g', 30),
			w.D(400, 300, 'x', 30), 10, 10)
	w.wed(w.S(500, 100, 'x', 30), w.D(500, 100, 'v', 30), 10, -10)
	w.wed(w.S(600, 100, 'x', 30), w.D(600, 100, 'v', 30), 10, -20)
	w.wed(w.S(700, 100, 'x', 30), w.D(700, 100, 'v', 30), 10, -30)
	w.wed(w.S(800, 100, 'x', 30), w.D(800, 100, 'v', 30), -10, -40)
	w.wed(w.S(900, 100, 'x', 30), w.D(900, 100, 'v', 30), -10, -50)
	/*
	 w.wed(w.S(100,200,'x',30), w.S(100,200,'v',30),0,0)
	 w.wed(w.S(200,200,'x',30), w.S(200,200,'v',30),0,10)
	 w.wed(w.S(300,200,'x',30), w.S(300,200,'v',30),0,-10)
	 w.wed(w.S(400,200,'x',30), w.S(400,200,'v',30),10,10)
	 w.wed(w.S(500,200,'x',30), w.S(500,200,'v',30),10,-10)
	 w.wed(w.S(600,200,'x',30), w.S(600,200,'v',30),10,-20)
	 w.wed(w.S(700,200,'x',30), w.S(700,200,'v',30),10,-30)
	 w.wed(w.S(800,200,'x',30), w.S(800,200,'v',30),-10,-40)
	 w.wed(w.S(900,200,'x',30), w.S(900,200,'v',30),-10,-50)
	
	 w.wed(w.D(100,500,'x',30), w.S(100,500,'v',30),0,0)
	
	 w.wed( w.D(200,500,'x',30), w.S(200,500,'v',30) )
	
	
	 w.wed(
	 w.D(300,500, 'o', 30),
	 w.D(300,500,'g', 50,50),
	
	 V(0,-10)
	 )
	
	 w.wed(w.D(400,500,'x',30), w.S(400,500,'v',30), V(10,10))
	 w.wed(w.D(500,500,'x',30), w.S(500,500,'v',30),V(10,-10))
	 w.wed(w.D(600,500,'x',30), w.S(600,500,'v',30),10,-20)
	 w.wed(w.D(700,500,'x',30), w.S(700,500,'v',30),10,-30)
	 w.wed(w.D(800,500,'x',30), w.S(800,500,'v',30),-10,-40)
	 w.wed(w.D(900,500,'x',30), w.S(900,500,'v',30),-10,-50)
	 */
}
JOINTTRANSLATION = JTT=function () {
	W({g: 300}).P()
	p.XY(100, 550).track()
	j = w.pJ(
			w.S(400, 200, 's', 140, 240).K('cart'),
			w.D(200, 100, 'b', 40, 40).K('ride')
	)
	j.tran = function () {
		return this.GetJointTranslation() * 30
	}
}
b.jointList= b.jtLs=b.j = function () {
	return this.GetJointList()
}

