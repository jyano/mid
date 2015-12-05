$.can = $.canvas = $.cv = $.c = $.c2 = function (c, width, h, x, y) {
	var g = G(arguments), o, q
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	q = $('<canvas>')
	q.attr({width: o.w, height: o.h})
	//o.c = o.c || 'x'
	if (o.c) {
		q.C(o.c)
	}
	if (N(o.x)) {
		q.abs(o.x, o.y)
	}
	if (g.p) {
		q.dg()
	}
	return q.id('canvas').k('canvas can').al(.8)
}
$.cv0 = function () {
	return $.c2.apply($, arguments)[0]
}
 