_superCanvasPath = function (el) {

	el.f = el.fS = el.fs = el.fill = function (c) {
		if (U(c)) {
			el.context.fill()
		}
		else {
			el.context.fillStyle = oO('c', c)
		}
		return el
	}
	el.s = el.stroke = el.sS = function (c) {
		var el = this
		if (U(c)) {
			el.context.stroke()
		}
		else {
			el.context.strokeStyle = oO('c', c)
		}
		return el
	}//ss
	el.fsl = function (fS, sS, l) {
		this.context.f(fS)
		if (sS) {
			this.context.s(sS)
		}
		if (N(l)) {
			this.context.l(l)
		}
		return this
	}
	el.cP = el.closePath = function () {
		el.context.closePath()
		return el
	}
	el.bP = el.beginPath = el.begin = function (x, y) {
		el.context.beginPath()
		if (N(x)) {
			el.moveTo(x, y)
		}
		if (A(x)) {
			el.moveTo(x[0], x[1])
		}
		return el
	}
	el.mT = el.moveTo = function (x, y) {
		el.context.moveTo(x, y)
		return el
	}
	el.lT = el.lineTo = function (x, y) {
		if (A(x)) {
			_.e(arguments,
					function (x) {
						el.lineTo(x[0], x[1])
					})
		}
		el.context.lineTo(x, y)
		return el
	}
	el.cl = el.clip = function () {
		el.context.clip()
		return el
	}
	el.fR = el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.fillRect(a, b, c, d)
		return this
	}
	el.fillRect = el.fr = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		this.context.fillRect(a, b, c, d)
		return this
	}
	el.colorFillRect = el.cfr = function (a) {
		var args = G(arguments)
		this.save()
		this.fillStyle = a
		this.fillRect(0, 0, this.W(), this.H())
		this.restore()
		return this
	}
	el.roundRect = function (X, y, width, height, radius) {
		el = this.context
		el.beginPath()
		el.moveTo(X + radius, y);
		el.lineTo(X + width - radius, y);
		el.quadraticCurveTo(X + width, y, X + width, y + radius);
		el.lineTo(X + width, y + height - radius);
		el.quadraticCurveTo(X + width, y + height, X + width - radius, y + height);
		el.lineTo(X + radius, y + height);
		el.quadraticCurveTo(X, y + height, X, y + height - radius);
		el.lineTo(X, y + radius);
		el.quadraticCurveTo(X, y, X + radius, y);
		el.closePath();
		el.fill()
		return el
	}
	el.roundRect.test = function () {
		el.roundRect(100, 100, 200, 400, 20)
	}
	//clear screen [+ fill with color || run fx]
	el.clr = el.clear = el.clearRect = function (a, b, c, d) {
		if (S(a)) {
			el.fillStyle(a);
			return el.fillRect()
		}
		a = a || 0
		b = b || 0
		c = c || el.W()
		d = d || el.H()
		el.context.clearRect(a, b, c, d)
		// if(F(a)){a()}
		return el
	}
	el.hL = el.horizontalLine = el.lnh = function (X, Y, l) {
		var g = G(arguments), X = g[0], Y = g[1], l = g[2],
				X2 = g.p ? X + l : g.n ? X - l : l
		return x.ln(X, Y, X2, Y)
	}
	el.vL = el.verticalLine = el.lnv = function (X, Y, len) {
		var g = G(arguments),
				X = g[0],
				Y = g[1],
				len = g[2],
				Y2 = g.p ? Y + len
						: g.n ? Y - len
						: len
		return x.ln(X, Y, X, Y2)
	}
	curves(el);
	drawLine(el);
	
	return el
}

function curves(el) {
	el.arc = function (a, b, c, d, e, f, g) {
		el.context.arc(a, b, c, d, e, f, g)
		return el
	}
	el.arcTo = el.a2 = function a2(X) {
		var g = G(arguments)
		if (A(X)) {
			return _a(a2(x), X)
		}
		this.arcTox([0] || 50, g[1] || 40, g[2] || 100, g[3] || 100, g[4] || 30)
		this.stroke()
		return this
	}
	el.bezierCurveTo = function (a, b, c, d, e, f, g) {
		this.context.quadraticCurveTo(a, b, c, d, e, f, g)
		return this
	}
	el.quadraticCurveTo = function (a, b, c, d, e, f, g) {
		this.context.quadraticCurveTo(a, b, c, d, e, f, g)
		return el
	}
	el.curveTo = function (a, b, c, d, e, f, g) {
		if (N(e)) {
			return this.bezierCurveTo(a, b, c, d, e, f)
		}
		else return this.quadraticCurveTo(a, b, c, d, e, f, g)
	}
	el.cir = function (X, Y, R, fs, ss) {
		var g = G(arguments),
				X = g[0] || 200, Y = g[1] || 200, r = g[2] || 1,
				fs = g[3],
				ss = g[4]
		el.bP()
		el.arc(X, Y, r, 0, 7, false)
		el.fS(fs)
		el.sS(ss)
		el.s().f()
		return el
	}
}


function drawLine(el) {
	//draw line ( [x,y],[x,y] || x,y,x,y )
	//draw multiple unconnected lines ( [[],[]],[[],[]] || [],[] )
	//fresh start
	el.ln = el.line = function rc(p) {
		var args = G(arguments), p = args[0]
		if (N(args[0])) {
			el.begin(args[0], args[1])
			el.lineTo(args[2], args[3])
			el.stroke()
			return el
		}
		if (A(args[0]) && N(args[0][0])) {
			el.begin(args.f)
			_.e(args.r, function (p) {
				el.lineTo(p[0], p[1])
			})
			el.stroke()
			return el
		}
		if (AA(p)) {
			_.e(args,
					function (p) {
						el.line.apply(null, p)
					})
		}
		el.stroke()
		return el
	}
	el.fitEx = function () {
		this.ln([0, 0], [this.W(), this.H()], [0, this.W()], [this.H(), 0])
	}
	el.sun = function (a, b, s) {
		s = s || 1;
		this.rG([[a || 0, b || a || 0],
					s * 100, s * 500],
				{'y': 0, 1: tCl('p', 0)},
				600, 600)
	}
	el.ball = function (b) {
		b = b || {}
		var dir = b.d || false,
				px = b.x || 100, py = b.y || 100, rad = b.r || 100,
				per = b.p || Math.PI * 2,
				ss = $r('c', b.s),
				fs = $r('c', b.f),
				lw = D(b.l) ? b.l : 4
		return x.com(
				'b', ['a', px, py, rad, 0, per, dir],
				{f: fs, s: ss, w: lw}, 'f', 's')
	}
	el.pointInPath = el.pip = function (c, a, b) {
		return this.context.isPointInPath(a, b)
	}
	el.paperBag = function (x, y, width, height, blowX, blowY) {
		x = x || 100
		y = y || 100
		width = width || 100
		height = height || 100
		blowX = blowX || 100
		blowY = blowY || 100
		var lx, ly;
		this.beginPath();
		this.moveTo(x, y);
		this.quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
		this.quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
		this.quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
		this.quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
		return this
	}
}
x.b = x.beg = x.bP = function () {
	var g = G(arguments)
	this.beginPath()
	if (g.u) {
		return this
	}
	if (g.N_) {
		this.mt(g.f, g.s)
		if (g.t) {
			this.c(g.t, g[3], g[4])
		}
	}
	else {
		this.c.apply(this, g)
	}
	return this
}
x.mt = function () {
	var x = this, g = G(arguments)
	if (g.A_) {
		x.mt(g.f[0], g.f[1])
		g.eR(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.moveTo(N(g.f, 0), N(g.s, 0))
		if (N(g.t)) {
			x.lt(g.t, g[3])
		}
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.lt = function () {
	var g = G(arguments), x = this
	if (g.A_ && A(g.f[0])) {
		x.lt.apply(x, g.f)
	}
	else if (O(g.s)) {
		g.e(function (pt) {
			x.lt(pt[0], pt[1])
		})
	}
	else {
		x.lineTo(g.f, g.s)
	}
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.r = function () {
	var ctx = this, g = G(arguments), o
	o = N(g.fo) ? {x: g.f, y: g.s, w: g.t, h: g.fo} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, ctx.W())
	o.h = N(o.h, ctx.H())
	ctx.rect(o.x, o.y, o.w, o.h)
	return ctx
}
x.fr = x.fR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x, o.y, o.w, o.h)
	return this
}
x.fr2 = x.fR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.fillRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.l = x.lW = function (n) {
	var g = G(arguments)
	if (!g.n) {
		this.lineWidth = n;
		return this
	}
	return this.lt(g.f, g.s)
}
x.sR = x.sr = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x, o.y, o.w, o.h)
	return this
}
x.sr2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.strokeRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.cR = x.clR = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x, o.y, o.w, o.h)
	return this
}
x.cr2 = x.cR2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.clearRect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.r2 = function (x, y, w, h) {
	var g = G(arguments), o
	o = N(g[3]) ? {x: g.f, y: g.s, w: g.t, h: g[3]} :
			N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.t} :
			{w: g.f, h: g.s}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	this.rect(o.x - o.w / 2, o.y - o.h / 2, o.w, o.h)
	return this
}
x.pol = function (vs, ox, oy) {
	var x = this, i
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(_.f(vs)[0] + ox, _.f(vs)[1] + oy)
	_.e(_.r(vs), function (v) {
		x.lt(v[0] + ox, v[1] + oy)
	})
	return x.cp().s().f()
}
x.x = x.cP = x.cp = function () {
	this.closePath();
	return this
}
isInPoint = x.iP = function (x, y) {
	return this.isPointInPath(x, y)
}
x.a = function () {
	var g = G(arguments), x = this,
			o = N(g.s) ? {x: g.f, y: g.s, r: g.t, rt1: g[3], rt2: g[4]} :
			{r: g.f}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.rt1 = N(o.rt1, 0)
	o.rt2 = N(o.rt2, 360)
	o.ccw = g.n ? true : false
	this.arc(o.x, o.y, o.r, M.tR(o.rt1), M.tR(o.rt2), o.ccw)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.arc2 = x.at = function () {
	var g = G(arguments), o
	o = {x1: g.f, y1: g.s, x2: g.t, y2: g[3], r: g[4]}
	this.arcTo(o.x1, o.y1, o.x2, o.y2, o.r)
	return g.n ? x.s() : g.p ? x.f() : g.m ? x.D() : x
}
x.quadratic = x.qt = function () {
	this.quadraticCurveTo();
	return this
}
x.lC = function (c) {
	var g = G(arguments);
	if (c == 'r') {
		c = 'round'
	}
	else if (c == 'r') {
		c = 'square'
	}
	else if (c == 'b') {
		c = 'but'
	}
	this.lineCap = c
	return this
}
x.lJ = function (n) {
	var g = G(arguments);
	if (g.N) {
		this.lineJoin = n;
		return this
	}
}
x.drawPol = x.drawSinglePoly = function (vxs, strCol, hole, ox, oy) {
	var x = this
	ox = N(ox, 0);
	oy = N(oy, 0)
	x.b().mt(vxs[0][0] + ox, vxs[0][1] + oy)
	_.e(_.r(vxs), function (vx) {
		x.lt(vx[0] + ox, vx[1] + oy);
	})
	x.lW(12).sS(strCol).fS("rgba(255, 0, 0, 0.1)")
	if (hole) {
		x.fS("#ffffff")
	}
	x.cp().s().f()
}
x._d = function (i, p2, p3, p4, p5) {
	var x = this, g = G(arguments), o
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'])) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
		}
	}
	if (g[0] == x) {
		g[0] = g[0].cv()
	}
	g[1] = N(g[1], 0)
	g[2] = N(g[2], 0)
	x.drawImage.apply(x, g)
	return x
}
x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	if (S(o.i)) {
		if (O(window['Q'])) {
			o.i = Q.i(o.i)
		}
		else {
			$.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}
x.dC = function f(i, x, y) {
	var that = this
	i = i || 'me'
	x = x || 100
	y = y || 100
	if (U(x)) {//draw img in center of can
		$.i(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
	}
	else {//draw it by specifying location of its center
		y = y || x
		$.i(i, function (i) {
			that.dr(i, x - i.W() / 2, y - i.H() / 2)
		})
	}
	return this
} //draw it where u say, but as if its reg point was its center
x.drawRegCenter = function f(i, x, y) {
	var that = this
	$.i(i, function (e, i) {
		that.draw(i[0],
				(that.W() / 2) - (i.W() / 2),
				(that.H() / 2) - (i.H() / 2))
	})
	return this
}
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
}
x.jD = function (img, p1, p2, p3, p4) {
	var x = this, i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
XP2 = DRAWAPP = function () {
	__C()
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(first)
	function first() {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(then)
	}
	
	function then() {
		x.S()
		x.tl(200, 200);
		draw()
		x.R()
		x.tl(20, 20);
		draw()
	}
}
function createPoly(pts) {
	var res = $pD()
	_.e(pts, function (pt) {
		res.addPoint(new Point(pt[0], pt[1]))
	})
	return res;
}
x.setup = function () {
	var x = this
	x.clearRect(0, 0, 400, 400)
	x.drawPolyD(pol1, "blue", 0, -30);
	x.drawPolyD(pol2, "red", 0, -30);
}
GP = function () {
	GP.pols()
	$cv = $.c('c', 400, 400)
	x = $cv.ctx()
	$.br().A()
	_.e(['difference', 'intersection', 'union', 'xor'], function (op) {
		$.bt(op, {
			difference: opFn('difference'),
			intersection: opFn('intersection'),
			union: opFn('union'),
			xor: opFn('xor')
		}[op]).A()
	})
	function opFn(op) {
		return function () {
			x.setup()
			x.drawPolyD(applyOp(op), "green", 0, 150);
		}
		function applyOp(op) {
			return pol1[op](pol2)
		}
	}
	
	x.drawPolyD(pol1, "blue", 0, -30);
	x.drawPolyD(pol2, "red", 0, -30);
}
x.drawPolyD = function (pD, col, ox, oy) {
	var x = this
	pD.ePol(function (pol, i) {
		x.drawPol(pol.pts(), pD.getCol(i, col), pol.isHole(), ox, oy)
	})
}
pD.getCol = function (i, col) {
	return getCol(i, this.numPol(), col)
}
function getCol(i, num, strCol) {
//if more than one poly produced, use multiple color to display
	return i == 0 ? strCol :
			["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num]
}
GP.pols = function () {
	vxs1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]]
	vxs2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	pol1 = createPoly(vxs1);
	pol2 = createPoly(vxs2);
}
 
	
	 
 

