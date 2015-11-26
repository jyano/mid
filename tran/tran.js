cjs.bindSlide = SL = function () {
	var g = G(arguments),
			b = g[0],
			b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX,
						by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (g.P) {
						b2.x = bx + e.rawX
					}
					//if (g.N) {
					b2.y = by + e.rawY
					//}
				})
			})
}
cjs.LS = cjs.bindReverseSlide = function (b, b2) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b
	return b.on(d, function (e) {
		var bx = b2.x + e.rawX, by = b2.y + e.rawY
		b.on(pm, function (e) {
			if (g.P) {
				b2.x = bx - e.rawX
			}
			if (g.N) {
				b2.y = by - e.rawY
			}
		})
	})
}
cjs.reggy = function (o, s) {
	s = s || o.parent
	s.bm('me', function (b) {
		b.W(40).H(40)
		I(function () {
			b.XY(o.x + o.regX, o.y + o.regY)
		}, 100)
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
cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
	var g = G(arguments),
			b = g[0],
			b2 = g[1],
			d = oE('d'),
			pm = oE('pm'),
			b2 = b2 || b
	return b.on(d, function (e) {
		var bx = b2.x + e.rawX, by = b2.y + e.rawY
		b.on(pm, function (e) {
			if (g.P) {
				b2.x = bx - e.rawX
			}
			if (g.N) {
				b2.y = by - e.rawY
			}
		})
	})
}
cjs.RT = cjs.bindRotate = RT = function (b, b2) {
	//b = what the control is
	//b2 what it should control (default = itself!)
	//if(g.p){  //b.rgc( '+' )   }
	var g = G(arguments), b = g[0], b2 = g[1] || b
	return b.on('mousedown', function (e) {
		var X = e.rawX, Y = e.rawY, r = b2.rotation
		b.on('pressmove', function (e) {
			b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
		})
	})
}
cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
	
	
	//b = what the control is
	//b2 what it should control (default = itself!)
	var g = G(arguments), b = g[0], b2 = g[1] || b
	if (g.p) {  // b.rgc( '+' )
	}
	return b.on('mousedown',
			function (e) {
				var X = e.rawX, Y = e.rawY, r = b2.rotation
				b.on('pressmove', function (e) {
					b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
				})
			})
}
cjs.SC = cjs.bindScale = SC = function (b, b2) {
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
cjs.SK = cjs.bindSkew = SK = function (b) {
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
cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.SL(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.SC(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.RT(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}
i.rX = function () {
	var i = this, g = G(arguments), rX = g[0]
	if (U(rX)) {
		return i.regX
	}
	i.regX = g.p ? i.regX + rX : rX
	return i
}
i.rY = function () {
	var i = this, g = G(arguments), rY = g[0]
	if (g.p) {
		i.Y(i.y + (rY - i.regY))
	}
	if (U(rY)) {
		return i.regY
	}
	i.regY = rY
	return i
}
i.rXY = function () {
	var i = this, g = G(arguments),
			x = N(g.f, 0),
			y = N(g.s, x)
	return i.rX(x).rY(y)
}
i.rC = function () {
	var i = this, g = G(arguments), x, y, hW, hH
	x = i.W() / 2
	hW = x
	y = i.H() / 2
	hH = y
	return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
			i.rXY(hW, hH)
}
i.RT = function () {
	var i = this;
	cjs.RT(i);
	return i
}
i.grow = function () {
	$Tw(this, [{sxy: 10}, 10000]);
	return this
}
i.TR = function () {
	cjs.TR(this);
	return this
}
cjs.SL = function (b, b2) {
	var g = G(arguments),
			b = g[0], b2 = g[1] || b
	return b.on('mousedown',
			function (e) {
				var bx = b2.x - e.rawX, by = b2.y - e.rawY
				b.on('pressmove', function (e) {
					if (!g.p) {
						b2.x = bx + e.rawX
					}
					if (!g.n) {
						b2.y = by + e.rawY
					}
				})
			}
	)
}
cjs.SC = function (b, b2) {
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
cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
	var g = G(arguments), b = g[0], b2 = g[1] || b
	if (g.p) {
		alert('g.p')
		b.rgc('+')
	}
	return b.on('mousedown', function (e) {
		var X = e.rawX, Y = e.rawY, r = b2.rotation
		b.on('pressmove', function (e) {
			b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
		})
	})
}
cjs.TR = function TR(b, b2, m) {
	var g = G(arguments),
			b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
	if (m == 'SL') {
		cjs.SL(b, b2);
		m = 'SC'
	}
	else if (m == 'SC') {
		cjs.SC(b, b2);
		m = 'RT'
	}
	else if (m == 'RT') {
		cjs.RT(b, b2);
		m = 'SL'
	}
	return b.on('pressup', function (e) {
		b.removeAllEventListeners();
		TR(b, b2, m)
	})
}
cjs.reggy = reggy = function (o, s) {
	s = s || o.parent
	s.bm('me', function (b) {
		b.W(40).H(40)
		I(function () {
			b.XY(o.x + o.regX, o.y + o.regY)
		}, 100)
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
testImgRegCenter = function () {
	mockStage()
	s.bm('me', function (bm) {
		b1 = bm
		bm.spin().drag()
	})
	s.bm('me', function (bm) {
		b2 = bm
		bm.sXY(0.5, 0.3).spin().drag()
	})
	s.A(c = cjs.circle(4).XY(200))
}
cjs.rtSh = cjs.rotateShake = function (bm) {
	$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
cjs.scSh = cjs.scaleShake = function (bm) {
	$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
i.grow = function () {
	$Tw(this, [{sxy: 10}, 10000]);
	return this
}
i.RT = function () {
	RT(this);
	return this
}
i.TR = function () {
	TR(this);
	return this
}
i.dg = i.drag = i.SL = function () {
	cjs.SL(this);
	return this
}
function tran() {
	cjs.bindSlide = SL = function () {
		var g = G(arguments),
				b = g[0],
				b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var bx = b2.x - e.rawX,
							by = b2.y - e.rawY
					b.on('pressmove', function (e) {
						if (g.P) {
							b2.x = bx + e.rawX
						}
						//if (g.N) {
						b2.y = by + e.rawY
						//}
					})
				})
	}
	cjs.LS = cjs.bindReverseSlide = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			b.on(pm, function (e) {
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
			})
		})
	}
	cjs.reggy = function (o, s) {
		s = s || o.parent
		s.bm('me', function (b) {
			b.W(40).H(40)
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
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
	cjs.LS = cjs.bindReverseSlide = LS = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			b.on(pm, function (e) {
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
			})
		})
	}
	cjs.RT = cjs.bindRotate = RT = function (b, b2) {
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g = G(arguments), b = g[0], b2 = g[1] || b
		return b.on('mousedown', function (e) {
			var X = e.rawX, Y = e.rawY, r = b2.rotation
			b.on('pressmove', function (e) {
				b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
			})
		})
	}
	cjs.RT2 = cjs.bindRotate2 = RTT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {  // b.rgc( '+' )
		}
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
					})
				})
	}
	cjs.SC = cjs.bindScale = SC = function (b, b2) {
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
	cjs.SK = cjs.bindSkew = SK = function (b) {
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
	cjs.TR = cjs.bindTransform = TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.SL(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.SC(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.RT(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	i.rX = function () {
		var i = this, g = G(arguments), rX = g[0]
		if (U(rX)) {
			return i.regX
		}
		i.regX = g.p ? i.regX + rX : rX
		return i
	}
	i.rY = function () {
		var i = this, g = G(arguments), rY = g[0]
		if (g.p) {
			i.Y(i.y + (rY - i.regY))
		}
		if (U(rY)) {
			return i.regY
		}
		i.regY = rY
		return i
	}
	i.rXY = function () {
		var i = this, g = G(arguments),
				x = N(g.f, 0),
				y = N(g.s, x)
		return i.rX(x).rY(y)
	}
	i.rC = function () {
		var i = this, g = G(arguments), x, y, hW, hH
		x = i.W() / 2
		hW = x
		y = i.H() / 2
		hH = y
		return (g.p) ? i.rX(hW, '+').rY(hH, '+') :
				i.rXY(hW, hH)
	}
	i.RT = function () {
		var i = this;
		cjs.RT(i);
		return i
	}
	i.grow = function () {
		$Tw(this, [{sxy: 10}, 10000]);
		return this
	}
	i.TR = function () {
		cjs.TR(this);
		return this
	}
	cjs.SL = function (b, b2) {
		var g = G(arguments),
				b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var bx = b2.x - e.rawX, by = b2.y - e.rawY
					b.on('pressmove', function (e) {
						if (!g.p) {
							b2.x = bx + e.rawX
						}
						if (!g.n) {
							b2.y = by + e.rawY
						}
					})
				}
		)
	}
	cjs.SC = function (b, b2) {
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
	cjs.RT = function (b, b2) {//b = what the control is //b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {
			alert('g.p')
			b.rgc('+')
		}
		return b.on('mousedown', function (e) {
			var X = e.rawX, Y = e.rawY, r = b2.rotation
			b.on('pressmove', function (e) {
				b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
			})
		})
	}
	cjs.TR = function TR(b, b2, m) {
		var g = G(arguments),
				b = g[0], b2 = g[1], b2 = b2 || b, m = g[2] || 'SL'
		if (m == 'SL') {
			cjs.SL(b, b2);
			m = 'SC'
		}
		else if (m == 'SC') {
			cjs.SC(b, b2);
			m = 'RT'
		}
		else if (m == 'RT') {
			cjs.RT(b, b2);
			m = 'SL'
		}
		return b.on('pressup', function (e) {
			b.removeAllEventListeners();
			TR(b, b2, m)
		})
	}
	cjs.reggy = reggy = function (o, s) {
		s = s || o.parent
		s.bm('me', function (b) {
			b.W(40).H(40)
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
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
	testImgRegCenter = function () {
		mockStage()
		s.bm('me', function (bm) {
			b1 = bm
			bm.spin().drag()
		})
		s.bm('me', function (bm) {
			b2 = bm
			bm.sXY(0.5, 0.3).spin().drag()
		})
		s.A(c = cjs.circle(4).XY(200))
	}
	cjs.rtSh = cjs.rotateShake = function (bm) {
		$Tw([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
	}
	cjs.scSh = cjs.scaleShake = function (bm) {
		$Tw([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
	}
	i.grow = function () {
		$Tw(this, [{sxy: 10}, 10000]);
		return this
	}
	i.RT = function () {
		RT(this);
		return this
	}
	i.TR = function () {
		TR(this);
		return this
	}
	i.dg = i.drag = i.SL = function () {
		cjs.SL(this);
		return this
	}
}
function dOTran() {
	ob.RT = function () {
		RT(this);
		return this
	}
	ob.RT = function () {
		RT(this);
		return this
	}
	ob.RT = function () {
		RT(this);
		return this
	}
}
function tran() {
	cjs.bindSlide = SL = function (b, b2) {
		var g = G(arguments),
				b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var bx = b2.x - e.rawX, by = b2.y - e.rawY
					b.on('pressmove', function (e) {
						if (g.P) {
							b2.x = bx + e.rawX
						}
						if (g.N) {
							b2.y = by + e.rawY
						}
					})
				}
		)
	}
	cjs.bindReverseSlide = LS = function (b, b2) {
		var g = G(arguments),
				b = g[0],
				b2 = g[1],
				d = oE('d'),
				pm = oE('pm'),
				b2 = b2 || b
		return b.on(d, function (e) {
			var bx = b2.x + e.rawX, by = b2.y + e.rawY
			b.on(pm, function (e) {
				if (g.P) {
					b2.x = bx - e.rawX
				}
				if (g.N) {
					b2.y = by - e.rawY
				}
			})
		})
	}
	cjs.bindRotate = RT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		//if(g.p){  //b.rgc( '+' )   }
		var g = G(arguments), b = g[0], b2 = g[1] || b
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r - (   (e.rawY - Y) / 500   ) - (   e.rawX - X  )
					})
				})
	}
	cjs.bindRotate2 = RTT = function (b, b2) {
		
		
		//b = what the control is
		//b2 what it should control (default = itself!)
		var g = G(arguments), b = g[0], b2 = g[1] || b
		if (g.p) {  // b.rgc( '+' )
		}
		return b.on('mousedown',
				function (e) {
					var X = e.rawX, Y = e.rawY, r = b2.rotation
					b.on('pressmove', function (e) {
						b2.rotation = r + (   (e.rawY - Y) / 500   ) + (   e.rawX - X  )
					})
				})
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
	cjs.reggy = reggy = function (o, s) {
		s = s || o.parent
		s.bm('me', function (b) {
			b.W(40).H(40)
			I(function () {
				b.XY(o.x + o.regX, o.y + o.regY)
			}, 100)
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
}