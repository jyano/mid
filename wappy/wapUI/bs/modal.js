$.$modalHeader = function (title) {
	return $.modalHeader().A(
			$.button('x').K("close").dismiss("modal"),
			$.h4(title).K("modal-title").id("myModalLabel")
	)
}
MOODAL = function () {
	z()
	var header = $.$modalHeader('title')
	var body = $.modalBody().A($.h3('modal body'))
	var footer = $.modalFooter().A(
			$.button('close').K("btn").dismiss('modal'),
			$.button('save').K("btn").C('r'))
	m = $.div().K("modal fade").id("basicModal").A(
			$.modalDialog().A(
					$.modalContent().A(header, body, footer))
	).A()
}