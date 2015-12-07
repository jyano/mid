$.fn.sz = function (sz) {
	return this.at('size', sz)
}
$w = $.wi = function () {
	return $(window)
}
$.rz = function (fn) {
	var g = G(arguments), wi = $.wi
	wi.rz(fn);
	if (g.p) {
		fn()
	}
	return wi
}
$.bd = function () {
	var bd = $('body')
	return bd
}
$.A = function () {
	var g = G(arguments),
			bd = $('body')
	$.fn.A.apply(bd, g)
	return $
}
$.ct = $.cts = $.contains
$.iI = function (i) {
	if (O(i)) {
		return S($(i)[0].src)
	}
}
$.src = function f(e) {
	if (e.image) {
		e = e.image
	}
	if ($.tCan(e)) {
		e = $.tCan(e)
	}
	if (e.src) {
		e = e.src
	}
	if (e.toDataURL) {
		e = _.tDU(e)
	}
	return s$(e).contains('data:') ? e
			: S(e) ? _.src(e)
			: 0
}
$.iQ = function (o) {
	return O(o) && F(o.ajaxStart)
}
$.iO$ = function (o) {
	return O$(o) && !$.iQ(o)
}
$al = function (er) {
	alert(er)
	return false
}
$q = function (e) {
	if (!O(e)) {
		return false
	}
	if (e.target) {
		e = e.target
	}
	return $(e)
}
$.fn.fCt = function (str) {
	return this.fi(":contains(" + str + ")")
}
$.fn.getPosition = $.fn.getTotalOffset = function () {
	alert('$.fn.getPosition')
	var e = this, x = 0, y = 0
	while ($.tEl(e) && e.tagName) {
		y += e.offsetTop
		x += e.offsetLeft
		if (isBodyElement(e)) {
			e = 0
		}
		e = e.offsetParent || e
	}
	return {x: x, y: y}
}//just gets the TOTAL offset of ANY element
$.fn.osP = function () {
	return this.offsetParent
}
 
$.toColor = function (n1, n2, n3, n4) {
	return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
}
$.fn.Z = function (w, h) {
	return this.W(w).H(h || w)
}
$.fn.oH = $.fn.outerHeight
$.fn.foc = $.fn.focus
$.pD = function (ev) {
	ev.preventDefault()
	return ev
}
$.fn.ed = function (ed) {
	if (U(ed)) {
		return this.attr('contenteditable')
	}
	this.attr('contenteditable', ed ? true : false)
	return this
}
$.fn.rmAt = $.fn.removeAttr
$.fn.edFoc = function () {
	return this.ed(1).foc()
}
$.fn.nm = $.fn.name = function (name) {
	return name ? this.at('name', name) : this.at('name')
}
$.fn.idNm = function (id, nm) {
	this.id(id)
	this.nm(nm || id)
	return this
}
LJQFN = function () {
	z()
	css = {}
	css.redDivs = {
		div: {
			C: 'v', c: 'p',
			M: 20, P: 40, h: 420
		},
		span: {
			C: 'x'
		}
	}
	css.big = {div: {fZ: 100}}
	$CSS(css.redDivs)
	$CSS(css.big)
	d = $.d().A('hello').A($.sp('why not span'))
	$.d().A('nice day')
	$.d().A('see ya')
	$('div').e(
			function () {
				console.log('this:', this)
			}
	)
	p = $('span').p()//.C('z')
	//r=	$('body').f('div').C("b")//.r()
}
_lS = localStorage
$w = window
z = function () {
	$('body').E()
}
function jqVal() {
	$.fn.v = $.fn.val
	$.fn.v_ = function () {
		var val = this.val();
		this.val('');
		return val
	}
}
$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
$test = function (a, b) {
	if (b2d.test) {
		var g = G(arguments), a = g[0], b = g[1], str
		if (D(b)) {
			str = '||'
			_.e(g, function (s) {
				str += ' ' + s.toString() + ' |'
			})
			str += '|'
		}
		else {
			str = a.toString()
		}
		alert(str)
	}
	return a
} // =$t