BB14 = BCA = TKZ = function () {
	function tkz() {
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
		TKZ = function () {
			$$$('TKZ');
			App = {Models: {}, Views: {}, Collections: {}}
			App.Models.Task = Backbone.Model.extend({})
			App.Views.Task = Backbone.View.extend({
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
	tasksCollection = tasks = new App.Collections.Tasks(
			[
				{title: 'game', prior: 3},
				{title: 'store', prior: 5},
				{title: 'haha', prior: 3}
			]
	)
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
BB2 = BBC = PEOPOP = function () {
	vw = _V({
		t: 'ul',
		ren: function () {
			var vw = this, q = vw.$el.E();
			_.e(vw.collection, function (p) {
				var li = $.li([p.n + '(' + p.a + ')'])
				q.A(li)
			})
			return this
		},
		i: function () {
			this.$el.C('y')
		}
	})({cl: peep}) // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.ren().el)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BB7 = CLA = CLONADD = function () {
	CLONADD = function () {
		$.x().h1('backcl');
		$.i('chicks').A()
		cl = $$C({})().oA(function (s) {
			$l("new!!!!!! " + s.g('n'))
		}).A([{n: 'g1'}, {n: 'g2'}])
	}
	CLLEN = function () {
		z()
		Td = $$M({df: {tt: '', completed: false}});
		cl = $$C({
			md: $$M({d: {tt: '', completed: false}})
		})([Td({tt: 'Read', id: 2})]);
		$l('len 1?: ' + cl.length)
		TdsCl = $$C({md: Td})
		tds = TdsCl([
			a = Td({tt: 'Jam'}),
			b = Td({tt: 'Chin'})
		])
		$l('len 2?: ' + tds.length)
		tds.A(c = Td({tt: 'Disn'}))
		$l('len 3?: ' + tds.length)
		tds.rm([a, b]);
		$l('len 1?: ' + tds.length)
		tds.rm(c);
		$l('len 0?: ' + tds.length)
	}
	function coll() {
		CLONADD = function () {
			$.x().h1('backcl');
			$.i('chicks').A()
			cl = $$C({})().oA(function (s) {
				$l("new!!!!!! " + s.g('n'))
			}).A([{n: 'g1'}, {n: 'g2'}])
		}
		CLLEN = function () {
			z()
			Td = $$M({df: {tt: '', completed: false}});
			cl = $$C({
				md: $$M({d: {tt: '', completed: false}})
			})([Td({tt: 'Read', id: 2})]);
			$l('len 1?: ' + cl.length)
			TdsCl = $$C({md: Td})
			tds = TdsCl([
				a = Td({tt: 'Jam'}),
				b = Td({tt: 'Chin'})
			])
			$l('len 2?: ' + tds.length)
			tds.A(c = Td({tt: 'Disn'}))
			$l('len 3?: ' + tds.length)
			tds.rm([a, b]);
			$l('len 1?: ' + tds.length)
			tds.rm(c);
			$l('len 0?: ' + tds.length)
		}
	}
	
	$.i('chicks').A()
	Cl = $$C({})
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
BB10 = CRM = CLLEN = function () {
	Td = _M({df: {tt: '', completed: false}});
	Md = _M({
		d: {tt: '', completed: false}
	})
	Cl = $$C({md: Md})
	cl = Cl([Td({tt: 'Read', id: 2})]);
	$Ms('len 1?: ' + cl.length)
	TdsCl = $$C({md: Td})
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
FLCL = function () {//$.x('r', 'filtering a cl:')
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