$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg).K('alert alert-danger'))
	return theForm.prependTo('body')
}