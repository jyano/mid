AVAIL1 = function () {
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
AVAIL = function () {
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
 
AVAIL = function () {
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
		},
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
		},
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
	vw = Vw({cl: peep})
	_.in(function () {
		peep.pop();
		vw.r()
	})
 
}
BBVP1 = function () {
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
bb.eParse = function (e) {
	e = e || {}
	_.e(e, function (v, k) {
		if (k == '$') {
			e['click'] = v
		}
		if (k == '$$') {
			e['dblclick'] = v
		}
	})
	return e
}
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
Bb.View.prototype.C$ = function (s) {
	this.$el.C$(s);
	return this
}