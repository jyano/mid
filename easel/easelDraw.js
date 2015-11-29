//toBoth: 
AO = function (a) {
	return A(a) && O(a[0])
}
vs1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
vs2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
oDef = function (o) {
	o = o || {}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.a = N(o.a, 0)
	o.c = o.c || 'z'
	o.C = o.C || 'w'
	o.w = N(o.w, 50)
	o.h = N(o.h, 50)
	return o
}
cjs.Gx = cjs.Graphics
cjs.rgb = cjs.Gx.rgb = cjs.Gx.getRGB
$Gx =  function (a) {
	return new cjs.Gx(a)
}
$Sh = function (gx) {return new cjs.Shape(gx)}
cjs.shape = _$H = _$h =function (x, y, f, s, width, opt) {
	if (cjs.iH(x)) {
		return $Sh(x.graphics)
	}
	var h = $Sh()
	if (N(x)) {
		h.X(x)
	}
	if (N(y)) {
		h.Y(y)
	}
	h.fs(f, s, width)
	if (opt == 'drag') {
		h.drag()
	}
	// use a switch statement here!  i love it!
	return h
}
$H = $h = function () {
	var g = G(arguments), h = new cjs.Shape(),
	//if (cjs.iH(x)) {return new cjs.Shape(x.graphics)}
//pass in your own obj to use 'o.i/o.bf' or 'o.lf' or 'o.rf'
			o = g.O ? g.f :
					g.N_ ? ( N(g[3]) ? // 'c-C-l' pattern
					{x: g.f, y: g.s, C: g.t, l: g[3]} : {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} ) :
						// 'c-C-l' pattern
							N(g.s) ? {C: g.f, l: g.s} :
							{c: g.f, C: g.s, l: g.t}
	_h = h
	h.XY(N(o.x, 0), N(o.y, 0))
	h.c(o.c || 'z', o.C || 'w', o.l || 8)
	if (o.C) {
		h.C(o.C)
	}
	if (N(o.l)) {
		h.l(o.l)
	}
	if (g.p) {
		h.dg()
	}
	return h
}
DWW=function(){
	
	
	gx = $Gx().ss(10).s('white').f(cjs.rgb(255, 0, 0))
			.dc(0, 0, 100).dc(100, 0, 100)
			.s('blue').f('green').dc(0, 300, 100)
	
	_$St().A(  $Sh(gx).XY(300, 100)   ).u()
}
cjs.rect2 = function self(width, height, x, y, fc, sc) {
	width = width || 100
	height = height || width
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new createjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, halfheight + y)
			.lt(halfwidth + x, halfheight + y)
			.lt(halfwidth + x, -halfheight + y)
			.lt(-halfwidth + x, -halfheight + y)
	return h
}
cjs.rect = function self(width, height, fc, sc) {
	width = width || 100
	height = height || width
	fc = fc || 'green'
	sc = sc || 'white'
	halfwidth = width / 2
	halfheight = height / 2
	var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(-halfwidth, -halfheight)
			.lt(-halfwidth, halfheight).lt(halfwidth, halfheight)
			.lt(halfwidth, -halfheight).lt(-halfwidth, -halfheight)
	return h
}
cjs.circ = cjs.circle = function (rad, fCol, sCol) {
	if (!N(rad)) {
		return cjs.circ(8, rad)
	}
	fc = oO('c', fc || 'z')
	var h
	h = $Sh()
	h.f(fc)
	h.circle(0, 0, rad)
	return h
}
cjs.cir0 = cjs.circle3 = function (x, y, rad, fCol, sCol) {
 
	var h = $Sh().X(x || 0).Y(y || 0)
	if (O(x)) {
	
		return cir0(x.x, x.y, x.r, x.fc, x.sc)
	}
	
	x = x || 0
	y = y || 0
	r = r || 8
	fc = fc || 'w'
	sc = sc || 'z'
	if (fCol) {
		h.f(fCol)
	}
	if (sCol) {
		h.s(sCol)
	}
	h.circle(x, y, r, fc, sc)
	SL(h)
	
	return h
}
cjs.rim=cjs.circle2 = function (rad, lineWid, x, y) {
var z = lineWid
	var gx = $Gx()
	if (!S(r)) {
		return circle2('red', rad, z, x)
	}
	z = N(z) ? z : 32
	x = N(x) ? x : 100
	y = N(y) ? y : 100
	gx.ss(z / 8)
	gx.f(r, 'black')
	gx.dc(0, 0, z)
	return $Sh(gx).XY(x||0,y||0)
}
cjs.cir = function () {
	var g = G(arguments) 
	
	var o = cjs.cir.g(g)
	
	var h = $Sh()
	
	o.r = N(o.r, 50)
	o.c = o.c || 'w'
	o.C = o.C || 'z'
	o.l = N(o.l, 4)
	
	h.dc(o.r, o.c, o.C, o.l)
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (N(o.x)) {
		h.regX = -o.x
	}
	
	if (N(o.y)) {
		h.regY = -o.y
	}
	
	h.alpha = N(o.al, 1)
	
	return h
}
cjs.cir.g = function (g) {

	var o  = g.O ? g.f :

			N(g.f) && N(g.s) && N(g.t) ?
					{r: g.f, x: g.s, y: g.t, c: g[3], C: g[4], l: g[5]} :
					N(g.f) && N(g.s) ? {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
													N(g.f) ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
													{c: g.f, C: g.s, l: g.t}
													
													
	
	return o
	
}
cjs.diamond = function (w, h, fc, sc) {
	var h = $H(), gx = h.graphics;
	fc = fc || 'green';
	sc = sc || 'white';
	w = w || 100;
	h = h || w
	var hW = w / 2
	var hH = h / 2
	//var h = new cjs.Shape()
	h.graphics.f(fc).s(sc)
			.mt(0, -hW)
			.lt(-hW, 0).lt(0, hW)
			.lt(hW, 0).lt(0, -hW)
	//	gx.f(fc || 'green').s(sc || 'white')
//	gx.mt(0, -hH).lt(-hW, 0).lt(0, hH).lt(hW, 0).lt(0, -hH)
	return h
	cjs.diamond = function self(width, height, fc, sc) {
		fc = fc || 'green'
		sc = sc || 'white'
		width = width || 100
		height = height || width
		halfwidth = width / 2
		halfheight = height / 2
		var h = new createjs.Shape()
		h.graphics.f(fc).s(sc)
				.mt(0, -halfheight)
				.lt(-halfwidth, 0).lt(0, halfheight)
				.lt(halfwidth, 0).lt(0, -halfheight)
		return h
	}
}
cjs.lg = h.lg = function () {
	var g = G(arguments), o//h=this, gx=h.graphics,
	if (g.A) {
		return cjs.lg.apply(null, g.f)
	}
	o = g.O ? g.f :
			_.x({c1: g.f, c2: g.s},
					N(g[5]) ? {x1: g[2], y1: g[3], x2: g[4], y2: g[5]}
							: N(g[4]) ? {y1: g[2], x2: g[3], y2: g[4]}
							: N(g[3]) ? {x2: g[2], y2: g[3]} : {y2: g[2]})
	o.c1 = oO('c', o.c1 || 'z');
	o.c2 = oO('c', o.c2 || 'w')
	o.s1 = N(o.s1, 0);
	o.s2 = N(o.s2, 1)
	o.x1 = N(o.x1, 0);
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2) ? o.y2 : N(o.r) ? o.r * 2 : 100
	return o
}
cjs.HSL = function (a, b, c) {
	return U(a) ?
			HSL(M.r() * 360, 100, 50) :
			cjs.Graphics.getHSL(a, b, c)
}
nip = function () {
	x1 = 0
	y1 = 0
	r1 = 10
	x2 = 0
	y2 = 0
	r2 = 100
	var h = cjs.shape(10, 10).a2(s).drag().opacity(.8)
	h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
			x1, y1, r1, x2, y2, r2)
			.dc(0, 0, 100)
			.endFill()
	return h
}
function cjsBalls() {
	s.cannonBall = function (x, y) {
		var s = this, h
		h = s.h(x, y)
		h.rf('a', 'z', 18).dc(18).ef()
		return h
	}
	s.basketBall = function (x, y) {
		var s = this
		return this.h(x, y).rf('w', 'o', 18).dc(18).ef()
	}
	s.beachBall = function (x, y) {
		var s = this
		return s.h(x, y)
				.rf('b', 'r', 18).dc(18).ef()
	}
	s.snowBall = function (x, y) {
		var s = this
		return s.h(x, y).rf('a', 'w', 18).dc(18).ef()
	}
}
old = function () {
	cjs.ball = function (z, fc, sc) {
		var b = cjs.circle(0, 0, z, fc, sc)
		b.r = z
		b.d = z + z
		b.T = function (a) {
			if (U(a)) {
				return b.y() - b.r
			}
			b.y(a + b.r);
			return b
		}
		b.B = function (a) {
			if (U(a)) {
				return b.y() + b.r
			}
			b.y(a - b.r);
			return b
		}
		b.L = function (a) {
			if (U(a)) {
				return b.x() - b.r
			}
			b.x(a + b.r);
			return b
		}
		b.R = function (a) {
			if (U(a)) {
				return b.x() + b.r
			}
			b.x(a - b.r);
			return b
		}
		b.F = 1
		b.fall = function (r) {
			b.t(function () {
				if (r) {
					if (ballBox(b, r)) {
						b.F = 0
					} else {
						b.F = 1
					}
				}
				if (b.F) {
					b.y(10, '+')
				}
			})
		}
		return b
	}
	cjs.box = function (w, h, fc, sc) {
		w = w || 200
		h = h || w
		var b = rct(
				0 - w / 2, 0 - h / 2, w, h, fc, sc
		)
		b.wr = w / 2
		b.hr = h / 2
		b.wd = w
		b.hd = h
		b.top = b.T = function (a) {
			if (U(a)) {
				return b.y() - b.hr
			}
			b.y(a + b.hr)
			return b
		}
		b.bottom = b.B = function (a) {
			if (U(a)) {
				return b.y() + b.hr
			}
			b.y(a - b.hr)
			return b
		}
		b.left = b.L = function (a) {
			if (U(a)) {
				return b.x() - b.wr
			}
			b.x(a + b.wr)
			return b
		}
		b.right = b.R = function (a) {
			if (U(a)) {
				return b.x() + b.wr
			}
			b.x(a - b.wr);
			return b
		}
		b.fall = function () {
			b.t(function () {
				if (b.F) {
					b.y(40, '+')
				}  //****
				if (ballBox(b, r)) {
					b.F = 0
				}
			})
		}
		return b
	}
	cjs.ballBox = function (bl, bx, buff) {
		buff = buff || 100
		var b = bl.bottom() >= bx.top() && bl.top() <= bx.top() + buff &&
				bl.x() >= bx.left() && bl.x() <= bx.right()
		if (b) {
			bl.bottom(bx.top())
		}
		return b
	}
	h.vs1 = function () {
		var h = this, g = G(arguments), o;
		$l('h.vs')
		o = {v: g.f, ox: g.s, oy: g.t}
		o.ox = N(o.ox, 0)
		o.oy = N(o.oy, 0)
		h.mt(
				_.f(o.v)[0] + o.ox,
				_.f(o.v)[1] + o.oy
		)
		_.eR(o.v, function (v) {
			h.lt(v[0] + o.ox, v[1] + o.oy)
		})
		return h
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
	h.vs = function (vs, x, y) {
		return this.mt(M.os(vs, x, y))
		//  takes [pt,pt..] and draws it.. with optional offsets..
		//used by (but NOT  dependent on) gPoly 
	}
}






 

