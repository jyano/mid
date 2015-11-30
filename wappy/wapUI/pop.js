_pop = function () {
	var modalContent = ModalContent() // <div class="modal-content"></div>
	_.each(arguments,
			function (arg) {
				modalContent(S(arg) ? $div()(arg) : arg)
			})
	return ModalForm(
			ModalDialog(
					modalContent
			))
}
pop = function (message, ops) {
	if (S(ops)) {
		return pop(ops, {t: message})
	}
	ops = O(ops) ? ops : {}
	var modalBody,
			message = message || 'pop pop',
			modalBody = ModalBody($h2(message)),
			theModal = _pop(modalBody)
	var titleColor = ops.tc || 'z',
			headerColor = ops.hc || 'z',
			title = ops.t
	//hide? default:false
	if (!ops.h) {
		theModal.m()
	}
	if (title) {
		
		//header
		modalBody.q.prepend(
				$hr().c(headerColor).s({height: 2}).q)
		//title
		modalBody.q.prepend(
				$h1(title).s('c', titleColor).q)
	}
	//button
	if (ops.b) {
		modalBody.a($button(ops.b))
	}
	//dragg
	if (ops.d) {
		theModal.drg()
	}
	if (ops.drag) {
		theModal.drg()
	}
	//opacity
	if (ops.a) {
		theModal.s({opacity: ops.a})
	}
	if (ops.opacity) {
		theModal.s({opacity: ops.opacity})
	}
	//text color of the MESSAGE
	if (ops.c) {
		
		//flash like crazy
		if (ops.c == '*') {
			setInterval(function () {
				modalBody.c()
			}, 100)
		}
		
		//color
		else {
			theModal.s({c: ops.c})
		}
	}
	//color of background of modal itself
	if (ops.C) {
		modalBody.s({C: ops.C})
	}
	//this color takes over the whole screen!
	//this is the background color of the hiding body
	if (ops.bc) {
		theModal.s({C: ops.bc})
	}
	return theModal
}
$._pop = function () {
	var modalContent = $.modalContent()
	_.each(arguments,
			function (arg) {
				modalContent.A(
						S(arg) ? $.div().text(arg) : arg
				)
			}
	)
	return $.modalFade().A($.modalDialog().A(modalContent))
}
$.pop = function (message, ops) {
	if (S(ops)) {
		return $.pop(ops, {title: message})
	}
	ops = O(ops) ? ops : {}
	message = message || 'pop pop'
	modalBody = $.modalBody().A($.h2(message))
	theModal = $.modalFade().A($.modalDialog().A($.modalContent().A(modalBody)))
	if (!ops.hide) {
		theModal.modal()
	}
	if (ops.title) {
		modalBody.prepend(
				$.h1(ops.title).col(ops.titleColor || 'z'),
				$.hr().C(ops.headerColor || 'z').css('height', 2)
		)
	}
	if (ops.button) {
		modalBody.A($.button(ops.button))
	}
	if (ops.drag) {
		theModal.drag()
	}
	if (ops.opacity) {
		theModal.opacity(ops.opacity)
	}
	//text color of the MESSAGE
	if (ops.col) {
		theModal.col(ops.col)
	}
	//color of background of modal itself
	if (ops.C) {
		//flash like crazy
		if (ops.C == '*') {
			setInterval(function () {
				modalBody.C($r())
			}, 100)
		}
		else {
			modalBody.C(ops.C)
		}
	}
	//this color takes over the whole screen!
	//this is the background color of the hiding body
	if (ops.backgroundColor) {
		theModal.C(ops.backbroundColor)
	}
	return theModal
}
