// ob is for adding more pops to post-ob,
// or just pass function early
textInputSpan = ip0 = function (buttonText,
                                url,
                                ob,
                                func) {
	url = url || '/'
	if (F(ob)) {
		func = ob;
		ob = {}
	}
	func = func || home
	var theSpan = $span(), theTextInput = tx(),
			theButton = $button(buttonText,
					function () {
						qP(url,
								_.defaults(dataValue(theTextInput), ob),
								func)
					})
	//return a span with the tx and a $button
	//when u click the $button, get the value and post it to a url
	return theSpan(theTextInput, theButton)
}
//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)
textAreaInputSpan = ip1 = function (buttonText, url, func) {
	url = url || '/';
	func = func || home
	var theSpan = $span(),
			theTextArea = ta(),
			theButton = $button(buttonText, function () {
				$.post(url, dV(theTextArea), func)
			})
	return theSpan(theTextArea, theButton)
}
//tx and ta
textAndTextAreaSpan = ip2 = function (buttonText, url, func) {
	url = url || '/';
	func = func || home
	var theSpan = $span(),
			theTextInput = tx(),
			theTextArea = ta(),
			theButton = $button(buttonText, function () {
				qP(
						url,
						dataValue(theTextInput, theTextArea),
						func)
			})
	return theSpan(theTextInput, theTextArea, theButton)
}
inptDep = function (h1Title, buttonText, url, func) {
	var g = G(arguments),
			h1Title = g[0], buttonText = g[1], url = g[2], func = g[3]
	return dva(4)(
			$h1(h1Title),
			g.p ? textAndTextAreaSpan(buttonText, url, func) :
					g.n ? textInputSpan(buttonText, url, func) :
							textAreaInputSpan(buttonText, url, func),
			$hr()
	)
}
ipt = function (h1Title, buttonText, url, ob, func) {
	var g = G(arguments),
			h1Title = g[0],
			buttonText = g[1],
			url = g[2],
			ob = g[3],
			func = g[4]
	if (F(ob)) {
		func = ob;
		ob = {}
	}
	return dv(4).auto()(
			h1(h1Title),
			g.p ? textAndTextAreaSpan(buttonText, url, func)
					: g.n ? textInputSpan(buttonText, url, ob, func)
					: textAreaInputSpan(buttonText, url, func)
			// ,  $hr()
	)
}
inputBox1 = function (ob) {
	ob = ob || {}
	var func = ob.func,
			url = ob.url || '/',
			boxTitle = ob.boxTitle,
			inputType = ob.inputType,
			defaults = ob.defaults || {},
			buttonText = ob.buttonText || 'submit',
			inputType = ob.inputType || 'text'
	var theDiv = dv(4).auto()
	if (boxTitle) {
		theDiv(h1(boxTitle))
	}
	if (inputType == 'text') {
		var theTextInput = tx()
		theDiv(theTextInput)
		theDiv(
				$button(buttonText, function () {
					$.post(url, _.defaults(dataValue(theTextInput), defaults), func)
				}))
	}
	if (ob.inputType == 'textArea') {
		var theTextAreaInput = ta()
		theDiv(
				theTextAreaInput,
				$button(buttonText, function () {
					$.post(url, _.defaults(dataValue(theTextAreaInput), defaults), func)
				})
		)
	}
	if (ob.inputType == 'textAndTextArea') {
		var theTextInput = tx(),
				theTextAreaInput = ta()
		theDiv(theTextInput, theTextAreaInput)
		theDiv(
				$button(buttonText, function () {
					$.post(url,
							_.defaults(dataValue(theTextInput, theTextAreaInput), defaults),
							func)
				}))
	}
	//z(); theDiv.a()
	return theDiv
}



