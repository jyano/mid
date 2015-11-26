$.i = $.img = function () {
	var g = G(arguments), o, i = new Image(), $i = $(i);
	o = F(g.f) ? {fn: g.f} : O(g.f) ? g.f : {sr: g.f, fn: g.s};
	if (o.fn) {
		$i.load(_.b(function (e) {
			o.fn(e.target, e)
		}, $i))
	}
	if (o.sr) {
		$i.sr(o.sr)
	}
	return $i
}