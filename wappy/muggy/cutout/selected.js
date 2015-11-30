selected = function (bm) {
	
	//SL(bm)
	bm.$(function () {
		createjs.Tween.removeAllTweens()
		bitmap = bm
		scaleShake(bm.dO)
	})
}
SELECTED = function () {
	z()
	stage = dragStage()
	stage.wBm('coin', function (bm) {
		coin = bm;
		SL(coin)
		selected(bm)
	})
	stage.wBm('sun', function (bm) {
		sun = bm;
		SL(bm)
		selected(bm)
	})
	TextAdder(stage)
	stage.wBm('me', function (bm) {
		me = bitmap = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		//rotateShake(bm)
		selected(bm)
		stage.wBm('flame', function (bm) {
			flame = bm;
			SL(bm);
			selected(bm)
		})
		stage.wBm('guy', function (bm) {
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
								stage.wBm(img.d, function (bm) {
									SL(bm.sxy(.4));
									bm.rgc('+');
									selected(bm)
								})
							})
			)
		})
	}
	loadImagesDiv()
	d = $divA(500).c('y')(
			$button('freeze', createjs.Tween.removeAllTweens),
			$button('right', function () {
				bitmap.x(bitmap.x() + 10)
			}),
			$button('left', function () {
				bitmap.x(bitmap.x() - 10)
			}),
			$button('up', function () {
				bitmap.y(bitmap.y() - 10)
			}),
			$button('down', function () {
				bitmap.y(bitmap.y() + 10)
			}),
			$.br(),
			//fix
			$button('bigger', function () {
				bitmap.sxy(1.1, '*')
			}),
			$button('smaller', function () {
				bitmap.sxy(.9, '*')
			}),
			//
			$button('wider', function () {
				bitmap.sx(bitmap.sx() * 1.1)
			}),
			$button('thinner', function () {
				bitmap.sx(bitmap.sx() * .9)
			}),
			$button('taller', function () {
				bitmap.sy(bitmap.sy() * 1.1)
			}),
			$button('shorter', function () {
				bitmap.sy(bitmap.sy() * .9)
			}),
			$.br(),
			$button('CW', function () {
				bitmap.rt(bitmap.rt() + 10)
			}),
			$button('CCW', function () {
				bitmap.rt(bitmap.rt() - 10)
			}),
			$.br(),
			$button('get index', function () {
				pop('index: ' + stage.ix(bitmap))
			}),
			$button('set index to 3', function () {
				stage.ix(bitmap, 3)
				pop('index: ' + stage.ix(bitmap))
			}),
			$button('z-up', function () {
				stage.ix(bitmap, stage.ix(bitmap) + 1)
			}),
			$button('z-down', function () {
				stage.ix(bitmap, stage.ix(bitmap) - 1)
			}),
			$button('remove', function () {
				stage.rm(bitmap)
			}),
			$button('clone', function () {
				stage.a(
						EaselContainer().a(
								SuperDisplayObject(bitmap.ob.clone())
						)
				)
			}),
			$.br(),
			$button('save', function () {
				stage.sv(function () {
					loadImagesDiv()
				})
			}),
			$button('paint', function () {
				stagePainter(stage)
			}),
			$button('', function () {
			})
	)
}

