Quiz0 = function (title) {
	this.title = title
}
Person0 = function (o) {
	this.name = o.name
	this.age = o.age
	this.job = o.job
	//this.work=function(){}
}
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
POPLE = function () {
 
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
	peopleCol = $$C({m: Person})
	//pC=new peopleCol()
	//pC.add(p)
	pC = peopleCol([
		{name: 'rigo', age: 29},
		{name: 'jan', age: 2},
		{name: 'sal', job: 'graphics'}
	])
	pC.at(1).s('name', 'joejoe')
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
	pcv = peopleView({cl: pC})
	pcv.R()
	$b()(pcv.el)
///
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
///
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
///
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
///
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
////////
 
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
 