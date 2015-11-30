TextAdder2 = function (stage) {
	var form = $form().a().c('x').P(10).w(300).drg()
	form(
			$textInput().id('text'),
			$button('for text', function () {
				var val = $l($('#text').val())
				$('#text').val('')
				var theText = EaselText(val, 'w', 30, 100, 10)
				SL(theText)
				stage.a(theText)
			}))
	return form
}
TextAdder = function (stage) {
	var form = $form().a().c('x').P(10).w(300).drg()
	form(
			$textInput().id('text'),
			$button('for text', function () {
				var val = $l($('#text').val())
				$('#text').val('')
				var _text = EaselText(val, 'w', 30, 100, 10)
				var theText = EaselContainer().a(_text)
				theText.dO = _text
				SL(theText)
				stage.a(theText)
				selected(theText)
			}))
	return form
}
EDITOR = function () {
	z()
	var r = '#0FF', size = 2, oX = 0, oY = 0, shape
	var stage = dragStage()
	imgHolder = $div().a().drg().c('y')
	eaI(function (img) {
		imgHolder($imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										SL(bm.sxy(.4))
									}
									, '+')
						} //rgc
				)
		)
	})
	TextAdder2(stage)
}
