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
	//_superCanvasGradient(el)
	_superCanvasEvents(el)
	_superCanvasShadow(el)
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
	function _superCanvasEvents(el) {
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
	function _superCanvasShadow(el) {
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
}
 