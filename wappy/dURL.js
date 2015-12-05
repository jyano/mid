Y.uPop = function (i, size) {
	i = (O(i) && F(i.u)) ? i.u() : i
	size = size || 300
	return $.c().WH(size, size).fit(i)
}
Y.dUD = function (d, n) {
	$.P('getImageById', {data: d}, function (u) {
		upop(u, n)
	})
} //sk-send du of your (first) can-el
Y.dU = function () {
	var u
	c = $.c().fit('me')
	u = c.toDataURL()
	k.emit('du', u);
	return u
}
