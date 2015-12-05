function alpha() {
	BBVP0 = function () {
		$.x('x', 'bb view people')
		vw = _V({
			t: 'ul',
			i: function () {
				this.$el.C('y')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, function (p) {//$('#peep')
					el.A(
							$.li().A(p.n + '(' + p.a + ')')
					)
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().el)
		_.in(function () {
			peep.pop();
			vw.r()
		})
	 	vw = $.ulV({
			i: function () {
				this.q.C($r())
			},
			r: function () {
				var el = this.q.E()
				this.cl(function (p) {
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().q)
		_.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
}
Person0 = function (o) {
	this.name = o.name
	this.age = o.age
	this.job = o.job
	//this.work=function(){}
}
Person0.prototype.work = function () {
	return this.name + ' is working'
}
DIRECATMIN19 = function () {
	$CSS(CssOb);
	app = {m: {}, v: {}, r: {}, c: {}}
	app.i = function () {
		direc = new app.v.People(dirData)
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
	app.r.Rtr = Bb.R.x({
		routes: {
			'filter/:type': 'urlFilter'
		},
		urlFilter: function (type) {
			direc.filterType = type
			direc.trigger('change:filterType')
		}
	})
	app.i = function () {
		direc = new app.v.People(dirData)
		rtr = new app.r.Rtr()
		Bb.h.start()
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
Quiz0 = function (title) {
	this.title = title
}
PEOPLE = function () {
	$.x();
	mds();
	vws();
	cls();
	clVw()
 
	_.in(.2, function () {
		pCV.r()
	}, '*')
	_.in(.4, function () {
		pCV.r()
	}, '*')
	_.in(.2, function () {
		pCV.r()
	})
	_.in(.4, function () {
		pCV.r()
	})
	Person = _M({
		I: function () {
		}, // this.oV(function(mod, err){$l(err)})
		D: {name: 'john doe', age: 30, job: 'worker'},
		V: function (ats) {
			if (ats.age < 0) {
				return 'age below zero, stupid!'
			}
		},
		work: function () {
			return this.g('name') + ' is working'
		}
	})
	p = Person({name: 'yano', age: 34})
	p.oV(function (mod, err) {
		$l(err)
	})
	personView = bbV({
		t: 'li',
		k: 'person',
		i: 'some-person',
		I: function () {
			this.R()
		},
		T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		R: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(t.T(t.J()))
		}
	})
	v = personView({m: p})
	peopleCol = bbC({m: Person})
	//pC=new peopleCol()
	//pC.add(p)
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
	peopleView = bbV({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
	pcv = peopleView({cl: pC})
	pcv.R()
	$b()(pcv.el)
	//$b()(pcv.q)
}
function mds() {
	Per = _M({
		i: function () {
			//this.oV(function(mod, err){$l(err)})
		},
		d: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (ats) {
			if (ats.age < 0) {
				return 'a < 0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	Person = _M({
		I: function () {
		}, // this.oV(function(mod, err){$l(err)})
		D: {name: 'john doe', age: 30, job: 'worker'},
		V: function (ats) {
			if (ats.age < 0) {
				return 'age below zero, stupid!'
			}
		},
		work: function () {
			return this.g('name') + ' is working'
		}
	})
	Person0 = function (o) {
		this.name = o.name
		this.age = o.age
		this.job = o.job
		//this.work=function(){}
	}
	Person0.prototype.work = function () {
		return this.name + ' is working'
	}
	Per = _M({d: {n: 'a', a: 20, o: 'p'}})
	Person = _M({
		I: function () {
		}, // this.oV(function(mod, err){$l(err)})
		D: {name: 'john doe', age: 30, job: 'worker'},
		V: function (ats) {
			if (ats.age < 0) {
				return 'age below zero, stupid!'
			}
		},
		work: function () {
			return this.g('name') + ' is working'
		}
	})
	Per = _M({d: {n: 'a', a: 20, o: 'p'}})
	Per = $M({
		d: {lame: true},
		i: function () {
			var t = this
			t.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			t.on('change:n',
					function (m, e) {
						alert(3);
						$l(e)
					})
		},
		v: function (at) {
			if (at.n == 'rigo') {
				return "n cant be rigo!"
			}
		}
	})
	p = Per({n: "rigo", a: 7})
	p = Per({})
	p1 = Per({n: 'b'})
	p2 = {n: 'c'}
	Person0.prototype.work = function () {
		return this.name + ' is working'
	}
	p = Person({name: 'yano', age: 34})
	p.oV(function (mod, err) {
		$l(err)
	})
	p1 = Per({n: 'j'})
	p2 = Per({n: 'y'})
	p = Per({n: 'y', a: 34})
	p = Per({name: 'yano', age: 34})
	p.oIv(function (mod, z) {
		$l(z)
	})
}
function vws() {
	PerV = _V({
		t: 'li',
		x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.$el.A('fasdfsfasd')
			_m = this.model
			//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
		},
		i: function () {
			this.r()
		}
	})
	PerV = _V({
		t: 'li',
		x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.$el.A('fasdfsfasd')
			_m = this.model
			//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
		},
		i: function () {
			this.r()
		}
	})
	PerV = _V({
		tn: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var t = this, q = this.$el
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			q.html(q.text(t.j()))
		}
	})
	personView = _V({
		t: 'li',
		k: 'person',
		i: 'some-person',
		I: function () {
			this.R()
		},
		T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		R: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(t.T(t.J()))
		}
	})
	v = personView({m: p})
	v = pV = PerV({m: p})
}
function cls() {
	peopleCol = _C({m: Person})
	PerC = _C({m: Per})
	pC = PerC([
		{n: 'rigo', a: 29},
		{n: 'j', a: 2},
		{n: 's', j: 'gx'}
	])
	Pers = _C({model: Per})
	pers = Pers([p1, p2])
	Pers = _C({model: Per})
	pers = Pers([p1, p2])
	Pers = $Cl({m: Per})
	pers = Pers()
	p1 = pers.add(p)
	pers.add(p2)
	pers.rm(p1)
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
	pC.add(p)
	pC.at(1).n('joejoe')
	pC.at(1).s('name', 'joejoe')
	peop = $cl()
	peop.comparator = function (a, b) {
		return a.g('n') < b.g('n') ? -1 : 1
	}
	peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
	peop.indexOf(rob)//0
	peop.indexOf(tom)//2
	pC = PepC()
	peopleCol = _C({m: Person})
	pC.A([p, p1, p2])
	pC = PepC()
	pC.A([p, p1, p2])
	PepC = _C({m: Per})
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
}
function clVw() {
	peopleView = _V({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
	PerColV = _V({
		tn: 'ul',
		i: function () {
			$l('hi')
			$l(this.cl)
		},
		r: function () {//var t=this
			this.cl.each(function (p) {
				var v, pV  //$l(p.g('n'))
				pV = PerV.o({m: p}) //$l(pV.el)
				this.$el.append(pV.el) //t.q( pV.el  )
			}, this)
		}
	})
	PepV = _V({
		cl: PepC, el: ul = $.ul(),
		i: function () {
		},
		r: function () {
			ul = this.$el.E()
			this.j(function (md) {
				PerV({m: md}, ul)
			})
		}
	})
	pCV = PepV({cl: pC})
	pCV = PerColV({cl: pC})
	pCV.r()
	$.A(pCV.el)//pC=new peopleCol() //pC.add(p)
	peopleView = _V({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
	PepV = _V({
		cl: PepC, el: ul = $.ul(),
		i: function () {
		},
		r: function () {
			ul = this.q.E()
			this.J(function (md) {
				PerV.o({m: md}, ul)
			})
		}
	})
	pCV = PepV({cl: pC})
	pcv = peopleView({cl: pC})
	pcv.R()
	peopleView = _V({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
}
show = function (a) {
	a = a || 'welcome'
	$b().H('')(h1(a))
}
PEOPLE = function () {
	$l('people');
	z()
	Quiz0 = function (title) {
		this.title = title
	}
	Person0 = function (o) {
		this.name = o.name
		this.age = o.age
		this.job = o.job
		//this.work=function(){}
	}
	Person0.prototype.work = function () {
		return this.name + ' is working'
	}
	Person = bbM({
		I: function () {
		}, // this.oV(function(mod, err){$l(err)})
		D: {name: 'john doe', age: 30, job: 'worker'},
		V: function (ats) {
			if (ats.age < 0) {
				return 'age below zero, stupid!'
			}
		},
		work: function () {
			return this.g('name') + ' is working'
		}
	})
	p = Person({name: 'yano', age: 34})
	p.oV(function (mod, err) {
		$l(err)
	})
	personView = bbV({
		t: 'li',
		k: 'person',
		i: 'some-person',
		I: function () {
			this.R()
		},
		T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		R: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(t.T(t.J()))
		}
	})
	v = personView({m: p})
	peopleCol = bbC({m: Person})
	//pC=new peopleCol()
	//pC.add(p)
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
	peopleView = bbV({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
	pcv = peopleView({cl: pC})
	pcv.R()
	$b()(pcv.el)
	//$b()(pcv.q)
}
PEOPLE = function () {
	$l('people');
	z()
	Quiz0 = function (title) {
		this.title = title
	}
	Person0 = function (o) {
		this.name = o.name
		this.age = o.age
		this.job = o.job
		//this.work=function(){}
	}
	Person0.prototype.work = function () {
		return this.name + ' is working'
	}
	Person = bbM({
		I: function () {
		}, // this.oV(function(mod, err){$l(err)})
		D: {name: 'john doe', age: 30, job: 'worker'},
		V: function (ats) {
			if (ats.age < 0) {
				return 'age below zero, stupid!'
			}
		},
		work: function () {
			return this.g('name') + ' is working'
		}
	})
	p = Person({name: 'yano', age: 34})
	p.oV(function (mod, z) {
		$l(z)
	})
	personView = bbV({
		t: 'li',
		k: 'person',
		i: 'some-person',
		I: function () {
			this.R()
		},
		T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		R: function () {
			var t = this
			//this works, but doesnt use a template
			// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
			t.H(t.T(t.J()))
		}
	})
	v = personView({m: p})
	peopleCol = bbC({m: Person})
	//pC=new peopleCol()
	//pC.add(p)
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
	peopleView = bbV({
		t: 'ul',
		I: function () {
			$l('hi')
			$l(this.cl)
		},
		R: function () {//var t=this
			this.cl.each(
					function (person) {
						
						//$l(person.get('name'))
						var v = personView({m: person})
						//$l(v.el)
						this.$el.append(v.el)
						//t.q( v.el  )
					}, this)
		}
	})
	pcv = peopleView({cl: pC})
	pcv.R()
	$b()(pcv.el)
	//$b()(pcv.q)
}
TASKS = function () {
	z()
	Ap = {M: {}, C: {}, V: {}}
	Ap.M.Task = bbM({})
	task1 = Ap.M.Task({
		title: 'go to the store',
		priority: 4
	})
	task2 = Ap.M.Task({
		title: 'go to the park',
		priority: 3
	})
	Ap.V.Task = bbV({
		t: 'li',
		R: function () {
			return this.H(
					this.g('title'))
		}
	})
	taskView = Ap.V.Task({m: task})
	Ap.C.Tasks = bbC({m: Ap.M.Task})
	tasks = Ap.C.Tasks([
		{title: 'hi'},
		{title: 'bye'}])
	Ap.V.Tasks = bbV({
		t: 'li',
		R: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Task({m: t})
						this.$el.append(v.el)
					},
					this)
			$b()(this.el)
		}
	})
	tasksV = Ap.V.Tasks({cl: tasks})
}
ITEMS = function () {
	z()
	Router = bbR({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	router = Router()
	Ap = {
		M: {}, V: {}, C: {}
	}
	Ap.M.item = bbM({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	bbH()
}
AVAIL1 = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		Ap.M.Avail({c: qiv('newAvail')}).save()
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.$el.append(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'false')
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.append("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.append(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	v = Ap.V.Avails({collection: avs})//.render()
	avs.on('destroy', function (aa) {
		$l('destroy!!!!')
	})
}
AVAIL = function () {
	z()
	tx('new avail').id('newAvail').a()
	bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	}).a()
	di('availsDiv').a()
	Ap = {M: {}, C: {}, V: {}, T: {}}
	Ap.T.Avail = function (model) {
		return _d().w(400).h(100).M(20).c('g')(
				h4(model.g('c')).id('avail').c('y', 'r'),
				br(), sp('delete').id('deleteAvail'),
				sp(' '), sp('edit').id('editAvail'),
				sp(' '), cb2().id('selAvail')).q
	}
	Ap.M.Avail = bbM({urlRoot: '/avail'})
	Ap.C.Avails = bbC({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bbV({
		R: function () {
			this.q(Ap.T.Avail(this.model))
			return this
		},
		events: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			qq(this.$el.find('#avail')).cE(1)
		}
	})
	Ap.V.Avails = bbV({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q(h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails()
	avs.on('destroy',
			function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
	v = Ap.V.Avails({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	a = bbM({
		defaults: {prop: 3},
		test: function () {
			console.log(this.get('prop'))
		},
		test2: function (a) {
			console.log(
					(function () {
						return this.get('prop')
					})()
			)
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	f = a()
}
//f.happy('prop')
BBSORT = function () {
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
}


