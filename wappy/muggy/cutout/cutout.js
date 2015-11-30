CUTOUTS = function () {
	$.format()
	section1.A(
			$.h4('click a pic to select it as your mug, or the x to delete it'))
	$.getJSON('/img', function (cutouts) {
		var top = 80
		_.each(cutouts, function (cutout) {
			var imgDiv = $.divA('b', 100, 100).left(top).top(200).K('pic').drag()
			imgDiv.A(
					$.img(cutout.d).WH(100).click(function (q) {
						$l('changemug')
						$l(cutout.d)
						$.post('/changeMug', {
							url: cutout.d
						})
						////
						$('.pic').each(function (index) {
							$(this).C('b')
						})
						$(this).parent().C('y')
					}),
					$.button('X', function () {
						var that = this
						$.ajax({
							data: cutout,
							url: '/img',
							type: 'DELETE',
							success: function (result) {
								$(that).parent().remove()
							}
						})
					})
			)
			top += 220
		})
	})
}