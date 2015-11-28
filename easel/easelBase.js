cjs=createjs
z = function (fn) {
	var g = G(arguments)
	if (g.F_) {
		T.t(fn)
	}
	else {
		$('body').empty()
	}
}
cjs = createjs;
h = cjs.Shape.prototype
gx = cjs.Graphics.prototype
ob = i = cjs.DisplayObject.prototype
s = st = cjs.Stage.prototype
ct = cjs.Container.prototype
q = cjs.LoadQueue.prototype
t = cjs.Text.prototype
function klass() {
	i.of = function (k) {
		this._K = this._K || []
		return !k || this == k || _.ct(this._K, k)
	}
	i.K = function () {
		var i = this, g = G(arguments)
		this._K = this._K || []
		if (g.u) {
			return this._K.join(' ')
		}
		if (g.O) {
			this._K(g.f.k);
			return this
		}
		_.eW(g.f, function (k) {
			if (!i.of(k)) {
				i._K.push(k)
			}
		})
		return this
	}//i.of=function(k){return this.K()==k || this.K()==''}
}
klass()
cjs.P = $Pt = cjs.Pt = function (x, y) {
	$l('cjs.Pt $Pt')
	if (U(x)) {
		return new C$.Point
	}
	if (O(x) && O(y)) {
		return new C$.Point(x.x + y.mx() >> 1, x.y + y.my() >> 1)
	}
	if (O(x)) {
		return new cjs.Point(
				x.mx(),
				x.my()
		)
	}
	return new cjs.Point(x, y)
}//=P=
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
cjs.hasDim = function (bm) {
	//!$l('cjs.hasDim')
	return !cjs.iH(bm) && !cjs.iCt(bm)
}
testGrow = function () {
	z()
	s = cjs.stage(500, 500).A()
	s.bm('me', function (bm) {
		b = bm
		bm.grow().drag()
	})
}
cjs.shad = cjs.shadow = function (color, x, y, blur) {
	if (color == '-') {
		return new cjs.Shadow(null, 0, 0, 0)
	}
	color = S(color) ? color : 'a'
	blur = N(blur) ? blur : 10
	x = N(x) ? x : 0
	y = N(y) ? y : 0
	var shad = new cjs.Shadow(oO('c', color), x, y, blur)
	return shad
}
bool()
matrix()
function bool() {
	cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
		return O(ct) && ct.addChild
	}
	cjs.iH = function (h) {
		return O(h) && h.graphics
	}
	cjs.isShape = function (h) {
		return O(h) && h.graphics
	}
	cjs.isCont = function (cont) {
		if (O(cont)) {
			if (cont.addContainer) {
				return true
			}
			else {
				return false
			}
		}
	}
}
function matrix() {
	cjs.M = cjs.Mx = cjs.Matrix2D
	$Mx = cjs.m2d = function () {
		var g = G(arguments), o
		if (A(g.f)) {
			return $Mx.apply(null, g.f)
		}
		o = g.O ? g.f :
				U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
				{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
		dfMx(o)
		return new cjs.Mx(o.a, o.b, o.c, o.d, o.tx, o.ty)
		function dfMx(o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
			o.a = N1(o.a)
			o.b = N0(o.b)
			o.c = N0(o.c)
			o.d = N1(o.d)
			o.tx = N0(o.tx)
			o.ty = N0(o.ty)
			return o
		}
	}
	$tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
		return $Mx().appendTransform(
				N0(x), N0(y), N1(sx), N1(sy), rt, kx, ky, rx, ry)
	}
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
__S = function () {
	var g = G(arguments)
	st = stage = new cjs.Stage($.cv(980, 640).A()[0]);
	if (g.p) {
		st.b('me')
	}
	T.setFPS(24);
	T.on("tick", st);
	lib = {}
	images = img = {}
	loader = new cjs.LoadQueue(false);
	return st
}
__St = function () {
	st = $St(2000, 1000);
	h = st.h()//.drag()
	cjs.SL(h)
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
	p1 = $pD(vs1);
	p2 = $pD(vs2)
}
cjs.bm = cjs.bitmap = function (img) {
	var g = G(arguments),
			img = g[0],
			bm
	bm = new cjs.Bitmap(img)
	if (g.N) {
		bm.rCenter()
	}
	return bm
}
cjs.bm = cjs.bitmap = function (img) {
	var g = G(arguments),
			img = g[0],
			bm
	bm = new cjs.Bitmap(img)
	if (g.N) {
		bm.rCenter()
	}
	return bm
}
cjs.bm = cjs.bitmap = function (img) {
	var g = G(arguments),
			img = g[0],
			bm
	bm = new cjs.Bitmap(img)
	if (g.N) {
		bm.rCenter()
	}
	return bm
}
cjs.bulletHit = function (bullet, inWhat) {
	var x = bullet.centerX(),
			y = bullet.centerY()
	var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
	if (res == true) {
		$l('hit!')
	}
	return res
}
testImgRegCenter = function () {
	mockStage()
	s.bm('me', function (bm) {
		b1 = bm
		bm.spin().drag()
	})
	s.bm('me', function (bm) {
		b2 = bm
		bm.sXY(0.5, 0.3).spin().drag()
	})
	s.A(c = cjs.circle(4).XY(200))
}
SETTRANSFORM = function () {
	s = cjs.stage(800).A()
	s.bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
cjs.isDisplayOb = function (ob) {
	return O(ob) && F(ob.getStage)
}
testInStage = function () {
	s = cjs.stg()
	s.bm('me', function (b) {
		me = b
		me.startMoving(10, 10)
		cjs.tick(function () {
			$l(me.inStage())
		})
	})
}
SETTRANSFORM = function () {
	s = cjs.stage(800).A()
	s.bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
cjs.isDisplayOb = function (ob) {
	return O(ob) && F(ob.getStage)
}
cjs.iDO = function (i) {
	return O(i) && F(i.getStage)
} //cjs.isOb = function (s) {return O(s) && s.parent}
cjs.rmOb = function (ob) {
	if (cjs.iDO(ob)) {
		ob.rm()
	}
}
$Bm = function (i) {
	var bm
	var g = G(arguments)
	if (O(i)) {
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {
				bm.drag()
			}
			return bm
		}
		bm = $Bm(i.i)
		if (i.al) {
			bm.al(i.al)
		}
		if (i.fl) {
			bm.fl(i.fl)
		}
		if (i.aF2) {
			bm.aF2(i.aF2)
		}
		return bm
	}
}
testInStage = function () {
	s = cjs.stg()
	s.bm('me', function (b) {
		me = b
		me.startMoving(10, 10)
		cjs.tick(function () {
			$l(me.inStage())
		})
	})
}
SETTRANSFORM = function () {
	s = cjs.stage(800).A()
	s.bm('me', function (me) {
		b = me
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
cjs.isDisplayOb = function (ob) {
	return O(ob) && F(ob.getStage)
}
cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
cjs.stg = cjs.stage = function (a, b, c, d, e) {
	var stage
	cjs.watchKeys()
	//get by canvas ID.. eh, a sloppy hack?? it ok
	if (A(a)) {
		stage = new cjs.Stage(a[0])
	}
	
	//if you pass it a canvas OR a $canvas object
	else if (O(a)) {
		stage = new cjs.Stage($(a)[0])
	}
	
	
	//create a new canvas
	else {
		stage = new cjs.Stage(
				$.canvas(a, b, c, d, e) [0]
		)
	}
	stage.can = stage.c = $(stage.canvas)
	return stage.tick()
}
cjs.S = function (col) {
	z()
	col = col || 'pink'
	s = cjs.stg(col, 800, 500).A()
	return s
}
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.canvas(a, b, c)
	can2 = $.canvas('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
HUD = function () {
	z()
	s = cjs.HUD('r', 500, 500).A()
	s.bm('guy')
	s.HUD.A().bm('me', function (b) {
		TR(b)
	})
}
STG2 = function () {
	z();
	return cjs.stage(800, 300).A()
}
mockStage = function () {
	z()
	return s = stage = cjs.stage(800, 500).tick().A()
}
STG = function () {
	z();
	s = cjs.stage(1000, 500).A()
	s.bm('me',
			function (bb) {
				b = bb.drag()
			})
}
NEWSTG = function () {
	z()
	//three ways to make a new stage
	s = cjs.stg('r', 100).A().bm('me')
	s.can.drag()
	c = $.canvas('b', 100).A().drag().XY(400)
	s1 = cjs.stg(c)
	s1.A().bm('me')
	c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = cjs.stg(['someId'])
	s2.tick().bm('me')
}
cjs.S = cjs.Stage
$St = function () {
	var g = G(arguments),
			cv, st
	if (S(g.f) && $('#' + g.f).length) {
		cv = g.f
	}
	else if (O(g.f)) {
		cv = $(g.f)[0]
	}
	else {
		cv = S(g.f) ?
				$.c(
						g.f || 'p',
						g.s || 1200,
						g.t || 600,
						g[3], g[4])[0] :
				$.c(
						g.f || 1200,
						g.s || 600,
						g.t, g[3])[0]
	}
	st = new cjs.Stage(cv)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	if (!g.n) {
		st.can.A()
	}
	//if (g.p) {st.t() }//.t()
	return st.t()
}
St = function () {
	var g = G(arguments);
	z();
	s = st = $St(
			g[0] || 'p',
			1200, 600
	)
	h = $h(0, 0).a2(s)
	if (g.p) {
		SL(h)
	}
	return s
}
cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
function stage() {
	cjs.stg = cjs.stage = function (a, b, c, d, e) {
		var stage
		cjs.watchKeys()
		//get by canvas ID.. eh, a sloppy hack?? it ok
		if (A(a)) {
			stage = new cjs.Stage(a[0])
		}
		
		//if you pass it a canvas OR a $canvas object
		else if (O(a)) {
			stage = new cjs.Stage($(a)[0])
		}
		
		
		//create a new canvas
		else {
			stage = new cjs.Stage(
					$.canvas(a, b, c, d, e) [0]
			)
		}
		stage.can = stage.c = $(stage.canvas)
		return stage.tick()
	}
	cjs.S = function (col) {
		z()
		col = col || 'pink'
		s = cjs.stg(col, 800, 500).A()
		return s
	}
	cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
		var stage, can1, can2
		can1 = $.canvas(a, b, c)
		can2 = $.canvas('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
		stage = new cjs.Stage(can1[0]).tick()
		stage.c = can1
		stage.HUD = new cjs.Stage(can2[0]).tick()
		return stage
	}
	cjs.tripleStage = function (color, w, h) {
		var stage, can0, can1, can2
		can0 = $.can(color, w, h).P('a').XY(0, 0)
		can1 = $.can('X', w, h).P('a').XY(0, 0)
		can2 = $.can('X', w, h).P('a').XY(0, 0)//.opacity(.8)
		stage = new cjs.Stage(can1[0]).tick()
		stage.c = can1
		stage.back = new cjs.Stage(can0[0]).tick()
		stage.back.linGrad = function (col1, col2) {
			col1 = oO('c', col1 || 'b');
			col2 = oO('c', col2 || 'r')
			var h = this.H(), w = this.W()
			this.shape.linGrad([col1, col2], [0, 1], 0, 0, 0, h).dr(0, 0, w, h)
		}
		stage.back.shape = stage.back.shape(0, 0, 'w')
		stage.HUD = new cjs.Stage(can2[0]).tick()
		return stage
	}
	HUD = function () {
		z()
		s = cjs.HUD('r', 500, 500).A()
		s.bm('guy')
		s.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	STG2 = function () {
		z();
		return cjs.stage(800, 300).A()
	}
	mockStage = function () {
		z()
		return s = stage = cjs.stage(800, 500).tick().A()
	}
	STG = function () {
		z();
		s = cjs.stage(1000, 500).A()
		s.bm('me',
				function (bb) {
					b = bb.drag()
				})
	}
	NEWSTG = function () {
		z()
		//three ways to make a new stage
		s = cjs.stg('r', 100).A().bm('me')
		s.can.drag()
		c = $.canvas('b', 100).A().drag().XY(400)
		s1 = cjs.stg(c)
		s1.A().bm('me')
		c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
		s2 = cjs.stg(['someId'])
		s2.tick().bm('me')
	}
}
function write() {
	cjs.chalk = function (text, color) {
		color = oO('c', color || 'white')
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
}
$mugTest = function () {
	z();
	s = cjs.stage(800, 800).A()
	s.mug(function (mug) {
		m = mug
	})
}
function dittoDitto() {

//CONTAINER ////////////////////////////////////////////////////////////////
	cjs.stg = cjs.stage = function (a, b, c, d, e) {
		var stage
		cjs.watchKeys()
		//get by canvas ID.. eh, a sloppy hack?? it ok
		if (A(a)) {
			stage = new cjs.Stage(a[0])
		}
		
		//if you pass it a canvas OR a $canvas object
		else if (O(a)) {
			stage = new cjs.Stage($(a)[0])
		}
		
		
		//create a new canvas
		else {
			stage = new cjs.Stage(
					$.canvas(a, b, c, d, e) [0]
			)
		}
		stage.can = stage.c = $(stage.canvas)
		return stage.tick()
	}
	cjs.S = function (col) {
		z()
		col = col || 'pink'
		s = cjs.stg(col, 800, 500).A()
		return s
	}
	HUD = function () {
		z()
		s = cjs.HUD('r', 500, 500).A()
		s.bm('guy')
		s.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	STG2 = function () {
		z();
		return cjs.stage(800, 300).A()
	}
	mockStage = function () {
		z()
		return s = stage = cjs.stage(800, 500).tick().A()
	}
	STG = function () {
		z();
		s = cjs.stage(1000, 500).A()
		s.bm('me',
				function (bb) {
					b = bb.drag()
				})
	}
	s = p = cjs.Stage.prototype
	cjs.chalk = function (text, color) {
		color = oO('c', color || 'white')
		if (O(text)) {
			text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		}
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	$mugTest = function () {
		z();
		s = cjs.stage(800, 800).A()
		s.mug(function (mug) {
			m = mug
		})
	}
	NEWSTG = function () {
		z()
		//three ways to make a new stage
		s = cjs.stg('r', 100).A().bm('me')
		s.can.drag()
		c = $.canvas('b', 100).A().drag().XY(400)
		s1 = cjs.stg(c)
		s1.A().bm('me')
		c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
		s2 = cjs.stg(['someId'])
		s2.tick().bm('me')
	}
}
cjs.chalk = function (text, color) {
	color = oO('c', color || 'white')
	return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
}
CHALK = function () {
	w = b2d.mW()
	s = w.s
	s.bm('me')
	text = cjs.chalk('some information ....')
	text2 = cjs.chalk('some more').XY(50, 90)
	s.A(text, text2)
}
$Ct = function (a) {
	return new cjs.Container(a)
}
 
 
