function scripts() {
	$.scr = function (js) {
		var script = $('<script>')
		script.attr('src', js);
		return script
	}
	$.j = $.js = function (js) {
		$('body').A($.scr(js))
	}
	$(function () {
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )
		$.j('/us.js')
		$.j('/string.js')
		$.j('/both.js')
		//$.j('/jq.js')
		//$.j('/jqSer.js')
		$.j('/bs.js')
		$.j('/frontOb.js')
		$.j('/handy.js')
		$.j('/sty.js')
		$.j('/rules.js')
		$.j('/flex.js')
		$.j('/bb.js')
		$.j('/bbCore.js')
		$.j('/bbLs.js')
		arr = [
			"us", 'string', 'both', 'jq', 'jqSer', 'bs', 'frontOb', 'handy', 'sty',
			'rules', 'flex', 'flexApps', 'boot', 'bb', 'bbCore', 'bbLs', 'bbTemplate',
			'bbApps', 'avail', 'bbLsApps', 'BfRoll', 'blog'
		]
	})
}
J = JSON
J.p = J.parse
J.s = J.stringify
$w = window
_lS = localStorage
dfx = {
	tdTask: "td-task",
	tdHeader: "task-header",
	tdDate: "task-date", tdDesc: "task-desc",
	taskId: "task-", formId: "td-form",
	dataAttribute: "data",
	delDiv: 'delete-div'
}
 
M$ = function (ob) {
	ob = O(ob) ? ob : {}
	var Md, md
	Md = bb._M(ob)
	md = new Md(ob)
	return md
}
$Ms = function (ms) {
	$.h1(ms)
}
$$$ = function (ms) {
	z()
	$Ms(ms)
}
 
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
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
 
 
z=function(){$('body').E()}
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
 
$.fn.v = $.fn.val
$.fn.v_ = function () {
	var val = this.val();
	this.val('');
	return val
}
//$.fn.A = $.fn.append;
//$.fn.K = $.fn.addClass
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