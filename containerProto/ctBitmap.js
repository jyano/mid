ct.bm = function self(img, scale, func) {
	var that = this, args = G(arguments),
			img = args[0], scale = args[1], func = args[2], bm
	if (!N(scale)) {
		func = scale;
		scale = 1
	}
	if (O(img)) {
		bm = this.A(cjs.bitmap(img))
		return bm
	}
	$.img(img, function (image) {
		var bm = new cjs.Bitmap(image[0])
		bm.rCenter()
		bm.sXY(scale)
		bm.XY(that.W() / 2, that.H() / 2)
		if (args.n) {
			bm.XY(-1000)
		}
		that.addChild(bm);
		if (func) {
			func(bm)
		}
	})
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
ct.Bm = function () {
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
ct.bm = function () {
	var ct = this, g = G(arguments), o, bm
	o = g.F_ ? {fn: g.s, sc: g.s} :
			g.N_ ? {sc: g.f, fn: g.s} :
					_.x({i: g.f},
							N(g.s) ? {sc: g.s, fn: g.t} :
							{fn: g.s, sc: g.t})
	//fn,sc  //sc,fn //i,sc,fn  //i,fn,sc
	o.sc = o.sc || 1;
	o.i = o.i || 'me';
	o.al = N(o.al, 1)
	o.fn = o.fn || function () {
	}
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		o.fn($Bm(o.i).a2(ct))
		return ct
	}
	$.i(o.i, function (i) {
		bm = $Bm(i).a2(ct).sXY(o.sc)
		if (!g.n) {
			bm.rC()
		}
		//if (g.p) {bm.drag()}; if (g.d) {bm.XY(-1000)}
		o.fn(bm)
	})
	return ct
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
ct.bm = function self(img, scale, func) {
	var that = this, args = G(arguments),
			img = args[0], scale = args[1], func = args[2], bm
	if (!N(scale)) {
		func = scale;
		scale = 1
	}
	if (O(img)) {
		bm = this.A(cjs.bitmap(img))
		return bm
	}
	$.img(img, function (image) {
		var bm = new cjs.Bitmap(image[0])
		bm.rCenter()
		bm.sXY(scale)
		bm.XY(that.W() / 2, that.H() / 2)
		if (args.n) {
			bm.XY(-1000)
		}
		that.addChild(bm);
		if (func) {
			func(bm)
		}
	})
	return this
}
ct.bm = function self(img, scale, func) {
	var that = this, args = G(arguments),
			img = args[0], scale = args[1], func = args[2], bm
	if (!N(scale)) {
		func = scale;
		scale = 1
	}
	if (O(img)) {
		bm = this.A(cjs.bitmap(img))
		return bm
	}
	$.img(img, function (image) {
		var bm = new cjs.Bitmap(image[0])
		bm.rCenter()
		bm.sXY(scale)
		//bm.XY( that.W()/2, that.H()/2 )  //works with stage i guess.. but fucks with 'container' - cant check bounds
		if (args.n) {
			bm.XY(-1000)
		}
		that.addChild(bm);
		if (func) {
			func(bm)
		}
	})
	return this
}
ct.bm = function () {
	var ct = this, g = G(arguments), o, bm
	o = g.F_ ? {fn: g.s, sc: g.s} :
			g.N_ ? {sc: g.f, fn: g.s} :
					_.x({i: g.f},
							N(g.s) ? {sc: g.s, fn: g.t} :
							{fn: g.s, sc: g.t})
	//fn,sc  //sc,fn //i,sc,fn  //i,fn,sc
	o.sc = o.sc || 1;
	o.i = o.i || 'me';
	o.al = N(o.al, 1)
	o.fn = o.fn || function () {
	}
	if (_.iDU(o.i)) {
		o.i = $.i(o.i)
	}
	if (O(o.i)) {
		o.fn($Bm(o.i).a2(ct))
		return ct
	}
	$.i(o.i, function (i) {
		bm = $Bm(i).a2(ct).sXY(o.sc)
		if (!g.n) {
			bm.rC()
		}
		//if (g.p) {bm.drag()}; if (g.d) {bm.XY(-1000)}
		o.fn(bm)
	})
	return ct
}
ct.Bm = function () {
	this.bm.apply(this, arguments)
	return this
}