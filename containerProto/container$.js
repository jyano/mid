ct._A = function () {
	return this.addChild.apply(this, arguments)
}
ct.A = function (arg, y) {
	var ct = this, g = G(arguments)
	var bd= $('body')
	var st = ct.gSt()
	
	if (g.u) {
		if (g.u && st) {
			//must be stage??
			bd.A( st? st.canvas : ct.canvas)
		}
	}
	
	else if (g.N_) {
		bd.A(ct.canvas).abs().XY(g.f, g.s)
	}

	else {_.e(g, function (ch) {ct._A(ch)})}

	return ct
}
ct.addContainer = ct.ct = function (fn) {
	var ct = this, g = G(arguments)
	var  f = g[0]
	var ct1  = new cjs.Container().a2(ct)
	if (fn) {fn(ct1, ct)}
	if (g.p) {cjs.bindSlide(ct1)}
	
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
ct.moCh =ct.muCh =ct.mouCh = function () {
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

ct.gOUPs = function(){
	
	return this.getObjectsUnderPoint.apply(this, arguments)
}

ct.gOUP = function () {
	return this.getObjectsUnderPoin.apply(this, arguments)
}
ct.soCh=ct.sort = function () {
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
 