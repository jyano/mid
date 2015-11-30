__C = function () {
	z();
	c = $.c('y').drag()
	x = c.ctx()
	return c
}
$.fn.drag = $.fn.drag || function () {
	return this
}
$.tEl = function (a, b, c) {
	if (O(a)) {
		a = O(a.e) ? a.e : O(a.c) ? a.c : a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
$.tC = $.tCan = function (a) {
	if (_.isObject(a = $.tEl(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas') ? Q(a)[0] : 0
	}
}
$.iC = $.isCan = function (can) {
	if (O(can)) {
		return $(can)[0].constructor.name == "HTMLCanvasElement"
	}
}
$.fit = function (a, b, c) {
	return $.c(c || 'r', b || 700, b || 700).A()
			.fit(a || 'me')
}
$.fn.Cv = $.fn.Can = function () {
	var c
	c = $.c.apply($, G(arguments))
	this.A(c)
	return c
}
$.c = $.can = function (c, width, h, x, y) {
	var g = G(arguments), o, el
	o = g.S_ ?
	{c: g.f, w: g.s, h: g.t, x: g[3], y: g[4]} :
	{w: g.f, h: g.s, x: g.t, y: g[3]}
	o.w = o.w || 1200
	o.h = o.h || 600
	o.c = o.c || 'x'
	el = $('<canvas>')
	el.attr({width: o.w, height: o.h})
	el.C(o.c)
	if (N(o.x)) {
		el.abs(o.x, o.y)
	}
	if (g.p) {
		el.drag()
	}
	el.A().al(.8)
	return superCanvas(el)
}
function superCanvas(el) {
	el = $(el)
	//to be called internally by $.c //works on FIRST canvas in jquery obj
	el.canvas = el[0]
	el.context = el.canvas.getContext('2d')
	if (O(window['cjs'])) {
		el.stage = new cjs.Stage(el.canvas) ///////////////////////////////
	}
	_superCanvas(el)
	return el
}