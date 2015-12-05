$RoApp = function (name, fn) {
	startRtr = function (name) {
		Bb.h.start({
			pushState: true,
			root: "/mvc/" + name + "/"
		})
	}
	$Fn(name, function () {
		Ap = {M: {}, V: {}, C: {}}
		$l('name: ' + (name = _.tU(name)))
		$rtHeader(name)
		d = $.dI('ct').fS(40)
		fn();
		startRtr(name)
	})
}
rtsOb6 = rtsOb1 = {
	routes: {
		'': 'home',
		'view': 'view',
		':id': 'en',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	},
	home: function () {
		$l('home')
	},
	view: function () {
		$l('image')
	},
	en: function (id) {
		$l('id:' + id)
	}
}
rtsOb3 = {
	r: {
		hello: 'hi',
		goodbye: function () {
			$.C('o')
		}
	},
	_: function () {
		$l('indexxxxx')
		$.C('p')
	},
	hi: function () {
		$.C('g');
		alert('well hi there!')
	},
	d: function () {
		$.C('z')
		$.A(
				$.sp('d e f a u l t')
						.fS(30).C('g').col('w')
		)
	}
}
rtsOb4 = {
	r: {
		':post/:id': 'pam',
		'post/*id': 'splatMustBeLast',
		'*post': 'splat'
	},
	pam: function (post, id) {
		$l('Get post ' + id)
		$l('fnPam: ' + post + ', id# ' + id)
	},
	splat: function () {
		alert('1')
	},
	splatMustBeLast: function () {
		alert('2')
	},
	d: function (a) {
		$l('ddddddddd:' + a)
	},
	e: function (a) {
		$l('eeeeeeeee:' + a)
	}
}
RT1 = function () {
	$bd('font-size', 30).dI('ct')
	_$r({
		r: {
			'': 'pg1', pg1: 'pg1',
			pg2: $VW$('pg2', 'pg1', 'pg1')
		},
		pg1: $VW$('pg1', 'pg2', 'pg2')
	})
}
function $VW$(lbTx, aTx, href) {
	return function () {
		$autoV = function (fn) {
			return Bb.V.x({
				initialize: function () {
					this.render()
				},
				render: fn
			})
		}
		return new (($autoV(function () {
			this.$el.html($.__d(
					$.lb(lbTx),
					$.a(aTx, '#' + href)
			).oh())
		})))({
			el: $('#ct')
		})
	}
}
RT1OLD = NOPUSHSTATE = VID0 = WORKS = function () {
	$bd('font-size', 30)
			.dI('ct')
	$r({
		r: {
			'': 'pg1',
			'pg1': 'pg1',
			'pg2': 'pg2'
		},
		pg1: $VW$('view 1: want to know your NPI NUMBER??', 'Its at view 2. go ->', 'pg2'),
		pg2: $VW$('vw 2: nada', 'what was the question again?', 'pg1')
	})
}
RT2 = ROUTEE1 = function () {
	$l('RT2')
	n = 0
	rtr = $R({
		routes: {'*x': 'd'},
		d: function (a) {
			$l('educated? -> ' + a)
		},
		e: function (a) {
			$l('e:' + a)
			$l('n: =' + n++)
			$.h1().A('EDUCATION').A()
		}
	})
	$.bt('d', function () {
		rtr.N('e')
	})
	$.bt('e', function () {
		rtr.N('e')
	})
	Bb.h.s()
}
RT3 = ITEMZ = function () {
	ITEMZZ = function () {
		$.x();
		Ap = {M: {}, V: {}, C: {}}
		Ap.M.Item = $$M({})
		$$R({
			routes: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j',
				'': 'welcome',
				'wap/items': 'welcome1',
				'wap/items/itemlist': 'showItemList',
				'wap/items/j': 'j'
			},
			welcome: function () {
				$.bd().E().A($.h1('welcome'))
			},
			j: function () {
				$l('asdfjfsdafsdf')
			},
			showItemList: function () {
				$.bd().E().A($.h1('show item list'))
			}
		})()
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		r.A('/wap/items/j', function () {
			$.bd().E().A(
					$.h1('j')
			)
		})
		r.A('/wap/items/q', function () {
			$.bd().E().A($.h1('q'))
		})
		Bb.h.start({pushState: true})
		$.bt('add', function () {
			r.n('/wap/items/itemlist')
		})
		$.bt('add1', function () {
			$.A($.h1('k'))
			r.n('/wap/items/j')
		})
		$.bt('add', function () {
			r.n('/itemlist')
		})
	}
	Ap = {M: {}, V: {}, C: {}}
	Ap.M.Item = _M({})
	rtr = $R({
		routes: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j',
			'wap/items': 'welcome1',
			'wap/items/itemlist': 'showItemList',
			'wap/items/j': 'j'
		},
		welcome: function () {
			$.bd().E().A($.h1('welcome'))
		},
		j: function () {
			$l('asdfjfsdafsdf')
		},
		showItemList: function () {
			$.bd().E().A($.h1('show item list'))
		}
	})
	item1 = Ap.M.Item({
		n: 'jason', g: 'licensing exams and work history '
	})
	item1.oR('j', function () {
		$.bd().E().A($.h1('j'))
	})
	rtr.A('/wap/items/j', function () {
		$.bd().E().A(
				$.h1('j')
		)
	})
	rtr.A('/wap/items/q', function () {
		$.bd().E().A($.h1('q'))
	})
	$.bt('add', function () {
		rtr.n('/wap/items/itemlist')
	})
	$.bt('add1', function () {
		$.A($.h1('k'))
		rtr.n('/wap/items/j')
	})
	$.bt('add', function () {
		rtr.n('/itemlist')
	})
	Bb.h.s()
}
RT4 = NAVTOE = function () {
	rtr = $R({
		routes: {'*x': 'd'},
		d: function (a) {
			$l('d:' + a)
		},
		e: function (a) {
			$l('e:' + a)
		}
	})
	Bb.h.s()
	_.in(2, function () {
		rtr.N('e')
	})
}
rtsOb = rtsOb2 = {
	rt: {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	},
	image: function (id) {
		$l('image===')
		_.t(10, function () {
			$l($r() + '-id: ' + id)
		})
		$.bd().C('z')
	},
	h: function () {
		alert('you are viewing MEDICAL page')
	},
	x: function () {
		alert('you are viewing index')
	},
	viewImage: function () {
		alert('you are viewing a BOARD CERTIFICATION image')
	}
}
RT5 = AHREF = function () {
	rtr = $R(rtsOb)
	_.in(function () {
		$l('REFERENCES')
		r.n('/wap/rtr/images/32903290239032902390')
	})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('GAPS IN HISTORY')
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	})
}
RT6 = RTENAV = function () {
	RTENAV = function () {
		z()
		Rt = $$R({
			routes: {
				'po/:id': 'gp',
				'*a': 'dr'
			},
			dr: function (a) {
				al(a)
			},
			gp: function (id) {
				al('Get post ' + id)
			}
		})
		r = Rt()
		r.A('b/rnav/j', function () {
			alert('!')
		})
		Bb.h.s({pushState: true})
		$.bt('hi', function () {
			r.n('po/2', {t: 1})
		}).a()
		$.bt('hi', function () {
			rt.n('po/2')
		})
		$.bt('hi1', function () {
			rt.n('po/4')
		})
		$.bt('hiiiii', function () {
			r.navigate('b/rnavv/j', {trigger: true})
		})
	}
	Rt = $$R({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	r.A('b/rnav/j', function () {
		alert('!')
	})
	Bb.h.s({pushState: true})
	$.bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
	$.bt('DEA', function () {
		rt.n('po/2')
	})
	$.bt('STATE LICENSE', function () {
		rt.n('po/4')
	})
	$.bt('LIFE SUPPORT (CPR)', function () {
		r.navigate('b/rnavv/j', {trigger: true})
	})
}
RT7 = function () {
	RTR0 = function () {
		$.x('y');
		$CSS({h1: {'font-size': 100}})
		r = $$R({
			rt: {
				'': 'index',
				'wap/rtr/images/:id': 'image',
				view: 'viewImage'
			},
			image: function (id) {
				_.t(10, function () {
					$l($r() + '-id: ' + id)
				})
				$.bd().C('z')
			},
			h: function () {
				alert('you are viewing home page')
			},
			x: function () {
				alert('you are viewing index')
			},
			viewImage: function () {
				alert('you are viewing an image')
			}
		})()
		Bb.h.start({pushState: true})
		_.in(3, function () {
			r.n('55c24c8f4198473b0d000004.png')
		})
		//looks for clicks on any anchor els where
		//href starts with '/' (no domain) and stop
		//bw from nv to it
		$.a().A($.h1('afsd'))
		$('body').on('click', 'a[href^="/"]', function (ev) {
			ev.preventDefault()
			r.n($(this).attr('href', {trigger: true}))
		})
	}
	$bd({h1: {'font-size': 100}}).on('click', 'a[href^="/"]', function (ev) {
		ev.preventDefault()
		rtr.n($(this).attr('href', {trigger: true}))
	}).A($.a().A($.h1('afsd')))
	rtr = _$R(rtsOb2)()
	_.in(3, function () {
		rtr.n('55c24c8f4198473b0d000004.png')
	})
	Bb.h.start({pushState: true})
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
}
RT8 = VID00 = function () {
	VID00 = function () {
		$FirstVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var first = $.d().rm().A(
						$.lb().A('My 1st View'), $.br(),
						$.a().hr('sec').A('Go to 2nd View')
				).oh();
				this.$el.html(first)
			}
		})
		$SecVw = Bb.V.x({
			initialize: function () {
				this.render()
			},
			render: function () {
				var sec = $.d().rm()
						.A($.lb().A('My 2nd View'), $.br(), $.a()
								.hr('first').A('Go to 1st View'))
						.oh()
				this.$el.html(sec)
			}
		})
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				'': 'pg1',
				'first': 'pg1',
				'sec': 'pg2'
			},
			pg1: function () {
				new $FirstVw({el: $('#ct')})
			},
			pg2: function () {
				new $SecVw({el: $('#ct')})
			}
		})()
		Bb.h.start(
				//{pushState:true}
		)
	}
	$FirstVw = Bb.V.x({
		initialize: function () {
			this.render()
		},
		render: function () {
			var first = $.d().rm().A(
					$.lb().A('My 1st View'), $.br(),
					$.a().hr('sec').A('Go to 2nd View')
			).oh();
			this.$el.html(first)
		}
	})
	$SecVw = Bb.V.x({
		initialize: function () {
			this.render()
		},
		render: function () {
			var sec = $.d().rm()
					.A($.lb().A('My 2nd View'), $.br(), $.a()
							.hr('first').A('Go to 1st View'))
					.oh()
			this.$el.html(sec)
		}
	})
	$bd('font-size', 80).dI('ct')
	_$R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			new $FirstVw({el: $('#ct')})
		},
		pg2: function () {
			new $SecVw({el: $('#ct')})
		}
	})()
	Bb.h.start(
			//{pushState:true}
	)
}  //push state not working???
RT114 = STILLNOPUSH = VID1 = function () {
	STILLNOPUSH = VID1 = function () {
		z();
		$('body').C('o').css('font-size', 80)
		$.d().id('ct')
		$$R({
			r: {
				':post/:id': 'pam',
				'*post': 'splat',
				'post/*id': 'splatMustBeLast'
			},
			pam: function (post, id) {
				$l('fnPam: ' + post + ', id# ' + id)
			},
			splat: function () {
				alert('1')
			},
			splatMustBeLast: function () {
				alert('2')
			}
		})()
		Bb.h.start({pushState: true})
	}
	$bd('font-size', 80).dI('ct')
	_$R({
		r: {
			':post/:id': 'pam',
			'*post': 'splat',
			'post/*id': 'splatMustBeLast'
		},
		pam: function (post, id) {
			$l('fnPam: ' + post + ', id# ' + id)
		},
		splat: function () {
			alert('1')
		},
		splatMustBeLast: function () {
			alert('2')
		}
	})()
	Bb.h.start({pushState: true})
}
RT17 = RTPAMS = function () {
	RT12 = RTPAMS = function () {
		RTPAMS = function () {
			r = $$R(rtsOb6)()
			r.oR('dfR', $l)
			r.oR('gPo', function (id) {
				$l('gPo# ' + id)
			})
			r.oR('gPo', function () {
				$l(3)
			}) //both routes fire!
			r.oR('dlF', $l)
			r.oR('ldV', function (rt, ac) {
				$l(rt + '_' + ac)
			})
		}
		$.x().A('driver lincese')
		r = _$R(rtsOb1)()
		r.oR('dfR LIABILITY', $l)
		r.oR('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.oR('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.oR('dlF HOSPITAL AFFILIATION', $l)
		r.oR('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
	}
	RTPAMS = function () {
		z();
		$.x().A('rtpams hahahahhahaha')
		r = $$R({
			routes: {
				"*x": "d",
				'': 'home',
				'view': 'v',
				'new': 'nn',
				':id': 'en',
				'posts/:id': 'gPo',
				'*acts': 'dfR',
				'download/*path': 'dlF',
				':route/:action': 'ldV'
			},
			home: function () {
				$l('home')
			},
			v: function () {
				$l('image')
			},
			nn: function () {
			},
			en: function (id) {
				$l('id:' + id)
			}
		})()
		r.oR('dfR', alert)
		r.oR('gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		// H$()  // or Bb.h.s({pushState: true})
		// r.oR('dfR', alert)
		r.on('route:gPo', function (id) {
			alert('gPo# ' + id)
		})
		r.oR('gPo', function () {
			alert(3)
		}) //both routes fire!
		//r.oR('dlF', alert)
		r.oR('ldV', function (rt, ac) {
			alert(rt + '_' + ac)
		})
		Bb.h.start({pushState: true})
		r.o('dfR', $l)
		r.o('gPo', function (id) {
			$l('gPo# ' + id)
		})
		r.o('gPo', function () {
			$l(3)
		}) //both routes fire!
		r.o('dlF', $l)
		r.o('ldV', function (rt, ac) {
			$l(rt + '_' + ac)
		})
		r.oR('d', function (a) {
			alert(a)
			$l('d:' + a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
			$l('e:' + a)
		})//#e -> 'e' (could do '/#/e')
		r.oR('d', function (a) {
			alert(a)
		})//#hello -> 'hello'
		r.oR('e', function (a) {
			alert(a)
		})//#e -> 'e' (could do '/#/e')
		w.h.start() // H$()
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
		_.in(2, function () {
			Bb.h.navigate('d', {trigger: true})
		})
	}
	z();
	$.x().A('rtpams hahahahhahaha')
	r = $$R({
		routes: {
			"*x": "d",
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			$l('home')
		},
		v: function () {
			$l('image')
		},
		nn: function () {
		},
		en: function (id) {
			$l('id:' + id)
		}
	})()
	r.oR('dfR', alert)
	r.oR('gPo', function (id) {
		alert('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', alert)
	r.oR('ldV', function (rt, ac) {
		alert(rt + '_' + ac)
	})
	// H$()  // or Bb.h.s({pushState: true})
	// r.oR('dfR', alert)
	r.on('route:gPo', function (id) {
		alert('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	//r.oR('dlF', alert)
	r.oR('ldV', function (rt, ac) {
		alert(rt + '_' + ac)
	})
	Bb.h.start({pushState: true})
	r.o('dfR', $l)
	r.o('gPo', function (id) {
		$l('gPo# ' + id)
	})
	r.o('gPo', function () {
		$l(3)
	}) //both routes fire!
	r.o('dlF', $l)
	r.o('ldV', function (rt, ac) {
		$l(rt + '_' + ac)
	})
	r.oR('d', function (a) {
		alert(a)
		$l('d:' + a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
		$l('e:' + a)
	})//#e -> 'e' (could do '/#/e')
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	w.h.start() // H$()
	_.in(2, function () {
		Bb.h.navigate('d', {trigger: true})
	})
	_.in(2, function () {
		Bb.h.navigate('d', {trigger: true})
	})
}
RT = HOWDYPAM = ADDRESSES = function () {
	d = $.d()
	$.bt('add LAST SEVEN YEARS', function () {
		r.n('items')
	})
	$.bt('add1 address', function () {
		$.A($.h1('k'))
		r.n('items/j')
	})
	rts = {
		'cool/:name': 'welcome',
		'image/:id': 'image',
		'items': 'items',
		'items/:item': 'item',
		'itemlist': 'showItemList'
	}
	$R({
		r: rts,
		welcome: function (name) {
			var greet = 'howdy, ' + name + '!'
			d.h(greet)
			$l(greet)
			//$.bd().E().A($.h1('welcome'))
		},
		items: function () {
			$.bd().E().A($.h1('show item list'))
		},
		item: function (item) {
			$.bd().E().A($.h1('show item: ' + item))
		},
		image: function (id) {
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			})
			$.bd().C('z')
		},
		_: function () {
			$l('you are viewing index')
		}
	})
	Bb.h.start({pushState: true})
	// _.in(2,function(){ r.n('cool/jason') })
	//_.in(5, function () {$l('-> img'); r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})})
}
$RoApp('RT13', function () {
	rtr = $R(rtsOb4)
	$.bt('index', function () {
		rtr.n('')
	})
	$.bt('hello', function () {
		rtr.n('hello')
	})
	$.bt('goodbye', function () {
		rtr.n('goodbye')
	})
	$.bt('default', function () {
		r.n('asfd/afsd')
	})
})
$RoApp('RT14', function () {
	$R(rtsOb4)
	r.A('rnav/j', function () {
		alert('!')
	})
	$.bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
	$.bt('hi', function () {
		rt.n('po/2')
	})
	$.bt('hi1', function () {
		rt.n('po/4')
	})
	$.bt('hiiiii', function () {
		r.n('b/rnavv/j', {trigger: true})
	})
	$.a('home', '/b/routee')
	_.in(2, function () {
		r.n('d')
	})
	function alpha() {
		function anchorClickBlocker() {
			//looks for clicks on any anchor els where
			//href starts with '/' (no domain) and stop
			//bw from nv to it
			$.bd().on('click', 'a[href^="/"]', function (ev) {
				$l('wow')
				ev.preventDefault()
				r.n($(this).attr('href', {trigger: true}))
			})
//looks for clicks on any anchor els where
//href starts with '/' (no domain) and stop
//bw from nv to it
			$('body').on('click', 'a[href^="/"]', function (ev) {
				ev.preventDefault()
				r.n($(this).attr('href'))
			})
		}
		
		$.a().A($.h1('afsd'))
		anchorClickBlocker()
	}
})
$RoApp('RT15', function () {
	FirstVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))
		}
	})
	FirstVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.sp('My 1st View').fS(60),
					$.bt('Go to 2nd View', function (e) {
						$l('clicked "go to 2nd View" anchor')
						r.n('sec')
					}).C('y')))
		}
	})
	SecVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)
			))
		}
	})
	SecVw = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.E().A($.d().A(
					$.bt('Go to 1st View', function (e) {
						$l('clicked "go to 1st View" anchor')
						r.n('first')
					}).C('o'),
					$.sp('My 2nd View').fS(50)
			))
		}
	})
	r = $R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			$l('in pg1')
			FirstVw({
				el: $('#ct')
			})
		},
		pg2: function () {
			$l('in pg2')
			SecVw({el: $('#ct')})
		}
	})
	r = $R({
		r: {
			'': 'pg1',
			'first': 'pg1',
			'sec': 'pg2'
		},
		pg1: function () {
			$l('in pg1')
			FirstVw({
				el: $('#ct')
			})
		},
		pg2: function () {
			$l('in pg2')
			SecVw({el: $('#ct')})
		}
	})
})
RTRVIEWS = SHOWVW = NORTR = function () {
	v1 = v2 = v3 = 0
	$.d('r', 100, 100).id('div')
	// ha.. this is just 'no router'
	V1 = $V({
		i: function () {
			this.r()
		}, r: function () {
			
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	V2 = $V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this
		}
	})
	V3 = $V({
		i: function () {
			this.render()
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3")
			return this
		}
	})
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $V({
		chV: 0,
		render: function () {
			this.$el.ht('Hi Area').A(
					this.chV.$el
			)
			return this
		}
	})
	hi = V1({Ms: "Hello world"})
	ct = CtV({
		el: $("#div"),
		model: hi
	})
	/*
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	$.bt('v1', function () {
				if (!v1) {
					v1 = V1({model: hi})
				}
				ct.chV = v1
				ct.render()
			}
	)
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.render()
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.$el.ht("Greeting Area");
			this.$el.A(this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({
		Ms: "Hello world"
	})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
SHOWVW = NOROUTER = function () {
	$.x()
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.h(
					this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.h("Greeting Area");
			this.A(
					this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({Ms: "Hello world"})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
NORTR = function () {
	$.x(null, 'no router')
	v1 = 0
	v2 = 0
	v3 = 0
	dv = $.d('r', 100, 100).id('div')
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	hi = V1({
		Ms: "Hello world"
	})
	$.bt('v1', function () {
		v1 = v1 || V1({m: hi})
		ct.chV = v1
		ct.r()
	})
	V2 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(
					this.g('Ms') + " from the View 2"
			);
			return this
		}
	})
	//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $$V({
		chV: 0,
		r: function () {
			this.h('Hi Area')
			this.A(this.chV.$el)
			return this
		}
	})
	/*
	
	 ct = CtV({
	 el:dv,
	 model: hi
	 })
	
	
	
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	
	
	 */
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.r()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.r()
	})
}
SHOWVW = NOROUTER = function () {
	$.x()
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.h(
					this.model.get('Ms') + " from the View 1")
			return this
		}
	})
	V2 = $$V({
		i: function () {
			this.r();
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this;
		}
	})
	V3 = $$V({
		i: function () {
			this.render();
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3");
			return this;
		}
	})
	// Now we need a view that will contain the view
	// and render it whenever the user makes a choice on the screen.
	CtV = $$V({
		myChildV: null,
		r: function () {
			this.h("Greeting Area");
			this.A(
					this.myChildV.$el);
			return this;
		}
	})
	/*  Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	greet = V1({Ms: "Hello world"})
	cont = CtV({
		el: $("#AppContainer"),
		model: greet
	})
	v1 = null;
	v2 = null;
	v3 = null;
	function showView1() {
		if (view1 == null) {
			view1 = new View1({model: greeting});
		}
		container.myChildView = view1;
		container.render();
	}
	
	function showView2() {
		if (view2 == null) {
			view2 = new View2({model: greeting});
		}
		container.myChildView = view2;
		container.render();
	}
	
	function showView3() {
		if (view3 == null) {
			view3 = new View3({model: greeting});
		}
		container.myChildView = view3;
		container.render();
	}
}
NORTR = function () {
	$.x(null, 'no router')
	v1 = 0
	v2 = 0
	v3 = 0
	dv = $.d('r', 100, 100).id('div')
	V1 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	hi = V1({
		Ms: "Hello world"
	})
	$.bt('v1', function () {
		v1 = v1 || V1({m: hi})
		ct.chV = v1
		ct.r()
	})
	V2 = $$V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(
					this.g('Ms') + " from the View 2"
			);
			return this
		}
	})
	//V3 = $$V({i: function () {this.r()}, r: function () {return this.h(this.g('Message') + " from " + this.g('view') )}})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $$V({
		chV: 0,
		r: function () {
			this.h('Hi Area')
			this.A(this.chV.$el)
			return this
		}
	})
	/*
	
	 ct = CtV({
	 el:dv,
	 model: hi
	 })
	
	
	
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	
	
	 */
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.r()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.r()
	})
}
NORTR = function () {
	v1 = v2 = v3 = 0
	$.d('r', 100, 100).id('div')
	// ha.. this is just 'no router'
	V1 = $V({
		i: function () {
			this.r()
		}, r: function () {
			
			//this.$el.ht(this.model.get('Ms') + " from the View 1" )
			return this
		}
	})
	V2 = $V({
		i: function () {
			this.r()
		},
		r: function () {
			this.$el.ht(this.model.g('Ms') + " from the View 2");
			return this
		}
	})
	V3 = $V({
		i: function () {
			this.render()
		},
		r: function () {
			this.$el.html(this.model.get('Message') + " from the View 3")
			return this
		}
	})
	// Now we need a view that will contain the view
	// and render it
	// whenever the user makes a choice on the screen.
	CtV = $V({
		chV: 0,
		render: function () {
			this.$el.ht('Hi Area').A(
					this.chV.$el
			)
			return this
		}
	})
	hi = V1({Ms: "Hello world"})
	ct = CtV({
		el: $("#div"),
		model: hi
	})
	/*
	 Now lets create a simple div on the UI which will be used as el to this ContainerView.
	 We will then position three buttons on the UI which will let the user to change the view.
	 Below code shows the application setup that is creating the container view and the functions
	 that will get invoked when the user selects the view from screen.
	 */
	$.bt('v1', function () {
				if (!v1) {
					v1 = V1({model: hi})
				}
				ct.chV = v1
				ct.render()
			}
	)
	$.bt('v2', function () {
		if (!v2) {
			v2 = V2({model: hi})
		}
		ct.chV = v2
		ct.render()
	})
	$.bt('v3', function () {
		if (!v3) {
			v3 = V3({model: hi})
		}
		ct.chV = v3
		ct.render()
	})
}
ROUTE = function () {
	z()
	$R({r: {"*x": "d"}}, '+')
	r.oR('d', function (a) {
		$l('d:' + a)
	})
	r.oR('e', function (a) {
		$l('e:' + a)
	})
}
ROUTEPAMS = function () {
	$.x().A('hahahahhahaha')
	RTob = {
		'': 'home',
		'view': 'v',
		'new': 'nn',
		':id': 'en',
		'posts/:id': 'gPo',
		'*acts': 'dfR',
		'download/*path': 'dlF',
		':route/:action': 'ldV'
	}
	$R({
		rt: RTob,
		home: function () {
			$l('home')
		},
		v: function () {
			$l('image')
		},
		nn: function () {
		},
		en: function (id) {
			$l('id:' + id)
		}
	}, '+')
	r.oR('dfR', $l)
	r.oR('gPo', function (id) {
		$l('gPo# ' + id)
	})
	r.oR('gPo', function () {
		$l(3)
	}) //both routes fire!
	r.oR('dlF', $l)
	r.oR('ldV', function (rt, ac) {
		$l(rt + '_' + ac)
	})
}
ROUTE = function () {
	z()
	r = bbR({
		R: {"*x": "d"}
	})()
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	bbH()
}
ROUTEPAMS = function () {
	z()
	rtr = bbR({
		R: {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			al('home')
		},
		v: function () {
			al('image')
		},
		nn: function () {
		},
		en: function (id) {
			al(id)
		}
	})
	r = rtr()
	r.oR('dfR', al)
	r.oR('gPo', function (id) {
		al('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', al)
	r.oR('ldV', function (rt, ac) {
		al(rt + '_' + ac)
	})
	bbH()  // or Bb.h.s({pushState: true})
}
ROUTENAV = function () {
	z()
	Rt = bbR({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	bbH()
	bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
}
RTR = function () {
	$.x('b')
	RTob = {
		'': 'index',
		'wap/rtr/images/:id': 'image',
		view: 'viewImage'
	}
	$R({
		r: RTob,
		h: function () {
			$l('you are viewing home page')
		},
		x: function () {
			$l('you are viewing index')
		},
		image: function (id) {
			$l('image===')
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			});
			$.bd().C('z')
		},
		viewImage: function () {
			$l('you are viewing an image')
		}
	}, '+')
	$.in(function () {
		$l('......')
		r.n('/wap/rtr/images/32903290239032902390')
	}, '*')
	//looks for clicks on any anchor els where
	//href starts with '/' (no domain) and stop
	//bw from nv to it
	$.bd().on('click', 'a[href^="/"]', function (ev) {
		$l('wow')
		ev.preventDefault()
		r.n($(this).attr('href', {trigger: true}))
	})
}
ROUTENAV = function () {
	$.x('b')
	$R({
		r: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			$l(a)
		},
		gp: function (id) {
			$.bd().C($r())
			$l('Get post ' + id)
		}
	}, '+')
	$.bt('hi', function () {
		rt.n('po/2')
	})
}
ROUTE = function () {
	z()
	r = bbR({
		R: {"*x": "d"}
	})()
	r.oR('d', function (a) {
		alert(a)
	})//#hello -> 'hello'
	r.oR('e', function (a) {
		alert(a)
	})//#e -> 'e' (could do '/#/e')
	bbH()
}
ROUTEPAMS = function () {
	z()
	rtr = bbR({
		R: {
			'': 'home',
			'view': 'v',
			'new': 'nn',
			':id': 'en',
			'posts/:id': 'gPo',
			'*acts': 'dfR',
			'download/*path': 'dlF',
			':route/:action': 'ldV'
		},
		home: function () {
			al('home')
		},
		v: function () {
			al('image')
		},
		nn: function () {
		},
		en: function (id) {
			al(id)
		}
	})
	r = rtr()
	r.oR('dfR', al)
	r.oR('gPo', function (id) {
		al('gPo# ' + id)
	})
	r.oR('gPo', function () {
		alert(3)
	}) //both routes fire!
	r.oR('dlF', al)
	r.oR('ldV', function (rt, ac) {
		al(rt + '_' + ac)
	})
	bbH()  // or Bb.h.s({pushState: true})
}
ROUTENAV = function () {
	z()
	Rt = bbR({
		routes: {
			'po/:id': 'gp',
			'*a': 'dr'
		},
		dr: function (a) {
			al(a)
		},
		gp: function (id) {
			al('Get post ' + id)
		}
	})
	r = Rt()
	bbH()
	bt('hi', function () {
		r.n('po/2', {t: 1})
	}).a()
}