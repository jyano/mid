$.fn.e = $.fn.ea = $.fn.each
$.fn.f = $.fn.fi = $.fn.find
$.fn.hd = $.fn.hide
$.fn.sh = $.fn.show
$.fn.gg = $.fn.toggle
$.fn.oh = function () {
	return this[0].outerHTML
}
$.fn.h = $.fn.ht = $.fn.html
$.fn.t = $.fn.tx = $.fn.text
$.fn.g = function (ix) {
	if (U(ix)) {
		return this[0]
	}
	return this.eq(ix)
}
$.fn.ch = function () {
	return this.children()
}
$.fn._ = $.fn.closest
$.fn.__ = $.fn.pa = $.fn.pr = $.fn.parent
$.fn.sib = function () {
	var g = G(arguments);
	return this.sib.apply(this.g)
}
$.fn.N = $.fn.next
$.fn.r = $.fn.rm = $.fn.xx = function () {
	var e = this
	e.remove()
	return e
}
$.fn.fRm = function (a) {
	return this.fi(a).rm()
}
$.fn.E = function (html) {
	this.empty()
	if (S(html)) {
		this.h(html)
	}
	else {
		G(arguments).e(function (q) {
			this.A(q)
		})
	}
	return this
}
$.fn.rp + $.fn.replace
$.fn.A = function (stuff) {
	if (U(stuff)) {
		$('body').append(this);
		return this
	}
	this.append.apply(this, arguments)
	return this
}
$.fn.a2 = function (a) {
	a.A(this);
	return this
}
$.fn.pp = function (a) {
	this.pp(a);
	return this
}
$.fn.p2 = $.fn.pp2 = function (a) {
	this.prependTo(a);
	return this
}
$.fn.iB = $.fn.insertBefore
$.fn.iA = $.fn.insertAfter
$.fn.wr = $.fn.wrap
$.fn.at = $.fn.attr
$.fn.i = $.fn.sr = $.fn.src = function (a) {
	if (U(a)) {
		return this.attr('src')
	}
	this.attr('src', _.src(a))
	return this
}
$.fn.n = function (name) {
	if (U(name)) {
		return this.attr('name')
	}
	this.attr('name', name);
	return this
}
$.fn.ml = $.fn.mlt = function (m) {
	return this.at('multiple', true)
}
$.fn.ph = $.fn.placeholder = function (forWhat) {
	return this.attr('placeholder', forWhat)
}
$.fn.ck = $.fn.chk = function () {
	this.at('checked', true)
}
$.fn.ty = $.fn.type = function (type) {
	if (U(type)) {
		return this.attr('type')
	}
	this.attr('type', type);
	return this
}
$.fn.id = function (id) {
	if (U(id)) {
		return this.attr('id')
	}
	;
	this.attr('id', id);
	return this
}
$.fn.hr = $.fn.hf = $.fn.href = function (href) {
	if (U(href)) {
		return this.attr('href')
	}
	this.attr('href', href);
	return this
}
$.fn.fr = $.fn.for = function (forWhat) {
	return this.attr('for', forWhat)
}
$.fn.ro = $.fn.role = function (role) {
	if (U(role)) {
		return this.attr('role')
	}
	this.attr('role', role)
	return this
}
$.fn.v =  function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		if (g.n) {this.val('')}
		return v
	}
	this.val(newVal);
	return this
}
 $.fn.V = function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		this.val('')
		return v
	}
	this.val(newVal);
	return this
}
$.fn.tt = $.fn.ti = function (a) {
	this.at('title', a)
	return this
}
$.fn.d = $.fn.da = $.fn.data
function ajax() {
	$.g = $.G = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.G, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.get(S.eL(o.p), o.d || {},
				function (d) {
					o.fn = o.fn || function () {
						return 'boo ya!'
					};
					o.fn(d)
				})
	}
	$.eG = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eG, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} :
		{p: g[0], d: g[1], fn: g[2]};
		$.G(o.p, o.d || {},
				function (dd) {
					_.e(dd, function (d) {
						o.fn(d)
					})
				});
		return $
	}
	$.txG = function (url) {
		$.get('/' + url, function (aa) {
			a = aa
		})
	}
	$.j = $.gJ = $.Gj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.Gj, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.getJSON(
				S.eL(o.p),
				o.d || {},
				function (d) {
					o.fn(d)
				});
		return $
	}
	$.eJ = $.eGj = function () {
		var g = G(arguments), o;
		if (U(g[1])) {
			return _.p($.eJ, g[0])
		}
		o = F(g[1]) ?
		{p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.Gj(o.p, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.po = $.P = function () {
		var g = G(arguments), o;
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		o.d = U(o.d) ? {} : O(o.d) ? o.d : {data: o.d};
		o.fn = o.fn || function () {
			return 'boo ya!'
		};
		$.post(S.eL(o.p), o.d, function (d) {
			o.fn(o.d, o)
		});
		return $
	}
	$.eP = $.ePo = function () {
		var g = G(arguments);
		if (U(g[1])) {
			return _.p($.eP, g[0])
		}
		o = F(g[1]) ? {p: g[0], fn: g[1]} : {p: g[0], d: g[1], fn: g[2]};
		$.P(o.u, o.d || {}, function (dd) {
			_.e(dd, function (d) {
				o.fn(d)
			})
		});
		return $
	}
	$.aj = function (ob) {
		return $.ajax(ob)
	}
	$.XML = function () {
		alert('$.XML!');
		return new XMLHttpRequest()
	}
}
function keys() {
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
	KEYS = WHYQ = function () {
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
}
function mouse() {
	$.fn.$ = function (fn) {
		return this.click(fn)
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
$L('ajax', 'keys', 'mouse')
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass
