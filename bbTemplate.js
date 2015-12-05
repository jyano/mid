listTp = function () {
	$.dI('list-tp', [$.la()]).C('o')
	//$.d('o').id('list-tp').A($.la())
}
rFn = function () {
	var da, tp, ul
	$l('r: ' + this.model.g('d')[0].h)
	//$.c('b').ab(300,300)
	da = this.model.g('d')
	tp = this.tp
	ul = this.$el.find('ul')
	_.e(da, function (da) {
		ul.A(
				tp.clone()
						.find('a').hr('href', da.h).T(da.t)
						.end()
		)
	})
}
rFn2 = function () {
	$l('rr: ' + this.model.g('d')[0].h)  //$.c('b').ab(300,300)
	da = this.model.g('d');
	tp = this.tp
	ul = this.$el.find('ul')
	_.e(da, function (da) {
		clo = tp.clone()
		ul.A(clo.find('a').hr('href', da.h).T(da.t).end())
	})
}
 
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
qT = function (f, o, e) {
	return f(ob(o), e || _d())
}
//a sample template

lii = function (o, e) {
	return e(li(o.me), li(o.me))
}
//return [li(o.me), li(o.me)]
// e= qT( lii, {me:'jason'} ).a()
thed = function (o, e) {
	return e(
			thead()(
					tr().k('header')(
							th()('Name'), th()('Age')
					)
			)
	)
}
// t=qT(thed).a()
 // extending Bb? -> https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
 
 


NOWAY=PLV = function () {
  
	Per = _M({//name, age, occ
		d: {n: 'a', a: 20, o: 'p'}
	})
	 
	p0 = Per()
	
	p1 = Per({n: 'b'})
	p2 = Per({n: 'c'})
	
	PerV = $V({
		t: 'li',
		x: 'some-per',  // id
		i: function () {
			this.r()
		}, //??
		r: function () {
			this.$el.A('fasdfsfasd')
			this.$el.A(
					this.tp(
							this.model
					)
			)
		},
		k: 'per'
		//,   // className
		//tp: tp = _.tp('fo real? <%= n %> (<%= a %>) - <%= o %>'),
	})
	return
	pV = PerV({m: p0})
	
	PepC = $Cl({m: Per})
	pC = PepC()
	pC.add([p0, p1, p2])
	PepV = $V({
		cl: PepC,
		el: ul = $.ul(),
		r: function () {
			ul = this.$el.E()
			this.J(function (md) {
				PerV({m: md}, ul)
			})
		}
	})
	
	pCV = PepV({cl: pC})
	
	$.in(.2, function () {
		pCV.r()
	}, '*')
	$.in(.4, function () {
		pCV.r()
	}, '*')
}
 