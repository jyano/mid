t.T = function (text) {
	if (U(text)) {
		return this.text
	}
	this.text = text
	return this
}

t.mW = t.measW = tx.measuredW = function () {
	return this.getMeasuredWidth()
}
 