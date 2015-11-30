$fileUpload = fup = function (labelText, text) {
	var theFormGroup = fg(
			$label(D(labelText) ? labelText : 'upload file', 'upl').k('ctl').f(20),
			ip('file').id('upl').nm('i'))
	if (text) {
		theFormGroup(
				pg(['help-block'], text))
	}
	return theFormGroup
}
$.fileUpload = function (labelText, text) {
	var theFormGroup = $.div().K("form-group").A(
			$.label(D(labelText) ? labelText : 'upload file', 'upl').K('control-label').fontSize(20),
			$.input().type('file').id('upl').name('i')
	)
	if (text) {
		theFormGroup.A($.p(text).K('help-block'))
	}
	return theFormGroup
}
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>
UPLOAD = function () {
	form = $.form().attr({
		method: 'post',
		enctype: 'multipart/form-data',
		action: '/pic'
	}).A(
			$.fileUpload(''),
			$.input().K("show").type('submit').val('ok')
	)
	$.pop(form,
			{title: 'upload a new pic'}
	).drag()
}
UPLOADS = function () {
	$.format()
	var top = 80
	s1.A(
			$.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..')
	)
	$.get('/myPics', function (pics) {
		_.each(pics, function (pic) {
			var fileName = pic._id + pic.ext
			picDiv = function (top) {
				return $.divA('blue', 100, 100).WH('auto').K('pic')
						.XY(200, top).pad(16).drag()
			}
			$.delete = function (url, data, func) {
			}
			var theButton = $.button('delete', function (element) {
				$.ajax({
					type: 'DELETE',
					data: pic,
					url: '/pic',
					success: function (result) {
						$(element.target).closest('div').remove()
					}
				})
			})
			var theImg = $.img(fileName).W(120).H(120).click(function () {
				cut(fileName)
			})
			var thePicDiv = picDiv(top).A(theImg, theButton)
			$('body').A(thePicDiv)
			top += 220
		})
	})
}
 
 