
$.hr = function (c, h, w) {
	var hr = $('<hr>')
	//  if( N(c) ){  return $.hr('z', c, h )  }
	//  hr = $('<hr>').h(h ||2).C(c||'z');
	//  if(w ){ hr.W(w ) }
	return hr
}
$.h1 = function () {
	var h = $('<h1>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.h2 = function () {
	var h = $('<h2>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.h3 = function () {
	var h = $('<h3>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.h4 = function () {
	var h = $('<h4>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.h5 = function () {
	var h = $('<h5>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.h6 = function () {
	var h = $('<h6>');
	h.A.apply(h, G(arguments));
	h.A()
	return h
}
$.a = function (a, f) {
	var g = G(arguments), a = g[0], f = g[1], la = a || ''
	$.a2 = function (a, fn) {
		var g = G(arguments), a = g[0], f = g[1], el = $.a().id(a).A(a);
		if (F(fn)) {
			el.o(fn)
		} else {
			el.hr(fn || '#')
		}
		if (g.n) {
			el.dd()
		}
		//  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"
		if (g.p) {
			el = li(el)
		}
		if (g.m) {
			el = li(el).K('active')
		}
		return el
	}
	l = $('<a>').A(a)//.id(a)
	if (F(f)) {
		l.$(f)
	} else {
		l.href(f || '#')
	}
	// if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }
	//if(g.p){ l = $.li( l ) }
	//if(g.m){ l = $.li( l ).K('active') }
	return l.A()
}
$.br = function (a) {
	if (U(a)) {
		return $('<br>')
	}
	var sp = $.sp();
	_.t(a, function () {
		sp.A($('<br>'))
	});
	return sp
}
 
$.sp = function () {
	var g = G(arguments),
			sp = $('<span>'), str = '';
	_.e(g, function (val) {
		if (S(val)) {
			str += val
		}
		else {
			sp.A(val)
		}
	});
	if (str) {
		sp.T(str)
	}
	sp.A()
	return sp
}
$.p = function () {
	var g = G(arguments), p = $('<p>')
	if (g.A_) {
		g.eF(function (g) {
			p.A(g)
		})
	}
	else {
		g.e(function (g) {
			p.A(g)
		})
	}
	p.A()
	return p
}
$.ps = function () {
	var sp = $.sp(), g = G(arguments)
	g.e(function (g) {
		sp.A($.p(g))
	})
	return sp
}
$.S = $.str = function () {
	var g = G(arguments), s = $('<strong>');
	_.e(g, function (g) {
		s.A(g)
	});
	return s
}
$.pre = function () {
	return $("<pre>").A()
}
$.b = function (a, k) {
	var g = G(arguments), b = $('<b>')
	//if(g.p){a =  '&nbsp;'+a  }
	//  b.H(a)
	//  b.K(k)
	if (a) {
		b = b.A(b)
	}
	if (!g.n) {
		b.A()
	}
	return b
}
$.hdr = function () {//$.H=
	var g = G(arguments), hdr = $('<header>')
	//  return $.ip().ty('header').n(n).v(v)
	g.e(function (q) {
		hdr.A(q)
	})
	hdr.A()
	return hdr
}
$.F = $.ftr = $.footer = function () {
	return $('<footer>')
}
$.B = function (a) {
	var q = $('<bold>')
	if (a) {
		q.A(a)
	}
	return q
}
$.nv = function () {
	return $('<nav>')
}
$.sc = $.sct = function (a) {
var g=G(arguments)
	var sc = $('<section>')
	
	if(g.A){
		_.e(g,function(el){sc.A(el)})
	}
	
	else if (a) {
		sc.id(a)
	}
	
	sc.A()
	return sc
}
$.scI =   function () {
	var g = G(arguments)
	var sc = $.sc()
	sc.id(g.f)
	if (A(g.s)) {
		_.e(g.s, function (el) {
			sc.A(el)
		})}
	return sc
}

$.ac = function () {//$.H=$.arg=
	var g = G(arguments), art = $('<article>')
	g.e(function (q) {
		art.A(q)
	})
	art.A()
	return art
}
$.em = function () {
	var em = $('<em>');
	return em
}
$.tp = function (id) {
	return $('<template>').id(id)
}
$.as = function () {
	var a = $('<aside>')
	G(arguments).e(function (q) {
		a.A(q)
	})
	a.A()
	return a
}
$.header = function () {
	return $('<header>')
}
// *** move this: !!!!
$.fn.$ = function (fn) {
	return this.click(fn)
}
$.A = function () {
	var g = G(arguments)
	g.e(function (el) {
		$('body').A(el)
	})
}
function messageSystem() {
	Ms$ = function (ms) {
		$.h1(ms)
	}
	$Ms = function (ms) {
		return $.d().fS(80).C($r()).col($r()).A(ms)
	};
	$MS = function (ms, cHeader, cBody) {
		z()
		var m = $Ms(ms)
		if (S(cHeader)) {
			m.C(cHeader)
		}
		if (S(cBody)) {
			$.C(cBody)
		}
		return $
	}
	$$$ = function (ms) {
		z()
		$Ms(ms)
	}
}
messageSystem()
$.ipI = function (id, arr) {
	var q = $.ip().id(id)
	if (A(arr)) {
		_.e(arr, function (qq) {
			q.A(qq)
		})
	}
	else if (arr) {
		q.A(arr)
	}
	return q
}
$.ulI = function (id, arr) {
	var q = $.ul().id(id)
	if (A(arr)) {
		_.e(arr, function (qq) {
			q.A(qq)
		})
	}
	else if (arr) {
		q.A(arr)
	}
	return q
}
$.tK = function (k, toAdd) {
	var g = G(arguments),
			t = $.t()
	t.K(k)
	if (A(toAdd)) {
		_.e(toAdd, function (q) {
			t.A(q)
		})
	}
	return t
}
$rtHeader = function (name) {
	$dA($spA('this is RoApp: '), $dA('this is a RoApp').fS(75).col('r'),
			$spA2(name).fS(100), $.d('B').W('auto').H(8))
}
$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}
//_.ex = $ext = ext = function (o) {o.e = o.extend;return o}	// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
$Fn = function (name, fn) {
	window[name] = fn;
	return fn
}
$dA = function () {
	var d = $.d()
	d.A.apply(d, arguments)
	return d
}
$spA = function () {
	var sp = $.sp().fS(75).col('r')
	sp.A.apply(sp, arguments)
	return sp
}
$spA2 = function () {
	var sp = $.sp().fS(100).col('x').C('o')
	sp.A.apply(sp, arguments)
	return sp
}
$.__d = function () {
	var d = $('<div>')
	_.e(arguments, function (ch) {
		d.A(ch)
	})
	return d
}
$bd = function () {
	var g = G(arguments),
			bd = $('body')
	if (g.f) {
		bd.css.apply(bd, g)
	}
	return bd
}
$.fn.dI = function () {
	return this.A(
			$.dI.apply($, arguments)
	)
}