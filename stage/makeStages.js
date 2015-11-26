$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
__S = function () {
	var g = G(arguments)
	st = stage = new cjs.Stage($.cv(980, 640).A()[0]);
	if (g.p) {
		st.b('me')
	}
	T.setFPS(24);
	T.on("tick", st);
	lib = {}
	images = img = {}
	loader = new cjs.LoadQueue(false);
	return st
}
__St = function () {
	st = $St(2000, 1000);
	h = st.h()//.drag()
	cjs.SL(h)
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	];
	vs2 = [
		[131, 84],
		[224, 110],
		[174, 180],
		[120, 136],
		[60, 167],
	];
	p1 = $pD(vs1);
	p2 = $pD(vs2)
}

