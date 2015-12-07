Ms$ = function (ms) {
	$.h1(ms)
}
$Ms = function (ms) {
	return $.d().fS(80).C($r()).col($r()).A(ms)
};
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
$Ms = function (ms) {
	$.h1(ms)
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$MS = function (ms, cHeader, cBody) {
	z()
	var m = $Ms(ms)
	if (S(cHeader)) {
		m.C(cHeader)
	}
	if (S(cBody)) {
		$.C(cBody)
	}
	return $
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
$.rulers = function () {
	$.d('b', 100, 100).al(.3).dg()
	$.d('r', 100, 300).al(.3).dg()
}
$.dg = $.dragFrame = function (d) {
	var oD
	oD = $.d('y').pad(20).drag()
	d = d || $.d('r').mar(20)
	d.xPrp().a2(oD)
	d.oD = oD
	oD.XY(40, 40)
	return oD
}
$.x = function (c, t) {
	var g = G(arguments), bd = $.bd()
	bd.empty()
	if (g.O_) {
		$CSS(g.f)
		if (g.s) {
			$.h1(g.s);
			$.hr().A()
		}
		bd.C(g.t || $r())
	}
	else {
		bd.C(c || $r())
		if (t) {
			bd.A($.h1(t))
		}
	}
	if (g.p) {
		bd.A($.hr())
	}
	return $
}
$.h = function () {
	var g = G(arguments), o
	bd = $.bd()
	bd.empty()
	bd.C($r())
	o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
	if (o.s) {
		$CSS(o.s)
	}
	if (o.t) {
		$.h1(o.t);
		$.hr().A()
	}
	return $
}
$.s = function (css, c, tx) {
	$CSS(css)
	$.x(c, tx)
	return $
}
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
z = function (fn) {
	$('body').empty()
}