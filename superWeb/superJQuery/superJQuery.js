$.fn.e = $.fn.ea = $.fn.each
$.fn.f = $.fn.fi = $.fn.find
$.fn.hd = $.fn.hide
$.fn.sh = $.fn.show
$.fn.gg = $.fn.toggle
$.fn.oh = function () {
	return this[0].outerHTML
}
$.fn.h = $.fn.ht = $.fn.html
$.fn.t = $.fn.tx = $.fn.text
$.fn.g = function (ix) {
	if (U(ix)) {
		return this[0]
	}
	return this.eq(ix)
}
$.fn.ch = function () {
	return this.children()
}
$.fn._ = $.fn.closest
$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
$.fn.sib = function () {
	var g = G(arguments);
	return this.sib.apply(this.g)
}
$.fn.N = $.fn.next
$.fn.r = $.fn.rm = $.fn.xx = function () {
	var e = this
	e.remove()
	return e
}
$.fn.fRm = function (a) {
	return this.fi(a).rm()
}
$.fn.E = function (html) {
	this.empty()
	if (S(html)) {
		this.h(html)
	}
	else {
		G(arguments).e(function (q) {
			this.A(q)
		})
	}
	return this
}
$.fn.rp + $.fn.replace
$.fn.A = function (stuff) {
	if (U(stuff)) {
		$('body').append(this);
		return this
	}
	this.append.apply(this, arguments)
	return this
}
$.fn.a2 = function (a) {
	a.A(this);
	return this
}
$.fn.pp = function (a) {
	this.pp(a);
	return this
}
$.fn.p2 = $.fn.pp2 = function (a) {
	this.prependTo(a);
	return this
}
$.fn.iB = $.fn.insertBefore
$.fn.iA = $.fn.insertAfter
$.fn.wr = $.fn.wrap
$.fn.at = $.fn.attr
$.fn.i = $.fn.sr = $.fn.src = function (a) {
	if (U(a)) {
		return this.attr('src')
	}
	this.attr('src', $.src(a))
	return this
}
$.fn.n = function (name) {
	if (U(name)) {
		return this.attr('name')
	}
	this.attr('name', name);
	return this
}
$.fn.ml = $.fn.mlt = function (m) {
	return this.at('multiple', true)
}
$.fn.ph = $.fn.placeholder = function (forWhat) {
	return this.attr('placeholder', forWhat)
}
$.fn.ck = $.fn.chk = function () {
	this.at('checked', true)
}
$.fn.ty = $.fn.type = function (type) {
	if (U(type)) {
		return this.attr('type')
	}
	this.attr('type', type);
	return this
}
$.fn.id = function (id) {
	if (U(id)) {
		return this.attr('id')
	}
	;
	this.attr('id', id);
	return this
}
$.fn.hr = $.fn.hf = $.fn.href = function (href) {
	if (U(href)) {
		return this.attr('href')
	}
	this.attr('href', href);
	return this
}
$.fn.fr = $.fn.for = function (forWhat) {
	return this.attr('for', forWhat)
}
$.fn.ro = $.fn.role = function (role) {
	if (U(role)) {
		return this.attr('role')
	}
	this.attr('role', role)
	return this
}
$.fn.v = $.fn.V = function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		if (g.n) {
			this.val('')
		}
		return v
	}
	this.val(newVal);
	return this
}
$.fn.tt = $.fn.ti = function (a) {
	this.at('title', a)
	return this
}
$.fn.d = $.fn.da = $.fn.data
