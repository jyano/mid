ct.bm = ct.b = function () {
	var ct = this, g = G(arguments), o, bm
	o = N(g.s) ? {i: g.f, sc: g.s, fn: g.t} :
			N(g.f) ? {sc: g.f, fn: g.s} :
			{i: g.f, fn: g.s}
	o.sc = N(o.sc, 1)
	o.i = o.i || 'me';
	o.al = N(o.al, 1)
	if (O(o.i)) {
		bm = ct.A(_$Bm(o.i))
		return bm
	}
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		o.fn($Bm(o.i).a2(ct))
		return ct
	}
	$.i(o.i, function (i) {
		var bm = _$Bm(i).a2(ct).scXY(o.sc)
		bm.rCenter()//if (!g.n) {bm.rC()}
		//bm.XY( ct.W()/2, ct.H()/2 )
		//works with stage i guess.. but fucks with 'container' - cant check bounds
		bm.XY(ct.W() / 2, ct.H() / 2)
		if (g.n) {
			bm.XY(-1000)
		}
		if (g.p) {
			bm.drag()
		}
		if (o.fn) {
			o.fn(bm, ct)
		}
	})
	return ct
}

ct.aBm = ct.Bm = function () {
	this.bm.apply(this, arguments)
	return this
}

ct.bmRegCenterX = ct.bm0X = function (img, func) {
	var that = this
	$.img(img, function (image) {
		var bm = new cjs.Bitmap(image[0])
		bm.regX = bm.W() / 2
		bm.regY = bm.H() / 2
		that.addChild(bm);
		if (func) {
			func(bm)
		}
	})
	return this
}
ct.qB = ct.bQ = function (name, x, y, sX, sY, rt) {
	var b, g = G(arguments)
	b = Q.b(name)
			.XY(N(x, 0), N(y, 0))
			.sXY(N(sX, 1), N(sY, sX || 1))
			.rt(N(rt, 0))
	if (!g.n) {
		b.rC()
	}
	if (g.p) {
		b.drag()
	}
	this.A(b);
	return b
}
