ct_ch=function(){return this.children}
ct.sCI = ct.sChIx = function () {
	this.setChildIndex.apply(this, arguments);
	return this
}

ct.ch = ct.e = ct.each = ct.ix = function (fn, n) {var ct = this, g=G(arguments)
	
	
	//1) set a child's index
	if (N(g.s)) {
		ct.sChIx(g.f, g.s)
		return ct}
	var CH = []
	
	
	// get... array of all children..
	_.e(ct._ch(), function (ch) {
		CH.push(ch)
	})
	
	// 2)iterate a fn over them
	if (g.F) {
		_.e(CH, function (ch) {fn(ch, CH)})
		return ct
	}
	
	// 3) just return the children
	
	return CH
	
}


function toDOPt(){ 

dO.ix = function (n) {		var dO = this, g = G(arguments)
		if (g.u) {return}
		dO.parent.sChIx(dO, n)
		return dO
	}
}