$.cx = function () {
	return $.c.apply($, arguments).cx()
}

$.fn.ctx = function () {
	return this[0].getContext('2d')
}
 