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
s.W = function (a) {
	if (U(a)) {
		return this.canvas.width
	}
	this.canvas.width = a
	return this
}
s.H = function (a) {
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
s.abs = function (x, y) {
	this.can.abs(x, y)
	return this
}