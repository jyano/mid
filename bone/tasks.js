Ap = {M: {}, C: {}, V: {}}
Ap.M.Task = _M({})
TASKER = AP = TASK =function () {
	
 
	t1 = Ap.M.Tsk({tskN: 'go  store', pr: 4})
	t2 = Ap.M.Tsk({tskN: 'go park', pr: 3})
	TskV =Ap.V.Tsk = $$V({
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
	
	
	_V({tag: 'li',
		
		ren: function () {
			this.cl.each(
					function (t) {
						var v = Ap.V.Tsk({m: t})
						this.$el.A(v.el)},
					this)
			$bd()(this.el)
		}
	})({cl: tasks})
	
	 

	Bb.h.start({pushState: true})
} 