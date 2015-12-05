BACKDEMO0 = function () {
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
BACKDEMO1 = function () {
	$.x().d('yoo hoo').id('cont')
	$R({
		rt: {
			'': 'f', 'f': 'f', 's': 's',
			'/wap/items/q': q
		},
		q: function () {
			alert('q')
		},
		f: function () {
			$l('fir')
		},
		s: function () {
			$l('sec')
		},
		task: function () {
			t = new Task();
			$l('t = new Task')
		}
	})
	Temp = function (i, h) {
		var s = ''
		return _.tp(
				$('#' + i).html(), h || {}
		)
		if (A(h)) {
			_.e(h, function (h) {
				s += h.oh()
			})
		}
		_str = "<script type='text/template'>" + _str + "</script>"
		str = $(s)
		return $(s).id(i).A()
	}
	/*
	
	
	 Temp('task', [
	
	 $.lb('Task: '),
	 $.ip().id('task_desc'),
	 $.bt('add task').id('btn')
	 ])
	
	
	 Tsk=$V({el: $('#cont'),
	
	 i: function(){this.r()},
	 r: function(){this.$el.ht( Temp('task') )},
	 e: {'click button': 'add'},
	 add: function(){alert( $('#task_desc').v() + ' task added')}
	
	 })
	 */
	$.bt('sfad', function () {
		r.n('/wap/items/q')
	})
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
BACKDEMO = function () {
	$.x()
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
	Temp('task', [
		$.lb('Task: '),
		$.ip().id('task_desc'),
		$.bt('add task').id('btn')])
	$.dI('cont')
	$$R({
		rt: {
			'': 'f',
			'f': 'f',
			's': 's'
		},
		f: function () {
			$l('fir')
		},
		s: function () {
			new Task()
			$l('sec')
		}
	})
	Tsk = Bb.V.e({
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