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