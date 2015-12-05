__C = function () {
	z();
	c = $.c('y').drag()
	x = c.ctx()
	return c
}
$.fn.drag = $.fn.drag || function () {
	return this
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
$.c = $.can = function (c, width, h, x, y) {
	var g = G(arguments), o, el
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	o.c = o.c || 'x'
	el = $('<canvas>')
	el.attr({width: o.w, height: o.h})
	el.C(o.c)
	if (N(o.x)) {
		el.abs(o.x, o.y)
	}
	if (g.p) {
		el.drag()
	}
	el.A().al(.8)
	return superCanvas(el)
}
function superCanvas(el) {
	el = $(el)
	//to be called internally by $.c //works on FIRST canvas in jquery obj
	el.canvas = el[0]
	el.context = el.canvas.getContext('2d')
	if (O(window['cjs'])) {
		el.stage = new cjs.Stage(el.canvas) ///////////////////////////////
	}
	_superCanvas(el)
	return el
}
function _superCanvas(el) {
	var cv = el
	el.cx = function () {
		return this[0].getContext('2d')
	}
	el.W = function (width) {
		var args = G(arguments)
		width = args[0]
		if (U(width)) {
			return this.attr('width')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('width', width)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.H = function (height) {
		var args = G(arguments)
		height = args[0]
		if (U(height)) {
			return this.attr('height')
		}
		if (args.N) {
			var dataUrl = this.toDataURL()
		}
		this.attr('height', height)
		if (args.N) {
			this.fit(dataUrl)
		}
		return this
	}
	el.WH = function (w, h) {
		if (U(w)) {
			var width = this.W(),
					height = this.H()
			return {
				width: width, w: width,
				height: height, h: height
			}
		}
		h = h || w
		return this.W(w).H(h)
	}
	el.Z = function (d) {
		d = d || 5;
		return this.WH(d * 100, d * 100)
	}
	el.osL = el.offsetLeft = el.l = function (theOffset) {
		if (!theOffset) {
			return offsetLeft(x.q)
		}
		return parseInt(theOffset - x.offsetLeft())
	};
	//  el.ox=function(){return x.q.q.offset().left}
	el.osT = el.offsetTop = el.t = function (y) {
		if (!y) {
			return offsetTop(y.q)
		}
		;
		return parseInt(y - x.offsetTop())
	};
	//  el.oy=function(){return x.q.q.offset().top}
	el.cp = el.copy = function () {
		el.img.src(el.toDataURL())
		return el
	}
	el.ps = el.paste = function () {
		var g = G(arguments)
		if (g.N) {
			el.clearRect()
		}
		if (g.p) {
			el.fit(el.img)
		}
		else {
			el.draw(el.img.src())
		}
	}
	el.S = el.save = function () {
		el.context.save()
		return el
	}
	el.R = el.restore = function () {
		el.context.restore()
		return el
	}
	//dont mix up with element/jquery alpha
	//maybe opacity for element and alpha for canvas?
	el.al = el.globalAlpha = el.alpha = el.op = function (alpha) {
		if (U(alpha)) {
			return this.context.globalAlpha
		}
		this.context.globalAlpha = alpha
		return this
	}
	el.comp = el.globalCompositionOperation = el.gc = function (compOp) {
		if (U(compOp)) {
			return this.context.globalCompositeOperation
		}
		this.context.globalCompositeOperation = oO('g', compOp)
		return this
	}
	//normal prop (as methods)
	el.lW = el.lineWidth = function (w) {
		if (U(w)) {
			return el.context.lineWidth
		}
		el.context.lineWidth = w
		return el
	}
	el.lC = el.lineCap = function (w) {
		if (U(w)) {
			return el.context.lineCap
		}
		el.context.lineCap = w
		return el
	}
	el.lJ = el.lineJoin = function (w) {
		if (U(w)) {
			return el.context.lineJoin
		}
		el.context.lineJoin = w
		return el
	}
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	//wap specific
	el.snap = function (func) {
		pams = {
			d: el.toDataURL(),
			dats: el.dats
		}
		$.post('/img', pams, func)
	}
	el.img = $.img()
	el.img.src(el.toDataURL())
	el.dots = function () {
		el.copy()
		el.DOTS = []
		el.dats = []
		el.$(function (x, y) {
			x = parseInt(x)
			y = parseInt(y)
			el.cir(x, y)
			el.DOTS.push([x, y])
			el.dats.push(x)
			el.dats.push(y)
			el.line(el.DOTS)
		})
		el.$$(function (X, Y) {
			var du
			//el.C('X')
			el.off('click')
			el.closePath()  //el.paste() // el.copy()  //el.save()
			el.clear() //du = el.toDataURL()
			el.clip()
			el.paste() //el.fit(du)
		})
		return el
	}
	el.me = function me(n) {//randomly draw my face
		var g = G(arguments), n = g[0] || 200
		if (x.me.d) {
			clearInterval(x.me.d);
			x.me.d = false
		}
		else {
			x.me.d = I(function () {
				x.d($w['mug'] || 'me', _r(x.w() - 200), _r(x.w() - 200))
			}, n)
		}
		return x
	}
	el.me.shouldDrawMeId = false
	el.mugX = function (m) {
		qP('/mug', {u: m}, function (m) {
			x.fit(m)
		})
		return x
	}
	el.tick = function () {
		var ctx = this.ctx()
		ctx.tick.apply(ctx, arguments)
		return this
	}
	el.URL = el.dataURL = el.toDataURL = function () {
		return el.canvas.toDataURL()
	}
	superCanvasEvents(el)
	superCanvasShadow(el)
	_superCanvasDraw(el)
	_superCanvasGradient(el)
	_superCanvasPixel(el)
	_superCanvasText(el)
	_superCanvasTransform(el)

	//_superCanvasMug(el)
	_superCanvasPath(el)
	
	 cv.sun = function (a, b, s) {
		s = s || 1;
		this.rG(
				[[a || 0, b || a || 0], s * 100, s * 500],
				{'y': 0, 1: tCl('p', 0)},
				600,
				600
		)
	}
	cv.ball = function (b) {
		b = b || {}
		var dir = b.d || false,
				px = b.x || 100, py = b.y || 100, rad = b.r || 100,
				per = b.p || Math.PI * 2,
				ss = $r('c', b.s),
				fs = $r('c', b.f),
				lw = D(b.l) ? b.l : 4
		return x.com('b', ['a', px, py, rad, 0, per, dir], {f: fs, s: ss, w: lw}, 'f', 's')
	}
	cv.paperBag = function (x, y, width, height, blowX, blowY) {
		x = x || 100
		y = y || 100
		width = width || 100
		height = height || 100
		blowX = blowX || 100
		blowY = blowY || 100
		var lx, ly;
		this.ctx().strokeStyle = 'Red'
		this.ctx().beginPath();
		this.ctx().moveTo(x, y);
		this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height * blowY | 0, x + width, y);
		this.ctx().quadraticCurveTo(x + width - width * blowX | 0, y + height / 2 | 0, x + width, y + height);
		this.ctx().quadraticCurveTo(x + width / 2 | 0, y + height - height * blowY | 0, x, y + height);
		this.ctx().quadraticCurveTo(x + width * blowX | 0, y + height / 2 | 0, x, y);
		return this
	}
	
	return el

}
function superCanvasEvents(el) {
	el.$ = function (func) {
		el.click(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.$$ = function (func) {
		el.dblclick(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.over = el.MV = function (func) {
		el.mouseover(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.out = el.MO = function (func) {
		el.mouseout(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.enter = el.ME = function (func) {
		el.mouseenter(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.leave = el.ML = function (func) {
		el.mouseleave(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.up = el.MU = function (func) {
		el.mouseup(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.move = el.MM = function (func) {
		el.mousemove(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
	el.down = el.MD = function (func) {
		el.mousedown(function (e) {
			func(e.pageX - $(this).offset().left,
					e.pageY - $(this).offset().top)
		})
	}
}
function superCanvasShadow(el) {
	el.shC = el.shdC = el.shadowColor = function (color) {
		if (U(color)) {
			return this.context.shadowColor
		}
		this.context.shadowColor = oO('c', color)
		return this
	}
	el.shB = el.shdB = el.shadowBlur = function (blurNumber) {
		if (U(blurNumber)) {
			return this.context.shadowBlur
		}
		this.context.shadowBlur = blurNumber
		return this
	}
	el.shX = el.shdX = el.shadowOffsetX = function (offsetX) {
		if (U(offsetX)) {
			return this.context.shadowOffsetX
		}
		this.context.shadowOffsetX = offsetX
		return this
	}
	el.shY = el.shdY = el.shadowOffsetY = function (offsetY) {
		if (U(offsetY)) {
			return this.context.shadowOffsetY
		}
		this.context.shadowOffsetY = offsetY
		return this
	}
	el.shd = el.shadow = function (color, x, y, num) {
		el.shadowColor(color)
		el.shadowOffsetX(x).shadowOffsetY(y)
		el.shadowBlur(num)
		return el
	}
}
$.cx = function () {
	return $.c.apply($, arguments).cx()
}
$.fn.ctx = function () {
	return this[0].getContext('2d')
}
_superCanvasTransform = function (el) {
	//give scale cos(rads), skew:sin(rads)  ??
	el.norm = function () {
		el.context.scale(this.W() / 10, this.H() / 10)
		return this
	}
	el.scale = el.sc = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.scale(X, Y)
	}
	el.translate = el.tr = function (X, Y) {
		var g = G(arguments),
				X = g[0] || 1, Y = g[1] || X
		x.x.translate(X, Y)
	}
	el.rotate = el.rt = function (r) {
		var g = G(arguments),
				r = g[0] || 1
		//r=pi(-6)*r
		//x.fr(0,0,1,1)
		//x({f:$r('c')
		x.x.rotate(r)
	}
	el.transform = el.tf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('t', a, c, e, b, d, f)
	}
	el.setTransform = el.stf = function rc(a, c, e, b, d, f) {
		var g = G(arguments)
		if (g.p) {
			return rc(2, 0, 0, 2, 0, 0)
		}
		return x('st', a, c, e, b, d, f)
	}
	return el
}
x = ctx = CanvasRenderingContext2D.prototype
x.cv = function () {
	return this.canvas
}
x.H = function () {
	return this.canvas.height
}
x.W = function () {
	return this.canvas.width// return this.cv().width
}
x.u = function () {
	return this.cv().toDataURL()
}
x.fS = x.f = x.c = x.fs = function (c, C, l) {
	var g = G(arguments)
	if (g.u) {
		this.fill()
		if (g.p) {
			this.s()
		}
		return this
	}
	this.fillStyle = oO('c', c)
	if (C) {
		this.C(C)
	}
	if (N(l)) {
		this.l(l)
	}
	return this
}
x.sS = x.s = x.C = x.ss = function () {
	var g = G(arguments), o
	if (g.u) {
		this.stroke();
		if (g.p) {
			this.f()
		}
		return this
	}
	o = g.N_ ? {l: g.f} : {C: g.f, l: g.s}
	if (o.C) {
		this.strokeStyle = oO('c', o.C)
	}
	if (N(o.l)) {
		this.l(o.l)
	}
	return this
}
x.al = function (al) {
	this.globalAlpha = al;
	return this
}
x.clp = x.cl = function () {
	this.clip();
	return this
}
x.cr = function (x1, y1, x2, y2) {
	var ctx = this
	var cv = ctx.cv()
	var i = this.u()
	if (A(x1)) {
		return ctx.crop(
				x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1]
		)
	}
	ctx.d(i, x1, y1, x2, y2, 0, 0, $(cv).W(), $(cv).H())
	return cv
}
x.Z = function () {
	this.scale.apply(this, arguments)
	return this
}
x.sc = function (x, y) {
	y = N(y, x)
	this.scale(x, y);
	return this
}
x.tl = function (tX, tY, rt, sX, sY) {// this.translate.apply(this, arguments)
	this.translate(tX, tY)
	if (N(rt)) {
		this.rt(rt)
	}
	if (N(sX)) {
		this.sc(sX, sY)
	}
	return this
}
x.sX = function (x) {
	return this.sc(x, 1)
}
x.sY = function (y) {
	return this.sc(1, y)
}
x.rt = function (n) {
	this.rotate(M.tR(n));
	return this
}
x.tf = function () {
	this.transform.apply(this, arguments)
	return this
}
x.sT = x.sTf = function () {
	this.setTransform.apply(this, arguments)
	return this
}
x.$ = function () {
	return $(this.cv())
}
x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
x._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}
shadow(x)
globComp(x)
function shadow(x) {
	x.shC = function (c) {
		this.shadowColor = oO('c', c)
		return this
	}
	x.shX = function (c) {
		this.shadowOffsetX = c
		return this
	}
	x.shY = function (c) {
		this.shadowOffsetY = c
		return this
	}
	x.shB = function (c) {
		this.shadowBlur = c
		return this
	}
}
function globComp(x) {
	x.globalCompOp = x.o = x.op = x.cO = function (o) {
		this.globalCompositeOperation = o;
		return this
	}
	x.Ds = x.dO = function () {
		this.o('destination-out');
		return this
	}
	x.dS = x.dI = function () {
		return this.o('destination-in')
	}
	x.sD = x.sI = function () {
		this.o('source-in');
		return this
	}
	x.Sd = x.sO = function () {
		this.o('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
	x.ds = x.dV = function () {
		this.o('destination-over');
		return this
	}
	x.SD = x.sT = x.sA = function () {
		this.o('source-atop');
		return this
	}
	x.DS = x.dT = x.dA = function () {
		this.o('destination-atop');
		return this
	}
	x.li = function () {
		this.o('lighter');
		return this
	}
	x.co = function () {
		this.o('copy');
		return this
	}
	x.xo = function () {
		this.o('xor');
		return this
	}
}
//img apps:
DRI = DRAWIMAGE = function () {
	DRI.CSS()
	d = $.d().A($cv = $.c(900, 400))
	x = $cv.ctx()
	$i = $.i('chicks')
	$i.load(function () {
		x.drawImage($i[0], 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i, 400, 100, 500, 200)
	})
}
DRI.CSS = function () {
	$CSS({
		body: {C: 'o'},
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
}
_superCanvasPixel = function (el) {
	el.gD = el.getData = function (x, y, w, h) {
		//historic.. dont delete ! data = x('G', X, Y, w, h).res
		var g = G(arguments),
				x = g[0] || 0,
				y = g[1] || 0,
				w = g[2] || this.W(),
				h = g[3] || this.H(),
				data = this.context.getImageData(x, y, w, h)
		// data.h = data.height
		// data.w = data.width
		// data.d = data.data
		return data
	}
	el.pD = el.putData = function (data, x, y) {
		x = x || 0
		y = y || 0
		this.context.putImageData(data, x, y)
		return this
	}
	el.gP = el.getPut = function (a, x, y) {
		var g = G(arguments),
				a = g[0],
				x = g[1],
				y = g[2],
				data = this.gD.apply(this.context, a)
		if (g.n) {
			this.clear()
		}
		return x.pD(data, x, y)
	}
	el.pixelsNegative = function () {
		var imgData = this.gD(),  //gD(0,0, this.W(), this.H())
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 255 - data[i];
			data[i + 1] = 255 - data[i + 1]
			data[i + 2] = 255 - data[i + 2]
			data[i + 3] = 255
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsInvert = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			data[i] = 225 - data[i];
			data[i + 1] = 225 - data[i + 1]
			data[i + 2] = 225 - data[i + 2]
		}
		this.pD(imgData)
	}
	el.pixelsGrayscale = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 0; i < data.length; i += 4) {
			var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg
			data[i + 1] = avg
			data[i + 2] = avg
		}
		this.pD(imgData) //  this.pD(data,0,0)
	}
	el.pixelsFade = function () {
		var imgData = this.gD(),
				data = imgData.data
		for (var i = 7; i < _.size(data); i += 4) {
			data[i] = 90
		}
		this.pD(imgData)
		return el
	}
	return el
}
_superCanvasText = function (el) {
	el.font = function (font) {
		this.context.font = HTML5.font(font)
		return this
	}
	el.strokeText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		this.context.strokeText(t, X, Y)
		return this
	}
	el.fillText = function (t, X, Y) {
		var g = G(arguments),
				t = g[0],
				X = g[1] || 100,
				Y = g[2] || X
		if (g.p) {
			this.tx(t, X, Y, '-')
			this.tx(t, X, Y)
		}
		else this.context.fillText(t, X, Y)
		return this
	}
	el.measureText = el.measure = function (t) {
		return this.context.measureText(t)
	}
	el.textWidth = function (t) {
		return parseInt(this.measureText(t).width)
	}
	el.centerHorizontalText = function (text, height) {
		this.fillText(text,
				this.W() / 2 - this.textWidth(text) / 2,
				height
		)
		return this
	}
}
XX7 = RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
}
x.F = function () {
	var g = G(arguments), o
	o = {f: g.f}
	if (g.N_) {
		o.f += 'px ' + (g.n ? 'Verdana' : 'Georgia')
	}
	this.font = o.f
	return this
}
x.ft = x.fT = function (x, y, t) {
	var g = G(arguments)
	if (g.N_) {
		this.fillText(g.t, g.f, g.s)
	}
	else {
		this.fillText(g.t, x.W() / 2, 200)
	}
}
x.mL = function () {
} //x.T( ['r'],  [20 | '20px verdana], 'afsdsafd', [x, y] )
x.t = x.T = function () {
	var g = G(arguments), x = this, o, t
	o = g.S ? {t: g.f, x: g.t, y: g[3]} : // ONLY a str (so not to be confused with color)
			S(g.t) ? {c: g.f, f: g.s, t: g.t, x: g[3], y: g[4]} :
					g.N_ ? {f: g.f, t: g.s, x: g.t, y: g[3]} :
							S(g.s) ? {c: g.f, t: g.s, x: g.t, y: g[3]} :
							{t: g.f, x: g.s, y: g.t}
	o.x = N(o.x, x.W() / 2)
	o.y = N(o.y, 200)
	if (o.c) {
		x.c(o.c, o.c)
	}
	if (o.f) {
		g.n ?
				x.F(o.f, '-') :
				x.F(o.f)
	}
	x.fillText(o.t, o.x, o.y)
	return x
}
x.tA = function () {
}
x.tB = x.Bl = function () {
}
CANNTX = function () {
	__C()
	x.setFont('Helsinki 23px')
	x.f('b').fillText('haffasfsf', 400, 500)
}
CANTEXT = function () {
	__C()
	x.t('hello', 100, 100)
}
x.cD = function () {
	this.createImageData()
	return this
}
x.gD = function () {
	var g = G(arguments), o, d
	o = {x: g.f, y: g.s, w: g.t, h: g[3]}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.w = N(o.w, this.W())
	o.h = N(o.h, this.H())
	d = this.getImageData(o.x, o.y, o.w, o.h)
	d.h = d.height
	d.w = d.width
	d.d = d.data
	return d
}
x.pD = function (d, x, y) {
	this.putImageData(d, N(x, 0), N(y, 0))
	return this
}
_superCanvasDraw = function (el) {
	drawImage(el);
	crop(el);
	scaleIm(el)
}
function drawImage(el) {
	//this just a simple proxy to drawImage // dont use?
	el.drawImage = el.dI = function () {
		var el = this, g = G(arguments)
		g[1] = N(g[1]) ? g[1] : 0
		g[2] = N(g[2]) ? g[2] : 0
		$(el)[0].getContext('2d').drawImage.apply(
				$(el)[0].getContext('2d'), g
		)
	}
	//this will create the image (from string), and then draw it
	el.dr = el.draw = function () {
		$l('el.dr')
		var el = this, g = G(arguments)
		$.i(g.f, function (i) {
			g[0] = i
			__g = g
			el.dI.apply(el, g)
		})
	}
	el.fit = function f(i, x, y) {
		var el = this//$l('fit: - el.W():' + el.W())
		i = i || 'me'
		x = x || 0
		y = y || 0
		el.draw(i, x, y, el.W(), el.H())
		//el.draw(img, X, Y, el.width(), el.height())
		return el
	}
	el.dC = function f(i, x, y) {
		var that = this
		i = i || 'me'
		x = x || 100
		y = y || 100
		if (U(x)) {//draw img in center of can
			$.img(i, function (i) {
				that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
			})
		}
		else {//draw it by specifying location of its center
			y = y || x
			$.img(i, function (i) {
				that.draw(i, x - i.W() / 2, y - i.H() / 2)
			})
		}
		return this
	}
	//draw it where u say, but as if its reg point was its center
	el.drawRegCenter = el.dC2 = function f(i, x, y) {
		var that = this
		$.img(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
		return this
	}
	el.Cd = function (a, x, y) {
		var that = this
		a = a || 'me'
		x = x || 100
		y = y || 100
		$.img(a,
				function (img) {
					that.drawImage(
							img.src,
							x - img.W() / 2,
							y - img.H() / 2
					)
				})
	}
}
function crop(el) {
	el.crop = function rc(x1, y1, x2, y2) {
		var el = this
		if (A(x1)) {
			return rc(x1[0], x1[1], x1[2] - x1[0], x1[3] - x1[1])
		}
		el.draw(
				el[0].toDataURL(),
				x1, y1, x2, y2,
				0, 0, this.W(), this.H()
		)
		return this
	}
	el.crop = function rc(x1, y1, x2, y2) {
		if (A(x1)) {
			return rc(
					x1[0], x1[1],
					x1[2] - x1[0],
					x1[3] - x1[1]
			)
		}
		this.context.drawImage(x, x1, y1, x2, y2, 0, 0, this.W(), this.H())
		return this
	}
}
function scaleIm(el) {
	el.scaleImCen = function (img, s) {
		var w = this.W(), h = this.H(), s = s || 1
		this.draw(img,
				w * s / -2 + w / 2,
				h * s / -2 + h / 2//+ w/2
				,
				w * s,
				h * s)
	}
	el.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	el.scaleImCenSpiral = function () {
		var scaleNum = 1,
				that = this
		_.times(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
}
addColorStop = function rc(grad, stop, color) {
	
	// pass only a grad -> function with grad curried
	// add a color stop to a grad
	if (U(stop)) {
		return _.partial(rc, grad)
	}
	grad.addColorStop(stop, oO('c', color))
	return grad
}
_superCanvasGradient = function (el) {
	el.linearGradient = el.lG = el.createLinearGradient = function (a, b, c, d) {
		a = a || 0
		b = b || 0
		c = c || this.W()
		d = d || this.H()
		return SuperGradient(this.context.createLinearGradient(a, b, c, d))
	}
	el.linGradBlackToWhite = function () {
		grd = this.linearGradient(0, 0, this.W(), 0)
		grd.stop(0, "black").stop(1, "white")
		this.fillStyle(grd)
		this.fillRect()
	}
	el.linGradDiagnal = function (grd) {
		grd = grd || this.lG()
		grd.stop(0, 'r')
		grd.stop(.1, 'r')
		grd.stop(.15, 'b')
		grd.stop(.2, 'r')
		grd.stop(.5, 'y')
		grd.stop(1, 'b')
		this.fillStyle(grd)
		this.fillRect()
		return this
	}
	el.radialGradient = el.rG = el.createRadialGradient = function rg() {
		var g = G(arguments)
		g[0] = g[0] || 200
		g[1] = g[1] || 200
		g[2] = g[2] || 100
		g[3] = g[3] || 250
		g[4] = g[4] || 250
		g[5] = g[5] || 800
		return this.context.createRadialGradient(g[0], g[1], g[2], g[3], g[4], g[5])
	}
	el.radGradSample = function () {
		var grd = this.rG()
		addColorStop(grd, 0, 'r')
		addColorStop(grd, .15, 'b')
		addColorStop(grd, .2, 'r')
		addColorStop(grd, .5, 'y')
		addColorStop(grd, 1, 'b')
		this.fillStyle(grd)
		this.fillRect()
		return this
	}
	el.growingSun = function () {
		var that = this
		var a = 0,
				b = 1000,
				grd
		var func = function () {
			a += 1
			b -= 2
			grd = that.rG(200, 200, a, 290, 270, b)
			grd.addColorStop(.1, 'Yellow')
			grd.addColorStop(.3, 'Red')
			grd.addColorStop(1, 'Violet')
			//  grad = x.grad( [200, 200, a, 290, 270, b],  { y: .1, r: .3,  V:1 } )
			that.fillStyle(grd)
			that.fillRect()
		}
		setInterval(func, 100)
	}
	el.pattern = el.createPattern = function (im, pat) {
		//im = im || $.img('me')[0]
		var pattern = this.context.createPattern(im, pat || 'repeat')
		return pattern
	}
	el.testPattern = function () {
		var that = this
		$.img('me', function (img) {
			var pattern = that.pattern(img[0], 'repeat')
			that.fillStyle(pattern).fillRect()
		})
	}
}
$superGrad = function (grad) {
	grad.stop = function (stop, color) {
		addColorStop(grad, stop, color);
		return grad
	}
	grad.stops = function (stopObject) {
		_.e(stopObject,
				function (v, k) {
					var o = S(v) ? {k: k, v: v} : {k: v, v: k}
					addColorStop(grad, o.k, $r('c', o.v))
				})
	}
	return grad
}
gr = xGr = CanvasGradient.prototype
gr._aCS = function () {
	this.addColorStop.apply(this, arguments)
	return this
}
gr.add1CS = function (num, col) {
	var gr = this, g = G(arguments)
	gr._aCS(num, oO('c', col))
}
gr.addCSOb = function (stopsOb) {
	var gr = this, g = G(arguments)
	_.e(stopsOb, function (num, col) {
		gr.add1CS(num, col)
	})
	return gr
}
gr.cS = gr.stop = gr.s = gr.c = function () {
	var gr = this, g = G(arguments)
	if (A(g.f)) {
		_.e(g, function (arg) {
			gr.stop(arg[0], arg[1])
		})
		return gr
	}
	return g.O ? gr.addCSOb(g.f)
			: gr.add1CS(g.f, g.s)
}  
 