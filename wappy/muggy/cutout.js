sv = function (x, fn) {
	$.po('/img', {
		d: xx(C(x)).u(), dats: x.dats
	}, fn)
}
cut = function (m) {
	$.format()
	// x =   xx(  $.canvas().id('can').W(100).H(100)  ).bc('w').Z(7).fit(m||'me')
	x = $.c('r', 500, 500).A().fit(m || 'me')
	// x.dots()
	// x.copy()
	s1.A($.bt('save sprite', function () {
				x.snap()
				//fresh()
				EDIT()
			}),
			$.br(2),
			$.bt('start cut', function () {
				//x.copy()
				x.dots()
			}),
			$.br(2),
			$.bt('restart cut', function () {
				cut(m)
			}), $.br(2),
			$.bt('file uploads',
					function () {
						window.location = '/wap/uploads'
					}
			))
	s2.A(
			$.h2('click to start cut-out..'), x
			
			//   , dv('o',500,200).pp()(x)
	)
}
CUTOUTS = function () {
	$.fm()
	
	
	section1.A(
	
			$.h4('click a pic to select it as your mug, or the x to delete it'))

	
	$.getJSON('/img', function (cutouts) {
	
		var top = 80
		_.e(cutouts, function (cutout) {
			var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
			imgDiv.A(
					$.img(cutout.d).WH(100).$(function (q) {
					//	$l('changemug')
						$l(cutout.d)
						
						$.po('/changeMug', {
							url: cutout.d
						})
						
						
						////
						$('.pic').ea(function (index) {
							$(this).C('b')
						})
						
						$(this).parent().C('y')
					}),
					
					$.bt('X', function () {
					
						var that = this
					
						$.ajax({
							data: cutout,
							url: '/img',
							type: 'DELETE',
							success: function (res) {
								$(that).parent().remove()
							}
						})
					})
			)
			top += 220
		})
	})
}
selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		cjs.Tween.removeAllTweens()
		bm = bm
		scaleShake(bm.dO)
	})
}

SELECTED = function () {
	st = $dragStage()
	st.wBm('coin', function (bm) {
		coin = bm;
		SL(coin)
		selected(bm)
	})
	st.wBm('sun', function (bm) {
		sun = bm;
		SL(bm)
		selected(bm)
	})
	TextAdder(st)
	st.wBm('me', function (bm) {
		me = bm = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		//rotateShake(bm)
		selected(bm)
		st.wBm('flame', function (bm) {
			flame = bm;
			SL(bm);
			selected(bm)
		})
		st.wBm('guy', function (bm) {
			guy = bm;
			SL(bm);
			selected(bm)
		})
	})
	theImagesDiv = $div().a().drg().c('y')
	loadImagesDiv = function () {
		theImagesDiv.E()
		eaI(function (img) {
			theImagesDiv(
					$imageSizeFuncCan(
							img.d, 1, function () {
								st.wBm(img.d, function (bm) {
									SL(bm.sxy(.4));
									bm.rgc('+');
									selected(bm)
								})
							})
			)
		})
	}
	loadImagesDiv()
	d = $.dA(500).c('y')(
			$.bt('freeze', createjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bm.x(bm.x() + 10)
			}),
			$.bt('left', function () {
				bm.x(bm.x() - 10)
			}),
			$.bt('up', function () {
				bm.y(bm.y() - 10)
			}),
			$.bt('down', function () {
				bm.y(bm.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bm.sxy(1.1, '*')
			}),
			$.bt('smaller', function () {
				bm.sxy(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bm.sx(bm.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bm.sx(bm.sx() * .9)
			}),
			$.bt('taller', function () {
				bm.sy(bm.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bm.sy(bm.sy() * .9)
			}),
			$.br(),
			$.bt('CW', function () {
				bm.rt(bm.rt() + 10)
			}),
			$.bt('CCW', function () {
				bm.rt(bm.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bm))
			}),
			$.bt('set index to 3', function () {
				st.ix(bm, 3)
				pop('index: ' + st.ix(bm))
			}),
			$.bt('z-up', function () {
				st.ix(bm, st.ix(bm) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bm, st.ix(bm) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bm)
			}),
			$.bt('clone', function () {
				st.A(
						$Ct().A(
								bm.clone()
						)
				)
			}),
			$.br(),
			$.bt('save', function () {
				st.sv(function () {
					loadImagesDiv()
				})
			}),
			$.bt('paint', function () {
				stPainter(st)
			}),
			$.bt('', function () {
			})
	)
}

