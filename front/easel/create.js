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
 function matrix(){
	 $Rec = function (a, b, c, d) {
		 return new cjs.Rectangle(a, b, c, d)
	 }
	 mx = cjs.Matrix2D.prototype
	 mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
		 x = N(x, 0)
		 y = N(y, 0)
		 scaleX = N(scaleX, 1)
		 scaleY = N(scaleY, 1)
		 rotation = N(rotation, 0)
		 return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
	 }
	 $Mx = cjs.m2d = function () {
		 var _MxOb = function (mx) {
			 return new cjs.Matrix(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
		 }
		 var g = G(arguments), o;
		 if (A(g.f)) {
			 return $Mx.apply(null, g.f)
		 }
		 o = g.O ? g.f :
				 U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
				 {a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
		 var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
			 o.a = N1(o.a)
			 o.b = N0(o.b)
			 o.c = N0(o.c)
			 o.d = N1(o.d)
			 o.tx = N0(o.tx)
			 o.ty = N0(o.ty)
			 return o
		 }
		 return _MxOb($mxDf(o))
	 }
	 $Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
		 return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
	 }
	 h._bfTf = h._bfT = function (img) {
		 var g = G(arguments)
		 var props = A(g.s) ? g.s : g.r
		 return this._bf(img, $Tf(props)) //gant!
	 }
	 h._bfTfArrs = h._bfTAs = function (str, tfPropsArr, fn) {
		 var h = this, g = G(arguments), o
		 o = A(g.s) ?
		 {i: g.f, tf: g.s, fn: g.t} :
		 {i: g.f, fn: g.s}
		 $.i(o.i, function (i) {
			 var fn = _.tFn(o.fn)
			 fn(h._bf(g.f, $Tf(_.tA(o.tf))))
		 })
		 return h
	 }
	 dO.tf = dO.transform = function () {
		 var dO = this, g = G(arguments)
		 dO.setTF = dO.sTf = function () {
			 var dO = this, g = G(arguments)
			 dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
			 return dO
		 }
		 dO.getTf = dO.gTf = dO.getTransform = function () {
			 var dO = this
			 return [
				 dO.x, dO.y, dO.scaleX, dO.scaleY,
				 dO.rotation, dO.skewX, dO.skewY,
				 dO.regX, dO.regY
			 ]
		 }
		 return g.f ?
				 dO.sTf.apply(dO, g.A_ ? g.f : g) :
				 dO.gTf()
	 }
	 dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
		 var dO = this, g = G(arguments)
		 dO.nominalBounds = $Rec(a, b, c, d)
		 return dO
	 }
	 dO.setBds = dO.sBd = dO.gTB = function () {
		 var dO = this, g = G(arguments)
		 if (g.u) {
			 return dO.getTransformedBounds()
		 }
		 dO.setBounds.apply(dO, g)
		 return dO
	 }
	 dO.catProps = dO.gCDP = function () {
		 var dO = this
		 return dO.getConcatenatedDisplayProps()
	 }
	 dO.mx = dO.gM = function () {
		 return this.getMatrix()
	 }
	 dO.mxMx = dO.cMx = dO.ccMx = dO.gCM = function () {
		 var dO = this
		 return dO.getConcatenatedMatrix()
	 }
	 /*
	  getConcatenatedDisplayProps ( [props] ) DisplayProps
	  Inherited from DisplayObject: getConcatenatedDisplayProps:999
	  Generates a DisplayProps object representing the combined 
	  display properties of the object
	  and all of its parent Containers up to the highest level ancestor 
	  (usually the Stage).
	  Parameters:
	
	  [props] DisplayProps optional
	  A DisplayProps object to populate with the calculated values. 
	  If null, a new DisplayProps object is returned.
	  Returns:
	
	  DisplayProps: The combined display properties.
	  */
//brilliant demo
	 MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		 z()
		 $.div('b', 50, 50).A()
		 stage = s = cjs.stage(1600, 1000).tick().A()
		 // on stage enter, change background color, though you
		 // cant see it here because stage fills screen
		 // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		 stage.on('e', co)
		 //make a container
		 stage.ct(function (c, s) {
			
			 //the little me clicks do not hit the 'big' me underneath it.  that's normal.
			 //but it does hit the container.  but this example shows off 'remove', so it only hits once
			 //however, it continues to propogate on to the container. hmmm..
			 c.bm('me',
					 function (b) {
						 b.sXY(.2).XY(100, 80)
						 b.on(click, function () {
							 $l('lit')
						 }, '/')  //on click, log('lit'), just once (remove listener)!
					 })
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			 c.bm('me', function (bm) {
				 bm.sXY(.4).XY(100, 180)
				 bm.on('click', function () {
					 $l('mid')
				 }, '-')  //on click, log('mid'), and stop prop
			 })
			 c.bm('me', function (bm) {
				 bm.sXY(1.5)
				 bm.on('click', function () {
					 $l('big')
				 })  //on click, log('big')
			 })
			 //on click, log('con')
			 c.on('click', function () {
				 $l('con')
			 })
		 })
		 stage.ct(function (c) {
					 var vn = 0,
							 rvn = 0,
							 on = 0,
							 ron = 0
					 c.X(200)
					 c.mug(
							 function (b) {
								 b.sXY(.8).XY(200, 80)
							 })
					 c.mug(
							 function (b) {
								 b.sXY(.8).XY(100, 280)
							 })
					 c.mg(
							 function (b) {
								 b.sXY(.8).XY(340, 180)
							 })
					 //this shows over/out vs rollover/rollout
					 //over/out get retriggered when switching between connected sprites
					 //rollover/rollout does not because it is still touching 'something'
					 c.on('mouseover', function () {
						 c.X(10, '+');
						 $l('v: ' + vn++)
					 })
					 c.on('rollover', function () {
						 c.X(20, '-');
						 $l('rv: ' + rvn++)
					 })
					 c.on('mouseout', function () {
						 c.Y(10, '+');
						 $l('o: ' + on++)
					 })
					 c.on('rollout', function () {
						 c.Y(20, '-');
						 $l('ro: ' + ron++)
					 })
				 }
		 ).MV(40)
		 stage.container(function (container, stage) {
			 container.X(700)
			 container.mug(function (bm) {
				 bm.sXY(.8).XY(200, 80)
			 })
			 container.mug(function (bm) {
				 bm.sXY(.8).XY(100, 280)
			 })
			 container.mug(function (bm) {
				 bm.sXY(.8).XY(340, 180)
			 })
			 //this example shows which sprites are acted upon with over/rollover
			 //over only affects one
			 //rollover affects ALL
			 //if you enter a sprite from outside, they all grow (via rollover),
			 //and the one sprite grows double (via over)
			 container.on('mouseover', function () {
				 $l('mouseover')
				 this.sXY(.01, '+')
			 })
			 container.on('rollover', function () {
				 $l('rv')
				 this.sXY(.01, '+')
			 })
			 container.on('mouseout', function () {
			 })
			 container.on('rollout', function () {
			 })
			 // in summary,
			 // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			 // BUT, they will all recieve events separately
		 }).MV(40) //??? mouse events? speed for some mouse checking thing
		 stage.container(function (container, stage) {
			 container.x = 1400
			 container.bm('me', function (bm) {
				
				
				 //make the little me slide the entire container
				 //it acts as a handle! (for its container)
				 lit = bm.sXY(.2).XY(100, 80)
				 SL(bm, container)
				 container.bm('me', function (bm) {
//big me will scale the little me
					 big = bm.sXY(2).XY(100, 180)
					 SC(bm, lit)
					 container.bm('me', function (bm) {
						 bm.sXY(.6).XY(150, 180)
						 SL(bm)
						 RT(bm, big)
					 })
				 })
			 })
//guy slides stage
			 container.bm('guy', function (bm) {
				 bm.sXY(.4).XY(100, 180)
				 SL(bm, stage)
			 })
		 })
	 }
	 MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		 z()
		 $l('matrix')
		 $.div('blue', 50, 50).A()
		 stage = s = createjs.stage(1600, 1000).A().tick()
		 // on stage enter, change background color, though you
		 // cant see it here because stage fills screen
		 // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		 stage.on('mouseenter', function () {
			 $('body').C($r())
		 })
		 stage.A(container = c = new createjs.Container())
		 container.bm('me', function (bm) {
			 //b.sxy(.2).xy(100,80)
			 //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
		 })
		 //make a container
		 stage.ct(function (c, s) {
			
			 //the little me clicks do not hit the 'big' me underneath it.  that's normal.
			 //but it does hit the container.  but this example shows off 'remove', so it only hits once
			 //however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			 c.bm('me', function (b) {
				 b.sXY(.4).XY(100, 180)
				 //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
			 })
			 c.b('me', function (b) {
				 b.sXY(1.5)
				 // b.o('$',fL('big'))  //on click, log('big')
			 })
			 //on click, log('con')
			 //c.o('$',  fL('con'))
		 })
		 stage.ct(function (c) {
			 var vn = 0,
					 rvn = 0,
					 on = 0,
					 ron = 0
			 c.X(200)
			 c.mug(
					 function (b) {
						 b.sXY(.8).XY(200, 80)
					 })
			 c.mug(
					 function (b) {
						 b.sXY(.8).XY(100, 280)
					 })
			 c.mg(
					 function (b) {
						 b.sXY(.8).XY(340, 180)
					 })
			 //this shows over/out vs rollover/rollout
			 //over/out get retriggered when switching between connected sprites
			 //rollover/rollout does not because it is still touching 'something'
			 // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
			 //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
			 // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
			 //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
		 })//.MV(40)
		 stage.ct(function (c, s) {
			 c.x(700)
			 c.mg(function (b) {
				 b.sxy(.8).xy(200, 80)
			 })
			 c.mg(function (b) {
				 b.sxy(.8).xy(100, 280)
			 })
			 c.mg(function (b) {
				 b.sxy(.8).xy(340, 180)
			 })
			 //this example shows which sprites are acted upon with over/rollover
			 //over only affects one
			 //rollover affects ALL
			 //if you enter a sprite from outside, they all grow (via rollover),
			 //and the one sprite grows double (via over)
			 c.o('v', function (g, e) {
				 $l('v')
				 g.sxy(.01, '+')
			 })
			 c.o('rv', function (g, e) {
				 $l('rv')
				 g.sxy(.01, '+')
			 })
			 c.o('o', function (q, e, g) {
			 })
			 c.o('ro', function (q, e, g) {
			 })
			 // in summary,
			 // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
			 // BUT, they will all recieve events separately
		 }).MV(40)
		 stage.ct(function (container, stage) {
			 container.X(1400)
			 container.bm('me', function (bm) {
				
				 //make the little me slide the entire container
				 //it acts as a handle! (for its container)
				 lit = bm.sXY(.2).XY(100, 80)
				 SL(bm, container)
				 container.bm('me', function (bm) {
//big me will scale the little me
					 big = bm.sXY(2).XY(100, 180)
					 SC(bm, lit)
					 container.bm('me', function (bm) {
						 bm.sXY(.6).XY(150, 180)
						 SL(bm)
						 RT(bm, big)
					 })
				 })
			 })
//guy slides stage
			 container.bm('guy', function (bm) {
				 bm.sXY(.4).XY(100, 180)
				 createjs.bindSlide(bm, stage)
			 })
		 })
	 }
	 MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
		 z()
		 $l('matrix')
		 stage = s = createjs.stage(1600, 1000).A().tick()
		 // on stage enter, change background color, though you
		 // cant see it here because stage fills screen
		 // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
		 stage.on('mouseenter', function () {
			 $('body').C($r())
		 })
		 stage.A(container = c = new createjs.Container())
		 container.bm('me', function (bm) {
			 bm.sXY(.2).XY(100, 80)
			 bm.on('click', function () {
				 $l('lit')
			 }, this, true) //just once
		 })
		 //make a container
		 stage.container(function (container, stage) {
			
			 //the little me clicks do not hit the 'big' me underneath it.  that's normal.
			 //but it does hit the container.  but this example shows off 'remove', so it only hits once
			 //however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
			 container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
				 bm.sXY(.4).XY(100, 180)
				 bm.on('click', function (e) {
					 $l('mid')
					 e.stopPropagation()
				 })
			 })
			 container.bm('me', function (bm) {
				 bm.sXY(1.5)
						 .on('click', function () {
							 $l('big')
						 })
			 })
			 container.on('click', function () {
				 $l('con')
			 })
		 })
	 }
 }
 function mouse(){
	 MOUSEENTERSTAGE = function () {
		 z()
		 stage = s = cjs.stage(500, 500).A().tick()
		 s.bm('me')
		 s.on('mouseenter', function () {
			 $('body').prepend('once<br>')
		 }, null, true)
		 s.on('mouseenter', function () {
			 $('body').prepend('many<br>')
		 }, null, false)
	 }
	 HANDLEEVENT = function () {
		 z()
		 s = createjs.stage(500, 500).A().tick()
		 s.bm('me', function (b) {
			 me = b
			 cb = b.on('pressmove', function () {
				 this.x++
			 })
		 })
		 s.bm('guy', function (b) {
			 b.handleEvent = function () {
				 this.y++
			 }
			 b.on('pressmove', b)
		 })
	 }
	 REMOVEEVENT = function () {
		 z()
		 s = createjs.stage(500, 500).A().tick()
		 s.bm('me', function (b) {
			 me = b
			 cb = b.on('pressmove', function () {
				 this.x++
			 })
		 })
		 s.bm('guy', function (b) {
			 b.handleEvent = function () {
				 this.y++
				 me.off('pressmove', cb)
			 }
			 b.on('pressmove', b)
		 })
	 }
//beautiful demo i stole! :)
	 HITCIRCLES = function () {
		 z()
		 stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
		 container = new createjs.Container()
		 stage.A(container.XY(150))
		 _.times(25, function () {
			 var shape = new createjs.Shape()
			 shape.graphics.f(randomHSL()).dc(0, 0, 30)
			 holder.A(shape.XY(randomLocation(), randomLocation()))
		 })
		 cjs.Ticker.on("tick", tick)
		 function randomLocation() {
			 return Math.random() * 300 - 150
		 }
		
		 function randomHSL() {
			 return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
		 }
		
		 function tick(event) {
			 holder.rotation += 3
			 var numChildren = holder.getNumChildren()
			 _.each(holder.children, function (child) {
				 child.alpha = child.underMouse() ? 1 : 0.1
			 })
			 /*
			  for(var i = 0; i < numChildren; i++){  //for each child
			
			  var child = holder.getChildAt(i)
			  child.alpha = 0.1
			  var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
			  if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
			  child.alpha = 1}
			  }
			  */
			 stage.update(event)
		 }
	 }
 }
 function loader(){
	 _mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
	 _MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
	 $it = function (i) {
		 var _$it = function (i) {
			 return {src: _.src(i), id: i}
		 }
		 return S(i) ? _$it(i) : i
	 }
	 $its = function (its) {
		 var g = G(arguments)
		 if (!g.A) {
			 its = g
		 }
		 return _.m(its, $it)
	 }
	 $Mf = function (mf, fn) {
		 return $Ld(fn).mf(mf)
	 }
	 _$Ld = function () {
		 return new cjs.LoadQueue(true)
	 }
	 $Ld = $ld = cjs.lQ = Q = function () {

//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
		 var g = G(arguments), o
		 o = g.F_ ? {done: g.f, file: g.s} :
				 (g.A_ || g.S_) ? {mf: g.f, done: g.s, file: g.t} :
						 g.f
		 o.mf = o.mf || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
		 var ld = _$Ld()
		 if (o.file) {
			 ld.file(o.file)
		 }
		 if (o.done) {
			 ld.done(function (e) {
				
				 //o.done(function(i) {return ld.i(i)}, e)
				 o.done(ld)
			 })
		 }
		 if (o.mf) {
			 ld.mf(o.mf)
		 }
		 Q = ld
		 Q.ran = true
		 return Q
	 }
	 Q.ran = false
	 Q1 = function (imgs, fn) {
		 var q = cjs.lq()
		 mf = []
		 _.e(imgs, function (v) {
			 mf.push({
				 src: cjs.src(v),
				 id: v
			 })
		 })
		 q.manifest(mf)
		 q.complete(function () {
			 fn(q)
		 })
	 }
	 ld = cjs.LoadQueue.prototype
	 ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
		 i = this.getResult(i);
		 i.w = i.width;
		 i.h = i.height;
		 return i
	 }
	 ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
		 if (F(fn)) {
			 this.on("complete", fn)
		 }
		 return this
	 }
	 ld.bm = ld.b = function (i, ct, x, y) {
		 var ld = this
		 var bm = _$Bm(ld.get(i))
		 if (N(ct)) {
			 bm.XY(ct, x)
		 }
		 else if (O(ct)) {
			 bm.a2(ct, x, y)
		 }
		 return bm
	 }
	 ld.mf = function (mf) {
		 // q.mf protosig: 
		 // (1) 'me',..
		 // (2)  {src:'me', id:'him'},.. 
		 // (3) [ {src:*, id:*}, 'me',.. ]		
		 mf = $its(A(mf) ? mf : G(arguments))
		 this.loadManifest(mf)
		 return this
	 }
	 function fileLoad() {
		 ld.dfF = cjs.handleFileLoad = function (e) {
			 alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
			 images = window['images'] || {}
			 if (e.item.type == "image") {
				 images[e.item.id] = e.result
			 }
		 }
		 ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
			 this.on("fileload", fn)
			 return this
		 }
	 }
	
	 ld.jQuery = ld.$ = function (i) {
		 return $(this.i(i))
	 }
	 guyIt = {id: "guy", src: "/guy.png"}
	 myIt = {id: "myImage", src: "/me.png"}
	 mf1 = [myIt, guyIt];
	 mf2 = [$it("me"), $it(guyIt)]
	 mf3 = ["me", guyIt];
	 mf4 = [myIt, guyIt];
	 mf5 = ['guy', 'me']
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
	 QU0 = function () {
		 Q(mf5, function () {
			 $.A(Q.i('me'))
		 })
	 }
	 QU1 = function () {
		 $Ld(mf1, function (ld) {
			 ld.bm("myImage", $St())
		 })
	 }
	 QU4 = function () {
		 $Ld(mf3, function (ld) {
			 $St().A(ld.bm("me"), ld.bm("guy", 300, 300))
		 })
	 }
	 QU2 = function () {
		 St();
		 $Ld(mf2, function (ld) {
			 ld.bm("me", st);
			 ld.bm("guy", st)
		 })
	 }
	 QU3 = function () {
		 St();
		 $Ld(function (ld) {
			 Q.bm("me", st);
			 Q.bm("guy", st, 300, 300)
		 }).mf("me", guyIt)
	 }
	 ULE = USINGLAYERSINEASEL = function () {
		 St()
		 $Ld(mf5, function (q) {
			 me = q.bm('me', st).scXY(3);
			 guy = q.bm('guy', st).scXY(.5).drag()
			 $t(function () {
				 me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
			 })
		 })
		 $.bt('s.sXY(2)', function () {
			 st.sXY(2)
		 })
	 }
	 QU11 = WINDG = function () {
		 st = $St($.c(960, 400).id("cv").id())
		 $Ld(function (ld) {
			 ld.bm("chicks", st, 470).drag()
					 .mask = cjs.worldsMostInterestingShape().X(470).a2(st).same()//.drag()//!
		 })
	 }
	 QU7 = WOAH = TIMSPIN = function () {
		 St();
		 $Ld(mf5, function () {
			 st.qB('guy').scXY(.5, .3).XY(300, 300).spin()
			 _.in(3, function () {
				 T.f(1)
			 });
			 _.in(9, function () {
				 T.f(1000)
			 })
		 })
	 }
//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()
	 function later() {
		 cjs.mf = cjs.manifest = function () {
			 var g = G(arguments)
			 var mf = []
			 _.e(g, function (i) {
				 mf.push($it(i))
			 })
			 return mf
		 }
		 cjs.handleFileLoad = function (e) {
			 if (e.item.type == "image") {
				 images[e.item.id] = e.result
			 }
		 }
		 cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
			 alert('manifest')
			 return cjs.mf.apply(null, _.m(a.images, function (i) {
						 return _.crs(i)
					 })
			 )
		 }
	 }
 }
 function ticker(){
	 $l('ticker.js')
	 T = cjs.Ticker
	 cjs.ticker = tt = function (a, b, c) {
		 var g = G(arguments),
				 t = true,
				 f = false,
				 a = g[0],
				 b = g[1],
				 c = g[2]
		 if (F(a)) {
			 return aEL(T$, 'tick',
					 g.N ? a
							 : function (e) {
						 if (!e.paused) {
							 a(e)
						 }
					 })
		 }
		 if (O(a)) {
			 return aEL(T$, 'tick', a)
		 }
		 if (a == '?') {
			 return !T$.getPaused()
		 }
		 if (a == 'p') {
			 T$.setPaused(f);
			 return tt('?')
		 }
		 if (a == 's') {
			 T$.setPaused(t);
			 return tt('?')
		 }
		 if (a == 'g') {
			 return tt(
					 tt('?') ? 's' : 'p'
			 )
		 }
		 if (a == '@') {
			 return T$.init()
		 }
		 if (a == '!') {
			 return T$.reset()
		 }
		 if (a == 'e') {
			 return T$.getEventTime(g.p ? t : f)
		 }
		 if (a == 't') {
			 return T$.getTime(g.p ? t : f)
		 }
		 if (a == '#') {
			 return T$.getTicks(g.n ? t : f)
		 }
		 if (a == 'md') {
			 return t$.maxDelta
		 }
		 if (a == 'M') {
			 return T$.timingMode
		 }
		 if (a == 'i') {
			 if (N(b)) {
				 T$.setInterval(g.m ? b * 1000 : b)
				 return tt('i')
			 }
			 if (U(b)) {
				 return T$.getInterval()
			 }
		 }
		 if (a == 'f') {
			 if (N(b)) {
				 T$.setFPS(b);
				 return tt
			 }
			 if (U(b)) {
				 return T$.getFPS()
			 }
		 }
		 if (a == 'r') {
			 if (b > 10) {
				 tt('f', b)
			 } else {
				 tt('i', b, '*')
			 }
		 }
		 if (a == 'm') {
			 return N(b) ? T$.getMeasuredFPS(b)
					 : T$.getMeasuredFPS()
		 }
		 if (a == 'tk') {
			 return Ed(T$)
		 }
	 }
	 cjs.stop = function () {
		 cjs.Ticker.removeAllEventListeners()
	 }
	 tickX = function (e) {
		 j.Y(e.delta / 1000 * 100, '-')
	 }
	 timeStamp2 = function (s, j, pxPerSec) {
		 var fn = function (s, e) {
			 if (!N(j.ts)) {
				 j.ts = 0;
				 j.lts = e.ts
			 }
			 else {
				 j.ts = e.ts - j.lts;
				 j.lts = e.ts
				 j.y((j.ts / 1000) * pxPerSec, '-')
			 }
		 }
		 return s.t(fn)
	 }
	 cjs.t = cjs.tick = function (func) {
		 func();
		 cjs.Ticker.on('tick', func)
	 }
	 cjs.tick2 = function (func) {
		 cjs.Ticker.addEventListener('tick', func)
		 return cjs.Ticker
	 }
	 cjs.stopListening = function () {
		 cjs.Ticker.removeAllEventListeners()
	 }
	 T.t = cjs.t = cjs.tick = function (fn) {
		 var g = G(arguments)
		 if (g.F_) {
			 if (!g.n) {
				 fn()
			 }
			 return T.on('tick', fn) // T.addEventListener? return T?
		 }
		 return g.n ? T.t('+') - T.t() :
				 Number((T.getTime(g.p ? false : true) / 1000).toFixed(2))
	 }
	 T.p = function () {
		 T.setPaused(false);
		 return T
	 }
	 T.P = T.s = function () {
		 T.setPaused(true);
		 return T
	 }
	 T.s = cjs.xL = function () {
		 T.removeAllEventListeners()
	 }
	 T.$ = function () {
		 T.setPaused(T.getPaused() == false ? true : false)
		 return T
	 }
	 T.i = function () {
		 //indicates the target time (in ms) between ticks
		 //default is 50 (20 fps)
		 //Note: actual time between ticks may be more than specified,
		 //  depending on CPU load. (but this property is ignored if the ticker is using the RAF timing mode)
		 return T.interval
	 }
	 T.f = function (numTicks) {
		 var g = G(arguments)  //numTicks:   optional: The number of previous ticks over which to measure the actual frames
// / ticks per second.Defaults to the number of ticks per second.
		 if (N(numTicks)) {
			 T.setFPS(numTicks);
			 return T
		 }
		 return g.n ?
				 T.getFPS() :
				 T.getMeasuredFPS() //returns *ACTUAL* frames
		 // / ticks per second//
		 // Depending on performance,
		 // this may differ from the target frames per second.
	 }
	 T.e = function (runTimePropReturnedInsteadOfTime) {
		 //Similar to getTime(), but returns the time on the most recent tick event object.
// returns the time or runTime property from the most recent tick event or -1.
		 T.getEventTime(runTimePropReturnedInsteadOfTime)//df: false ( If true, the runTime property will be returned instead of time  )
	 }
	 T.m = function (ticks) {
		 return T.getMeasuredTickTime(ticks)
	 } //ticks: // optional The number of previous ticks over which to measure the average time spent in a tick.Defaults to the number of ticks per second.To get only the last tick's time, pass in 1.
	 T.iP = function () {
		 return T.getPaused()
	 }
 }
 
 function protos(){
	 function containerProto() {
		 $l('ctProto')
		 ct = cjs.Container.prototype
		 ct.W = function (w) {
			 var st = this.stage
			 var can = st.canvas
			 if (U(w)) {
				 return can.width
			 }
			 can.width = w
			 return this
		 }
		 ct.H = function (w) {
			 var can = this.getStage().canvas
			 if (U(w)) {
				 return can.height
			 }
			 can.height = w
			 return this
		 }
		 ct._A = function () {
			 return this.addChild.apply(this, arguments)
		 }
		 ct.A = function (arg, y) {
			 var ct = this, g = G(arguments)
			 var bd = $('body')
			 var st = ct.getStage()
			 if (g.u) {
				 if (g.u && st) {
					 //must be stage??
					 bd.A(st ? st.canvas : ct.canvas)
				 }
			 }
			 else if (g.N_) {
				 bd.A(ct.canvas).abs().XY(g.f, g.s)
			 }
			 else {
				 _.e(g, function (ch) {
					 ct._A(ch)
				 })
			 }
			 return ct
		 }
		 ct.addContainer = ct.ct = function (fn) {
			 var ct = this, g = G(arguments)
			 var f = g[0]
			 var ct1 = new cjs.Container().a2(ct)
			 if (fn) {
				 fn(ct1, ct)
			 }
			 if (g.p) {
				 cjs.bindSlide(ct1)
			 }
			 return ct
		 }
		 ct.u = ct.upd = function () {
			 this.update();
			 return this
		 }
		 ct.xCh = ct.removeAll = ct.clr = ct.E = function () {
			 var ct = this
			 ct.each(function (ch) {
				 ch.remove()
			 })
			 return ct
		 }
		 ct.tkCh = function () {
			 var ct = this, g = G(arguments)
			 if (g.u) {
				 return ct.tickChildren
			 }
			 ct.tickChildren = g.f ? true : false
			 return ct
		 }
		 ct.moCh = ct.muCh = ct.mouCh = function () {
			 var ct = this, g = G(arguments)
			 if (g.u) {
				 return ct.mouseChildren
			 }
			 ct.mouseChildren = g.f ? true : false
			 return ct
		 }
		 ct.num = ct.nCh = ct.numCh = function () {
			 return this.numChildren
		 }
		 ct.gOUPs = function () {
			 return this.getObjectsUnderPoint.apply(this, arguments)
		 }
		 ct.gOUP = function () {
			 return this.getObjectsUnderPoin.apply(this, arguments)
		 }
		 ct.soCh = ct.sort = function () {
			 this.sortChildren.apply(this, arguments)
			 return this
		 }
		 ct.swCh = ct.swap = function () {
			 this.swapChildren.apply(this, arguments)
			 return this
		 }
		 ct.swChAt = ct.swapAt = function () {
			 this.swapChildrenAt.apply(this, arguments)
			 return this
		 }
		 ct_ch = function () {
			 return this.children
		 }
		 ct.sCI = ct.sChIx = function () {
			 this.setChildIndex.apply(this, arguments);
			 return this
		 }
		 ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {
			 var ct = this, g = G(arguments)
			 //1) set a child's index
			 if (N(g.s)) {
				 ct.sChIx(g.f, g.s)
				 return ct
			 }
			 var CH = []
			 // get... array of all children..
			 _.e(ct._ch(), function (ch) {
				 CH.push(ch)
			 })
			 // 2)iterate a fn over them
			 if (g.F) {
				 _.e(CH, function (ch) {
					 fn(ch, CH)
				 })
				 return ct
			 }
			 // 3) just return the children
			 return CH
		 }
		 ct.cen = ct.pt = ct.center = function () {
			 return V(this.W() / 2, this.H() / 2)
		 }
		 ct.ct = function (x, y) {
			 var ct = this, g = G(arguments), o
			 o = g.F_ ? {fn: g.f} : {x: g.f, y: g.s}
			 var ct1 = $Ct().a2(ct)
			 if (o.fn) {
				 o.fn(ct1, ct)
			 }
			 else if (N(o.x)) {
				 ct1.XY(o.x, o.y)
			 }
			 if (g.p) {
				 cjs.bindSlide(ct1)
			 }
			 return ct1
		 }
		 ct.Ct = function () {
			 var ct = this
			 ct.ct.apply(ct, arguments)
			 return ct
		 }
		 ct.C = ct.bgC = function (c) {
			 var ct = this
			 $(ct.canvas).C(c)
			 return ct
		 }
		 ct.cX = function () {
			 return this.St().cen().x
		 }
		 ct.cY = function () {
			 return this.St().cen().y
		 }
		 ct.t = ct.tick = function () {
			 cjs.Ticker.addEventListener('tick', this)
			 return this
		 }
		 ct.t = ct.oT = ct.tick = function (fn) {
			 var g = G(arguments)
			 if (F(fn)) {
				 if (!g.n) {
					 fn()
				 }
				 return this.on('tick', fn)
			 }
			 else {
				 T.on('tick', this);
				 return this
			 }
		 }
		 ct.xT = function (fn) {
			 this.off('tick', fn)
			 return this
		 }
		 ct.gSt = ct.gS = ct.st = ct.St = ct.S = function () {
			 return this.stage
		 }
		 ct.N = function (n) {
			 var s = this;
			 if (U(n)) {
				 return s.nextStage
			 }
			 s.nextStage = n;
			 return s
		 }
		 ct.cX = function () {
			 return this.St().cen().x
		 }
		 ct.cY = function () {
			 return this.St().cen().y
		 }
		 ct.noAutoClear = function () {
			 this.autoClear = false
			 return this
		 }
		 ct.eMO = function (en) {
			 this.enableMouseOver(en ? true : false);
			 return this
		 }
		 ct.au = function (au) {
			 this.autoClear = au ? true : false;
			 return this
		 }
		 ct.noAuCl = function () {
			 this.autoClear = false;
			 return this
		 }
		 ct.h = function () {
			 var ct = this,
					 h = $H.apply($H, arguments)
			 ct.A(h)
			 return h
		 }
		 ct.cir = function () {
			 var h = this.h()
			 return h.cir.apply(h, arguments)
		 }
		 ct.cir = function () {
			 var ct = this, g = G(arguments),
					 h = this.h(), o
			 o = g.O ? g.f :
					 N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
					 {r: g.f, c: g.s}
			 o.y = N(o.y, 0);
			 o.x = N(o.x, 0)
			 o.r = N(o.r, 50)
			 h.c(o.c)
			 h.dc(o.x, o.y, o.r)
			 return h
		 }
		 ct.h = function () {
			 var ct = this,
					 h = $H.apply($H, arguments)
			 ct.A(h)
			 return h
		 }
		 ct.poly = function () {
			 var ct = this // ?
			 var h = ct.h()
			 h.poly.apply(h, arguments)
			 return h
		 }
		 ct.pol = function () {
			 var ct = this, g = G(arguments), p,
					 h = ct.h()
			 if (N(g.f)) {
				 h.XY(
						 g.shift(),
						 g.shift())
			 }
			 p = $a(h, 'pol', g)
			 if (g.p) {
				 p.drag()
			 }
			 return p
		 }
		 ct.rec = function () {
			 var ct = this, g = G(arguments), o, ct2, h
			 if (g.OO_) {
				 g.e(this, 'rec');
				 return this
			 } //it doesnt know that's this! (scope talk)
			 o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					 g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			 o.al = N(o.al, 1)
			 o.rt = N(o.rt, 0)
			 o.c = o.c || 'z';
			 o.C = o.C || 'w'
			 ct2 = ct.ct();
			 h = ct2.h(o.x, o.y);
			 h.rt(o.rt);
			 h.c(o).al(o.al)
			 if (o.lf) {
				 h.lf(o)
			 } else if (o.rf) {
				 h.rf(o)
			 }
			 if (o.bm) {
				 h.bR({i: 'me', hs: [o]})
			 }
			 else {
				 h.rec(o.w, o.h)
			 }
			 if (g.p) {
				 ct.drag()
			 }
			 return ct2
		 }
		 ct.cir = function () {
			 var ct = this, g = G(arguments),
					 h = this.h(), o
			 o = g.O ? g.f :
					 N(g.s) ? {x: g.f, y: g.s, r: g.t, c: g[3]} :
					 {r: g.f, c: g.s}
			 o.y = N(o.y, 0);
			 o.x = N(o.x, 0)
			 o.r = N(o.r, 50)
			 h.c(o.c)
			 h.dc(o.x, o.y, o.r)
			 return h
		 }
		 ct.cir = function () {
			 var h = this.h()
			 return h.cir.apply(h, arguments)
		 }
		 ct.circle = function (x, y, rad, color) {
			 this.A(
					 cjs.circle(x, y, rad, color)
			 )
			 return this
		 }
		 ct.circle = function (x, y, rad, color) {
			 this.A(
					 cjs.circle(x, y, rad, color)
			 )
			 return this
		 }
		 ct.circle = function (x, y, rad, color) {
			 this.A(
					 cjs.circle(x, y, rad, color)
			 )
			 return this
		 }
		 ct.shape = function () {
			 return cjs.shape.apply(cjs, arguments).a2(this)
		 }
		 ct.cir = function (x, y, r, f, s, width, opt) {
			 return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
		 }
		 ct.poly = function () { // ?
			 var h = this.shape()
			 h.poly.apply(h, arguments)
			 return h
		 }
		 ct.art = function (x, y, f, s) {
			 var g = G(arguments)
			 if (U(x)) {
				 alert('must at LEAST define x');
				 return
			 }
			 if (!N(x)) {
				 alert('x not a number! but must be, lah');
				 return
			 }
			 y = N(g[1]) ? g[1] : x
			 f = S(g[2]) ? oO('c', g[2]) : null
			 s = S(g[2]) ? oO('c', g[3]) : f
			 var shp = cjs.shp(x, y, f, s)
			 this.A(shp)
			 if (g.p) {
				 shp.drag()
			 }
			 return shp
		 }
		 ct.rec = function () {
			 var ct = this, g = G(arguments), o, ct2, h
			 if (g.OO_) {
				 g.e(this, 'rec');
				 return this
			 } //it doesnt know that's this! (scope talk)
			 o = g.S_ ? {c: g.f, w: g.s, h: g.t, x: g[3], y: g[4], rt: g[5]} :
					 g.N_ ? {w: g.f, h: g.s, x: g.t, y: g[3], rt: g[4]} : g.f
			 o.al = N(o.al, 1)
			 o.rt = N(o.rt, 0)
			 o.c = o.c || 'z';
			 o.C = o.C || 'w'
			 ct2 = ct.ct();
			 h = ct2.h(o.x, o.y);
			 h.rt(o.rt);
			 h.c(o).al(o.al)
			 if (o.lf) {
				 h.lf(o)
			 } else if (o.rf) {
				 h.rf(o)
			 }
			 if (o.bm) {
				 h.bR({i: 'me', hs: [o]})
			 }
			 else {
				 h.rec(o.w, o.h)
			 }
			 if (g.p) {
				 ct.drag()
			 }
			 return ct2
		 }
		 ct.poly = function () {
			 var ct = this, h = ct.h(), g = G(arguments)
			 h.pol.apply(h, arguments)
			 return !g.p ? h : h.drag()
		 }
		 ct.pol = function () {
			 var ct = this, h = ct.h(), g = G(arguments)
			 if (N(g.f)) {
				 h.XY(g.shift(), g.shift())
			 }
			 var h = $a(h, 'pol', g)
			 return !g.p ? h : h.drag()
		 }
		 ct.T = ct.Tx = function () {
			 var ct = this, g = G(arguments), o, t
			 o = g.O ? g.f :
					 g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
							 N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
									 _.x({t: g.f, f: g.s, c: g.t},
											 N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
											 {y: g[3]})
			 o.f = N(o.f) ? o.f + 'px Arial' : o.f
			 o.f = o.f || '50px Arial'
			 o.c = oO('c', o.c || 'y')
			 o.x = N(o.x, 0)
			 o.y = N(o.y, 0)
			 o.t = String(o.t)
			 t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
			 if (g.n) {
				 t.regX = t.W() / 2
			 }
			 t.bl('middle')
			 if (g.p) {
				 t.bl('alphabetic')
			 }
			 if (!g.n) {
				 t.rX(t.mW() / 2)
			 }
			 return t
			 //o.x = N(o.x, this.St().cen().x)
			 /* if(g.p){
			  tO = cjs.T(g.f, 'y', '40px Arial')
			  if(N(g[3])){ tO.XY(g[3], g[4]) }
			  return tO
			  }*/
			 old = function () {
				 ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
					 var ct = this, o, cX
					 st = this.getStage()
					 cX = st.cen().x
					 o = (N(x) && U(y)) ? {y: x, x: cX} :
							 U(x) ? {x: cX, y: 100} :
							 {t: t, f: f, c: c, x: x, y: y}
					 var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
					 ct.A(t)
					 return t
				 }
			 }
		 }
		 ct.T = ct.Tx = function () {
			 var ct = this, g = G(arguments), o, t
			 o = g.O ? g.f :
					 g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
							 N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
									 _.x({t: g.f, f: g.s, c: g.t},
											 N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
											 {y: g[3]})
			 o.f = N(o.f) ? o.f + 'px Arial' : o.f
			 o.f = o.f || '50px Arial'
			 o.c = oO('c', o.c || 'y')
			 o.x = N(o.x, 0)
			 o.y = N(o.y, 0)
			 o.t = String(o.t)
			 t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
			 if (g.n) {
				 t.regX = t.W() / 2
			 }
			 t.bl('middle')
			 if (g.p) {
				 t.bl('alphabetic')
			 }
			 if (!g.n) {
				 t.rX(t.mW() / 2)
			 }
			 return t
			 //o.x = N(o.x, this.St().cen().x)
			 /* if(g.p){
			  tO = cjs.T(g.f, 'y', '40px Arial')
			  if(N(g[3])){ tO.XY(g[3], g[4]) }
			  return tO
			  }*/
			 old = function () {
				 ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
					 var ct = this, o, cX
					 st = this.getStage()
					 cX = st.cen().x
					 o = (N(x) && U(y)) ? {y: x, x: cX} :
							 U(x) ? {x: cX, y: 100} :
							 {t: t, f: f, c: c, x: x, y: y}
					 var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
					 ct.A(t)
					 return t
				 }
			 }
		 }
		 ct.text = function (text, font, color, x, y) {
			 var text = new cjs.Text(text, font, color).XY(x, y)
			 this.A(text)
			 return this
		 }
		 ct.text = function (text, font, color, x, y) {
			 var text,
					 centX = this.stg().center().x
			 if (N(x) && U(y)) {
				 y = x;
				 x = centX
			 }
			 else if (U(x)) {
				 x = centX;
				 y = 100
			 }
			 text = cjs.text(text, font, color).XY(x, y)
			 this.A(text)
			 return text
		 }
		 ct.text = function (text, font, color, x, y) {
			 var text = new cjs.Text(text, font, color).XY(x, y)
			 this.A(text)
			 return this
		 }
		 ct.chalk = function () {
			 var ct = this, g = G(arguments),
					 h = 0
			 g.e(function (t) {
				 ct.T(t, 26, 'w', 475, h += 35)
			 })
			 return this
		 }
		 ct.chalk = function () {
			 var height = 50,
					 that = this,
					 text
			 _.each(arguments, function (arg) {
				 text = cjs.chalk(arg).Y(height).X(50 - that.X())
				 height += 40
				 that.A(text)
			 })
			 return text
		 }
		 ct.chalk = function () {
			 var ct = this, g = G(arguments),
					 h = 0
			 g.e(function (t) {
				 ct.T(t, 26, 'w', 475, h += 35)
			 })
			 return this
		 }
		 ct.pen = function self(arg) {
			 var that = this
			 if (O(self.text)) {
				 self.text.remove()
			 }
			 self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			 that.A(self.text)
			 return self.text
		 }
		 ct.backgroundImage = function (image) {
			 var that = this
			 this.bm(image, function (b) {
						 that.setChildIndex(b, 0)
					 }
			 )
			 return this
		 }
		 ct.backgroundImage = function (image) {
			 var that = this
			 this.bm(image, function (b) {
						 that.setChildIndex(b, 0)
					 }
			 )
			 return this
		 }
		 ct.backgroundImage = function (image) {
			 var that = this
			 this.bm(image, function (b) {
						 that.setChildIndex(b, 0)
					 }
			 )
			 return this
		 }
		 ct.bgI = ct.bg = function (i) {
			 var ct = this
			 ct.bm(i, function (b) {
				 ct.ch(b, 0)
			 })
			 return ct
		 }
		 ct.backgroundColor = function (c) {
			 $(this.canvas).C(c)
			 return this
		 }
		 ct.backgroundColor = function (c) {
			 $(this.canvas).C(c)
			 return this
		 }
		 ct.backgroundColor = function (c) {
			 $(this.canvas).C(c)
			 return this
		 }
		 ct.dot = function () {
			 var ct = this
			 var g = G(arguments), o = {c: g.f, x: g.s, y: g.t}
			 o.x = N(o.x, ct.W() / 2)
			 o.y = N(o.y, ct.H() / 2)
			 o.c = o.c || 'y'
			 d = this.h(o.x, o.y).s(o.c).f('z').l(10).cir(10).al(.7).drag()
			 tw = d.twL([{sxy: 1.3}, 100], [{sxy: 1}, 100]).$()
			 d.$$(function () {
				 tw.$()
			 })
			 return d.K('dot')
		 }
		 ct.dot = function (color, x, y) {
			 var that = this, dot, tween
			 if (A(color)) {
				 _.each(color, function (args) {
					 if (A(args)) {
						 that.dot.apply(that, args)
					 }
					 else {
						 that.dot(args)
					 }
				 })
				 return
			 }
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'yellow'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : this.W() / 2
			 y = N(y) ? y : this.H() / 2
			 dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
			 tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			 dot.$$(function () {
				 tween.toggle()
			 })
			 dot.N('dot')
			 return this
		 }
		 ct.squareDot = function (color, x, y) {
			 var squareDot, tween
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'orange'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : 300
			 y = N(y) ? y : 300
			 __squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
			 this.A(squareDot.XY(x, y)//.drag()
			 )
			 //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
			 // dot.$$(function(){tween.toggle()})
			 return this
		 }
		 function DITTO() {
			 ct.shape = function () {
				 return cjs.shape.apply(cjs, arguments).a2(this)
			 }
			 ct.cir = function (x, y, r, f, s, width, opt) {
				 return this.shape(x, y, f, s, width, opt).dc(0, 0, r)
			 }
			 ct.poly = function () { // ?
				 var h = this.shape()
				 h.poly.apply(h, arguments)
				 return h
			 }
			 ct.art = function (x, y, f, s) {
				 var g = G(arguments)
				 if (U(x)) {
					 alert('must at LEAST define x');
					 return
				 }
				 if (!N(x)) {
					 alert('x not a number! but must be, lah');
					 return
				 }
				 y = N(g[1]) ? g[1] : x
				 f = S(g[2]) ? oO('c', g[2]) : null
				 s = S(g[2]) ? oO('c', g[3]) : f
				 var shp = cjs.shp(x, y, f, s)
				 this.A(shp)
				 if (g.p) {
					 shp.drag()
				 }
				 return shp
			 }
		 }
	 }
	
	 st.N = st.next = function (next) {
		 if (U(next)) {
			 return this.nextStage
		 }
		 this.nextStage = next
		 return this
	 }
	 st.eMO = function (ms) {
		 var st = this, g = G(arguments)
		 st.enableMouseOver(ms)
		 return st
	 }
	 st.eDE = function () {
		 var st = this, g = G(arguments)
		 st.enableDOMEvents.apply(st, arguments)
		 return st
	 }
	 st.tk = function (ms) {
		 var st = this, g = G(arguments)
		 st.tk.apply(st, g)
		 return st
	 }
	 st.du = st.tDU = function (ms) {
		 var st = this,
				 g = G(arguments)
		 // same as? return this.canvas.toDataURL()
		 st.toDataURL.apply(st, g)
		 return st
	 }
	 st.sTPE = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.snapToPixelEnabled
		 }
		 st.snapToPixelEnabled = g.f ? true : false
		 return st
	 }
	 st.pS = st.prevSel = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.preventSelection
		 }
		 st.preventSelection = g.f ? true : false
		 return st
	 }
	 st.mMO = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.mouseMoveOutside
		 }
		 st.
				 mouseMoveOutside = g.f ? true : false
		 return st
	 }
	 st.mIB = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.mouseInBounds
		 }
		 st.mouseInBounds = g.f ? true : false
		 return st
	 }
	 st.tOU = st.tkOUpd = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.tickOnUpdate
		 }
		 st.tickOnUpdate = g.f ? true : false
		 return st
	 }
	 st.aC = st.auCl = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.autoClear
		 }
		 st.autoClear = g.f ? true : false
		 return st
	 }
	 st.hEv = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.handleEvent
		 }
		 st.handleEvent = g.f
		 return st
	 }
	 st.cv = function () {
		 var st = this, g = G(arguments)
		 if (g.u) {
			 return st.canvas
		 }
		 st.canvas = g.f
		 return st
	 }
	 st.W = function (a) {
		 if (U(a)) {
			 return this.canvas.width
		 }
		 this.canvas.width = a
		 return this
	 }
	 st.H = function (a) {
		 if (U(a)) {
			 return this.canvas.height
		 }
		 this.canvas.height = a
		 return this
	 }
	 st.W = function (a) {
		 if (U(a)) {
			 return this.canvas.width
		 }
		 this.canvas.width = a;
		 return this
	 }
	 st.H = function (a) {
		 if (U(a)) {
			 return this.canvas.height
		 }
		 this.canvas.height = a;
		 return this
	 }
	 st.WH = function (w, h) {
		 var st = this;
		 if (U(w)) {
			 return V(st.W(), st.H())
		 }
		 if (N(w)) {
			 st.W(w)
		 }
		 if (N(h)) {
			 st.H(h)
		 }
		 ;
		 return st
	 }
	 st.hW = function () {
		 return this.W() / 2
	 }
	 st.hH = function () {
		 return this.H() / 2
	 }
	 st.W = function (a) {
		 if (U(a)) {
			 return this.canvas.width
		 }
		 this.canvas.width = a
		 return this
	 }
	 st.H = function (a) {
		 if (U(a)) {
			 return this.canvas.height
		 }
		 this.canvas.height = a
		 return this
	 }
	 st.W = function (a) {
		 if (U(a)) {
			 return this.canvas.width
		 }
		 this.canvas.width = a
		 return this
	 }
	 st.H = function (a) {
		 if (U(a)) {
			 return this.canvas.height
		 }
		 this.canvas.height = a
		 return this
	 }
	 st.ab = st.abs = function (x, y) {
		 this.can.abs(x, y);
		 return this
	 }
	 st.tabs = function (x, y) {
		 this.can.abs(x, y)
		 return this
	 }
	 st.snap = function (f) {
		 $.post('/img', {
			 d: this.toDataURL()//, dats: o.x.dats
		 })
		 sec(f)
		 return this
	 }
	 st.Sh = function () {
		 return $Sh.apply(null, arguments).a2(this)
	 }
	 st.Gx = function () {
		 return $Sh.apply(null, arguments).drag().a2(this).graphics
	 }
	 st.GX = function () {
		 return this.Gx().FS()
	 }
	 events = ['drawend',
		 'drawstart',
		 'mouseenter',
		 'mouseleave',
		 'stagemousedown',
		 'stagemousemove',
		 'stagemouseup',
		 'tickend',
		 'tickstart']
	 st.Bm = function (i) {
		 return $Bm(i).a2(this)
	 }
	 st.cc = function () {
		 return this.cacheCanvas
	 }
	 function write() {
		 p.dot = function (color, x, y) {
			 var that = this, dot, tween
			 if (A(color)) {
				 _.each(color, function (args) {
					 if (A(args)) {
						 that.dot.apply(that, args)
					 }
					 else {
						 that.dot(args)
					 }
				 })
				 return
			 }
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'yellow'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : this.W() / 2
			 y = N(y) ? y : this.H() / 2
			 dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
			 tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			 dot.$$(function () {
				 tween.toggle()
			 })
			 dot.N('dot')
			 return this
		 }
		 p.squareDot = function (color, x, y) {
			 var squareDot, tween
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'orange'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : 300
			 y = N(y) ? y : 300
			 __squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
			 this.A(squareDot.XY(x, y)//.drag()
			 )
			 //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
			 // dot.$$(function(){tween.toggle()})
			 return this
		 }
		 p.dot = function (color, x, y) {
			 var that = this,
					 dot,
					 tween
			 if (b2d.isGPoly(color)) {
				 _.each(color.verts(), function (v) {
					 that.dot(V(v))
				 })
				 return this
			 }
			 if (A(color)) {
				 _.each(color, function (args) {
					 if (A(args)) {
						 that.dot.apply(that, args)
					 }
					 else {
						 that.dot(args)
					 }
				 })
				 return
			 }
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'yellow'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : this.W() / 2
			 y = N(y) ? y : this.H() / 2
			 dot = __dot = this.cir(x, y, 6, oO('c', color)).drag()//.opacity(.4)
			 tween = dot.tweenLoop([{sxy: 1.3}, 100], [{sxy: 1}, 100]).toggle()
			 dot.$$(function () {
				 tween.toggle()
			 })
			 dot.N('dot')
			 return this
		 }
		 p.squareDot = function (color, x, y) {
			 var squareDot, tween
			 if (!S(color)) {
				 y = x;
				 x = color;
				 color = 'orange'
			 }
			 if (O(x)) {
				 y = x.y;
				 x = x.x
			 }
			 x = N(x) ? x : 300
			 y = N(y) ? y : 300
			 __squareDot = squareDot = cjs.rect(20, 20, oO('c', color))//.opacity(.4)
			 this.A(squareDot.XY(x, y)//.drag()
			 )
			 //tween = dot.tweenLoop([{sxy:1.3},100],[{sxy:1},100]).toggle()
			 // dot.$$(function(){tween.toggle()})
			 return this
		 }
		 p.chalk = function () {
			 var height = 50,
					 that = this,
					 text
			 _.each(arguments, function (arg) {
				 text = cjs.chalk(arg).Y(height).X(50 - that.X())
				 height += 40
				 that.A(text)
			 })
			 return text
		 }
		 p.pen = function self(arg) {
			 var that = this
			 if (O(self.text)) {
				 self.text.remove()
			 }
			 self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			 that.A(self.text)
			 return self.text
		 }
		 p.chalk = function () {
			 var height = 50,
					 that = this,
					 text
			 _.each(arguments, function (arg) {
				 text = cjs.chalk(arg).Y(height).X(50 - that.X())
				 height += 40
				 that.A(text)
			 })
			 return text
		 }
		 p.pen = function self(arg) {
			 var that = this
			 if (O(self.text)) {
				 self.text.remove()
			 }
			 self.text = cjs.chalk(arg).Y(50).X(50 - that.X())
			 that.A(self.text)
			 return self.text
		 }
	 }
	
	 function mouse() {
		 st.mX = function () {
			 return this.mouseX
		 }
		 st.mY = function () {
			 return this.mouseY
		 }
		 st.m = function () {
			 return $Pt(this.mX(), this.mY())
		 }
		 st.MD = function (fn) {
			 return this.on('stagemousedown', fn)
		 }
		 st.MM = function (fn) {
			 return this.on('stagemousemove', fn)
		 }
		 st.MU = function (fn) {
			 return this.on('stagemouseup', fn)
		 }
		 st.mO = function () {
			 var g = G(arguments), st = this
			 if (U(g[0]) || g[0]) {
				 st.enableMouseOver(N(g[0]) ? g[0] : true)
			 }
			 else {
				 st.enableMouseOver(false)
			 }
			 return st
		 }
		 st.m = function (ob) {
			 //uses Point
			 var st = this
			 if (U(ob)) {
				 return cjs.P(st.mouseX, st.mouseY)
			 }
			 if (O(ob)) {
				 if (ob.d) {
					 st.MD(ob.d)
				 }
				 ;
				 if (ob.u) {
					 st.MU(ob.u)
				 }
				 ;
				 if (ob.m) {
					 st.MM(ob.m)
				 }
			 }
			 return st
		 }
		 st.mx = st.mX = function () {
			 return this.m().x
		 }
		 st.my = st.mY = function () {
			 return this.m().y
		 }
		 st.trDr = function () {
			 var st = this
			 st._md = 0
			 st.MD(function () {
				 st._md = 1
			 })
			 st.MU(function () {
				 st._md = 0
			 })
			 return this
		 }
	 }
	
	 EASELPHYS = function () {
		 i = cjs.DisplayObject.prototype
		 i.vX = function (a) {
			 var g = G(arguments);
			 a = g[0]
			 if (g.p) {
				 this.vx = this.vx + a;
				 return this
			 }
			 else if (g.n) {
				 if (N(a)) {
					 this.vx = this.vx - a
				 }
				 else {
					 this.vx = this.vx * -1
				 }
				 return this
			 }
			 else if (U(g[0])) {
				 return this.vx
			 }
			 this.vx = a;
			 return this
		 }
		 i.vY = function (a) {
			 var g = G(arguments);
			 a = g[0]
			 if (g.p) {
				 this.vy = this.vy + a;
				 return this
			 }
			 else if (g.n) {
				 if (N(a)) {
					 this.vy = this.vy - a
				 }
				 else {
					 this.vy = this.vy * -1
				 }
				 return this
			 }
			 else if (U(g[0])) {
				 return this.vy
			 }
			 this.vy = a
			 return this
		 }
		 i.jX = function (a) {
			 var g = G(arguments);
			 a = g[0]
			 if (g.p) {
				 this.vx = this.vx + a;
				 return this
			 }
			 else if (g.n) {
				 if (N(a)) {
					 this.vx = this.vx - a
				 }
				 else {
					 this.vx = this.vx * -1
				 }
				 return this
			 }
			 else if (U(g[0])) {
				 return this.vx
			 }
			 this.vx = a;
			 return this
		 }
		 i.jY = function (a) {
			 var g = G(arguments);
			 a = g[0]
			 if (g.p) {
				 this.vy = this.vy + a;
				 return this
			 }
			 else if (g.n) {
				 if (N(a)) {
					 this.vy = this.vy - a
				 }
				 else {
					 this.vy = this.vy * -1
				 }
				 return this
			 }
			 else if (U(g[0])) {
				 return this.vy
			 }
			 this.vy = a
			 return this
		 }
		 i.move = function () {
			 return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
		 }
		 i.go = function () {
			 $t(this.move())
		 }
		 $St().bm('me', function (b) {
			 b.go(10, 10)
			 $.t(function () {
				 $l(b.inStage())
			 })
		 })
	 }
	 M2D = CJSM2D = function () {
		 z()
		 m = $Mx()
		 $l(m)
		 $St().bm('me', function (bm) {
			 b = bm.XY(400, 200)
			 p = b.getConcatenatedDisplayProps();
			 $l(p)
			 cm = b.getConcatenatedMatrix()
			 $l(cm)
		 })
	 }
	 eD = cjs.EventDispatcher.prototype
	 eD.dE = eD.dispatchEvent
	 eD.hEL = eD.hasEventListener
	 eD.O = eD.off
	 eD.o = eD.on
	 eD.rAEL = eD.removeAllEventListeners
	 eD.rEL = eD.removeEventListener
	 eD.tS = eD.toString
	 eD.wT = eD.willTrigger
	 eD.aEL = eD.addEventListener
	 eD.init = function () {
		
		 //note: 'initialize' is the only STATIC method of eventDispatcher
		 this.initialize.apply(this, arguments)
		 return this
	 }
	 function tran() {
		 cjs.rtSh = cjs.rotateShake = function (bm) {
			 $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
		 }
		 cjs.scSh = cjs.scaleShake = function (bm) {
			 $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
		 }
		 cjs.bindScale = SC = function (b, b2) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'), pm = oE('pm'), b2 = b2 || b,
					 cp = function (n) {
						 return n < .2 ? .2 : n > 2 ? 2 : n
					 }
			 return b.on(d,
					 function (e) {
						 var X = e.rawX, Y = e.rawY,
								 sx = b2.scaleX,
								 sy = b2.scaleY
						 b.on(pm,
								 function (e) {
									 if (g.n) {
										 b2.sXY(cp(sx + (
												 (e.rawX - X) / 200)),
												 cp(sy - ((e.rawX - X) / 200))
										 )
									 }
									 else if (g.p) {
										 cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
										 cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
									 }
									 else {
										 b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
									 }
								 })
					 }
			 )
		 }
		 cjs.bindSkew = SK = function (b) {
			 var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
			 return b.on(d,
					 function (e) {
						 var X = e.rawX, Y = e.rawY
						 b.on(pm, function (e) {
							 b2.kXY(
									 (e.rawY - Y) * .5, (e.rawX - X) * .5
							 )
						 })
					 })
		 }
		 cjs.bindTransform = TR = function TR(b, b2, m) {
			 var g = G(arguments),
					 b = g[0],
					 b2 = g[1],
					 b2 = b2 || b, m = g[2] || 'SL'
			 if (m == 'SL') {
				 cjs.bindSlide(b, b2);
				 m = 'SC'
			 }
			 else if (m == 'SC') {
				 cjs.bindScale(b, b2);
				 m = 'RT'
			 }
			 else if (m == 'RT') {
				 cjs.bindRotate(b, b2);
				 m = 'SL'
			 }
			 return b.on('pressup', function (e) {
				 b.removeAllEventListeners();
				 TR(b, b2, m)
			 })
		 }
		 cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
			 var g = G(arguments), b = g[0], b2 = g[1] || b
			 cjs.SL(b);
			 cjs.RT(b, b2)
			 if (g.p) {
				 b.rgc('+')
			 }
			 if (g.N) {
				 //    reggy(b,b2)
			 }
		 }
		 cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'),
					 pm = oE('pm'),
					 b2 = b2 || b,
					 m = g[2] || 'RT'
			 //if(g.p){var s=St('y',1000)
			 //    _t(b||5,function(i){s.a().bm(
			 //        function(bm){bm.xy(i*50);TR(bm)})});return s}
			 if (m == 'RT') {
				 RT(b, b2);
				 m = 'SK'
			 }
			 else if (m == 'SK') {
				 SK(b, b2);
				 m = 'RT'
			 }
			 return b.on(oE('pu'),
					 function (e) {
						 Do(b).O();
						 RK(b, b2, m)
					 })
		 }
		 cjs.bindSlideAndRotate = KK = function (b, b2) {
			 var g = G(arguments), b = g[0],
					 b2 = g[1] || b
			 cjs.bindSlide(b);
			 cjs.bindRotate(b, b2)
			 if (g.p) {
				 b.rgc('+')
			 }
			 if (g.N) {
				 //    reggy(b,b2)
			 }
		 }
		 cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'),
					 pm = oE('pm'),
					 b2 = b2 || b,
					 m = g[2] || 'RT'
			 //if(g.p){var s=St('y',1000)
			 //    _t(b||5,function(i){s.a().bm(
			 //        function(bm){bm.xy(i*50);TR(bm)})});return s}
			 if (m == 'RT') {
				 RT(b, b2);
				 m = 'SK'
			 }
			 else if (m == 'SK') {
				 SK(b, b2);
				 m = 'RT'
			 }
			 return b.on(oE('pu'),
					 function (e) {
						 Do(b).O();
						 RK(b, b2, m)
					 })
		 }
		 cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
			 var g = G(arguments), b = g[0], b2 = g[1] || b
			 cjs.SL(b);
			 cjs.RT(b, b2)
			 if (g.p) {
				 b.rgc('+')
			 }
			 if (g.N) {
				 //    reggy(b,b2)
			 }
		 }
		 cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'),
					 pm = oE('pm'),
					 b2 = b2 || b,
					 m = g[2] || 'RT'
			 //if(g.p){var s=St('y',1000)
			 //    _t(b||5,function(i){s.a().bm(
			 //        function(bm){bm.xy(i*50);TR(bm)})});return s}
			 if (m == 'RT') {
				 RT(b, b2);
				 m = 'SK'
			 }
			 else if (m == 'SK') {
				 SK(b, b2);
				 m = 'RT'
			 }
			 return b.on(oE('pu'),
					 function (e) {
						 Do(b).O();
						 RK(b, b2, m)
					 })
		 }
		 cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
			 var g = G(arguments), b = g[0],
					 b2 = g[1] || b
			 cjs.bindSlide(b);
			 cjs.bindRotate(b, b2)
			 if (g.p) {
				 b.rgc('+')
			 }
			 if (g.N) {
				 //    reggy(b,b2)
			 }
		 }
		 cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'),
					 pm = oE('pm'),
					 b2 = b2 || b,
					 m = g[2] || 'RT'
			 //if(g.p){var s=St('y',1000)
			 //    _t(b||5,function(i){s.a().bm(
			 //        function(bm){bm.xy(i*50);TR(bm)})});return s}
			 if (m == 'RT') {
				 RT(b, b2);
				 m = 'SK'
			 }
			 else if (m == 'SK') {
				 SK(b, b2);
				 m = 'RT'
			 }
			 return b.on(oE('pu'),
					 function (e) {
						 Do(b).O();
						 RK(b, b2, m)
					 })
		 }
		 cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
			 var g = G(arguments), b = g[0],
					 b2 = g[1] || b
			 cjs.bindSlide(b);
			 cjs.bindRotate(b, b2)
			 if (g.p) {
				 b.rgc('+')
			 }
			 if (g.N) {
				 //    reggy(b,b2)
			 }
		 }
		 cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
			 var g = G(arguments), b = g[0], b2 = g[1],
					 d = oE('d'),
					 pm = oE('pm'),
					 b2 = b2 || b,
					 m = g[2] || 'RT'
			 //if(g.p){var s=St('y',1000)
			 //    _t(b||5,function(i){s.a().bm(
			 //        function(bm){bm.xy(i*50);TR(bm)})});return s}
			 if (m == 'RT') {
				 RT(b, b2);
				 m = 'SK'
			 }
			 else if (m == 'SK') {
				 SK(b, b2);
				 m = 'RT'
			 }
			 return b.on(oE('pu'),
					 function (e) {
						 Do(b).O();
						 RK(b, b2, m)
					 })
		 }
		 cjs.rtSh = cjs.rotateShake = function (bm) {
			 $Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
		 }
		 cjs.scSh = cjs.scaleShake = function (bm) {
			 $Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
		 }
	 }}
	 
	 function easelDraw(){
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
		 $Gx = function (a) {
			 return new cjs.Gx(a)
		 }
		 $GX = function (a) {
			 return new cjs.Gx(a).FS()
		 }
		 $Sh = function (gx) {
			 return new cjs.Shape(gx)
		 }
		 cjs.shape = _$H = _$h = function (x, y, f, s, width, opt) {
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
		 DWW = function () {
			 gx = $Gx().f(cjs.rgb(255, 0, 0)).ss(10).s('white')
			 gx.dc(0, 0, 100).dc(100, 0, 100)
			 gx.s('blue').f('green').dc(0, 300, 100)
			 _$St().A($Sh(gx).XY(300, 100)).u()
		 }
		 function more() {
			 function more() {
				 h = cjs.Shape.prototype
				 h._dc = function () {
					 var h = this
					 h.graphics.dc.apply(h.graphics, arguments)
					 return this
				 }
				 h.dc = function () {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
					 o.x = N(o.x, 0)
					 o.y = N(o.y, 0)
					 o.r = N(o.r, 50)
					 gx.dc(o.x, o.y, o.r)
					 return h
				 }
				 HDC = function () {
					 h = $Sh()
					 h.graphics.f('blue')
					 h.dc(100, 100, 100)
					 h.graphics.f('yellow')
					 h.dc(200, 100, 100)
					 //.cir()
					 _$St().A(h).u()
				 }
				 h.cir = function () {
					 var h = this, gx = h.graphics,
							 g = G(arguments), o
					 if (g.A) {
						 return $a(h, 'cir', g.f)
					 }
					 if (g.OO_) {
						 return h.cirs(g)
					 }
					 o = g.O ? g.f : N(g.t) ?
					 {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
					 {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
							 g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
							 {c: g.f, C: g.s, l: g.t}
					 //h.c(o)
					 if (o.c) {
						 h.c(o.c)
					 }
					 if (o.C) {
						 h.C(o.C)
					 }
					 if (N(o.l)) {
						 h.l(o.l)
					 }
					 h.cp()
					 h._dc(o)
					 if (o.bf) {
						 if (N(o.bf)) {
							 o.bm = 'me'
						 }
						 if (F(Q)) { //async
							 h.bf(o.bf, function () {
								 h.dc(o)
							 })
						 }
						 else { //sync
							 o.tf = o.tf || null;
							 h.bf(o.bf, o.tf).dc(o)
						 }
					 }
					 else {
						 h.dc(o)
					 }
					 h.alpha = N(o.al, 1)
					 return h
				 } // h.circ h.circle = h.cir2 = h.cir = 
				 HCR = function () {
					 h = $Sh()
					 h.graphics.f('blue')
					 //h.cir(100, 100, 100)
					 //h.graphics.f('yellow')
					 h.cir(200, 100, 100, 'r')
					 _$St().A(h).u()
				 }
				 h.cirs = function () {
					 var h = this, g = G(arguments)
					 g.e(function (c) {
						 h.dc(c)
					 })
					 return this
				 }
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
				 h._dr = function () {
					 this.graphics.dr.apply(
							 this.graphics, arguments)
					 return this
				 }
				 h.dr = function () {
					 var h = this, gx = h.graphics, g = G(arguments),
							 o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
					 o.x = N(o.x, 0);
					 o.y = N(o.y, 0);
					 o.w = N(o.w, 100);
					 o.h = N(o.h, o.w)
					 gx.dr(o.x, o.y, o.w, o.h)
					 return h
				 }
				 h.dr2 = function (x, y, W, H) {
					 var h = this, g = G(arguments), o
					 if (g.OO_) {
						 g.e(function (g) {
							 h.dr2(g)
						 });
						 return h
					 }
					 o = g.O ? g.f :
							 U(g.t) ? {w: g.f, h: g.s} :
							 {x: g.f, y: g.s, w: g.t, h: g[3]}
					 o.x = N(o.x, 0)
					 o.y = N(o.y, 0)
					 o.w = N(o.w, 50)
					 o.h = N(o.h, o.w)
					 h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
					 return h
				 }
				 h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
					 var gx = this.graphics
					 if (fc) {
						 gx.f(fc)
					 }
					 if (sc) {
						 gx.s(fc)
					 }
					 gx.dr(x, y, w, h)
					 return this
				 }
				 h.rec = function () {
					 var h = this, g = G(arguments), o
					 if (g.OO_) {
						 g.e(function (g) {
							 h.rec(g)
						 });
						 return h
					 }
					 o = g.O ? g.f :
							 S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
									 g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
											 N(g.t) ?
											 {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
											 {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
					 o.x = N(o.x, 0)
					 o.y = N(o.y, 0)
					 o.w = N(o.w, 50)
					 o.h = N(o.h, o.w)
					 if (o.i) {
						 h.bf(o.i, function () {
							 o.i = null;
							 h.rec(o)
						 })
						 return h
					 }
					 if (o.c) {
						 h.c(o)
					 }
					 if (o.lf) {
						 h.lf({
							 c1: o.c1 || 'z', c2: o.c2 || 'w',
							 s1: 0, s2: 1,
							 x: o.x - o.w / 2, y: o.y - o.h / 2,
							 x2: o.x - o.w / 2, y2: o.y + o.h / 2
						 })
					 }
					 h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
					 return h
				 }
				 h._lt = function (x, y) {
					 var v = V(x, y)
					 this.graphics.lt(v.x, v.y)
					 return this
				 }
				 h.lt = h._lt = function (x, y) {
					 var h = this, gx = h.graphics, g = G(arguments)
					 //A(a) && O(a[0])
					 if (AO(g.f)) {
						 g.e(function (v) {
							 h.lt.apply(h, v)
						 })
						 return h
					 }
					 O(g.s) ?
							 g.e(function (pt) {
								 h.lt(pt)
							 }) :
							 gx.lt(V(x, y).x, V(x, y).y)
					 return h
				 }
				 h.lt = function (x, y) {
					 var h = this, g = G(arguments)
					 if (AO(g.f)) {
						 g.e(function (v) {
							 h.lt.apply(h, v)
						 })
					 }
					 else if (O(g.s)) {
						 g.e(function (pt) {
							 h.lt(pt)
						 })
					 }
					 else {
						 this.graphics.lt(V(x, y).x, V(x, y).y)
					 }
					 return this
				 }
				 h._mt = function (x, y) {
					 var g = G(arguments)
					 var pt = V(g.f, g.s)
					 this.graphics.mt(pt.x, pt.y)
					 return this
				 }
				 h._mt = function (x, y) {
					 var v = V(x, y)
					 this.graphics.mt(v.x, v.y)
					 return this
				 }
				 h.mt = function () {
					 var g = G(arguments), o
					 if (g.N) {
						 return this._mt(g.f, g.s)
					 }
					 o = AO(g) ? {
						 firPt: _.f(g.f), restPts: _.r(g.f),
						 ox: g.s, oy: g.t
					 } : {firPt: g.f, restPts: g.r}
					 return this._mt(
							 o.firPt[0] + N(o.ox, 0),
							 o.firPt[1] + N(o.oy, 0)
					 ).lt(M.os(o.restPts, o.ox, o.oy))
				 }
				 h.mt = function () {
					 var g = G(arguments), o
					 if (g.N) {
						 return this._mt(g.f, g.s)
					 }
					 o = AO(g) ? {
						 firPt: _.f(g.f), restPts: _.r(g.f),
						 ox: g.s, oy: g.t
					 } : {firPt: g.f, restPts: g.r}
					 return this._mt(
							 o.firPt[0] + N(o.ox, 0),
							 o.firPt[1] + N(o.oy, 0)
					 ).lt(M.os(o.restPts, o.ox, o.oy))
				 }
				 h.poly = function (vxs, f, s, wd) {
					 h.poly = function (verts, f, s, width) {
						 var that = this, gx = this.graphics
						 if (N(verts[0])) //verts passed in directly
						 {
							 _.each(arguments,
									 function (vert) {
										 gx.lt(vert[0], vert[1])
									 });
							 gx.cp()
						 }
						 else {
							 this.graphics.fs(f, s, width)
							 {
								 _.e(verts, function (vert) {
									 gx.lt(vert[0], vert[1])
								 });
								 gx.cp()
							 }
						 }
						 return this
					 }
					 h.poly = function (verts, f, s, width) {
						 var that = this, gx = this.graphics
						 if (N(verts[0])) { //verts passed in directly
							 _.e(arguments,
									 function (vert) {
										 gx.lt(vert[0], vert[1])
									 });
							 gx.cp()
						 }
						 else {
							 this.graphics.fs(f, s, width)
							 {
								 _.e(verts, function (vert) {
									 gx.lt(vert[0], vert[1])
								 });
								 gx.cp()
							 }
						 }
						 return this
					 }
					 var h = this, g = arguments
					 h.fs(f, s, wd)
					 if (A(vxs) && N(vxs[0])) {
						 _.e(g, function (v) {
							 h.lt(v[0], v[1])
						 })
					 }
					 else {
						 _.e(vxs, function (v) {
							 h.lt(v)
						 })
					 }
					 return h.cp()
				 }
				 h.pol = function () {
					 var h = this, g = G(arguments), o;
					 //O$ >>  O(o) && !F(o) && !A(o)
					 o = O$(g.f) ? g.f :
							 N(g.s) && N(g.t) ?
							 {v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
							 {v: g.f, c: g.s, C: g.t, l: g.fo}
					 o.v = M.os(o.v, o.x, o.y)
					 o = oDef(o || {})
					 h.ef().es().c(o)
					 if (o.bf) {
						 var bf = S(o.bf) ? o.bf : 'me'
						 h.bf(bf, function draw() {
							 h.mt(o.v).cp()
						 })
					 }
					 else {
						 h.lt(o.v)
						 h.cp()
					 }
					 return h
				 }
//******** here is the problem.. gotta let h.poly also defer to rect (and circ?)
				 h._bf = function (i, tf) {
					 this.graphics._bf(i, tf)
					 return this
				 }
				 h.bf = function () {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 o = O(g.f) && A(g.f.hs) ? g.f :
							 F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
							 {i: g.f, mx: g.s, hs: g.t}
					 o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
					 o.fn = _.tFn(o.fn)
					 o.i = o.i || 'me'
					 if (S(o.i) && !Q.ran) {
						 $.i(o.i, function (i) {
							 _bf(i, o)
						 })
					 }
					 else {
						 _bf(S(o.i) ? Q.i(o.i) : o.i, o)
					 }
					 return h
					 function _bf(i, o) {
						 h._bf(i, o.mx);
						 o.hs ? _.e(o.hs, function (shp) {
							 o.fn(shp, h)
						 }) : o.fn(h)
					 }
				 }
				 h._bfT = function (i) {
					 var g = G(arguments)
					 return this._bf(i, $tMx(A(g.s) ? g.s : g.r))
				 }
				 h._bfTAs = function (str, tfPropsArr, fn) {
					 var h = this, g = G(arguments), o
					 o = A(g.s) ?
					 {i: g.f, tf: g.s, fn: g.t} :
					 {i: g.f, fn: g.s}
					 $.i(o.i, function (i) {
						 _.tFn(o.fn)(
								 h._bf(g.f, $tMx(_.tA(o.tf))))
					 })
					 return h
				 }
				 h.bmCir = h.bC = function (o) {
					 o = o || {}
					 var h = this
					 o.i = o.i || 'me'
					 o.circs = o.circs || []
					 o.cs = o.cs || []
					 o.hs = o.hs || []
					 $.i(o.i, function (i) {
						 _.e(o.circs, function (c) {
							 h.bf(i).dc(c)
						 })
					 })
					 return h
				 }
				 h.bR = function (o) {
					 var h = this;
					 h.bf(o, function (h1) {
						 if (o.hs) {
							 _.e(o.hs, function (r) {
								 w.rec(r.w, r.h)
							 })
						 }
						 else {
							 h.rec(o.hs)
						 }
					 })
					 return h
				 }
				 h.bP = h.bV = function (o) {
					 var h = this, g = G(arguments), o
					 h._bVAsy = function (i, v) {
						 var h = this
						 i = i || 'me'
						 $.i(i, function (i) {
							 h._bV(i, v)
						 })
						 return h
					 }
					 h._bV = function (i, vs) {
						 i = i || 'me'
						 return this.bf(i).lt(vs).cp()
					 }
					 o = g.A ? {hs: g.f} : g.f || {} // o.hs = o.hs || []
					 if (Q.ran) {
						 h._bV(o.i, o.v)
					 }
					 else {
						 h._bVAsy(o.i, o.v)
					 }
					 return h
				 }
// bitmap stroke
				 h.bitmapStroke = h.bs = function (i) {
					 var h = this;
					 h.graphics.bs(i);
					 return h
				 }
				 h.lG = h.linGrad = function () {
					 var args = _.toArray(arguments)
					 args[0] = _.map(args[0], function (col) {
						 return oO('c', col)
					 })
					 this.graphics.beginLinearGradientFill.apply(
							 this.graphics, args)
					 return this
				 }
				 h.lG = h.linGrad = function () {
					 var args = _.toArray(arguments)
					 args[0] = _.map(args[0], function (col) {
						 return oO('c', col)
					 })
					 this.graphics.beginLinearGradientFill.apply(
							 this.graphics, args)
					 return this
				 }
				 h.lG = h.linGrad = function () {
					 var args = _.toArray(arguments)
					 args[0] = _.map(args[0], function (col) {
						 return oO('c', col)
					 })
					 this.graphics.beginLinearGradientFill.apply(
							 this.graphics, args)
					 return this
				 }
				 h.lf = function () {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 o = cjs.lg(g)
					 gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
					 return h
				 }
				 h.ls = function me() {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 if (A(g[0])) {
						 return me.apply(h, g[0])
					 }
					 o = h.lg.apply(h, g)
					 gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
					 return h
				 }
				 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
					 var args = _.toArray(arguments), circs, len
					 cols = _.map(cols,
							 function (col) {
								 return oO('c', col)
							 })
					 circs = _.rest([1, 2, 3, 4, 5], 2)
					 len = circs.len  //use switch!
					 x1 = 0;
					 y1 = 0;
					 r1 = 0;
					 x2 = 0;
					 y2 = 0;
					 r2 = 50
					 if (len == 1) {
						 r2 = circs[0]
					 }
					 else if (len == 2) {
						 r1 = circs[0];
						 r2 = circs[1]
					 }
					 else if (len == 3) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r2 = circs[2]
					 }
					 else if (len == 4) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r1 = circs[2]
						 r2 = circs[3]
					 }
					 else if (len == 5) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r2 = circs[4]
					 }
					 else if (len == 6) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r1 = circs[4];
						 r2 = circs[5]
					 }
					 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
					 return this
				 }
				 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
					 var args = _.toArray(arguments), circs, len
					 cols = _.map(cols,
							 function (col) {
								 return oO('c', col)
							 })
					 circs = _.rest([1, 2, 3, 4, 5], 2)
					 len = circs.len  //use switch!
					 x1 = 0;
					 y1 = 0;
					 r1 = 0;
					 x2 = 0;
					 y2 = 0;
					 r2 = 50
					 if (len == 1) {
						 r2 = circs[0]
					 }
					 else if (len == 2) {
						 r1 = circs[0];
						 r2 = circs[1]
					 }
					 else if (len == 3) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r2 = circs[2]
					 }
					 else if (len == 4) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r1 = circs[2]
						 r2 = circs[3]
					 }
					 else if (len == 5) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r2 = circs[4]
					 }
					 else if (len == 6) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r1 = circs[4];
						 r2 = circs[5]
					 }
					 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
					 return this
				 }
				 h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
					 var args = _.toArray(arguments), circs, len
					 cols = _.map(cols,
							 function (col) {
								 return oO('c', col)
							 })
					 circs = _.rest([1, 2, 3, 4, 5], 2)
					 len = circs.len  //use switch!
					 x1 = 0;
					 y1 = 0;
					 r1 = 0;
					 x2 = 0;
					 y2 = 0;
					 r2 = 50
					 if (len == 1) {
						 r2 = circs[0]
					 }
					 else if (len == 2) {
						 r1 = circs[0];
						 r2 = circs[1]
					 }
					 else if (len == 3) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r2 = circs[2]
					 }
					 else if (len == 4) {
						 x1 = x2 = circs[0]
						 y1 = y1 = circs[1]
						 r1 = circs[2]
						 r2 = circs[3]
					 }
					 else if (len == 5) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r2 = circs[4]
					 }
					 else if (len == 6) {
						 x1 = circs[0];
						 y1 = circs[1];
						 x2 = circs[2];
						 y2 = circs[3]
						 r1 = circs[4];
						 r2 = circs[5]
					 }
					 this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
					 return this
				 }
				 h.rg = function (o) {
					 var h = this, g = G(arguments),
							 gx = h.graphics,
							 o
					 if (A(g[0]) && A(g[1])) {
						 gx.rf(
								 [oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
						 )
						 return h
					 }
					 o = O(g[0]) ? g[0] :
							 S(g[1]) ? _.x({c1: g[0], c2: g[1]},
									 N(g[7]) ?
									 {x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
											 : N(g[5]) ?
									 {x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
											 : N(g[4]) ?
									 {x2: g[2], r1: g[3], r2: g[4]}
											 : N(g[3]) ?
									 {r1: g[2], r2: g[3]}
											 :
									 {r2: g[2]})
									 : S(g[0]) ?
							 {c2: g[0]}
									 : {}
					 $df.grad(o)
					 o.x2 = N(o.x2, o.x1)
					 o.y2 = N(o.y2, o.y1)
					 o.r1 = N(o.r1, 1);
					 o.r2 = N(o.r2, 100)
					 return o
				 }
				 h.rf = function me() {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 if (A(g[0])) {
						 return me.apply(h, g[0])
					 }
					 o = h.rg.apply(h, g)
					 gx.rf(
							 [o.c1, o.c2],
							 [o.s1, o.s2],
							 o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
					 return h
				 }
				 h.rs = function me() {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 if (A(g[0])) {
						 return me.apply(h, g[0])
					 }
					 o = h.rg.apply(h, g)
					 gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
					 return h
				 }
//
				 h.dl = h.ln = h.line = function () {
					 var h = this, g = G(arguments), o
					 o = g.N_ ?
					 {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
					 {x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
					 this.mt(o.x1, o.y1).lt(o.x2, o.y2)
					 return this
				 }
//alpha:
				 h.$vs = function (polVs, ox, oy) {
					 if (gpc.iP(polVs)) {
						 polVs = polVs.vs()
					 }
					 return this.vs(polVs, ox, oy)
				 }
				 h.ef = function () {
					 this.graphics.endFill.apply(
							 this.graphics, arguments)
					 return this
				 }
				 h.es = function () {
					 var h = this, gx = h.graphics
					 gx.es()
					 return h
				 }
				 h.cp = function () {
					 this.graphics.cp();
					 return this
				 }
				 h.clr = h.z = h.clear = function () {
					 this.graphics.clear();
					 return this
				 }
				 function curves() {
					 h.arc = h._a = function (x, y, r, startA, endA, aCW) {
						 var h = this, gx = h.graphics
						 /*
						  Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
						  For example, to draw a full circle with a radius of 20 centered at (100, 100):
						  arc(100, 100, 20, 0, Math.PI*2)
						  */
						 h.arc(x, y, r, startA, endA, aCW)
						 return h
					 }
					 h.arc2 = h._a2 = function (x, y, X, Y, r) {
						 var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
						 gx.arcTo(x, y, X, Y, r)
						 return h
					 }
					 h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
						 var h = this,
								 gx = h.graphics
						 gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
						 return h
					 }
					 h._qt = function (cpx, cpy, x, y) {
						 var h = this, gx = h.graphics
						 gx.quadraticCurveTo(cpx, cpy, x, y)
						 return h
					 }
					 h.qt = function (a, b, c, d, e, f) {
						 var h = this, gx = h.graphics
						 if (O(a)) {
							 a = V(a)
							 b = V(b)
							 gx.qt(a.x, a.y, b.x, b.y)
						 }
						 else {
							 gx.qt(a, b, c, d, e, f)
						 }
						 return h
					 }
					 h.de = h.ell = function () {
						 var h = this,
								 gx = h.graphics,
								 g = G(arguments),
								 o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
										 N(g.f) ? {w: g.f, h: g[1]} :
												 O(g.f) ? g.f : {}
						 o.x = _.tN(o.x)
						 o.y = _.tN(o.y)
						 o.w = _.tN(o.w, 100)
						 o.h = _.tN(o.h, o.w)
						 gx.drawEllipse(o.x, o.y, o.w, o.h)
						 return h
					 }
					 h.de2 = function (x, y, W, H, r) {
						 var h = this
						 h.de(-W / 2 + x, -H / 2 + y, W, H, r)
						 return h
					 }
					 h._rr = function () {
						 this.graphics.rr.apply(this.graphics, arguments)
						 return this
					 }
					 h.rr = function () {
						 var h = this,
								 gx = h.graphics,
								 g = G(arguments),
								 o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
										 N(g[1]) ? {w: g.f, r: g[1]} :
												 N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
														 O(g.f) ? g.f : {}
						 o.x = N(o.x, 0)
						 o.y = N(o.y, 0)
						 o.w = N(o.w, 100)
						 o.h = N(o.h, o.w)
						 return h._rr(o.x, o.y, o.w, o.h, o.r)
					 }
					 h.rr2 = function (x, y, W, H, r) {
						 var h = this
						 h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
						 return h
					 }
					 h.rc = h.roundRectComplex = function () {
						 var h = this, gx = h.graphics
						 gx.drawRoundRectComplex.apply(gx, arguments)
						 return h
					 }
				 }
				
				 curves()
//function advanced() {
				 h.dl = h.ln = h.line = function () {
					 var h = this, g = G(arguments), o
					 o = g.N_ ?
					 {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
					 {x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
					 this.mt(o.x1, o.y1).lt(o.x2, o.y2)
					 return this
				 }
				 h.same = h.copy = function () {
					 return $h(this) // cjs.shape(this)
				 }
				 h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
					 var h = this, gx = h.graphics,
							 g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
					 o = N(g[3]) ? {
						 x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
					 } :
							 N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
									 O(g.f) ? g.f : {}
					 o.a = N(o.a, 0);
					 o.x = N(o.x, 0);
					 o.y = N(o.y, 0)
					 o.p = _.cap(o.p, 0, .99)
					 gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
					 return h
				 }
//below was old ! :
				 h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
					 var h = this,
							 numVerts = poly.length
					 _.each(poly, function (v) {
						 v.X = v.x;
						 v.Y = v.y
					 })
					 if (sc) {
						 this.s(sc)
					 }
					 if (numVerts >= 3) {
						 //move to the FIRST
						 h.mt(poly[0])
						 //lineTo the REST
						 T(numVerts, function (i) {
							 h.lt(poly[i % numVerts])
						 }) //just a clever way to start from 1
					 }
					 return this
				 }
				 h.drawPolygons = function (paths, C, c) {
					 var h = this
					 h.C(C);
					 if (c) {
						 h.c(c)
					 }
					 _.e(paths, function (p) {
						 h.drawPolygon(p)
					 })
					 return h
				 }
				 h.drawPolygons = function (paths, fc, sc) {
					 var h = this
					 h.f(fc).s(sc)
					 _.each(paths, function (path) {
						 h.drawPolygon(path)
					 })
					 return h
				 }
				 h.bf = function () {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 if (O(g.f) && A(g.f.hs)) {
						 o = {i: g.f.i, hs: g.f.hs, mx: g.f.mx, fn: g.f.fn}
					 }
					 else {
						 o = F(g.s) ? {i: g.f, fn: g.s} : {i: g.f, mx: g.s, fn: g.t}
					 }
					 o.i = o.i || 'me'
					 if (!Q.ran) {
						 if (o.hs) {
							 $.i(o.i, function (i) {
								 _bf(i, o.mx);
								 if (o.fn) {
									 _.e(o.hs, o.fn)
								 }
							 })
						 }
						 else if (S(o.i)) {
							 $.i(o.i, function (i) {
								 _bf(i, o.mx, o.fn)
							 })
						 }
					 }
					 else if (S(o.i)) {
						 _bf(Q.i(o.i), o.mx, o.fn)
					 }
					 else {
						 _bf(o.i, o.mx)
					 }
					 return h
					 function _bf(i, mx, fn, hs) {
						 var g = G(arguments),
								 o = {
									 i: g.f,
									 mx: A(g.s) ? $Mx(g.s) : g.s,
									 fn: _.tFn(g.t),
									 hs: g[3]
								 }
						 h._bf(i, o.mx)
						 o.hs ? _.e(o.hs, function (shp) {
							 o.fn(shp, h)
						 }) : o.fn(h)
					 }
				 }
				 h.bf1 = function () {
					 var h = this, gx = h.graphics, g = G(arguments), o
					 o = O(g.f) && A(g.f.hs) ? g.f :
							 F(g.s) ? {i: g.f, fn: g.s} :
							 {i: g.f, mx: g.s, fn: g.t}
					 o.i = o.i || 'me'
					 if (S(o.i) && !Q.ran) {
						 $.i(o.i, function (i) {
							 _bf(i, o.mx, o.fn)
							 if (o.hs) {
								 _.e(o.hs, o.fn)
							 }
						 })
					 }
					 if (S(o.i)) {
						 o.i = Q.i(o.i)
					 }
					 _bf(o.i, o.mx, o.fn)
					 return h
					 function _bf(i, mx, fn, hs) {
						 var g = G(arguments),
								 o = F(g.t) ? {i: g.f, mx: g.s, fn: g.t, hs: g[3]} :
										 F(g.s) ? {i: g.f, fn: g.s, hs: g.t} :
										 {i: g.f, mx: g.s, hs: g.t}
						 o.i = S(o.i) ? Q.i(o.i) : o.i
						 o.mx = A(o.mx) ? $Mx(o.mx) : o.mx
						 o.fn = _.tFn(o.fn)
						 h._bf(i, o.mx)
						 o.hs ? _.e(o.hs, function (shp) {
							 o.fn(shp, h)
						 }) :
								 o.fn(h)
					 }
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
			
			 MTLT = function () {
				 St()
				 h.graphics.C('r', 'b')
				 h.dg()
				 h.lt(100, 100)
				 h.lt(150, 190)
				 h.lt(300, 300)
				 h.lt(350, 390)
				 if (R()) {
					 h.cp()
				 }
				 h.mt(240, 210)
				 h.lt(450, 410)
				 h.lt(600, 500)
				 h.lt(500, 500)
				 h.cp()
				 MTLT1 = function () {
					 St();
					 h.dg()
					 h.lt(100, 100)
					 h.lt(150, 190)
					 h.lt(300, 300)
					 h.lt(350, 390)
					 if (R()) {
						 h.cp()
					 }
					 h.mt(240, 210)
					 h.lt(450, 410)
					 h.lt(600, 500)
					 h.lt(500, 500)
					 h.cp()
				 }
			 }
			 DRAWLINE = XX5 = HDL11 = function () {
				 St()
				 h.dl(50, 50, 200, 200)
				 h.dl(V(300, 500), [500, 200])
				 DRAWLINE1 = DLN = function () {
					 St()
					 h.dl(50, 50, 200, 200)
					 h.dl(V(300, 500), [500, 200])
				 }
			 }
			 SHAPEZ8 = function () {
				 SHAPS8 = function () {
					 z()
					 s = stage = $St(500, 500)
					 //s.bm('me', function(bm){ bm.sxy(.2)   })
					 s.Sh().cir(100, 100, 100, 'b', 'g')//.fn(SL)
					 s.cir(100, 100, 10, 'r', 'y')//.fn(SL)
					 s.cir(10, 100, 100, 'z', 'x')//.fn(SL)
					 s.cir(100, 10, 100, 'a', 'c')//.fn(SL)
					 s.Sh().cir(150, 150, 120, 'c', 'd')
						 //.fn(SL)
							 .cir(30, 'x', 'x')
				 }
				 SHAPES9 = function () {
					 z()
					 s = stage = St(500, 500).a()
					 //s.bm('me', function(bm){ bm.sxy(.2)   })
					 s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
					 s.Circle(100, 100, 10, 'r', 'y').fn(SL)
					 s.Circle(10, 100, 100, 'z', 'x').fn(SL)
					 s.Circle(100, 10, 100, 'a', 'c').fn(SL)
					 s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
					 //s.bm('me', function(bm){ bm.sxy(.2)   })
					 s.Shape().circle(100, 100, 100, 'b', 'g').fn(SL)
					 s.Circle(100, 100, 10, 'r', 'y').fn(SL)
					 s.Circle(10, 100, 100, 'z', 'x').fn(SL)
					 s.Circle(100, 10, 100, 'a', 'c').fn(SL)
					 s.Shape().circle(150, 150, 120, 'c', 'd').fn(SL).circle(30, 'x', 'x')
				 }
				 St()
				 s.can.P('a').XY(200)
				 s.b('me')
				 s.bm('me', 0.2, function (bm) {
				 })
				 h = $h().cir()
				 s.A(
						 $h().cir(100, 'blue', 'green').XY(100, 100).drag()
				 )
				 s.h().cir(100, 100, 10, 'red', 'yellow')
				 s.h().cir(10, 100, 100, 'black', 'purple')
				 s.h().cir(100, 10, 100, 'blue', 'red')
				 s.h().cir(150, 150, 120, 'red', 'blue')
				 s.h().cir(30, 'brown', 'gray')
				 s.u()
			 }//C- only PLAY!?
			 CENTERSHAPE8 = function () {
				 CENTERSHAPE9 = function () {
					 z()
					 stage = St(500, 600).A()
					 shape = stage.Shape();
					 SL(shape)
					 shape.RECT(0, 0, 100, 100, 'a')
					 shape.RECT(0, -75, 25, 50, 'b')
					 shape.RECT(0, -200, 100, 100, 'r')
					 shape.circle(100, 200, 40, 'z', 'x')
					 shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
					 shape.g.beginFill("orange").drawPolyStar(
							 100, 100, 50, 5, 0.6, -90)
					 shape.xy(200)
					 stage.bm('me', function (b) {
						 me = b
						 me.rgc()
						 me.xy(200)
						 me.sxy(.4)
					 })
				 }
				 stage = $St(500, 600)
				 shape = stage.Sh()
				 gx = shape.graphics.FS()
				 SL(shape)
				 shape.rec(0, 0, 100, 100, 'a')
				 shape.rec(0, -75, 25, 50, 'b')
				 shape.rec(0, -200, 100, 100, 'r')
				 shape.cir(100, 200, 40, 'z', 'x')
				 gx.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
				 gx.beginFill("orange").drawPolyStar(
						 100, 100, 50, 5, 0.6, -90)
				 shape.XY(200)
				 stage.bm('me', function (b) {
					 me = b
					 me.rgc()
					 me.XY(200)
					 me.sXY(.4)
				 })
				 CENTERSHAPE9 = function () {
					 z()
					 stage = St(500, 600).A()
					 shape = stage.Shape();
					 SL(shape)
					 shape.RECT(0, 0, 100, 100, 'a')
					 shape.RECT(0, -75, 25, 50, 'b')
					 shape.RECT(0, -200, 100, 100, 'r')
					 shape.circle(100, 200, 40, 'z', 'x')
					 shape.g.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
					 shape.g.beginFill("orange").drawPolyStar(
							 100, 100, 50, 5, 0.6, -90)
					 shape.xy(200)
					 stage.bm('me', function (b) {
						 me = b
						 me.rgc()
						 me.xy(200)
						 me.sxy(.4)
					 })
				 }
			 }
			 YSTAR = CENSHP = function () {
				 z()
				 stage = cjs.stage(500, 600).A()
				 shape = new cjs.Shape()
				 SL(shape)
				 stage.A(shape)
				 shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)
				 shape.RECT(0, 0, 100, 100, 'a')
				 shape.RECT(0, -75, 25, 50, 'b')
				 shape.RECT(0, -200, 100, 100, 'r')
				 shape.circle(100, 200, 40, 'z', 'x')
				 shape.graphics.drawRoundRectComplex(0, 0, 300, 300, 20, 20, 30, 40)
				 shape.XY(200)
				 stage.bm('me', function (b) {
					 me = b
					 me.XY(200)
					 me.sXY(.4)
				 })
			 }
			 LAYS = USINGLAYERSINEASEL9 = function () {
				 z()
				 s = St(500).A()
				 s.bm('me', function (bm) {
					 b = bm
					 bm.sxy(3)
					 drawCar()
					 s.tick(function () {
						 b.x(-1 * (g.x() * 2))
						 b.y(-1 * (g.y() * 2))
					 })
				 })
				 bt = $.button('safd', function () {
					 s.sxy(2)
				 }).A()
				 function drawCar() {
					 s.bm('guy', function (bm) {
						 g = bm
						 bm.sxy(.5)
						 SL(bm)
					 })
				 }
				
				 USINGLAYERSINEASEL9 = function () {
					 z()
					 s = St(500).A()
					 s.bm('me', function (bm) {
						 b = bm
						 bm.sxy(3)
						 drawCar()
						 s.tick(function () {
							 b.x(-1 * (g.x() * 2))
							 b.y(-1 * (g.y() * 2))
						 })
					 })
					 bt = $.button('safd', function () {
						 s.sxy(2)
					 }).A()
					 function drawCar() {
						 s.bm('guy', function (bm) {
							 g = bm
							 bm.sxy(.5)
							 SL(bm)
						 })
					 }
				 }
			 }
			 function roundRec() {
				 RRR8 = ROUNDREC = function () {
					 s = $St()
					 h = s.h()
					 gx = h.graphics.FS()
					 h.c('b', 'r', 5).dc(100, 100, 100)
					 h.dr(300, 200, 100, 50)
					 h.dr2(500, 200, 100, 50)
					 h.rr2(500, 200, 100, 50, 50)
					 h.de2(500, 200, 100, 50)
					 s.dot(100, 100)
					 s.dot(300, 200)
					 s.dot(500, 200)
					 s.dot(500, 200)
					 s.dot(500, 200)
					 s.u()
				 }//C+
				 TXH8 = function () {
					 St()
					 h = $H().a2(st)
					 h.f('red').s('black')
					 h.graphics.dc(400, 400, 200)
					 h.graphics.dr(100, 0, 200, 200)
					 /////////
					 h.rec(100, 100, 100, 100, 'y')
					 h.rec(200, 200, 100, 100, 'b')
					 h.c('o').polyStar(300, 100,
							 50, 5, 0.6, -90)
					 h.c('w', 'z')
							 .roundRectComplex(400, 300,
							 300, 300, 20, 20, 30, 40)
					 h.cir(500, 200, 40, 'b', 'x', 10)
					 return
					 //function exceedsStackSize() {
					 ////////////////
					 h.c('y').dc(100, 100, 30).c('o').dc(100, 100, 10)
							 .c('X', 'g', 8)
							 .mt([
								 [100, 100], [300, 300], [400, 100],
								 [500, 300], [450, 450]], [[500, 0], [600, 100]
							 ])
					 h.cir(600, 300, 'u', 'g', 10)
					 lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
					 v = [[300, 300], [320, 200], [640, 400], [280, 650]]
					 //two ways to make the same thing
					 s.h().poly({
						 v: v,
						 lf: lf
					 })
					 s.h(250, 50).lf(lf).mt(v)
				 }
			 }
			
			 function margin() {
				 MARGINAUTO9 = function () {
					 z()
					 o = outer = $.div('b', 500, 500).A()
					 o.A(i = inner = $.div('r', 100, 100))
					 i.mar('auto')
					 o.mar('auto')
				 }
				 MARGINAUTO9 = function () {
					 z()
					 o = outer = $.div('b', 500, 500).A()
					 o.A(i = inner = $.div('r', 100, 100))
					 i.mar('auto')
					 o.mar('auto')
				 }
			 }
			
			 function mobileHeader() {
				 MOBILEHEADERS9 = function () {
				 }
				 MOBILEHEADERS9 = function () {
				 }
			 }
			
			 function squareGame() {
				 SQUAREGAMES9 = function () {
					 z()
					 s = St(400, 400).A()
				 }
				 SQUAREGAMES9 = function () {
					 z()
					 s = St(400, 400).A()
				 }
			 }
			
			 function cirApps() {
				 SIR = function () {
					 $.C('b')
					 $S({
						 body: {fZ: 40, c: 'o'},
						 canvas: {M: 20}
					 })
					 $.h1('SIR')
					 st = $St($.c(600, 300)[0]).t()
					 st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
					 h = $H().a2(st)
					 h.dc()
					 h.dc(36)
					 h.dc(18, 'o')
					 h.dc(200, 100)
					 h.dc(300, 100, 20, 'r')
					 h.dc(300, 200, 20)
					 //
					 st2 = $St($.c(600, 300)[0]).t()
					 st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
					 st2.A($H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'}))
					 //
					 st1 = $St($.c(600, 300)[0]).t()
					 st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
					 st1.A(cjs.cir(300, 'g'))
					 st1.A(cjs.cir(140, 220, 20, 'o').dc())
					 st1.A(cjs.cir('r').XY(220, 200))
					 st3 = $St($.c(600, 300)[0]).t()
					 st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
					 st3.A(
							 $H().cirs({}, {x: 300, c: 'b'}, {y: 200, C: 'o'})
					 )
					 return
					 st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
					 h = $Sh().a2(st)
					 gx = h.graphics.FS()
					 h.dc()
					 h.dc(36)
					 h.cir(18, 'o')
					 h.dc(200, 100)
					 h.cir(300, 100, 20, 'r')
					 h.dc(300, 200, 20)
					 st2 = $St($.c(600, 300)[0]).t()
					 st2.A(_$Tx('h.cirs', '50px Arial', 'white').X(400))
					 st2.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
					 st1 = $St($.c(600, 300)[0]).t()
					 st1.A(_$Tx('cjs.cir', '50px Arial', 'white').X(400))
					 st1.A(cjs.cir(300, 'g'))
					 st1.A(cjs.cir(140, 220, 20, 'o').dc())
					 st1.A(cjs.cir('r').XY(220, 200))
					 st3 = $St($.c(600, 300)[0]).t()
					 st3.A(_$Tx('cjs.cirs', '50px Arial', 'white').X(400))
					 st3.A($Sh().cir({x: 300, c: 'b'}).cir({y: 200, C: 'o'}))
				 }
				 TSIR = function () {
					 $.C('b')
					 $S({
						 body: {fZ: 40, c: 'o'},
						 canvas: {M: 20}
					 })
					 $.h1('SIR')
					 st = $St($.c(600, 300)[0]).t()
					 st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
					 h = $H().a2(st)
					 h.dc()
					 st = $St($.c(600, 300)[0]).t()
					 st.A(_$Tx('h.dc', '50px Arial', 'white').X(400))
					 h = $H().a2(st)
					 h.dc()
				 }
				 ROTCIRS = function () {
					 z()
					 ct = $Ct().XY(150).a2($St(1000, '+'))
					 h = $H().f('r').a2(ct)
					 h.dc(30)
					 h.dc(30, 20)
					 h.dc(250, 250)
					 h.XY(100, 100)
					 T.on("tick", function (e) {
						 ct.rotation += 3
					 })
				 }
				 ONECIR = function () {
					 z()
					 ct = $Ct().XY(0, 0).a2($St(1000, '+'))
					 h = $H().a2(ct).XY(0, 0)
					 //x,y,r
					 h.f('o')
							 .dc(100, 300, 125)
					 ///x, r , r = 50
					 h.f('z').dc(100, 300)
					 h.f('r').dc(100, 300, 50)
					 h.f('b').dc(100, 300)
					 //r, x=0, y=0
					 h.f('r').dc(100)
				 }
				 CJSCIR = function () {
					 z()
					 ct = $Ct().XY(0, 0).a2($St(1000, '+'))
					 h = $H().a2(ct).XY(0, 0)
					 ct.A(
							 cjs.cir({
								 r: 100,
								 c: 'r', C: 'g', l: 50,
								 oX: 100
							 })//.XY(0,0)//.XY(300,400)
					 )
					 ct.A(
							 cjs.cir(80, 300, 300, 'g', 'y', 30)
					 )
					 ct.A(
							 h = cjs.cir(400, 300)
					 )
					 h.f('r').dc(28, 40, 40)
				 }
				 CIRTUT = function () {
					 z()
					 cv = $.c(1000, 500).A()
					 st = new cjs.S(cv[0])
					 st.t()//.b()
					 ct = $Ct().XY(0, 0).a2(st)
					 h = $H().a2(ct).XY(0, 0).a2(ct)
					 h.f('b').dc(400, 100, 10)
					 /*
					  ct.A(
					  cjs.cir({
					  r: 100,
					  c: 'r', C: 'g', l: 50,
					  oX: 100
					
					  })//.XY(0,0)//.XY(300,400)
					  )
					
					  */
				 }
				 CIRCSTROKE8 = function () {
					 St()
					 gx = h.graphics.FS()
					 h.c('b', 'r', 10).XY(-100, -100)
					 h.dc(200, 200, 50).dc(400, 200, 50).dc(600, 200, 50)
					 /*  h.dc(300,300,50)
					  gx.dc(400,400,50)
					  h.dc(500,500,50)
					  gx.dc(600,600,50)
					  */
				 }//C (PLAY needs update, WAP not?!)
				 CIRCS8 = function () {
					 CIRCTEST8 = function () {
						 St()
						 s.Sh().f('b').s('g').drag().cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, //why cant set lf to {}?
								 [{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}])
						 s.Sh().f('b').s('g').drag().cir({C: 'X', lf: {X1: 650, X2: 220, Y1: 950, Y2: 520}, r: 100},
								 [{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])
					 }//D better as wap
					 St()
					 // h.dc(100,100,50) -> no color
					 h.c().dc(100, 100, 50) // black fill, l4 white stroke
					 h.c('*').dc(100, 200, 50).dc(100, 250, 50)
					 h.c('***').dc(200, 200, 50).dc(200, 250, 50)
					 h.c({C: 'r'}).dc(300, 300, 50)
					 h.cir({
						 r: 50, x: 200, y: 200,
						 C: ['y', 10],
						 lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
						 ls: {c1: 'u', c2: 'o'}
					 })
					 h.cir({
						 r: 50, x: 500, y: 200,
						 C: ['y', 2],
						 rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
						 rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
					 })
					 h = s.h().drag().lf({}).dc()
							 .c('b', 'g', 10).lf({y2: 400}).dc(300, 300, 50)
					 cjs.me = function (fn) {
						 Q(['me'], function (q) {
							 fn(q.getResult('me'))
						 })
					 }
					 cjs.me(function (i) {
						 h.c({
							 l: 200,
							 rf: ['w', 'u', 800],
							 rs: {c1: 'w', c2: 'x', r2: 800}
						 }).dc({x: 0, y: 0, r: 200})
						 s.h().c({
							 l: 200,
							 lf: {c1: 'w', c2: 'u', y2: 200},
							 ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
						 }).dc({x: 0, y: 0, r: 200}).drag()
						 s.h().lf('y', 'r', 10).dc({r: 200}).c({
							 l: 0,
							 c: 'y',
							 //lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
							 bs: i, bf: i
						 }).dc({r: 200}).drag()
						 s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
					 })
				 }//D
			 }
			
			 /*
			  Matrix2D Class
			  Defined in: Matrix2D:41
			  Module: EaselJS
			  Represents an affine transformation matrix, and provides tools for constructing and concatenating matrices.
			
			  This matrix can be visualized as:
			
			  [ a  c  tx
			  b  d  ty
			  0  0  1  ]
			  Note the locations of b and c.
			
			  Constructor
			  Matrix2D ( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
			  Defined in Matrix2D:41
			  Parameters:
			
			  [a=1] Number optional
			  Specifies the a property for the new matrix.
			
			  [b=0] Number optional
			  Specifies the b property for the new matrix.
			
			  [c=0] Number optional
			  Specifies the c property for the new matrix.
			
			  [d=1] Number optional
			  Specifies the d property for the new matrix.
			
			  [tx=0] Number optional
			  Specifies the tx property for the new matrix.
			
			  [ty=0] Number optional
			  Specifies the ty property for the new matrix.
			
			  IndexMethodsProperties
			  Item Index
			  Methods
			
			  append
			  appendMatrix
			  appendTransform
			  clone
			  copy
			  decompose
			  equals
			  identity
			  invert
			  isIdentity
			  prepend
			  prependMatrix
			  prependTransform
			  rotate
			  scale
			  setValues
			  skew
			  toString
			  transformPoint
			  translate
			  Properties
			
			  a
			  b
			  c
			  d
			  DEG_TO_RAD static
			  identity static
			  tx
			  ty
			  */
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
		 cjs.rim = cjs.circle2 = function (rad, lineWid, x, y) {
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
			 return $Sh(gx).XY(x || 0, y || 0)
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
			 var o = g.O ? g.f :
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
		 cjs.cirX = function (stg, x, y, r, f, s, width, opt) {
			 var shp = cjs.shape(stg, x, y, f, s, width, opt) // ss = N(ss)?ss: radius/8
			 shp.dc(0, 0, r)
			 return shp
		 }
		 function drawSquare(ct, x, y) {
			 var h = $H()
			 h.a2(ct).f($r())
			 h.graphics.dr(5, 5, 70, 70)
			 if (x) {
				 h.X(x)
			 }
			 if (y) {
				 h.Y(y)
			 }
			 return h
		 }
		
		 function drawPoly() {
			 h.drawPolygon = h.drawConnectedLines = function (poly, sc) {
				 var h = this,
						 numVerts = poly.length
				 _.each(poly, function (v) {
					 v.X = v.x;
					 v.Y = v.y
				 })
				 if (sc) {
					 this.s(sc)
				 }
				 if (numVerts >= 3) {
					 //move to the FIRST
					 h.mt(poly[0])
					 //lineTo the REST
					 T(numVerts, function (i) {
						 h.lt(poly[i % numVerts])
					 }) //just a clever way to start from 1
				 }
				 return this
			 }
			 h.drawPolygons = function (paths, C, c) {
				 var h = this
				 h.C(C);
				 if (c) {
					 h.c(c)
				 }
				 _.e(paths, function (p) {
					 h.drawPolygon(p)
				 })
				 return h
			 }
			 h.drawPolygons = function (paths, fc, sc) {
				 var h = this
				 h.f(fc).s(sc)
				 _.each(paths, function (path) {
					 h.drawPolygon(path)
				 })
				 return h
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
//alpha:
			 h.$vs = function (polVs, ox, oy) {
				 if (gpc.iP(polVs)) {
					 polVs = polVs.vs()
				 }
				 return this.vs(polVs, ox, oy)
			 }
			 h.polyStar = h.pStr = h.dp = function (x, y, r, sides, ptSiz, ang) {
				 var h = this, gx = h.graphics,
						 g = G(arguments), o //,  x=g.f,  y=g[1], r=g[2],  sides=g[3], ptSiz=g[4], ang=g[5]
				 o = N(g[3]) ? {
					 x: g.f, y: g[1], r: g[2], s: g[3], p: g[4], a: g[5]
				 } :
						 N(g.f) ? {r: g.f, s: g[1], p: g[2], a: g[3]} :
								 O(g.f) ? g.f : {}
				 o.a = N(o.a, 0);
				 o.x = N(o.x, 0);
				 o.y = N(o.y, 0)
				 o.p = _.cap(o.p, 0, .99)
				 gx.drawPolyStar(o.x, o.y, o.r, o.s, o.p, o.a)
				 return h
			 }
			 h.poly = function (vxs, f, s, wd) {
				 h.poly = function (verts, f, s, width) {
					 var that = this, gx = this.graphics
					 if (N(verts[0])) //verts passed in directly
					 {
						 _.each(arguments,
								 function (vert) {
									 gx.lt(vert[0], vert[1])
								 });
						 gx.cp()
					 }
					 else {
						 this.graphics.fs(f, s, width)
						 {
							 _.e(verts, function (vert) {
								 gx.lt(vert[0], vert[1])
							 });
							 gx.cp()
						 }
					 }
					 return this
				 }
				 h.poly = function (verts, f, s, width) {
					 var that = this, gx = this.graphics
					 if (N(verts[0])) { //verts passed in directly
						 _.e(arguments,
								 function (vert) {
									 gx.lt(vert[0], vert[1])
								 });
						 gx.cp()
					 }
					 else {
						 this.graphics.fs(f, s, width)
						 {
							 _.e(verts, function (vert) {
								 gx.lt(vert[0], vert[1])
							 });
							 gx.cp()
						 }
					 }
					 return this
				 }
				 var h = this, g = arguments
				 h.fs(f, s, wd)
				 if (A(vxs) && N(vxs[0])) {
					 _.e(g, function (v) {
						 h.lt(v[0], v[1])
					 })
				 }
				 else {
					 _.e(vxs, function (v) {
						 h.lt(v)
					 })
				 }
				 return h.cp()
			 }
			 h.pol = function () {
				 var h = this, g = G(arguments), o;
				 //O$ >>  O(o) && !F(o) && !A(o)
				 o = O$(g.f) ? g.f :
						 N(g.s) && N(g.t) ?
						 {v: g.f, x: g.s, y: g.t, c: g.fo, C: g.fi, l: g.si} :
						 {v: g.f, c: g.s, C: g.t, l: g.fo}
				 o.v = M.os(o.v, o.x, o.y)
				 o = oDef(o || {})
				 h.ef().es().c(o)
				 if (o.bf) {
					 var bf = S(o.bf) ? o.bf : 'me'
					 h.bf(bf, function draw() {
						 h.mt(o.v).cp()
					 })
				 }
				 else {
					 h.lt(o.v)
					 h.cp()
				 }
				 return h
			 }
		 }
		
		 function shapeProto() {
			 h = cjs.Shape.prototype
			 h._dc = function () {
				 var h = this
				 h.graphics.dc.apply(h.graphics, arguments)
				 return this
			 }
			 h.dc = function () {
				 var h = this, gx = h.graphics, g = G(arguments), o
				 o = g.O ? g.f : {x: g.f, y: g.s, r: g.t}
				 o.x = N(o.x, 0)
				 o.y = N(o.y, 0)
				 o.r = N(o.r, 50)
				 gx.dc(o.x, o.y, o.r)
				 return h
			 }
			 HDC = function () {
				 h = $Sh()
				 h.graphics.f('blue')
				 h.dc(100, 100, 100)
				 h.graphics.f('yellow')
				 h.dc(200, 100, 100)
				 //.cir()
				 _$St().A(h).u()
			 }
			 h.cir = function () {
				 var h = this, gx = h.graphics,
						 g = G(arguments), o
				 if (g.A) {
					 return $a(h, 'cir', g.f)
				 }
				 if (g.OO_) {
					 return h.cirs(g)
				 }
				 o = g.O ? g.f : N(g.t) ?
				 {x: g.f, y: g.s, r: g.t, c: g[3], C: g[4], l: g[5]} : N(g.s) ?
				 {x: g.f, y: g.s, c: g.t, C: g[3], l: g[4]} :
						 g.N_ ? {r: g.f, c: g.s, C: g.t, l: g[3]} :
						 {c: g.f, C: g.s, l: g.t}
				 //h.c(o)
				 if (o.c) {
					 h.c(o.c)
				 }
				 if (o.C) {
					 h.C(o.C)
				 }
				 if (N(o.l)) {
					 h.l(o.l)
				 }
				 h.cp()
				 h._dc(o)
				 if (o.bf) {
					 if (N(o.bf)) {
						 o.bm = 'me'
					 }
					 if (F(Q)) { //async
						 h.bf(o.bf, function () {
							 h.dc(o)
						 })
					 }
					 else { //sync
						 o.tf = o.tf || null;
						 h.bf(o.bf, o.tf).dc(o)
					 }
				 }
				 else {
					 h.dc(o)
				 }
				 h.alpha = N(o.al, 1)
				 return h
			 } // h.circ h.circle = h.cir2 = h.cir = 
			 HCR = function () {
				 h = $Sh()
				 h.graphics.f('blue')
				 //h.cir(100, 100, 100)
				 //h.graphics.f('yellow')
				 h.cir(200, 100, 100, 'r')
				 _$St().A(h).u()
			 }
			 h.cirs = function () {
				 var h = this, g = G(arguments)
				 g.e(function (c) {
					 h.dc(c)
				 })
				 return this
			 }
//tricky short name:
//OVERLAPNAMEWITHCOLOR = h.c = function (rad) {return this.dc(0, 0, rad)}
			 h._dr = function () {
				 this.graphics.dr.apply(
						 this.graphics, arguments)
				 return this
			 }
			 h.dr = function () {
				 var h = this, gx = h.graphics, g = G(arguments),
						 o = g.O ? g.f : N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g[3]} : {w: g.f, h: g.s}
				 o.x = N(o.x, 0);
				 o.y = N(o.y, 0);
				 o.w = N(o.w, 100);
				 o.h = N(o.h, o.w)
				 gx.dr(o.x, o.y, o.w, o.h)
				 return h
			 }
			 h.dr2 = function (x, y, W, H) {
				 var h = this, g = G(arguments), o
				 if (g.OO_) {
					 g.e(function (g) {
						 h.dr2(g)
					 });
					 return h
				 }
				 o = g.O ? g.f :
						 U(g.t) ? {w: g.f, h: g.s} :
						 {x: g.f, y: g.s, w: g.t, h: g[3]}
				 o.x = N(o.x, 0)
				 o.y = N(o.y, 0)
				 o.w = N(o.w, 50)
				 o.h = N(o.h, o.w)
				 h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
				 return h
			 }
			 h.rect = h.rectangle = function (x, y, w, h, fc, sc) {
				 var gx = this.graphics
				 if (fc) {
					 gx.f(fc)
				 }
				 if (sc) {
					 gx.s(fc)
				 }
				 gx.dr(x, y, w, h)
				 return this
			 }
			 h.rec = function () {
				 var h = this, g = G(arguments), o
				 if (g.OO_) {
					 g.e(function (g) {
						 h.rec(g)
					 });
					 return h
				 }
				 o = g.O ? g.f :
						 S(g.s) ? {c: g.f, C: g.s, x: g.t, y: g[3], w: g[4], h: g[5], l: g[6]} :
								 g.S_ ? {c: g.f, x: g.s, y: g.t, w: g[3], h: g[4], l: g[5]} :
										 N(g.t) ?
										 {x: g.f, y: g.s, w: g.t, h: g[3], c: g[4], C: g[5], l: g[6]} :
										 {w: g.f, h: g.s, c: g.t, C: g[3], l: g[4]}
				 o.x = N(o.x, 0)
				 o.y = N(o.y, 0)
				 o.w = N(o.w, 50)
				 o.h = N(o.h, o.w)
				 if (o.i) {
					 h.bf(o.i, function () {
						 o.i = null;
						 h.rec(o)
					 })
					 return h
				 }
				 if (o.c) {
					 h.c(o)
				 }
				 if (o.lf) {
					 h.lf({
						 c1: o.c1 || 'z', c2: o.c2 || 'w',
						 s1: 0, s2: 1,
						 x: o.x - o.w / 2, y: o.y - o.h / 2,
						 x2: o.x - o.w / 2, y2: o.y + o.h / 2
					 })
				 }
				 h.dr(-o.w / 2 + o.x, -o.h / 2 + o.y, o.w, o.h)
				 return h
			 }
			 h.ef = function () {
				 this.graphics.endFill.apply(
						 this.graphics, arguments)
				 return this
			 }
			 h.es = function () {
				 var h = this, gx = h.graphics
				 gx.es()
				 return h
			 }
			 h.cp = function () {
				 this.graphics.cp();
				 return this
			 }
			 h.clr = h.z = h.clear = function () {
				 this.graphics.clear();
				 return this
			 }
//function advanced() {
			 h.same = h.copy = function () {
				 return $h(this) // cjs.shape(this)
			 }
			 function color() {
				 h.C = h.s = h.sC = function (str, l) {
					 var h = this, gx = h.graphics
					 if (S(str)) {
						 str = oO('c', str)
					 }
					 if (N(l)) {
						 h.l(l)
					 }//this.graphics.sC.apply(this.graphics, arguments)
					 this.graphics.s(str)
					 return this
				 }
				 h.fs = h.col = function () {
					 this.graphics.fs.apply(
							 this.graphics, arguments)
					 return this
				 }
				 h.l = function (l, b, c) {
					 var h = this, gx = h.graphics;
					 gx.ss(l || 1, b, c)
					 return h
				 }
				 h.ss = function (a) {
					 var h = this, gx = h.graphics, g, o
					 if (S(a)) {
						 this.C(a);
						 return this.ss.apply(this, _.rest(arguments))
					 }
					 g = G(arguments)
					 o = {l: g[0], caps: g[1], jts: g[2], mit: g[3], ignSc: false}
					 o.l = N(o.l) ? o.l : 4
					 if (o.caps == 'r') {
						 o.caps = 'round'
					 }
					 if (o.caps == 's') {
						 o.caps = 'square'
					 }
					 if (o.caps == 'b') {
						 o.caps = 'butt'
					 }
					 if (o.mit == 'r') {
						 o.mit = 'round'
					 }
					 if (o.mit == 'm') {
						 o.mit = 'miter'
					 }
					 if (o.mit == 'b') {
						 o.mit = 'bevel'
					 }
					 o.jts = o.jts || 0
					 if (U(o.mit)) {
						 o.mit = 100
					 }
					 if (g.n) {
						 o.ignSc = true
					 }
					 gx.ss(o.l, o.caps, o.jts, o.mit, o.ignSc)
					 return h
				 }
				 h.f = function (fill) {
					 if (S(fill)) {
						 fill = oO('c', fill)
					 }
					 this.graphics.f(fill)
					 return this
				 }
				 h.c = function (c, C, l) {
					 $shapeCol = function (g) {
						 var o = g.O ? g.f :
								 g.m ? {c: '*'} :
										 g.f == '**' ? {c: '**'} :
												 g.f == '***' ? {c: '***'} :
														 g.u ? {c: 'z', C: 'w', l: 6} :
																 N(g.s) ? {c: g.f, l: g.s} :
																		 g.N_ ? {l: g.f, C: g.s} :
																		 {c: g.f, C: g.s, l: g.t}  // 'c-C-l'
						 return o
					 }
					 var h = this, gx = h.graphics, g = G(arguments)
					 var o = $shapeCol(G)
					 if (A(o.c)) {
						 if (N(o.c[1])) {
							 o.c = o.c[0];
							 o.l = o.c[1];
						 }
						 else if (N(o.c[0])) {
							 o.l = o.c[0];
							 o.C = o.c[1]
						 }
						 else {
							 o.c = o.c[0];
							 o.C = o.c[1];
							 o.l = o.c[2];
						 }
					 }
					 if (A(o.C)) {
						 o.C = o.C[0];
						 o.l = o.C[1]
					 }
					 if (o.c == 0) {
						 gx.f(null);
						 o.c = 'X'
					 }
					 if (o.C == 0) {
						 gx.s(null);
						 o.C = 'X'
					 }
					 if (o.c == 00) {
						 gx.f(null);
						 gx.s(null);
						 o.c = 'X';
						 o.C = 'X'
					 }
					 if (o.c == '*') {
						 o.c = $r()
					 }
					 if (o.C == '*') {
						 o.C = $r()
					 }
					 if (o.c == '**') {
						 o.c = $r();
						 o.C = $r()
					 }
					 if (o.c == '***') {
						 o.c = $r();
						 o.C = $r();
						 o.l = R(20)
					 }
					 if (S(o.c)) {
						 gx.f(oO('c', o.c))
					 }
					 if (S(o.C)) {
						 gx.s(oO('c', o.C))
					 }
					 if (N(o.l)) {
						 h.l(o.l)
					 }
					 // fGrad() {
					 if (o.lf) {/*
					  $l('r: ' + o.r)
					  $l('x: ' + o.x)
					  $l('y: ' + o.y)
					  $l('x1: '+ o.lf.x1)
					  $l('y1: '+ o.lf.y1)
					  $l('x2: '+ o.lf.x2)
					  $l('y2: '+ o.lf.y2)
					  */
						 o.lf = O(o.lf) ? o.lf : {}
						 if (o.r) {
							 o.r = N(o.r, 0);
							 o.x = N(o.x, 0);
							 o.y = N(o.y, 0)
							 o.lf.x1 = N(o.lf.X1) ? o.lf.X1 : N(o.lf.x1, 0) + o.x - o.r
							 o.lf.y1 = N(o.lf.Y1) ? o.lf.Y1 : N(o.lf.y1, 0) + o.y - o.r
							 o.lf.x2 = N(o.lf.X2) ? o.lf.X2 : N(o.lf.x2, 0) + o.x - o.r
							 o.lf.y2 = N(o.lf.Y2) ? o.lf.Y2 : N(o.lf.y2, 0) + o.y + o.r
						 }
						 h.lf(o.lf)
					 }
					 if (o.rf) {
						 o.rf = O(o.rf) ? o.rf : {}
						 o.c = [2, 'z']
						 if (o.r) {
							 o.rf.x1 = N(o.rf.X1) ? o.rf.X1 : _.tN(o.rf.x1) + o.x
							 o.rf.y1 = N(o.rf.Y1) ? o.rf.Y1 : _.tN(o.rf.y1) + o.y
							 o.rf.x2 = N(o.rf.X2) ? o.rf.X2 : _.tN(o.rf.x2) + o.x + 20
							 o.rf.y2 = N(o.rf.Y2) ? o.rf.Y2 : _.tN(o.rf.y2) + o.y + 20
							 o.rf.r2 = N(o.rf.R2) ? o.rf.R2 : _.tN(o.rf.r2) + o.r
						 }
						 h.rf(o.rf)
					 }
					 if (o.ls) {
						 o.ls = O(o.ls) ? o.ls : {}
						 if (o.r) {
							 o.ls.x1 = _.tN(o.ls.x1) + o.x - o.r
							 o.ls.y1 = _.tN(o.ls.y1) + o.y - o.r
							 o.ls.x2 = _.tN(o.ls.x2) + o.x - o.r
							 o.ls.y2 = _.tN(o.ls.y2) + o.y + o.r
						 }
						 h.ls(o.ls)
					 }
					 if (o.rs) {
						 o.rs = O(o.rs) ? o.rs : {}
						 if (o.r) {
							 o.rs.x1 = _.tN(o.rs.x1) + o.x
							 o.rs.y1 = _.tN(o.rs.y1) + o.y
							 o.rs.x2 = _.tN(o.rs.x2) + o.x
							 o.rs.y2 = _.tN(o.rs.y2) + o.y
							 o.rs.r2 = _.tN(o.rs.r2) + o.r
						 }
						 h.rs(o.rs)
					 }
					 //fBmap()
					 if (o.bs) {
						 h.bs(o.bs)
					 }
					 if (o.bf) {
						 h.bf(o.bf)
					 }
					 return h
				 }
			 }
			
			 color()
		 }
		
		 function polApps() {
			 HPOLY8 = function () {
				 St()
				 v = [[-100, 0], [0, -100], [100, 50]]
				 s.h(600, 300).poly({v: v, bf: 'me'})
				 s.h(900, 300).poly({v: v, lf: 1})
				 s.h(800, 300).poly({v: v, rf: 1})
				 h = s.h(200, 300).drag().bf('me', function () {
					 h.dc([150], [200, 0, 150])
				 })
				 st.u()
			 }//C
			 HPOL = function () {
				 st = $St()
				 h = st.h('+').XY(0, 0)
				 h.pol({v: vs1, c: 'r', C: 'y', bf: 'flame'})
				 h.pol(vs1, 'r', 'y', 30)
				 h.pol(vs1, 200, 200, 'r', 'y', 3)
			 }
			 XX2 = EASELCONVEX8 = function () {
				 s = $St()
				 s.poly([[-100, -10], [0, 100], [100, 20]], 'red', 'white', 10).XY(200, 300)
				 s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
				 s.poly([[-40, 40], [-40, -40], [40, -40], [40, 30]], 'blue', 'white').XY(200, 200)
			 }
			 CPOL4 = function () {
				 St()
				 vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
				 //h.lt([450, 410],[600, 500], [500, 500])
				 //h.lt([[450, 410], [600, 500], [500, 500]])
				 //h.lt( V(450, 410), V(600, 500), V(500, 500))
				 h.pol({
					 c: 'r',
					 C: 'b',
					 l: 20,
					 v: vs
				 })
			 }
			 POLY = EVEX = EASELCONVEX = function () {
				 s = cjs.S()
				 s.poly([[-100, -10], [0, 100], [100, 20]],
						 'red', 'white', 10).XY(200, 300)
				 s.poly([[-20, -80], [-100, -200], [100, 5]]).XY(300, 200)
				 s.poly(
						 [[-40, 40], [-40, -40], [40, -40], [40, 30]],
						 'blue', 'white').XY(200, 200)
			 }
			 CPOL0 = function () {
				 __St()
				 vs = [V(240, 210), V(450, 410), V(600, 500), V(500, 500)]
				 //h.lt([450, 410],[600, 500], [500, 500])
				 //h.lt([[450, 410], [600, 500], [500, 500]])
				 //h.lt( V(450, 410), V(600, 500), V(500, 500))
				 h.pol({
					 c: 'r',
					 C: 'b',
					 l: 20,
					 v: vs
				 })
			 }
		 }
		
		 function line() {
			 h.dl = h.ln = h.line = function () {
				 var h = this, g = G(arguments), o
				 o = g.N_ ?
				 {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
				 {x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
				 this.mt(o.x1, o.y1).lt(o.x2, o.y2)
				 return this
			 }
			 h.dl = h.ln = h.line = function () {
				 var h = this, g = G(arguments), o
				 o = g.N_ ?
				 {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} :
				 {x1: g.f.x, y1: g.f.y, x2: g.s.x, y2: g.s.y}
				 this.mt(o.x1, o.y1).lt(o.x2, o.y2)
				 return this
			 }
			 h._lt = function (x, y) {
				 var v = V(x, y)
				 this.graphics.lt(v.x, v.y)
				 return this
			 }
			 h.lt = h._lt = function (x, y) {
				 var h = this, gx = h.graphics, g = G(arguments)
				 //A(a) && O(a[0])
				 if (AO(g.f)) {
					 g.e(function (v) {
						 h.lt.apply(h, v)
					 })
					 return h
				 }
				 O(g.s) ?
						 g.e(function (pt) {
							 h.lt(pt)
						 }) :
						 gx.lt(V(x, y).x, V(x, y).y)
				 return h
			 }
			 h.lt = function (x, y) {
				 var h = this, g = G(arguments)
				 if (AO(g.f)) {
					 g.e(function (v) {
						 h.lt.apply(h, v)
					 })
				 }
				 else if (O(g.s)) {
					 g.e(function (pt) {
						 h.lt(pt)
					 })
				 }
				 else {
					 this.graphics.lt(V(x, y).x, V(x, y).y)
				 }
				 return this
			 }
			 h._mt = function (x, y) {
				 var g = G(arguments)
				 var pt = V(g.f, g.s)
				 this.graphics.mt(pt.x, pt.y)
				 return this
			 }
			 h._mt = function (x, y) {
				 var v = V(x, y)
				 this.graphics.mt(v.x, v.y)
				 return this
			 }
			 h.mt = function () {
				 var g = G(arguments), o
				 if (g.N) {
					 return this._mt(g.f, g.s)
				 }
				 o = AO(g) ? {
					 firPt: _.f(g.f), restPts: _.r(g.f),
					 ox: g.s, oy: g.t
				 } : {firPt: g.f, restPts: g.r}
				 return this._mt(
						 o.firPt[0] + N(o.ox, 0),
						 o.firPt[1] + N(o.oy, 0)
				 ).lt(M.os(o.restPts, o.ox, o.oy))
			 }
			 h.mt = function () {
				 var g = G(arguments), o
				 if (g.N) {
					 return this._mt(g.f, g.s)
				 }
				 o = AO(g) ? {
					 firPt: _.f(g.f), restPts: _.r(g.f),
					 ox: g.s, oy: g.t
				 } : {firPt: g.f, restPts: g.r}
				 return this._mt(
						 o.firPt[0] + N(o.ox, 0),
						 o.firPt[1] + N(o.oy, 0)
				 ).lt(M.os(o.restPts, o.ox, o.oy))
			 }
		 }
		
		 function curves() {
			 h.arc = h._a = function (x, y, r, startA, endA, aCW) {
				 var h = this, gx = h.graphics
				 /*
				  Draws an arc defined by the radius, startAngle and endAngle arguments, centered at the position (x, y).
				  For example, to draw a full circle with a radius of 20 centered at (100, 100):
				  arc(100, 100, 20, 0, Math.PI*2)
				  */
				 h.arc(x, y, r, startA, endA, aCW)
				 return h
			 }
			 h.arc2 = h._a2 = function (x, y, X, Y, r) {
				 var h = this, gx = h.graphics
//Draws an arc with the specified control points and radius.
				 gx.arcTo(x, y, X, Y, r)
				 return h
			 }
			 h.bz = h.bez = h.bt = h._bt = function (cp1x, cp1y, cp2x, cp2y, x, y) {
				 var h = this,
						 gx = h.graphics
				 gx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
				 return h
			 }
			 h._qt = function (cpx, cpy, x, y) {
				 var h = this, gx = h.graphics
				 gx.quadraticCurveTo(cpx, cpy, x, y)
				 return h
			 }
			 h.qt = function (a, b, c, d, e, f) {
				 var h = this, gx = h.graphics
				 if (O(a)) {
					 a = V(a)
					 b = V(b)
					 gx.qt(a.x, a.y, b.x, b.y)
				 }
				 else {
					 gx.qt(a, b, c, d, e, f)
				 }
				 return h
			 }
			 h.de = h.ell = function () {
				 var h = this,
						 gx = h.graphics,
						 g = G(arguments),
						 o = N(g[2]) ? {x: g.f, y: g[1], w: g[2], h: g[3]} :
								 N(g.f) ? {w: g.f, h: g[1]} :
										 O(g.f) ? g.f : {}
				 o.x = _.tN(o.x)
				 o.y = _.tN(o.y)
				 o.w = _.tN(o.w, 100)
				 o.h = _.tN(o.h, o.w)
				 gx.drawEllipse(o.x, o.y, o.w, o.h)
				 return h
			 }
			 h.de2 = function (x, y, W, H, r) {
				 var h = this
				 h.de(-W / 2 + x, -H / 2 + y, W, H, r)
				 return h
			 }
			 h._rr = function () {
				 this.graphics.rr.apply(this.graphics, arguments)
				 return this
			 }
			 h.rr = function () {
				 var h = this,
						 gx = h.graphics,
						 g = G(arguments),
						 o = N(g[3]) ? {x: g.f, y: g[1], w: g[2], h: g[3], r: g[4]} :
								 N(g[1]) ? {w: g.f, r: g[1]} :
										 N(g.f) ? {w: g.f, h: g[1], r: g[2]} :
												 O(g.f) ? g.f : {}
				 o.x = N(o.x, 0)
				 o.y = N(o.y, 0)
				 o.w = N(o.w, 100)
				 o.h = N(o.h, o.w)
				 return h._rr(o.x, o.y, o.w, o.h, o.r)
			 }
			 h.rr2 = function (x, y, W, H, r) {
				 var h = this
				 h.rr(-W / 2 + x, -H / 2 + y, W, H, r)
				 return h
			 }
			 h.rc = h.roundRectComplex = function () {
				 var h = this, gx = h.graphics
				 gx.drawRoundRectComplex.apply(gx, arguments)
				 return h
			 }
		 }
		
		 function graphicsApps() {
			 $S$ = function () {
				 return st = _$St().t()
			 }
			 GXPOL = function () {
				 $S$().Gx().FS().poly([vs1])
			 }
			 GXLT = function () {
				 $S$().Gx().FS()._mt(100, 300)._lt(300, 100)._lt(500, 200)._lt(800, 200)
						 ._lt(100, 300)
			 }
			 GXP = function () {
				 $S$().Gx().FS()._pol(vs1)
			 }
			 GX1 = function () {
				 st = _$St().t()
				 //good gx = $Sh().a2(st).graphics
				 //good gx = st.Sh().graphics
				 gx = st.Gx()
				 gx.C('b').dc(200, 100, 40)
			 }
			 GX2 = function () {
				 st = _$St().t()
				 //good gx = $Sh().a2(st).graphics
				 //good gx = st.Sh().graphics
				 gx = st.Gx().SS()
				 $.i('me', function (img) {
					 gx.F()
					 gx.dc(200, 200, 200).S()
					 gx.dc(400, 400, 200).S()
					 gx.dc(700, 700, 200).S()
					 gx._bf(img)
					 gx.dc(200, 200, 200).S()
					 gx.dc(400, 400, 200).S()
					 gx.dc(700, 700, 200).S()
				 })
			 }
			 GOB = function () {
				 st = _$St().t()
				 //good gx = $Sh().a2(st).graphics
				 //good gx = st.Sh().graphics
				 h = st.Sh().drag()
				 gx = h.graphics.SS()
				 $.i('me', function (img) {
					 gx.F()
					 //gx._bf(img)
					 gx.dcO({x: 100, y: 200, r: 200})
					 gx.C('R').dcO({x: 200, y: 200, r: 200})
					 gx.C('b', 'g', 30)._dc(100, 300)
				 })
			 }
			 REC1 = function () {
				 st = _$St().t()
				 h = st.Sh().drag()
				 gx = h.graphics
				 gx.FS()._dr()
			 }
			 GDR = function () {
				 st = _$St().t()
				 gx = st.Gx().FS()._dr(100, 100, 500, 10)
				 st.Gx().FS()._dr(500, 10)
			 }
			 graphicsTestApp()
			 function graphicsTestApp() {
				 GRAPHTEST8 = function () {
					 St();
					 img = $.i('me', function () {
						 s.ct().A(h = $Sh())
						 gx = h.graphics.FS()
						 s.A($Bm(img))
						 gx.ss(32).dr(20, 20, 920, 360);
						 fns = [
							 function () {
								 return $Sh(12, 10)
										 .lf('b', 'g', 130).dr(130)
							 },
							 function () {
								 return $Sh(40, 10, 'b', 16)
										 .ls('r', 'w', 70, 140).de(70, 140)
							 },
							 function () {
								 return $Sh(80, 80)
										 .C('b', 8).rf('w', 'y', 40).dc(40)
							 },
							 function () {
								 return $Sh(12, 10, 18)
										 .bf(img, cjs.M(1)).rs('b', 'g', 30, 130).dr(130)
							 },
							 function () {
								 return $Sh(12, 12, 'g', 'r', 8)
										 .rr(130, 30)
							 }, //w(h) and r
							 function lt() {
								 return $Sh().C('o')
										 .ss(16, 'round', 'round')
										 .mt([40, 10], [90, 90], [90, 140])
							 },
							 function star() {
								 return $Sh(80, 85, 'y', 'b', 3)
										 .pStr(0, 0, 80, 5, .8, -95)
							 },
							 function hex() {
								 return $Sh(80, 40, 'p')
										 .pStr(40, 6).pStr(0, 75, 40, 6).pStr(45, 45, 20, 6)
							 }
						 ]
						 _.e(fns, withEachFn)
						 function withEachFn(cont, i) {
							 var W = 155, H = 155, P = 5, C = 4 //pad, cols
							 s.A(tile(cont()).XY(
									 42 + (W + P) * (i % C),
									 42 + (i / C | 0) * (H + P)))
						 }
					 })[0]
					 tile = createTile = function (x, y) {
						 var bg, til
						 bg = $h().c('t').dr(0, 0, 155, 155).ef().op(.2)
						 til = cjs.ct().A(bg)
						 if (N(x)) {
							 til.X(x)
						 }
						 if (N(y)) {
							 til.Y(y)
						 }
						 if (O(x)) {
							 til.A(x)
						 }
						 return til
					 }
				 }
				 XX6 = GXTX = GRAPHICSTEST = function () {
					 stage = cjs.stage(800, 500).A()
					 canvas = stage.canvas
					 // grab canvas width and height for later calculations:
					 w = canvas.width
					 h = canvas.height
					 img = $.img('me', layout)[0]
					 function layout() {
						 var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
							 createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]
						 var padding = 5
						 var _width = 155
						 var _height = 155
						 var cols = 4
						 var space = 0
						 var border = createBorder();
						 _.times(arr.length, function (i) {
							 var tile = arr[i]()
							 tile.x = 42 + (_width + padding) * (i % cols)
							 tile.y = 42 + (i / cols | 0) * (_height + padding)
							 stage.A(tile)
						 })
						 stage.A(border)
						 stage.update()
					 }
					
					 function createBorder() {
						 var s = cjs.shape()
						 s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)
						 return cjs.container().A(s)
					 }
					
					 function createBitmapFill() {
						 var container = createTile();
						 var s = cjs.shape().XY(12, 10)
						 var mtx = new createjs.Matrix2D().rotate(1)
						 s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
								 .beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)
						 return cjs.container().A(s)
					 }
					
					 function createRectGradientFill() {
						 var s = cjs.shape().XY(12, 10)
						 s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)
						 return createTile().A(s)
					 }
					
					 function createEllipse() {
						 var s = cjs.shape().XY(40, 10)
						 s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
								 .setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
								 .drawEllipse(0, 0, 70, 140, 8)
						 return createTile().A(s)
					 }
					
					 function createRadialGradientFill() {
						 var s = cjs.shape().XY(80)
						 s.graphics.ss(8).beginStroke("#f0f")
								 .beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
						 return createTile().A(s)
					 }
					
					 function createLineTo() {
						 var s = cjs.shape()
						 s.graphics.setStrokeStyle(16, "round", "round").beginStroke("#f90")
								 .moveTo(20, 10).lineTo(90, 90).lineTo(90, 140)
						 return createTile().A(s)
					 }
					
					 function createHex() {
						 var s = cjs.shape().XY(80, 40)
						 s.graphics.beginFill("pink")
								 .drawPolyStar(0, 0, 40, 6)
								 .drawPolyStar(0, 75, 40, 6)
								 .drawPolyStar(45, 45, 20, 6)
						 return createTile().A(s)
					 }
					
					 function createStar() {
						 var s = cjs.shape().XY(80, 85)
						 s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
								 .beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
						 return createTile().A(s)
					 }
					
					 function createRoundRect() {
						 var s = cjs.shape().XY(12)
						 s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
						 return createTile().A(s)
					 }
					
					 function createTile() {
						 var bg = cjs.shape()
						 bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()
						 bg.alpha = 0.25
						 return cjs.container().A(bg)
					 }
				 }
			 }
		 }
		 graphicsApps()
		 curves()
		 line()
		 shapeProto()
		 polApps()
		 drawPoly()
		 function canon(){
			 canon = function (box, x, y) {
				 var vx, vy, ball
				 x = x || box.x || 100
				 y = y || box.y || 500
				 stage.A(ball = Ball(12).XY(x, y))
				 if (box.rotation > 0) {
					 vx = 8 * (1 + Math.toRads(box.rotation))
					 vy = 16 * (1 - Math.toRads(box.rotation))
				 }
				 else {
					 vx = 8 * (-1 + Math.toRads(box.rotation))
					 vy = 16 * (1 + Math.toRads(box.rotation))
				 }
				 stage.tick(function () {
					 vy -= 0.5
					 ball.X(vx, '+').Y(vy, '-')
				 })
			 }
			 CANON = function () {
				 stage = cjs.stage(1000, 600).tick().A()
				 box = Box(20, 100).X(500).B(600)
				 stage.A(box)
				 kD('l', function () {
					 box.rT(4, '-')
				 })
				 kD('r', function () {
					 box.rT(4, '+')
				 })
				 kD('d', function () {
					 box.rotation = 0
				 })
				 kD('s', function () {
					 canon(box)
				 })
				 setInterval(function () {
					 var degs = Math.toRads(box.rotation)
					 canon(box, (500 + Math.acos(degs) * 30) + box.x - 540,
							 (500 + Math.asin(degs) * 30) + box.y - 540)
				 }, 500)
			 }
		 }
		 GRID = function () {
			 z()
			 stage = s = createjs.stage(1000, 1000).tick().A()
			 container = c = new createjs.Container()
			 stage.A(container)
			 cjs.bindSlide(container)
			 rows = 5;
			 cols = 6;
			 sqP = 12;
			 sqS = 80
			 sqSP = sqS + sqP
			 _.times(rows * cols, function (i) {
				 drawSquare(container,
						 sqSP * (i % cols),
						 sqSP * Math.floor(i / cols)
				 )
			 })
			 function drawSquare(container, x, y) {
				 var rectangle = new createjs.Shape()
				 container.A(rectangle)
				 rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
				 if (x) {
					 rectangle.X(x)
				 }
				 if (y) {
					 rectangle.Y(y)
				 }
				 return rectangle
			 }
		 }
		 HUD = function () {
			 st = cjs.HUD('r', 500, 500).A()
			 st.bm('guy')
			 st.HUD.A().bm('me', function (b) {
				 TR(b)
			 })
		 }
		 bitmapFillAoos()
		 function bitmapFIllApps(){
			 v = [[-100, 0], [0, -100], [100, 50]]
			 vs = [
				 [[-100, 0], [0, -100], [100, 50]],
				 [[-200, 0], [-100, -100], [0, 50]],
				 [[0, 200], [0, -200], [400, -300], [400, 300]]
			 ]
			 cirs = [{r: 150}, {x: 200, r: 150}, [300, 100, 100], [400, 100, 100]]
			 HBF = function () {
				 $St().h(300, 300).bf('me', function (h) {
					 h.dc(300).drag()
				 })
			 }
			 HBS = function () {
				 $Ld(function (ld) {
					 St(1000, 500).h(810, 410, '+').l(8)
							 .bf(ld.get('chicks'),
							 $Mx(1, 0, 0, 1, -800, -400)).rec(1600, 800)
					 ch = ld.get('chicks')
					 me = ld.get('me')
					 Ch(200, 200).rec(200, 300)
					 Ch(400, 250).rec(200, 300)
					 Ch(600, 250).rec(200, 300)
					 Ch(750, 350).rec(200, 300)
					 Ch(900, 250).rec(200, 300)
				 })
				 function Ch(x, y) {
					 var h = st.h(x, y).l(8)
					 h.graphics.bf(ch)
					 h.bs(me)
					 cjs.SL(h)
					 return h
				 }
			 }
			 TFM = function () {
				 $.i('chicks', function (img) {
					 St().h(100, 100, '+').sC('b', 50)
							 ._bf(img, null, $tMx(210, 230, .5, .5))
							 .dc(100, 100, 100)
				 })
			 }
			 LDB = function () {
				 St()
				 $Ld('me', function (ld) {
					 st.h(300, 200, '+').bf(ld.i('me')).dc(100)
					 st.h(500, 100, '+').bf('me').dc(100)
				 })
			 }
			 LB1 = function () {
				 $Ld(function (ld) {
					 St().h('+')
							 .C('z').dr(0, 0, 40, 40)
							 .bf(ld.get('me'), -100).dr(0, 0, 500, 200).dr(100, 100, 500, 200)
				 })
			 }
			 PFC = function () {
				 St()
				 $Ld(function (ld) {
					 h.bf($(ld.get('me')).A()[0])
							 .cir({x: 40, y: 289, r: 100}).mt(vs1).mt([[550, 20],
								 [800, 100], [700, 300], [500, 120]]).mt([[750, 20],
								 [900, 100], [900, 300], [700, 120]], 50, 200).mt([[550, 20],
								 [800, 100], [700, 300], [500, 120]], 0, 50)
							 .cir({x: 550, y: 20, r: 20, c: 'b'})
							 .cir({x: 800, y: 100, r: 30, c: 'b'})
							 .cir({x: 700, y: 300, r: 20, c: 'g'})
							 .cir({x: 500, y: 120, r: 30, c: 'g'})
				 })
			 }
			 HBC = function () {
				 St()
				 $Ld(function (ld) {
					 h = st.h('+')
					 h.bC({
						 circs: [
							 {x: 200, y: 100, r: 150},
							 {r: 100}, {x: 300}
						 ]
					 })
				 })
			 }
			 BFH = function () {
				 h = $St().h(300, 100, '+').bf({
					 i: 'me',
					 hs: [100, 300, 500, 700, 900],
					 fn: function (x) {
						 h.dc(x, 30, 120).es()
					 }
				 })
			 }
			 BMC = function () {
				 st = $St().t()
				 st.h(300, 200).bmCir({
					 circs: [{r: 100}, {x: 200, y: 200}, {}]
				 })
			 }
			 BFS = function () {
				 St()
				 var Ch = function () {
					 return st.h('+').l(20).bf(ch).bs(me)
				 }
				 $Ld(function (ld) {
					 ch = ld.get('chicks')
					 me = ld.get('me')
					 Ch().rec(200, 200, 200, 300)
					 Ch().rec(400, 250, 200, 300)
					 Ch().rec(600, 250, 200, 300)
					 Ch().rec(750, 350, 200, 300)
					 Ch().rec(900, 250, 200, 300)
					 h = st.h('+')
					 h.l(20).bf(me).bs(ch)
					 h.rec(200, 200, 200, 300)
					 h.rec(400, 250, 200, 300)
					 h.rec(600, 250, 200, 300)
					 h.rec(750, 350, 200, 300)
					 h.rec(900, 250, 200, 300)
				 })
			 }
			 BCS = function () {
				 St()
				 h = st.h(100, 300).drag()
				 h.bmCir({circs: cirs})
				 h2 = st.h(700, 300).drag()
				 h2.bmCir({circs: vs})
			 }
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
		 gx = cjs.Graphics.prototype
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
		 gx.dcO = function (o) {
			 o = o || {}
			 o.x = N(o.x, 0)
			 o.y = N(o.y, 0)
			 o.r = N(o.r, 50)
			 return this.dc(o.x, o.y, o.r)
		 }
		 gx._dc = function () {
			
			 /*
			
			  dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
			  var gx = new createjs.Graphics().ss(1);
			  gx.s(cjs.Graphics.getRGB(0,0,0));
			  gx.f(cjs.Graphics.getRGB(255,0,0));
			  gx.dc(0,0,3);
			  var s = new cjs.Shape(g); s.x = 100; s.y = 100;
			  st.addChild(s); st.update();
			
			  */
			 var gx = this, g = G(arguments), o
			 o = g.O ? g.f :
					 N(g.s) ? {x: g.f, y: g.s, r: g.t} :
					 {r: g.f}
			 return gx.dcO(o)
		 }
		 gx.dcColO = function (o) {
			 var gx = this
			 gx.fC(o.fC)
			 gx.sC(o.sC)
			 gx.ss(o.ss)
			 gx.dcO(o.x, o.y, o.r)
			 return gx
		 }
		 gx.dcCOLO = function (o) {
			 var gx = this
			 o.x = N(o.x, 0)
			 o.y = N(o.y, 0)
			 o.r = N(o.r, 50)
			 o.fC = o.fC || 'z'
			 o.sC = o.sC || 'w'
			 o.ss = N(o.ss, 4)
			 gx.fC(o.fC)
			 gx.sC(o.sC)
			 gx.ss(o.ss)
			 gx.dc(o.x, o.y, o.r)
			 return gx
		 }
		 gx.DC = function () {
			 var gx = this, g = G(arguments), o
			 o = g.O ? g.f :
					 N(g.s) ?
					 {x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
					 {r: g.f, fC: g.s, sC: g.t, ss: g.fo}
			 return gx.dcO(o)
		 }
		 gx._cir = function (ob) {
		 }
		 gx.cir = function () {
		 }
		 gx.cirs = function () {
		 }
		 gx.CIR = function () {
		 }
		 gx.__dr = function (x, y, w, h) {
			 return this.dr(N(x, 0), N(y, 0), N(w, 50), N(h, 50))
		 }
		 gx._drO = function (o) {
			 var gx = this, g
			 o = o || {}
			 o.x = N(o.x, 0)
			 o.y = N(o.y, 0)
			 o.w = N(o.w, 50)
			 o.h = N(o.h, 50)
			 gx.dr(o.x, o.y, o.w, o.h)
			 return gx
		 }
		 gx._dr = function () {
			 var gx = this, g = G(arguments), o
			 o = N(g.t) ?
			 {x: g.f, y: g.s, w: g.t, h: g.fo} :
			 {w: g.f, h: g.s}
			 return gx._drO(o)
		 };
		 /*
		  drawRect ( x  y  w  h ) Graphics chainable
		  Defined in drawRect:860
		  Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
		  Parameters:
		
		  x Number
		  y Number
		  w Number
		  Width of the rectangle
		  h Number
		  Height of the rectangle
		  Returns:
		
		  Graphics: The Graphics instance the method is called on (useful for chaining calls.)
		  */
		 gx._lt = function (x, y) {
			 var gx = this, g = G(arguments), o
			 o = {x: g.f, y: g.s}
			 gx.lt(o.x, o.y)
			 return gx
		 }
		 gx._mt = function (x, y) {
			 var gx = this, g = G(arguments), o
			 o = {x: g.f, y: g.s}
			 gx.mt(o.x, o.y)
			 return gx
		 }
		 gx._pol = function () {
			 var gx = this, g = G(arguments)
			 if (g.A) {
				 return gx._pol.apply(gx, g.f)
			 }
			 gx.mt(g.f[0], g.f[1])
			 _.e(_.r(g), function (pt) {
				 gx.lt(pt[0], pt[1])
			 })
			 gx.lt(g.f[0], g.f[1])
			 return gx
		 }
		 gx.pol = function (pts, f, s, w) {
			 var gx = this, g = G(arguments)
			 //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()
			 if (N(pts[0])) {
				 _.e(g, function (pt) {
					 gx.lt(pt[0], pt[1])
				 })
			 }
			 else {
				 gx.fs(f, s, w)
				 _.e(pts, function (pt) {
					 gx.lt(pt[0], pt[1])
				 });
			 }
			 return gx.cp()
		 }
		 gx.fancyLt = gx.poly = function (vs, f, s, w) {
			 var gx = this, g = G(arguments), o
			 o = AA(g.f) ? {vs: g.f, cCL: [g.s, g.t, g[3]]} : {vs: g}
			 if (o.cCL) {
				 gx.cCL.apply(gx, o.cCL)
			 }
			 _.e(o.vs, function (v) {
				 gx.lt(v[0], v[1])
			 })
			 gx.cp()
			 return this
		 }
		
	 }
ISO = function (levNum) {
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.times(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			createjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.times(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return cjs.circ(15, 'yellow', 'black')
	}
	tileBad = function () {
		return cjs.circ(15, 'green', 'orange')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
	z()
	stage = $St(900, 500).tick().A()
	grid = isoGrid(10, 10, 0, 240)
	kD('s', function () {
		location = location
	})
	if (levNum) {
		window['lev' + levNum]()
	}
	else if (window['_pam']) {
		window['lev' + _pam]()
	}
	else {
		lev1()
	}
	stage.bm0('me', function (me) {
		player = tilePlayer(me).sXY(.2).drag().to(5, 5)
	})
}
ISO = function (levNum) {
	kD = $.kD
	z()
	Tile = function () {
		var that = this
		var shape = this
		this.container = new createjs.Container().drag()
		this.tile = cjs.diamond(80, 40, 'blue')
		//this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
		this.container.A(this.tile)
		this.coin = false
		this.addCoin = function () {
			this.coin = tileCoin()
			this.container.A(this.coin)
		}
		this.addBad = function () {
			this.bad = tileBad()
			this.container.A(this.bad)
		}
		this.playerTo = function () {
			if (shape.wasOn == true) {
				location = location
			}//ISO()
			player.X(that.container.x)
			player.Y(that.container.y - 14)
			player.tile = shape
			player.col = shape.col
			player.row = shape.row
			if (shape.coin) {
				shape.coin.remove()
			}
			if (shape.bad) {
				location = location
			}
			shape.wasOn = true
			//if(isolated()){alert('!')}
		}
		this.container.on('dblclick', function () {
			h = that
			that.tile.graphics.f('red').dc(0, 0, 2)
			$l('dblclicked!')
			that.playerTo()
		})
	}
	isoRow = function (r, howMany, x, y) {
		x = x || 0;
		y = y || 0
		var row = []
		_.t(howMany, function (i) {
			x = x + 40
			y = y - 20
			var t = new Tile()
			t.container.XY(x, y)
			stage.A(t.container)
			cjs.bindSlide(t.container)
			t.col = i
			t.row = r
			row.push(t)
		})
		return row
	}
	isoGrid = function (n1, n2, x, y) {
		x = x || 0;
		y = y || 0
		var grid = []
		_.t(n2, function (i) {
			x = x + 40
			y = y + 20
			var row = isoRow(i, n1, x, y)
			grid.push(row)
		})
		return grid
	}
	tileCoin = function () {
		return $Cir(15, 'y', 'z')
	}
	tileBad = function () {
		return $Cir(15, 'g', 'o')
	}
	tilePlayer = function (bm) {
		player = bm
		player.right = function () {
			player.tile.container.remove()
			grid[player.row][player.col] = null
			grid[player.row][player.col + 1].playerTo()
		}
		player.left = function () {
			player.tile.container.remove()
			player.tile.exists = false
			//player.tile=null
			grid[player.row][player.col] = null
			grid[player.row][player.col - 1].playerTo()
		}
		player.down = function () {
			player.tile.container.remove()
			grid[player.row + 1][player.col].playerTo()
		}
		player.up = function () {
			player.tile.container.remove()
			grid[player.row - 1][player.col].playerTo()
		}
		player.to = function (x, y) {
			grid[x][y].playerTo()
			return player
		}
		kD('u', function () {
			player.up()
		})
		kD('d', function () {
			player.down()
		})
		kD('l', function () {
			player.left()
		})
		kD('r', function () {
			player.right()
		})
		return player
	}
	killTile = function (a, b) {
		grid[a][b].container.remove()
		grid[a][b].wasOn = true
	}
	lev1 = function () {
		grid[3][5].container.remove()
		grid[4][4].container.remove()
		grid[6][6].container.remove()
		grid[7][1].container.remove()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[3][4].addCoin()
		grid[5][2].addCoin()
		grid[8][8].addCoin()
	}
	lev2 = function () {
		grid[0][0].addCoin()
		grid[0][9].addCoin()
		grid[0][3].addCoin()
		grid[1][3].addCoin()
		grid[1][6].addCoin()
		grid[2][1].addCoin()
		grid[3][4].addCoin()
		grid[3][8].addCoin()
		grid[4][7].addCoin()
		grid[5][2].addCoin()
		grid[6][5].addCoin()
		grid[6][9].addCoin()
		grid[8][8].addCoin()
		grid[8][2].addCoin()
		grid[8][4].addCoin()
		grid[9][0].addCoin()
		killTile(1, 2)
		killTile(2, 2)
		killTile(2, 6)
		killTile(2, 7)
		killTile(2, 8)
		killTile(4, 0)
		killTile(4, 3)
		killTile(4, 4)
		killTile(4, 6)
		killTile(4, 9)
		killTile(6, 1)
		killTile(6, 2)
		killTile(7, 1)
		killTile(7, 3)
		killTile(7, 4)
		killTile(7, 9)
		killTile(8, 6)
		killTile(8, 7)
		killTile(8, 9)
	}
	lev3 = function () {
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[0][3].addBad()
		grid[1][6].addBad()
		grid[2][1].addBad()
		grid[3][4].addBad()
		grid[3][8].addBad()
		grid[5][2].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][8].addBad()
		grid[8][2].addBad()
	}
	lev4 = function () {
		grid[2][9].addCoin()
		grid[5][0].addCoin()
		grid[2][3].addCoin()
		grid[5][6].addCoin()
		grid[9][3].addCoin()
		grid[3][1].addCoin()
		grid[4][4].addCoin()
		grid[0][8].addCoin()
		grid[6][7].addCoin()
		grid[5][8].addCoin()
		grid[9][6].addCoin()
		grid[2][2].addBad()
		grid[0][0].addBad()
		grid[0][9].addBad()
		grid[5][3].addBad()
		grid[2][6].addBad()
		grid[4][5].addBad()
		grid[9][0].addBad()
		grid[9][7].addBad()
		grid[3][8].addBad()
		grid[6][5].addBad()
		grid[6][9].addBad()
		grid[8][2].addBad()
	}
	isolatedBeta = function () {
		r = player.row;
		c = player.col
		if (
				//grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
		//&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn
		grid[r + 1] && grid[r + 1][c] && grid[r + 1][c].wasOn
		) {
			return true
		}
	}
	stage = $St(900, 500).t().A()
	grid = isoGrid(10, 10, 0, 240)
	kD('s', function () {
		location = location
	})
	if (levNum) {
		window['lev' + levNum]()
	}
	else if (window['_pam']) {
		window['lev' + _pam]()
	}
	else {
		lev1()
	}
	stage.bm('me', function (me) {
		player = tilePlayer(me).sXY(.2).drag().to(5, 5)
	})
}//D
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B
function easelCanvasContext() {
	x.Cd = function (i, x, y) {
		var ctx = this
		x = N(x, 100)
		y = N(y, 100)
		i = Q.i(i || 'me')
		ctx.d(i, x - i.W() / 2, y - i.H() / 2)
		return ctx
	}
	x.scImCen = function (i, s, x, y) {
		if (S(i) && i.length < 100) {
			i = Q.i(i)
		}
		x = N(x, 0)
		y = N(y, 0)
		var w = this.W(),
				h = this.H(),
				s = s || 1
		this.d(i, w * s / -2 + w / 2, h * s / -2 + h / 2, w * s, h * s)
	}
	x.scaleImCenSpiralMe = function () {
		var scaleNum = 1,
				that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	x.scaleImCenSpiral = function () {
		var scaleNum = 1, that = this
		_.t(100, function () {
			that.scaleImCen('me', scaleNum)
			scaleNum *= .9
		})
	}
	x.cjsTick = x.tick = function (func) {
		var x = this
		cjs.tick(function () {
			x.temp(func)
		})
		return this
	}
	tempDrawOnTickerTick = x.t = function (fn) {
		var x = this;
		T.t(function () {
			x.temp(fn)
		});
		return this
	}
}
ob.keyControls = function (num) {
	var args = G(arguments),
			that = this
	if (args.P) {
		$.kD('left', function () {
			that.toL(num)
		})
		$.kD('right', function () {
			that.toR(num)
		})
	}
	if (args.N) {
		$.kD('up', function () {
			that.toU(num)
		})
		$.kD('down', function () {
			that.toD(num)
		})
	}
}
function color() {
	function balls() {
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
		PIT = BALLPIT = function () {
			$W();
			_.ev(.04, function () {
				w.s.xT(w.s.t(function () {
					if (R(5) < 3) {
						w.ball(20)
					}
				}))
			})
		}//B+
		COOLBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
							.c('x', 'X', 1)
							.bf('sun', [0, .9, 1, 1, -40, 2])
							.cir(50)
				})
			})
		}//B
		CLICKME = BMBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, 'CLICK me')
			})
		}
		HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
			W(400, 400)._(function () {
				
				//cjs.rulers()
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 10)
					b.$h('x', 'x', 1189).c('x', 'x', 200)
							.bf('sun', [0, .6, 10, 10, -40, 200])
							.cir(10)
					// <- b.C({c:'x', al:.4} )
				})
				$.d('b', 100, 100, 100, 100).drag()
			})
		}
		STATUSBALL = ILLUSION = GRADTWEEN = function () {
			W({grav: 0})
			b = w.S(500, 300, 'r', 60)
					.bS(w.s.h(500, 300))
			num = 0
			dif = .1
			shape = b.sp()//b.sprite
			shape.rf(['r', 'y'], [0, num],
					0, 0, 0, 0, 0, 60)
					.dc(0, 0, 60)
			_.ev(.1, function () {
				num += dif
				if (num >= 1) {
					num = .9;
					dif = -.1
				}
				if (num <= 0) {
					dif = .1
				}
				shape.rf(['r', 'y'], [0, num],
						0, 0, 0, 0, 0, 60)
						.dc(0, 0, 60)
			})
		}//D- needs PLAY
		BADBALL = function () {
			W({g: 0})
			w.badGuy(500, 300)
			b = w.D(500, 300, 'r', 60)
			b.bS(
					w.s.h(500, 300)
			)
			b.draw = function (frame) {
				var b = this
				b.sp().rf(
						['r', 'y'], [frame[0], frame[1]],
						0, 0, 0, 0, 0, 60).dc(60)
			}
			frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
			curr = 0
			_.ev(1, function () {
				b.draw(frames [curr])
				curr++
				if (curr == 9) {
					curr = 0
				}
			})
		}//D+ needs PLAY
		CHICKBALLS = function () {
			W(1200, 1200)._(function () {
				_.t(14, function () {
					w.D(R(1100, 50), R(1100, 50))
							.cir({bf: 'chicks', r: 120})
				})
			})
		}
		HAIRBALLS = function () {
			W(400, 400)._(function () {
				
				//cjs.rulers()
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 10)
					b.$h('x', 'x', 1189).c('x', 'x', 200)
							.bf('sun', [0, .6, 10, 10, -40, 200])
							.cir(10)
					// <- b.C({c:'x', al:.4} )
				})
				$.d('b', 100, 100, 100, 100).drag()
			})
		}
		COOLBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 50)
					b.$h('x', 'X', 1)
							.c('x', 'X', 1)
							.bf('sun', [0, .9, 1, 1, -40, 2])
							.cir(50)
				})
			})
		}
		CANVASBMFILLBALLS = function () {
			W(400, 400).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				w.$$(function () {
					_.t(8, function () {
						var b = w.D(R(100, 50), R(100, 50), 'b', 30)
						b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
					})
				})
				w.i.T(200, 100, '$$ me')
			})
		}
		CANTFBALLS2 = function () {
			W([400, 400], {w: 'U'}).C('w')._(function () {
				//cjs.rulers()
				w.p(0, 0, 10).stat()
				_.t(8, function () {
					w.D(R(100, 50), R(100, 50), 'b', 30)
				})
				$.ev(3, function () {
					var b = w.D(200, 200, 'b', 80)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(
							w.s.cv0,
							cjs.m2d(
									.6, .1, .1, .6, -40, 180
							)
					).cir(80)
				})
			})
		}
		TEXTBALLS = function () {
			W([400, 400], {}).C('w')._(function () {
				b = w.D(200, 200, 'b', 80)
				b.gx = b.gx || w.g.ct()
				b.gx.qB('chicks').rC().sXY(.1).Y(30)
				nice = w.i.T(0, 140, 'nice', 100, 'o')
				b.bS(nice)
			})
		}
	}
	
	function grad() {
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.map(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.m(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lG = h.linGrad = function () {
			var args = _.toArray(arguments)
			args[0] = _.map(args[0], function (col) {
				return oO('c', col)
			})
			this.graphics.beginLinearGradientFill.apply(
					this.graphics, args)
			return this
		}
		h.lf = function () {
			var h = this, gx = h.graphics, g = G(arguments), o
			o = cjs.lg(g)
			gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.ls = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.lg.apply(h, g)
			gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
			return h
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
			var args = _.toArray(arguments), circs, len
			cols = _.map(cols,
					function (col) {
						return oO('c', col)
					})
			circs = _.rest([1, 2, 3, 4, 5], 2)
			len = circs.len  //use switch!
			x1 = 0;
			y1 = 0;
			r1 = 0;
			x2 = 0;
			y2 = 0;
			r2 = 50
			if (len == 1) {
				r2 = circs[0]
			}
			else if (len == 2) {
				r1 = circs[0];
				r2 = circs[1]
			}
			else if (len == 3) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r2 = circs[2]
			}
			else if (len == 4) {
				x1 = x2 = circs[0]
				y1 = y1 = circs[1]
				r1 = circs[2]
				r2 = circs[3]
			}
			else if (len == 5) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r2 = circs[4]
			}
			else if (len == 6) {
				x1 = circs[0];
				y1 = circs[1];
				x2 = circs[2];
				y2 = circs[3]
				r1 = circs[4];
				r2 = circs[5]
			}
			this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
			return this
		}
		h.rg = function (o) {
			var h = this, g = G(arguments),
					gx = h.graphics,
					o
			if (A(g[0]) && A(g[1])) {
				gx.rf(
						[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
				)
				return h
			}
			o = O(g[0]) ? g[0] :
					S(g[1]) ? _.x({c1: g[0], c2: g[1]},
							N(g[7]) ?
							{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
									: N(g[5]) ?
							{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
									: N(g[4]) ?
							{x2: g[2], r1: g[3], r2: g[4]}
									: N(g[3]) ?
							{r1: g[2], r2: g[3]}
									:
							{r2: g[2]})
							: S(g[0]) ?
					{c2: g[0]}
							: {}
			$df.grad(o)
			o.x2 = N(o.x2, o.x1)
			o.y2 = N(o.y2, o.y1)
			o.r1 = N(o.r1, 1);
			o.r2 = N(o.r2, 100)
			return o
		}
		h.rf = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rf(
					[o.c1, o.c2],
					[o.s1, o.s2],
					o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
		h.rs = function me() {
			var h = this, gx = h.graphics, g = G(arguments), o
			if (A(g[0])) {
				return me.apply(h, g[0])
			}
			o = h.rg.apply(h, g)
			gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
			return h
		}
//
		function gradApps() {
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			RADIALGRADRECT = function () {
				s = cjs.S()
				x1 = 100
				y1 = 150
				r1 = 20
				x2 = 100
				y2 = 150
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
							x1,
							y1,
							r1,
							x2,
							y2,
							r2
					)
							.dr(0, 0, 400, 400)
							.endFill()
					// x--
					r1++
					r2++
				}
				setInterval(change, 1000)
				change()
			}
			RADIALGRADCIRC = function () {
				s = cjs.S()
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
							x1,
							y1,
							r1,
							x2,
							y2,
							r2
					)
							.dc(0, 0, 100)
							.endFill()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
			}
			MICK = function () {
				St()
				ct.mick = function (x, y, lf) {
					var ct = this,
							h = ct.h(x, y).drag()
									.c({l: 20, C: 0, lf: lf || 1})
									.dc([50], [200, 0, 100], [100, 100, 100])
					ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
					return h
				}
				s.mick(500, 200)
				s.mick(700, 100, {c1: 'b', c2: 'X'})
				s.mick(700, 300, {c2: 'b'})
				s.mick(100, 100, {y2: 10})
				s.mick(100, 200, {y2: 200})
				s.mick(100, 300, {x2: 100})
			}//better with WAP
			RADIALGRADCIRC = function () {
				s = $St()
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.rf('b', "o", x1,
							y1,
							r1,
							x2,
							y2,
							r2)
							.dc(0, 0, 100)
							.ef()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
			}
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
				// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
				// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			CIRCRG8 = GRADS = function () {
				s = St()
				nip = function () {
					x1 = 0
					y1 = 0
					r1 = 10
					x2 = 0
					y2 = 0
					r2 = 100
					var h = $h(10, 10).a2(s).drag().al(.8)
					h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
							x1, y1, r1, x2, y2, r2)
							.dc(0, 0, 100)
							.endFill()
					return h
				}
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = $h(10, 10).a2(s).drag()
				change = function () {
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				h2 = $h(500, 100).a2(s);
				h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
				////////
				s.h(600, 300).graphics.rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(600, 100).graphics.rf(
						['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(800, 300).rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(400, 300).rf(
						['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h().cir(0, 0, 10)
			}//C
			REC8 = GRADS1 = function () {
				s = $St()
				s.h(600, 300).graphics.rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(600, 100).graphics.rf(
						['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(800, 300).rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(400, 300).rf(
						['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h().cir(0, 0, 10)
				///////////////
				x1 = 100
				y1 = 150
				r1 = 20
				x2 = 100
				y2 = 150
				r2 = 100
				h = $h(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
					r1++
					r2++
				}
				setInterval(change, 1000)
				change()
				h = s.h(480, 270).drag()
				h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
						.dr2({w: 300, h: 100, x: 0, y: -100},
						{w: 100, h: 300})
				s.h(180, 270).drag()
						.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
						{w: 300, h: 100, x: 0, y: -100},
						{w: 100, h: 300})
			}//B+
			OVALS8 = GRADS2 = SETTRANSFORM = function () {
				s = $St(800).bm('me', function (me) {
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
				//////
				h = s.h(40, 10, 'b', 16).drag()
				h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
				h.c({
					C: 'b',
					lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
				}).de(400, 100)
				h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
						.de(100, 200, 500, 300)
				h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
			}//B+
		}
		
		function gradApps() {
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			RADIALGRADRECT = function () {
				s = cjs.S()
				x1 = 100
				y1 = 150
				r1 = 20
				x2 = 100
				y2 = 150
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.beginRadialGradientFill(["red", 'blue', "yellow"], [0, .5, 1],
							x1,
							y1,
							r1,
							x2,
							y2,
							r2
					)
							.dr(0, 0, 400, 400)
							.endFill()
					// x--
					r1++
					r2++
				}
				setInterval(change, 1000)
				change()
			}
			RADIALGRADCIRC = function () {
				s = cjs.S()
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
							x1,
							y1,
							r1,
							x2,
							y2,
							r2
					)
							.dc(0, 0, 100)
							.endFill()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
			}
			MICK = function () {
				St()
				ct.mick = function (x, y, lf) {
					var ct = this,
							h = ct.h(x, y).drag()
									.c({l: 20, C: 0, lf: lf || 1})
									.dc([50], [200, 0, 100], [100, 100, 100])
					ct.h(x, y).drag().c({l: 20, C: 0, ls: lf || 1}).dc([50], [200, 0, 100], [100, 100, 100])
					return h
				}
				s.mick(500, 200)
				s.mick(700, 100, {c1: 'b', c2: 'X'})
				s.mick(700, 300, {c2: 'b'})
				s.mick(100, 100, {y2: 10})
				s.mick(100, 200, {y2: 200})
				s.mick(100, 300, {x2: 100})
			}//better with WAP
			RADIALGRADCIRC = function () {
				s = $St()
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = cjs.shape(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.rf('b', "o", x1,
							y1,
							r1,
							x2,
							y2,
							r2)
							.dc(0, 0, 100)
							.ef()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				//h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
			}
			RADIALGRAD1 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				stage.addChild(shape)
				shape.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.update()
			}
			RADIALGRAD = function () {
				z()
				stage = SuperStage(500, 500).A()
				shape = stage.Shape().xy(40)
				shape.g
					// .rf([ oC('r'), oC('b') ], [0,1], 100, 100, 0, 100, 100, 50  )
						.rf([oC('r'), oC('b'), oC('o')], [.1, .4, .9], 50, 50, 0, 50, 50, 50)
						.drawRect(0, 0, 100, 100)
						.drawCircle(180, 180, 100, 100)
			}
			RADIALGRADFILL = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				// 2 colors
				shape = new createjs.Shape()
				shape.x = 20
				shape.y = 20
				shape.graphics.beginRadialGradientFill(
						[oC('b'), oC('r')],
						[.1, 1], 50, 50, 0, 50, 50, 50
				)
				shape.graphics.drawRect(0, 0, 100, 100)
				shape.graphics.endFill()
				stage.addChild(shape)
				// 3 colors
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 140;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r'), oC('y')], [.1, .5, 1], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				stage.addChild(shape);
				// alpha
				shape = new createjs.Shape();
				shape.x = 20;
				shape.y = 260;
				shape.graphics.beginRadialGradientFill([oC('b'), oC('r')], [1, 0], 50, 50, 0, 50, 50, 50);
				shape.graphics.drawRect(0, 0, 100, 100);
				shape.graphics.endFill();
				stage.addChild(shape);
			}
			RADIALGRADFILL2 = function () {
				z()
				$('<canvas width=500 height=400 id="canvas">').appendTo($('body'))
				stage = new createjs.Stage("canvas", 420, 500, 30)
				stage.addChild(
						h = new createjs.Shape()
				)
				h.graphics.beginRadialGradientFill(
						["#F00", "#00F"], [0, 1], 100, 100, 0, 100, 100, 50
				).drawCircle(100, 100, 50)
				stage.update()
			}
			CIRCRG8 = GRADS = function () {
				s = St()
				nip = function () {
					x1 = 0
					y1 = 0
					r1 = 10
					x2 = 0
					y2 = 0
					r2 = 100
					var h = $h(10, 10).a2(s).drag().al(.8)
					h.graphics.beginRadialGradientFill(['blue', "orange"], [0, 1],
							x1, y1, r1, x2, y2, r2)
							.dc(0, 0, 100)
							.endFill()
					return h
				}
				x1 = 0
				y1 = 0
				r1 = 10
				x2 = 0
				y2 = 0
				r2 = 100
				h = $h(10, 10).a2(s).drag()
				change = function () {
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.rf(['blue', "orange"], [0, 1], x1, y1, r1, x2, y2, r2).dc(0, 0, 100).endFill()
					// x--
					// r1++
					// r2++
				}
				setInterval(change, 1000)
				change()
				n = nip()
				h2 = $h(500, 100).a2(s);
				h2.graphics.beginRadialGradientFill(["red", "yellow"], [0, 1], 100, 100, 0, 100, 100, 50).dc(50, 50, 100)
				////////
				s.h(600, 300).graphics.rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(600, 100).graphics.rf(
						['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(800, 300).rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(400, 300).rf(
						['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h().cir(0, 0, 10)
			}//C
			REC8 = GRADS1 = function () {
				s = $St()
				s.h(600, 300).graphics.rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(600, 100).graphics.rf(
						['CornflowerBlue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(800, 300).rf(
						['blue', "orange"], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h(400, 300).rf(
						['b', 'o'], [0, 1], 0, 0, 10, 0, 0, 100
				).dc(0, 0, 100).ef()
				s.h().cir(0, 0, 10)
				///////////////
				x1 = 100
				y1 = 150
				r1 = 20
				x2 = 100
				y2 = 150
				r2 = 100
				h = $h(10, 10).a2(s).drag()
				change = function () {
					
					//  h.remove()
					// h=cjs.shape(10, 10).a2(s).drag()
					h.graphics.rf(["red", 'blue', "yellow"], [0, .5, 1], x1, y1, r1, x2, y2, r2).dr(0, 0, 400, 400).ef()
					r1++
					r2++
				}
				setInterval(change, 1000)
				change()
				h = s.h(480, 270).drag()
				h.C('z', 2).lf({x: -100, c1: 'r', c2: 'y'})
						.dr2({w: 300, h: 100, x: 0, y: -100},
						{w: 100, h: 300})
				s.h(180, 270).drag()
						.lf({c1: 'r', c2: 'y', x1: -100}).dr2(
						{w: 300, h: 100, x: 0, y: -100},
						{w: 100, h: 300})
			}//B+
			OVALS8 = GRADS2 = SETTRANSFORM = function () {
				s = $St(800).bm('me', function (me) {
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
				//////
				h = s.h(40, 10, 'b', 16).drag()
				h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
				h.c({
					C: 'b',
					lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}
				}).de(400, 100)
				h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400})
						.de(100, 200, 500, 300)
				h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
			}//B+
		}
	}
	
	function filts() {
// filters are only displayed when the display object is cached
// later, you can call updateCache() to update changes to your filters
		cjs.Filter.prototype.b = function () {
			var bd = this.getBounds()
			bd.w = bd.width
			bd.h = bd.height
			return bd
		}
		$cM = function () {
			return new cjs.ColorMatrix()
		}
		$cF = function (a, b, c, d, e, f, g, h) {
			return new cjs.ColorFilter(a, b, c, d, e, f, g, h)
		}
		$cMF = function (cM) {
			return new cjs.ColorMatrixFilter(cM)
		}
		$bF = function (a, b, c, d, e) {
			return new cjs.BlurFilter(a, b, c, d, e)
		}
		$aF = function (a, b, c, d, e) {
			return new cjs.AlphaMaskFilter(a, b, c, d, e)
		}
		$aMF = function (a, b, c, d, e) {
			return new cjs.AlphaMapFilter(a, b, c, d, e)
		}
		cjs.testCanvas = function () {
			return $.d().A($.c(960, 400).id("testCanvas"))
		}
		$BF = $Bf = $FB = $FlB = $Bfl = $bF = function () {
			var g = G(arguments), fl, o
			o = {x: g[0], y: g[1], q: g[2]}
			o.y = N(o.y) ? o.y : o.x
			o.q = o.q || 1
			fl = new cjs.BlurFilter(o.x, o.y, o.q)
			return fl
		}
		$AF = $Af = $aF = function (a, b, c, d, e) {
			var fl
			if (O(a) && a.cacheCanvas) {
				a = a.cacheCanvas
			}
			fl = new cjs.AlphaMaskFilter(a, b, c, d, e)
			return fl
			forMaskFilter = function trx(n) {
				var g = G(arguments), a
				a = []
				//for making mask filter
				if (g.n) {
					return 'rgba(0,0,0,' + g[0] || 0 + ')'
				}
				_.e(g, function (n) {
					a.push(trx(n, '-'))
				})
				return a
			}
		}
		$CMF = $CmF = $cMF = function (a, b, c, d) {
			if (!O(a)) {
				a = $CM(a, b, c, d)
			}
			return new cjs.ColorMatrixFilter(a)
		}
		$CM = $Cm = $cM = function (a, b, c, d, e) {
			var m
			m = new cjs.ColorMatrix(a, b, c, d, e)
			m.b = m.adjustBrightness
			m.c = m.adjustColor
			m.C = m.adjustContrast
			m.h = m.adjustHue
			m.s = m.adjustSaturation
			m.cl = m.clone
			m.cc = m.concat
			m.m = m.copyMatrix
			m.r = m.reset
			m.A = m.toArray
			m.S = m.toString
			return m
		}
		///////////
		function filterApps() {
			FILS = function () {
				Q(function () {
					s = $St().t()
					i = Q.i('me')
					b = s.qB('me', .8, '+')
					/////////////////////////
					//b._(150,200,'+').fl($cF(.5, 0, 0, 1 ), i)
					cM = $cM()
					cM.adjustBrightness(-400)
					//cM.adjustHue(-180)
					cM.c(80)
					//cM.c(-100)
					b._(400, 200, '+').fl($cMF(cM), i)  //zW
					///////////////////////
					// b._(20,200,'+').fl($bF(64,0,1),i)
//<- s._(b, 189, 20).fl(zWF).ca(0, 0, i.width, i.height)// b._(189, 20).a2(s).fl(zWF).ca(0, 0, i.width, i.height)
					// s.h(10).mt(200, 0).lt(200, 400).mt(0, 200).lt(400, 200).Ds()
				})
			}
			BLF1 = function () {
				/*This example demonstrates revealing an image using another image as the
				 mask. The mask is created by drawing a
				 shape, and then caching the shape to make an image with an alpha
				 channel. It is then applied to the image as
				 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
				 */
				st = $St()
				var isDrawing
				$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
					i = img[0]
					h = $H().a2(st)
					bm = new cjs.Bitmap(i)
					bl = new cjs.Bitmap(i)
					bl.filters = [
						new cjs.BlurFilter(24, 24, 2),
						new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
					]
					bl.cache(0, 0, 960, 400)
					//t.text = "Click and Drag to Reveal the Image.";
					st.A(bl, t, bm)
					updateCacheImage(false)
					st.A(cu = $H('r').dc(25))
					cu.cursor = "pointer"
					st.enableMouseOver()
					st.on("stagemousedown", function (e) {
						oldPt = new cjs.Point(st.mouseX, st.mouseY);
						oldMidPt = oldPt;
						isDrawing = true;
					})
					st.on("stagemouseup", function (e) {
						updateCacheImage(true);
						isDrawing = false
					})
					st.on("stagemousemove", function (e) {
						var midPoint
						cu.x = st.mouseX;
						cu.y = st.mouseY;
						if (!isDrawing) {
							st.u();
							return;
						}
						midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
						h.graphics.ss(40, "round", "round")  //$l(midPoint.x+', '+midPoint.y+', '+oldPt.x + ',' + oldPt.y+', '+ oldMidPt.x + ', ' + oldMidPt.y)
						h.graphics.s("rgba(0,0,0,0.2)").mt(midPoint.x, midPoint.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true)
					})
				})
				function updateCacheImage(upd) {
					if (upd) {
						h.updateCache()
					}
					else {
						h.ca(0, 0, i.width, i.height)
					}
					mskF = new cjs.AlphaMaskFilter(st.cacheCanvas)
					bm.filters = [mskF]
					if (upd) {
						bm.ca(i)
					}
					else {
						bm.ca(i)
					}
					st.u()
				}
			}
			BLF = function () {
				$.i('me', function (img) {
					iDr = 0  //examples.hideDistractor();//cjs.Touch.enable(st)
					s = $St();
					s.enableMouseOver()
					h = $H().a2(s)
					i = img[0]
					bm = $Bm(i)
					bl = $Bm(i)
					bl.Fl($bF(24, 24, 2), i)
					bl.Fl($cMF($cM(60)), i)
					bl.ca(0, 0, 960, 400)
					s.A(bl, bm)
					h.ca(i)
					bm.fl($aF(s.cc()), i);
					s.u()
					// s.A(cu = $H('r').dc(25));  cu.cursor = "pointer"
					s.MU(function (e) {
						iDr = 0
						h.ca(i)
						bm.fl($aF(s), i)
						s.u()
					})
					s.MD(function (e) {
						iDr = oM = o = s.m()
					})
					s.MM(function (e) {
						var mP             //   cu.x = s.mX(); cu.y = s.mY()
						if (!iDr) {
							s.u();
							return
						}
						mP = $Pt(o.x + s.mX() >> 1, o.y + s.mY() >> 1)
						h.ss(40, "round", "round")
								.C("rgba(0,0,0,0.2)")
								.mt(mP.x, mP.y).qt(o.x, o.y, oM.x, oM.y)
						o = s.m()
						oM = V(mP)
						h.ca(i)
						bm.fl($aF(s.cc()), i);
						s.u()
					})
				})
			}
			HGX = function () {
				W()
				h = w.i.h()
				h.graphics.ss(40, "round", "round")
				h.C("rgba(0,0,0,0.2)").mt(100, 100)
				h.graphics.curveTo(200, 500, 600, 300)
			}
			BLF2 = function () {
				var isDrawing
				st = $St()
				t = $T("Loading...")
				t.set({x: st.W() / 2, y: st.H() - 40})
				t.textAlign = "center"
				$.i('me', function (img) {//examples.hideDistractor();//cjs.Touch.enable(st)
					i = img[0]
					h = $H().a2(st)
					bm = new cjs.Bitmap(i)
					bl = new cjs.Bitmap(i)
					bl.filters = [
						new cjs.BlurFilter(24, 24, 2),
						new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))
					]
					bl.cache(0, 0, 960, 400)
					t.text = "Click and Drag to Reveal the Image.";
					st.A(bl, t, bm)
					st.A(cu = $H('r').dc(25))
					cu.cursor = "pointer"
					st.enableMouseOver()
					st.on("stagemousedown", function (e) {
						o = new cjs.Point(st.mouseX, st.mouseY)
						oM = o;
						isDrawing = true
					})
					st.on("stagemouseup", function (e) {
						isDrawing = false
					})
					st.on("stagemousemove", function (e) {
						var m
						cu.x = st.mouseX;
						cu.y = st.mouseY;
						if (!isDrawing) {
							st.u();
							return
						}
						m = new cjs.Point(o.x + st.mouseX >> 1, o.y + st.mouseY >> 1)
						$l('draw')
						h.graphics.ss(40, "round", "round");
						h.graphics.s("rgba(0,0,0,0.2)")
						// h.graphics.mt(100, 100);h.graphics.curveTo(300, 300,700, 200)
						h.graphics.mt(m.x, m.y)
						h.graphics.curveTo(o.x, o.y, oM.x, oM.y)
						o.x = st.mouseX;
						o.y = st.mouseY;
						oM.x = m.x;
						oM.y = m.y
					})
				})
			}
			GREY = function () {
				Q(function () {
					Q.b('me').a2($St().t())
							.fl($cMF($cM().s(-100)))
							.ca(0, 0, 1000, 1000)
				})
			}
			ALPH = function () {
				Q(function () {
					st = $St().t()
					me = Q.b('me').a2(st).dg()
					h = Q.b('guy').a2(st)//[0]//.a2(st).dg()
					h = $H()
					h.graphics.lf(["#000000", "rgba(0, 0, 0, 0)"],
							[0, 1], 0, 0, 100, 100)
					h.bf('guy')
					h.dr(0, 0, 100, 100);
					h.cache(0, 0, 100, 100)
					me.filters = [new cjs.AlphaMaskFilter(h.cacheCanvas)]
					me.cache(0, 0, 1000, 1000)
				})
			}
			BLR = function () {
				Q(function () {
					st = $St().t()
					h = st.h(100, 100, 'r').cir(50)
					$.in(1, function () {
						h.cF(0, 0, 0, 1, 0, 0, 255, 0)
						h.ca(-50, -50, 100, 150)
					})
					$.in(2, function () {
						f = h.bF(59, 59, 1)
						bd = f.b()
						h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.w, 100 + bd.h)
					})
				})
			}
			/*This example demonstrates revealing an image using another image as the
			 mask. The mask is created by drawing a
			 shape, and then caching the shape to make an image with an alpha
			 channel. It is then applied to the image as
			 an mask using the <code>AlphaMaskFilter</code> filter. Another copy of
			 */
			REVEAL = function () {
				Q(function () {
					stage = $St().t()
					var isDrawing,
							drawingCanvas, oldPt, oldMidPt,
							displayCanvas, image, bitmap, maskFilter,
							cursor, text, blur;
//    examples.showDistractor();
					image = $.i('me', function (i) {
						image = i[0]
						//  examples.hideDistractor();
						cjs.Touch.enable(stage);
						stage.enableMouseOver();
						stage.addEventListener("stagemousedown", handleMouseDown);
						stage.addEventListener("stagemouseup", handleMouseUp);
						stage.addEventListener("stagemousemove", handleMouseMove);
						drawingCanvas = new createjs.Shape();
						bitmap = new cjs.Bitmap(image);
						blur = new cjs.Bitmap(image);
						blur.filters = [new createjs.BlurFilter(24, 24, 2),
							new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))]
						blur.cache(0, 0, 960, 400);
						text.text = "Click and Drag to Reveal the Image.";
						stage.addChild(blur, text, bitmap);
						updateCacheImage(false)
						cursor = new createjs.Shape(new createjs.Graphics()
								.beginFill("#FFFFFF").drawCircle(0, 0, 25))
						cursor.cursor = "pointer"
						stage.addChild(cursor)
					})
					stage = new cjs.Stage("testCanvas")
					text = new cjs.Text("Loading...", "20px Arial", "#FFF")
					text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40})
					text.textAlign = "center"
					function handleMouseDown(event) {
						oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
						oldMidPt = oldPt;
						isDrawing = true;
					}
					
					function handleMouseMove(event) {
						cursor.x = stage.mouseX;
						cursor.y = stage.mouseY;
						if (!isDrawing) {
							stage.update();
							return;
						}
						var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
						drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
								.beginStroke("rgba(0,0,0,0.2)")
								.moveTo(midPoint.x, midPoint.y)
								.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
						oldPt.x = stage.mouseX;
						oldPt.y = stage.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true);
					}
					
					function handleMouseUp(event) {
						updateCacheImage(true);
						isDrawing = false;
					}
					
					function updateCacheImage(update) {
						if (update) {
							drawingCanvas.updateCache();
						} else {
							drawingCanvas.cache(0, 0, image.width, image.height);
						}
						maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
						bitmap.filters = [maskFilter]
						if (update) {
							bitmap.updateCache(0, 0, image.width, image.height)
						}
						else {
							bitmap.cache(0, 0, image.width, image.height)
						}
						stage.update()
					}
				})
			}
			apps = function () {
				BLUR = function () {
					s = $St(500).dg()
					s.mug(function (b) {
						var ag = 0, rg = 100, sp = 0.04
						z()
						s.C('x')
						b.XY(100)
						b.cc()
						T.on('tick', function (e) {
							v = M.sin(ag += sp) * rg
							b.cc('+').fl([blF(v, v, 2)])
							s.u(e)
						})
					})
				}
				MASK = function () {
					wMb(function (b) {
						z()
						st = $St(600).A(b.TR())
						b.fl(
								$aF(
										$Gx().lf(
												trx(1, 0), [0, 1], 0, 0, 200, 200
										).dr0(400).H().cc(400).cc('*')
								)
						)
						b.cc(400)
					})
				}
				COLOR = clr = function (r) {
					var ag = 0, rg = 100, sp = 0.04
					wMb(function (b) {
						z();
						s = St(500).dg().a().c('X').a(b.XY(100))
						b.cc()
						b.fl(
								[r == 'g' ? $cMF(.3, 1, .3, 1, 0, 0, 0, 0)
										: r == 'b' ? $cMF(.3, .3, 1, 1, 0, 0, 0, 0)
										: r == 'r' ? $cMF(1, .1, 1, 1, 0, 0, 0, 0)
										: r == 'rg' ? $cMF(1, 1, .1, 1, 1, 1, 20, 0)
										: $cMF(1, .1, 1, 1, 0, 0, 0, 0)]
						)
						b.cc('+')
					})
				}
				COLORMATRIX = function () {
					var g = G(arguments);
					g[0] = g[0] || 'a'
					wMb(function (b) {
								b.XY(100).cc();
								_.e(g, function (mf) {
									b.clMF(mf, '+')
								})
							},
							St(500).dg().A().C('X'))
				}
				BLURFILT = function () {
					z()
					st = $St('z', 800)
					h = $H().XY(100).a2(st).f('r').dc(50)
					fl = h.fl($bF(50, 50, 10))
					bd = fl.getBounds()
					h.ca(-50 + bd.x, -50 + bd.y, 100 + bd.width, 100 + bd.height)
					/*
					 h.startMoving()
					 h.vx = 1
					 h.vy = 1
					 */
				}
				BLURFILT2 = function () {
					z()
					stage = cjs.stage('black', 800).tick().A()
					stage.bm('me',
							function (bm) {
								var blurFilter = new cjs.BlurFilter(5, 10)
								bm.filters = [blurFilter]
								var bounds = blurFilter.getBounds()
								bm.cache(-50 + bounds.x, -50 + bounds.y, 400 + bounds.width, 400 + bounds.height)
							}
					)
				}
				BLURFILT3 = function () {
					z()
					$l('welcome to BLUFILTER3')
					$l('here we will attempt an animated blur filter')
					st = stage = $St('z', 800)
					var blurAmount = 0, blurMultiple = 40, speed = 0.06
					st.bm('me',
							function (bm) {
								bm.XY(100, 300).dg()
								bF = $bF(5, 10)
								bm.filters = [bF]
								bd = bounds = bF.getBounds()
								bm.cache(-50 + bd.x, -50 + bd.y, 400 + bd.width, 400 + bd.height)
								cjs.Ticker.on('tick', function () {
									blur = M.sin(blurAmount += speed) * blurMultiple;
									bm.filters = [$bF(blur, blur, 2)]
									bm.ca()
								})
							})
				}
				ALPHAMASKREVEALWORKS = function () {
					z();
					cjs.testCanvas()
					var isDrawing
					cjs.sharedCode()
					//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
					examples.showDistractor()
					i = image = new Image();
					i.onload = handleComplete
					i.src = "/chicks.png"
					st = stage = new cjs.Stage("testCanvas")
					t = text = new cjs.Text("Loading...", "20px Arial", "#FFF")
					t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
					t.textAlign = "center"
					function handleComplete() {
						examples.hideDistractor()
						cjs.Touch.enable(stage);
						stage.enableMouseOver();
						stage.addEventListener("stagemousedown", handleMouseDown);
						stage.addEventListener("stagemouseup", handleMouseUp);
						stage.addEventListener("stagemousemove", handleMouseMove);
						drawingCanvas = new cjs.Shape()
						bitmap = new cjs.Bitmap(image)
						blur = new cjs.Bitmap(image)
						blur.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
						blur.cache(0, 0, 960, 400)
						text.text = "Click and Drag to Reveal the Image.";
						stage.addChild(blur, text, bitmap);
						updateCacheImage(false);
						cursor = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
						cursor.cursor = "pointer";
						stage.addChild(cursor);
					}
					
					function handleMouseDown(event) {
						oldPt = new cjs.Point(stage.mouseX, stage.mouseY);
						oldMidPt = oldPt;
						isDrawing = true;
					}
					
					function handleMouseMove(event) {
						cursor.x = stage.mouseX;
						cursor.y = stage.mouseY;
						if (!isDrawing) {
							stage.update();
							return;
						}
						var midPoint = new cjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
						drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
								.beginStroke("rgba(0,0,0,0.2)")
								.moveTo(midPoint.x, midPoint.y)
								.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
						oldPt.x = stage.mouseX;
						oldPt.y = stage.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true);
					}
					
					function handleMouseUp(event) {
						updateCacheImage(true);
						isDrawing = false;
					}
					
					function updateCacheImage(update) {
						if (update) {
							drawingCanvas.ca()
						} else {
							drawingCanvas.ca(0, 0, image.width, image.height);
						}
						maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
						bitmap.filters = [maskFilter];
						if (update) {
							bitmap.updateCache(0, 0, image.width, image.height);
						} else {
							bitmap.cache(0, 0, image.width, image.height);
						}
						stage.update();
					}
				}
				ALPHAMASKREVEAL1 = function () {
					z();
					var isDrawing = false
					cjs.testCanvas()
					cjs.sharedCode()
					i = $.i("/chicks.png", handleComplete)[0]
					st = new cjs.Stage("testCanvas")
					t = new cjs.Text("Loading...", "20px Arial", "#FFF")
					t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
					t.textAlign = "center"
					function handleComplete() {
						cjs.Touch.enable(st);
						st.mO()
						st.MD(handleMouseDown)
						st.MU(handleMouseUp)
						st.MM(handleMouseMove)
						drawingCanvas = new cjs.Shape()
						bm = $Bm(i)
						bl = $Bm(i)
						bl.filters = [new cjs.BlurFilter(24, 24, 2), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(60))];
						bl.ca(0, 0, 960, 400)
						t.text = "Click and Drag to Reveal the Image.";
						st.A(bl, t, bm)
						updateCacheImage(false)
						cu = new cjs.Shape(new cjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
						cu.cursor = "pointer";
						st.A(cu)
					}
					
					function handleMouseDown() {
						oldPt = new cjs.Point(st.mouseX, st.mouseY);
						oldMidPt = oldPt;
						isDrawing = true;
					}
					
					function handleMouseMove() {
						var midPoint
						cu.x = st.mouseX;
						cu.y = st.mouseY;
						if (!isDrawing) {
							st.u();
							return
						}
						midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
						gx = drawingCanvas.graphics
						gx.ss(40, "round", "round")
						gx.s("rgba(0,0,0,0.2)")
						gx.mt(midPoint.x, midPoint.y)
						gx.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true);
					}
					
					function handleMouseUp(event) {
						updateCacheImage(true);
						isDrawing = false;
					}
					
					function updateCacheImage(upd) {
						if (upd) {
							drawingCanvas.ca()
						}
						else {
							drawingCanvas.ca(0, 0, i.width, i.height)
						}
						maskFilter = new cjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
						bm.filters = [maskFilter]
						if (upd) {
							bm.ca(0, 0, i.width, i.height);
						}
						else {
							bm.ca(0, 0, i.width, i.height)
						}
						st.u()
					}
				}
				ALPHAMASKREVEAL0 = function () {
					z();
					var isDrawing
					cjs.testCanvas()
					cjs.sharedCode()
					i = $.i("/chicks.png", handleComplete)[0]
					st = new cjs.Stage("testCanvas")
					t = new cjs.Text("Loading...", "20px Arial", "#FFF")
					t.set({x: st.canvas.width / 2, y: st.canvas.height - 40})
					t.textAlign = "center"
					t.text = "Click and Drag to Reveal the Image.";
					function handleComplete() {
						cjs.Touch.enable(st);
						st.mO()
						st.MD(function () {
							oldPt = new cjs.Point(st.mouseX, st.mouseY);
							oldMidPt = oldPt;
							isDrawing = true;
						})
						st.MU(function () {
							updateCacheImage(true);
							isDrawing = false
						})
						st.MM(function () {
							var midPoint
							cu.x = st.mouseX;
							cu.y = st.mouseY;
							if (!isDrawing) {
								st.u();
								return
							}
							midPoint = new cjs.Point(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
							h.graphics
									.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
									.mt(midPoint.x, midPoint.y).qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							updateCacheImage(true);
						})
						h = $H()
						st.A(
								bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
								t,
								bm = $Bm(i)
						)
						updateCacheImage(false)
						cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer")
						st.A(cu)
					}
					
					function updateCacheImage(upd) {
						if (upd) {
							h.ca()
						} else {
							h.ca(i)
						}
						bm.filters = [$aF(h.cacheCanvas)]
						if (upd) {
							bm.ca(0, 0, i.width, i.height);
						}
						else {
							bm.ca(i)
						}
						st.u()
					}
				}
				ALPHAMASKREVEAL00 = function () {
					z();
					var isDrawing
					i = $.i('chicks', function () {
						cjs.sharedCode()
						st = $St(800)  //cjs.Touch.enable(st);
						st.mO()
						st.MD(function () {
							_pt = oldPt = cjs.Pt(st.mouseX, st.mouseY);
							_mPt = oldMidPt = oldPt
						})
						st.MU(uCaI)
						st.MM(function () {
							cu.x = st.mouseX;
							cu.y = st.mouseY;
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1);
							h.graphics.ss(40, "round", "round").s("rgba(0,0,0,0.2)")
									.mt(midPoint.x, midPoint.y)
									.qt(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							uCaI()
						})
						h = $H()
						st.A(
								bl = $Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(0, 0, 960, 400),
								bm = $Bm(i)
						)
						uCaI()
						cu = $H($Gx().f("#FFFFFF").dc(0, 0, 25)).cu("pointer").a2(st)
					})
					i = i[0]
					function uCaI(upd) {
						h.ca(i)
						bm.fl($aF(h.cacheCanvas), '-').ca(i)
						st.u()
					}
				}
				ALPHAMASKREVEAL000 = function () {
					z()
					var _pt, _mPt
					i = $.i('chicks', function (img) {
						_i = img
						bl = $Bm(i)
						bl.fl($bF(24, 24, 2), $cMF($cM(60)))
						bl.ca(960, 400)
						st = $St(800).mO(1).A(bl, bm = $Bm(i))
						h = $H()
						uCaI()
						cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
						st.MD(function () {
							_pt = $Pt(st.mouseX, st.mouseY)
							_mPt = _pt
						})
						st.MU(uCaI)
						st.MM(function () {
							_pt = $Pt(st.mouseX, st.mouseY)
							cu.x = st.mouseX;
							cu.y = st.mouseY;
							mPt = $Pt(_pt.x + st.mouseX >> 1, _pt.y + st.mouseY >> 1);
							h.ss(50).s("rgba(0,0,0,0.2)").mt(mPt.x, mPt.y).qt(_pt, _mPt)
							_pt = V(st.mouseX, st.mouseY)
							_mPt.x = mPt.x;
							_mPt.y = mPt.y;
							uCaI()
						})
					})
					i = i[0]
					function uCaI(upd) {
						h.ca(i)
						bm.fl($aF(h), '-').ca(i)
					}
				}
				ALPHAMASKREVEAL = function () {
					z()
					var _pt, _mPt
					i = $.i('chicks', function (img) {
						_i = img
						bl = $Bm(i)
						bl.fl($bF(24, 24, 2), $cMF($cM(60)))
						bl.ca(960, 400)
						st = $St(800).mO(1).A(bl, bm = $Bm(i))
						h = $H().ss(50, 'round', 'round')
						uCaI()
						cu = $H().a2(st).f("#FFFFFF").dc(25).cu("pointer")
						st.MD(function () {
							_pt = st.m()
							_mPt = _pt
						})
						st.MU(uCaI)
						st.MM(function () {
							cu.XY(st.m())
							_pt = st.m()
							mPt = $Pt(
									(_pt.x + st.m().x) >> 1,
									(_pt.y + st.m().y) >> 1
							)
							h.s('rgba(0,0,0,0.2)').mt(mPt.x, mPt.y).qt(_pt, _mPt)
							uCaI()
							_mPt = V(mPt)
						})
					})
					i = i[0]
					function uCaI(upd) {
						h.ca(i)
						bm.fl($aF(h), '-').ca(i)
					}
				}
				ALPHAMASKREVEALNOCU1 = function () {
					$.i('chicks', function (i) {
						z()
						var _mPt
						st = $St(800).mO(1)
						i = i[0]
						h = $H().s('rgba(0,0,0,0.2)')
								.ss(50, 'round', 'round')
								.ca(i)
						bl = st.Bm(i).fl($bF(24, 24, 2), $cMF($cM(60))).ca(960, 400)
						bm = st.Bm(i).fl($aF(h), '-').ca(i)
						st.MD(function () {
							_pt = st.m();
							_mPt = _pt
						})
						st.MU(function () {
							h.ca(i);
							bm.fl($aF(h), '-').ca(i)
							_mPt = null
						})
						st.MM(function () {
							if (!_mPt) {
								return
							}
							_pt = st.m()
							mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
							bm.fl(h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i).aF(), '-').ca(i)
							_mPt = V(mPt)
						})
					})
				}
				ALPHAMASKREVEALNOCU = function () {
					$.i('chicks', function (i) {
						z()
						i = i[0]
						var _mPt
						st = $St(800).mO(1)
						h = $H().s('rgba(0,0,0,0.2)')
						h.ss(50, 'round', 'round').ca(i)
						bl = $Bm(i)
						bl.a2(st)
						bF = $bF(24, 24, 2)
						cMF = $cMF($cM(60))
						bl.fl(bF, cMF)
						bl.ca(960, 400)
						bm = st.Bm(i).fl(h.aF(), '-').ca(i)
						st.MD(function () {
							_mPt = _pt = st.m()
						})
						st.MU(function () {
							h.ca(i);
							bm.fl($aF(h), '-').ca(i);
							_mPt = null
						})
						st.MM(function () {
							if (!_mPt) {
								return
							}
							_pt = st.m()
							mPt = $Pt((_pt.x + st.mx()) >> 1, (_pt.y + st.my()) >> 1)
							h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
							h.ca(i)
							bm.fl(h.aF(), '-')
							bm.ca(i)
							_mPt = V(mPt)
						})
					})
				}
				SCRATCHOFF = function () {
					z();
					var _mPt
					st = $St(1000).mO(1)
					st.bm('chicks', function (bm) {
						h = $H().s(.3)
						h.ss(45, 'r', 'round').ca(bm.image)
						bF = $bF(24, 24, 2)
						cMF = $cMF($cM(60))
						bm.fl(h.aF(), '-').ca(i)
						st.MD(function () {
							_mPt = _pt = st.m()
						})
						st.MU(function () {
							h.ca(i);
							bm.fl($aF(h), '-').ca(i);
							_mPt = null
						})
						st.MM(function () {
							if (!_mPt) {
								return
							}
							_pt = st.m()
							mx = _pt.x
							my = _pt.y
							mPt = $Pt(
									M.av(_pt.x, mx),
									M.av(_pt.y, my)
							)
							h.mt(mPt.x, mPt.y).qt(_pt, _mPt).ca(i)
							bm.fl(h.aF(), '-').ca(i)
							_mPt = V(mPt)
						})
					})
				}
				BRUSH = BLOTCHY = function () {
					z();
					var _mPt
					st = $St(1000)
					st.mO(1)
					h = $h().a2(st)
					h.ss('o', 40, 's', 'bevel', 1)
					st.bm('chicks', function (bm) {
						// _i= i = i[0]
						bm.al(.2)
						st.A(bm)
						st.MD(function () {
							_mPt = _pt = st.m()
						})
						st.MU(function () {
							_mPt = null
						})
						st.MM(function () {
							if (!_mPt) {
								return
							}
							_pt = st.m()
							mx = _pt.x
							my = _pt.y
							mPt = $Pt(M.av(_pt.x, mx), M.av(_pt.y, my))
							h.mt(mPt.x, mPt.y).qt(_pt, _mPt)
							_mPt = V(mPt)
						})
					})
				}
				Q21 = function () {
					z();
					var pt
					st = $St(1000).mO(1)
					h = st.h().ss('g', 40, 's', 'b', 1)
					st.MD(function () {
						pt = st.m()
					})
					st.MU(function () {
						pt = 0
					})
					st.MM(function () {
						if (pt) {
							_pt = st.m();
							mx = _pt.x;
							my = _pt.y
							mPt = $Pt(M.av(_pt.x, _pt.x), M.av(_pt.y, _pt.y))
							h.mt(mPt.x, mPt.y).qt(_pt, pt)
							pt = V(mPt)
						}
					})
					$.i('chicks', function (i) {
						st.Bm(i[0]).al(.2)
					})
				}
				ALF1 = function () {
					z();
					cjs.testCanvas()
					var isDrawing
					cjs.sharedCode()
					//var stage,isDrawing,drawingCanvas,oldPt,oldMidPt,displayCanvas, image,bitmap, maskFilter, cursor, text,blur
					examples.showDistractor()
					i = image = new Image();
					i.onload = handleComplete
					i.src = "/chicks.png"
					st = stage = new cjs.Stage("testCanvas")
					function handleComplete() {
						examples.hideDistractor()
						cjs.Touch.enable(st);
						st.enableMouseOver();
						st.MD(handleMouseDown);
						st.MU(handleMouseUp);
						st.MM(handleMouseMove);
						h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
						t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
						t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
						t.textAlign = "center"
						st.A(bl = $Bm(i), t, b = $Bm(i)) //x=0, y=0, quality=1
						bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
						bl.ca()
						updateCacheImage(false)
						cu = $H().f("#FFFFFF").dc(25)
						cu.cursor = "pointer"
						st.A(cu)
					}
					
					function handleMouseDown() {
						isDrawing = true;
						oldPt = st.m();
						oldMidPt = oldPt;
					}
					
					function handleMouseMove() {
						var midPoint
						cu.x = st.mouseX;
						cu.y = st.mouseY;
						if (!isDrawing) {
							return st.u()
						}
						midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
						h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
						oldPt.x = st.mouseX;
						oldPt.y = st.mouseY;
						oldMidPt.x = midPoint.x;
						oldMidPt.y = midPoint.y;
						updateCacheImage(true);
					}
					
					function handleMouseUp() {
						updateCacheImage(true);
						isDrawing = false
					}
					
					function updateCacheImage(update) {//update the shape's cache
						if (update) {
							h.ca(i)
						} else {
							h.ca(i)
						}//make a new alphaFilter from the shape's cache
						//apply the filter to the bitmap
						b.filters = [$aF(h.cC())]// update the bitmap's cache, to apply its filter
						if (update) {
							b.ca()
						} else {
							b.ca()
						}//update the st
						st.u()
					}
				}
				ALF11 = function () {
					z();
					cjs.testCanvas()
					var isDrawing
					cjs.sharedCode()
					examples.showDistractor()
					st = new cjs.Stage("testCanvas")
					i = new Image()
					i.onload = function () {
						examples.hideDistractor()
						cjs.Touch.enable(st)
						st.enableMouseOver()
						st.MD(function () {
							isDrawing = true;
							oldPt = st.m();
							oldMidPt = oldPt;
						});
						st.MU(function () {
							updateCacheImage(true);
							isDrawing = false
						});
						st.MM(function () {
							var midPoint
							cu.x = st.mouseX;
							cu.y = st.mouseY;
							if (!isDrawing) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							updateCacheImage(true)
						})
						h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
						t = new cjs.Text('Drag to Reveal!!', "20px Arial", "#FFF");
						t.set({x: st.canvas.width / 2, y: st.canvas.height - 40});
						t.textAlign = "center"
						st.A(bl = $Bm(i), t, b = $Bm(i))
						bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
						bl.ca()
						updateCacheImage(false)
						cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
					}
					i.src = "/chicks.png"
					function updateCacheImage(update) {
						if (update) {
							h.ca(i)
						} else {
							h.ca(i)
						}
						b.filters = [$aF(h.cC())]
						if (update) {
							b.ca()
						} else {
							b.ca()
						}
						st.u()
					}
				}
				ALF = function () {
					$.i('chicks', function (e, i) {
						St()//cjs.Touch.enable(st)  //st.mO(1) !!!
						var isDrawing
						h = $H().ss(40, "round", "round").C("rgba(0,0,0,0.2)")
						st.A(
								bl = $Bm(i._),
								t = $T('Drag to Reveal!!', "20px Arial", "#FFF").XY(st.W() / 2, st.H() - 40).tA("center"),
								b = $Bm(i._)
						)
						bl.filters = [$FlB(20, 0), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(-20, 20, 500, -80))]//   ,new cjs.BlurFilter(24, 24, 2)
						bl.ca()
						updateCacheImage(false)
						cu = st.h().f("#FFFFFF").dc(25).cu('pointer')
						st.MD(function () {
							isDrawing = true;
							oldPt = st.m();
							oldMidPt = oldPt;
						});
						st.MU(function () {
							updateCacheImage(true);
							isDrawing = false
						});
						st.MM(function () {
							var midPoint
							cu.x = st.mouseX;
							cu.y = st.mouseY;
							if (!isDrawing) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							updateCacheImage(true)
						})
						function updateCacheImage(update) {
							if (update) {
								h.ca(i._)
							} else {
								h.ca(i._)
							}
							b.filters = [$aF(h.cC())]
							if (update) {
								b.ca()
							} else {
								b.ca()
							}
							st.u()
						}
					})
				}
				ERASEFL1 = function () {
					$.i('chicks', function (e, i) {
						St()//cjs.Touch.enable(st)  //st.mO(1) !!!
						var isDrawing
						st.A(
								$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
								b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
						)
						st.trDr()
						st.MD(function () {
							oldPt = st.m();
							oldMidPt = oldPt;
						});
						st.MU(function () {
							b.fl2($AF(h.ca(i))).ca()
						})
						st.MM(function () {
							var midPoint
							if (!st._dr) {
								return st.u()
							}
							midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
							h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
							oldPt.x = st.mouseX;
							oldPt.y = st.mouseY;
							oldMidPt.x = midPoint.x;
							oldMidPt.y = midPoint.y;
							b.fl2($AF(h.ca(i))).ca()
						})
						//cursor
						st.h().f("#FFFFFF").dc(25).cu('pointer').bM()
					})
				}
				ERASEFL11 = function () {
					$.i('chicks', function (e, i) {
						St().trDr().A(
								$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
								b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
						).m({
									d: function () {
										oldPt = st.m();
										oldMidPt = oldPt;
									},
									u: function () {
										b.fl2($AF(h.ca(i))).ca()
									},
									m: function () {
										var midPoint
										if (!st._dr) {
											return st.u()
										}
										midPoint = $Pt(oldPt.x + st.mouseX >> 1, oldPt.y + st.mouseY >> 1)
										h.cur(midPoint.x, midPoint.y, oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y)
										oldPt.x = st.mouseX;
										oldPt.y = st.mouseY;
										oldMidPt.x = midPoint.x;
										oldMidPt.y = midPoint.y;
										b.fl2($AF(h.ca(i))).ca()
									}
								}).h().f("#FFFFFF").dc(25).cu('pointer').bM()
					})
				}
				ERASEDOT = function () {
					$.i('chicks', function (e, i) {
						St()
						st.enableMouseOver = true
						st.trDr().A(
								$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
								b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
						)
						st.m({
							d: function () {
								oldPt = st.m();
								oldMidPt = oldPt;
							},
							u: function () {
								b.fl2($AF(h.ca(i))).ca()
							},
							m: function () {
								var midPoint
								if (!st._dr) {
									return st.u()
								}
								midPoint = M.av(oldPt, st.m()), h.cur(midPoint, oldPt, oldMidPt)
								oldPt = st.m()
								oldMidPt.x = V(midPoint)
								b.aF2(h.ca(i)).ca()
							}
						})
						cu = st.h('w').dc(25).cu('N')//.bM()
					})
				}
				ERASEFL111 = function () {
					$.i('chicks', function (e, i) {
						St()
						st.enableMouseOver = true
						st.trDr().A(
								$Bm(i).fl($FB(20, 0), $CMF(-20, 20, 500, -80)), $T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
								b = $Bm(i).aF2(h = $H().ss(40, 'r', 'r').C(.9).ca(i))
						)
						cu = st.h('w').dc(25).cu('N').bM()
						st.m({
							u: function () {
								b.fl2($AF(h.ca(i))).ca()
							},
							d: function () {
								mt = st.m()
							},
							m: function () {
								if (st._dr) {
									b.aF2(h.dl(mt, mt = st.m()).ca(i)).ca()
								}
							}
						})
					})
				}
				ERASEFLWORKS = function () {
					$.i('chicks', function (e, i) {
						St().trDr()
						//invisible ink!!!
						//so u constantly re-update the top layer's filter
						//it is an alpha filter so it only shows where u painted
						//so it starts of invisible
						//you can 'draw the layer' on
						h = $H().ss(40, 'r', 'r').C(.9).ca(i)
						b = $Bm(i).aF2(h)
						st.A(
								$Bm(i).al(.2).fl($FB(40), $CMF(20, -20, 80, 10), $FB(40)),
								$T('Drag to Reveal!!', "20px Arial", "#FFF", st.W() / 2, st.H() - 40).tA("center"),
								b)
						st.m({
							u: function () {
								b.fl2($AF(h.ca(i))).ca()
							},
							d: function () {
								m = st.m()
							},
							m: function () {
								if (st._dr) {
									h.dl(m, st.m()).ca(i)
									b.aF2(h).ca()
									m = st.m()
								}
							}
						})
					})
				}
				ERASEFL = function () {
					$.i('chicks', function (e, i) {
						St().trDr()
						var m
						//invisible ink!!!
						//so u constantly re-update the top layer's filter
						//it is an alpha filter so it only shows where u painted
						//so it starts of invisible
						//you can 'draw the layer' on
						st.A(
								$Bm({
									i: i,
									fl: [$CMF(20, -20, 80, 10), $FB(40)],
									al: .2
								}),
								$Tc('Smudge!', 100, 'r', st),
								b = $Bm({
									i: i,
									aF2: h = $H().ss(40, 'r', 'r').C(.9).ca(i)
								})
						)
						st.m({
							u: function () {
								b.fl2(
										$AF(h.ca())
								).ca()
							},
							d: function () {
								m = st.m()
							},
							m: function () {
								if (st._md) {
									h.dl(m || st.m(), st.m()).ca()
									b.aF2(h).ca()
									m = st.m()
								}
							}
						})
					})
				}
				FILTERS = function () {
					cM = $CM()
					cM.adjustHue(80)
					cM.adjustSaturation(40)
					cM.adjustBrightness(40)
					cM.adjustContrast(-60)
					s = $.c(1000).A().stage.t()
					s.mug(function (b) {
						b.XY(200, 200).SL()
						b.cache(-200, -200, b.W(), b.H())
						b.filters = [$CMF(cM)]
						b.updateCache()
						//cjs.bindSlide(b)
					})
					s.mug(function (b) {
						b.XY(-100, -50)
						b.cc()
						b.clMF('a', '+')
						b.clMF('w', '+')
						cjs.bindSlide(b)
					})
					s.mug(function (b) {
						b.XY(400, 0).cc()
						SL(b)
						b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
								.dr0(400).H().cc(400).cc('*'))
						]).cc(400)
					})
					s.mug(function (b) {
						b.XY(100, 300).cc();
						SL(b)
						b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
					})
					s.mug(function (b) {
						var ag = 0, rg = 20, sp = 0.04;
						b.XY(500, 300).cc();
						SL(b)
						//this has gotta just mean 'on tick'
						tt(function (e) {
							v = M.sin(ag += sp) * rg;
							b.cc('+').fl([blF(v, v, 2)])
						})
					})
				}
				function cool() {
					Q2 = function () {
						St().mO(1)
						h = st.h().ss('g', 40, 's', 'b', 1)
						st.bm('chicks', function (b) {
							b.XY(500, 300).al(.2)
						})
						pt = 0
						st.MD(function () {
							pt = st.m()
						})
						st.MU(function () {
							pt = 0
						})
						st.MM(function () {
							if (pt) {
								h.line(pt, pt = st.m())
							}
						})
					}
				}
				
				cool()
			}
		}
		
		function colorMatrix() {
			//cM = cjs.ColorMatrix.prototype
			cM.s = function (s) {
				this.adjustSaturation(s)
				return this
			}
			cM.c = function (c) {
				this.adjustContrast(c)
				return this
			}
			cM.ch = function (c) {
				this.adjustHue(c)
				return this
			}
			cM.b = function (c) {
				this.adjustBrightness(c)
				return this
			}
		}
		
		function filtProto() {
			dO.fl = function () {
				var ob = this, g = G(arguments), i
				if (A(g[0])) {
					return ob.fl.apply(ob, g[0])
				}
				ob.filters = ob.filters || []
				_.e(g, function (fl) {
					ob.filters.push(fl)
				})
				if (!g.n) {
					i = ob.image;
					this.ca(0, 0, i.width, i.height)
				}
				return ob
			}
			dO.fl2 = function () {
				var ob = this, g = G(arguments)
				ob.filters = []
				ob.filters = ob.filters || []
				_.e(g, function (fl) {
					ob.filters.push(fl)
				})
				if (!g.n) {
					i = ob.image;
					this.ca(0, 0, i.width, i.height)
				}
				return ob
			}
			dO.aF = function (h) {
				var ob = this
				ob.fl($AF(h))
				return ob
			}
			dO.aF2 = function (h) {
				var ob = this
				this.fl2($AF(h))
				return ob
			}
			dO.fl = function (fl, i) {
				this.filters = this.filters || []
				if (U(fl)) {
					return _.l(this.filters)
				}
				if (N(fl)) {
					return this.filters[fl]
				}
				if (O(fl)) {
					this.filters.push(fl)
				}
				if (O(i)) {
					this.ca(i)
				}
				return this
			}
			dO.Fl = function (fl, i) {
				this.filters = this.filters || []
				if (U(fl)) {
					return _.l(this.filters)
				}
				if (N(fl)) {
					return this.filters[fl]
				}
				if (O(fl)) {
					this.filters.push(fl)
				}
				if (O(i)) {
					this.ca(i)
				}
				return this
			}
			dO.cF = function (a, b, c, d, e, f, g, h) {
				var cf = $cF(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(cf)
				return cf
			}
			dO.bF = function (a, b, c, d, e, f, g, h) {
				var bf
				bf = new cjs.BlurFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
			dO.aF = function (a, b, c, d, e, f, g, h) {
				var bf
				bf = new cjs.AlphaMaskFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
			dO.aMF = function (a, b, c, d, e, f, g, h) {
				var bf = new cjs.AlphaMapFilter(a, b, c, d, e, f, g, h)
				this.filters = this.filters || []
				this.filters.push(bf)
				return bf
			}
			dO.cMF = function (cM) {
				var cf = new cjs.ColorMatrixFilter(cM)
				this.filters = this.filters || []
				this.filters.push(cf)
				return cf
			}
		}
	}
}
function dob(){
	function base() {
		dO = cjs.DisplayObject.prototype
		dO = cjs.DisplayObject.prototype
		dO.X = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			return i
			//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
			dO.Xalt = function (x, duration) {//can add easing :)
				var g = G(arguments)
				if (U(x)) {
					return this.x
				}
				if (g.p) {
					x = this.x + x
				}
				else if (g.n) {
					$l('n')
					x = this.x - x
				}
				else if (g.m) {
					$l('m')
					x = this.x * x
				}
				else if (g.d) {
					$l('d')
					x = this.x / x
				}
				if (N(duration)) {
					tw([this], [{x: x}, duration])
				}
				else {
					this.x = x
				}
				return this
			}
		}
		dO.Y = function (y, duration) {//make same same x
			var g = G(arguments)
			if (U(y)) {
				return this.y
			}
			if (g.p) {
				y = this.y + y
			}
			else if (g.n) {
				y = this.y - y
			}
			else if (g.m) {
				y = this.y * y
			}
			else if (g.d) {
				y = this.y / y
			}
			if (N(duration)) {
				tw([this], [{y: y}, duration])
			}
			else {
				this.y = y
			}
			return this
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, dur) {
				var i = this, g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(dur)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
		}
		dO.XY = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
				dO.XYalt = function (x, y) {
					var i = this, g = G(arguments), v
					if (g.u) {
						return {x: i.x, y: i.y}
					}
					v = V(g.f, g.s)
					x = v.x
					y = N(v.y, v.x)
					return i.X(x).Y(y)
				}
			}
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
			}
		}
		dO.W = function (a) {
			var i = this
			if (U(a)) {
				var bds = i.getBounds()
				if (bds) {
					return bds.width * i.scaleX
				}
				return
			}
			i.sX(i.scaleX * a / i.W())
			return i
			dO.Walt = function (a) {
				dO.Walt = function (a) {
					dO.Walt = function (a) {
						if (U(a)) {
							return this.getBounds().width * this.scaleX
						}
						this.sX(this.scaleX * a / this.W())
						return this
					}
					if (U(a)) {
						return this.getBounds().width * this.scaleX
					}
					this.sX(this.scaleX * a / this.W())
					return this
				}
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
		}
		dO.H = function (a) {
			var i = this
			if (U(a)) {
				if (this.getBounds()) {
					return this.getBounds().height * this.scaleY
				}
				return
			}
			this.sY(this.scaleY * a / this.H())
			return this
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
		}
		dO.WH = function (w, h) {
			var i = this
			return this.W(w).H(h || w)
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
		}
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
		dO.rgX = dO.rX = function () {
			var dO = this, g = G(arguments), rX = g[0]
			if (U(rX)) {
				return dO.regX
			}
			dO.regX = g.p ?
			dO.regX + rX : rX
			return dO
		}
		dO.rgY = dO.rY = function () {
			var dO = this, g = G(arguments), rY = g[0]
			if (g.p) {
				dO.Y(dO.y + (rY - dO.regY))
			}
			if (U(rY)) {
				return dO.regY
			}
			dO.regY = rY
			return dO
		}
		dO.rgXY = dO.rXY = function () {
			var dO = this, g = G(arguments),
					x = _.tN(g[0]),
					y = _.tN(g[1], x)
			return dO.rX(x).rY(y)
		}
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
		dO.rt = dO.rot = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
		dO.X = function (x, dur) {
			var i = this, g = G(arguments)
			if (U(x)) {
				return i.x
			}
			i.x = g.p ? i.x + x
					: g.n ? i.x - x
					: g.m ? i.x * x
					: g.d ? i.x / x
					: x
			return i
			//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
			dO.Xalt = function (x, duration) {//can add easing :)
				var g = G(arguments)
				if (U(x)) {
					return this.x
				}
				if (g.p) {
					x = this.x + x
				}
				else if (g.n) {
					$l('n')
					x = this.x - x
				}
				else if (g.m) {
					$l('m')
					x = this.x * x
				}
				else if (g.d) {
					$l('d')
					x = this.x / x
				}
				if (N(duration)) {
					tw([this], [{x: x}, duration])
				}
				else {
					this.x = x
				}
				return this
			}
		}
		dO.Y = function (y, duration) {//make same same x
			var g = G(arguments)
			if (U(y)) {
				return this.y
			}
			if (g.p) {
				y = this.y + y
			}
			else if (g.n) {
				y = this.y - y
			}
			else if (g.m) {
				y = this.y * y
			}
			else if (g.d) {
				y = this.y / y
			}
			if (N(duration)) {
				tw([this], [{y: y}, duration])
			}
			else {
				this.y = y
			}
			return this
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, duration) {//make same same x
				var g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(duration)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
			dO.Yalt = function (y, dur) {
				var i = this, g = G(arguments)
				if (U(y)) {
					return this.y
				}
				if (g.p) {
					y = this.y + y
				}
				else if (g.n) {
					y = this.y - y
				}
				else if (g.m) {
					y = this.y * y
				}
				else if (g.d) {
					y = this.y / y
				}
				if (N(dur)) {
					tw([this], [{y: y}, duration])
				}
				else {
					this.y = y
				}
				return this
			}
		}
		dO.XY = function (x, y) {
			if (U(x)) {
				return {x: this.x, y: this.y}
			}
			if (O(x)) {
				y = x.y
				x = x.x
			}
			if (U(y)) {
				y = x
			}
			return this.X(x).Y(y)
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
				dO.XYalt = function (x, y) {
					var i = this, g = G(arguments), v
					if (g.u) {
						return {x: i.x, y: i.y}
					}
					v = V(g.f, g.s)
					x = v.x
					y = N(v.y, v.x)
					return i.X(x).Y(y)
				}
			}
			dO.XYalt = function (x, y) {
				if (U(x)) {
					return {x: this.x, y: this.y}
				}
				if (O(x)) {
					y = x.y
					x = x.x
				}
				if (U(y)) {
					y = x
				}
				return this.X(x).Y(y)
			}
		}
		dO.W = function (a) {
			var i = this
			if (U(a)) {
				var bds = i.getBounds()
				if (bds) {
					return bds.width * i.scaleX
				}
				return
			}
			i.sX(i.scaleX * a / i.W())
			return i
			dO.Walt = function (a) {
				dO.Walt = function (a) {
					dO.Walt = function (a) {
						if (U(a)) {
							return this.getBounds().width * this.scaleX
						}
						this.sX(this.scaleX * a / this.W())
						return this
					}
					if (U(a)) {
						return this.getBounds().width * this.scaleX
					}
					this.sX(this.scaleX * a / this.W())
					return this
				}
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
		}
		dO.H = function (a) {
			var i = this
			if (U(a)) {
				if (this.getBounds()) {
					return this.getBounds().height * this.scaleY
				}
				return
			}
			this.sY(this.scaleY * a / this.H())
			return this
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
			dO.Halt = function (a) {
				if (U(a)) {
					return this.getBounds().height * this.scaleY
				}
				this.sY(this.scaleY * a / this.H())
				return this
			}
		}
		dO.WH = function (w, h) {
			var i = this
			return this.W(w).H(h || w)
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
			dO.WHalt = function (w, h) {
				return this.W(w).H(h || w)
			}
		}
		dO.scX = dO.sX = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleX
			}
			dO.scaleX = n
			return dO
		}
		dO.scY = dO.sY = function (n) {
			var dO = this
			if (U(n)) {
				return dO.scaleY
			}
			dO.scaleY = n
			return dO
		}
		dO.scXY = dO.sXY = function (x, y) {
			var dO = this,
					g = G(arguments), v
			if (U(g[0])) {
				return dO
				return {x: dO.sX(), y: dO.sY()}
			}
			v = V(g[0], g[1])
			x = _.tN(v.x)
			y = _.tN(v.y, v.x)
			dO.sX(x)
			dO.sY(y)
			return dO
		}
		dO.rgX = dO.rX = function () {
			var dO = this, g = G(arguments), rX = g[0]
			if (U(rX)) {
				return dO.regX
			}
			dO.regX = g.p ?
			dO.regX + rX : rX
			return dO
		}
		dO.rgY = dO.rY = function () {
			var dO = this, g = G(arguments), rY = g[0]
			if (g.p) {
				dO.Y(dO.y + (rY - dO.regY))
			}
			if (U(rY)) {
				return dO.regY
			}
			dO.regY = rY
			return dO
		}
		dO.rgXY = dO.rXY = function () {
			var dO = this, g = G(arguments),
					x = _.tN(g[0]),
					y = _.tN(g[1], x)
			return dO.rX(x).rY(y)
		}
		dO.skX = dO.kX = function (skewX) {
			if (U(skewX)) {
				return this.skewX
			}
			this.skewX = skewX;
			return this
		}
		dO.skY = dO.kY = function (skewY) {
			if (U(skewY)) {
				return this.skewY
			}
			this.skewY = skewY;
			return this
		}
		dO.skXY = dO.kXY = function (x, y) {
			y = N(y) ? y : x
			return this.kX(x).kY(y)
		}
		dO.rt = dO.rot = function (rotation) {
			var args = G(arguments);
			rotation = args[0]
			if (args.p) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation + rotation)
			}
			if (args.n) {
				rotation = N(rotation) ? rotation : 1
				return this.rT(this.rotation - rotation)
			}
			if (U(rotation)) {
				return this.rotation
			}
			this.rotation = rotation
			return this
			dO.rtAlt = function () {
				var dO = this, g = G(arguments), a = g[0]
				if (g.p) {
					return dO.rt(dO.rotation + _.tN(a, 1))
				}
				if (g.n) {
					return dO.rt(dO.rotation - _.tN(a, 1))
				}
				if (U(a)) {
					return dO.rotation
				}
				dO.rotation = a
				return dO
			}
			dO.rotAlt = function (rotation) {
				var args = G(arguments);
				rotation = args[0]
				if (args.p) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation + rotation)
				}
				if (args.n) {
					rotation = N(rotation) ? rotation : 1
					return this.rT(this.rotation - rotation)
				}
				if (U(rotation)) {
					return this.rotation
				}
				this.rotation = rotation
				return this
			}
		}
	}
	
	dO.uCx = dO.updateContext
	dO.a2 = function (ct, x, y) {
		var dO = this
		ct.A(dO)
		if (N(x)) {
			dO.X(x)
		}
		if (N(y)) {
			dO.Y(y)
		}
		return dO
	}
	dO.a2 = function (ct, x, y) {
		var dO = this
		ct.A(dO)
		if (N(x)) {
			dO.X(x)
		}
		if (N(y)) {
			dO.Y(y)
		}
		return dO
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.s = function () {
		return this.set.apply(this, arguments)
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
	dO.tkEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.tickEnabled
		}
		dO.tickEnabled = g.f ? true : false
		return dO
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.nm = dO.n = dO.N = function (name) {
		if (U(name)) {
			return this.name
		}
		this.name = name;
		return this
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.ix = function (n) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return
		}
		dO.parent.sChIx(dO, n)
		return dO
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.s2p = dO.snap2px = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.snapToPixel
		}
		dO.snapToPixel = g.f ? true : false
		return dO
	}
	dO.ca = function () {
		var dO = this, g = G(arguments), o
		var st = dO.getStage()
		var op
		if (!g.n && !g.p && O(dO.image)) {
			dO._ca($(dO.image)[0])
		}
		if (passTest(g)) {
			op = g.f;
			dO.updCa(op);
			return dO
		}
		o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
		{x: g.f, y: g.s, w: g.t, h: g.f} :
				N(g.s) ? {w: g.f, h: g.s} : {}
		if (O(o.i)) {
			o.i = toImg(o.i)
			dO = toObImg(dO)
			if (!g.n) {
				dO._ca()
			}
		}
		o.x = N(o.x, 0)
		o.y = N(o.y, 0)
		o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
				st ? st.W() : 0)
		o.h = N(o.h) ? o.h :
				O(o.i) ? o.i.height :
						st ? st.H() : 0
		return dO._ca(o.x, o.y, o.w, o.h)
		function passTest(g) {
			return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
		}
		
		function toObImg(i) {
			return $(i.image ? i.image : i)[0]
		}
		
		function toImg(i) {
			return i.image ? i.image : $(i)[0];
		}
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.cl = function () {
		return this.clone.apply(this, arguments)
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	dO.dr = function () {
		this.draw.apply(this, arguments)
		return this
	}
	function mouse() {
		dO.underMouse = dO.uM = function () {
			var dO = this, stg = dO.getStage()
			if (stg.mouseInBounds) {
				var pt = dO.gTL(stg.mouseX, stg.mouseY)
				return dO.hitTest(pt.x, pt.y)
				// alt : return hitTest( pt )
			}
		}
		dO.mouEn = function (en) {
			var dO = this, g = G(arguments)
			if (g.u) {
				return dO.mouseEnabled
			}
			dO.mouseEnabled = g.f ? true : false
			return dO
		}
		dO.$ = dO.click = function (fn) {
			return this.on('click', fn)
		}
		dO.$$ = dO.dblclick = function (fn) {
			return this.on('dblclick', fn)
		}
		events = ['added',
			'mouseover', 'rollover', 'rollout', 'mouseout',
			'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
			'removed',
			'tick'
		]
	}
	
	function rel() {
		dO.in = dO.within = dO.inStage = function () {
			var ob = this,
					st = ob.st(),
					g = G(arguments),
					x = ob.x,
					y = ob.y,
					w = st.W() - 100,
					h = st.H() - 100,
					inn = x > 0 && x < w && y > 0 && y < h
			if (g.n) {
				if (!inn) {
					ob.rm()
				}
			}
			return inn
			function inStage() {
				var args = G(arguments),
						x = this.x,
						y = this.y,
						stg = this.stg(),
						w = stg.W() - 100,
						h = stg.H() - 100,
						withinStage = x > 0 && x < w && y > 0 && y < h
				if (args.n) {
					if (!withinStage) {
						this.remove()
					}
				}
				return withinStage
				var i = this
				var s = i.S(), wthnS
				wthnS = i.x > 0 && i.y > 0
				&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
				if (g.n && !wthnS) {
					s.rm()
				}
				return wthnS
			}
		}
		dO.belowStg = function () {
			return this.y > this.getStage().H()
		}
		dO.toFront = function () {
			return this.ix(this.sib().length - 1)
			toFront = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
			dO.toFrontAlt = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
		}
//rel
		dO.gTL = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return this.globalToLocal(x, y)
		}
		dO.lTG = function () {
			return this.localToGlobal.apply(this, arguments)
		}
		dO.lTL = function () {
			return this.localToLocal.apply(this, arguments)
		}
		dO.in = dO.within = dO.inStage = function () {
			var ob = this,
					st = ob.st(),
					g = G(arguments),
					x = ob.x,
					y = ob.y,
					w = st.W() - 100,
					h = st.H() - 100,
					inn = x > 0 && x < w && y > 0 && y < h
			if (g.n) {
				if (!inn) {
					ob.rm()
				}
			}
			return inn
			function inStage() {
				var args = G(arguments),
						x = this.x,
						y = this.y,
						stg = this.stg(),
						w = stg.W() - 100,
						h = stg.H() - 100,
						withinStage = x > 0 && x < w && y > 0 && y < h
				if (args.n) {
					if (!withinStage) {
						this.remove()
					}
				}
				return withinStage
				var i = this
				var s = i.S(), wthnS
				wthnS = i.x > 0 && i.y > 0
				&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
				if (g.n && !wthnS) {
					s.rm()
				}
				return wthnS
			}
		}
		dO.belowStg = function () {
			return this.y > this.getStage().H()
		}
		dO.toFront = function () {
			return this.ix(this.sib().length - 1)
			toFront = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
			dO.toFrontAlt = function () {
				numChildren = this.parent.children.length
				this.parent.setChildIndex(this, numChildren - 1)
				return this
			}
		}
		dO.gTL = function (x, y) {
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return this.globalToLocal(x, y)
		}
		dO.lTG = function () {
			return this.localToGlobal.apply(this, arguments)
		}
		dO.lTL = function () {
			return this.localToLocal.apply(this, arguments)
		}
	}
	
	dO.dg = dO.drag = function () {
		var i = this;
		cjs.SL(i); //<-SL(this)
		return i
	} // ~ scroll
	function family() {
		dO.pa = dO.P = function () {
			return this.parent
		}
		dO.sib = function () {
			return this.P().ch()
		}
		dO.St = dO.S = dO.st = dO.stg = function () {
			return this.getStage()
		}
		dO.pa = dO.P = function () {
			return this.parent
		}
		dO.sib = function () {
			return this.P().ch()
		}
		dO.St = dO.S = dO.st = dO.stg = function () {
			return this.getStage()
		}
	}
	
	dO.shad = function (color, x, y, blur) {
		cjs.shad = function (color, x, y, blur) {
			alert('cjs.shad')
			if (color == '-') {
				return new cjs.Shadow(null, 0, 0, 0)
			}
			color = S(color) ? color : 'a'
			blur = N(blur) ? blur : 10
			x = N(x) ? x : 0
			y = N(y) ? y : 0
			var shad = new cjs.Shadow(oO('c', color), x, y, blur)
			return shad
		}// = cjs.shadow
		var shadow = cjs.shad(color, x, y, blur)
		this.shadow = shadow
		return this
	}
	dO.shad = function (color, x, y, blur) {
		cjs.shad = function (color, x, y, blur) {
			alert('cjs.shad')
			if (color == '-') {
				return new cjs.Shadow(null, 0, 0, 0)
			}
			color = S(color) ? color : 'a'
			blur = N(blur) ? blur : 10
			x = N(x) ? x : 0
			y = N(y) ? y : 0
			var shad = new cjs.Shadow(oO('c', color), x, y, blur)
			return shad
		}// = cjs.shadow
		var shadow = cjs.shad(color, x, y, blur)
		this.shadow = shadow
		return this
	}
	function center() {
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
		}
		dO.mdX = dO.cenX = dO.cX = function (a) {
			var dO = this
			if (U(a)) {
				return dO.x + dO.W() / 2
			}
			return dO.X(a - dO.W() / 2)
		}
		dO.mdY = dO.cenY = dO.cY = function (a) {
			var dO = this,
					hH = dO.H() / 2
			return U(a) ? dO.y + hH : dO.Y(a - hH)
		}
		dO.cX = dO.centerX = function (a) {
			if (U(a)) {
				return this.x + this.W() / 2
			}
			return this.X(a - this.W() / 2)
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
			dO.cX = dO.centerX = function (a) {
				if (U(a)) {
					return this.x + this.W() / 2
				}
				return this.X(a - this.W() / 2)
			}
		}
		dO.cY = dO.centerY = function (a) {
			if (U(a)) {
				return this.y + this.H() / 2
			}
			return this.Y(a - this.H() / 2)
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
			dO.cY = dO.centerY = function (a) {
				if (U(a)) {
					return this.y + this.H() / 2
				}
				return this.Y(a - this.H() / 2)
			}
		}
		dO.mdX = dO.cenX = dO.cX = function (a) {
			var dO = this
			if (U(a)) {
				return dO.x + dO.W() / 2
			}
			return dO.X(a - dO.W() / 2)
		}
		dO.mdY = dO.cenY = dO.cY = function (a) {
			var dO = this,
					hH = dO.H() / 2
			return U(a) ? dO.y + hH : dO.Y(a - hH)
		}
	}
	
	function cache() {
		dO.uCa = dO.updCa = function (ca) {
			this.updateCache(ca);
			return this
		}
		dO.uc = dO.uncache = function (ca) {
			this.uncache(ca);
			return this
		}
		dO.__ca = function () {
			this.cache.apply(this, arguments);
			return this
		}
		dO._ca = function (x, y, w, h) {
			var dO = this
			x = N(x, 0)
			y = N(y, 0)
			w = N(w, dO.width)
			h = N(h, dO.height)
			dO.__ca(x, y, w, h)
			return dO
		}
		dO.caCv = dO.cC = dO.cc = function () {
			return this.cacheCanvas
		}
		dO.gCDU = function (ca) {
			return this.getCacheDataURL(ca)
		}
		dO.ca = function () {
			var dO = this, g = G(arguments), o
			var st = dO.getStage()
			var op
			if (!g.n && !g.p && O(dO.image)) {
				dO._ca($(dO.image)[0])
			}
			if (passTest(g)) {
				op = g.f;
				dO.updCa(op);
				return dO
			}
			o = g.O_ ? {i: g.f, x: g.s, y: g.t} : N(g.t) ?
			{x: g.f, y: g.s, w: g.t, h: g.f} :
					N(g.s) ? {w: g.f, h: g.s} : {}
			if (O(o.i)) {
				o.i = toImg(o.i)
				dO = toObImg(dO)
				if (!g.n) {
					dO._ca()
				}
			}
			o.x = N(o.x, 0)
			o.y = N(o.y, 0)
			o.w = N(o.w, O(o.i) ? o.i.width : N(o.h) ? o.h :
					st ? st.W() : 0)
			o.h = N(o.h) ? o.h :
					O(o.i) ? o.i.height :
							st ? st.H() : 0
			return dO._ca(o.x, o.y, o.w, o.h)
			function passTest(g) {
				return (!g.p && dO.caCv()) || g.n || g.S_ || g.u
			}
			
			function toObImg(i) {
				return $(i.image ? i.image : i)[0]
			}
			
			function toImg(i) {
				return i.image ? i.image : $(i)[0];
			}
		}
		dO.caCv = dO.cC = dO.cc = function () {
			return this.cacheCanvas
		}
		dO.gCDU = function (ca) {
			return this.getCacheDataURL(ca)
		}
	}
	
	function hideRemove() {
		dO.rm = dO.remove = function () {
			var dO = this
			if (O(dO) && O(dO.parent)) {
				dO.parent.removeChild(dO)
			}
			return dO
		}
		dO.hd = dO.hide = function () {
			return this.vsb(0)
		}
		dO.rm = dO.remove = function () {
			var dO = this
			if (O(dO) && O(dO.parent)) {
				dO.parent.removeChild(dO)
			}
			return dO
		}
		dO.hd = dO.hide = function () {
			return this.vsb(0)
		}
		dO.vis = dO.vsb = function (vsb) {
			var dO = this
			if (U(vsb)) {
				return dO.visible
			}
			dO.visible = vsb ? true : false
			return dO
		}
		dO.al = dO.opacity = function (al) {
			var dO = this
			if (U(al)) {
				return dO.alpha
			}
			dO.alpha = al;
			return dO
		}
		dO.vis = dO.vsb = function (vsb) {
			var dO = this
			if (U(vsb)) {
				return dO.visible
			}
			dO.visible = vsb ? true : false
			return dO
		}
		dO.al = dO.opacity = function (al) {
			var dO = this
			if (U(al)) {
				return dO.alpha
			}
			dO.alpha = al;
			return dO
		}
	}
	
	function hitTest() {
		dO._hT = function () {
			return this.hitTest.apply(arguments, this)
		}
		dO.hT = function (x, y) {
			var dO = this
			if (cjs.iDO(x)) {
				return dO.hT(
						dO.gTL(x)
				)
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return dO._hT(x, y)
		} //= dO.test
		dO._hT = function () {
			return this.hitTest.apply(arguments, this)
		}
		dO.hT = function (x, y) {
			var dO = this
			if (cjs.iDO(x)) {
				return dO.hT(
						dO.gTL(x)
				)
			}
			if (O(x)) {
				y = x.y;
				x = x.x
			}
			return dO._hT(x, y)
		} //= dO.test
	}
	
	function reggy() {
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rgc = function () {
			var i = this, g = G(arguments), x = i.W() / 2, y = i.H() / 2
			return (g[0] === 0) ?
					i.rXY(0, 0, (g.p ? '+' : null))
					: i.rXY(x, y, (g.p ? '+' : null))
		}
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rgc = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g[0] === 0) {
				if (g.p) {
					this.rXY(0, 0, '+')
				}
				else {
					this.rXY(0, 0)
				}
			}
			else {
				if (g.p) {
					this.rXY(x, y, '+')
				}
				else {
					this.rXY(x, y)
				}
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rZero = function (a) {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(0, '+')
				//this.X(a, this.regX()-a, '+')
				this.rY(0, '+')
			}
			else {
				this.rX(0)
				this.rY(0)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rCenter = function () {
			var g = G(arguments),
					x = this.W() / 2,
					y = this.H() / 2
			if (g.p) {
				this.rX(x, '+')
				this.rY(y, '+')
			}
			else {
				this.rX(x)
				this.rY(y)
			}
			return this
		}
		dO.rC = function () {
			var i = this, g = G(arguments), x, y, hW, hH
			x = i.W() / 2
			hW = x
			y = i.H() / 2
			hH = y
			return (g.p) ?
					i.rX(hW, '+').rY(hH, '+') :
					i.rXY(hW, hH)
		}
	}
	
	function compOp() {
		dO.cO = dO.compOp = function (compOp) {
			var dO = this, g = G(arguments)
			if (g.u) {
				return dO.compositeOperation
			}
			dO.compositeOperation = compOp
			return dO
		}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
		dO.Ds = dO.dO = function () {
			return this.compOp('destination-out');
		}
		dO.dS = dO.dI = function () {
			return this.compOp('destination-in')
		}
		dO.sD = dO.sI = function () {
			this.compOp('source-in');
			return this
		}
		dO.Sd = dO.sO = function () {
			this.compOp('source-out');
			return this
		} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
		dO.ds = dO.dV = function () {
			this.compOp('destination-over');
			return this
		}
		dO.SD = dO.sT = dO.sA = function () {
			this.compOp('source-atop');
			return this
		}
		dO.DS = dO.dT = dO.dA = function () {
			this.compOp('destination-atop');
			return this
		}
		dO.li = function () {
			this.compOp('lighter');
			return this
		}
		dO.co = function () {
			this.compOp('copy');
			return this
		}
		dO.xo = function () {
			this.compOp('xor');
			return this
		}
	}
}
createApps()
function createApps(){
	cjs.src = _.src
	STG = function () {
		$.c('y', 300, 100).id('someId')
		$St('someId').bm('me')
		$St($.c('o', 400, 200)).bm('me')
		$St('z', 500, 300).bm('me').GX()._dc()
		$St(1000, 500)
				.bm('me', function (bm) {
					bm.spin().drag()
				})
				.bm('me', function (bm) {
					bm.sXY(0.5, 0.3).spin().drag()
				})
				.Sh().XY(200).graphics.FS()._dc(4)
		_.t(10, function () {
			$St($r(), 200, 200).bm('me', function (me) {
				me.drag()
			})
		})
	}
	INST = INSTAGE = function () {
		$St().bm('me', function (me) {
			me.grow()
			$t(function () {
				me.x = me.x + 10;
				$l(me.inStage())
			})
		})
	}
	LAYS = PLAX = function () {
		st = $St(500)
		st.bm('me', function (bm) {
			me = bm.sXY(.5)
			st.bm('guy', function (bm1) {
				guy = bm1.sXY(.5).drag()//SL(bm)
				$t(function () {
					me.X(guy.X() * 1.6).Y(guy.Y() * 1.6)
				})
			})
		})
		$.bt('safd', function () {
			st.sXY(2)
		})
	}
	CVTX = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
	STF = SETTRANSFORM = function () {
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
	GRID = function () {
		St()
		ct = st.ct()
		ct.SL()
		rows = 5;
		cols = 6;
		sqP = 12;
		sqS = 80
		sqSP = sqS + sqP
		_.t(rows * cols, function (i) {
			drawSquare(ct, sqSP * (i % cols), sqSP * M.fl(i / cols)
			)
		})
		st.update()
	}//A-
	TGL = TANGLE = function () {
		z()
		a = $.dA('r', 50, 50).XY(50).A().pad(10)
		b = $.dA('b', 100, 100).XY(100).A().pad(10)
		c = $.dA('g', 200, 200).XY(200).A().pad(10)
		d = $.dA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	CNN = CONNECT = function () {
		St() //m$$('location=location')
		cjs.circ = function (r, z, x, y) {
			gx = new cjs.Graphics()
			if (!S(r)) {
				return cjs.circ('red', r, z, x)
			}
			z = _.tN(z, 32)
			x = _.tN(x, 100)
			y = _.tN(y, 100)
			gx.ss(z / 8).f(r, 'black').dc(z)
			return new cjs.Shape(gx).XY(x, y)
		}
		cjs.circ = function (x, y, r, c, C) {
			var h = $h()
			if (O(x)) {
				return cjs.circ(x.x, x.y, x.r, x.c, x.C)
			}
			x = _.tN(x)
			y = _.tN(y)
			r = _.tN(r, 8)
			h.cir(x, y, r, c || 'w', C || 'z')
			SL(h)
			return h
		}
		// st= $St('p', 1000)
		pink = cjs.circ(300, 'pink', 'purple').XY(520, 500)//.rXY(100)
		st.A(pink)
		ct = $Ct()
		st.A(ct)
		green = cjs.circ(200, 'green', 'purple').XY(320, 300)//.rXY(100)
		yellow = cjs.circ(100, 'yellow', 'purple').XY(250)
		red = cjs.circ(40, 'red', 'purple').XY(200, 100)
		orange = cjs.circ(20, 'orange', 'purple').XY(300)
		ct.A(green, yellow, red, orange)
		LS(yellow, ct)
		SL(green)
		SL(green, pink)
		SL(yellow)
		SL(red, ct)
		SL(orange, red)
		st.u()
	}
	GROW = function () {
		z()
		$St(500, 500).bm('me', function (bm) {
			b = bm
			bm.grow().dg()
		})
	}//F}}
//function ui() {
	ZX = function () {
		$.fn.md = function (l) {
			var c = this
			c.mousedown(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mu = function (l) {
			var c = this
			c.mouseup(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.mm = function (l) {
			$l('mU')
			var c = this
			c.mousemove(function (e) {
				l(e.clientX, e.clientY)
			})
			return c
		}
		$.fn.$$ = $.fn.dblclick
		$.eD = $.editDiv = function (words) {//$.dE
			canMove = true
			changeLocation = true
			inputMove = true
			mouse = 'up'
			ta = $.ta().mar(4)
			sp = $.sp().C('z')
			fn = function () {
				sp.T(ta.v())
			}
			d = $.dA('+').C('n', 'y').pad(8)
			d.zIndex(0)
			xBt = $.bt('', function () {
				d.rm()
			}).WH(4).C('red')
			d.md(function () {
				inputMove = false;
				mouse = 'div'
			})
			d.mu(function () {
				mouse = 'up'
			})
			d.md(function () {
				$.editDiv.TOP++
				$(this).zIndex($.editDiv.TOP)
			})
			ta.md(function (e) {
				$.editDiv.TOP++
				$(this).parent().zIndex($.editDiv.TOP)
				location = {top: d.Y(), left: d.X()}
				inputMove = true
				mouse = 'input'
				e.stopPropagation()
			})
			ta.mm(function (e) {
				if (inputMove) {
					e.stopPropagation();
					d.XY(location.left, location.top)
				}
			})
			if (U(words)) {
				return d.A(xBt, $.br(), sp.hd(), ta,
						$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
							$(this).pa().free()
						})
				).$$(function (e) {
							e.stopPropagation()
							sp.T(ip.v())
							xBt.gg();
							ip.gg();
							sp.gg()
						})
			}
			else {
				ip.v(words)
				sp.T(ta.v())
				return d.$$(function (e) {
					e.stopPropagation()
					sp.T(ta.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				}).A(xBt, $.br(), sp, ip.hd())
			}
		};
		$.editDiv.TOP = 0
		z()
		a = $.editDiv().A().C('a')
		b = $.editDiv().A().C('b')
	}//C-
	FANCYY = function (x, y) {
		z()
		canvas = $.c('g', 400)
		st = stage = $St(canvas[0])
		frame = $.dragFrame(sp = $.sp())
		sp.A(
				$.bt('X', function () {
					frame.rm()
				}),
				$.bt('pics', function () {
					$.imgDiv(st)
				}),
				$.bt('transform'),
				$.bt('text'),
				$.bt('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							st.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								//                    stagePainter(paintStage)
							})
				}),
				$.bt('cut'),
				$.bt('save'))
		sp.A($.br(), canvas)
		sp.A($.d().A(
				$.bt('clear', function () {
					st.removeAllChildren()
				}),
				$.bt('flat', function () {
					st.removeAllChildren()
					st.bm(st.toDataURL(), function (bm) {
						bm.dg()
					})
				}),
				$.bt('clone', function () {
					var sp = $.sp(),
							newStage = $.dragStage().A(sp)
					newStage.bm(st.du(), function (bm) {
						SL(bm)
					})
				}),
				$.bt('recur', function () {
					stbm(st.du(), function (bm) {
						bm.sxy(.4).SL()
					})
				}),
				$.bt('copy', function () {
					_copy = st.du()
				}),
				$.bt('paste', function () {
					st.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.bt('replace', function () {
					st.rm()
					st.bm(_copy, function (bm) {
						bm.dg()
					})
				})
		))
		sp.$$(function () {
			$('button').toggle()
		})
		sp.A()
	}//C
	FANCY = function (x, y) {
		z()
		$.iD = $.imgDiv = function (st) {
			d = $.d('y', '+')
			$.eGj('img', function (i) {
				d.A($.c(100, 100).fit(i.d)
						.$(function () {
							st.bm(i.d, function (bm) {
								bm.sXY(.4).dg()
							})
						}))
			})
		}
		canvas = $.c('g', 400)
		stage = new cjs.Stage(canvas[0]).t()
		frame = $.dragFrame(theSpan = $.sp())
		theSpan.A(
				$.button('X', function () {
					frame.remove()
				}),
				$.button('pics', function () {
					$.imgDiv(stage)
				}),
				$.button('transform'),
				$.button('text'),
				$.button('paint', function () {
					_paintColor = '#0FF'
					var size = 10, oX = 0, oY = 0, shape
					var paintStage = $.dragStage()
					// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
					paintStage.bm(
							stage.du(), //?
							function (m) {
								m.XY(40).sXY(.4)
								stagePainter(paintStage)
							})
				}),
				$.button('cut'),
				$.button('save'))
		theSpan.A($.br(), canvas)
		theSpan.A($.div().A(
				$.button('clear', function () {
					stage.removeAllChildren()
				}),
				$.button('flat', function () {
					stage.removeAllChildren()
					stage.bm(stage.toDataURL(), function (bm) {
						bm.drag()
					})
				}),
				$.button('clone', function () {
					var newSpan = $.sp()
					var newStage = $.dragStage(newSpan)
					newStage.bm(stage.du(), function (bm) {
						SL(bm)
					})
				}),
				$.button('recur', function () {
					stage.bm(stage.du(), function (bm) {
						bm.sXY(.4)
						SL(bm)
					})
				}),
				$.button('copy', function () {
					_copy = stage.du()
				}),
				$.button('paste', function () {
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				}),
				$.button('replace', function () {
					stage.rm()
					stage.bm(_copy, function (bm) {
						bm.drag()
					})
				})
		))
		theSpan.dblclick(function () {
			$('button').toggle()
		})
		theSpan.A()
	}//A-
	ST2 = function () {
		$.header().K("EaselJS").A(
				$.h1('nextStage'),
				$.p("This is an example")).A()
		c1 = $.canvas('y', 540, 260).id('canvasOne')//.P('a').top(0).right(0).bor('1px solid grey').A() // background: 'none',
		c2 = $.canvas('o', 540, 260).id('canvasTwo')//.P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		$.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		//bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		topStage = stageSetup("canvasTwo", handleEvt)
				.N("topStage").eMO()
				.A(makeSquare(375, 30, "pink", handleEvt))
				.next(bottomStage)
		topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		function stageSetup(canvasName, handler) {
			s = stage = $St(canvasName)
			//stage.addEventListener("stagemousemove", handler);	// too noisy
			_.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
				s.on(ev, handler)
			})
			s.log = []
			return s
		}
		
		function makeSquare(x, y, color, handler) {
			var shape = cjs.shape().N('square').XY(x, y)
			shape.graphics.f(color).dr(0, 0, 135, 135)
			var cont = cjs.container().N('container').A(shape)
			_.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
				cont.on(ev, handler)
			})
			cont.cursor = "pointer"
			return cont
		}
		
		function handleEvt(evt) {
			var target = evt.target,
					stage = target.getStage(),
					log = stage.log
			log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
			+ " y:" + evt.stageY.toFixed(0))
			while (log.length > 12) {
				log.shift()
			}
			stage.text.text = log.join("\n")
			if (evt.type == "mouseover") {
				target.alpha = 0.5
			}
			if (evt.type == "mouseout") {
				target.alpha = 1
			}
		}
		
		/*
		
		 $.header().K("EaselJS").A(
		 $.h1('nextStage'),
		 $.p("This is an example")).A()
		 c1 = $.canvas('y', 540, 260).id('canvasOne').P('a').top(0)
		 .right(0).bor('1px solid grey').A() // background: 'none',
		 c2 = $.canvas('o', 540, 260).id('canvasTwo').P('a').left(0).bottom(0).bor('1px solid grey').A()// background: 'none'
		 $.div(960, 400).K("canvasDiv").P('relative').A(c1, c2).A()
		 bottomStage = stageSetup("canvasOne", handleEvt).N("bottomStage").eMO().A(makeSquare(30, 95, "red", handleEvt))
		 //bottomStage.enableDOMEvents(false);	// you can set this if the bottom stage is completely covered by the top stage, to reduce the number of active event listeners.
		 bottomStage.text = new cjs.Text("", "15px monospace", "#111").XY(195, 30).lineH(16.7).a2(bottomStage)
		 topStage = stageSetup("canvasTwo", handleEvt)
		 .N("topStage").eMO()
		 .A(makeSquare(375, 30, "pink", handleEvt))
		 .next(bottomStage)
		 topStage.text = new cjs.Text("", "15px monospace", "#111").XY(30).lineH(16.7).a2(topStage)
		 function stageSetup(canvasName, handler) {
		 s = stage = new cjs.Stage(canvasName).tick()
		 //stage.addEventListener("stagemousemove", handler);	// too noisy
		 _.each(["stagemousedown", "stagemouseup", "mouseleave", "mouseenter"], function (ev) {
		 s.on(ev, handler)
		 })
		 s.log = []
		 return s
		 }
		
		 function makeSquare(x, y, color, handler) {
		 var shape = cjs.shape().N('square').XY(x, y)
		 shape.graphics.f(color).dr(0, 0, 135, 135)
		 var cont = cjs.container().N('container').A(shape)
		 _.each(["mouseover", "mouseout", "dblclick", "click"], function (ev) {
		 cont.on(ev, handler)
		 })
		 cont.cursor = "pointer"
		 return cont
		 }
		
		 function handleEvt(evt) {
		 var target = evt.target,
		 stage = target.getStage(),
		 log = stage.log
		 log.push(evt.type + " on " + target.name + " x:" + evt.stageX.toFixed(0)
		 + " y:" + evt.stageY.toFixed(0))
		 while (log.length > 12) {
		 log.shift()
		 }
		 stage.text.text = log.join("\n")
		 if (evt.type == "mouseover") {
		 target.alpha = 0.5
		 }
		 if (evt.type == "mouseout") {
		 target.alpha = 1
		 }
		 }
		 */
	}
	FAIL = SKETCH = function () {
		s = cjs.stage(500, 500).A()
		s.can.P('a').XY(300)
		s.bm('me', 0.2, function (bm) {
		})
		s.A(cjs.circle(100, 'blue', 'green').XY(100, 100).drag())
		s.circle(100, 100, 10, 'red', 'yellow')
				.circle(10, 100, 100, 'black', 'purple')
				.circle(100, 10, 100, 'blue', 'red')
				.circle(150, 150, 120, 'red', 'blue')
				.circle(30, 'brown', 'gray')
		St()
		ct = s.ct(1000, 300).drag()
		ct.rec({w: 400, h: 200, c: 'r', C: 'o', l: 10, a: -5})
		h1 = ct.rec({w: 200, h: 400, c: 'r', C: 'o', l: 10, a: 5})
		h = s.h().dr2() // h is another container.. to clr ->  h1.children[0].clr()
		st.u()
		St()
		ct = s.ct(600, 300)
		ct.rec({w: 400, h: 400, c: 'r', C: 'o', l: 10, a: -5})
		ct.rec({w: 100, h: 200, c: 'b', C: 'w', l: 20, a: 20, rg: 1})
		h = ct.Sh()
		h.graphics.FS()
		h.rec({
			w: 100, h: 200, a: 20,
			c: 'b', C: 'w', l: 20, bm: 1
		}).X(100)
		_.in(8, function () {
			h.X(0)
		}) //notice how gradient is seen behind the bm!!!
	}//D  
	BOWL = function () {
		St()
		ct = container = c = $Ct().a2(st)
		plX = st.W() / 2
		plY = 150
		plR = 100
		plr = 75 // this seems to determine the radius of the 'cluster' of balls
		oRng = 8 //outer ring
		nRng = 3// number of rings
		//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1
		circ = cjs.cir(plX, plY, plR, 'yellow')
		container.A(circ) // cr = Hx().c(plR,'y').xy(plX,plY)
		rngSp = plr / (nRng - 1)
		aA = []
		var ast = function (x, y, r, m, f) {
			return {
				x: x, y: y, radius: r, m: m,
				f: f, vX: 0, vY: 0, player: false
			}
		}
		_.t(nRng, function (r) {
			var crR = 0, ang = 0, rngR = 0
			if (r == nRng - 1) {
				crR = 1
			}
			else {
				crR = oRng - (r * 3)
				ang = 360 / crR
				rngR = plr - (rngSp * r)
			}
			_.t(crR, function (a) {
				var x = 0, y = 0
				if (r == nRng - 1) {
					x = plX;
					y = plY
				}
				else {
					x = plX + (rngR * M.cos((ang * a) * M.PI / 180))
					y = plX + (rngR * M.sin((ang * a) * M.PI / 180)) - 350
				}
				aA.push(ast(x, y, 10, 5, 0.95))
				ct.A(cjs.cir(10, 'z').XY(x, y))
			})
		})
	}
	function textApps() {
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		BASELINE = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
		}
		LINEH = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(
					t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
			)
			s.A(
					t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
			)
			s.A(
					t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
			)
		}
		LINEW = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
			s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
		}
		ALIGN = function () {
			z()
			s = cjs.stage(1000).A()
			s.bm('me', function (bm) {
				b = bm
				bm.XY(300).sXY(.2)
				s.dot(300, 300)
			})
			s.bm('me', function (bm) {
				b = bm
				bm.XY(500).sXY(.2)
				s.dot(500, 500)
			})
			//textAlign
			s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
			s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
			s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
			//textBaseline
			s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
			s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
			s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
		}
		function text() {
			BASELINE = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
				s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
				s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
			}//C+
			LINEH = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.A(
						t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
				)
				s.A(
						t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
				)
				s.A(
						t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
				)
			}//C-
			LINEW = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
				s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
				s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
			}//C-
			ALIGN = function () {
				z()
				s = $St(1000).A()
				s.bm('me', function (bm) {
					b = bm
					bm.XY(300).sXY(.2)
				})
				s.bm('me', function (bm) {
					b = bm
					bm.XY(500).sXY(.2)
				})
				//textAlign
				s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
				s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
				s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
				//textBaseline
				s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
				s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
				s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
			}//B+
		}
		
		function write() {
			CHALK = function () {
				w = b2d.mW()
				s = w.s
				s.bm('me')
				text = cjs.chalk('some information ....')
				text2 = cjs.chalk('some more').XY(50, 90)
				s.A(text, text2)
			}
			CHALK = function () {
				w = b2.mW()
				s = w.s
				s.bm('me')
				text = cjs.chalk('some information ....')
				text2 = cjs.chalk('some more').XY(50, 90)
				s.A(text, text2)
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
	}
	
	function gpcEaselOld() {
		CJGPC = CJG = function () {
			$.h1('easel gpc');
			st = $St();
			h = st.h()
			p1 = $pD(vs1);
			p2 = $pD(vs2)
			Bt('diff', 'D');
			Bt('inter', 'I');
			Bt('uni', 'U');
			Bt('xor', 'X')
			setup()
			function drawP(pol, sC, ox, oy) {
				pol.e(function (p, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
					h.vs(p.pts(), ox, oy)
							.cp().s().f()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function Bt(tx, op) {
				return $.bt(tx, function () {
					var p = p1[op](p2)
					setup();
					drawP(p, 'g', 0, 150)
				})
			}
		}
		CJG20 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
							.l(4).s(col)
							.vs(innerPoly.pts(), ox, oy).cp()
							.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJG10 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
							fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
							v = innerPoly.pts()
					h.c(fCol, sCol, 4).mt(v, ox, oy)
					//h.pol(v, ox, oy, fCol, sCol, 4)
					h.cp();
					h.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJGPC = CJG = function () {
			$.h1('easel gpc');
			st = $St();
			h = st.h()
			p1 = $pD(vs1);
			p2 = $pD(vs2)
			Bt('diff', 'D');
			Bt('inter', 'I');
			Bt('uni', 'U');
			Bt('xor', 'X')
			setup()
			function drawP(pol, sC, ox, oy) {
				pol.e(function (p, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(p.iH() ? 'z' : rgba({r: 255}, .1)).l(4).s(col)
					h.vs(p.pts(), ox, oy)
							.cp().s().f()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function Bt(tx, op) {
				return $.bt(tx, function () {
					var p = p1[op](p2)
					setup();
					drawP(p, 'g', 0, 150)
				})
			}
		}
		CJG2 = function () {
			__St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var col = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n])
					h.f(innerPoly.iH() ? 'z' : rgba({r: 255}, .1))
							.l(4).s(col)
							.vs(innerPoly.pts(), ox, oy).cp()
							.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
		CJG1 = function () {
			St()
			bts()
			setup()
			function drawP(pD, sC, ox, oy) {
				pD.e(function (innerPoly, i, n) {
					var sCol = oO('c', i == 0 ? sC : ['G', 'n', 'o', 'v'][i % n]),
							fCol = innerPoly.iH() ? 'z' : rgba({r: 255}, .1),
							v = innerPoly.pts()
					h.c(fCol, sCol, 4).mt(v, ox, oy)
					//h.pol(v, ox, oy, fCol, sCol, 4)
					h.cp();
					h.f().s()
				})
			}
			
			function setup() {
				h.clr(400, 400);
				drawP(p1, "b", 0, -30);
				drawP(p2, "r", 0, -30)
			}
			
			function bts() {
				Bt('diff', 'D');
				Bt('inter', 'I');
				Bt('uni', 'U');
				Bt('xor', 'X')
				function Bt(tx, op) {
					return $.bt(tx, function () {
						var p = p1[op](p2)
						setup();
						drawP(p, 'g', 0, 150)
					})
				}
			}
		}
	}
	
	function mouseApps() {
		ENTERST = function () {
			St()
			st.bm('me')
			st.on('mouseenter', function () {
				$.br().A()
				$('body').A('once<br>')
			}, null, true)
			st.on('mouseenter', function () {
				$('body').A('many<br>')
			}, null, false)
		}//A-
		MX2 = MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			st = $St(1600, 1000)
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			st.on('mouseenter', function () {
				$('body').C($r())
			})
			ct = (new cjs.Container().a2(st)).bm('me', function (bm) {
				bm.sXY(.2).XY(100, 80)
				bm.on('click', function () {
					$l('lit')
				}, this, true) //just once
			})
			//make a container
			st.ct(function (ct, st) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				// the middle size me demonstrates stopPropogation
				// if you click it, the container does not feel the click
				ct.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
					bm.sXY(.4).XY(100, 180)
					bm.on('click', function (e) {
						$l('mid')
						e.stopPropagation()
					})
				})
				ct.bm('me', function (bm) {
					bm.sXY(1.5)
							.on('click', function () {
								$l('big')
							})
				})
				ct.on('click', function () {
					$l('con')
				})
			})
		}
		HAN = HANDEV = function () {
			St()
			st.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			st.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
				}
				b.on('pressmove', b)
			})
			st.t()
		}//B+
		MX0 = MATRIX0 = function () {
			st = $St(1600, 1000)
			// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
			// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
			$.d('b', 50, 50).A()
			// on stage enter, change background color, though you
			// cant see it here because stage fills screen
			// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
			st.on('mouseenter', function () {
				$('body').C($r())
			})
			st.A(ct = container = c = $Ct())
			ct.bm('me', function (bm) {
				//b.sxy(.2).xy(100,80)
				//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
			})
			//make a container
			st.ct(function (c, s) {
				
				//the little me clicks do not hit the 'big' me underneath it.  that's normal.
				//but it does hit the container.  but this example shows off 'remove', so it only hits once
				//however, it continues to propogate on to the container. hmmm..
				// the middle size me demonstrates stopPropogation
				// if you click it, the container does not feel the click
				ct.bm('me', function (b) {
					b.sXY(.4).XY(100, 180)
					//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
				})
				ct.b('me', function (b) {
					b.sXY(1.5)
					// b.o('$',fL('big'))  //on click, log('big')
				})
				//on click, log('con')
				//c.o('$',  fL('con'))
			})
			st.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
				//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
				// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
				//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
			})//.MV(40)
			st.ct(function (c, s) {
				c.x(700)
				c.mg(function (b) {
					b.sxy(.8).xy(200, 80)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(100, 280)
				})
				c.mg(function (b) {
					b.sxy(.8).xy(340, 180)
				})
				//this example shows which sprites are acted upon with over/rollover
				//over only affects one
				//rollover affects ALL
				//if you enter a sprite from outside, they all grow (via rollover),
				//and the one sprite grows double (via over)
				c.o('v', function (g, e) {
					$l('v')
					g.sxy(.01, '+')
				})
				c.o('rv', function (g, e) {
					$l('rv')
					g.sxy(.01, '+')
				})
				c.o('o', function (q, e, g) {
				})
				c.o('ro', function (q, e, g) {
				})
				// in summary,
				// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
				// BUT, they will all recieve events separately
			}).MV(40)
			st.ct(function (ct, st) {
				ct.X(1400)
				ct.bm('me', function (bm) {
					
					//make the little me slide the entire container
					//it acts as a handle! (for its container)
					lit = bm.sXY(.2).XY(100, 80)
					SL(bm, ct)
					ct.bm('me', function (bm) {
						//big me will scale the little me
						big = bm.sXY(2).XY(100, 180)
						SC(bm, lit)
						ct.bm('me', function (bm) {
							bm.sXY(.6).XY(150, 180)
							SL(bm)
							RT(bm, big)
						})
					})
				})
				//guy slides stage
				ct.bm('guy', function (bm) {
					bm.sXY(.4).XY(100, 180)
					SL(bm, stage)
				})
			})
		}
		MOUSE = BUB8 = MOUSEVENTS = BUBBLE = function () {
			St()
			output = $T(
					"try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
					"13px courier").lWH(280, 13).XY(190, 10)
			bg = $H().n("background")
			bg.graphics.f("red").rr(0, 0, 150, 60, 10)
			lb = $T("click me!", "bold 24px Arial", "#FFFFFF").XY(150 / 2, 60 / 2).n('label').tA("center")//.tB("middle")
			// setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
			// button.mouseChildren = false;
			st.A(bt = $Ct().XY(20).n('button').A(bg, lb), output)
			// set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:
			_.e([st, bt, lb, bg], function (tg) {
				tg.$(handleClick, false);
				tg.$(handleClick, true)
			})
			st.u()
			function handleClick(e) {
				if (e.currentTarget == st && e.eventPhase == 1) {
					output.text = "target : eventPhase : currentTarget\n"
				}// this is the first dispatch in the event life cycle, clear the output.
				output.text += e.target.name + " : " + e.eventPhase + " : " + e.currentTarget.name + "\n";
				if (e.currentTarget == st && e.eventPhase == 3) {
					st.u()
				}// this is the last dispatch in the event life cycle, render the stage.
			}
		}//B+
		HITC1 = HITCIRCLES1 = function () {
			z()
			var pt
			st = $St(1000, '+') // look no .tick() necesary!! look below :)
			ct = $Ct()
			st.A(ct.XY(150))
			_.t(25, function () {
				$H().XY(
						randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
			})
			T.on("tick", function (e) {
				ct.rotation += 3
				n = ct.getNumChildren()
				ct.ch(function (ch) {
					uM = ch.uM()
					ch.alpha = ch.uM() ? 1 : 0.1
					pt = ch.globalToLocal(st.m().x, st.m().y)
					if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
						ch.al(1)
					}
				})
			})
			function randomLocation() {
				return M.random() * 300 - 150
			}
			
			function randomHSL() {
				return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
			}
		}//A
		HITC = HITCIRCLES = function () {
			z()
			var pt
			st = $St(1000, '+') // look no .tick() necesary!! look below :)
			ct = $Ct()
			st.A(ct.XY(150))
			_.t(25, function () {
				$H().XY(
						randomLocation(), randomLocation()).f(randomHSL()).dc(30).a2(ct)
			})
			T.on("tick", function (e) {
				ct.rotation += 3
				n = ct.getNumChildren()
				ct.ch(function (ch) {
					uM = ch.uM()
					ch.alpha = ch.uM() ? 1 : 0.1
					pt = ch.globalToLocal(st.m().x, st.m().y)
					if (st && st.mouseInBounds && ch.hitTest(pt.x, pt.y)) {
						ch.al(1)
					}
				})
			})
			function randomLocation() {
				return M.random() * 300 - 150
			}
			
			function randomHSL() {
				return cjs.Graphics.getHSL(M.random() * 360, 100, 50)
			}
		}//A
		RMEVT8 = function () {
			St()
			st.bm('me', function (b) {
				me = b
				cb = b.on('pressmove', function () {
					this.x++
				})
			})
			st.bm('guy', function (b) {
				b.handleEvent = function () {
					this.y++
					me.off('pressmove', cb)
				}
				b.on('pressmove', b)
			})
			///////
			s.can.P('a').XY(300)
			s.A(h = shape = $h())
			h.rec(100, 200, 0, 200, 'red')
					.rec(100, 100, 100, 20, 'green')
					.rec(145, 120, 10, 80, 'orange')
					.cir(105, 100, 20, 'blue')
					.cir(105, 100, 8, 'black')
					.cir(200, 100, 20, 'blue')
					.cir(200, 100, 8, 'black')
					.cir(100, 20, 100, 'green')
					.rXY(100, 300).XY(100, 300).drag()
			p = function () {
				shape.twL(
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
						[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
				shape.twL(
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
						[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
				)
			}
			p()
		}
	}
	
	function official() {
		examples = {}
		examples.showDistractor = function (id) {
			var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
			div.className += " loading"
		}
		examples.hideDistractor = function () {
			var div = document.querySelector(".loading")
			div.className = div.className.replace(/\bloading\b/)
		}
		cjs.promote = function (subclass, prefix) {
			var subP = subclass.prototype, supP = getProto(subP)
			
			function getProto(subP) {
				return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
			}
			
			if (supP) {
				subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
				for (var n in supP) {
					if (subP.hasOwnProperty(n) && (F(supP[n]))) {
						subP[prefix + n] = supP[n]
					}
				}
			}
			return subclass
		}
//  Simple slider control for EaselJS examples.
		function Slider(min, max, width, height) {
			this.Shape_constructor();
			this.min = this.value = min || 0;
			this.max = max || 100;
			this.width = width || 100;
			this.height = height || 20;
			this.values = {};
			this.trackColor = "#EEE";
			this.thumbColor = "#666";
			this.cursor = "pointer";
			this.on("mousedown", this._handleInput, this);
			this.on("pressmove", this._handleInput, this);
		}
		
		p = cjs.extend(Slider, createjs.Shape);
		p._checkChange = function () {
			var a = this, b = a.values;
			if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
				b.min = a.min;
				b.max = a.max;
				b.value = a.value;
				b.width = a.width;
				b.height = a.height;
				return true;
			}
			return false
		}
		p._handleInput = function (evt) {
			var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
			val = Math.max(this.min, Math.min(this.max, val));
			if (val == this.value) {
				return;
			}
			this.value = val;
			this.dispatchEvent("change")
		}
		p.isVisible = function () {
			return true;
		};
		p.draw = function (ctx, ignoreCache) {
			if (this._checkChange()) {
				var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
				this.graphics.clear()
						.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
						.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
			}
			this.Shape_draw(ctx, true)
		}
		Slider = cjs.promote(Slider, "Shape")
		cjs.worldsMostInterestingShape = function () {
			var h = cjs.shape()
			h.graphics.f("pink").dr(20, 20, 450, 360)
					.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
					.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
			return h
		}
		cjs.manifest = function (fn) {
			_manifest_ = [{
				id: "chicks", src: "/chicks.png"
			},
				{id: "me", src: "/me.png"},
				{id: "guy", src: "/guy.png"},
				{id: "sun", src: "/sun.png"}]
			var q = cjs.loadQueue()
			q.complete(function () {
				fn(function (getResult) {
					return q.getResult(getResult)
				})
			})
					.manifest(_manifest_)
		}
		cjs.testCanvas = function () {
			return $.div().A($.canvas(960, 400).id("testCanvas")).A()
		}
		cjs.utils = function () {
		}
		cjs.extend = function (subclass, superclass) {
			function o() {
				this.constructor = subclass
			}
			
			o.prototype = superclass.prototype;
			return (subclass.prototype = new o())
		}
		cjs.promoteX = function (subclass, prefix) {
			var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
			if (supP) {
				subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
				for (var n in supP) {
					if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
						subP[prefix + n] = supP[n];
					}
				}
			}
			return subclass
		}
		cjs.slider = function () {
			/**
			 * Simple slider control for EaselJS examples.
			 **/
			function Slider(min, max, width, height) {
				this.Shape_constructor();
				// public properties:
				this.min = this.value = min || 0;
				this.max = max || 100;
				this.width = width || 100;
				this.height = height || 20;
				this.values = {};
				this.trackColor = "#EEE";
				this.thumbColor = "#666";
				this.cursor = "pointer";
				this.on("mousedown", this._handleInput, this);
				this.on("pressmove", this._handleInput, this);
			}
			
			var p = createjs.extend(Slider, createjs.Shape);
// public methods:
			p.isVisible = function () {
				return true;
			};
			p.draw = function (ctx, ignoreCache) {
				if (this._checkChange()) {
					var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
					this.graphics.clear()
							.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
							.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
				}
				this.Shape_draw(ctx, true)
			}
// private methods:
			p._checkChange = function () {
				var a = this, b = a.values;
				if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
					b.min = a.min;
					b.max = a.max;
					b.value = a.value;
					b.width = a.width;
					b.height = a.height;
					return true;
				}
				return false
			}
			p._handleInput = function (evt) {
				var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
				val = Math.max(this.min, Math.min(this.max, val));
				if (val == this.value) {
					return;
				}
				this.value = val;
				this.dispatchEvent("change")
			}
			window.Slider = createjs.promote(Slider, "Shape");
		}
		cjs.sharedCodeX = function () {
			if (document.body) {
				setupEmbed()
			}
			else {
				document.addEventListener("DOMContentLoaded", setupEmbed)
			}
			function setupEmbed() {
				if (window.top != window) {
					document.body.className += " embedded"
				}
			}
			
			var o = window.examples = {}
			o.showDistractor = function (id) {
				var div = id ? document.getElementById(id) :
						document.querySelector("div canvas").parentNode;
				div.className += " loading"
			}
			o.hideDistractor = function () {
				var div = document.querySelector(".loading")
				div.className = div.className.replace(/\bloading\b/)
			}
		}
		PRM = function () {
			z()
			cjs.utils()
			function ClassA(name) {
				this.name = name
			}
			
			ClassA.prototype.greet = function () {
				return "Hello " + this.name
			} //a = new ClassA('john')
			function ClassB(name, punctuation) {
				this.ClassA_constructor(name)
				this.punctuation = punctuation
			}
			
			cjs.extend(ClassB, ClassA)
			ClassB.prototype.greet = function () {
				return this.ClassA_greet() + this.punctuation
			}
			cjs.promote(ClassB, "ClassA")
			b = new ClassB("World", "!?!")
			$l(b.greet())  // Hello World!?!
		}
		PRM1 = PROMOTE = function () {
			z()
			cjs.utils()
			function ClassA(name) {
				this.name = name
			}
			
			ClassA.prototype.greet = function () {
				return "Hello " + this.name
			} //a = new ClassA('john')
			function ClassB(name, punctuation) {
				this.ClassA_constructor(name)
				this.punctuation = punctuation
			}
			
			cjs.extend(ClassB, ClassA)
			ClassB.prototype.greet = function () {
				return this.ClassA_greet() + this.punctuation
			}
			cjs.promote(ClassB, "ClassA")
			b = new ClassB("World", "!?!")
			$l(b.greet())  // Hello World!?!
		}
		DSTR = DISTRACTORDOESNOTHING = function () {
			st = stage = $St()
			cjs.utils()
			cjs.slider()
			examples.showDistractor()
		}
		function transform() {
//offical examples:
			TRF = TRANSF = function () {
				z()
				degToRad = Math.PI / 180;
				cjs.testCanvas()
				//cjs.sharedCode()
				cjs.utils()
				cjs.slider()
				examples.showDistractor()
				stage = new createjs.Stage("testCanvas")
				stage.enableMouseOver();
				createjs.Touch.enable(stage);
				stage.mouseMoveOutside = true;
				var img = new Image();
				img.onload = handleImageLoad;
				img.src = "/chicks.png";
				function handleImageLoad(evt) {
					examples.hideDistractor();
					var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
					sliceWidth = imgWidth / sliceCount;
					sliceContainer = new createjs.Container();
					sliceContainer.x = stage.canvas.width / 2;
					for (var i = 0; i < sliceCount; i++) {
						var slice = new createjs.Bitmap(img);
						slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
						slice.cache(0, 0, sliceWidth, imgHeight);
						slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
						sliceContainer.addChild(slice);
					}
					var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
					slider.on("change", handleSliderChange, this);
					stage.addChild(sliceContainer, slider);
					updateEffect(slider.value);
				}
				
				function handleSliderChange(evt) {
					updateEffect(evt.target.value);
				}
				
				function updateEffect(value) {
					var l = sliceContainer.getNumChildren();
					for (var i = 0; i < l; i++) {
						var slice = sliceContainer.getChildAt(i);
						slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
						if (i % 2) {
							slice.skewY = value;
						} else {
							slice.skewY = -value;
							slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
						}
						slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
						slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
						slice.updateCache();
					}
					stage.update();
				}
				
				TRAN1 = function () {
					degToRad = Math.PI / 180;
					cjs.testCanvas()
					cjs.utils()
					cjs.slider()
					examples.showDistractor()
					stage = new createjs.Stage("testCanvas")
					stage.enableMouseOver();
					createjs.Touch.enable(stage);
					stage.mouseMoveOutside = true;
					var img = new Image();
					img.onload = handleImageLoad;
					img.src = "/chicks.png";
					function handleImageLoad(evt) {
						examples.hideDistractor();
						var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
						sliceWidth = imgWidth / sliceCount;
						sliceContainer = new createjs.Container();
						sliceContainer.x = stage.canvas.width / 2;
						for (var i = 0; i < sliceCount; i++) {
							var slice = new createjs.Bitmap(img);
							slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
							slice.cache(0, 0, sliceWidth, imgHeight);
							slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
							sliceContainer.addChild(slice);
						}
						var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
						slider.on("change", handleSliderChange, this);
						stage.addChild(sliceContainer, slider);
						updateEffect(slider.value);
					}
					
					function handleSliderChange(evt) {
						updateEffect(evt.target.value);
					}
					
					function updateEffect(value) {
						var l = sliceContainer.getNumChildren();
						for (var i = 0; i < l; i++) {
							var slice = sliceContainer.getChildAt(i);
							slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
							if (i % 2) {
								slice.skewY = value;
							} else {
								slice.skewY = -value;
								slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
							}
							slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
							slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
							slice.updateCache();
						}
						stage.update();
					}
				}
			}
			TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
				z()
				angle = 0
				img = $.img('me', handleImageLoad)[0]
				function stop() {
					cjs.Ticker.removeEventListener("tick", tick)
				}
				
				function handleImageLoad() {
					canvas = $.canvas('p', 960, 400).id("testCanvas").A()
					stage = cjs.stage(canvas)
					stage.autoClear = true;
					bmp = new createjs.Bitmap(img)
							.rXY(img.width >> 1, img.height >> 1)
							.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
					stage.A(bmp).update();
					cjs.Ticker.timingMode = cjs.Ticker.RAF
					cjs.tick(tick)
				}
				
				function tick(event) {
					angle += 0.01
					var value = Math.sin(angle) * 360
					bmp.rot(value).sXY(value / 360)
					stage.update(event)
				}
				
				/*
				 TFR2 = TRANSFORMSIMPLE = function () {
				 z()
				 angle = 0
				 img = $.img('me', handleImageLoad)[0]
				 function stop() {
				 cjs.Ticker.removeEventListener("tick", tick)
				 }
				
				 function handleImageLoad() {
				 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
				 stage = cjs.stage(canvas)
				 stage.autoClear = true;
				 bmp = new createjs.Bitmap(img)
				 .rXY(img.width >> 1, img.height >> 1)
				 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
				 stage.A(bmp).update();
				 cjs.Ticker.timingMode = cjs.Ticker.RAF
				 cjs.tick(tick)
				 }
				
				 function tick(event) {
				 angle += 0.01
				 var value = Math.sin(angle) * 360
				 bmp.rot(value).sXY(value / 360)
				 stage.update(event)
				 }
				 }
				 */
			}
		}
	}
	
	SGUN = SGUNSHIP = function () {
		St()
		angleInDegrees = function self(y, x) {
			if (O(y)) {
				return self(y.vy, y.vx)
			}
			var d = tDeg(M.atan(y / x))
			if (x < 0) {
				d = M.abs(d) + 90;
				if (y < 0) {
					d = M.abs(d) + 90
				}
			}
			return d
		}
		ship = function (st) {
			h = t = $H().XY(100).rY(20).vX(1).vY(1)
			h.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
			$.kD('d', function () {
				t.rt(6, '+')
			})
			$.kD('u', function () {
				t.rt(6, '-')
			})
			if (st) {
				st.A(h)
				st.MD(function (e) {
					t.vX((e.rawX - t.x) / 100, '+')
					t.vY((e.rawY - t.y) / 100, '+')
					if (t.vx > 10) {
						t.vX(10)
					}
					if (t.vy > 10) {
						t.vY(10)
					}
				})
			}
			_.ev(.05, function () {
				h.X(t.vx, '+').Y(h.vy, '+')
				h.rotation = angleInDegrees(t)
			})
			return t
		}
		PL = 1;
		aA = []
		div = $.d('y').pad(10)
		div.A(
				$.h1('controls'),
				b1 = $.bt('start', function () {
					PL = 1;
					b1.hd();
					b2.sh()
				}),
				b2 = $.bt('stop', function () {
					PL = 0;
					b2.hd();
					b1.sh()
				}).hd(),
				$.bt('sgun', function () {
					sgun(guy)
				}))
		boot = $.boot()
		boot.A(div, st.canvas)
		guy = ship(st)
		// kD('s',function(){ $l('bang')})
		_.t(100, function () {
			var a = ast();
			a.a();
			a.p()
		})
		st.t(function () {
			if (PL) {
				_.e(aA, function (a) {
					a.u()
				})
			}
		})
		sgun(guy)
	}
	AMR = ALPHAMASKREVEAL = function () {
		z();
		cjs.testCanvas()
		//  cjs.sharedCode()
		var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
				image, bitmap, maskFilter, cursor, text, blur
		examples.showDistractor()
		image = new Image();
		image.onload = handleComplete
		image.src = "/chicks.png"
		stage = new createjs.Stage("testCanvas");
		text = new createjs.Text("Loading...", "20px Arial", "#FFF");
		text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
		text.textAlign = "center"
		function handleComplete() {
			examples.hideDistractor();
			createjs.Touch.enable(stage);
			stage.enableMouseOver();
			stage.addEventListener("stagemousedown", handleMouseDown);
			stage.addEventListener("stagemouseup", handleMouseUp);
			stage.addEventListener("stagemousemove", handleMouseMove);
			drawingCanvas = new createjs.Shape();
			bitmap = new createjs.Bitmap(image);
			blur = new createjs.Bitmap(image);
			blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
			blur.cache(0, 0, 960, 400);
			text.text = "Click and Drag to Reveal the Image.";
			stage.addChild(blur, text, bitmap);
			updateCacheImage(false);
			cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
			cursor.cursor = "pointer";
			stage.addChild(cursor);
		}
		
		function handleMouseDown(event) {
			oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
			oldMidPt = oldPt;
			isDrawing = true;
		}
		
		function handleMouseMove(event) {
			cursor.x = stage.mouseX;
			cursor.y = stage.mouseY;
			if (!isDrawing) {
				stage.update();
				return;
			}
			var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
			drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
					.beginStroke("rgba(0,0,0,0.2)")
					.moveTo(midPoint.x, midPoint.y)
					.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
			oldPt.x = stage.mouseX;
			oldPt.y = stage.mouseY;
			oldMidPt.x = midPoint.x;
			oldMidPt.y = midPoint.y;
			updateCacheImage(true);
		}
		
		function handleMouseUp(event) {
			updateCacheImage(true);
			isDrawing = false;
		}
		
		function updateCacheImage(update) {
			if (update) {
				drawingCanvas.updateCache();
			} else {
				drawingCanvas.cache(0, 0, image.width, image.height);
			}
			maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
			bitmap.filters = [maskFilter];
			if (update) {
				bitmap.updateCache(0, 0, image.width, image.height);
			} else {
				bitmap.cache(0, 0, image.width, image.height);
			}
			stage.update();
		}
		
		AMR1 = function () {
			cjs.testCanvas()
			var stage, isDrawing, drawingCanvas, oldPt, oldMidPt, displayCanvas,
					image, bitmap, maskFilter, cursor, text, blur
			examples.showDistractor()
			image = new Image();
			image.onload = handleComplete
			image.src = "/chicks.png"
			stage = new createjs.Stage("testCanvas");
			text = new createjs.Text("Loading...", "20px Arial", "#FFF");
			text.set({x: stage.canvas.width / 2, y: stage.canvas.height - 40});
			text.textAlign = "center"
			function handleComplete() {
				examples.hideDistractor();
				createjs.Touch.enable(stage);
				stage.enableMouseOver();
				stage.addEventListener("stagemousedown", handleMouseDown);
				stage.addEventListener("stagemouseup", handleMouseUp);
				stage.addEventListener("stagemousemove", handleMouseMove);
				drawingCanvas = new createjs.Shape();
				bitmap = new createjs.Bitmap(image);
				blur = new createjs.Bitmap(image);
				blur.filters = [new createjs.BlurFilter(24, 24, 2), new createjs.ColorMatrixFilter(new createjs.ColorMatrix(60))];
				blur.cache(0, 0, 960, 400);
				text.text = "Click and Drag to Reveal the Image.";
				stage.addChild(blur, text, bitmap);
				updateCacheImage(false);
				cursor = new createjs.Shape(new createjs.Graphics().beginFill("#FFFFFF").drawCircle(0, 0, 25));
				cursor.cursor = "pointer";
				stage.addChild(cursor);
			}
			
			function handleMouseDown(event) {
				oldPt = new createjs.Point(stage.mouseX, stage.mouseY);
				oldMidPt = oldPt;
				isDrawing = true;
			}
			
			function handleMouseMove(event) {
				cursor.x = stage.mouseX;
				cursor.y = stage.mouseY;
				if (!isDrawing) {
					stage.update();
					return;
				}
				var midPoint = new createjs.Point(oldPt.x + stage.mouseX >> 1, oldPt.y + stage.mouseY >> 1);
				drawingCanvas.graphics.setStrokeStyle(40, "round", "round")
						.beginStroke("rgba(0,0,0,0.2)")
						.moveTo(midPoint.x, midPoint.y)
						.curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);
				oldPt.x = stage.mouseX;
				oldPt.y = stage.mouseY;
				oldMidPt.x = midPoint.x;
				oldMidPt.y = midPoint.y;
				updateCacheImage(true);
			}
			
			function handleMouseUp(event) {
				updateCacheImage(true);
				isDrawing = false;
			}
			
			function updateCacheImage(update) {
				if (update) {
					drawingCanvas.updateCache();
				} else {
					drawingCanvas.cache(0, 0, image.width, image.height);
				}
				maskFilter = new createjs.AlphaMaskFilter(drawingCanvas.cacheCanvas);
				bitmap.filters = [maskFilter];
				if (update) {
					bitmap.updateCache(0, 0, image.width, image.height);
				} else {
					bitmap.cache(0, 0, image.width, image.height);
				}
				stage.update();
			}
		}
	}
}