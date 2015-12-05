BB15 = BBC = PEPOP = function () {
	vw = _V({
		t: 'ul',
		ren: function () {
			var vw = this, q = vw.$el.E();
			_.e(vw.collection, function (p) {
				q.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		},
		i: function () {
			this.$el.C('y')
		}
	})({collection: peep}) // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.ren().el)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BB14 =TKZ = function () {
	BCA = function () {
		TKZ = function () {
			$$$('TKZ');
			App = {Models: {}, Views: {}, Collections: {}}
			App.Models.Task = Backbone.Model.extend({})
			App.Views.Task = Backbone.View.extend({
				tagName: 'li',
				events: {'click': 'showAlert'},
				showAlert: function () {
					alert('you clicked me')
				},
				render: function () {
					this.$el.html(this.model.get('title'))
					return this
				}
			})
			App.Collections.Tasks = Backbone.Collection.extend({model: App.Models.Task})
			App.Views.Tasks = Backbone.View.extend({
				initialize: function () {
					var view = this
					this.collection.on('all', function () {
						view.render()
					})
				},
				tagName: 'ol',
				render: function () {
					this.$el.E()
					this.collection.each(this.addOne, this)
					return this
				},
				addOne: function (task) {
					var taskView = new App.Views.Task({model: task})
					this.$el.append(taskView.render().el)
				}
			})
			tasksCollection = tasks = new App.Collections.Tasks([{title: 'game', prior: 3},
				{title: 'store', prior: 5}, {title: 'haha', prior: 3}])
			tasksView = new App.Views.Tasks({collection: tasksCollection})
			tasksView.render()
			$.A(tasksView.el)
			$.bt('add', function () {
				tasksCollection.add([{title: 'yooo', prior: 4}])
			}).button()
		}
		App = {Models: {}, Views: {}, Collections: {}}
		App.Models.Task = Bb.M.x({})
		App.Views.Task = Bb.V.x({
			tagName: 'li',
			events: { //'click':' showAlert',
				'click .edit': 'editTask'
			},
			showAlert: function () {
				alert('you clicked me')
			},
			editTask: function () {//alert('you are edititing the task')
				newTaskTitle = prompt('what would you like to change the text to?', this.model.get('title'))
				this.model.set('title', newTaskTitle)
			},
			render: function () {
				this.$el.html(
						this.model.get('title')
				)
				return this
			}
		})
		App.Collections.Tasks = Bb.C.x({model: App.Models.Task})
		App.Views.Tasks = Bb.V.x({
			initialize: function () {
				var view = this
				this.collection.on('all', function () {
					view.render()
				})
			},
			tagName: 'ol',
			render: function () {
				this.$el.E()
				this.collection.each(this.addOne, this)
				return this
			},
			addOne: function (task) {
				var taskView = new App.Views.Task({model: task})
				this.$el.append(taskView.render().el)
			}
		})
		tasksCollection = tasks = new App.Collections.Tasks([
			{title: 'game', prior: 3},
			{title: 'store', prior: 5},
			{title: 'haha', prior: 3}
		])
		tasksView = new App.Views.Tasks({
			collection: tasksCollection
		})
		tasksView.render()
		$.A(tasksView.el)
		$.bt('add', function () {
			tasksCollection.add([
				{title: 'yooo', prior: 4}
			])
		})
	}

  
	
	tasksC = _C({model:  _M()})([
		{title: 'game', prior: 3}, {title: 'store', prior: 5}, {title: 'haha', prior: 3}])
	
	
	$.A(_V({initialize: function () {
			var view = this;
			view.collection.on('all', function () {
				view.ren()})},
		
		tagName: 'ol', ren: function () {
			this.$el.E()
			this.collection.each(this.addOne, this)
			return this},
		addOne: function (task) {
			this.$el.A(_V({
				tagName: 'li',
				events: {'click .edit': 'editTask'},
				showAlert: function () {
					alert('click')
				},
				editTask: function () {//alert('you are edititing the task')
					newTaskTitle = prompt('what would you like to change the text to?',
							this.model.get('title'))
					this.model.set('title', newTaskTitle)
				},
				ren: function () {
					this.$el.html(this.model.get('title'))
					return this
				}
			})({model: task}).ren().el)
		}
	})({collection: tasksC}).ren().el)
	$.bt('add', function () {
		tasksC.add([{title: 'yooo', prior: 4}])})
}
BB16 = CLA = CLONADD = function () {
 
	 
 
	$.i('chicks').A()
	Cl = _C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
	function bcl() {/* BOOKVW = function () {
	 $.dI('td)
	 TdVw = $V({
	 t: 'li',
	
	 e: {
	 'click .toggle': 'toggleCompleted',
	 'dblclick label': 'edit',
	 'keypress .edit': 'updateOnEnter',
	 'click .destroy': 'clear',
	 'blur .edit': 'close'
	 },
	
	
	 Item: function (o) {
	 return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
	 },
	
	
	 i: function (ops) {
	 this.ops = ops || {};
	 this.model.on('change', _.b(this.r, this))
	 }, //  access passed ops inyour view
	
	
	 // Re-render tt of td item.
	 r: function () {
	 var v = this
	 v.q.h(this.Item(this.md.J())) // this.md.atts ?
	 v.input = v.$('.edit')
	 return v
	 },
	
	 edit: function () {
	 },    // executed when td label is double clicked
	 close: function () {
	 },  // executed when td loses focus
	 updateOnEnter: function (e) {
	 } // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
	 })
	 ListVw = $V({
	 r: function () {
	 // Assume our md exposes items we will display in our list
	 _.e(this.g('items'), function (i) {
	 // Createnew instance of ItemVw, passing it spec md item
	 // The itemVw's DOM el is appended after it
	 // has been rendered. Here, 'return this' is helpful
	 // as itemVw renders its md. Later, we ask for its output ("el")
	 this.A(TdVw({md: i}).r().q)
	 }, this)
	 }
	 })
	 tdVw = new TdVw()
	 // log reference toDOM el that corresponds to view instance
	 $l(tdVw.el); // logs <li></li>
	 }*/
		BCL = function () {
			$.x().h1('BCL but whats up wit dose funcs?')
			BksC = $Cl({
				m: Bk = $M({
					d: {n: '', g: 'fun'},
					url: 'http://localhost:51377/api/Books'
				}),
				d: {pizzaTopping: 'pepperoni'}
			})
			cl1 = BksC()
			cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
			cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
			cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))
			add = function () {
				$l('add')
				cl2.A([
					bk4 = Bk({ID: 4, n: "Bk 4"}),
					bk5 = Bk({ID: 5, n: "Bk 5"})
				])
			}
			add()
			addAt = function (n) {
				cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
			}
			change = function () {
				bk3 = Bk({ID: 3, n: "Bk 3"})
				cl2.add(bk3)
				bk3_changed = Bk({ID: 3, n: "Changed Model"})
				cl2.add(bk3_changed, {merge: true})
			}
		}
		BCL = function () {
			$.x().h1('BCL')
			Bk = Bb.M.e({
				d: {ID: '', n: ''},
				id: "ID",
				url: 'http://localhost:51377/api/Books'
			})
			BksC = Bb.C.e({m: Bk})
			cl1 = BksC.o()
			bk1 = Bk.o({ID: 1, n: "Bk 1"})
			bk2 = Bk.o({ID: 2, n: "Bk 2"})
			cl2 = BksC.o([bk1, bk2])
			bk3 = Bk.o({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			change = function () {
				bk3 = new Bk({ID: 3, n: "Bk 3"})
				cl2.add(bk3)
				bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
				cl2.add(bk3_changed, {merge: true})
			}
			add = function () {
				bk4 = Bk.o({ID: 4, n: "Bk 4"})
				bk5 = Bk.o({ID: 5, n: "Bk 5"})
				cl2.add([bk4, bk5])
			}
			addAt = function (n) {
				bk0 = new Bk({ID: 0, n: "Bk 0"})
				cl2.add(
						bk0, {at: n || 0}
				)
			}
		}
//BOOKVW = function () {
//	$.dI('td)
//	TdVw = $V({
//		t: 'li',
//		e: {
//			'click .toggle': 'toggleCompleted',
//			'dblclick label': 'edit',
//			'keypress .edit': 'updateOnEnter',
//			'click .destroy': 'clear',
//			'blur .edit': 'close'
//		},
//		Item: function (o) {
//			return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
//		},
//		i: function (ops) {
//			this.ops = ops || {};
//			this.model.on('change', _.b(this.r, this))
//		}, //  access passed ops inyour view
//		// Re-render tt of td item.
//		r: function () {
//			var v = this
//			v.q.h(this.Item(this.md.J())) // this.md.atts ?
//			v.input = v.$('.edit')
//			return v
//		},
//		edit: function () {
//		},    // executed when td label is double clicked
//		close: function () {
//		},  // executed when td loses focus
//		updateOnEnter: function (e) {
//		} // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
//	})
//	ListVw = $V({
//		r: function () {
//			// Assume our md exposes items we will display in our list
//			_.e(this.g('items'), function (i) {
//				// Createnew instance of ItemVw, passing it spec md item
//				// The itemVw's DOM el is appended after it
//				// has been rendered. Here, 'return this' is helpful
//				// as itemVw renders its md. Later, we ask for its output ("el")
//				this.A(TdVw({md: i}).r().q)
//			}, this)
//		}
//	})
//	tdVw = new TdVw()
//	// log reference toDOM el that corresponds to view instance
//	$l(tdVw.el); // logs <li></li>
//}
		BCL = function () {
			$.x().h1('BCL but whats up wit dose funcs?')
			BksC = $Cl({
				m: Bk = $M({
					d: {n: '', g: 'fun'},
					url: 'http://localhost:51377/api/Books'
				}),
				d: {pizzaTopping: 'pepperoni'}
			})
			cl1 = BksC()
			cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
			cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
			cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))
			add = function () {
				$l('add')
				cl2.A([
					bk4 = Bk({ID: 4, n: "Bk 4"}),
					bk5 = Bk({ID: 5, n: "Bk 5"})
				])
			}
			add()
			addAt = function (n) {
				cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
			}
			change = function () {
				bk3 = Bk({ID: 3, n: "Bk 3"})
				cl2.add(bk3)
				bk3_changed = Bk({ID: 3, n: "Changed Model"})
				cl2.add(bk3_changed, {merge: true})
			}
		}
		BCL = function () {
			$.x().h1('BCL')
			Bk = Bb.M.e({
				d: {ID: '', n: ''},
				id: "ID",
				url: 'http://localhost:51377/api/Books'
			})
			BksC = Bb.C.e({m: Bk})
			cl1 = BksC.o()
			bk1 = Bk.o({ID: 1, n: "Bk 1"})
			bk2 = Bk.o({ID: 2, n: "Bk 2"})
			cl2 = BksC.o([bk1, bk2])
			bk3 = Bk.o({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			change = function () {
				bk3 = new Bk({ID: 3, n: "Bk 3"})
				cl2.add(bk3)
				bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
				cl2.add(bk3_changed, {merge: true})
			}
			add = function () {
				bk4 = Bk.o({ID: 4, n: "Bk 4"})
				bk5 = Bk.o({ID: 5, n: "Bk 5"})
				cl2.add([bk4, bk5])
			}
			addAt = function (n) {
				bk0 = new Bk({ID: 0, n: "Bk 0"})
				cl2.add(
						bk0, {at: n || 0}
				)
			}
		}
	}
}
BB17 = TDS= CRM = CLLEN = function () {
	Td = _M({df: {tt: '', completed: false}});
	Md = _M({
		d: {tt: '', completed: false}
	})
	Cl = _C({md: Md})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = _C({md: Td})
	tds = TdsCl([
		a = Td({tt: 'Jam'}),
		b = Td({tt: 'Chin'})
	])
	$Ms('len 2?: ' + tds.length)
	tds.A(c = Td({tt: 'Disn'}))
	$Ms('len 3?: ' + tds.length)
	tds.rm([a, b]);
	$Ms('len 1?: ' + tds.length)
	tds.rm(c);
	$Ms('len 0?: ' + tds.length)
}
//
BB18 = FLCL = function () {
	 
//$.x('r', 'filtering a cl:')
	 
	 FlV = Bb.V.x({
	 ev: {'click #run': 'runFilter'},
	 runFilter: function(e){e.pD();
	 this.fl = {
	 // ... get the filter info from the DOM
	 }; this.rr()},
	 rr: function(){// get the filtered list from the collection
	 // iterate over the filtered list and render the results in to the html array
	 // populate the DOM with the resulting HTML
	 HT=[]
	 _.e(this.cl.where(this.fl),
	 function(item){HT.push(
	 _.tp($('my-item-template').H())(item.tJ())
	 )})
	
	 this.$el.html(HT); return this }
	 }) 
	 ///
	Cl = _C({
		i: function () {
		}
	})
	cl = Cl({})
	cl.add([
		{a: 'f', b: 's'},
		{a: 't', b: 's'},
		{a: 'f', b: 's'},
		{a: 's', b: 't'}
	])
	res = cl.where({a: 'f', b: 's'})
	//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
}
BB19 = RESET = function () {
	 
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
	//   Resetting/Refreshing Cls
	// Rather than adding or removing mds individually,
	// you might want to update entire cl at once.
	// Cl.set() takes array of mds and performs necessary
	// add, rm, and change operations required to update cl.
	// Above logs:
	// Completed go to Jamaica.
	// Removed go to Disneyland.
	// Added go to Disney World.
///////////////////////////////////////////////////////
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
	//myCl.reset()
	// -using Cl.reset() doesn’t fire  add | rm evs. reset event   fired instead
	// The reason you might want to use this is to perform super-optimized
	//rendering in extreme cases where individual evs are too expensive.
	td = $M()
	tds = $Cl([td]).on('reset', function (tds, ops) {  //    prev mds list avail in ops.prevMds
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
	// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
}
BKS =   function () {
	$.x().h1('BCL')
	Bk = _M({
		d: {ID: '', n: ''}, id: "ID",
		url: 'http://localhost:51377/api/Books'
	})
	BksC = _C({m: Bk})
	cl1 = BksC()
	bk1 = Bk({ID: 1, n: "Bk 1"})
	bk2 = Bk({ID: 2, n: "Bk 2"})
	cl2 = BksC([bk1, bk2])
	bk3 = Bk({ID: 3, n: "Bk 3"})
	cl2.A(bk3)
	change = function () {
		bk3 = new Bk({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
		cl2.add(bk3_changed, {merge: true})
	}
	add = function () {
		bk4 = Bk.o({ID: 4, n: "Bk 4"})
		bk5 = Bk.o({ID: 5, n: "Bk 5"})
		cl2.add([bk4, bk5])
	}
	addAt = function (n) {
		bk0 = new Bk({ID: 0, n: "Bk 0"})
		cl2.add(bk0, {at: n || 0})
	}
}
CHB = CHAINB = function () {
	//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
	// sol: bb   supports  _.chain,
	// which returns ob  w  us-arr-ops  attached as mets which return that ob
	//chain starts chain, returns wrapper around cl's mds (wrapped arr)
	//  The chain ends with call to val(),
	// which  terminates chain and returns resulting array
	Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
			.fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	cl = _C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
			.chain().fl(function (i) {
				return i.g('a') > 10
			})
			.m(function (i) {
				return i.g('n')
			})
			.val() //['I','R']
	// Some of bb- spec mets do return this, which means they can be chained as well:
	cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
}
USM =USMETS = function () {
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
	Td = _M({d: {tt: '', completed: false}})
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
 CNTR=COUNTER = function () {
	z()
	Td = _M({df: {tt: '', completed: false}})
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
}
FRND = function () {
	Friend = _M({
		d: {lame: true}
	})
	f1 = Friend({name: "Thomas", age: 67})
	f2 = Friend({game: 'jigo'})
	f2.s({name: "Rigo", age: 7})
	f2.s('mame', 'hah')
	c = _C()
	f1 = c.a(f1)
	f2 = c.a(f2)
	c.rm(f1)
}
 DON= DONUTS = function () {
	m = _M({n: 'j'})
	Donut = _M({
		d: {
			n: null,
			sparkles: false,
			cream_filled: false
		},
		u: function () {
			var t = this
			return t.id ? '/donuts/' + t.id : '/donuts'
		}
	})
	bostonCream = Donut({
		n: 'Boston Cream',
		cream_filled: true
	})
	bostonCream.s({sprinkles: true})
	bostonCream.S() //save
	Donuts = bbC({
		m: Donut,
		url: "/donuts"
	})
	donuts = Donuts()
	donuts.fetch()// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	DonutShop = _M({
		defaults: {n: "Untitled"},
		initialize: function () {
			var t = this
			t.donuts = Donuts()
			t.donuts.url = 'donut_shops/' + t.id + "/donuts"
		}
	})
	donutShop.oA(function (donut) {
		alert("added " + donut.get("name"))
	})
	lemonFilled = donutShop.donuts.a({
		n: "Lemon Filled"
	})
	a = Eve()
	a.o("fun:had", function () {
		alert("wee!")
	});
	a.e("fun:had")//it'll alert "wee!"
}
PERS= function () {
	$.x()
	Per = _M({})
	p1 = Per({n: 'j'})
	p2 = Per({n: 'y'})
	Pers = _C({model: Per})
	pers = Pers([p1, p2])
}
 
oldWay = function () {
	PLV = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
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
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.j(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
		PerV = Bb.V.e({
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
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
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
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BACKCOL = function () {
		z()
		baddies = $C().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
		baddies = bbC().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BB20 = BCL = function () {
		$.x().h1('BCL')
		Bk = Bb.M.e({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = Bb.C.e({m: Bk})
		cl1 = BksC.o()
		bk1 = Bk.o({ID: 1, n: "Bk 1"})
		bk2 = Bk.o({ID: 2, n: "Bk 2"})
		cl2 = BksC.o([bk1, bk2])
		bk3 = Bk.o({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		change = function () {
			bk3 = new Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
		add = function () {
			bk4 = Bk.o({ID: 4, n: "Bk 4"})
			bk5 = Bk.o({ID: 5, n: "Bk 5"})
			cl2.add([bk4, bk5])
		}
		addAt = function (n) {
			bk0 = new Bk({ID: 0, n: "Bk 0"})
			cl2.add(bk0, {at: n || 0})
		}
	}
	BB21 = PLV0 = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
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
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.j(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BBCL = function () {
		$.x().h1('backcl')
		bads = Bb.C.e().o().oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
		Frnd = Bb.M.e({d: {lame: 1}})
		f1 = Frnd.o({n: "Lul", a: 67})
		f2 = Frnd.o({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = Bb.M.e({
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
		p = Per.o({n: "rigo", a: 7})
		cl = Bb.C.e().o()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = Bb.C.e({m: Per})
		pers = Pers.o()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	BBCOL = function () {
		$.x()
		Per = Bb.M.x({})
		p1 = Per.o({n: 'j'})
		p2 = Per.o({n: 'y'})
		Pers = Bb.C.e({model: Per})
		pers = Pers.o([p1, p2])
	}
}
function collApps() {
	TASKER00 = function () {
		$.x('g', 'tasker');
		Ap = {M: {}, C: {}, V: {}}
		Ap.M.Tsk = $M()
		t1 = Ap.M.Tsk({t: 'store', pr: 4})
		t2 = Ap.M.Tsk({t: 'park', pr: 3})
		Ap.V.Tsk = $V({
			t: 'li',
			r: function () {
				this.A(this.g('tt'));
				return this
			}
		})
		tskV = Ap.V.Tsk({m: t1})
		Ap.C.Tsks = $Cl({m: Ap.M.Tsk})
		tsks = Ap.C.Tsks([{tt: 'hi'}, {tt: 'bye'}])
		Ap.V.Tsks = $V({
			t: 'li',
			r: function () {
				var v = this
				v.eCl(function (t) {
					v.q.A(Ap.V.Tsk({m: t}).r().q)
				})
				this.q.A()
			}
		})
		tsksV = Ap.V.Tsks({cl: tsks})
		$.bt('r Ap.V.Tsks tsksV', function () {
			tsksV.r()
		})
		function alt() {
			TASKER0 = function () {
				$.x()
				Ap = {M: {}, C: {}, V: {}}
				Ap.M.Task = Bb.M.e({})
				t1 = Ap.M.Task.o({t: 'go  store', pr: 4})
				t2 = Ap.M.Task.o({t: 'go park', pr: 3})
				Ap.V.Tsk = Bb.V.e({
					t: 'li',
					rr: function () {
						this.A(this.g('t'))
						return this
					}
				})
				taskView = Ap.V.Tsk.o({m: t1})
				Ap.C.Tasks = Bb.C.e({m: Ap.M.Tsk})
				tasks = Ap.C.Tasks.o([{t: 'hi'}, {t: 'bye'}])
				Ap.V.Tasks = Bb.V.e({
					t: 'li',
					rr: function () {
						var that = this
						this.cl.each(
								function (t) {
									var v = Ap.V.Task.o({m: t})
									that.$el.A(v.rr().el)
								}, this)
						this.el.A()
					}
				})
				tasksV = Ap.V.Tasks.o({cl: tasks})
			}
			function oldSchol() {
				BACKDEMO = function () {
					z()
					Temp('task', [
						lb('Task: '),
						tx().id('task_desc'),
						bt('add task').id('btn')])
					di('container').a()
					bbR({
						R: {
							'': 'first',
							'first': 'first',
							'second': 'second'
						},
						first: function () {
							$l('first')
						},
						second: function () {
							new Task()
							$l('second')
						}
					})()
					bbH()
					Task = bbV({
						el: $('#container'),
						i: function () {
							this.r()
						},
						r: function () {
							this.$el.html(temp('task'))
						},
						e: {'click button': 'add'},
						add: function () {
							alert(qiv('task_desc') + ' task added')
						}
					})
				}
			}
		}
	}
	BBSORT00 = function () {
		$.x('a', 'sort dont work')
		chps = $Cl({m: Chp = $M()})()
		chps.comparator = function (a) {
			return a.tt
		}
		chps.add(Chp({p: 9, tt: "End"}));
		chps.add(Chp({p: 5, tt: "Mid"}));
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
		chps.sort()
		$l(chps.pluck('tt'))
	}
	BBSORT0 = function () {
		Chp = $$M()
		chps = $$C({m: Chp})()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp({p: 9, tt: "End"}))
		chps.add(Chp({p: 5, tt: "Mid"}))
		chps.add(Chp({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	COUNTER0 = function () {
		z()
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
	}
	INDEXSORT0 = function () {
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
		peop = $cl()
		peop.comparator = function (a, b) {
			return a.g('n') < b.g('n') ? -1 : 1
		}
		peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
		peop.indexOf(rob)//0
		peop.indexOf(tom)//2
	}
	PLV0 = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
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
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
			cl: PepC, el: ul = $.ul(),
			i: function () {
			},
			r: function () {
				ul = this.q.E()
				this.j(function (md) {
					PerV.o({m: md}, ul)
				})
			}
		})
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BBCOL0 = function () {
		$.x()
		Per = $$M({})
		p1 = Per({n: 'j'})
		p2 = Per({n: 'y'})
		Pers = $$C({model: Per})
		pers = Pers([p1, p2])
	}
	FRND = function () {
		$.x().h1('backcl')
		Frnd = $M({d: {lame: 1}})
		f1 = Frnd({n: "Lul", a: 67})
		f2 = Frnd({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
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
		cl = $Cl()()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = $Cl({m: Per})
		pers = Pers()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	PLV = function () {
		$.x('o', 'hi')
		Per = Bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
		p = Per.o({})
		p1 = Per.o({n: 'b'})
		p2 = {n: 'c'}
		PerV = Bb.V.e({
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
		PepC = Bb.C.e({m: Per})
		pV = PerV.o({m: p})
		pC = PepC.o()
		pC.add([p, p1, p2])
		PepV = Bb.V.e({
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
		pCV = PepV.o({cl: pC})
		$.in(.2, function () {
			pCV.r()
		}, '*')
		$.in(.4, function () {
			pCV.r()
		}, '*')
	}
	BCL = function () {
		$.x().h1('BCL')
		Bk = Bb.M.e({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = Bb.C.e({m: Bk})
		cl1 = BksC.o()
		bk1 = Bk.o({ID: 1, n: "Bk 1"})
		bk2 = Bk.o({ID: 2, n: "Bk 2"})
		cl2 = BksC.o([bk1, bk2])
		bk3 = Bk.o({ID: 3, n: "Bk 3"})
		cl2.add(bk3)
		change = function () {
			bk3 = new Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
		add = function () {
			bk4 = Bk.o({ID: 4, n: "Bk 4"})
			bk5 = Bk.o({ID: 5, n: "Bk 5"})
			cl2.add([bk4, bk5])
		}
		addAt = function (n) {
			bk0 = new Bk({ID: 0, n: "Bk 0"})
			cl2.add(bk0, {at: n || 0})
		}
	}
	BBCOL = function () {
		$.x()
		Per = Bb.M.e({})
		p1 = Per.o({n: 'j'})
		p2 = Per.o({n: 'y'})
		Pers = Bb.C.e({model: Per})
		pers = Pers.o([p1, p2])
	}
	BBSORT = function () {
		Chp = Bb.M.e()
		chps = Bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	DIRTPAGE = function () {
		$.x()
		var newMsBox, newTopic, newMs, searchBox
		MsM = Bb.M.e({})
		MsC = Bb.C.e({m: 'MsM'})
		MsView = Bb.V.e({})
		MssView = Bb.V.e({})
		$.h1().A(
				$.a('Dirtpage', '/wap/dirtpage/')
		).A()
		$.dI('content')
		if (wappyPam) {
			newMsBox = $.d().WH('auto').A(
					$.h1('new ms'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						var newMs = $('#newMs').v()
						$.P('messages', {
							tpc: wappyPam, ms: newMs
						}, function () {
							loadResults()
						})
					}))
			$('#cont').A($.h1('the ' + wappyPam + ' page'),
					newMsBox, $.dI('res'))
			function loadRes() {
				$.G('topics/' + wappyPam, function (msgs) {
					$('#results').ht($.h5('len: ' + msgs.length))
					_.e(msgs, function (ms) {
						$('#res').A($.h6(ms.ms))
					})
				})
			}
			
			loadRes()
		}
		else {
			newMsBox = $.d().WH('auto').A(
					$.h1('new message'),
					$.ip().K('form-control').id('newTopic'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						newTopic = $('#newTopic').v()
						newMs = $('#newMs').v()
						$.P('msgs', {topic: newTopic, message: newMs}, function () {
						})
					})
			)
			searchBox = $.d().WH('auto').A(
					$.h1('search'),
					$.ip().K('form-control').id('searchInput'),
					$.bt('ok', function () {
						window.location = '/wap/dirtpage/' + $('#searchInput').v()
						searchInput = $('#searchInput').v()
						$.G('topics/' + searchInput, function (msgs) {
							$('#res').ht($.h5('len: ' + msgs.length))
							_.e(msgs, function (ms) {
								$('#res').A($.h6(ms.ms))
							})
						})
					})
			)
			$.dI('res')
			$('#cont').A(newMsBox, searchBox)
			$.eG('msgs', function (ms) {
				$('#res').A($.h2().A(
								$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
						$.h3('ms: ' + ms.ms)
				)
			})
		}
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
	BACKSET = function () {
		$.x()
		Sb = Sidebar = Bb.m.e({
			ask: function () {
				this.s({c: prompt("color?")})
			}
		})
		sb = Sb.o()
		sb.on('change:c', function (md, c) {
			$('body').C(c)
		})
		sb.set({c: 'b'})
		sb.ask()
		//right from ko site
		d = $.dA(400)
		Sid = Bb.M({
			promptColor: function () {
				this.s({
					co: pr('color:')
				})
			}
		})
		sb = Sid()
		sb.on('change:co', function (md, c) {
			d.C($l(c))
		})
		sb.C('w')
		sb.ask()
		Per = Bb.M.e({
			i: function () {
				alert("Welcome")
			}
		})
		p = Per({})
		p.s({n: "mac", a: 67})
		$.dA(300).id('sb')
		Sidebar = Bb.M.e({
			fn: function () {
				return this.s({
					c: prompt("c?")
				})
			}
		})
		Sidebar().oC('c', function (m, c) {
			$('#sb').C(c)
		}).s({c: 'w'}).fn()
	}
	BBCL = function () {
		$.x().h1('backcl')
		bads = Bb.C.e().o().oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
		Frnd = Bb.M.e({d: {lame: 1}})
		f1 = Frnd.o({n: "Lul", a: 67})
		f2 = Frnd.o({g: 'jigo'})
		f2.s({n: "Rigo", a: 7})
		f2.s('n', 'hah')
		Per = Bb.M.e({
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
		p = Per.o({n: "rigo", a: 7})
		cl = Bb.C.e().o()
		f1 = cl.A(f1)
		f2 = cl.A(f2)
		cl.rm(f1)
		Pers = Bb.C.e({m: Per})
		pers = Pers.o()
		p1 = pers.add(p)
		pers.add(p2)
		pers.rm(p1)
	}
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BACKCOL = function () {
		z()
		baddies = $C().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BACKCOL = function () {
		z()
		baddies = bbC().oA(
				function (s) {
					alert("new baddie: " + s.g("n"))
				})
		baddies.a([{n: "bad1"}, {n: "bad2"}])
	}
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	BACKCOL2 = function () {
		Friend = bbM({
			d: {lame: true}
		})
		f1 = Friend({name: "Thomas", age: 67})
		f2 = Friend({game: 'jigo'})
		f2.s({name: "Rigo", age: 7})
		f2.s('mame', 'hah')
		c = bbC()
		f1 = c.a(f1)
		f2 = c.a(f2)
		c.rm(f1)
	}
	function usesC$() {
		AVAIL = function () {
			$.x('x');
			Ap = {M: {}, C: {}, V: {}, T: {}}
			Ap.T.Avail = function (model) {
				return $.d('g', 400, 100).mar(20).A(
						$.h4(model.g('c')).id('avail').C('y', 'r'),
						$.br(), $.sp('delete').id('deleteAvail'),
						$.sp(' '), $.sp('edit').id('editAvail'),
						$.sp(' '), $.cb().id('selAvail'))
			}
			Ap.M.Avail = M$({urlRoot: '/avail'})
			Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
			Ap.V.Avail = Bb.V.e({
				r: function () {
					this.$el.A(Ap.T.Avail(this.model))
					return this
				},
				ev: {
					'click #deleteAvail': 'deleteAvail',
					'click #editAvail': 'editAvail',
					'blur #avail': 'changeAvail'
				},
				changeAvail: function () {
					this.$el.fi('#avail').at('contenteditable', 'false')
					newAvail = this.$el.fi('#avail').text()
					this.model.s('c', newAvail)
					this.model.save()
				},
				deleteAvail: function () {
					this.model.destroy()
					this.$el.rm()
				},
				editAvail: function () {
					this.$el.fi('#avail').at('contenteditable', 'true')
				}
			})
			Ap.V.Avails = Bb.V.e({
				el: '#availsDiv',
				I: function () {
					this.render()
				},
				R: function () {
					var t = this
					t.collection.fetch({
						success: function () {
							t.$el.html('')
							t.$el.A("<h1>Avails List</h1>")
							t.collection.each(function (m) {
								t.$el.A(Ap.V.Avail({model: m}).render().el)
								return t
							}, t)
						}
					})
				}
			})
			//  avs=Ap.C.Avails()
			//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
			$.ip('new avail').id('newAvail').A()
			$.bt('ok', function () {
				Ap.M.Avail({
					c: $('#newAvail').v()
				}).save()
				v.render()
			}).A()
			$.dI('availsDiv')
			$.ip('new avail').id('newAvail').A()
			$.bt('ok', function () {
				var m = Ap.M.Avail({
					c: qiv('newAvail')
				})
				m.save()
				m.on('destroy', function () {
					alert('i am the model and i was destroyed')
				})
				v.render()
			})
			$.dI('availsDiv')
			Ap.T.Avail = function (model) {
				return $.d('g', 400, 100).mar(20).A(
						$.h4(model.g('c')).id('avail').col('y', 'r'),
						$.br(),
						$.sp('delete').id('deleteAvail'),
						$.sp(' '), $.sp('edit').id('editAvail'),
						$.sp(' '), $.cb().id('selAvail')
				)
			}
			Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
			Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
			Ap.V.Avail = Bb.V.e({
				r: function () {
					this.q(
							Ap.T.Avail(this.model)
					)
					return this
				},
				ev: {
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
					this.$el.find('#avail').cE(1)
				}
			})
			Ap.V.Avails = Bb.V.e({
				el: '#availsDiv',
				i: function () {
					this.render()
				},
				r: function () {
					var t = this
					t.collection.fetch({
						success: function () {
							t.q.H('')
							t.q($.h1('Avails List'))
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
			avs = Ap.C.Avails.o()
			avs.on('destroy', function (j) {
				alert('i am col and i was destroyed')
				v.trigger('modelDeleted')
			})
			v = Ap.V.Avails.o({cl: avs})
			v.on('modelDeleted', function () {
				alert('modDel')
			})
			Bb.M.e({
				d: {prop: 3},
				test: function () {
					$(this.get('prop'))
				},
				test2: function (a) {
					$l('prop: ' + this.get('prop'))
				},
				happy: function (a) {
					this.test2(a)
				}
			})
		}
		SWEET = function () {
			$.x('x', 'bb view people')
			Vw = $V({
				el: $.ul(),
				i: function () {
					this.r().C$('init..')
				},
				r: function () {
					var ul = this.q
					this.ECl(function (p) {
						ul.li(p.n, '(', p.a, ')')
					})
					return this
				}
			})
			peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
			vw = Vw({cl: peep})
			$.in(function () {
				peep.pop();
				vw.r()
			})
			BBVP1 = function () {
				$.x('x', 'bb view people')
				Vw = $.ulV({
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
				})
				vw = Vw({
					cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
				})
				/*
				
				 $.A(vw.r().q)
				 $.in(function(){peep.pop(); vw.r()},'*')
				 */
			}
		}
	}
	
	function unders() {
		USMETS0 = function () {
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
		CHAINABLE0 = function () {
			//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
			// sol: bb   supports  _.chain, which returns ob  w  us-arr-ops  attached as mets which return that ob
			//chain starts chain, returns wrapper around cl's mds (wrapped arr)
			//  The chain ends with call to val(), which  terminates chain and returns resulting array
			Cl([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}]).chain()
					.fl(function (i) {
						return i.g('a') > 10
					})
					.m(function (i) {
						return i.g('n')
					})
					.val() //['I','R']
			// Some of bb- spec mets do return this, which means they can be chained as well:
			$cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
		}
	}
	
	AVAIL = function () {
		z()
		f = $M({
			defaults: {prop: 3},
			test: function () {
				$l(this.get('prop'))
			},
			test2: function (a) {
				var prop = this.get('prop')
				$l('prop: ' + prop)
				return prop
			},
			happy: function (a) {
				this.test2(a)
			}
		})
		Ap.M.Avail = $$M({urlRoot: '/avail'})
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.V.Avail = $$V({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.C.Avails = $$C({model: Ap.M.Avail, url: '/avail'})
		avs = Ap.C.Avails()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		Ap.V.Avails = $$V({
			el: '#availsDiv',
			i: function () {
				this.r()
			},
			r: function () {
				var t = this;
				t.collection.fetch({
					success: function () {
						t.q.H('');// t.$el.html('')
						t.q(h1('Avails List')); //t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)// t.e(function(m){t.q(Ap.V.Avail({m:m}).r().el ); return t}, t)
					}
				})
			}
		})
		v = Ap.V.Avails({
			collection: avs
		})//.render()
		//v=Ap.V.Avails({cl:avs})
		v.on('modelDeleted',
				function () {
					alert('modDel')
				})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		}).A()
		$.dI('availsDiv')
	}
	SWEET = function () {
		$.x('x', 'bb view people')
		Bb.View.prototype.C$ = function (s) {
			this.$el.C$(s);
			return this
		}
		Vw = $V({
			el: ul = $.ul(),
			i: function () {
				this.r().C$('init..')
			},
			r: function () {
				var ul = this.q
				this.ECl(function (p) {
					ul.A(
							$.li([p.n, '(', p.a, ')'])
					)
				})
				return this
			}
		})
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = Vw({cl: peep})
		_.in(function () {
			peep.pop();
			vw.r()
		})
		BBVP1 = function () {
			$.x('x', 'bb view people')
			Vw = $.ulV({
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
			})
			vw = Vw({
				cl: peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
			})
			/*
			
			 $.A(vw.r().q)
			 _.in(function(){peep.pop(); vw.r()},'*')
			 */
		}
	}
	CHAINB = function () {
		//prob: us's arr manip  ops avail as Cl-mets, but cannot be directly chained (return arrays, !orig cl)
		// sol: bb   supports  _.chain,
		// which returns ob  w  us-arr-ops  attached as mets which return that ob
		//chain starts chain, returns wrapper around cl's mds (wrapped arr)
		//  The chain ends with call to val(),
		// which  terminates chain and returns resulting array
		cl = $$C()([{n: 'T', a: 5}, {n: 'I', a: 26}, {n: 'R', a: 55}])
				.chain().fl(function (i) {
					return i.g('a') > 10
				})
				.m(function (i) {
					return i.g('n')
				})
				.val() //['I','R']
		// Some of bb- spec mets do return this, which means they can be chained as well:
		cl().A({n: 'J', a: 23}).A({n: 'H', a: 33}).A({n: 'S', a: 41}).pluck('n') //['J','H','S']
	}
	DIRTPAGE = function () {
		$.x()
		var newMsBox, newTopic, newMs, searchBox
		MsM = $$M({})
		MsC = $$C({m: 'MsM'})
		MsView = $$V({})
		MssView = $$V({})
		$.h1().A(
				$.a('Dirtpage', '/wap/dirtpage/')
		).A()
		$.dI('content')
		if (wappyPam) {
			newMsBox = $.d().WH('auto').A(
					$.h1('new ms'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						var newMs = $('#newMs').v()
						$.P('messages', {
							tpc: wappyPam, ms: newMs
						}, function () {
							loadResults()
						})
					}))
			$('#cont').A($.h1('the ' + wappyPam + ' page'),
					newMsBox, $.dI('res'))
			$.g('topics/' + wappyPam, function (msgs) {
				$('#results').ht($.h5('len: ' + msgs.length))
				_.e(msgs, function (ms) {
					$('#res').A($.h6(ms.ms))
				})
			})
		}
		else {
			newMsBox = $.d().WH('auto').A(
					$.h1('new message'),
					$.ip().K('form-control').id('newTopic'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						newTopic = $('#newTopic').v()
						newMs = $('#newMs').v()
						$.P('msgs', {topic: newTopic, message: newMs}, function () {
						})
					})
			)
			searchBox = $.d().WH('auto').A(
					$.h1('search'),
					$.ip().K('form-control').id('searchInput'),
					$.bt('ok', function () {
						window.location = '/wap/dirtpage/' + $('#searchInput').v()
						searchInput = $('#searchInput').v()
						$.G('topics/' + searchInput, function (msgs) {
							$('#res').ht($.h5('len: ' + msgs.length))
							_.e(msgs, function (ms) {
								$('#res').A($.h6(ms.ms))
							})
						})
					})
			)
			$.dI('res')
			$('#cont').A(newMsBox, searchBox)
			$.eG('msgs', function (ms) {
				$('#res').A($.h2().A(
								$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
						$.h3('ms: ' + ms.ms)
				)
			})
		}
	}
	FLCL = function () {
		$.x('r', 'filtering a cl:')
		/*
		 FlV = Bb.V.x({
		 ev: {'click #run': 'runFilter'},
		 runFilter: function(e){e.pD();
		 this.fl = {
		 // ... get the filter info from the DOM
		 }; this.rr()},
		 rr: function(){// get the filtered list from the collection
		 // iterate over the filtered list and render the results in to the html array
		 // populate the DOM with the resulting HTML
		 HT=[]
		 _.e(this.cl.where(this.fl),
		 function(item){HT.push(
		 _.tp($('my-item-template').H())(item.tJ())
		 )})
		
		 this.$el.html(HT); return this }
		 })*/
		Cl = $$C({
			i: function () {
			}
		})
		cl = Cl({})
		cl.add([
			{a: 'f', b: 's'},
			{a: 't', b: 's'},
			{a: 'f', b: 's'},
			{a: 's', b: 't'}
		])
		res = cl.where({a: 'f', b: 's'})
		//http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
	}
	TASKER = function () {
		$.x()
		Ap.M.Task = $$M({})
		t1 = Ap.M.Task({t: 'go  store', pr: 4})
		t2 = Ap.M.Task({t: 'go park', pr: 3})
		Ap.V.Tsk = $$V({
			t: 'li',
			rr: function () {
				this.A(this.g('t'))
				return this
			}
		})
		taskView = Ap.V.Tsk({m: t1})
		Ap.C.Tasks = $$C({m: Ap.M.Tsk})
		tasks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}])
		Ap.V.Tasks = $$V({
			t: 'li',
			rr: function () {
				var that = this
				this.cl.each(
						function (t) {
							var v = Ap.V.Task({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.el.A()
			}
		})
		tasksV = Ap.V.Tasks({cl: tasks})
	}
	COLLEC = function () {
		$.x().h1('BCL')
		Bk = $$M({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = $$C({m: Bk})
		cl1 = BksC()
		bk1 = Bko({ID: 1, n: "Bk 1"})
		bk2 = Bko({ID: 2, n: "Bk 2"})
		cl2 = BksC([bk1, bk2])
		bk3 = Bk({ID: 3, n: "Bk 3"})
		cl2.A(bk3)
		change = function () {
			bk3 = new Bk({ID: 3, n: "Bk 3"})
			cl2.add(bk3)
			bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
			cl2.add(bk3_changed, {merge: true})
		}
		add = function () {
			bk4 = Bk.o({ID: 4, n: "Bk 4"})
			bk5 = Bk.o({ID: 5, n: "Bk 5"})
			cl2.add([bk4, bk5])
		}
		addAt = function (n) {
			bk0 = new Bk({ID: 0, n: "Bk 0"})
			cl2.add(bk0, {at: n || 0})
		}
	}
	PEOPLE = function () {
		$.x();
		mds();
		vws();
		cls();
		clVw()
		function mds() {
			Per = $$M({
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
			Person = $$M({
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
			Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
			Person = $$M({
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
			Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
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
			PerV = $$V({
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
			PerV = $$V({
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
			PerV = $$V({
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
			personView = $$V({
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
			peopleCol = $$C({m: Person})
			PerC = $$C({m: Per})
			pC = PerC([
				{n: 'rigo', a: 29},
				{n: 'j', a: 2},
				{n: 's', j: 'gx'}
			])
			Pers = $$C({model: Per})
			pers = Pers([p1, p2])
			Pers = $$C({model: Per})
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
			peopleCol = $$C({m: Person})
			pC.A([p, p1, p2])
			pC = PepC()
			pC.A([p, p1, p2])
			PepC = $$C({m: Per})
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
		}
		
		function clVw() {
			peopleView = $$V({
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
			PerColV = $$V({
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
			PepV = $$V({
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
			peopleView = $$V({
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
			PepV = $$V({
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
			peopleView = $$V({
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
	}
	AP = TASK = function () {
		$.x('g', 'tasker');
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')
		])
		Ap.M.Tsk = $$M({})
		tsk1 = Ap.M.Tsk({
			title: 'go to the store',
			priority: 4
		})
		tsk2 = Ap.M.Tsk({
			title: 'go to the park',
			priority: 3
		})
		TskV = Ap.V.Tsk = $$V({
			t: 'li',
			el: $('#container'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.html(this.g('t'));
				this.$el.html(temp('task'))
			},
			events: {'click button': 'add'},
			add: function () {
				alert($('#task_desc') + ' task added')
			}
		})
		tskVw = Ap.V.Tsk({m: task1})
		Ap.C.Tsks = $$C({m: Ap.M.Tsk})
		tsks = Ap.C.Tasks([{t: 'hi'}, {t: 'bye'}, {title: 'hi'}, {title: 'bye'}])
		Ap.V.Tsks = $V({
			t: 'li',
			r: function () {
				var that = this
				//v.eCl(function (t) {that.q.A(Ap.V.Tsk({m: t}).r().q)})
				this.cl.each(
						function (t) {
							var v = Ap.V.Task.o({m: t})
							that.$el.A(v.rr().el)
						}, this)
				this.$el.A()
			}
		})
		tsksVw = Ap.V.Tsks({cl: tsks})
		$.bt('r Ap.V.Tsks tsksV', function () {
			tsksV.r()
		})
		$.d().id('container')
		r = $R({
			R: {
				'': 'first',
				'first': 'first',
				'second': 'second'
			},
			first: function () {
				$l('first')
			},
			second: function () {
				new Task()
				$l('second')
			}
		})
		Bb.h.start({pushState: true})
	}
}