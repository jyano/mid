$.dragStage = function (x, y) {
	dragFrame = function (div) {
		var outerDiv = $.div('r').drag().pad(20).A()
		div = div || $.div('y', 50, 50).mar(20)
		div.on('mousedown', function (e) {
			e.stopPropagation()
		})
		outerDiv.A(div)
		return outerDiv
	}
	c = $.canvas('g', 400)
	s = new cjs.Stage(c[0]).tick()
	dragFrame(c).A()
	return s
}


FANCYEDIT = function (x, y) {z()
	
	canvas = $.canvas('g', 400)
	stage = new cjs.Stage(canvas[0]).tick()
	frame = $.dragFrame(theSpan = $.span())
	theSpan.A(
			$.button('X', function () {
				frame.remove()
			}),
			$.button('pics', function () {
				$.imagesDiv(stage)
			}),
			$.button('transform'),
			$.button('text'),
			$.button('paint', function () {
				_paintColor = '#0FF'
				var size = 10, oX = 0, oY = 0, shape
				var paintStage = $.dragStage()
				// stage.a(  EaselText('finger paint', 'b', 40, 100, 10))
				paintStage.bm(
						stage.du(), //?
						function (m) {
							m.XY(40).sXY(.4)
							stagePainter(paintStage)
						})
			}),
			$.button('cut'),
			$.button('save'))
	
	theSpan.A($.br(), canvas)
	
	theSpan.A($.div().A(
			$.button('clear', function () {
				stage.removeAllChildren()
			}),
			$.button('flat', function () {
				stage.removeAllChildren()
				stage.bm(stage.toDataURL(), function (bm) {
					bm.drag()
				})
			}),
			$.button('clone', function () {
				var newSpan = $span()
				var newStage = dragStage(newSpan)
				newStage.bm(stage.du(), function (bm) {
					SL(bm)
				})
			}),
			$.button('recur', function () {
				stage.bm(stage.du(), function (bm) {
					bm.sxy(.4)
					SL(bm)
				})
			}),
			$.button('copy', function () {
				_copy = stage.du()
			}),
			$.button('paste', function () {
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			}),
			$.button('replace', function () {
				stage.rm()
				stage.bm(_copy, function (bm) {
					bm.drag()
				})
			})
	))
	
	theSpan.dblclick(function () {
		$('button').toggle()
	})
	
	theSpan.A()
}


$.colorPicker = $.ColorPicker = function () {
	z()
	colorPicker = $(' <input id="color" name="color" type="color">').appendTo($('body'))
	colorPicker.change(function () {
		$l(colorPicker.val())
	})
}
