ContainerDiv = CT = function () {
	var args = G(arguments),
			theDiv = $div().k('container')
	if (args.N) {
		theDiv($br(4)).a()
	}
	_.each(args, function (v) {
		theDiv(v)
	})
	return theDiv
}
$.containerDiv = function () {
	var args = G(arguments),
			theDiv = $.div().K('container')
	if (args.N) {
		theDiv.A($.br(4)).A()
	}
	_.each(arguments, function (v) {
		theDiv.A(v)
	})
	return theDiv
}

