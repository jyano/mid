cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
cjs.bindScale = SC = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'), pm = oE('pm'), b2 = b2 || b,
			cp = function (n) {
				return n < .2 ? .2 : n > 2 ? 2 : n
			}
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY,
						sx = b2.scaleX,
						sy = b2.scaleY
				b.on(pm,
						function (e) {
							if (g.n) {
								b2.sXY(cp(sx + (
										(e.rawX - X) / 200)),
										cp(sy - ((e.rawX - X) / 200))
								)
							}
							else if (g.p) {
								cXY(b2, sx + ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
								cXY(b2, sy - ((e.rawY - Y) / 50)), sx + ((e.rawX - X) / 50)
							}
							else {
								b2.sXY(sx - ((e.rawX - X) / 50), sy - ((e.rawY - Y) / 50))
							}
						})
			}
	)
}
cjs.bindSkew = SK = function (b) {
	var g = G(arguments), b = g[0], b2 = g[1], d = oE('d'), pm = oE('pm'), b2 = b2 || b
	return b.on(d,
			function (e) {
				var X = e.rawX, Y = e.rawY
				b.on(pm, function (e) {
					b2.kXY(
							(e.rawY - Y) * .5, (e.rawX - X) * .5
					)
				})
			})
}
cjs.bindTransform = TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.bindSlide(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.bindScale(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.bindRotate(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}
cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1] || b
	cjs.SL(b);
	cjs.RT(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.KK = cjs.bindSlideAndRotate = KK = function (b, b2) {
	var g = G(arguments), b = g[0], b2 = g[1] || b
	cjs.SL(b);
	cjs.RT(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = RK = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.KK = cjs.bindSlideAndRotate = function (b, b2) {
	var g = G(arguments), b = g[0],
			b2 = g[1] || b
	cjs.bindSlide(b);
	cjs.bindRotate(b, b2)
	if (g.p) {
		b.rgc('+')
	}
	if (g.N) {
		//    reggy(b,b2)
	}
}
cjs.RK = cjs.bindRotateThenSkew = function (b, b2, m) {
	var g = G(arguments), b = g[0], b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b,
			m = g[2] || 'RT'
	//if(g.p){var s=St('y',1000)
	//    _t(b||5,function(i){s.a().bm(
	//        function(bm){bm.xy(i*50);TR(bm)})});return s}
	if (m == 'RT') {
		RT(b, b2);
		m = 'SK'
	}
	else if (m == 'SK') {
		SK(b, b2);
		m = 'RT'
	}
	return b.on(oE('pu'),
			function (e) {
				Do(b).O();
				RK(b, b2, m)
			})
}
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
DRAGST = GRADOVALS = function () {
	z()
	s = $.dragStage()
	h = s.h(40, 10, 'b', 16).drag()
	h.c({C: ['o', 5], lf: {c1: 'g', c2: 'r', x2: 100, y2: 400}}).de(100, 400)
	h.c({C: 'b', lf: {c1: 'g', c2: 'r', x2: 400, y2: 100}}).de(400, 100)
	h.l(30).lf({c1: 'b', c2: 'y', x1: 100, y1: 100, x2: 500, y2: 400}).de(100, 200, 500, 300)
	h.ls('r', 'w', 300, 100, 400, 140).de(300, 0, 300, 500)
}//B
function KEYCONTROLSOB() {
	ob.keyControls = function (num) {
		var args = G(arguments),
				that = this
		if (args.P) {
			$.kD('left', function () {
				that.toL(num)
			})
			$.kD('right', function () {
				that.toR(num)
			})
		}
		if (args.N) {
			$.kD('up', function () {
				that.toU(num)
			})
			$.kD('down', function () {
				that.toD(num)
			})
		}
	}
}
//advanced:
cjs.bulletHit = function (bullet, inWhat) {
	var x = bullet.centerX(),
			y = bullet.centerY()
	var res = Math.pointInCircle(x, y, {x: inWhat.x, y: inWhat.y, radius: inWhat.H() / 2})
	if (res == true) {
		$l('hit!')
	}
	return res
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.c(a, b, c)
	can2 = $.c('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
cjs.tripleStage = function (color, w, h) {
	var stage, can0, can1, can2
	can0 = $.can(color, w, h).P('a').XY(0, 0)
	can1 = $.can('X', w, h).P('a').XY(0, 0)
	can2 = $.can('X', w, h).P('a').XY(0, 0)//.opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.back = new cjs.Stage(can0[0]).tick()
	stage.back.linGrad = function (col1, col2) {
		col1 = oO('c', col1 || 'b');
		col2 = oO('c', col2 || 'r')
		var h = this.H(), w = this.W()
		this.shape.linGrad([col1, col2], [0, 1], 0, 0, 0, h).dr(0, 0, w, h)
	}
	stage.back.shape = stage.back.shape(0, 0, 'w')
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}