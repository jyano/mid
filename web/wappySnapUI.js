$.fm=$.format = function () {
	$.fm.A = $s1=	s1 = section1 = $.span()
	$.fm.B = $s2= s2 = section2 = $.span()
	$ctD= $.containerDiv(
			bs.row(bs.col(3, $.fm.A), $.col(9, $.fm.B)))
}
BasicLayout = format = function () {
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
	$CtD(bs.row39(s1, s2))
}
$.fm = $.format = function () {
	$l('in fm')
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
};
$.fm = $.format = function () {
	$l('in fm')
	section1 = s1 = $.sp()
	section2 = s2 = $.sp()
//    $.Ct($.row($.xs(3).A(section1),   $.xs(9).A(section2) ))
};
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
$.dCt = $.ctD = function () {
	var g = G(arguments), //makes auto top-spacing (for navbar not to block)
			d = $.dK('container')
	if (!g.n) {
		d.A($.br(4))
	}
	_.e(g, function (v) {
		d.A(v)
	})
	return d
}
$.eD = $.editDiv = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.dE2 = $.editDiv2 = function (a) {
	var d = $.editDiv(a), range = $.range()
	range.md(function (e) {
		e.stopPropagation()
	})
	range.on('input', function () {
		d.fi($('span')).fS($(this).v())
		d.fi($('textarea')).fS($(this).v())
	})
	d.pp(range)
	return d
};
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
$.pic = function (pic) {
	return $.i(pic._id + pic.ext).WH(120, 120)
			.$(function () {
				$.cut(pic._id + pic.ext)
			})
}
$.picDiv = function (top) {
	$l('in picDiv')
	return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
			.pad(25)
}
$.iD = $.imgDiv = function (st) {
	d = $.d('y', '+')
	$.eGj('img', function (i) {
		d.A($.c(100, 100).fit(i.d)
				.$(function () {
					st.bm(i.d, function (bm) {
						bm.sXY(.4).dg()
					})
				}))
	})
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
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
$.eD = $.editDiv = function (words) {//$.dE
	canMove = true
	changeLocation = true
	inputMove = true
	mouse = 'up'
	ta = $.ta().mar(4)
	sp = $.sp().C('z')
	fn = function () {
		sp.T(ta.v())
	}
	d = $.dA('+').C('n', 'y').pad(8)
	d.zIndex(0)
	xBt = $.bt('', function () {
		d.rm()
	}).WH(4).C('red')
	d.md(function () {
		inputMove = false;
		mouse = 'div'
	})
	d.mu(function () {
		mouse = 'up'
	})
	d.md(function () {
		$.editDiv.TOP++
		$(this).zIndex($.editDiv.TOP)
	})
	ta.md(function (e) {
		$.editDiv.TOP++
		$(this).parent().zIndex($.editDiv.TOP)
		location = {top: d.Y(), left: d.X()}
		inputMove = true
		mouse = 'input'
		e.stopPropagation()
	})
	ta.mm(function (e) {
		if (inputMove) {
			e.stopPropagation();
			d.XY(location.left, location.top)
		}
	})
	if (U(words)) {
		return d.A(xBt, $.br(), sp.hd(), ta,
				$.d('y', 16, 12).tA('c').mar('0 auto').$(function () {
					$(this).pa().free()
				})
		).$$(function (e) {
					e.stopPropagation()
					sp.T(ip.v())
					xBt.gg();
					ip.gg();
					sp.gg()
				})
	}
	else {
		ip.v(words)
		sp.T(ta.v())
		return d.$$(function (e) {
			e.stopPropagation()
			sp.T(ta.v())
			xBt.gg();
			ip.gg();
			sp.gg()
		}).A(xBt, $.br(), sp, ip.hd())
	}
};
$.editDiv.TOP = 0
$.dE2 = $.editDiv2 = function (a) {
	var d = $.editDiv(a), range = $.range()
	range.md(function (e) {
		e.stopPropagation()
	})
	range.on('input', function () {
		d.fi($('span')).fS($(this).v())
		d.fi($('textarea')).fS($(this).v())
	})
	d.pp(range)
	return d
};
testEditDiv = function () {
	z()
	$.dE()
	$.editDiv()
	$.editDiv()
	$.editDiv()
	//$.editDiv2().A()
}
$.pic = function (pic) {
	return $.i(pic._id + pic.ext).WH(120, 120)
			.$(function () {
				$.cut(pic._id + pic.ext)
			})
}
$.picDiv = function (top) {
	$l('in picDiv')
	return $.dA('b', '+').WH('auto').XY(200, top).K('pic')
			.pad(25)
}
$.iD = $.imgDiv = function (st) {
	d = $.d('y', '+')
	$.eGj('img', function (i) {
		d.A($.c(100, 100).fit(i.d)
				.$(function () {
					st.bm(i.d, function (bm) {
						bm.sXY(.4).dg()
					})
				}))
	})
}
$.msg = $.messageDiv = function (t) {
	return $.d('p').col('z').K('msg').mar(10).pad(10).bor(0)
			.fS(20).T(t || 'msgText')
}
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
$.pop = function (message, o) {
	if (S(o)) {
		return $.pop(o, {title: message})
	}
	o = O(o) ? o : {}
	message = message || 'pop pop'
	mB = $.modalBody().A($.h2(message))
	m = $.modalFade().A($.modalDialog().A($.modalContent().A(mB)))
	if (!o.hd) {
		m.modal()
	}
	if (o.tt) {
		mB.pp($.h1(o.titC).col(o.titC || 'z'),
				$.hr().C(o.headerC || 'z').css('height', 2))
	}
	if (o.bt) {
		mB.A($.bt(o.bt))
	}
	if (o.dg) {
		m.dg()
	}
	if (o.al) {
		m.al(o.al)
	}
	//text color of the MESSAGE
	if (o.col) {
		m.col(o.col)
	}
	//color of background of modal itself
	if (o.C) {
		//flash like crazy
		if (o.C == '*') {
			_.ev(.1, function () {
				mB.C($r())
			})
		}
		else {
			mB.C(o.C)
		}
	}
	//this color takes over the whole screen!
	//this is the background color of the hiding body
	if (o.c) {
		m.C(o.c)
	}
	return m
}
$.dragFrame = function (d) {
	d = d || $.d('y', 50, 50)//.mar(20)
	d.on('mousedown', function (e) {
		e.stopPropagation()
	})
	//outerDiv
	return $.d('r').A(d)//.drag().pad(20)
}
$.dragStage = function (x, y) {
	c = $.c('g', 400)
	s = $St(c[0])
	$.dragFrame(c).A()
	return s
}
$.dragFrame = function (ob) {
	var oD = $.d('r', '+').pad(10)
	inD = $.d('y').md(function (e) {
		e.stopPropagation()
	})
	oD.A(inD)
	return inD.A(ob)
}
$.dragFrame = function (ob) {
	var outerDiv = $.d('r').drag().pad(20).A()
	ob = ob || $.d('y', 50, 50).mar(20)
	ob.on('mousedown', function (e) {
		e.stopPropagation()
	})
	outerDiv.A(ob)
	return outerDiv
	/*
	
	 $.dragFrame = function (ob) {
	 var oD = $.d('r', '+').pad(10)
	 inD = $.d('y').md(function (e) {e.stopPropagation()})
	 oD.A(inD)
	 return inD.A(ob)
	 }
	
	 */
}
$.dangMessage = function (msg) {
	var theForm = $.span().delButton()
	theForm.A($.h2(msg).K('alert alert-danger'))
	return theForm.prependTo('body')
}
$.delBt = function (url, data) {
	var bt
	bt = $.bt('delete', function (el) {
		$.ajax({
			type: 'DELETE',
			data: data,
			url: url,
			success: function () {
				$(el.target).closest('div').rm()
			}
		})
	})
	return bt
}
$.floatingInput = function (text, func) {
	var args = G(arguments),
			theForm = $.form().K('text-center').C('o').fontSize(20).drag().minW(200)
	theForm.A(
			$.button(text).type('submit'),
			$.input()
	)
	if (F(func)) {
		theForm.submit(func)
	}
	return theForm
}
$.floatIp = function (t, fn) {
	var g = G(arguments), f
	f = $.f().K('text-center').C('o').fS(20).dg().minW(200)
			.A(
			$.sm(t), $.ip())
	if (F(fn)) {
		f.sm(fn)
	}
	return f
}
$.ipB = $.inputBox = function (ob) {
	ob = ob || {}
	var d, ip, fn = ob.func, url = ob.url || '/',
			tt = ob.boxTitle,
			inputType = ob.inputType || 'text',
			defaults = ob.defaults || {},
			t = ob.btT || 'submit', taI
	d = $.d().WH('auto').pad(10)
	if (tt) {
		d.A($.h1(tt))
	}
	if (inputType == 'text') {
		d.A(ip = $.ip().K('form-control')).A(
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip), defaults), fn)
				})
		)
	}
	if (inputType == 'textArea') {
		d.A(taI = $.ta().K('form-control'), $.bt(t, function () {
			$.post(url, _.df(dataValue(theTextAreaInput), defaults), fn)
		}))
	}
	if (inputType == 'textAndTextArea') {
		d.A(
				ip = $.ip().K('form-control'),
				taI = $.ta().K('form-control'),
				$.bt(t, function () {
					$.post(url, _.df(dataValue(ip, taI), defaults), fn)
				}))
	}
	return d
} //pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???
//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?
 
function msg(){
	_toFr = function (to, fr) {
		return {to: to, fr: fr}
	}
	$toFr = function (q) {
		return __toFr(q.body.to, q.u)
	}
	$mail = function (to, from, txt) {
		return {to: to, from: from, text: txt}
	}

}
function dataURL(){
	Y.uPop = function (i, size) {
		i = (O(i) && F(i.u)) ? i.u() : i
		size = size || 300
		return $.c().WH(size, size).fit(i)
	}
	Y.dUD = function (d, n) {
		$.P('getImageById', {data: d}, function (u) {
			upop(u, n)
		})
	} //sk-send du of your (first) can-el
	Y.dU = function () {
		var u
		c = $.c().fit('me')
		u = c.toDataURL()
		k.emit('du', u);
		return u
	}
}