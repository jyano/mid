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
 