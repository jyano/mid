BB0 = EXTEV = function () {
	BBEXT = function () {
		// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
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
	EVENTS = function () {
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
	_.x({}, Bb.E).on('yo', function () {
		var g = G(arguments)
		$.sp(g).fS(50)
	}).trigger('yo', 'a', 'b', 'c')
}
BB1 = MDG = function () {
	$.h3('p: ' + M_({name: 'jay'}).g('name'))
}
BB2 = DFM = function () {
	DEFAULT = function () {
		$.x('n')
		md = $$M({
			defaults: {
				n: 'j', a: 20, o: 'p'
			}
		})()
		$$V({
			t: 'li',
			i: function () {
				this.$el.fS(149).col('b').C('r').A();
				this.r()
			},
			r: function () {
				this.$el.A('n: ' + this.g('n'))
			}
		})({m: md})
	}
	$V({
		el: $.li(),
		ren: function () {
			this.$el.A('n: ' + this.model.get('n'))
			return this
		},
		i: function () {
			this.$el.C('r', 'b').fS(149)
			this.ren()
		},
		m: $Df({n: 'j'})
	})
}
BB3 = BVR = VWR = DIVADD = function () {
	BBVIEW = function () {
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
	})// alpha! <- 
	//q.V({r: function () { }, i: function () {  }})()
}
BB4 = VEL = VIEW = function () {
	VIEW = function () {
		$.x('b', 'viw');
		$V({
			el: $.dA('g', 800, 800, 200, 200),
			i: function () {
				this.r()
			},
			r: function () {
				this.A($.ul().fS(40).A('hello'))
			}
		})
		$$V({
			i: function () {
				this.r()
			},
			r: function () {
				this.A($.ul(['hello']))
			}
		})({el: $.d('O', 500, 500)})
		function alpha() {
			//  uses jq.fn.V ...very cool
			$.fn.V = function (ob) {
				ob = ob || {};
				ob.el = this
				return $V(ob)
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
	$V({
		el: $.dA('g', 400, 400, 200, 200),
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
		Vw({el: $.d('O', 500, 500)})
	})
}
BB5 = MCH = CHG = ONCHANGE = function () {
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
	BACKSET = function () {
		BACKSET = function () {
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
BB6 = MDV = MVW = BMV = function () {
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
BB7 = BVD = MVD = function () {//valid:
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
BB8 = BRV = BBRECS = BBSAMP = function () {
	ARRPOP = function () {
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
	SIMP = function () {
		$.x('r').h1('tut')
		p = $M()({n: 'j'})
		$.h3('p: ' + p.g('n'))
	}
	BBVP1 = function () {
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
	SIMP = function () {
		$.x('r', 'simp')
		$.h1(
				'f: ' + $M()({n: 'j'}).g('n'),
				$.br(), 'l: ' + $m({n: 'y'}).n
		)
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
BB9 = CHC = CHANGECOL = FRIEND =function () {
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
	FRND = function () {
		FRND = function () {
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
////////
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
////
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
	FRND = function () {
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
BB10 = PVR = PER = function () {
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
	pV = _V({
		t: 'li', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	})({
		m: $M({d: {n: 'j', a: 20, o: 'p'}})
	})
	_.ev(.5, function () {
		pV.r()
	})
}
BB11 = VME = EVENTS = EVS = function () {
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BADS = function () {
		BADS = function () {
			z()
			$.h1('backcl').id('chicks').A()
			bads = $C()
			bads.oA(function (s) {
				$Ms("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		BADS = function () {
			$.x().h1('backcl').i('chicks').A()
			bads = $Cl()()
			bads.oA(function (s) {
				alert("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		BADS = function () {
			$.x().h1('backcl').i('chicks').A()
			bads = $$C()()
			bads.oA(function (s) {
				alert("new baddie: " + s.g("n"))
			})
			bads.add([{n: "bad1"}, {n: "bad2"}])
		}
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
		})
		bads.add([{n: "bad1"}, {n: "bad2"}])
	}
	BADS = function () {
		$.x().h1('backcl').i('chicks').A()
		bads = $Cl()()
		bads.oA(function (s) {
			alert("new baddie: " + s.g("n"))
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
QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		ren: function () {
			q.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	q.V({
		r: function () {
		},
		i: function () {
		}
	})()
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
WOB = WITHOUTBB = function () {
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
BACKVAL = function () {
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
 