$L('superDuper', 'alpha', 'scripts', 'ajax', 'events',
 'anim', 'lettering', 'superWebApps', 'layout', 'adv','alpha', 'ipsum')
function _pre(){
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
$.fn.v = $.fn.V = function (newVal) {
	var g = G(arguments)
	if (U(newVal)) {
		var v = this.val()
		if (g.n) {
			this.val('')
		}
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
}
function superDuper(){
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
}
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
function adv() {
 
 
	
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
function ajax(){
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
function lettering(){
//this is actually the 'lettering' plugin
	(function ($) {
		function injector(t, splitter, klass, after) {
			var text = t.text()
					, a = text.split(splitter)
					, inject = '';
			if (a.length) {
				$(a).each(function (i, item) {
					inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
				});
				t.attr('aria-label', text)
						.empty()
						.append(inject)
			}
		}
		
		var methods = {
			init: function () {
				return this.each(function () {
					injector($(this), '', 'char', '');
				});
			},
			words: function () {
				return this.each(function () {
					injector($(this), ' ', 'word', ' ');
				});
			},
			lines: function () {
				return this.each(function () {
					var r = "eefec303079ad17405c889e092e105b0";
					// Because it's hard to split a <br/> tag consistently across browsers,
					// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
					// (of the word "split").  If you're trying to use this plugin on that
					// md5 hash string, it will fail because you're being ridiculous.
					injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
				});
			}
		};
		$.fn.lettering = function (method) {
			// Method calling logic
			if (method && methods[method]) {
				return methods[method].apply(this, [].slice.call(arguments, 1));
			} else if (method === 'letters' || !method) {
				return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
			}
			$.error('Method ' + method + ' does not exist on jQuery.lettering');
			return this;
		};
	})(jQuery)
	LETTERING = function () {
		z()
		span = $.span('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	LETTERING = function () {
		z()
		span = $.span('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	FALLING = function () {
		z()
		//this goes in css
		$header2 = $.span('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.addClass('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	FALLING = function () {
		z()
		//this goes in css
		$header2 = $.span('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.addClass('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
//$load(['officialColorPlug', 'loadSerJLib', 'letterng'])
	function letterng() {
		letteringPlug = function () {
			var methods = {
				init: function () {
					return this.each(function () {
						injector($(this), '', 'char', '')
					})
				},
				words: function () {
					return this.each(function () {
						injector($(this), ' ', 'word', ' ')
					})
				},
				lines: function () {
					return this.each(function () {
						var r = "eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
						// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
						// (of the word "split").  If you're trying to use this plugin on that
						// md5 hash string, it will fail because you're being ridiculous.
						injector($(this).children("br").replaceWith(r).end(), r, 'line', '')
					})
				}
			}
			$.fn.lettering = function (method) {
				if (method && methods[method]) {
					return methods[method].apply(this, [].slice.call(arguments, 1))
				}
				else if (method === 'letters' || !method) {
					return methods.init.apply(this, [].slice.call(arguments, 0))
				} // always pass an array
				$.error('Method ' + method + ' does not exist on jQuery.lettering');
				return this
			}
			function injector(t, splitter, klass, after) {
				var text = t.text(), a = text.split(splitter), inject = '';
				if (a.length) {
					$(a).each(function (i, item) {
						inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
					})
					t.attr('aria-label', text).empty().append(inject)
				}
			}
		};
		letteringPlug()
	}
	
	function loadSerJLib() {
		$l('loading $.fn.serializJSON')
		// jQuery('form').serializeJSON()
		$.fn.serializeJSON = function (options) {
			var serializedObject, formAsArray, keys, value, f, opts;
			f = $.serializeJSON;
			formAsArray = this.serializeArray(); // array of objects {name, value}
			opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
			serializedObject = {};
			$.each(
					formAsArray, function (i, input) {
						keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
						value = f.parseValue(input.value, opts); // string, number, boolean or null
						if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
						f.deepSet(serializedObject, keys, value, opts);
					}
			);
			return serializedObject;
		}
		// Use $.serializeJSON as namespace for the auxiliar functions
		// and to define defaults
		$.serializeJSON = {
			defaultOptions: {
				parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
				parseBooleans: false, // convert "true", "false" to true, false
				parseNulls: false, // convert "null" to null
				parseAll: false, // all of the above
				parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
				useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
			},
			// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
			optsWithDefaults: function (options) {
				var f, parseAll;
				if (options == null) options = {}; // arg default value = {}
				f = $.serializeJSON;
				parseAll = f.optWithDefaults('parseAll', options);
				return {
					parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
					parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
					parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
					parseWithFunction: f.optWithDefaults('parseWithFunction', options),
					useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
				}
			},
			optWithDefaults: function (key, options) {
				return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
			},
			// Convert the string to a number, boolean or null, depending on the enable option and the string format.
			parseValue: function (str, opts) {
				var value, f;
				f = $.serializeJSON;
				if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
				if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
				if (opts.parseNulls && str == "null") return null; // null
				return str; // otherwise, keep same string
			},
			isObject: function (obj) {
				return obj === Object(obj);
			}, // is this variable an object?
			isUndefined: function (obj) {
				return obj === void 0;
			}, // safe check for undefined values
			isValidArrayIndex: function (val) {
				return /^[0-9]+$/.test(String(val));
			}, // 1,2,3,4 ... are valid array indexes
			isNumeric: function (obj) {
				return obj - parseFloat(obj) >= 0;
			}, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
			// Split the input name in programatically readable keys
			// "foo" => ['foo']
			// "[foo]" => ['foo']
			// "foo[inn][bar]" => ['foo', 'inn', 'bar']
			// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
			// "arr[][val]" => ['arr', '', 'val']
			splitInputNameIntoKeysArray: function (name) {
				var keys, last, f;
				f = $.serializeJSON;
				if (f.isUndefined(name)) {
					throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
				}
				keys = $.map(
						name.split('['), function (key) {
							last = key[key.length - 1];
							return last === ']' ? key.substring(0, key.length - 1) : key;
						}
				);
				if (keys[0] === '') {
					keys.shift();
				} // "[foo][inn]" should be same as "foo[inn]"
				return keys;
			},
			// Set a value in an object or array, using multiple keys to set in a nested object or array:
			//
			// deepSet(obj, ['foo'], v) // obj['foo'] = v
			// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
			// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
			//
			// deepSet(obj, ['0'], v) // obj['0'] = v
			// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
			// deepSet(arr, [''], v) // arr.push(v)
			// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
			//
			// arr = [];
			// deepSet(arr, ['', v] // arr => [v]
			// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
			// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
			// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
			//
			deepSet: function (o, keys, value, opts) {
				var key, nextKey, tail, lastIdx, lastVal, f;
				if (opts == null) opts = {};
				f = $.serializeJSON;
				if (f.isUndefined(o)) {
					throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
				}
				if (!keys || keys.length === 0) {
					throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
				}
				key = keys[0];
				// Only one key, then it's not a deepSet, just assign the value.
				if (keys.length === 1) {
					if (key === '') {
						o.push(value); // '' is used to push values into the array (assume o is an array)
					} else {
						o[key] = value; // other keys can be used as object keys or array indexes
					}
					// With more keys is a deepSet. Apply recursively.
				} else {
					nextKey = keys[1];
					// '' is used to push values into the array,
					// with nextKey, set the value into the same object, in object[nextKey].
					// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
					if (key === '') {
						lastIdx = o.length - 1; // asume o is array
						lastVal = o[lastIdx];
						if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
							key = lastIdx; // then set the new value in the same object element
						} else {
							key = lastIdx + 1; // otherwise, point to set the next index in the array
						}
					}
					// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
					if (f.isUndefined(o[key])) {
						if (nextKey === '') { // '' is used to push values into the array.
							o[key] = []
						} else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
							o[key] = []
						} else { // for anything else, use an object, where nextKey is going to be the attribute name
							o[key] = {}
						}
					}
					// Recursively set the inner object
					tail = keys.slice(1)
					f.deepSet(o[key], tail, value, opts)
				}
			}
		}
	}
	
	LETTERING = function () {
		$.x()
		sp = $.sp('hello').A()
		sp.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans = sp.fi('span')
		$('.dropped span')
				.css({
					transition: 'all 0.3s ease-in'
				})
	}
	LETTERING1 = function () {
		z()
		LETTERINGPLUG = function () {
			function injector(t, splitter, klass, after) {
				var text = t.text()
						, a = text.split(splitter)
						, inject = '';
				if (a.length) {
					$(a).each(
							function (i, item) {
								inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
							}
					);
					t.attr('aria-label', text)
							.empty()
							.append(inject)
				}
			}
			
			var methods = {
				init: function () {
					return this.each(
							function () {
								injector($(this), '', 'char', '');
							}
					);
				},
				words: function () {
					return this.each(
							function () {
								injector($(this), ' ', 'word', ' ');
							}
					);
				},
				lines: function () {
					return this.each(
							function () {
								var r = "eefec303079ad17405c889e092e105b0";
								// Because it's hard to split a <br/> tag consistently across browsers,
								// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
								// (of the word "split").  If you're trying to use this plugin on that
								// md5 hash string, it will fail because you're being ridiculous.
								injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
							}
					);
				}
			};
			$.fn.lettering = function (method) {
				// Method calling logic
				if (method && methods[method]) {
					return methods[method].apply(this, [].slice.call(arguments, 1));
				} else if (method === 'letters' || !method) {
					return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
				}
				$.error('Method ' + method + ' does not exist on jQuery.lettering');
				return this;
			};
		};
		LETTERINGPLUG()
		span = $.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	FALLING = function () {
		z();
		//this goes in css
		$header2 = $.sp('helllllo').A();
		$header2.lettering(); // wrap <span class="charx"/ > around each character within header
		$spans = $header2.fi('span');
		delay = 0;
		$header2.$(
				function () {
					$spans.e(
							function () {
								$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
								delay += 0.1
							}
					);
					$header2.K('dropped'); // Add "dropped" class to header to apply transition
					setTimeout(
							function () { // reset header code
								$spans.e(
										function () {
											$(this).css({transitionDelay: '0ms'})
										}
								);
								// set transition delay to 0 so when 'dropped' class is removed,
								// letter appears instantly
								$header2.removeClass('dropped'); // remove class at the "end" to reset header.
								delay = 0
							}, 1800
					); // 1800 is just rough estimate of time transition will finish, not the best way
				}
		)
	}
	FALLING1 = function () {
		z()
		//this goes in css
		$header2 = $.sp('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	function color() {
		function officialColorPlug() {
			
			/*!
			 * jQuery Color Animations v@VERSION
			 * https://github.com/jquery/jquery-color
			 *
			 * Copyright jQuery Foundation and other contributors
			 * Released under the MIT license.
			 * http://jquery.org/license
			 *
			 * Date: @DATE
			 */
			(function (jQuery, undefined) {
				var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				// plusequals test for += 100 -= 100
						rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
				// a set of RE's that can match strings and generate color tuples.
						stringParsers = [{
							re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							parse: function (execResult) {
								return [
									execResult[1],
									execResult[2],
									execResult[3],
									execResult[4]
								];
							}
						}, {
							re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							parse: function (execResult) {
								return [
									execResult[1] * 2.55,
									execResult[2] * 2.55,
									execResult[3] * 2.55,
									execResult[4]
								];
							}
						}, {
							// this regex ignores A-F because it's compared against an already lowercased string
							re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
							parse: function (execResult) {
								return [
									parseInt(execResult[1], 16),
									parseInt(execResult[2], 16),
									parseInt(execResult[3], 16)
								];
							}
						}, {
							// this regex ignores A-F because it's compared against an already lowercased string
							re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
							parse: function (execResult) {
								return [
									parseInt(execResult[1] + execResult[1], 16),
									parseInt(execResult[2] + execResult[2], 16),
									parseInt(execResult[3] + execResult[3], 16)
								];
							}
						}, {
							re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
							space: "hsla",
							parse: function (execResult) {
								return [
									execResult[1],
									execResult[2] / 100,
									execResult[3] / 100,
									execResult[4]
								];
							}
						}],
				// jQuery.Color( )
						color = jQuery.Color = function (color, green, blue, alpha) {
							return new jQuery.Color.fn.parse(color, green, blue, alpha);
						},
						spaces = {
							rgba: {
								props: {
									red: {
										idx: 0,
										type: "byte"
									},
									green: {
										idx: 1,
										type: "byte"
									},
									blue: {
										idx: 2,
										type: "byte"
									}
								}
							},
							hsla: {
								props: {
									hue: {
										idx: 0,
										type: "degrees"
									},
									saturation: {
										idx: 1,
										type: "percent"
									},
									lightness: {
										idx: 2,
										type: "percent"
									}
								}
							}
						},
						propTypes = {
							"byte": {
								floor: true,
								max: 255
							},
							"percent": {
								max: 1
							},
							"degrees": {
								mod: 360,
								floor: true
							}
						},
						support = color.support = {},
				// element for support tests
						supportElem = jQuery("<p>")[0],
				// colors = jQuery.Color.names
						colors,
				// local aliases of functions called often
						each = jQuery.each;
// determine rgba support immediately
				supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
				support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
// define cache name and alpha properties
// for rgba and hsla spaces
				each(spaces, function (spaceName, space) {
					space.cache = "_" + spaceName;
					space.props.alpha = {
						idx: 3,
						type: "percent",
						def: 1
					};
				});
				function clamp(value, prop, allowEmpty) {
					var type = propTypes[prop.type] || {};
					if (value == null) {
						return (allowEmpty || !prop.def) ? null : prop.def;
					}
					// ~~ is an short way of doing floor for positive numbers
					value = type.floor ? ~~value : parseFloat(value);
					// IE will pass in empty strings as value for alpha,
					// which will hit this case
					if (isNaN(value)) {
						return prop.def;
					}
					if (type.mod) {
						// we add mod before modding to make sure that negatives values
						// get converted properly: -10 -> 350
						return (value + type.mod) % type.mod;
					}
					// for now all property types without mod have min and max
					return 0 > value ? 0 : type.max < value ? type.max : value;
				}
				
				function stringParse(string) {
					var inst = color(),
							rgba = inst._rgba = [];
					string = string.toLowerCase();
					each(stringParsers, function (i, parser) {
						var parsed,
								match = parser.re.exec(string),
								values = match && parser.parse(match),
								spaceName = parser.space || "rgba";
						if (values) {
							parsed = inst[spaceName](values);
							// if this was an rgba parse the assignment might happen twice
							// oh well....
							inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
							rgba = inst._rgba = parsed._rgba;
							// exit each( stringParsers ) here because we matched
							return false;
						}
					});
					// Found a stringParser that handled it
					if (rgba.length) {
						
						// if this came from a parsed string, force "transparent" when alpha is 0
						// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
						if (rgba.join() === "0,0,0,0") {
							jQuery.extend(rgba, colors.transparent);
						}
						return inst;
					}
					// named colors
					return colors[string];
				}
				
				color.fn = jQuery.extend(color.prototype, {
					parse: function (red, green, blue, alpha) {
						if (red === undefined) {
							this._rgba = [null, null, null, null];
							return this;
						}
						if (red.jquery || red.nodeType) {
							red = jQuery(red).css(green);
							green = undefined;
						}
						var inst = this,
								type = jQuery.type(red),
								rgba = this._rgba = [];
						// more than 1 argument specified - assume ( red, green, blue, alpha )
						if (green !== undefined) {
							red = [red, green, blue, alpha];
							type = "array";
						}
						if (type === "string") {
							return this.parse(stringParse(red) || colors._default);
						}
						if (type === "array") {
							each(spaces.rgba.props, function (key, prop) {
								rgba[prop.idx] = clamp(red[prop.idx], prop);
							});
							return this;
						}
						if (type === "object") {
							if (red instanceof color) {
								each(spaces, function (spaceName, space) {
									if (red[space.cache]) {
										inst[space.cache] = red[space.cache].slice();
									}
								});
							} else {
								each(spaces, function (spaceName, space) {
									var cache = space.cache;
									each(space.props, function (key, prop) {
										
										// if the cache doesn't exist, and we know how to convert
										if (!inst[cache] && space.to) {
											
											// if the value was null, we don't need to copy it
											// if the key was alpha, we don't need to copy it either
											if (key === "alpha" || red[key] == null) {
												return;
											}
											inst[cache] = space.to(inst._rgba);
										}
										// this is the only case where we allow nulls for ALL properties.
										// call clamp with alwaysAllowEmpty
										inst[cache][prop.idx] = clamp(red[key], prop, true);
									});
									// everything defined but alpha?
									if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
										// use the default of 1
										inst[cache][3] = 1;
										if (space.from) {
											inst._rgba = space.from(inst[cache]);
										}
									}
								});
							}
							return this;
						}
					},
					is: function (compare) {
						var is = color(compare),
								same = true,
								inst = this;
						each(spaces, function (_, space) {
							var localCache,
									isCache = is[space.cache];
							if (isCache) {
								localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
								each(space.props, function (_, prop) {
									if (isCache[prop.idx] != null) {
										same = ( isCache[prop.idx] === localCache[prop.idx] );
										return same;
									}
								});
							}
							return same;
						});
						return same;
					},
					_space: function () {
						var used = [],
								inst = this;
						each(spaces, function (spaceName, space) {
							if (inst[space.cache]) {
								used.push(spaceName);
							}
						});
						return used.pop();
					},
					transition: function (other, distance) {
						var end = color(other),
								spaceName = end._space(),
								space = spaces[spaceName],
								startColor = this.alpha() === 0 ? color("transparent") : this,
								start = startColor[space.cache] || space.to(startColor._rgba),
								result = start.slice();
						end = end[space.cache];
						each(space.props, function (key, prop) {
							var index = prop.idx,
									startValue = start[index],
									endValue = end[index],
									type = propTypes[prop.type] || {};
							// if null, don't override start value
							if (endValue === null) {
								return;
							}
							// if null - use end
							if (startValue === null) {
								result[index] = endValue;
							} else {
								if (type.mod) {
									if (endValue - startValue > type.mod / 2) {
										startValue += type.mod;
									} else if (startValue - endValue > type.mod / 2) {
										startValue -= type.mod;
									}
								}
								result[index] = clamp(( endValue - startValue ) * distance + startValue, prop);
							}
						});
						return this[spaceName](result);
					},
					blend: function (opaque) {
						// if we are already opaque - return ourself
						if (this._rgba[3] === 1) {
							return this;
						}
						var rgb = this._rgba.slice(),
								a = rgb.pop(),
								blend = color(opaque)._rgba;
						return color(jQuery.map(rgb, function (v, i) {
							return ( 1 - a ) * blend[i] + a * v;
						}));
					},
					toRgbaString: function () {
						var prefix = "rgba(",
								rgba = jQuery.map(this._rgba, function (v, i) {
									return v == null ? ( i > 2 ? 1 : 0 ) : v;
								});
						if (rgba[3] === 1) {
							rgba.pop();
							prefix = "rgb(";
						}
						return prefix + rgba.join() + ")";
					},
					toHslaString: function () {
						var prefix = "hsla(",
								hsla = jQuery.map(this.hsla(), function (v, i) {
									if (v == null) {
										v = i > 2 ? 1 : 0;
									}
									// catch 1 and 2
									if (i && i < 3) {
										v = Math.round(v * 100) + "%";
									}
									return v;
								});
						if (hsla[3] === 1) {
							hsla.pop();
							prefix = "hsl(";
						}
						return prefix + hsla.join() + ")";
					},
					toHexString: function (includeAlpha) {
						var rgba = this._rgba.slice(),
								alpha = rgba.pop();
						if (includeAlpha) {
							rgba.push(~~( alpha * 255 ));
						}
						return "#" + jQuery.map(rgba, function (v) {
									
									// default to 0 when nulls exist
									v = ( v || 0 ).toString(16);
									return v.length === 1 ? "0" + v : v;
								}).join("");
					},
					toString: function () {
						return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
					}
				});
				color.fn.parse.prototype = color.fn;
// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
				function hue2rgb(p, q, h) {
					h = ( h + 1 ) % 1;
					if (h * 6 < 1) {
						return p + (q - p) * h * 6;
					}
					if (h * 2 < 1) {
						return q;
					}
					if (h * 3 < 2) {
						return p + (q - p) * ((2 / 3) - h) * 6;
					}
					return p;
				}
				
				spaces.hsla.to = function (rgba) {
					if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
						return [null, null, null, rgba[3]];
					}
					var r = rgba[0] / 255,
							g = rgba[1] / 255,
							b = rgba[2] / 255,
							a = rgba[3],
							max = Math.max(r, g, b),
							min = Math.min(r, g, b),
							diff = max - min,
							add = max + min,
							l = add * 0.5,
							h, s;
					if (min === max) {
						h = 0;
					} else if (r === max) {
						h = ( 60 * ( g - b ) / diff ) + 360;
					} else if (g === max) {
						h = ( 60 * ( b - r ) / diff ) + 120;
					} else {
						h = ( 60 * ( r - g ) / diff ) + 240;
					}
					// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
					// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
					if (diff === 0) {
						s = 0;
					} else if (l <= 0.5) {
						s = diff / add;
					} else {
						s = diff / ( 2 - add );
					}
					return [Math.round(h) % 360, s, l, a == null ? 1 : a];
				};
				spaces.hsla.from = function (hsla) {
					if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
						return [null, null, null, hsla[3]];
					}
					var h = hsla[0] / 360,
							s = hsla[1],
							l = hsla[2],
							a = hsla[3],
							q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
							p = 2 * l - q;
					return [
						Math.round(hue2rgb(p, q, h + ( 1 / 3 )) * 255),
						Math.round(hue2rgb(p, q, h) * 255),
						Math.round(hue2rgb(p, q, h - ( 1 / 3 )) * 255),
						a
					];
				};
				each(spaces, function (spaceName, space) {
					var props = space.props,
							cache = space.cache,
							to = space.to,
							from = space.from;
					// makes rgba() and hsla()
					color.fn[spaceName] = function (value) {
						
						// generate a cache for this space if it doesn't exist
						if (to && !this[cache]) {
							this[cache] = to(this._rgba);
						}
						if (value === undefined) {
							return this[cache].slice();
						}
						var ret,
								type = jQuery.type(value),
								arr = ( type === "array" || type === "object" ) ? value : arguments,
								local = this[cache].slice();
						each(props, function (key, prop) {
							var val = arr[type === "object" ? key : prop.idx];
							if (val == null) {
								val = local[prop.idx];
							}
							local[prop.idx] = clamp(val, prop);
						});
						if (from) {
							ret = color(from(local));
							ret[cache] = local;
							return ret;
						} else {
							return color(local);
						}
					};
					// makes red() green() blue() alpha() hue() saturation() lightness()
					each(props, function (key, prop) {
						// alpha is included in more than one space
						if (color.fn[key]) {
							return;
						}
						color.fn[key] = function (value) {
							var vtype = jQuery.type(value),
									fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
									local = this[fn](),
									cur = local[prop.idx],
									match;
							if (vtype === "undefined") {
								return cur;
							}
							if (vtype === "function") {
								value = value.call(this, cur);
								vtype = jQuery.type(value);
							}
							if (value == null && prop.empty) {
								return this;
							}
							if (vtype === "string") {
								match = rplusequals.exec(value);
								if (match) {
									value = cur + parseFloat(match[2]) * ( match[1] === "+" ? 1 : -1 );
								}
							}
							local[prop.idx] = value;
							return this[fn](local);
						};
					});
				});
// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
				color.hook = function (hook) {
					var hooks = hook.split(" ");
					each(hooks, function (i, hook) {
						jQuery.cssHooks[hook] = {
							set: function (elem, value) {
								var parsed, curElem,
										backgroundColor = "";
								if (value !== "transparent" && ( jQuery.type(value) !== "string" || ( parsed = stringParse(value) ) )) {
									value = color(parsed || value);
									if (!support.rgba && value._rgba[3] !== 1) {
										curElem = hook === "backgroundColor" ? elem.parentNode : elem;
										while (
										(backgroundColor === "" || backgroundColor === "transparent") &&
										curElem && curElem.style
												) {
											try {
												backgroundColor = jQuery.css(curElem, "backgroundColor");
												curElem = curElem.parentNode;
											} catch (e) {
											}
										}
										value = value.blend(backgroundColor && backgroundColor !== "transparent" ?
												backgroundColor :
												"_default");
									}
									value = value.toRgbaString();
								}
								try {
									elem.style[hook] = value;
								} catch (e) {
									// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
								}
							}
						};
						jQuery.fx.step[hook] = function (fx) {
							if (!fx.colorInit) {
								fx.start = color(fx.elem, hook);
								fx.end = color(fx.end);
								fx.colorInit = true;
							}
							jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
						};
					});
				};
				color.hook(stepHooks);
				jQuery.cssHooks.borderColor = {
					expand: function (value) {
						var expanded = {};
						each(["Top", "Right", "Bottom", "Left"], function (i, part) {
							expanded["border" + part + "Color"] = value;
						});
						return expanded;
					}
				};
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
				colors = jQuery.Color.names = {
					// 4.1. Basic color keywords
					aqua: "#00ffff",
					black: "#000000",
					blue: "#0000ff",
					fuchsia: "#ff00ff",
					gray: "#808080",
					green: "#008000",
					lime: "#00ff00",
					maroon: "#800000",
					navy: "#000080",
					olive: "#808000",
					purple: "#800080",
					red: "#ff0000",
					silver: "#c0c0c0",
					teal: "#008080",
					white: "#ffffff",
					yellow: "#ffff00",
					// 4.2.3. "transparent" color keyword
					transparent: [null, null, null, 0],
					_default: "#ffffff"
				};
			}(jQuery));
		}
		
		function svgColNames() {
			jQuery.extend(jQuery.Color.names, {
				// 4.3. Extended color keywords (minus the basic ones in core color plugin)
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				blanchedalmond: "#ffebcd",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkgrey: "#a9a9a9",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkslategrey: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dimgrey: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				gold: "#ffd700",
				goldenrod: "#daa520",
				greenyellow: "#adff2f",
				grey: "#808080",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavender: "#e6e6fa",
				lavenderblush: "#fff0f5",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgray: "#d3d3d3",
				lightgreen: "#90ee90",
				lightgrey: "#d3d3d3",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370db",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				oldlace: "#fdf5e6",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#db7093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				slategrey: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				whitesmoke: "#f5f5f5",
				yellowgreen: "#9acd32"
			});
		}
	}
}
function events(){
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
	keys()
	function keys() {
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
}
function anim(){
	$.fn.st = $.fn.stop
	$.fn.fT = $.fn.f2 = $.fn.fadeTo
	$.fn.an = function (a, b, c, d) {
		var g = G(arguments), q = this
		//if (N(g.s)) {g.s *= 1000}
		this.animate(
				$.qs(g.f), g.s, g.t, g[3], g[4])
		return this
	}
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.cQ = $.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	ANob = {
		B: 'bottom', L: 'left', R: 'right', T: 'top',
		b: 'borderWidth', bb: 'borderBottomWidth',
		bl: 'borderLeftWidth', br: 'borderRightWidth',
		bt: 'borderTopWidth', bs: 'borderSpacing',
		C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
		mh: 'minHeight', mw: 'minWidth',
		i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
		m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
		mt: 'marginTop', o: ' outlineWidth',
		p: ' padding', pb: 'paddingBottom',
		pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
		ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
	}
	ANob = {
		B: 'bottom', L: 'left', R: 'right', T: 'top',
		b: 'borderWidth', bb: 'borderBottomWidth',
		bl: 'borderLeftWidth', br: 'borderRightWidth',
		bt: 'borderTopWidth', bs: 'borderSpacing',
		C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
		mh: 'minHeight', mw: 'minWidth',
		i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
		m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
		mt: 'marginTop', o: ' outlineWidth',
		p: ' padding', pb: 'paddingBottom',
		pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
		ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
	}
	$.fn.st = $.fn.stop
	$.fn.f2 = $.fn.fadeTo
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.an = $.fn.a = function (a, b, c, d) {
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.an = $.fn.a = function (a, b, c, d) {
		var g = G(arguments), o
		o = g.f
		var q = this
		if (O(a)) {
			if (a.c) {
				a.color = oO('c', a.c)
			}
			if (a.C) {
				a.backgroundColor = oO('c', a.C)
			}
		}
		q.animate(a, b, c, d)
		return q
		if (o.C) {//$l(o.C+'-->');
			o.C = oO('c', o.C);
			//$l(o.C)
		}
		_.e(o, function (v, k) {
			if (ANob[k]) {
				o[ANob[k]] = v
			}
		})
		if (N(g.s)) {
			g.s *= 1000
		}
		_p = o
		this.an(o, g.s, g.t, g[3], g[4])
		return this
		$.an = $.j = function () {
			var bd = $.bd();
			return bd.j.apply(bd, G(arguments))
		}
	}
	an = function (q, a) {
		alert('an')
		if (q.han) {
			_.xI(q.han)
		}
		if (a.u) {
			q.bi(a.u)
		}
		if (a.n > 1) {
			q.han = _.sI(function () {
				a.c++
				if (!a.l && a.c > a.n) {
					_.xI(q.han);
					q.han = false
				}
				else {
					a.c %= a.n
				}
				q.sFr(a)
			}, a.r)
		}
	}
	$.aF = $.anFr = $.anf = function (n, w) {
		var c = 0;
		n = n || 10;
		w = w || 20;
		$.ev(function () {
			q.sFr(c, w)
			c = (c + 1) % n
		})
	}
	$.notAn = function (a) { // sel
		return a.filter(':not(:animated)')
	}
	$.fn.bgImg = $.backgroundImage
	$.fn.gFr = $.fn.getFrame
	$.fn.sFr = $.fn.setFrame
	$.fn.anFr = $.fn.animateFrames
	$.fn.xq = $.fn.xQ = $.fn.clrQ = $.fn.clearQueue
	$.fn.qu = $.fn.queue
	$.fn.dq = $.fn.dqu = $.fn.dequeue
	$.fn.bdC = function (a) {
		return this.css("border-color", oO('c', a || 'r'))
	}
	$.fn.pdB = function (a) {
		return this.css("padding-bottom", a || 0)
	}
	$.fn.mgT = function (a) {
		return this.css("margin-top", a || 0)
	}
	$.fn.pad = function (a) {
		return this.css("padding", a || 0)
	}
	function statt() {
		$.an = function () {
			var bd = $.bd();
			return bd.j.apply(
					bd, G(arguments))
		}
		$.notAn = function (a) {
			return a.filter(':not(:animated)')
		}
	}
	
	$.fn.toR = $.fn.moveRight = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) + num)
		return this
	}
	$.fn.toL = $.fn.moveLeft = function (num) {
		alert('toL')
		num = num || 20
		if (this.left() == 'auto') {
			this.left(0)
		}
		this.left(parseInt(this.left()) - num)
		return this
	}
	$.fn.toU = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() - num)
		return this
	}
	$.fn.toD = $.fn.moveDown = function (num) {
		alert('toL')
		num = num || 20
		if (this.top() == 'auto') {
			this.top(0)
		}
		this.top(this.top() + num)
		return this
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
	old = function () {
		QUU = function () {
			$.x('x', 'quu')
			//  Qu   allow series fns to be execd asynch on an el
			//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
			//
			// which levgs qus to build up   series of steps
			// that will transtn  1+ CSS vals thru/out the dur
			//  can pass a cb fn to  .an()  to exec on done
			$.d('r', 344, 500).A($.i('me')).K('x')
			x = $('.x')
			x.an(
					{height: 20}, "slow",
					function () {
						$("#title").html("in cb")
					}
			)
			//   *Ques As Cbs
			// Instead of passing a cb as an argument,
			// we can add another function to the queue
			// that will act as our cb
			// This will execute
			// after all of the steps in the
			// anim  have completed.
			x.an(
					{height: 20},
					"slow"
			).qu(
					function () {
						$("#title").h("in anim")
						$(this).dq()
					}
			)
				//  tells jQ  to continto N-item in  que
				//    queued fn will exec   after the anim
				//  jQuery does not have any insight into
				// how the queue items function,
				// so we need to call .dequeue(),
				// which tells jQuery when to move to the n item in the queue.
				//  Another way of dequeuing
				// is by calling the fn that is passed to your cb
				// That fn will auto  call .dq() for you
					.qu(
					function (n) {
						$l("I fired!");
						n()
					}
			)
			//  *Custom Queues
			// Up to this point all of our anim
			// and qu   ex  have been using the def qu  n  which is fx.
			// Elements can have multiple queues
			// attached to them,
			// and we can give each of these qusa dif  name.
			// We can specify a custom queue name as
			// the 1st arg  to the .qu() method.
			x.qu('an', function (n) {
						$l("Step 1");
						n()
					}
			).qu(
					'an', function (n) {
						$l("Step 2");
						n()
					}
			).dq('an');
			//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
			//   Clearing The Que
			//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
			x.qu(
					'an', function (n) {
						$l("nev log (qu clrd)");
						n()
					}
			)
					.clrQ('an').dq('an')
			//   In this example, nothing will happen as we removed everything from the steps queue.
			//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
			//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
			x.qu(
					'an',
					function (n) {
						$l("nev fire (qu replaced)");
						n()
					}
			)
					.qu(
					'an', [
						function (n) {
							$l("fired!");
							n()
						}
					]
			).dq('an')
			//
			// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
			x.qu(
					'an', function (n) {
						$l("fired!");
						n()
					}
			)
			$l(x.qu('an'))
			//x.du('an')
		}
		$.fn.gFr = $.fn.getFrame
		$.fn.sFr = $.fn.setFrame
		$.anFr = $.aF = $.anf = function (n, w) {
			var c = 0;
			n = n || 10;
			w = w || 20;
			_.ev(
					function () {
						q.sFr(c, w);
						c = (c + 1) % n
					}
			)
		}
		//= $.fn.animateFrames
		q = $.fn
		anf = q.anFr = function (n, w) {
			var c = 0;
			n = n || 10;
			w = w || 20
			_.ev(
					function () {
						q.sFr(c, w);
						c = (c + 1) % n
					}
			)
		}
		q.bgI = function (url) {//set background image
			var toUrl = function (url) {
				return 'url("' + _.src(url) + '")'
			}
			q.bgI(toUrl(url))
			return q
		}
		q.stFr = function (n, w) {
			if (O(n)) {
				q.bp(n.n, n.w)
			}
			else {
				q.bp(n * w)
			}
			return q
		}
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1,
				w: o.w || 64,
				r: o.r || 60,
				c: o.c || 0,
				l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bgI(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(
						function () {
							a.c++;
							if (!a.l && a.c > a.n) {
								_.cI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r
				)
			}
		}
		ANF = function () {
			$.x('s', 'jqanim')
			a = $.dA().bgI('chicks').anFr()
			q.bgI = function (x, y) {
				var g = G(arguments), x = g[0], y = g[1]
				x = N(x) ? x : 0
				y = N(y) ? y : 0
				q.css(
						{
							bgP: x + 'px ' + y + 'px'
						}
				)
				return q
			}
		}
		animate$ = function (q, a) {
			if (q.han) {
				_.xI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(
						function () {
							a.c++
							if (!a.l && a.c > a.n) {
								_.xI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r
				)
			}
		}
		AnOb = {
			B: 'bottom', L: 'left', R: 'right', T: 'top',
			b: 'borderWidth', bb: 'borderBottomWidth',
			bl: 'borderLeftWidth', br: 'borderRightWidth',
			bt: 'borderTopWidth', bs: 'borderSpacing',
			C: 'backgroundColor', f: 'fontSize', h: 'height', w: 'width', H: 'maxHeight', W: 'maxWidth',
			mh: 'minHeight', mw: 'minWidth',
			i: 'textIndent', l: 'letterSpacing', lh: ' lineHeight',
			m: ' margin', mb: 'marginBottom', ml: 'marginLeft', mr: 'marginRight',
			mt: 'marginTop', o: ' outlineWidth',
			p: ' padding', pb: 'paddingBottom',
			pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
			ws: ' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'
		}
	}
}
function superWebApps(){
	TANGLE = function () {
		z()
		a = $.divA('r', 50, 50).XY(50).A().pad(10)
		b = $.divA('b', 100, 100).XY(100).A().pad(10)
		c = $.divA('g', 200, 200).XY(200).A().pad(10)
		d = $.divA('y', 400, 400).XY(400).A().pad(10)
		y = function (aa, bb, cc, dd) {
			if (aa && U(bb)) {
				aa.A().P('a')
			}
			if (bb) {
				bb.A(aa.P('static'))
			}
			if (dd) {
				dd.A(cc.P('s'))
			}
		}
	}
	BORDERS = function () {
		z()
		change = function () {
			$.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)
					.J({"border-top-width": 10}, 1000)
					.J({"border-bottom-width": 10}, 1000)
					.J({"border-left-width": 10}, 1000)
					.J({"border-right-width": 10}, 1000)
					.J({"padding-top": 10}, 1000)
					.J({"padding-bottom": 10}, 1000)
					.J({"padding-left": 10}, 1000)
					.J({"padding-right": 10}, 1000)
					.J({"margin-top": 10}, 1000)
					.J({"margin-bottom": 10}, 1000)
					.J({"margin-left": 10}, 1000)
					.J({"margin-right": 10}, 1000)
					.J({"margin-top": 0}, 1000)
					.J({"margin-bottom": 0}, 1000)
					.J({"margin-left": 0}, 1000)
					.J({"margin-right": 0}, 1000)
					.J({"padding-top": 0}, 1000)
					.J({"padding-bottom": 0}, 1000)
					.J({"padding-left": 0}, 1000)
					.J({"padding-right": 0}, 1000)
					.J({"border-top-width": 0}, 1000)
					.J({"border-bottom-width": 0}, 1000)
					.J({"border-left-width": 0}, 1000)
					.J({"border-right-width": 0}, 1000)
		}
		$.$$(
				function () {
					z();
					_.times(10, change)
				}
		)
		_.times(10, change)
	}
	BORDERS1 = function () {
		change = function () {
			$.img('me').WH(100).A().C('g').bs('-')  //bs??
					.j({bt: 40}, 1000)
					.j({bb: 40}, 1000)
					.j({bl: 40}, 1000)
					.j({br: 40}, 1000)
					.j({gt: 40}, 1000)
					.j({gb: 40}, 1000)
					.j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
					.j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
					.j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
					.j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
					.j({bt: 0}, 1000)
					.j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
		}
		m$$(function () {
			z();
			_.times(10, change)
		})
		_.times(10, change)
	}
	CORNERS = function () {
		$.fn.grow = function () {
			originalWidth = this.W()
			originalHeight = this.H()
			this.on('mousedown', function (e) {
				mx = e.clientX
				my = e.clientY
				$.mouseMove(function (e) {
					this.WH(originalWidth + e.clientX - mx,
							originalHeight + e.clientY - my)
				})
				$.mouseUp(function () {
					$(this).off()
				})  //mouseUp anything?
				this.children().on('mousedown', function (e) {
					e.stopPropagation()
				})
			})
		}
		//  dva(2, 2, 2, 2 )
		div = $.divA(200, 200).XY(200)
		div.A(
				$.divA('red', 20, 20).top(-10).left(-10),
				$.divA('yellow', 20, 20).bottom(-10).right(-10),
				$.divA('green', 20, 20).top(-10).right(-10),
				$.divA('blue', 20, 20).bottom(-10).left(-10)
		)
		i = $.divF('purple').col('white').fontSize(20).opacity(.2).textAlign('center')
				.width('100%').top(100)
		i.H(W() + ' * ' + H())
		Z(function () {
			i.H(W() + ' * ' + H())
		})
		$.$(function () {
			rat(function () {
				co()
			}, 10)
		})
		i.grow()
	}
	QUU = function () {
		$.x('x', 'quu')
		//  Qu   allow series fns to be execd asynch on an el
		//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
		//
		// which levgs qus to build up   series of steps
		// that will transtn  1+ CSS vals thru/out the dur
		//  can pass a cb fn to  .an()  to exec on done
		x = $('.x')
		x.an({height: 20}, "slow",
				function () {
					$("#title").html("in cb")
				})
		//   *Ques As Cbs
		// Instead of passing a cb as an argument,
		// we can add another function to the queue
		// that will act as our cb
		// This will execute
		// after all of the steps in the
		// anim  have completed.
		x.an(
				{height: 20},
				"slow").qu(function () {
					$("#title").h("in anim")
					$(this).dq()
				})
			//  tells jQ  to continto N-item in  que
			//    queued fn will exec   after the anim
			//  jQuery does not have any insight into
			// how the queue items function,
			// so we need to call .dequeue(),
			// which tells jQuery when to move to the n item in the queue.
			//  Another way of dequeuing
			// is by calling the fn that is passed to your cb
			// That fn will auto  call .dq() for you
				.qu(function (n) {
					$l("I fired!");
					n()
				})
		//  *Custom Queues
		// Up to this point all of our anim
		// and qu   ex  have been using the def qu  n  which is fx.
		// Elements can have multiple queues
		// attached to them,
		// and we can give each of these qusa dif  name.
		// We can specify a custom queue name as
		// the 1st arg  to the .qu() method.
		x.qu('an', function (n) {
			$l("Step 1");
			n()
		}).qu('an', function (n) {
			$l("Step 2");
			n()
		}).dq('an');
		//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
		//   Clearing The Que
		//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
		x.qu('an', function (n) {
			$l("nev log (qu clrd)");
			n()
		})
				.clrQ('an').dq('an')
		//   In this example, nothing will happen as we removed everything from the steps queue.
		//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
		//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
		x.qu(
				'an',
				function (n) {
					$l("nev fire (qu replaced)");
					n()
				})
				.qu(
				'an', [
					function (n) {
						$l("fired!");
						n()
					}
				]).dq('an')
		//
		// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
		x.qu('an', function (n) {
			$l("fired!");
			n()
		})
		$l(x.qu('an'))
		x.du('an')
	}
	ANF = function () {
		z()
		a = $.dA().bgI('chicks').anf()
		anim = function (o) {
			o = o || {};
			return {
				u: o.u || 'chicks',
				n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
			}
		}
		an = function (q, a) {
			if (q.han) {
				_.cI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(function () {
					a.c++;
					if (!a.l && a.c > a.n) {
						_.cI(q.han);
						q.han = false
					}
					else {
						a.c %= a.n
					}
					q.sFr(a)
				}, a.r)
			}
		}
	}
	JQANIMZ = function () {
		$.x('s', 'jqanim')
		/*
		 setBackgroundImage = q.bi = function(url){//set background image
		 var toUrl =function(url){
		 return 'url("'+ src(url) +'")'}
		 q.backgroundImage(toUrl(url))
		 return q}
		
		 bp=q.positionBackgroundImage=function(x,y){
		 var g=G(arguments),x=g[0],y=g[1]
		 x=N(x)?x:0
		 y=N(y)?y:0
		 q.css({backgroundPos:x+'px '+y+'px'})
		 return q}
		 fr=q.stFr=function(n,w){
		 if(O(n)){q.bp(n.n,n.w)}
		 else{q.bp(n*w)}
		 return q}
		
		 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
		 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
		
		 a= $.dA().bgImg('chicks').anf()
		
		 */
	}
	LETTERING = function () {
		z()
		LETTERINGPLUG = function () {
			function injector(t, splitter, klass, after) {
				var text = t.text()
						, a = text.split(splitter)
						, inject = '';
				if (a.length) {
					$(a).each(function (i, item) {
						inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
					});
					t.attr('aria-label', text)
							.empty()
							.append(inject)
				}
			}
			
			var methods = {
				init: function () {
					return this.each(function () {
						injector($(this), '', 'char', '');
					});
				},
				words: function () {
					return this.each(function () {
						injector($(this), ' ', 'word', ' ');
					});
				},
				lines: function () {
					return this.each(function () {
						var r = "eefec303079ad17405c889e092e105b0";
						// Because it's hard to split a <br/> tag consistently across browsers,
						// (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
						// (of the word "split").  If you're trying to use this plugin on that
						// md5 hash string, it will fail because you're being ridiculous.
						injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
					});
				}
			};
			$.fn.lettering = function (method) {
				// Method calling logic
				if (method && methods[method]) {
					return methods[method].apply(this, [].slice.call(arguments, 1));
				} else if (method === 'letters' || !method) {
					return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
				}
				$.error('Method ' + method + ' does not exist on jQuery.lettering');
				return this;
			};
		};
		LETTERINGPLUG()
		span = $.sp('hello').A()
		span.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = span.find('span')
		$('.dropped span').css({transition: 'all 0.3s ease-in'})
	}
	FALLING = function () {
		z()
		//this goes in css
		$header2 = $.span('hello').A()
		$header2.lettering() // wrap <span class="charx"/ > around each character within header
		$spans = $header2.find('span')
		delay = 0
		$header2.on('click', function () {
			$spans.each(function () {
				$(this).css({transitionDelay: delay + 's'}) // apply sequential trans delay to each character
				delay += 0.1
			})
			$header2.K('dropped') // Add "dropped" class to header to apply transition
			setTimeout(function () { // reset header code
				$spans.each(
						function () {
							$(this).css({
								transitionDelay: '0ms'
							})
						})
				// set transition delay to 0 so when 'dropped' class is removed,
				// letter appears instantly
				$header2.removeClass('dropped') // remove class at the "end" to reset header.
				delay = 0
			}, 1800) // 1800 is just rough estimate of time transition will finish, not the best way
		})
	}
	//ok:
	FRIDGEMAG = function () {
		z();
		word = function (text, c1, c2) {
			var s = $.sp(text).C(c1, c2).A().drag()
			return s
		}
		w = word('hello', 'b', 'g');
		word('sicko', 'g', 'b');
		word('why, i oughta..', 'p', 'x');
		word('it was raining..', 'j', 'k');
		word('who ya gonna call?', 'h', 'i');
		word('dag nabit!', 'f', 'g');
		word('i like', 'd', 'e');
		word('tomorrow', 'a', 'c');
		word('me', 'r', 'b')
	}
	BORDERS = function () {
		z();
		$.fn.an = $.fn.animate
		_.t(10, change)
		function change() {
			$.i('me', 100).A().C('g')
					.css(
					{
						borderStyle: 'dashed', borderWidth: '20px'
					}
			)
					.animate(
					{
						"border-top-width": 10
					}, 1000
			)
					.an({"border-bottom-width": 10}, 1000)
					.an({"border-left-width": 10}, 1000)
					.an({"border-right-width": 10}, 1000)
					.an({"padding-top": 10}, 1000)
					.an({"padding-bottom": 10}, 1000)
					.an({"padding-left": 10}, 1000)
					.an({"padding-right": 10}, 1000)
					.an({"margin-top": 10}, 1000)
					.an({"margin-bottom": 10}, 1000)
					.an({"margin-left": 10}, 1000)
					.an({"margin-right": 10}, 1000)
					.an({"margin-top": 0}, 1000)
					.an({"margin-bottom": 0}, 1000)
					.an({"margin-left": 0}, 1000)
					.an({"margin-right": 0}, 1000)
					.an({"padding-top": 0}, 1000)
					.an({"padding-bottom": 0}, 1000)
					.an({"padding-left": 0}, 1000)
					.an({"padding-right": 0}, 1000)
					.an({"border-top-width": 0}, 1000)
					.an({"border-bottom-width": 0}, 1000)
					.an({"border-left-width": 0}, 1000)
					.an({"border-right-width": 0}, 1000)
		}
		
		/*
		 $.img('me').WH(100).A().C('g').bs('-')  //bs??
		
		 .j({bt: 40}, 1000)
		
		 .j({bb: 40}, 1000)
		 .j({bl: 40}, 1000)
		 .j({br: 40}, 1000)
		 .j({gt: 40}, 1000)
		 .j({gb: 40}, 1000)
		 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
		 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
		 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
		 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
		 .j({bt: 0}, 1000)
		 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
		 };
		 */
	}
	NOTANIM = function () {
		$.x()
		var s = 1000, m = function (n) {
					return {marginLeft: n}
				},
				n = 0;
		d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
		d2 = $.d().id('debug');
		$('#test').$(function () {
			$.notAn($('.box')).an({marginLeft: -10}, s,
					function () {
						$('#debug').A($.p('start..' + n++))
					})
					.an({marginLeft: 10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: 10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: -10}, s)
					.an({marginLeft: 0}, s,
					function () {
						$('#debug').A($.p('fin'))
					})
		})
	}
	ANL = ANIMLOOP = function () {
		$.fn.anL = function () {
			var q = this
			this.sh("slow")
			this.an({"marginLeft": "300px"}, 2000)
					.an({"marginLeft": "0px"}, 2000)
			this.hd("slow", function () {
				q.anL()
			})
		}
		$.d('b', 100, 300).anL()
	}
	COOLSEL = function () {
		$.x()
		// rather than worry about synchronization between each panel
		//we will take last li in ul.k(panels) and position it to top right
		//of ul - this way,  when he sum width of all the panels occasionally
		//adds to greater than 100 percent of the ul as they animate..
		//the last li never breaks to the next line
		$.coolSelector = function () {
			var s = 200
			d = $.dK('container').A(
					$.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
					$.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
			).A()
			$('span').css({width: '100px', fontSize: '40px'})
			if ($('div.panels').length) {
				$('div.panels span:last-child').K('last')
				$('div.panels span').hv(
						function () {
							$(this).st().an({width: '110px', fontSize: '50px'}, s)
									.sib('span').st().an({width: '90px', fontSize: '30px'})
						},
						function () {
							$(this).st().an({width: '90px', fontSize: '30px'})
						})
			}
		}
		$.coolSelector()
	}
	TXCAN = function () {
		z();
		c = $.c('o', 500, 500);
		//c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
		// c.roundRect(100,50,100,100,50).stroke()//.fill()
		//c.line(10,10,50,500).stroke()
		c.line([
			[[100, 100], [200, 200], [140, 900]]
			// ,  [[150,150],[250,250], [20,300]]
		]).stroke();
		//c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
		//c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
	}
	FLASH = function () {
		z();
		timeline = $.dA('+').WH('auto');
		timeline.A($.c('b', 500, 500), $.br());
		_.t(24, function (x) {
			timeline.A(
					$.d('r', 100, 100)
							.css({display: 'inline-block'}).H((x * 10) + 100)
			)
		})
	}
	HOVERBOX = function () {
		z();
		d = $.d('o', 500, 500, '+').id('test')
		y = $.c('p', 400).K('box').hd();
		d.A(y);
		$('#test').hover(function () {
			$('.box').stop().fadeTo(200, 1)
		}, function () {
			$('.box').stop().fadeTo(200, 0)
		})
	}
	COLANIM = function () {
		$.x()
		$CSS({
			$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
		})
		$.d(['color anims']).id('el')
		$.bt('anim cols').id('tog')
		$('#tog').$(function () {
			$("#el").an({c: 'g', C: "rgb(20,20,20)"})
		})
		/*
		 Color Animation
		 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
		
		 The following properties are supported:
		
		 backgroundColor
		 borderBottomColor
		 borderLeftColor
		 borderRightColor
		 borderTopColor
		 color
		 columnRuleColor
		 outlineColor
		 textDecorationColor
		 textEmphasisColor
		 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
		
		 Class Animations
		 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
		
		 link
		 */
	}
	function broke() {
		QUU = function () {
			$.x('x', 'quu')
			//  Qu   allow series fns to be execd asynch on an el
			//  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
			//
			// which levgs qus to build up   series of steps
			// that will transtn  1+ CSS vals thru/out the dur
			//  can pass a cb fn to  .an()  to exec on done
			x = $('.x')
			x.an(
					{height: 20}, "slow",
					function () {
						$("#title").html("in cb")
					}
			)
			//   *Ques As Cbs
			// Instead of passing a cb as an argument,
			// we can add another function to the queue
			// that will act as our cb
			// This will execute
			// after all of the steps in the
			// anim  have completed.
			x.an(
					{height: 20},
					"slow"
			).qu(
					function () {
						$("#title").h("in anim")
						$(this).dq()
					}
			)
				//  tells jQ  to continto N-item in  que
				//    queued fn will exec   after the anim
				//  jQuery does not have any insight into
				// how the queue items function,
				// so we need to call .dequeue(),
				// which tells jQuery when to move to the n item in the queue.
				//  Another way of dequeuing
				// is by calling the fn that is passed to your cb
				// That fn will auto  call .dq() for you
					.qu(
					function (n) {
						$l("I fired!");
						n()
					}
			)
			//  *Custom Queues
			// Up to this point all of our anim
			// and qu   ex  have been using the def qu  n  which is fx.
			// Elements can have multiple queues
			// attached to them,
			// and we can give each of these qusa dif  name.
			// We can specify a custom queue name as
			// the 1st arg  to the .qu() method.
			x.qu(
					'an', function (n) {
						$l("Step 1");
						n()
					}
			).qu(
					'an', function (n) {
						$l("Step 2");
						n()
					}
			).dq('an');
			//  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.
			//   Clearing The Que
			//  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.
			x.qu(
					'an', function (n) {
						$l("nev log (qu clrd)");
						n()
					}
			)
					.clrQ('an').dq('an')
			//   In this example, nothing will happen as we removed everything from the steps queue.
			//   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.
			//  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.
			x.qu(
					'an',
					function (n) {
						$l("nev fire (qu replaced)");
						n()
					}
			)
					.qu(
					'an', [
						function (n) {
							$l("fired!");
							n()
						}
					]
			).dq('an')
			//
			// You can also call .queue() without passing it functions, which will return the queue of that element as an array.
			x.qu(
					'an', function (n) {
						$l("fired!");
						n()
					}
			)
			$l(x.qu('an'))
			x.du('an') //?
		}
		JQANIMZ = function () {
			$.x('s', 'jqanim')
			/*
			 setBackgroundImage = q.bi = function(url){//set background image
			 var toUrl =function(url){
			 return 'url("'+ src(url) +'")'}
			 q.backgroundImage(toUrl(url))
			 return q}
			
			 bp=q.positionBackgroundImage=function(x,y){
			 var g=G(arguments),x=g[0],y=g[1]
			 x=N(x)?x:0
			 y=N(y)?y:0
			 q.css({backgroundPos:x+'px '+y+'px'})
			 return q}
			 fr=q.stFr=function(n,w){
			 if(O(n)){q.bp(n.n,n.w)}
			 else{q.bp(n*w)}
			 return q}
			
			 anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
			 $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}
			
			 a= $.dA().bgImg('chicks').anf()
			
			 */
		}
		TXPLUG = function () {
			z();
			d = $.d('r', 100).A('abc');
			e = $.d(100).col('r').A('abc');
			f = $.d('r', 100).col('b').A('abc');
			g = $.d('b', 500, 500)
		}
		COLANIM = function () {
			$.x()
			$CSS(
					{
						$el: {C: '#aaa', c: '#006', fz: 25, ta: 'center', pad: '1em'}
					}
			)
			$.d(['color anims']).id('el')
			$.bt('anim cols').id('tog')
			$('#tog').$(
					function () {
						$("#el").an({c: 'g', C: "rgb(20,20,20)"})
					}
			)
			/*
			 Color Animation
			 jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.
			
			 The following properties are supported:
			
			 backgroundColor
			 borderBottomColor
			 borderLeftColor
			 borderRightColor
			 borderTopColor
			 color
			 columnRuleColor
			 outlineColor
			 textDecorationColor
			 textEmphasisColor
			 Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.
			
			 Class Animations
			 While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.
			
			 link
			 */
		}
		ANF = function () {
			z()
			a = $.dA().bgI('chicks').anf()
			anim = function (o) {
				o = o || {};
				return {
					u: o.u || 'chicks',
					n: o.n || 1, w: o.w || 64, r: o.r || 60, c: o.c || 0, l: o.l || false
				}
			}
			an = function (q, a) {
				if (q.han) {
					_.cI(q.han)
				}
				if (a.u) {
					q.bi(a.u)
				}
				if (a.n > 1) {
					q.han = _.sI(
							function () {
								a.c++;
								if (!a.l && a.c > a.n) {
									_.cI(q.han);
									q.han = false
								}
								else {
									a.c %= a.n
								}
								q.sFr(a)
							}, a.r
					)
				}
			}
		}//call stack
		FALLING = function () {
			z();
			//this goes in css
			$header2 = $.sp('hello').A();
			$header2.lettering(); // wrap <span class="charx"/ > around each character within header
			$spans = $header2.fi('span');
			delay = 0;
			$header2.$(
					function () {
						$spans.e(
								function () {
									$(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
									delay += 0.1
								}
						);
						$header2.K('dropped'); // Add "dropped" class to header to apply transition
						setTimeout(
								function () { // reset header code
									$spans.e(
											function () {
												$(this).css({transitionDelay: '0ms'})
											}
									);
									// set transition delay to 0 so when 'dropped' class is removed,
									// letter appears instantly
									$header2.removeClass('dropped'); // remove class at the "end" to reset header.
									delay = 0
								}, 1800
						); // 1800 is just rough estimate of time transition will finish, not the best way
					}
			)
		}
		anim = function (o) {
			o = o || {}
			alert('anim')
			return {
				u: o.u || 'chicks', n: o.n ||
				1, w: o.w || 64, r: o.r || 60, c: o.c ||
				0, l: o.l || false
			}
		}
		an = function (q, a) {
			alert('an')
			if (q.han) {
				_.xI(q.han)
			}
			if (a.u) {
				q.bi(a.u)
			}
			if (a.n > 1) {
				q.han = _.sI(
						function () {
							a.c++
							if (!a.l && a.c > a.n) {
								_.xI(q.han);
								q.han = false
							}
							else {
								a.c %= a.n
							}
							q.sFr(a)
						}, a.r
				)
			}
		}
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
	$.toColor = function (n1, n2, n3, n4) {
		return n2 ? "rgba(" + n1 + "," + n2 + "," + "" + n3 + "," + (n4 || 1) + ")" : $r('c', n1)
	}
	$.fn.Z = function (w, h) {
		return this.W(w).H(h || w)
	}
	$.fn.oH = $.fn.outerHeight
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