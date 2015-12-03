///
HOWDYPAM = function () {
	z()
	d = $.d()
	$R({
		r: {
			'cool/:name': 'welcome',
			'image/:id': 'image',
			'items': 'items',
			'items/:item': 'item',
			'itemlist': 'showItemList'
		},
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
			$l('image===')
			_.t(10, function () {
				$l($r() + '-id: ' + id)
			})
			$.bd().C('z')
		},
		_: function () {
			$l('you are viewing index')
		}
	})
	// _.in(2,function(){ r.n('cool/jason') })
	_.in(5, function () {
		$l('-> img')
		r.n('image/55c24c8f4198473b0d000004.png', {trigger: true})
	})
	$.bt('add', function () {
		r.n('items')
	})
	$.bt('add1', function () {
		$.A($.h1('k'))
		r.n('items/j')
	})
	Bb.h.start({pushState: true})
}
ROUTE = function () {
	z()
	r = R$({
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
	rtr = R$({
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
	Rt = R$({
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
BBHS = function () {
	$l('BBHS');
	$('body').C('r');
	$.h('bbhs');
	bH = Bb.H
	bh = Bb.h
}
$RoApp('ROAP', function () {
	$R({
		r: {
			hello: 'hi',
			goodbye: function () {
				$.C('o')
			}
		},
		_: function () {
			$l('indexxxxx')
			$.C('p')
		}, //index
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
		} //default
	})
	$.bt('index', function () {
		r.n('')
	})
	$.bt('hello', function () {
		r.n('hello')
	})
	$.bt('goodbye', function () {
		r.n('goodbye')
	})
	$.bt('default', function () {
		r.n('asfd/afsd')
	})
})
$RoApp('TWOVWS', function () {
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
$RoApp('ROUTEE', function () {
	$.x();
	$l('routee')
	$R({
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
	})
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
		r.n('mvc/rnavv/j', {trigger: true})
	})
	$.a('home', '/mvc/routee')
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