$.fn.fl = function () {
	this.css('display', 'flex')
	return this
}
$.fn.$J = function (a) {
	this.css('justify-content', a)
	return this
}
$.fn.$I = function (a) {
	this.css('align-items', a)
	return this
}
$.fn.$C = function (a) {
	this.css('align-content', a)
	return this
}