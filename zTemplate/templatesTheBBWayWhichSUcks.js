function tooMuchTryingToCopyBBWayForThisWhichIsSuckyAndWrong() {
	tempScr = function (i, e) {
		t = qq($(
				'<script type="text/template" id="' + i + '">'
		))
		_e(e,
				function (e) {
					t(e)
				})
		return t
	}
	temp = function (a, b) {
		return _.template(
				$('#' + a).html(),
				ob(b))
	}
	Temp = function (i, h) {
		var s = ''
		if (A(h)) {
			_e(h,
					function (h) {
						s += h.oh()
					})
		}
		s = "<script type='text/template'>" + s + "</script>"
		$l('s: ' + unescape(s))
		return qq(
				$(s)
		).id(i).a()
	}
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
	Temp = function (i, h) {
		var s = ''
		if (A(h)) {
			_e(h,
					function (h) {
						s += h.oh()
					})
		}
		s = "<script type='text/template'>" + s + "</script>"
		$l('s: ' + unescape(s))
		return qq(
				$(s)
		).id(i).a()
	}
	tempScr = function (i, e) {
		t = qq($(
				'<script type="text/template" id="' + i + '">'
		))
		_e(e,
				function (e) {
					t(e)
				})
		return t
	}
	temp = function (a, b) {
		return _.template(
				$('#' + a).html(),
				ob(b))
	}
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
TP = function () {
	TP = function () {
		TP = function () {
			z()
			c1 = tp("hello: <%= name %>", {name: 'moe'})
			c1b = tp("hello: <%= name %>")({name: 'moe'})
			c2 = tp(
					"<% _e(people, function(name){%>  " +
					"<li>  " +
					"<%= name %>  " +
					"</li>  " +
					"<% }) %>",
					{people: ['moe', 'curly', 'larry']}
			)
			c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
			$b()(c2)
		}
		TP = function () {
			z()
			c1 = tp("hello: <%= name %>", {name: 'moe'})
			c1b = tp("hello: <%= name %>")({name: 'moe'})
			c2 = tp(
					"<% _e(people, function(name){%>  " +
					"<li>  " +
					"<%= name %>  " +
					"</li>  " +
					"<% }) %>",
					{people: ['moe', 'curly', 'larry']}
			)
			c3 = tp("<b>  <%- tag %>  </b>", {tag: '<script>'})  // <%- vs <%= ?
			$b()(c2)
		}
		$.x().A(
				a = _.tp("<div>hello:<%=n%></div>")({n: 'moe'}),
				b = _.tp('<b><%-tag%></b>', {tag: '<script>'}),
				// <%- vs <%= ?
				c = _.tp(
						'<%_.e(peep,function(name){%>' +
						'<li>' + '<%=name%>' + '</li>' +
						'<%})%>'
						, {peep: ['moe', 'curly', 'larry']}
				)
		)
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
BACKDEMO = function () {


//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
	BACKDEMO = function () {
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
	//$.x().d('yoo hoo').id('cont')
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
	BACKDEMOoldSchol = function () {
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
TASKER = AP = TASK = function () {
	t1 = Ap.M.Tsk({tskN: 'go  store', pr: 4})
	t2 = Ap.M.Tsk({tskN: 'go park', pr: 3})
	TskV = Ap.V.Tsk = $$V({
		tag: 'li',
		// el: $('#container'),
		ren: function () {
			this.A(this.get('tskN'))
			return this
		},
		i: function () {
			this.ren()
		},
		r: function () {
			this.$el.html(this.get('tskN'));
			this.$el.html(temp('task'))
		},
		events: {'click button': 'add'},
		add: function () {
			alert($('#task_desc') + ' task added')
		}
	})
	Ap.V.Task = bbV({
		t: 'li',
		ren: function () {
			return this.H(
					this.g('title'))
		}
	})
	tskV = Ap.V.Tsk({m: task})
	tskVw = Ap.V.Tsk({m: task1})
	tskV = Ap.V.Tsk({m: t1})
	Ap.C.Tasks = _C({m: Ap.M.Tsk})
	tasks = Ap.C.Tsks([{tskN: 'hi'}, {tskN: 'bye'}])
	Ap.V.Tsks = _V({
		t: 'li',
		rr: function () {
			var that = this
			this.cl.each(
					function (t) {
						var v = Ap.V.Tsk({m: t})
						that.$el.A(v.rr().el)
					}, this)
			this.el.A()
		}
	})
	tsksV = Ap.V.Tsks({cl: tsks})
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')
	])
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
	rtr = $R({
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
	Ap.C.Tasks = bbC({m: Ap.M.Task})
	tsks = Ap.C.Tsks([
		{title: 'hi'},
		{title: 'bye'}])
	_V({
		tag: 'li',
		ren: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Tsk({m: t})
						this.$el.A(v.el)
					},
					this)
			$bd()(this.el)
		}
	})({cl: tasks})
	Bb.h.start({pushState: true})
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