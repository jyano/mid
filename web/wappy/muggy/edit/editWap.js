EDIT0 = function () {
	stage = St(800)
	var imgHolder = $div()
	CT(imgHolder, stage).o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return stage
}
EDIT1 = function () {
	stage = St(800)
	var imgHolder = $div()
	container = CT(imgHolder, stage)
	container.o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.canvas('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
}
PROPBOX = function () {
	var imagesDiv = $div()
	dA = $divA('y', 200)(
			$span('prop box'),
			$hr(),
			$span('selected cutout:')
	)
	stage = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							stage.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable stage problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return stage
}
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}

EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
sav = function (st, a) {
	return function () {
		st.sv(a)
	}
}
EDIT0 = function () {
	St()
	var imgHolder = $.d()
	CT(imgHolder, st).$$(sav(st, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return st
}
EDIT1 = function () {
	St()
	var imgHolder = $.d()
	ct = CT(imgHolder, stage)
	ct.$$(sav(st, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.c('X', 100, 100).fit(img.d).$(function () {
					st.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
}
PROPBOX = function () {
	var imagesDiv = $div()
	dA = $divA('y', 200)(
			$span('prop box'),
			$hr(),
			$span('selected cutout:')
	)
	stage = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							stage.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable stage problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return stage
}
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					
					
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}
EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
  
 
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		createjs.Tween.removeAllTweens()
		bitmap = bm
		scaleShake(bm.dO)
	})
} 
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.t(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
}
TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}
SHOWCASE = function () {
	$.fm()
	s2($.sp().id('pics'))
	s2(x = $Cx('y', 500, 500))
	x.q.cen()
	eaI(function (v) {
		$('#pics')(
				$Cx(v.d, 1, function () {
					x.X();
					x.f(v.d)
					url$ = v.d
				}))
	})
	s2($.br(2), $.lb('caption'),
			cap$ = tx().w(500))
	s1(
			$.br(2),
			$.lb('category'),
			cat$ = tx().w(200), $.br(2),
			$.bt('post', function () {
				o = {
					t: cat$.V(),
					c: cap$.V(),
					du: url$
				}
				$.P('/pst', o, function () {
					$.pop('posted')
				})
			}), $.br(2),
			$.bt('make a showcase', function () {
			}), $.br(2),
			$.bt('submit to ranky', function () {
			}), $.br(2)
	)
}
eachImage = eaI = function (f) {
	$.getJSON('/img',
			function (i) {
				_.each(i, f)
			})
}
sav = function (stage, a) {
	return function () {
		stage.sv(a)
	}
}
EDIT0 = function () {
	stage = St(800)
	var imgHolder = $div()
	CT(imgHolder, stage).o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return stage
}
EDIT1 = function () {
	stage = St(800)
	var imgHolder = $div()
	container = CT(imgHolder, stage)
	container.o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.canvas('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
}
PROPBOX = function () {
	var imagesDiv = $div()
	dA = $divA('y', 200)(
			$span('prop box'),
			$hr(),
			$span('selected cutout:')
	)
	stage = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							stage.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable stage problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return stage
}
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}
EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}
testStage = function () {
	z()
	stage = createjs.stage(800).tick().A()
	stage.mug(function () {
	}, stage)
	// stage.bm('/me.png')
}
PAINT = function () {
	_paintColor = 'blue'
	_paintSize = 10
	canvas = $.canvas('r', 400, 400).A().P('a', 100, 50)
	stage = canvas.stage.tick()
	shape = new createjs.Shape()
	stage.mug(function (mug) {
		mug.sXY(.4)
		stage.A(shape)
	})
	graphics = shape.graphics
	graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
			.setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
	stage.on('stagemousedown', function (e) {
		graphics.beginStroke(_paintColor)
		stage.on('stagemousemove', function (e) {
			graphics.lineTo(e.stageX, e.stageY)
		})
	})
	stage.on('stagemouseup', function () {
		stage.removeAllEventListeners('stagemousemove')
	})
	div = $.div().K('controls').appendTo($('body'))
	colorPicker = $(' <input   type="color">')
	div.A(colorPicker, $.span(10), $.span(20), $.span(30))
	colorPicker.on('input', function () {
		$l('input ')
		_paintColor = $l(colorPicker.val())
		graphics.beginStroke(_paintColor)
	})
	$('.controls span').click(function () {
		graphics.setStrokeStyle(parseInt($(this).text()))
	})
}
  
rotateShake = function (bm) {
	EaselTween([bm, 'l'], {r: 0}, [{r: 1}, 1], [{r: -1}, 1])
}
scaleShake = function (bm) {
	EaselTween([bm, 'l'], {sxy: 1}, [{sxy: .95}, 1], [{sxy: 1.05}, 1])
}
selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		createjs.Tween.removeAllTweens()
		bitmap = bm
		scaleShake(bm.dO)
	})
} 
INDEXX = function () {
	z()
	s = dragStage().bm('me', function (bm) {
		b = bm
		SL(b)
		_.times(10, function () {
			s.bm('guy', SL)
		})
		s.ix(b, 3)
	})
}
FILTERS1 = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(
			function (b) {
				b.XY(-100, -50)
				b.cc()
				b.clMF('a', '+')
				b.clMF('w', '+')
				createjs.bindSlide(b)
			})
	wMb(function (b) {
		b.xy(400, 0).cc()
		SL(b)
		b.fl([aMF(Gx().lf(trx(1, 0), [0, 1], 0, 0, 300, 300)
				.dr0(400).H().cc(400).cc('*'))
		]).cc(400)
	}, s)
	wMb(function (b) {
		b.xy(100, 300).cc();
		SL(b)
		b.cc().fl([clF(.3, 1, .3, 1, 0, 0, 0, 0)]).cc('+')
	}, s)
	wMb(function (b) {
		var ag = 0, rg = 20, sp = 0.04;
		b.xy(500, 300).cc();
		SL(b)
		//this has gotta just mean 'on tick'
		tt(function (e) {
			v = sin(ag += sp) * rg;
			b.cc('+').fl([blF(v, v, 2)])
		})
	}, s)
}
FILTERS = function () {
	s = $.canvas(1000).A().stage.tick()
	s.mug(function (b) {
		bb = b
		b.XY(-100, -50)
		b.cache(0, 0, b.W(), b.H())
		cM = new createjs.ColorMatrix()
		cM.adjustHue(-180)
		cM.adjustSaturation(100)
		cM.adjustBrightness(300)
		cM.adjustContrast(-600)
		b.filters = cM
		b.updateCache()
		createjs.bindSlide(b)
	})
}
TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}
SHOWCASE = function () {
	format()
	s2($span().id('pics'))
	s2(x = cx('y', 500, 500))
	x.q.cen()
	eaI(function (v) {
		qi('pics')(xc(v.d, 1, function () {
			x.X();
			x.f(v.d)
			url$ = v.d
		}))
	})
	s2($.br(2), lb('caption'),
			cap$ = tx().w(500))
	s1(
			$.br(2),
			lb('category'),
			cat$ = tx().w(200), $.br(2),
			bt('post', function () {
				o = {
					t: cat$.V(),
					c: cap$.V(),
					du: url$
				}
				qP('/pst', o, function () {
					pop('posted')
				})
			}), $.br(2),
			bt('make a showcase', function () {
			}), $.br(2),
			bt('submit to ranky', function () {
			}), $.br(2)
	)
}

