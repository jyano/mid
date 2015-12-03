Bb.M = Bb.Model;
Bb.M.x = Bb.M.extend;
Bb.sEv(md)
md.g = md.get;
md.s = function (a, b, c) {
	var md = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	md.set(a, b, c)
	return md
}
md.sv = md.S = md.save
md.at = function () {return this.attributes}
md.hC = function (at) {
	var md = this, g = G(arguments), o
	o = g.F ? {fn: g.f} : F(g.s) ?
	{at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.a2 = function (a) {
	if (!this.q) {return this}
	return this.q.a2(a)
}
md.jS = md.tS = function () {
	return _.jS(this.J())
}
md.j = md.J = md.tJ = md.toJSON
md.$l = md.lJ = function () {
	return $l(this.jS())
}
md.l = function () {
	$l(JSON.stringify(this.toJSON()))
	return this
}
md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
md.l2 = md.lT = md.lTo = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
__M =  function (ob) {
	ob = ob || {} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
	ob.initialize = ob.initialize || ob.i || function () {
	}
	function init() {
		if (ob.fn) {
			ob.i = o.fn
		}
		ob._i = ob.initialize
		if (!F(ob.initialize) && F(ob.i)) {
			ob.initialize = ob.i
		}
		ob.initializeX = function (op) {
			this.q = this.$el
			this.a2 = function (a) {
				return this.q.a2(a)
			}
			//$l('gen init..')
			this.g = function (a) {
				if (a) {
					return this.model.get(a)
				}
			}
			this.A = function (ob) {
				var g = G(arguments),
						q = this.q
				if (S(ob)) {
					ob = this.g(ob)
				}
				if (ob) {
					q.A(ob)
				}
				if (U(ob) || g.p) {
					q.A()
				}
				return q
			}
			_.b(ob._i, this)(op)
		}
	}
	ob.className = ob.className || ob.k
	ob.defaults = ob.defaults || ob.df || ob.d
	ob.events = ob.events || ob.ev || ob.e
	ob.id = D(ob.id) ? ob.id : ob.x
	ob.idAttribute = ob.idAttribute || ob._id
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.render = ob.render || ob.rr || ob.rn || ob.r
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.validate = ob.validate || ob.v
	return Bb.M.x(ob || {})
}

_M =  function (ob, a, b, c) {
	ob = ob || {}
	var g = G(arguments), Md;
	Md = __M(ob, a, b, c)
	
	return function (ob, q) {
		var md = new Md(ob || {})
		if (q) {md.a2(q)}
		return md
	}
}

$M = function (op, a, b, c) {
	//if (U(op)) {return _$M()}
	return _M(op, a, b, c)()
}

M_ = $m = function (ob) {

	var m = new Bb.Model(ob);
	return m
}


old = function () {
//md.o = function () {var g = G(arguments);this.on.apply(this, g)}
	/*
	 // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
	 – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
	 – validate    vl – validationError  vE – isValid   iV
	 – attributes– changed  – isNew iN – hasChanged  hC  – previous p
	 – previousAttributes  pA – changedAttributes cA
	 */
//Bb._M=function(ob){return  Bb.M.extend(ob)}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
}
function toAlrt() {
	M$ = function (ob) {
		alert('M$')
		ob = O(ob) ? ob : {}
		var Md, md
		Md = Bb._M(ob)
		md = new Md(ob)
		return md
	}
	toMdOb = function (a) {
		alert('toMdOb')
		a = O(a) ? a : {}
		if (a.i) {
			a.initialize = _v(a.i)
		}
		if (a.I) {
			a.initialize = _v(a.I)
		}
		if (a.d) {
			a.defaults = a.d
		}
		if (a.D) {
			a.defaults = a.D
		}
		if (a.v) {
			a.validate = a.v
		}
		if (a.V) {
			a.validate = a.V
		}
		a.idAttribute = '_id'
		return a
	}
	sMd = function (m) {
		alert('sMd')
		m.at = m.attributes
		m.s = function (a, b, c) {
			if (O(a) && O(b)) {
				if (b.v) {
					b.validate = b.v ? true : false
				}
			}
			if (S(a) && O(c)) {
				if (c.v) {
					c.validate = c.v ? true : false
				}
			}
			return m.set(a, b, c)
		}
		m.g = m.get
		m.j = m.toJSON
		m.o = m.on
		Bb.sEv(m)
		return m
	}
	bbM = function (a) {
		alert('bbM')
		a = ob(a)
		if (a.i) {
			a.initialize = _v(a.i)
		}
		if (a.I) {
			a.initialize = _v(a.I)
		}
		if (a.d) {
			a.defaults = a.d
		}
		if (a.D) {
			a.defaults = a.D
		}
		if (a.v) {
			a.validate = a.v
		}
		if (a.V) {
			a.validate = a.V
		}
		a.idAttribute = "_id"
		var m = Backbone.Model.extend(a)
		sMd(m)
		return function (a) {
			var o = new m(a)
			sMd(o)
			return o
		}
	}
}

 