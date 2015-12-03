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
$.isCvId = $.iCI = function (id) {
	return S(id) && $('#' + id).length
}

cjs = createjs
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

$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
 

cjs.St=cjs.Stage

$St =  cjs.stg = cjs.stage = function () {
	var _$St = function (cv) {
		var $StCv = function () {
			var g = G(arguments), o, st
			var _$StCv = function (cv) {
				return new cjs.Stage($.c.apply($, arguments)[0])
			}
			var __$St = function (cv) {
				return new cjs.Stage(cv)
			}
			st = A(g.f) ? __$St(g.f[0]) :
					$.isCvId(g.f) ? __$St(g.f) :
							O(g.f) ? __$St($(g.f)[0]) :
									_$StCv.apply(null, g)
			return st
		}
		//get by canvas ID.. if in arr (but this depped)
//if you pass it a canvas OR a $canvas object
//	stage = new cjs.Stage($(a)[0])
		//create a new canvas
//else {stage = new cjs.Stage($.c(a, b, c, d, e) [0])}
		return cv ? $StCv.apply(null, arguments) :
				new cjs.Stage($.c('o', 1000, 600)[0])
	}
	var g = G(arguments)
	var st = _$St.apply(null, arguments)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	st.can = st.c = $(st.canvas)
	st.t()
	if (g.m) {st.b('me')}
	return st
}
St = St$ = $S$ = cjs.S = __S = function () {
	var g = G(arguments)
	s = stage = st = $St.apply(null, arguments)
	lib = {}
	images = img = {}
	loader = new cjs.LoadQueue(false);
	h = $h(0, 0).drag().a2(st)
	h.graphics.C('r', 'b', 20)
	return st
}
$Ct = cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
$Pt = cjs.P = cjs.Pt = function (x, y) {
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
_$Bm=function(i){
	return	new cjs.Bitmap(i)
}
$Bm = cjs.bitmap = cjs.bm = function () {var g = G(arguments)
	var  i = g[0]
	//return new cjs.Bitmap(i)
	//if (O(i)) {
		if ($.iI(i)) {
			i = $(i)[0];
			bm = new cjs.Bitmap(i)
			if (g.p) {bm.drag()}
			return bm
		}
		
		bm = $Bm(i.i)
		if (i.al) {bm.al(i.al)}
		if (i.fl) {bm.fl(i.fl)}
		if (i.aF2) {bm.aF2(i.aF2)}
		if (g.N) {bm.rCenter()} // should be !g.n ?
		return bm
	//}
	
	
}

////
cjs.rmOb = function (ob) {
	if (cjs.iDO(ob)) {
		ob.rm()
	}
}
//point:
//shadow:
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

//klass:
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


//matrix:
cjs.M = cjs.Mx = cjs.Matrix2D
cjs.iDO = cjs.isDisplayOb = function (ob) {
	return O(ob) && F(ob.getStage)
}
cjs.isCont = cjs.iCt = function (ct) {
//haha only a ct can impl addContainer( ha! //MOMENT OF BRILLIANCE
	return O(ct) && ct.addChild
}
cjs.iH = cjs.isShape = function (h) {
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
cjs.isText = cjs.iT = function (t) {
	if (O(t)) {
		return (t.textBaseline)
	}
}
cjs.hasDim = function (bm) {
	return !cjs.iH(bm) && !cjs.iCt(bm)
}
//advanced:
cjs.bulletHit = function (bullet, inWhat) {
	var x = bullet.centerX(),
			y = bullet.centerY()
	var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
	if (res == true) {
		$l('hit!')
	}
	return res
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.c(a, b, c)
	can2 = $.c('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
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
gx._f = function (col) {
	return this.f(oO('c', col))
}
gx._s = function (col) {
	return this.s(oO('c', col))
}
gx._ss = function (thickness, caps, joints, miterLm, ignoreScale) {
	var gx = this//=0//=0//=10//=false
	gx.setStrokeStyle(thickness, caps, joints, miterLm, ignoreScale)
	return gx
}
gx.C = gx.fC = gx.cCL = gx.fs = function (f, s, w) {
	return this._f(f || 'z')._s(s)._ss(N(w, 2))
}
gx.col = gx.sC = function (sCol, thickness) {
	return this._s(sCol).SS(thickness)
}
gx.F = function (col) {
	return this._f(col || 'z')
}
gx.FS = function () {
	return this.F().S().SS()
}
gx.S = function (col) {
	return this._s(col || 'w')
}
gx.SS = function (thickness, caps, jts, mtrLm, igSc) {
	return this._ss(N(thickness, 4), caps, jts, mtrLm, igSc)
}
gx._bf = function (i, tf) {
	return this.bf(i, null, tf)
}
gx._bs = function (i, tf) {
	return this.bs(i, null, tf)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.lW = _.gS('linewidth')
t.lH = _.gS('lineHeight') //o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
t.lWH = function (w, h) {
	return this.lW(w).lH(N(h, w))
}
t.lineH = t.lH = function (lH) {
	if (U(lH)) {
		return this.lineHeight
	}
	this.lineHeight = lH
	return this
}
t.lineW = t.lW = function (lW) {
	if (U(lW)) {
		return this.lineWidth
	}
	this.lineWidth = lW
	return this
}
t.lWH = function (w, h) {
	if (U(h)) {
		h = w
	}
	;
	return this.lW(w).lH(h)
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.ol = _.gS(t, 'outline')
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.outL = t.oL = function (outline) {
	if (U(outline)) {
		return this.outline
	}
	this.outline = outline
	return this
}
t.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
	return this
}
t.mW = t.measW = t.measuredW = function () {
	return this.getMeasuredWidth()
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (font) {
	if (U(font)) {
		return this.font
	}
	if (N(font)) {
		font = font + 'px Arial'
	}
	this.font = font
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.F = t.fo = function (f) {
	if (U(f)) {
		return this.font
	}
	this.font = N(f) ? f + 'px Arial' : f
	return this
}
t.C = t.col = function (color) {
	if (U(color)) {
		return this.color
	}
	this.color = oO('c', color)
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.tA = function (a) {
	$l('tA')
	if (U(a)) {
	}
	this.textAlign = (a)
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.align = t.textA = t.tA = function (textAlign) {
	if (U(textAlign)) {
		return this.textAlign
	}
	this.textAlign = textAlign
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.bl = function (bl) {
	var g = G(arguments)
	if (g.p) {
		bl = 'bottom'
	}
	if (g.n) {
		bl = 'top'
	}
	if (bl === '') {
		bl = 'middle'
	}
	if (U(bl)) {
		return this.textBaseline
	}
	this.textBaseline = bl
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
t.baseline = t.textB = t.tB = function (textBaseline) {
	if (U(textBaseline)) {
		return this.textBaseline
	}
	this.textBaseline = textBaseline
	return this
}
cjs.T = cjs.Tx = function (text, font, color, x, y) {
	x = N(x) ? x : 600
	y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	if (N(font)) {
		font = font + 'px Arial'
	}
	font = font || '50px Arial'
	color = color || 'y'
	textOb = new createjs.Text(text, font, oO('c', color))
	textOb.regX = textOb.W() / 2
	textOb.XY(x, y)
	return textOb
}
cjs.text = function (text, color, font, x, y) {


//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	x = N(x) ? x : 100
	y = N(y) ? y : x
	font = font || '20px Arial'
	font = N(font) ? font + 'px Arial' : font
	color = color || 'z'
	var textOb = new createjs.Text(text, font, oO('c', color)).XY(x, y)
	return textOb
}
cjs.niceText = function (text, x, y) {
	var t = cjs.text(text, 'yellow', '40px Arial')
	if (N(x)) {
		t.XY(x, y)
	}
	return t.drag()
}
$Tx = function (a, f, c, x, y) {
	var t
	if (N(f)) {
		f = String(f) + "px Arial"
	}
	if (S(c)) {
		c = oO('c', c)
	}
	t = new cjs.Text(a, f, c)
	if (O(x)) {
		if (F(x.cen)) {
			x = x.cen()
		}
		y = x.y
		x = x.x
	}
	if (N(x)) {
		t.X(x)
	}
	if (N(y)) {
		t.Y(y)
	}
	return t
}
$T = function (a, b, c, d, e) {
	var g = G(arguments), o, t
	return new cjs.Text(a, b, c, d, e)
	o = g.O ? g.f :
	{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
	o.f = N(o.f) ? o.f + 'px Arial' : o.f
	o.f = o.f || '50px Arial'
	o.c = o.c || 'y'
	o.x = N(o.x, 600)
	o.y = N(o.y, 100)
	t = new cjs.Text(o.t, o.f, o.c)
	t.XY(o.x, o.y).drag()
	if (g.n) {
		t.regX = t.W() / 2
	}
	if (g.p) {
		t.bl('alphabetic')
	}
	return t.bl('middle')
}
cjs.chalk = function (text, color) {
	color = oO('c', color || 'white')
	if (O(text)) {
		text = 'x: ' + text.x + ', ' + 'y: ' + text.y
	}
	return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
}
_$Tx = function (a, b, c, d, e, f) {
	return new cjs.Text(a, b, c, d, e, f)
}
 