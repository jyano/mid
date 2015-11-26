mous()
function mous() {
	$.md = $.mousedown = function (fn) {
		$('body').on('mousedown', fn);
		return this
	}
	$.mu = $.mouseup = function (fn) {
		$('body').on('mouseup', fn);
		return this
	}
	$.mm = $.mousemove = function (fn) {
		$('body').on('mousemove', fn);
		return this
	}
	$.oMD = function (fn) {
		$.md(function (e) {
			fn(e.clientX, e.clientY, e)
		})
		return $
	}
	$.oMU = function (fn) {
		$.mu(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.oMM = function (fn) {
		$.mm(function (e) {
			fn(e.clientX, e.clientY, e)
		});
		return $
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.fn.$ = $.fn.click
	$.fn.hv = $.fn.hover
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.mD = function (l) {
		var c = this
		c.mousedown(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pm = $.fn.pressmove = function (func) {
		var mouse_pressed
		this.mousedown(function () {
			mouse_pressed = true
		})
		this.mouseup(function () {
			mouse_pressed = false
		})
		this.mousemove(function (e) {
			if (mouse_pressed) {
				func(e)
			}
		})
		return this
	}
	$.fn.mp = $.fn.mousePoint = function (e, scale) {
		scale = N(scale) ? scale : 1
		return V(e.pageX / scale, e.pageY / scale)
	}
	$.fn.mU = function (l) {
		var c = this
		c.mouseup(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.pM = function (l) {
		var c = this
		c.pressmove(function (e) {
			l(e.clientX, e.clientY)
		})
		return c
	}
	$.fn.m = function (o) {
		var e = this
		if (o.mD) {
			e.mD(o.mD)
		}
		if (o.mU) {
			e.mD(o.mU)
		}
		if (o.pM) {
			e.pM(o.pM)
		}
		return e
	}
	$.tap = function (func) {
		this('body').on('keydown mousedown', func);
		return this
	}
	$.$ = function (f) {
		return $(document).on('click', _v(f))
		/*
		 $.$=function(){
		 var b=$('html')
		 b.click.apply(b, arguments)
		 return $
		 }*/
	}
	$.$$ = function (f) {
		return $(document).on('dblclick', _v(f))
		//$.$$=function(a,b,c){$('body').$$(a,b,c); return this}
	}
	$.click = m$ = function (f) {
		return $(document).on('click', _v(f))
	}
	$.dblclick = m$$ = function (f) {
		return $(document).on('dblclick', _v(f))
	}
}
$.scroll = function (a) {
	return $(window).scroll(a || function () {
		$('body').C('*')
	})
}
$.fn.xPrp = function () {
	this.on('mousedown', function (e) {
		e.stopPropagation()
	})
	return this
}
$.wh = function (a, b) {
	return D(b) ? a.which == b : a.which
}
KEYOB = KEYOBJ = {
	up: 38, u: 38,
	down: 40, d: 40,
	left: 37, l: 37,
	right: 39, r: 39,
	space: 32, s: 32,
	enter: 13, e: 13
}
$.kD = function self(key, fn) {
	if (O(key)) {
		_.e(key, function (fn, k) {
			if (s$(k).isUpper()) {
				$.kU(k.toLowerCase(), fn)
			}
			else {
				$.kD(k, fn)
			}
		})
		return
	}
	if (KEYOB[key]) {
		key = KEYOB[key]
	}
	$('body').on('keydown', function (e) {
		if (e.which == key) {
			fn(e, $.K)
		}
	})
}
$.kU = function (key, funk) {
	if (KEYOBJ[key]) {
		key = KEYOBJ[key]
	}
	$('body').on('keyup', function (e) {
		if (e.which == key) {
			funk(e, $.K)
		}
	})
}
$.K = {}
$.space = function (fn) {
	return $.kD('space', fn)
}
$.fn.dg = $.fn.drag = function () {
	this.A()
	this.each(function () {
		$(this).css('top', $(this).position().top)
		$(this).css('left', $(this).position().left)
	})
	this.P('a')
	this.on('mousedown', function (e) {
		var el = $(this)
		var offset = el.offset(),
				deltaX = e.pageX - offset.left,
				deltaY = e.pageY - offset.top
		$('html').on('mousemove', function (e) {
			var x = e.pageX - deltaX,
					y = e.pageY - deltaY
			el.left(x)
			el.top(y)
		}).on('mouseup', function () {
			$(this).off()
		})
	})
	//touchDrg(element)
	return this
}
$.fn.hv = $.fn.hover
$.fn.fc = $.fn.focus