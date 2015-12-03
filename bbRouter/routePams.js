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