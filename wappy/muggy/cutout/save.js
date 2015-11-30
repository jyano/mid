sv = function (x, func) {
	$.post('/img', {
		d: xx(C(x)).u(),
		dats: x.dats
	}, func)
}