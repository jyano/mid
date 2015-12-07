function balls() {
	s.cannonBall = function (x, y) {
		var s = this, h
		h = s.h(x, y)
		h.rf('a', 'z', 18).dc(18).ef()
		return h
	}
	s.basketBall = function (x, y) {
		var s = this
		return this.h(x, y).rf('w', 'o', 18).dc(18).ef()
	}
	s.beachBall = function (x, y) {
		var s = this
		return s.h(x, y)
				.rf('b', 'r', 18).dc(18).ef()
	}
	s.snowBall = function (x, y) {
		var s = this
		return s.h(x, y).rf('a', 'w', 18).dc(18).ef()
	}
	PIT = BALLPIT = function () {
		$W();
		_.ev(.04, function () {
			w.s.xT(w.s.t(function () {
				if (R(5) < 3) {
					w.ball(20)
				}
			}))
		})
	}//B+
	COOLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 50).$h('x', 'X', 1)
						.c('x', 'X', 1)
						.bf('sun', [0, .9, 1, 1, -40, 2])
						.cir(50)
			})
		})
	}//B
	CLICKME = BMBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, 'CLICK me')
		})
	}
	HULA = HULAHOOPS = HAIR = HAIRBALLS = function () {
		W(400, 400)._(function () {
			
			//cjs.rulers()
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 10)
				b.$h('x', 'x', 1189).c('x', 'x', 200)
						.bf('sun', [0, .6, 10, 10, -40, 200])
						.cir(10)
				// <- b.C({c:'x', al:.4} )
			})
			$.d('b', 100, 100, 100, 100).drag()
		})
	}
	STATUSBALL = ILLUSION = GRADTWEEN = function () {
		W({grav: 0})
		b = w.S(500, 300, 'r', 60)
				.bS(w.s.h(500, 300))
		num = 0
		dif = .1
		shape = b.sp()//b.sprite
		shape.rf(['r', 'y'], [0, num],
				0, 0, 0, 0, 0, 60)
				.dc(0, 0, 60)
		_.ev(.1, function () {
			num += dif
			if (num >= 1) {
				num = .9;
				dif = -.1
			}
			if (num <= 0) {
				dif = .1
			}
			shape.rf(['r', 'y'], [0, num],
					0, 0, 0, 0, 0, 60)
					.dc(0, 0, 60)
		})
	}//D- needs PLAY
	BADBALL = function () {
		W({g: 0})
		w.badGuy(500, 300)
		b = w.D(500, 300, 'r', 60)
		b.bS(
				w.s.h(500, 300)
		)
		b.draw = function (frame) {
			var b = this
			b.sp().rf(
					['r', 'y'], [frame[0], frame[1]],
					0, 0, 0, 0, 0, 60).dc(60)
		}
		frames = [[0, .1], [0, .3], [0, .6], [0, .9], [0, 1], [.3, 1], [.6, 1], [.9, 1], [1, 1]]
		curr = 0
		_.ev(1, function () {
			b.draw(frames [curr])
			curr++
			if (curr == 9) {
				curr = 0
			}
		})
	}//D+ needs PLAY
	CHICKBALLS = function () {
		W(1200, 1200)._(function () {
			_.t(14, function () {
				w.D(R(1100, 50), R(1100, 50))
						.cir({bf: 'chicks', r: 120})
			})
		})
	}
	HAIRBALLS = function () {
		W(400, 400)._(function () {
			
			//cjs.rulers()
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 10)
				b.$h('x', 'x', 1189).c('x', 'x', 200)
						.bf('sun', [0, .6, 10, 10, -40, 200])
						.cir(10)
				// <- b.C({c:'x', al:.4} )
			})
			$.d('b', 100, 100, 100, 100).drag()
		})
	}
	COOLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 50)
				b.$h('x', 'X', 1)
						.c('x', 'X', 1)
						.bf('sun', [0, .9, 1, 1, -40, 2])
						.cir(50)
			})
		})
	}
	CANVASBMFILLBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}
	CANTFBALLS2 = function () {
		W([400, 400], {w: 'U'}).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			$.ev(3, function () {
				var b = w.D(200, 200, 'b', 80)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(
						w.s.cv0,
						cjs.m2d(
								.6, .1, .1, .6, -40, 180
						)
				).cir(80)
			})
		})
	}
	TEXTBALLS = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
}

function grad() {
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.m(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lG = h.linGrad = function () {
		var args = _.toArray(arguments)
		args[0] = _.map(args[0], function (col) {
			return oO('c', col)
		})
		this.graphics.beginLinearGradientFill.apply(
				this.graphics, args)
		return this
	}
	h.lf = function () {
		var h = this, gx = h.graphics, g = G(arguments), o
		o = cjs.lg(g)
		gx.lf([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.ls = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.lg.apply(h, g)
		gx.ls([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.x2, o.y2)
		return h
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rG = h.radGrad = function (cols, ratios, x1, y1, r1, x2, y2, r2) {
		var args = _.toArray(arguments), circs, len
		cols = _.map(cols,
				function (col) {
					return oO('c', col)
				})
		circs = _.rest([1, 2, 3, 4, 5], 2)
		len = circs.len  //use switch!
		x1 = 0;
		y1 = 0;
		r1 = 0;
		x2 = 0;
		y2 = 0;
		r2 = 50
		if (len == 1) {
			r2 = circs[0]
		}
		else if (len == 2) {
			r1 = circs[0];
			r2 = circs[1]
		}
		else if (len == 3) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r2 = circs[2]
		}
		else if (len == 4) {
			x1 = x2 = circs[0]
			y1 = y1 = circs[1]
			r1 = circs[2]
			r2 = circs[3]
		}
		else if (len == 5) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r2 = circs[4]
		}
		else if (len == 6) {
			x1 = circs[0];
			y1 = circs[1];
			x2 = circs[2];
			y2 = circs[3]
			r1 = circs[4];
			r2 = circs[5]
		}
		this.graphics.beginRadialGradientFill(cols, ratios, x1, y1, r1, x2, y2, r2)
		return this
	}
	h.rg = function (o) {
		var h = this, g = G(arguments),
				gx = h.graphics,
				o
		if (A(g[0]) && A(g[1])) {
			gx.rf(
					[oO('c', g[0][0]), oO('c', g[0][1])], g[1], g[2], g[3], g[4], g[5], g[6], g[7]
			)
			return h
		}
		o = O(g[0]) ? g[0] :
				S(g[1]) ? _.x({c1: g[0], c2: g[1]},
						N(g[7]) ?
						{x1: g[2], y1: g[3], r1: g[4], x2: g[5], y2: g[6], r2: g[7]}
								: N(g[5]) ?
						{x2: g[2], y2: g[3], r1: g[4], r2: g[5]}
								: N(g[4]) ?
						{x2: g[2], r1: g[3], r2: g[4]}
								: N(g[3]) ?
						{r1: g[2], r2: g[3]}
								:
						{r2: g[2]})
						: S(g[0]) ?
				{c2: g[0]}
						: {}
		$df.grad(o)
		o.x2 = N(o.x2, o.x1)
		o.y2 = N(o.y2, o.y1)
		o.r1 = N(o.r1, 1);
		o.r2 = N(o.r2, 100)
		return o
	}
	h.rf = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rf(
				[o.c1, o.c2],
				[o.s1, o.s2],
				o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
	h.rs = function me() {
		var h = this, gx = h.graphics, g = G(arguments), o
		if (A(g[0])) {
			return me.apply(h, g[0])
		}
		o = h.rg.apply(h, g)
		gx.rs([o.c1, o.c2], [o.s1, o.s2], o.x1, o.y1, o.r1, o.x2, o.y2, o.r2)
		return h
	}
}
function filts() { 
}