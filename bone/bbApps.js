function works(){
	DIVADD = function () {
		z()
		d = $.dI('d1', 'r', 500, 500)
		_.t(3, function () {
			$$V({
				initialize: function () {
					this.r()
				},
				r: function () {
					d.A(
							$.ul(['hello'])
					)
				}
			})()
		})
		function alt() {
			BBVIEW2 = function () {
				$.dI('d1', 'r', 500, 500)
				LstV = Bb.V.x({
					el: '#d1',
					r: function () {
						this.A(
								$.ul([
									'hello']))
					},
					i: function () {
						this.r()
					}
				})
				v = LstV.o() //not function
			}
			BBVIEW0 = function () {
				$.x('b', 'bbview0')
				$.dI('d1', 'r', 500, 500).V({
					r: function () {
						this.A($.ul(['hello']))
					},
					i: function () {
						this.r()
					}
				})()
			}
		}
	}//= BBVIEW
	ARRPOP = function () {
		z()
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $$V({
			t: 'ul',
			i: function () {
				this.$el.C('r')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, //vw.cl == vw.collection >> true
						function (p) {
							$('#peep')
							el.A($.li().A(p.n + '(' + p.a + ')'))
						})
				return this
			}
		})({
			c: peep
		})
		$.A(
				vw.r().el
		)
		_.in(1, function () {
			peep.pop()
			vw.r()
		})
		function alpha() {
			BBVP0 = function () {
				$.x('x', 'bb view people 0')
				peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
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
	}//= BBVP
	MDGET = function () {
		$.x('r').h1('tut')
		p = $$M()({n: 'j'})
		$.h3('p: ' + p.g('n'))
	}
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
	BBRECS = BBSAMP = function () {
		$.x('b', 'bbsampp', '+')
		d = $.d()
		Rec = $$M()
		RecV = $$V({
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
			RecV({model: md})
					.rr().$el.a2(d)
		})
	}
	BBVIEW = function () {
		$.x('b', 'bbview')
		$.dI('d1',
				'r', 500, 500)
		LstV = bb.V.e({
			el: '#d1',
			r: function () {
				this.A(
						$.ul([
							'hello']))
			},
			i: function () {
				this.r()
			}
		})
		v = LstV.o()
	}
	BBVIEW = function () {
		$.x('b', 'bbview')
		v = $V({
			q: d = $.dI('d1', 'r', 500, 500),
			r: function () {
				this.A($.ul(['hello']))
			},
			i: function () {
				this.r()
			}
		})()
	}
	BBVIEW = function () {
		$.x('b', 'bbview')
		$.dI('d1', 'r', 500, 500).V({
			r: function () {
				this.A($.ul(['hello']))
			},
			i: function () {
				this.r()
			}
		})()
	}
	PER = function () {
		$.x('n')
		Per = bb.M.e({
			d: {n: 'j', a: 20, o: 'p'}
		})
		p = new Per
		PerV = $V({
			t: 'li', _: 'some-per', k: 'per',
			r: function () {
				this.A('n').A()
			},
			//  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
			i: function () {
				$l(this.model);
				this.r()
			}
		})
		pV = PerV({m: p})
	}
	PER = function () {
		$.x('n')
		p = $M({d: {n: 'j', a: 20, o: 'p'}})()
		PerV = $V({
			t: 'li', _: 'some-per', k: 'per',
			r: function () {
				this.A('n').A()
			},
			i: function () {
				$l(this.model);
				this.r()
			}
		})
		pV = p.V(PerV) //PerV({ m: p })
	}
	PER = function () {
		$.x('n')
		m = $M({d: {n: 'j', a: 20, o: 'p'}})()
		m.V($V({
			t: 'li', _: 'some-per', k: 'per',
			r: function () {
				this.A('n').A()
			},
			i: function () {
				this.r()
			}
		}))
		$.in(function () {
			m.l()
		}, '*')
	}
	TP = function () {
		$.x().A(
				a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
				b = _.tp('<b><%-tag%></b>', {tag: '<script>'}), // <%- vs <%= ?
				c = _.tp(
						'<%_.e(peep,function(name){%>' +
						'<li>' + '<%=name%>' + '</li>' +
						'<%})%>'
						, {peep: ['moe', 'curly', 'larry']})
		)
	}
	WOB = function () {
		$.x('x', 'bb view people')
		//without backbone!
		ul = $.ul().id('peep')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = {
			r: function () {
				$('#peep').E()
				_.e(peep, function (p) {
					$('#peep').A('<li>' + p.n + '(' + p.a + ')</li>')
				})
			}
		}
		vw.r()
		$.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
	SIMP = function () {
		$.x('r').h1('tut')
		p = $M()({n: 'j'})
		$.h3('p: ' + p.g('n'))
	}
	BBVP1 = function () {
		$.x('x', 'bb view people')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $V({
			t: 'ul',
			i: function () {
				this.$el.C($r())
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, function (p) {
					$('#peep')
					el.A($.li().A(p.n + '(' + p.a + ')'))
				})
				return this
			}
		})({cl: peep})
		$.A(vw.r().el)
		$.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
	BBVP = function () {
		$.x('x', 'bb view people')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
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
		$.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
	TMP = function () {
		$.x('r');
		$V({
			t: 'li', x: 'some-per', k: 'per',
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			r: function () {
				this.A().A(this.tp(this.model.toJSON()))
			},
			i: function () {
				$l(this.model);
				this.r()
			}
		})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
	}
	BBSAMP1 = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = bb.M.e()
		RecV = bb.V.e({
			t: 'div', k: 'rec',
			events: {'click': 'move'},
			move: function () {
				this.$el.css('left', this.$el.position().left + 10)
			},
			rr: function () {
				return this.sDims().sPos().sCol()
			},
			sDims: function () {
				this.$el.WH(this.model.get('w'), this.model.get('h'))
				return this
			},
			sPos: function () {
				this.$el.ab().LR(
						this.model.get('pos').x, this.model.get('pos').y)
				return this
			},
			sCol: function () {
				this.$el.C(this.model.get('C'))
				return this
			}
		})
		_.e([
			Rec.o({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
			Rec.o({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
			Rec.o({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
		], function (md) {
			var r = RecV.o({model: md})
			r.rr().$el.a2(d)
		})
	}
	BBSAMP = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = $M()
		RecV = $V({
			k: 'rec',
			e: {'click': 'move'},
			move: function () {
				this.q.css('left',
						this.q.position().left + 10)
			},
			r: function () {
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
	BBVT = function () {
		$.x('x', 'bb view and template');
		md = new bb.M({d: [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]})
		$.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		Vw = bb.V.e({
			el: '#ct',
			i: function (op) {
				$l(op.blOp);
				this.tp = $('#list-tp').children()
			},
			rr: function () {
				var da, tp;
				$l('rr: ' + this.model.get('d')[0].h);//$.c('b').ab(300,300)
				da = this.model.get('d')
				tp = this.tp, ul = this.$el.find('ul')
				_.e(da, function (da) {
					ul.A(tp.clone()
							.find('a').hr('href', da.h).T(da.t).end())
				})
			},
			ev: {'click button': 'rr'}
		})
		vw = new Vw({blOp: 'empty!', model: md})
		return vw
	}
	BBVT = function () {
		$.x('x', 'bb view and template');
		$.dI('ct', [
					$.bt('Load'),
					$.ul().id('list')
				]
		).C('y')
		$.dI('list-tp', [$.la()]).C('o')
		v = $V({
			q: '#ct',
			events: {'click button': 'r'},
			r: function () {
				var da, tp, ul
				$l('RENDER')
				/*
				 $l('rr: '+ this.model.get('d')[0].h )
				 //$.c('b').ab(300,300)
				 da=this.model.get('d')
				 tp=this.tp
				 ul= this.$el.find('ul')
				 _.e(da, function(da){ul.A(tp.clone()
				 .find('a').hr('href', da.h)
				 .T(da.t).end())})
				 */
			},
			i: function (op) {
				$l(op.blOp)
				this.tp = $('#list-tp').children()
			}
		})({
			blOp: 'empty!',
			m: m = $M()({
				d: [
					{t: 'a.com', h: 'a.com'},
					{t: 'b.com', h: 'b.com'},
					{t: 'c.com', h: 'c.com'}
				]
			})
		})
	}
	SIMP = function () {
		$.x('r', 'simp')
		$.h1(
				'f: ' + $M()({n: 'j'}).g('n'),
				$.br(), 'l: ' + $m({n: 'y'}).n
		)
	}
	BEAUTY = function () {
		$.x('o', 'beauty')
		$v({
			q: $.d('r', 200).A(
					$.h1('hello'),
					$.bt(__)
			),
			e: {
				'click button': function () {
					$l('$')
				},
				$$: 'r',
				v: function () {
					$l(' m o !')
				}
			},
			r: function () {
				$l(__ + '$$');
				$.c$()
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
	BBSAMP1 = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = $M()
		RecV = $V({
			t: 'div', k: 'rec',
			events: {'click': 'move'},
			move: function () {
				this.$el.css('left', this.$el.position().left + 10)
			},
			rr: function () {
				return this.sDims().sPos().sCol()
			},
			sDims: function () {
				this.$el.WH(this.model.get('w'), this.model.get('h'))
				return this
			},
			sPos: function () {
				this.$el.ab().LR(
						this.model.get('pos').x, this.model.get('pos').y)
				return this
			},
			sCol: function () {
				this.$el.C(this.model.get('C'))
				return this
			}
		})
		_.e([
					Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
					Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
					Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
				],
				function (md) {
					RecV({model: md}).rr().$el.a2(d)
				})
	}
	BBSAMP10 = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = $M()
		RecV = $V({
			k: 'rec',
			e: {'click': 'move'},
			move: function () {
				this.q.css('left',
						this.q.position().left + 10)
			},
			r: function () {
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
		BBSAMP1 = function () {
			$.x('b', 'bbsamp', '+')
			d = $.d()
			Rec = $M()
			RecV = $V({
				t: 'div', k: 'rec',
				events: {'click': 'move'},
				move: function () {
					this.$el.css('left', this.$el.position().left + 10)
				},
				rr: function () {
					return this.sDims().sPos().sCol()
				},
				sDims: function () {
					this.$el.WH(this.model.get('w'), this.model.get('h'))
					return this
				},
				sPos: function () {
					this.$el.ab().LR(
							this.model.get('pos').x, this.model.get('pos').y)
					return this
				},
				sCol: function () {
					this.$el.C(this.model.get('C'))
					return this
				}
			})
			_.e([
						Rec({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
						Rec({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
						Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
					],
					function (md) {
						RecV({model: md}).rr().$el.a2(d)
					})
		}
	}
	BBSAMP = function () {
		$.x('b', 'bbbsamp', '+')
		d = $.d()
		Rec = $M()
		RecV = $V({
			k: 'rec',
			e: {$: 'move'},
			move: function () {
				this.q.X(10, '+')
			},
			r: function () {
				var v = this
				v.q.C(v.g('C')).WH(v.g('w'), v.g('h')).ab(v.g('pos').x, v.g('pos').y)
				return v
			},
			i: function () {
				this.r().a2(d)
			}
		})
		_.e([
			Rec({w: 100, h: 30, pos: {x: 300, y: 200}, C: 'o'}),
			Rec({w: 100, h: 20, pos: {x: 400, y: 150}, C: 'g'}),
			Rec({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
		], function (md) {
			RecV({m: md})
		})
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
//valid:
// md.validate() checking attr vals  prior to setting them.
//
// By default occurs when md is persisted using save() or when set() is called if {vld:true}
//
// Should error be returned: An invalid event will be triggered, setting validationError property on md with val which is returned by this met.
// .save() will not continue and atts of md will not be modified on server.
//
// Note: atts object passed to validate fn reps what atts would be after completing current set() or save().
// This object is distinct from current atts of md  and from  pams passed to operation.
//
// Since it is created by shallow copy, it is not possible to change any Number, String, or Boolean attr of input within fn, but it is possible to change ats in nested objects.
//
//
// validation on init is possible but of limited use, as object being constructed is internally marked invalid but nevertheless passed back to caller
	VALID = function () {
		$.x('x', 'valid')
		Per = new bb.M({n: 'J'})
		Per.validate = function (at) {
			if (!at.n) {
				return '!name'
			}
		}
		Per.s({n: 'S'})
		$l(P.g('n'))  // 'S'
		Per.unset('name', {vld: true}) // false
		Td = bb.M.x({
			df: {completed: false},
			vld: function (at) {
				if (U(at.tt)) {
					return "!tt"
				}
			},
			i: function () {
				this.on("invalid", function (md, z) {
					$l('err: ' + z)
				})
			}
		})
		td = new Td()
		td.s('completed', true, {vld: true}); // logs: !tt
		$l('completed: ' + td.g('completed')); // completed: false
		emptyTd = new Td(null, {vld: true});
		$l(emptyTd.validationError);
	}
	FRND = function () {
		$.x().h1('frnd')
		Per = $M({
			d: {lame: true},
			v: function (at, op) {
				if (at.n == 'rigo') {
					return "n cant be rigo!"
				}
			},
			i: function () {
				var md = this;
				$l('new frnd!')
				md.on('change:n', function (m, e) {
					$l('change:n:' + e)
				})
				md.oIv(function (m, z) {
					$l('invalid trgd: ' + z)
				})
			}
		})
		p1 = Per({g: 'jigo'})
		p1.s('n', 'hah')
		p1.s({n: "rigo", a: 7}, {validate: true}
		)
		$l('n:' + p1.g('n'))
		p2 = Per({n: "qigo", a: 47})
		p3 = Per({n: "rigo", a: 7})
		$.bt('p2 validty', function () {
			$l('isValid: ' + p2.isValid())
		}) //  valid
		$.bt('p3 validty', function () {
			$l('isValid: ' + p3.isValid())
		}) //not valid
		//
		cl = $Cl({m: Per})()
		cl.add([p2, p3])
		cl.remove(p3)
	}
	PEOPLE = function () {
		$.x('b', 'people')
		Per = $M({
			i: function () {
				this.oIv(function (m, z) {
					$l(z)
				})
			},
			d: {n: 'doe', a: 30, j: 'wrk'},
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
		pC = peepC([
			{n: 'rigo', a: 29},
			{n: 'j', a: 2},
			{n: 's', j: 'gx'}
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
	}
// 2 plugins
// http://naturaily.com/blog/post/backbonejs-plugins-localstorage-and-backbonevalidation}
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
function pre(){
	C$ = function (a) {
		var b, c
// $.ext(bb.Collection)
		//if(U(a)){var c=new bb.Collection; return sCl(c)}
		a = O(a) ? a : {}
		if (a.m) {
			a.model = a.m
		}
		c = bb.Collection.extend(a)
		return function (o) {
			o = O(o) ? o : {}
			//if(o.m){o.model= o.m}
			b = new c(o)
			o.o = o.on
			E$(o)
			return b
		}
	}
	$$$ = function (ms) {
		z()
		$Ms(ms)
	}
	$Ms=function(ms){$.h1(ms)}
$$$=function(ms){
    z()
    $Ms(ms)
}
$.fn.V = function(ob){
    ob = ob || {};
    ob.el = this;
    return $V(ob)
}
$.fn.V = function (ob) {
	ob = ob || {};
	ob.el = this;
	return $V(ob)
}
}
function view(){
VIEW = function () {
	$.x('b', 'viw');
	$V({
		el: $.dA('g', 400, 400, 200, 200),
		i: function () {
			this.r()
		},
		r: function () {
			var vw = this
			this.A($.ul().fS(40).A('hello'))
			_.in(function () {
				vw.r()
			})
		}
	})
	_.in(3, function () {
		$$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.A(
						$.ul([
							'hello'
						]))
			}
		})({
			el: $.d('O', 500, 500)
		})
	})
}
}
function apps(){
DEFAULT = function () {
	$.x('n')
	md = $$M({
		defaults: {
			n: 'j', a: 20, o: 'p'
		}
	})()
	$$V({
		t: 'li', i: function () {
			this.$el.A()
					.C('r').col('b').fS(149)
			this.r()
		},
		r: function () {
			this.$el.A(
					'n: ' + this.g('n')
			)
		}
	})({m: md})
}
EVENTS = EVS = function () {
	$.x('o', 'beauty')
	dv = $.d('r', 200).A(
			$.h1('hello'),
			bt = $.bt('-------')
	)
	$V({
		el: dv,
		events: {
			'click button': function () {
				bt.C($r())
			},
			'dblclick': 'r',
			'mouseover': function () {
				dv.C($r())
			}
		},
		r: function () {
			$.C($r())
		}
	})
}
CHANGE = function () {
	$.x('x', 'bbv');
	$('body').fS(30)
	div = $.dA('o', 300, 400).XY(200, 200)
	m = $$M()({rx: 'antibiotic'})
	$$V({
		i: function () {
			var vw = this;
			vw.r()
			vw.oC(function () {
				vw.r()
			})
		},
		r: function () {
			return this.h(this.g('rx'))
		}
	})({
		el: div,
		m: m
	})
	ip = $.ip()
	$.bt('change', function () {
		m.s('rx', ip.v())
	})
}
PEOPOP = function () {
	$.x('x', 'bb view people')
	peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
	vw = $$V({
		t: 'ul',
		i: function () {
			this.$el.C('y')
		},
		r: function () {
			var el = this.$el.E()
			_.e(this.collection, function (p) {//$('#peep')
				el.A($.li([p.n + '(' + p.a + ')']))
			})
			return this
		}
	})({cl: peep})
	$.A(
			vw.r().el
	)
	_.in(function () {
		peep.pop();
		vw.r()
	})
	function alpha() {
		BBVP0 = function () {
			$.x('x', 'bb view people')
			peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
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
BBRECS = BBSAMP = function () {
	$.x('b', 'bbsampp', '+')
	d = $.d()
	Rec = $$M()
	RecV = $$V({
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
		RecV({model: md})
				.rr().$el.a2(d)
	})
}
NNNNN = PER0 = function () {
	$.x('n')
	Bb.Per = function () {
		return $$M({d: {n: 'j', a: 20, o: 'p'}})
	}
	Per = Bb.Per()
	PerV = $$V({
		t: 'li', //  _:'some-per',
		k: 'per',
		r: function () {
			this.$el.A('n')
			this.$el.A()
			//  this.A(this.g('n')).A() //
			// this.A(this.model.get('n').A()
		},
		i: function () {
			// $l('i: ' + _.jS(this.model.j()) );
			this.r()
		}
	})
	p = Per()
	pV = PerV({
		m: p
	})
	_.ev(.5, function () {
		pV.r()
	})
}
 
 
FETCH = EVTSAVE = function () {
	m = bb.M.x({
		n: 'j'
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
}
BBEV = function () {
	$.x().i('chicks')
	ev = bb.Ev()
	ev.b("fun:had", // bind? on?
			function () {
				alert("wee!")
			})
	//trigger
	ev.tr("fun:had")  //it'll alert "wee!"
}
PLV = function () {
	$.x('o', 'hi')
	Per = bb.M.e({d: {n: 'a', a: 20, o: 'p'}})
	p = Per.o({})
	p1 = Per.o({n: 'b'})
	p2 = {n: 'c'}
	PerV = bb.V.e({
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
	PepC = bb.C.e({m: Per})
	pV = PerV.o({m: p})
	pC = PepC.o()
	pC.add([p, p1, p2])
	PepV = bb.V.e({
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
 
BBSORT = function () {
	Chp = bb.M.e()
	chps = bb.C.e({m: Chp}).o()
	chps.comparator = function (a) {
		return a.tt
	} //$.x(a)
	chps.add(Chp.o({p: 9, tt: "End"}))
	chps.add(Chp.o({p: 5, tt: "Mid"}))
	chps.add(Chp.o({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
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
	Ap.V.Avail = bb.V.e({
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
	Ap.V.Avails = bb.V.e({
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
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
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
	Ap.V.Avails = bb.V.e({
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
	bb.M.e({
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
}}
function dirt(){
DIRTPAGE = function () {
	$.x()
	var newMsBox, newTopic, newMs, searchBox
	MsM = bb.M.e({})
	MsC = bb.C.e({m: 'MsM'})
	MsView = bb.V.e({})
	MssView = bb.V.e({})
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
	}
function obj(){
OBJECT = function () {
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
OBJECT = function () {
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
	}
function bcl(){/* BOOKVW = function () {
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
function sort(){
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
 }
function roter() {
	NORTR = function () {
		$.x(null, 'no router');
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
	ITEMS = function () {
		$.x().h3('jason')
		Ap = {M: {}, V: {}, C: {}}
		Ap.M.Item = $M({})
		$R({
					r: {
						'': 'welcome',
						itemlist: 'showItemList',
						'j': 'j'
					},
					welcome: function () {
						$.bd().E().A($.h1('welcome'))
					},
					j: function () {
					},
					showItemList: function () {
						$l('showItemList')
						$.bd().A($.h1('show item list'))
					}
				},
				'+')
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		//bb.history.start({pushState: true})
		$.bt('add', function () {
			r.n('/itemlist')
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
}
function book() {
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
}
function notes() {
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
}
function gall() {
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
	Bb = Backbone
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
}
function direc() {
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
		app = {
			m: {}, v: {}, r: {}, c: {}
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
}
function bfRoll() {
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
}
function vwAlpha() {
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
function valid() {
	BACKVALL = function () {
		z();
		$l('backvall')
		Md = $$M({
			defaults: {lame: true},
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
			},
			validate: function (at) {
				$l('in validate')
				_at = at
				if (!at) {
					return false
				}
				if (at.n == 'rigo') {
					return "name can't be rigo!"
				}
			}
		})
		md = Md({n: "migo", a: 7})
		_.in(3, function () {
			$.C('r')
			md.oIv(function (m, er) {
				$Ms('er: ' + er)
				$Ms('...')
				$Ms('fssdfsadfd')
				$Ms('fssdfsadfd')
				$Ms('fssdfsadfd')
			})
			md.s({n: 'rigo'}, {validate: true})
		})
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
}
function mod() {
	BACKMOD = function () {
		Person = bbM({
			i: function () {
				alert("Welcome")
			}
		})
		person = Person({})
		person.s({name: "Thomas", age: 67})
		z()
		dva(300).id('sb')
		Sidebar = bbM({
			fn: function () {
				return this.s({c: prompt("c?")})
			}
		})
		Sidebar()
				.oC('c',
				function (m, c) {
					qi('sb').c(c)
				})
				.s({c: 'w'}).fn()
	}
	MODCHANGE = function () {
		$.x()
		Bk = $M({
			d: {ID: "", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				this.on('change', function () {
					alert('change')
					if (bk.hasChanged('ID')) {
						alert('ID changed')
					}
					if (bk.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
	}
	MODCHANGE = function () {
		$.x()
		Bk = $M({
			d: {ID: "", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				this.on('change', function () {
					alert('change')
					if (bk.hasChanged('ID')) {
						alert('ID changed')
					}
					if (bk.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
	}
	MODCHANGE = function () {
		$.x()
		Bk = Bb.M.e({
			d: {ID: "", n: ""},
			initiate: function () {
				$l('init..')
				var that = this
				this.on('change', function () {
					alert('change')
					if (that.hasChanged('ID')) {
						alert('ID changed')
					}
					if (that.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		// ChildBook = Bk.extend({})
		bk = Bk.o({ID: 1, n: "a"})
	}
	MODCHANGE = function () {
		$.x('x', 'modchange')
		Bk = $M({
			d: {ID: "ooooo", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				bk.$(function () {
					$l('change')
					g = G(arguments)
					o = g[1]
					m = g[0]
					if (bk.hC('ID')) {
						$l('ID changed')
					}
					// if(bk.hC('n')){$l('n changed') }
					bk.hC('n', function () {
						$l('n changed')
					})
				})
			},
			show: function () {
				$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})
		bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
		_.in(function () {
			bk.s('n', 'z', {a: 1, b: 2, c: 3})
			_.in(function () {
				bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
			}, '*')
		}, '*')
	}
	MODCHANGE = function () {
		$.x()
		Bk = $M({
			d: {ID: "", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				this.on('change', function () {
					alert('change')
					if (bk.hasChanged('ID')) {
						alert('ID changed')
					}
					if (bk.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
	}
	MODCHANGE = function () {
		$.x()
		Bk = Bb.M.e({
			d: {ID: "", n: ""},
			initiate: function () {
				$l('init..')
				var that = this
				this.on('change', function () {
					alert('change')
					if (that.hasChanged('ID')) {
						alert('ID changed')
					}
					if (that.hasChanged('n')) {
						alert('n changed')
					}
				})
			},
			showAlert: function () {
				alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		// ChildBook = Bk.extend({})
		bk = Bk.o({ID: 1, n: "a"})
	}
	MODCHANGE = function () {
		$.x('x', 'modchange')
		Bk = $M({
			d: {ID: "ooooo", n: ""},
			i: function () {
				var bk = this;
				$l('init..')
				bk.$(function () {
					$l('change')
					g = G(arguments)
					o = g[1]
					m = g[0]
					if (bk.hC('ID')) {
						$l('ID changed')
					}
					// if(bk.hC('n')){$l('n changed') }
					bk.hC('n', function () {
						$l('n changed')
					})
				})
			},
			show: function () {
				$l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
			}
		})
		bk = Bk({ID: 1, n: "a"})
		bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
		_.in(function () {
			bk.s('n', 'z', {a: 1, b: 2, c: 3})
			_.in(function () {
				bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
			}, '*')
		}, '*')
	}
	MOD = function () {
		m = bbM({n: 'j'})
		Donut = bbM({
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
		DonutShop = bbM({
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
	BACKMOD = function () {
		Person = bbM({
			i: function () {
				alert("Welcome")
			}
		})
		person = Person({})
		person.s({name: "Thomas", age: 67})
		z()
		dva(300).id('sb')
		Sidebar = bbM({
			fn: function () {
				return this.s({c: prompt("c?")})
			}
		})
		Sidebar()
				.oC('c',
				function (m, c) {
					qi('sb').c(c)
				})
				.s({c: 'w'}).fn()
	}
}
function color() {
	CHANGECOL = function () {
		z()
		d = $.dA(400, 400, 300, 200)
		sb = $$M({
			promptColor: function () {
				this.s({
					co: prompt('color:')
				})
			}
		})()
		sb.on('change:co', function (mod, col) {
			$l('new color!: ' + col);
			d.C(col)
		})
		sb.s({co: 'g'})
		_.in(2, function () {
			sb.promptColor()
		})
		function old() {
			BACKSETSBM = function () {
				$.x('g', 'backset')
				d = $.d('z', 500, 300).id('sb')
				Sb = $M({
					ask: function () {
						this.s({c: prompt('col?')})
					}
				})
				sb = Sb()
				// sb.on('change', function(){g=G(arguments)})
				sb.on('change:c', function (modThatChangedC, cChangedTo, ops) {
					$l('changed to ' + cChangedTo)
					o = ops
					modThatChangedC.s('dat', 'something')
					$('#sb').C(cChangedTo)
					$.h1(modThatChangedC.g('dat'))
				})
				sb.s({c: 'b'})
				//   sb.ask()
				//   Per=$M({i: function(){  $l(  this.g('n')  + ' says hello!'   ) }})
				//   p=Per( {n:"mac", a:67})
			}
			BACKSETSB = function () {
				$.x()
				Sb = Sidebar = $$M({
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
				Per = Bb.M.x({
					i: function () {
						alert("Welcome")
					}
				})
				p = Per({})
				p.s({n: "mac", a: 67})
				$.dA(300).id('sb')
				Sidebar = Bb.M.x({
					fn: function () {
						return this.s({
							c: prompt("c?")
						})
					}
				})
				Sidebar()
						.oC('c', function (m, c) {
							$('#sb').C(c)
						}).s({c: 'w'}).fn()
			}
		}
	}
	BCL = function () {
		$.x().h1('BCL')
		Bk = bb.M.e({
			d: {ID: '', n: ''}, id: "ID",
			url: 'http://localhost:51377/api/Books'
		})
		BksC = bb.C.e({m: Bk})
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
		Per = bb.M.e({})
		p1 = Per.o({n: 'j'})
		p2 = Per.o({n: 'y'})
		Pers = bb.C.e({model: Per})
		pers = Pers.o([p1, p2])
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
}
function bads() {
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
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
	EXTEV = function () {
		$.x('o', 'ops')
		o = _.x({}, Bb.E)
		o.on('yo', function () {
			var g = G(arguments)
			$.sp(g).fS(50)
		})
		o.trigger('yo', 'a', 'b', 'c')
	}
	MDVW = function () {
		$.x('n')
		md.V = function (Vw, ob) {
			ob = ob || {}
			ob.m = this
			return Vw(ob)
		}
		m = $M({d: {n: 'j', a: 20, o: 'p'}})
		m.V($$V({
			t: 'li', _: 'some-per', k: 'per',
			r: function () {
				this.$el.A('n').A()
			},
			i: function () {
				this.r()
			}
		}))
		_.in(2, function () {
			$.C('R')
			$l('- - --- - - - - ')
			m.l()
		})
		function old() {
			PERVY = function () {
				$.x('n')
				$$V({
					t: 'li', _: 'some-per', k: 'per',
					r: function () {
						this.A('n').A()
					},
					i: function () {
						$l(this.model);
						this.r()
					}
				})({
					m: $M({d: {n: 'j', a: 20, o: 'p'}})
				}) //-> p.V(PerV)
			}
		}
	}
	DIVADD = function () {
		z()
		d = $.dI('d1', 'r', 500, 500)
		_.t(3, function () {
			$$V({
				initialize: function () {
					this.r()
				},
				r: function () {
					d.A(
							$.ul(['hello'])
					)
				}
			})()
		})
		function alt() {
			BBVIEW2 = function () {
				$.dI('d1', 'r', 500, 500)
				LstV = Bb.V.x({
					el: '#d1',
					r: function () {
						this.A(
								$.ul([
									'hello']))
					},
					i: function () {
						this.r()
					}
				})
				v = LstV.o() //not function
			}
			BBVIEW0 = function () {
				$.x('b', 'bbview0')
				$.dI('d1', 'r', 500, 500).V({
					r: function () {
						this.A($.ul(['hello']))
					},
					i: function () {
						this.r()
					}
				})()
			}
		}
	}//= BBVIEW
	ARRPOP = function () {
		z()
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = $$V({
			t: 'ul',
			i: function () {
				this.$el.C('r')
			},
			r: function () {
				var el = this.$el.E()
				_.e(this.collection, //vw.cl == vw.collection >> true
						function (p) {
							$('#peep')
							el.A($.li().A(p.n + '(' + p.a + ')'))
						})
				return this
			}
		})({
			c: peep
		})
		$.A(
				vw.r().el
		)
		_.in(1, function () {
			peep.pop()
			vw.r()
		})
		function alpha() {
			BBVP0 = function () {
				$.x('x', 'bb view people 0')
				peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
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
		
		function old() {
			SIMP1 = function () {
				p = $M()({n: 'j'})
				$.h3('p: ' + p.g('n'))
			}
			SIMP = function () {
				$.h1(
						'f: ' + $M()({n: 'j'}).g('n'),
						$.br(), 'l: ' + $m({n: 'y'}).n
				)
			}
		}
	}//= BBVP
	MDGET = function () {
		$.x('r').h1('tut')
		p = $$M()({n: 'j'})
		$.h3('p: ' + p.g('n'))
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
	BADS = function () {
		z()
		$.h1('backcl').id('chicks').A()
		bads = $C()
		bads.oA(function (s) {
			$Ms("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BBBEV = function () {
		$.x().i('chicks')
		ev = Bb.Ev()
		ev.b("fun:had", function () {
			alert("wee!")
		})// bind? on?
		ev.tr("fun:had")//trigger  //it'll alert "wee!"
	}
	WOB = WITHOUTBB = function () {
		$.x('x', 'bb view people')
		ul = $.ul().id('peep')
		peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
		vw = {
			r: function () {
				$('#peep').E()
				_.e(peep, function (p) {
					$('#peep').A('<li>' + p.n + '(' + p.a + ')</li>')
				})
			}
		}
		vw.r()
		_.in(function () {
			peep.pop();
			vw.r()
		}, '*')
	}
}
function back() {
	BACKSET = function () {
		$.x()
		Sb = Sidebar = bb.m.e({
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
		Sid = bb.M({
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
		Per = bb.M.e({
			i: function () {
				alert("Welcome")
			}
		})
		p = Per({})
		p.s({n: "mac", a: 67})
		$.dA(300).id('sb')
		Sidebar = bb.M.e({
			fn: function () {
				return this.s({
					c: prompt("c?")
				})
			}
		})
		Sidebar()
				.oC('c', function (m, c) {
					$('#sb').C(c)
				}).s({c: 'w'}).fn()
	}
	BBSAMP1 = function () {
		$.x('b', 'bbsamp', '+')
		d = $.d()
		Rec = bb.M.e()
		RecV = bb.V.e({
			tagName: 'div', className: 'rec',
			events: {'click': 'move'},
			move: function () {
				this.$el.css('left', this.$el.position().left + 10)
			},
			rr: function () {
				return this.sDims().sPos().sCol()
			},
			sDims: function () {
				this.$el.WH(this.model.get('w'), this.model.get('h'))
				return this
			},
			sPos: function () {
				this.$el.ab()
						.LR(
						this.model.get('pos').x, this.model.get('pos').y)
				return this
			},
			sCol: function () {
				this.$el.C(this.model.get('C'))
				return this
			}
		})
		_.e([
			Rec.o({w: 100, h: 30, pos: {x: 300, y: 400}, C: 'o'}),
			Rec.o({w: 100, h: 20, pos: {x: 400, y: 400}, C: 'g'}),
			Rec.o({w: 100, h: 200, pos: {x: 0, y: 100}, C: 'y'})
		], function (md) {
			var r = RecV.o({
				model: md
			})
			r.rr().$el.a2(d)
		})
	}
	BBEXT = function () {
		// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
	}
	BACKDEMO = function () {
		$.x().d('yoo hoo').id('cont')
		Temp = function (i, h) {
			var s = ''
			return _.tp($('#' + i).html(), h || {})
			if (A(h)) {
				_.e(h, function (h) {
					s += h.oh()
				})
			}
			s = "<script type='text/template'>" + s + "</script>"
			return $(s).id(i).A()
		}
		$R({
			rt: {'': 'f', 'f': 'f', 's': 's'},
			f: function () {
				$l('fir')
			}, s: function () {
				$l('sec')
			},
			task: function () {
				t = new Task();
				$l('t = new Task')
			}
		}, '+')
		Temp('task', [
			$.lb('Task: '),
			$.ip().id('task_desc'),
			$.bt('add task').id('btn')])
		Tsk = $V({
			el: $('#cont'),
			i: function () {
				this.r()
			},
			r: function () {
				this.$el.ht(Temp('task'))
			},
			e: {'click button': 'add'},
			add: function () {
				alert($('#task_desc').v() + ' task added')
			}
		})
	}
	BBVIEW = function () {
		z()
		di('div1').a().w(500).h(500).c('r')
		ListView = bbV({
			el: $('#div1')[0],
			I: function () {
				this.R()
			},
			R: function () {
				//this.$el.append("<ul><li> hello </li></ul>")
				qq(this.$el)("<ul><li> hello </li></ul>")
			}
		})
		v = ListView()
	}
	BACKSET = function () {
		z()
		d = dva(400)
		Sid = bbM({
			promptColor: function () {
				this.s({
					co: pr('color:')
				})
			}
		})
		sb = Sid()
		sb.on('change:co', function (mod, col) {
			d.c($l(col))
		})
		sb.s({co: 'w'})
		sb.promptColor()
	}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	BACKVAL = function () {
		Person = bbM({
			d: {lame: true},
			i: function () {
				var t = this
				t.on('error',
						function (m, e) {
							alert(3);
							$l(e)
						})
				t.on('change:name',
						function (m, e) {
							alert(3);
							$l(e)
						})
			},
			v: function (at) {
				if (at.name == 'rigo') {
					return "name can't be rigo!"
				}
			}
		})
		p = Person({name: "rigo", age: 7})
		//c=bbC({m:Person})
		//p1=c.a(person1)
		//p2=c.a(person2)
		//c.rm(p1)
	}
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
	MOD = function () {
		m = bbM({n: 'j'})
		Donut = bbM({
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
		DonutShop = bbM({
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
	BBVIEW = function () {
		z()
		di('div1').a().w(500).h(500).c('r')
		ListView = bbV({
			el: $('#div1')[0],
			I: function () {
				this.R()
			},
			R: function () {
				//this.$el.append("<ul><li> hello </li></ul>")
				qq(this.$el)("<ul><li> hello </li></ul>")
			}
		})
		v = ListView()
	}
	BACKSET = function () {
		z()
		d = dva(400)
		Sid = bbM({
			promptColor: function () {
				this.s({
					co: pr('color:')
				})
			}
		})
		sb = Sid()
		sb.on('change:co', function (mod, col) {
			d.c($l(col))
		})
		sb.s({co: 'w'})
		sb.promptColor()
	}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	BACKVAL = function () {
		Person = bbM({
			d: {lame: true},
			i: function () {
				var t = this
				t.on('error',
						function (m, e) {
							alert(3);
							$l(e)
						})
				t.on('change:name',
						function (m, e) {
							alert(3);
							$l(e)
						})
			},
			v: function (at) {
				if (at.name == 'rigo') {
					return "name can't be rigo!"
				}
			}
		})
		p = Person({name: "rigo", age: 7})
		//c=bbC({m:Person})
		//p1=c.a(person1)
		//p2=c.a(person2)
		//c.rm(p1)
	}
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
