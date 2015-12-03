 
dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
CssOb = {
	'.details': {
		display: 'none'
	},
	'.active': {
		C: 'r'
	},
	body: {
		C: 'z', c: 'w'
	},
	'a.filter': {C: 'b', c: 'y', P: '5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration': 'none'},
	'a.filter:hover': {C: 'y', c: 'b', P: '5px 10px', M: '5px', 'border-radius': '3px', 'text-decoration': 'none'},
	'div#wrapper': {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	},
	'div.tools': {
		display: 'flex',
		'flex-direction': 'column',
		'align-items': 'center'
	},
	'input#searchBox': {c: 'z'}
}
tp = {
	ix: function (vw) {
		var recs = this.recs//, o=vw.model.attributes
		return $.sp().A(
				$.h2('There are ' + vw.count() + ' recs'),
				$.dK('recs')
		)
	}
}
Roll = {}
Roll.Rec = Bb.M.x({})
Roll.Recs = Bb.C.x({
	localStorage: new Store('recs')
})
Roll.Ix = Bb.V.x({
	tp: 'ix',
	initialize: function () {
		$l('ix')
		this.recs = new Roll.Recs()
		this.recs.on('all', this.render, this)
		this.recs.fetch()
		this.recs.on('all', this.r, this)
	},
	r: function () {
		this.$el.html(tp[this.tp](this))
		var form = new Roll.Ix.Form()
		this.$('.recs').A(form.r().el)
		return this
	},
	count: function () {
		return _.z(this.recs)
	}
})
Roll.Ix.Form = Bb.V.x({
	tagName: 'form',
	initialize: function () {
		$l('Ix.Form')
		this.r()
	},
	r: function () {
		this.$el.A($.h1('afssafsafsfsdfsd'))
		return this
	}
})
Roll.Rt = Bb.R.x({
	initialize: function (o) {
		$l('rt')
		this.q = o.q
	},
	routes: {'': '_'},
	_: function () {
		$l('_')
		var vw = new Roll.Ix()
		this.q.E().A(vw.r().el)
	}
})
Roll.boot = function (ctDv) {
	new Roll.Rt({
		q: ctDv
	})
	Bb.h.start()
}
DIRECATMIN19 = function () {
		z();
		$CSS(CssOb);
		app = {
			m: {}, v: {}, r: {}, c: {}
		}
		app.i = function () {
			direc = new app.v.People(dirData)
			rtr = new app.r.Rtr()
			Bb.h.start()
		}
		app.i = function () {
			direc = new app.v.People(
					dirData
			)
		}
		app.m.Person = Bb.Model.extend({
			defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
			initialize: function () {
				this.set('type', this.get('par') ? 'student' : 'parent')
			}
		})
		app.c.People = Bb.C.x({
			model: app.m.Person,
			comparator: function (per) {
				return per.get('lN')
			}
		})
		app.r.Rtr = Bb.R.x({
			routes: {
				'filter/:type': 'urlFilter'
			},
			urlFilter: function (type) {
				direc.filterType = type
				direc.trigger('change:filterType')
			}
		})
		app.m.Person = Bb.Model.extend({
			defaults: {ID: '', fN: '', lN: '', par: '', p: '', e: ''},
			initialize: function () {
				this.set('type', this.get('par') ? 'student' : 'parent')
			}
		})
		app.c.People = Bb.C.x({
			model: app.m.Person,
			comparator: function (per) {
				return per.get('lN')
			}
		})
		app.v.Person = Bb.V.x({
			events: {
				'click .list-header': 'showDetails'
			},
			showDetails: function (e) {
				var q = $(e.target)
				q.toggleClass('active')
				q.siblings('.details').slideToggle('fast')
			},
			tagName: 'li',
			attributes: function () {
				return {class: 'person ' + this.model.get('type')}
			},
			tp: function (o) {
				return $('<h3>').A(
						$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
						$.dK('details', [
							'phone: ' + o.p, $.br(),
							'email: ', $.a(o.e)
						])
				)
			},
			r: function () {
				ob = this.model
				j = ob.toJSON()
				$l('render:' + j)
				this.A(
						this.tp(j)
				)
				return this
			}
		})
		app.v.People = Bb.V.x({
			el: '#wrapper',
			r: function () {
				var vw = this,
						q;
				$('#listing').empty()
				_.e(this.cl.models, function (da) {
					vw.renderPerson(da)
				}, vw)
				return this
			},
			renderPerson: function (per) {
				var newPer = new app.v.Person({
					model: per
				})
				$('#listing').A(newPer.r().el)
			},
			initialize: function (data) {
				this.cl = new app.c.People(data);
				this.r()
			}
		})
		app.v.Person = Bb.V.x({
			events: {
				'click .list-header': 'showDetails'
			},
			showDetails: function (e) {
				var q = $(e.target)
				q.toggleClass('active')
				q.siblings('.details').slideToggle('fast')
			},
			tagName: 'li',
			attributes: function () {
				return {class: 'person ' + this.model.get('type')}
			},
			tp: function (o) {
				return $('<h3>').A(
						$.sp(o.fN + ' ' + o.lN + ' ( ' + o.type + ' )').K('list-header'),
						$.dK('details', [
							'phone: ' + o.p, $.br(),
							'email: ', $.a(o.e)
						])
				)
			},
			r: function () {
				ob = this.model
				j = ob.toJSON()
				$l('render:' + j)
				this.A(
						this.tp(j)
				)
				return this
			}
		})
		app.v.People = Bb.V.x({
			events: {
				'keyup #searchBox': 'searchFilter'
			},
			getTypes: function () {
			},
			searchFilter: function () {
			},
			filterBySearch: function () {
			},
			filterByType: function () {
			},
			createFilters: function () {
			},
			setFilter: function () {
			},
			el: '#wrapper',
			r: function () {
				var vw = this,
						q;
				$('#listing').empty()
				_.e(this.cl.models, function (da) {
					vw.renderPerson(da)
				}, vw)
				return this
			},
			renderPerson: function (per) {
				var newPer = new app.v.Person({
					model: per
				})
				$('#listing').A(newPer.r().el)
			},
			initialize: function (data) {
				this.cl = new app.c.People(data);
				this.r()
			}
		})
		$.dI('wrapper', [
			$('<h1>').A('games directory').col('o'),
			$.dK('tools', [
				$('<h4>').col('g').A('search:'), $.br(),
				$('<input>').id('searchBox'), $.br(),
				$('<h5>').col('y').A('Filter:'), $.dI('filter'),
				$.dI('count')
			]),
			$.ulI('listing', [])
		])
		$.dI('wrapper', [
			$('<h1>').A('games directory').col('o'),
			$.dK('tools', [
				$('<h4>').col('g').A('search:'), $.br(),
				$('<input>').id('searchBox'), $.br(),
				$('<h5>').col('y').A('Filter:'), $.dI('filter'),
				$.dI('count')
			]),
			$.ulI('listing', [])
		])
		app.i(dirData)
	}
 
	
 

 
ROLL = function () {
		z();
		$Ms('BFROLL')
		$l('------------------- ROLL ----------------------')
		ctDv = $.dK('ct', [
			$.h1('Recs'),
			$.p().A($.a('intro')),
			$.dI('roll', [])
		])
		Roll.boot(ctDv)
	}
 
/// vwAlpha() {
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
 