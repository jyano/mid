BB1 = DEFAULT = function () {
	_V({
		t: 'li',
		r: function () {
			this.$el.A('n: ' + this.g('n'))
		},
		i: function () {
			this.$el.fS(149).C('r').col('b').A()
			this.r()
		}
	})({
		m: $M({defaults: {n: 'j', a: 20, o: 'p'}})
	})
}
BB2 = PEP = PEOPOP = function () {
	Vw = _V({
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
	})
	vw = Vw({
		cl: peep
	}) // alpha! <- vw= $.ulV({ i:function(){  },  r:function(){ } })({cl: peep})
	$.A(vw.ren().el)
	_.in(function () {
		peep.pop();
		vw.ren()
	})
}
BB3 = DIVADD = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		ren: function () {
			q.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	_.t(3, function () {
		Vw()
	})// alpha! <-  q.V({r: function () { }, i: function () {  }})()
}
BB4 = PERFECT = MDGET = function () {
	$.h3('p: ' +  M_({name: 'jay'}).g('name'))
}
BB5 = VIEW = function () {
	$V({
		el: q = $.dA('g', 400, 400, 200, 200),
		r: function () {
			var vw = this
			vw.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.r()
			})
		},
		i: function () {
			this.r()
		}
	})
	
	Vw = _V({
		r: function () {
			this.A($.ul(['hello']).fZ(30))
		},
		i: function () {
			this.r()
		}
	})
	
	$.bt('orange', function () {
		Vw({el: d2 = $.d('O', 500, 500)})
	})
}
BB6 = CHG = ONCHANGE = function () {
	$('body').fS(30).A(ip = $.ip())
	md = M_({rx: 'antibiotic'})
	_V({
		ren: function () {
			return this.h(this.g('rx'))
		},
		initialize: function () {
			var vw = this;
			this.ren()
			this.model.on('change', function () {
				vw.ren()
			})
		}
	})({
		el: $.dA('o', 300, 400).XY(200, 200),
		model: md
	})
	$.bt('submit input val', function () {
		md.set('rx', ip.v())
	})
}
BB7 = CLONADD = function () {//$.x().h1('backcl');
	$.i('chicks').A()
	Cl = $$C({})
	cl = Cl().oA(function (s) {
		$l("new!!!!!! " + s.g('n'))
	}).A([{n: 'g1'}, {n: 'g2'}])
}
BB8 = MDVW = function () {
	md = $M({d: {n: 'j', a: 20, o: 'p'}})
	md._V({
		t: 'li',
		_: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})
	_.in(2, function () {
		$.C('R');
		$l('- - --- - - - - ');
		md.l();
		$l(JSON.stringify(md.j()))
	})
}
BB9 = BACKVALL = function () {
	Md = _M({
		defaults: {lame: true},
		validate: function (at) {
			$l('in validate')
			_at = at
			if (!at) {
				return false
			}
			if (at.n == 'rigo') {
				return "name can't be rigo!"
			}
		},
		i: function () {
			var t = this
			t.on('error', function (m, e) {
				alert(3);
				$l(e)
			})
			t.on('change:n', function (m, e) {
				alert(3);
				$l(e)
			})
		}
	})
	md = Md({n: "migo", a: 7})
	_.in(3, function () {
		$.C('r')
		md.oIv(function (m, er) {
			$Ms('...');
			$Ms('er: ' + er);
			$Ms('...')
		})
		md.s({n: 'rigo'}, {validate: true})
	})
}
BB10 = CLLEN = function () {
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
BB11 = BBRECS = BBSAMP = function () {//$.x('b', 'bbsampp', '+')
	d = $.d()
	Rec = _M()
	RecV = _V({
		k: 'rec', e: {'click': 'move'},
		move: function () {
			this.q.css('left',
					this.q.position().left + 10)
		},
		rr: function () {
			return this.sDims().sPos().sCol()
		},
		sDims: function () {
			this.q.WH(this.model.g('w'),
					this.model.g('h'))
			return this
		},
		sPos: function () {
			this.q.ab().LR(
					this.model.g('pos').x,
					this.model.g('pos').y)
			return this
		},
		sCol: function () {
			this.q.C(this.model.g('C'))
			return this
		}
	})
	_.e([
		Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
		Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
		Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
	], function (md) {
		RecV({model: md}).rr().$el.a2(d)
	})
}
BB12 = CHANGECOL = function () {
	d = $.dA(400, 400, 300, 200)
	Md = _M({
		promptColor: function () {
			this.s({
				co: prompt('color:')
			})
		}
	})
	sb = Md()
	sb.on('change:co', function (mod, col, ops) {
		$l('new color!: ' + col);
		d.C(col)
	})
	sb.s({co: 'g'})
	_.in(2, function () {
		sb.promptColor()
	})
}
BB13 = NNN = PER0 = function () {

	
	pV = _V({
		t: 'li', k: 'per',
		r: function () {this.$el.A('n').A()},
		i: function () {this.r()}
	})({
	
		m: $M({d: {n: 'j', a: 20, o: 'p'}}) 
	})
	
	_.ev(.5, function () {
		pV.r()
	})
}
BB14 = TKZ = function () {
 
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
BB15 = EVENTS = EVS = function () {
	q = $.d('r', 200).A(
			$.h1('hello'),
			bt = $.bt('-------')
	)
	
	$V({
		el: q,
		ren: function () {
			$.C($r())
		},
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'ren',
			'mouseover': function () {
				q.C($r())
			}
		}
	})
}


function imgGal() {
	_vw = function (o) {
		o = o || {}
		if (F(o.i)) {
			o.initialize = o.i
		}
		if (o.q) {
			o.el = q
		}
		return o
	}
	Bb.Model.prototype.j = function () {
		return this.toJSON()
	}
	Bb.Collection.prototype.j = function () {
		return this.toJSON()
	}
	Bb.M = Bb.Model;
	Bb.M.x = Bb.M.extend
	Bb.C = Bb.Collection;
	Bb.C.x = Bb.C.extend
	Bb.V = Bb.View;
	Bb.V.x = Bb.V.extend
	Bb.M.prototype.idAttribute = '_id'
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
	GAL = IMAGEGALLERY = function () {
		z();
		function addEdit() {
		}
		
		function imgLs() {
		}
		
		function imgGal() {
			ImgGal = {
				init: function (o) {
					//get list of images rendered at top
					this.imgs = o.imgs;
					ImgGal.ImgLs.init()
					//to get the addEdit Img on screen .. so that whenever you // load the  (add fresh?) it goes to the add image view
					ImgGal.ImgLs.show(o.imgs)
					ImgGal.AddEditImg.init()
					//init this img view which handles displaying images when we click on them
					ImgGal.AddEditImg.addNewImg()
					ImgGal.ImgVwr.init()
				}
			}
			function showImg() {
				ImgGal.ImgVwr = {
					init: function () {
						this.$main = $('#main')
					},
					show: function (imgM) {
						this.$main.A(
								new Img_({
									model: imgM
								}).r().$el
						)
					}
				}
				Img_ = Bb.v(_vw({
					i: function () {
						this.$main = $('#main')
						this.showImgTp = function (img) {
							var i = $.i('img')
							return $.d().A(i)
						}
					},
					r: function () {
						var els = this.$main.A(
								this.showImgTp(this.model))
						this.$el.A(els)
						return this
					}
				}))
			}
		}
		
		$Ms('Image Gallery')
		$.a('video', 'https://www.youtube.com/watch?v=VERQEr-bVTs')
	}
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
	DIRECATMIN19 = function () {
		z();
		$CSS(CssOb);
		app = {m: {}, v: {}, r: {}, c: {}}
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
	}
	DIREC = function () {
		z();
		$CSS(CssOb);
		app = {m: {}, v: {}, r: {}, c: {}}
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
	function pre() {
		_vw = function (o) {
			o = o || {}
			if (F(o.i)) {
				o.initialize = o.i
			}
			if (o.q) {
				o.el = q
			}
			return o
		}
		$MS = function (ms, cHeader, cBody) {
			z()
			var m = $Ms(ms)
			if (S(cHeader)) {
				m.C(cHeader)
			}
			if (S(cBody)) {
				$.C(cBody)
			}
			return $
		}
		$.ipI = function (id, arr) {
			var q = $.ip().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
		$.ulI = function (id, arr) {
			var q = $.ul().id(id)
			if (A(arr)) {
				_.e(arr, function (qq) {
					q.A(qq)
				})
			}
			else if (arr) {
				q.A(arr)
			}
			return q
		}
	}
	
	pre()
	function task() {
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
		}
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
		server = {
			d: 2,
			n: 2,
			docs: {
				1: {text: 'this is a doc', id: 1}
			},
			notes: {
				1: {1: {text: 'note'}, 2: {text: 'another note'}}
			},
			get: {
				'/docs': function (q, p) {
					var res = []
					for (var doc in docs) {
						if (docs.hasOwnProperty(doc)) {
							res.push(docs[doc])
						}
					}
					p.json(res)
				},
				'/docs/:did/notes': function (q, p) {
					var res = [], n = notes[q.params.id]
					for (var note in n) {
						if (n.hasOwnProperty(note)) {
							res.push(n[notes])
						}
					}
				}
			},
			post: {
				'/docs': function (q, p) {
					var doc = q.body
					doc.id = d++
					docs.doc.id = doc
					p.json(doc)
				},
				'/docs/:did/notes': function (q, p) {
					var note = q.body, id = q.params.id
					note.id = n++
					if (!notes[id]) {
						notes[id] = {}
					}
					notes[id][notes.id] = note
					p.json(note)
				}
			},
			put: {
				'docs/:id': function (q, p) {
					docs[q.params.id] = q.body
					p.json(q.body)
				},
				'docs/:did/notes:nid': function (q, p) {
					notes[q.params.id][q.params.nid] = q.body
					p.json(q.body)
				}
			}
		}
		Note = Bb.M.x({})
		Notes = Bb.C.x({
			m: Note,
			i: function (mds, op) {
				this.doc = op.doc
			},
			u: function () {
				return this.doc.url() + '/notes'
			}
		})
		Doc = Bb.M.x({
			i: function (op) {
				this.notes = new Notes([], {doc: this})
			},
			addNote: function (tx) {
				this.notes.create({
					text: tx
				})
			}
		})
		Docs = Bb.C.x({
			m: Doc, u: '/documents',
			i: function () {
				this.on('reset', this.getNotes, this)
			},
			getNotes: function () {
				this.each(function (doc) {
					doc.notes = new Notes([], {doc: doc})
					doc.notes.fetch()
				})
			}
		})
		ds = new Docs()
		ds.fetch()
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
function _pre(){
	BB0 = EXTEV = function () {
		o = _.x({}, Bb.E)
		o.on('yo', function () {
			$.sp(G(arguments)).fS(50)
		})
		o.trigger('yo', 'a', 'b', 'c')
	}}
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
md.V = function (Vw, ob) {
	ob = ob || {}
	ob.m = this
	return Vw(ob)
}
md._V = function (ob) {
	return this.V(_V(ob))
}