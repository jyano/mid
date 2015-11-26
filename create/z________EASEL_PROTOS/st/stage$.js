st.N = p.next = function (next) {
	if (U(next)) {
		return this.nextStage
	}
	this.nextStage = next
	return this
}
 
st.eMO = function (ms) {var st = this, g = G(arguments)
	
	st.enableMouseOver(ms)
	return st
}

st.eDE = function ( ) {
	var st = this, g = G(arguments)
	st.enableDOMEvents.apply(st, arguments)
	return st
}
st.tk = function (ms) {
	var st = this, g = G(arguments)
	st.tk.apply(st, g)
	return st
}
st.du =st.tDU = function (ms) {
	var st = this,
	 g = G(arguments)
	// same as? return this.canvas.toDataURL()
	st.toDataURL.apply(st, g)
	return st
}
 

st.sTPE=function(){

	var st = this, g = G(arguments)
	
	if(g.u){return st.snapToPixelEnabled }
	st.snapToPixelEnabled = g.f? true: false
	return st
}

st.pS=st.prevSel = function () {
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
			mouseMoveOutside= g.f ? true : false
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
st.tOU= st.tkOUpd  =   function () {
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
	st.handleEvent= g.f  
	return st
}
st.cv =  function () {
	var st = this, g = G(arguments)
	if (g.u) {
		return st.canvas
	}
	st.canvas= g.f 
	return st
}


events=['drawend',
'drawstart',
'mouseenter',
'mouseleave',
'stagemousedown',
'stagemousemove',
'stagemouseup',
'tickend',
'tickstart']