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