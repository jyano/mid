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
$load(['adv', 'anim', 'animApps'])
function adv() {
	layout()
	function layout() {
		$.x = function (c, t) {
			var g = G(arguments), bd = $.bd()
			bd.empty()
			if (g.O_) {
				$CSS(g.f)
				if (g.s) {
					$.h1(g.s);
					$.hr().A()
				}
				bd.C(g.t || $r())
			}
			else {
				bd.C(c || $r())
				if (t) {
					bd.A($.h1(t))
				}
			}
			if (g.p) {
				bd.A($.hr())
			}
			return $
		}
		$.h = function () {
			var g = G(arguments), o
			bd = $.bd()
			bd.empty()
			bd.C($r())
			o = g.S_ ? {t: g.f, s: g.s} : {s: g.f}
			if (o.s) {
				$CSS(o.s)
			}
			if (o.t) {
				$.h1(o.t);
				$.hr().A()
			}
			return $
		}
		$.s = function (css, c, tx) {
			$CSS(css)
			$.x(c, tx)
			return $
		}
		_z = function z(a, b, c) {
			return U(b) ? _.size(a)
					: N(b) ? _z(a) == b
					: _z(a) == _z(b)
		}
		z = function (fn) {
			$('body').empty()
		}
	}
	
	$.rulers = function () {
		$.d('b', 100, 100).al(.3).dg()
		$.d('r', 100, 300).al(.3).dg()
	}
	$.dg = $.dragFrame = function (d) {
		var oD
		oD = $.d('y').pad(20).drag()
		d = d || $.d('r').mar(20)
		d.xPrp().a2(oD)
		d.oD = oD
		oD.XY(40, 40)
		return oD
	}
}
function alpha() {
	//$.fn.sz=function(sz){return this.at('size',sz)}
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
	$t = function (a, b) {
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
	}
	function ipsum() {
		$.ips = function (len) {
			len = len || 1;
			var str = '';
			_.t(len, function () {
				str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
			});
			return str
		}
		$.ipsP = function (len) {
			return $.p().A($.ipsum(len))
		}
		ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
		'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
		ips2 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
		'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
		'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
		'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
		'te feugait nulla facilisi.'
		ips3 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
		'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
		'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
		'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
		'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
		'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
		'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
		'ut laoreet dolore magna aliquam erat volutpat.'
		$.fn.ipsum = function () {
			var that = this
			_.each(arguments, function (num) {
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP = function () {
			var that = this
			_.each(arguments, function (num) {
				that.A($.ipsumP(num))
			})
			return this
		}
		$.fn.ips = $.fn.ipsum = function () {
			var that = this
			_.each(arguments, function (num) {
				that.A($.ipsum(num))
			})
			return this
		}
		$.fn.ipsumP = function () {
			var el = this
			_.e(arguments, function (num) {
				el.A($.ipsumP(num))
			})
			return el
		}
	}
	
	$.toColor = function (n1, n2, n3, n4) {
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
	}
	$.fn.Z = function (w, h) {
		return this.W(w).H(h || w)
	}
	$.fn.oH = $.fn.outerHeight
}
function scripts() {
	$.scr = function (scr, fn) {
		return $.getScript(scr, fn)
	}
	$.getMultiScripts = function (arr, path) {
		var _arr = $.map(arr, function (scr) {
			return $.getScript((path || "") + scr)
		})
		//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
		return $.when.apply($, _arr)
	}
	SCRIPTS = _.map([
		"socket.io/socket.io", "string", 'bb', 'bbmn', 'ko', 'mel', 'gq', 'objects', 'defaultMug', 'spriteSheets',
		'core', 'jqueryplugins', 'html', 'boot', 'ui', 'can', 'sys', 'images', 'event', 'socket', 'ranky', 'routeTests', 'nav', 'api', 'j3', 'display', 'animate', 'imagine', 'work', 'tween', 'universe', 'create', 'easel', 'displayObject', 'shape', 'text', 'mobile', 'animation', 'sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve', 'playgame', 'users', 'share', 'chat', 'messages', 'knock', 'bbtemps', 'backbone1', 'people', 'mar', 'backbone', 'angu'
		
		// ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
		// 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
		//  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
		//  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'
	], function (js) {
		return "/" + js + ".js"
	})
	// _.each(SCRIPTS, function(scr){$.scr(scr)})
	/*
	 dfr = $.getMultiScripts(SCRIPTS)
	 dfr.done(function(){alert('done')})
	 .always(function(){
	 alert('always')
	 $.scr('app')
	 })
	 .fail(function(){alert('fail')})
	 */
	GSCR = function () {
		$.scr = function (scr, fn) {
			return $.getScript(scr, fn)
		}
		$.getMultiScripts = function (arr, path) {
			var _arr = $.map(arr, function (scr) {
				return $.getScript((path || "") + scr)
			})
			//_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
			return $.when.apply($, _arr)
		}
		$.scr("https://code.jquery.com/color/jquery.color.js", function (a, b, c) {
			console.log(a + b + c)
			d = c
			$l('got script')
			$.$(function () {
				$.j({C: "z"}, 1).in(.5).j({C: 'r'}, 1).in(.5).j({C: "y"}, 1)
			})
		})
		dfr = $.Deferred(function (dfrd) {
			d = dfrd
			// $(dfrd.resolve)
		})
		testx = 100
		$.when(
				$.scr("/boxSprite.js"),
				$.scr("/easel.js")
		).done(function () {
					$l(testx)
				})
	}
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
