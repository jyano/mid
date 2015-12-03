function _pre() {
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
}
$L()
Bb.R = Bb.Router;
Bb.R.x = Bb.R.extend
rtr.n = function (url, op) {
	this.navigate(url, op);
	return this
}
rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
	return this.n(url,  {trigger: true})
}
rtr.rt =  function (rt, fn) {
	var rtr = this
	if (O(rt)) {
		_.e(rt, function (v, k) {
			rtr.rt(k, v)
		})
	}
	else {
		this.on('route:' + rt, fn)
	}
	return this
}  // rtr.A = ro.oR =
_R =  function (ob) {//metaClass
	ob = ob || {}
	if (ob.i) {
		ob.initialize = ob.i
	}
	if (ob.$) {
		ob.initialize = function () {
			Bb.h.start({pushState: true})
			if (F(ob.$)) {
				ob.$()
			}
		}
	}
	if (ob.x) {
		ob.index = ob.x
	}
	if (ob.h) {
		ob.home = ob.h
	}
	ob.routes = ob.R ? ob.R : ob.routes || ob.rt || ob.r || {}
	ob.routes[''] = ob.routes[''] || 'index'
	ob.routes = _.x({'': '_'}, ob.routes)
	ob.routes['*other'] = 'd'
	ob = _.x({
		_: function () {
			$l('INDEX ( _ ) ')
		},
		d: function (other) {
			$l('DEFAULT(d): "' + other + '"')
		}
	}, ob)
	return Bb.R.x(ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
} //metaClass.. no need for 'new' //= $$R
$R=function(ob){
	var Rt = _R(ob)
	var rt =  new Rt()
	rt._ = function(){
	Bb.history.start()}
	rt.$=function(){
		Bb.history.start({pushState:true})
	}
	return rt
 }
 _$r = function(ob){
	 var rt = $R(ob)
	 rt._()
	 return rt
 }
Bb.h = Bb.history
Bb.h.tr =  Bb.h.trigger
Bb.h.s = Bb.h.start
Bb.H = Bb.History
rt.rp = function (url, op) {
	return this._n(url, _.x({replace: true},
			G(arguments).n ? {trigger: true} : {}))
}//navigate: replace
 
 
 