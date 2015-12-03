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
RESET = function () {
	z()
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	TdsCl = $C({})
	TdsCl.A([
		{id: 1, tt: 'go to Jamaica.', completed: false},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 3, tt: 'go to Disneyland.', completed: true}
	])
	// we can listen for add/change/rm evs
	TdsCl.oA(function (m) {
		$l("Added " + m.g('tt'))
	})
	TdsCl.on("remove", function (m) {
		$l("Removed " + m.g('tt'))
	})
	TdsCl.on("change:completed", function (m) {
		$l("Completed " + m.g('tt'))
	})
	TdsCl.s([
		{id: 1, tt: 'go to Jamaica.', completed: true},
		{id: 2, tt: 'go to China.', completed: false},
		{id: 4, tt: 'go to Disney World.', completed: false}
	])
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
	function more() {
		//  replace  entire cl  content
		TdsCl = $cl()
		// we can listen for reset evs
		TdsCl.on("reset", function () {
			$l("Cl reset.")
		})
		TdsCl.A([{
			tt: 'go to Jamaica.', completed: false
		}, {
			tt: 'go to China.',
			completed: false
		},
			{tt: 'go to Disneyland.', completed: true}]);
		$l('Cl size: ' + TdsCl.length); // Cl size: 3
		TdsCl.reset([{tt: 'go to Cuba.', completed: false}]);
		// Above logs 'Cl reset.'
		$l('Cl size: ' + TdsCl.length); // Cl size: 1
		// use reset with no arguments to clear outcl completely.
		//  This is handy when dynamically loading new page of results
		// where you want to blank out current page of results.
		myCl.reset()
		// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
		// The reason you might want to use this is to perform super-optimized
		//rendering in extreme cases where individual evs are too expensive.
		td = $M()()
		tds = $Cl([td])()
				.on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
					$l(ops.prevMds);
					$l([td]);
					$l(ops.prevMds[0] === td); // true
				})
		tds.reset([])
		// set()  SMART updates  cl with a list of md: new mds added, present mds merged, models not in list rmd
		Beat = $M({d: {job: 'mus'}})
		john = Beat({fN: 'John', lN: 'Lennon'});
		paul = Beat({fN: 'Paul', lN: 'McCartney'});
		george = Beat({fN: 'George', lN: 'Harrison'});
		ringo = Beat({fN: 'Ringo', lN: 'Starr'});
		theBeats = $Cl([john, paul, george, ringo]);// Create a cl using our mds
		pete = Beat({fN: 'Pete', lN: 'Best'});// Createseparate md for Pete Best
		theBeats.s([john, paul, george, pete]); // Update cl
		// Fires`rm` event for 'Ringo', and `add` event for 'Pete'.
		// Updates any of John, Paul and Georges's atts that may have
		// changed over years.
	}
}
INVALID = function () {
	$.x('x', 'valid')
	$l('---- VALIDD ------')
	Md = $$M({
		validate: function (at) {
			if (!at.n) {
				return '!name'
			}
		}
	})
	md = Md({n: 'J'})
	md.oIv(function () {
		$Ms('INVALID !1 1!!!')
	})
	md.s({n: 'S'}, {validate: true})
	$l('n: ' + md.g('n'))
	md.unset('n')
	$l('n: ' + md.g('n'))
	md.s({n: 'S'}, {validate: true})
	md.unset('n', {validate: true})
	$l('n: ' + md.g('n'))
	function more() {
		p2 = Per({n: "qigo", a: 47})
		p3 = Per({n: "rigo", a: 7})
		$.bt('p2 validty', function () {
			$l('isValid: ' + p2.isValid())
		}) //  valid
		$.bt('p3 validty', function () {
			$l('isValid: ' + p3.isValid())
		}) //not valid
	}
}
VALID = TODOO = function () {
	$.x('x', 'valid')
	Todoo = $$M({
		i: function () {
			this.oIv(function (md, z) {
				$l('err: ' + z)
			})
		},
		defaults: {completed: false},
		validate: function (at) {
			if (U(at.tt)) {
				return "!tt"
			}
		}
	})
	todoo1 = Todoo()
	todoo1.s('completed', true, {validate: true})
	$l('completed: ' + todoo1.g('completed'))
	emptyTodoo = Todoo(null, {validate: true})
	$l('valErr: ' + emptyTodoo.validationError)
	//
	Td = $$M({df: {tt: '', completed: false}})
	// -add() and rm() accept  indiv mds | []      // { merge: true }  -> MERGE  dup mds, !ignore
	items = $cl().A([{id: 1, n: "Dog", a: 3}, {id: 2, n: "cat", a: 2}]).A([{
		id: 1,
		n: "Bear"
	}], {merge: true}).A([{id: 2, n: "lion"}])// merge: false
	$l(_.jS(items.toJSON())) // [{"id":1,"name":"Bear","age":3},{"id":2,"name":"cat","age":2}]
	//    to retriev a md from a cl, use Cl.get(), accepts single id:
	tds = TdsCl([td = Td({id: 2, tt: 'book'})])
	td2 = tds.g(2);
	$l(td2 === td) // true
	//   mds  passed by reference
	$l(tdCid === td); // true
	//Listening for evs
	//   can listen for add and rm evs which occur when mds are added/rmd from cl
	TdsCl = $cl()
	TdsCl.on("add", function (td) {
		$l("Gone " + td.g("tt") + " ?" + (td.g("completed") ? 'Y' : 'N'))
	})
	TdsCl.A([{tt: 'Jamai', completed: false}, {tt: 'DL', completed: true}])  // Gone Jamai? N    Gone DL? Y
	// can bind to change event to listen for changes to any of mds in cl
	TdsCl = $cl()
	TdsCl.on("change:tt", function (m) {
		$l("Nah! I " + m.g('tt'))
	})
	TdsCl.A([{tt: ' Jamaica.', completed: false, id: 3}])
	td = TdsCl.g(3)
	td.s('tt', 'go fishing')  //  Nah! I  go fishing
	Td = $M({df: {tt: '', completed: false}})
	td = Td().s({tt: 'Buy cookies', completed: true})
	td.on({
		'change:tt': ttChd = function () {
			$l('tt chd!')
		},
		'change:completed': sttChd = function () {
			$l('stt chd!')
		}
	})
	td.s({tt: 'groceries'})  // tt chd!
	// Use once, dont need to unbind   ev  listener
	TdCounter = _.x({cA: 0, cB: 0}, Bb.E)
	TdCounter.once('event', incrA = function () {
		TdCounter.cA += 1;
		TdCounter.trigger('event')
	})  // This triggering will not  produce any effect on counters
	TdCounter.once('event', incrB = function () {
		TdCounter.cB += 1
	})
	TdCounter.trigger('event')   // Trigger event for first time
	TdCounter.cA //1
	TdCounter.cB //1
	// counterA and counterB should only have been incred once.
	tds = $cl().A([{tt: '  Belgium.', completed: false}, {tt: ' China.', completed: false}, {
		tt: '  Aust',
		completed: true
	}])
	tds.forEach(function (md) {
		$l(md.g('tt'))
	}) //   Belgium.//   China. //   Austria.
	// sortBy()- sort a cl on spec attr, ex: sortByAlph
	tds.sortBy(function (td) {
		return td.g("tt").tLC()
	}).forEach(function (m) {
		$l(m.g('tt'))
	}) // go to Austria. // go to Belgium. // go to China.
	count = 1;
	$l(tds.map(function (md) {
		return count++ + ". " + md.g('tt')
	})) //1. go to Belgium. //2. go to China. //3. go to Austria.
	tds.max(function (m) {
		return m.id
	}).id;
	tds.min(function (m) {
		return m.id
	}).id
	//  pluck() extract  spec attr
	captions = tds.pluck('caption') // returns list of captions
	// filter()  ex: Filter by array of md IDs
	Tds = $Cl({
		md: Td, filterById: function (ids) {
			return this.mds.filter(function (c) {
				return _.contains(ids, c.id)
			})
		}
	})
	//   indexOf() return index of particular item within cl
	tds = $C({})
	// any()  confirm  if any of  vals  incl  pass  iterator   truth  test
	tds.any(function (md) {
		return md.id === 100
	})
	tds.some(function (md) {
		return md.id === 100;
	})
	//  size() return cl size, tds.size() ~ tds.length;
	//  isEmpty()  determine whethercl is empty
	isEmpty = tds.isEmpty()
	//   groupBy() group cl into groups of like items, ex: create groups of completed and incomplete mds
	tds.A([{tt: 'Belgium.', completed: false}, {tt: 'China.', completed: false}, {
		tt: 'Austria.',
		completed: true
	}])
	byCompleted = tds.groupBy('completed');
	completed = $cl(byCompleted[true]);
	$l(completed.pluck('tt')) //  ["Aust"]
	//Underscore  operations  on  objects  are  avail as mets  on   Mds.
	//   pick()  extractset   of   atts   frommd
	Td = $$M({d: {tt: '', completed: false}})
	td = Td({tt: 'go to Austria.'});
	$l(td.pick('tt')) //  {tt: "go to Austria"}
	//  omit(), extract all atts from md, except those listed
	td = Td({tt: 'go to Austria.'});
	$l(td.omit('tt'))   //   {completed: false}
	// keys(), vals() -> lists of attr names, vals
	td = Td({tt: 'go to Austria.'});
	$l(td.keys())   //   ["tt", "completed"]
	$l(td.vals())  //  ["go to Austria.", false]
	// pairs() get  list  of atts as [key, val] pairs
	pairs = Td({tt: 'Aust'}).pairs();
	$l(pairs[0]); // ["tt", "Aust"]
	$l(pairs[1]) // ["completed", false]
	//  invert() creates ob where vals are keys, atts are vals
	Td({tt: 'go to Austria.'}).invert()  // {'go to Austria.': 'tt', 'false': 'completed'}
}
VALIDCOL = function () {
	$.x('b', 'people')
	Per = $M({
		i: function () {
			this.oIv(function (m, z) {
				$l(z)
			})
		},
		defaults: {n: 'doe', a: 30, j: 'wrk'},
		validate: function (at) {
			if (at.a < 0) {
				return 'a<0!'
			}
		},
		work: function () {
			return this.g('n') + ' is working'
		}
	})
	p = Per({n: 'y', a: 34})
	p.oIv(function (m, z) {
		$l('err: ' + z)
	})
	PerV = $V({
		t: 'li',
		k: 'person', x: 'some-person',
		i: function () {
			this.r()
		},
		//tp: _.tp("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
		r: function () {
			var v = this
			//this works, but doesnt use a template
			v.h(v.g('n') + ' ' + v.g('a') + ' ' + v.g('j'))
			v.h(v.tJ())
		}
	})
	pV = PerV({m: p})
	peepC = $Cl({m: Per})
	pC = peepC([{n: 'rigo', a: 29},
		{n: 'j', a: 2}, {n: 's', j: 'gx'}
	])
	pC.add(p)
	pC.at(1)
	//pC.n('joejoe')
	pC.at(1)
	pC.s('name', 'joejoe')
	PeepV = $V({
		tn: 'ul',
		i: function () {
			$l('hi');
			$l(this.cl)
		},
		r: function () {
			var vw = this
			vw.eCl(function (p) {
				var v, pV
				$l(p.g('n'))
				pV = PerV({m: p})
				$l(pV.el)
				vw.q.A(pV.el)
			}, this)
		}
	})
	pcv = PeepV({cl: pC})
	pcv.r()
	$.A(pcv.el)
	/*
	
	 md.validate() checking attr vals  prior to setting them.
	
	 By default occurs when md is persisted using save() or when set() is called if {vld:true}
	
	 Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
	 .save() will not continue and atts of md will not be modified on server.
	
	 Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
	 This object is distinct from current atts of md  and from  pams passed to operation.
	
	 Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
	
	
	 validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	
	
	 */
}
SORT = function () {
	$.x('a', 'sort dont work')
	Chp = $$M()
	chps = $$C({m: Chp})()
	chps.comparator = function (a) {
		return a.tt
	}
	chps.add(Chp({p: 9, tt: "End_"}))
	chps.add(Chp({p: 1, tt: "Beg2_"}))
	chps.add(Chp({p: 5, tt: "Mid_"}))
	chps.add(Chp({p: 1, tt: "Beg_"}))
	$l(chps.pluck('tt'))
	chps.sort()
	$l(chps.pluck('tt'))
}
FRND = function () {
	$.x().h1('FRND')
	Frnd = $M({d: {lame: 1}})
	Frnd = $$M({
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
	Frnds = $$C({m: Frnd})
	frnds = Frnds()
	f = Frnd({n: "paul", a: 7})
	p1 = frnds.A(f);
	f1 = Frnd({name: "Thomas", age: 67})
	f1 = Frnd({n: "Lul", a: 67})
	f1 = cl.A(f1)
	f2 = cl.A(f2)
	f2 = Frnd({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	frnds.A(f2);
	frnds.rm(f1)
	f1 = Frnd({n: "Lul", a: 67})
	f2 = Frnd({g: 'jigo'})
	f2.s({n: "Rigo", a: 7})
	f2.s('n', 'hah')
}
ITEMS = function () {
	z();
	Ap = {M: {}, V: {}, C: {}}
	$Ro = Router = $$R({
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
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}

