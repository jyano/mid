$mug = function (un, fn) {
	
	//make default un YOU (_username)
	$.g('/mugByUsername/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}


$.mug = $.myMug = function (fn) {$.g('myMug', fn) }


ct.mug = function () {

	var ct = this, g = G(arguments), o
	o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
	o.sc = N(o.sc) ? o.sc : 1
	o.fn = o.fn || function () {
	}
	
	$.myMug(function (m) {
		ct.bm(m, o.sc, o.fn)
	})
	
	return ct
}
