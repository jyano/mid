$window = $win = win = function (a, c, id) {//title/ob?,color,id
	var size, theWindow, text, moreButton, lessButton, closeButton
	moreButton = $buttonRight('>', function () {
		theWindow.Z(4)
		lessButton.sh()
		moreButton.hd()
	})
	lessButton = $buttonRight('<', function () {
		theWindow.auto();
		moreButton.sh();
		lessButton.hd()
	}).hd()
	closeButton = $buttonLeft('X', function () {
		theWindow.X()
	})
	theWindow = dva(size || 4).s({C: 'b', a: .9, of: 'a'})
			.P(10).B(4).bs('-').bc('o').auto()
	(moreButton, lessButton.hd(), closeButton).drg().a()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow(a)
	}
	if (text) {
		theWindow(
				$pg(text)
						.font(24).cen().c('X')
						.s({
							'margin-left': 10,
							'margin-right': 10,
							pr: 30,
							pl: 30
						}),
				$hr().c(c || 'z').font(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}
$.win = $.window = function (a, c, id) {
	var size,
			theWindow,
			text,
			moreButton,
			lessButton,
			closeButton
	moreButton = $.buttonRight('>', function () {
		theWindow.WH(400)
		lessButton.show()
		moreButton.hide()
	})
	lessButton = $.buttonRight('<', function () {
		theWindow.WH('auto')
		moreButton.show()
		lessButton.hide()
	}).hide()
	closeButton = $.buttonLeft('X', function () {
		theWindow.remove()
	})
	theWindow = $.divA(size || 400)
	theWindow.C('b').opacity(.9).overflow('auto')
	theWindow.pad(10).borderWidth(4).borderStyle('dashed')
	theWindow.WH('auto').A(moreButton, lessButton.hide(), closeButton).drag().A()
	if (S(a)) {
		text = a
	}
	if (N(a)) {
		size = a
	}
	if (O(a)) {
		theWindow.A(a)
	}
	if (text) {
		theWindow.A(
				$.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30),
				$.hr().col(c || 'z').fontSize(10)
		)
	}
	if (id) {
		theWindow.id(id)
	}
	return theWindow
}


