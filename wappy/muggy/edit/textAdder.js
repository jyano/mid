TextAdder2 = function (st) {
	
	var f = $.f().c('x').P(10).W(300).dg()
	
	f.A(
			$.ip().id('text'),
			$.bt('for text', function () {
			
				var val = $l($('#text').v())
				
				$('#text').v('')
				
				
				st.A($Tx(val, 'w', 30, 100, 10).SL()) 
			}))
	return form
}

 
 
TextAdder = function (st) {
	var f = $.f().A().c('x').P(10).w(300).dg().A(
			$.ip().id('text'),
			$.bt('for text', function () {
				var val = $l($('#text').v())
				$('#text').val('')
				var theText = $Ct().A($Tx(val, 'w', 30, 100, 10)).SL().a2(st)
				theText.dO = _text
				selected(theText)
			}))
	return f 
}
 
EDITOR = function () {
	 
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape
	var st = dragStage()
	
	imgHolder = $div().a().drg().c('y')
	
	
	eaI(function (img) {
		imgHolder($imageSizeFuncCan(
						img.d, 1, function () {
							st.bm(img.d,
							
									function (bm) {
									
										SL(bm.sxy(.4))
									}
									, '+')
						} //rgc
				)
		)
	})
	
	TextAdder2(st)
}

 

SELECTED = function () {
 
	 
		 
		st = dragStage()
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
			me = bitmap = bm
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
		
		
		d = $divA(500).c('y')(
				$.bt('freeze', createjs.Tween.removeAllTweens),
				$.bt('right', function () {
					bitmap.x(bitmap.x() + 10)
				}),
				$.bt('left', function () {
					bitmap.x(bitmap.x() - 10)
				}),
				$.bt('up', function () {
					bitmap.y(bitmap.y() - 10)
				}),
				$.bt('down', function () {
					bitmap.y(bitmap.y() + 10)
				}),
				$.br(),
				//fix
				$.bt('bigger', function () {
					bitmap.sxy(1.1, '*')
				}),
				$.bt('smaller', function () {
					bitmap.sxy(.9, '*')
				}),
				//
				$.bt('wider', function () {
					bitmap.sx(bitmap.sx() * 1.1)
				}),
				$.bt('thinner', function () {
					bitmap.sx(bitmap.sx() * .9)
				}),
				$.bt('taller', function () {
					bitmap.sy(bitmap.sy() * 1.1)
				}),
				$.bt('shorter', function () {
					bitmap.sy(bitmap.sy() * .9)
				}),
				$.br(),
				$.bt('CW', function () {
					bitmap.rt(bitmap.rt() + 10)
				}),
				$.bt('CCW', function () {
					bitmap.rt(bitmap.rt() - 10)
				}),
				$.br(),
				$.bt('get index', function () {
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('set index to 3', function () {
					st.ix(bitmap, 3)
					pop('index: ' + st.ix(bitmap))
				}),
				$.bt('z-up', function () {
					st.ix(bitmap, st.ix(bitmap) + 1)
				}),
				$.bt('z-down', function () {
					st.ix(bitmap, st.ix(bitmap) - 1)
				}),
				$.bt('remove', function () {
					st.rm(bitmap)
				}),
				$.bt('clone', function () {
					st.a(
							EaselContainer().a(
									SuperDisplayObject(bitmap.ob.clone())
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
				}),
				
				///////////
			$.bt('freeze', createjs.Tween.removeAllTweens),
			$.bt('right', function () {
				bitmap.x(bitmap.x() + 10)
			}),
			$.bt('left', function () {
				bitmap.x(bitmap.x() - 10)
			}),
			$.bt('up', function () {
				bitmap.y(bitmap.y() - 10)
			}),
			$.bt('down', function () {
				bitmap.y(bitmap.y() + 10)
			}),
			$.br(),
			//fix
			$.bt('bigger', function () {
				bitmap.sxy(1.1, '*')
			}),
			$.bt('smaller', function () {
				bitmap.sxy(.9, '*')
			}),
			//
			$.bt('wider', function () {
				bitmap.sx(bitmap.sx() * 1.1)
			}),
			$.bt('thinner', function () {
				bitmap.sx(bitmap.sx() * .9)
			}),
			$.bt('taller', function () {
				bitmap.sy(bitmap.sy() * 1.1)
			}),
			$.bt('shorter', function () {
				bitmap.sy(bitmap.sy() * .9)
			}),
			$.br(),
			$.bt('CW', function () {
				bitmap.rt(bitmap.rt() + 10)
			}),
			$.bt('CCW', function () {
				bitmap.rt(bitmap.rt() - 10)
			}),
			$.br(),
			$.bt('get index', function () {
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('set index to 3', function () {
				st.ix(bitmap, 3)
				pop('index: ' + st.ix(bitmap))
			}),
			$.bt('z-up', function () {
				st.ix(bitmap, st.ix(bitmap) + 1)
			}),
			$.bt('z-down', function () {
				st.ix(bitmap, st.ix(bitmap) - 1)
			}),
			$.bt('remove', function () {
				st.rm(bitmap)
			}),
			$.bt('clone', function () {
				st.a(
						EaselContainer().a(
								SuperDisplayObject(bitmap.ob.clone())
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