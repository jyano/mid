b2d.debugDraw = function (sprite, scale, flags, alpha, line) {
	var dd = new b2d.DebugDraw()
	//can pass in either canvas or context
	if ($.isCan(sprite)) {
		sprite = sprite.ctx()
	}
	if (sprite) {
		dd.sprite(sprite)
	}
	if (scale) {
		dd.scale(scale)
	}
	if (flags) {
		dd.flags(flags)
	}
	dd.alpha(N(alpha) ? alpha : 0.5)
	// dd.line( N(line)? line :1 )
	// dd.SetLineThickness(1)
	return dd
}
 
dd = p = b2d.Dynamics.b2DebugDraw.prototype
dd.cx = dd.spr = dd.i = dd.sprite = function (spr) {
	var dd = this  //it is looking for  a context?
	if (U(spr)) {
		return dd.GetSprite()
	}
	dd.SetSprite(spr)
	return dd
}
dd.sc = dd.dS = dd.scale = dd.drawScale = function (sc) {
	var dd = this
	if (U(sc)) {
		return dd.GetDrawScale()
	}
	dd.SetDrawScale(sc)
	return dd
}
dd.fA = dd.alpha = dd.fillAlpha = function (a) {
	var dd = this
	if (U(a)) {
		return dd.GetFillAlpha()
	}
	dd.SetFillAlpha(a)
	return dd
}
dd.lT = dd.line = dd.lineThickness = function (lt) {
	var dd = this
	if (U(lt)) {
		return dd.GetLineThickness()
	}
	dd.SetLineThickness(lt);
	return dd
}
dd.fl = dd.flags = function (flags) {
	var dd = this, DD = b2DebugDraw
	if (U(flags)) {
		return dd.GetFlags()
	}
	if (flags == '*') {
		flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
	}
	dd.SetFlags(flags)
	return dd
}
dd.cx = dd.spr = dd.i = dd.sprite = function (spr) {
	var dd = this  //it is looking for  a context?
	if (U(spr)) {
		return dd.GetSprite()
	}
	dd.SetSprite(spr)
	return dd
}
dd.sc = dd.dS = dd.scale = dd.drawScale = function (sc) {
	var dd = this
	if (U(sc)) {
		return dd.GetDrawScale()
	}
	dd.SetDrawScale(sc)
	return dd
}
dd.fA = dd.alpha = dd.fillAlpha = function (a) {
	var dd = this
	if (U(a)) {
		return dd.GetFillAlpha()
	}
	dd.SetFillAlpha(a)
	return dd
}
dd.lT = dd.line = dd.lineThickness = function (lt) {
	var dd = this
	if (U(lt)) {
		return dd.GetLineThickness()
	}
	dd.SetLineThickness(lt);
	return dd
}
dd.fl = dd.flags = function (flags) {
	var dd = this, DD = b2DebugDraw
	if (U(flags)) {
		return dd.GetFlags()
	}
	if (flags == '*') {
		flags = DD.e_shapeBit //| DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit
	}
	dd.SetFlags(flags)
	return dd
}
dd.sprite = dd.spr = function (spr) {  //it is looking for  a context?
	if (U(spr)) {
		return this.GetSprite()
	}
	this.SetSprite(spr)
	return this
}
dd.scale = dd.drawScale = p.dS = function (scale) {
	if (U(scale)) {
		return this.GetDrawScale()
	}
	this.SetDrawScale(scale)
	return this
}
dd.alpha = dd.fillAlpha = dd.fA = function (a) {
	if (U(a)) {
		return this.GetFillAlpha()
	}
	this.SetFillAlpha(a)
	return this
}
dd.line = dd.lineThickness = dd.lT = function (lt) {
	if (U(lt)) {
		return this.GetLineThickness()
	}
	this.SetLineThickness(lt);
	return this
}
dd.flags = p.fl = function (flags) {
	var DD = b2DebugDraw
	if (U(flags)) {
		return this.GetFlags()
	}
	if (flags == '*') {
		flags = (DD.e_shapeBit | DD.e_jointBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit | DD.e_controllerBit)
	}
	this.SetFlags(flags);
	return this
}
dD.sprite = dD.sp = dD.spr = function (sp) {
	//it is looking for canvas-context
	if (U(sp)) {
		return this.GetSprite()
	}
	this.SetSprite(sp)
	return this
}
dD.scale = dD.sc = dD.drawScale = dD.dS = function (sc) {
	var dD = this
	if (U(sc)) {
		return this.GetDrawScale()
	}
	this.SetDrawScale(sc)
	return this
}
dD.line = dD.l = dD.f = dD.fAl = dD.lT = function (lt) {
	if (U(lt)) {
		return this.GetLineThickness()
	}
	this.SetLineThickness(lt);
	return this
} //Get/SetXFormScale(xformScale:N)   scale used for drawing XForms
dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
}//Get/SetAlpha(al:N)    used for lines
dD.fAl = dD.fillAlpha = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetFillAlpha()
	}
	this.SetFillAlpha(al)
	return this
}
dD.flags = dD.F = dD.fl = function (fl) {
	var dD = this
	if (U(fl)) {
		return dD.GetFlags()
	}
	dD.SetFlags(fl)
	return dD
}


//



$dD = b2d.debugDraw = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
} 
$dD = function (sp, sc) { //=DebugDraw=dbD
	var dD = new b2d.DD()
	dD.sp(sp);
	dD.sc(sc)
	return dD
} // = b2d.debugDraw
$dD.aabb = $dD.a = b2d.DD.e_aabbBit //4
$dD.shape = $dD.h = b2d.DD.e_shapeBit //1
$dD.jt = $dD.j = b2d.DD.e_jointBit //2
$dD.pair = $dD.p = b2d.DD.e_pairBit //8
$dD.cOM = $dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20 
/*

 Chapter 12 Debug Drawing

 You can implement the b2DebugDraw class to get detailed drawing of the physics world. 
 Here are the available entities:

 •                    shape outlines
 •                    joint connectivity
 •                    broad-phase axis-aligned bounding boxes (AABBs)
 •                    center of mass



 This is the preferred method of drawing these physics entities, rather than accessing the data directly. 
 The reason is that much of the necessary data is internal and subject to change.

 The testbed draws physics entities using the debug draw facility and the contact listener,
 so it serves as the primary example of how to implement debug drawing as well as how to draw contact points.


 */

$dD = b2d.debugDraw = function () {
	var g = G(arguments), o, dbD = new b2DebugDraw()
	var DD = b2DebugDraw
	//var flags= DD.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	var flags = b2DebugDraw.e_shapeBit// | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit
	o = {cx: g.f, sc: g.s, fl: g.t, al: g[4], l: g[3]}
	if ($.iC(o.cx)) {
		o.cx = $(o.cx).ctx()
	}
	o.sc = N(o.sc, 30)
	o.fl = o.fl || flags
	o.l = N(o.l, 20)
	o.al = N(o.al, .95)
	if (o.cx) {
		dbD.sprite(o.cx)
	}
	if (o.sc) {
		dbD.scale(o.sc)
	}
	dbD.flags(o.fl)
	dbD.alpha(N(o.al, 0.5))
	return _dbD = dbD
}
w.dbD = w.bug = function () {
	var w = this, g = G(arguments)
	// this.scale = dd.scale()
	w.sDD(
			$dD.apply(null, g))
	return w
}
w.dDD = function () {
	this.DrawDebugData()
	return this
}
w.sDD = function (dbD) {
	this.SetDebugDraw(dbD);
	return this
}
w.sDD = function (dbD) {
	this.SetDebugDraw(dbD);
	return this
}
w.dbD = w.bug = function () {
	var w = this, g = G(arguments)
	// this.scale = dd.scale()
	w.sDD($dD.apply(null, g))
	return w
}
w.dDD = function () {
	this.DrawDebugData()
	return this
}