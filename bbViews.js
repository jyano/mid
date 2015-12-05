vw = Bb.View.prototype;
Bb.V = Bb.View;
Bb.V.x = Bb.V.extend;
 
Bb.sEv(vw)
vw.A = function (ob) {
	var g = G(arguments)
	if (S(ob)) {
		ob = this.g(ob)
	}
	if (ob) {
		this.$el.A(ob)
	}
	if (U(ob) || g.p) {
		this.$el.A()
	}
	return this
}
vw.a2 = function (a) {
	if (this.$el && this.$el.a2) {
		return this.$el.a2(a)
	}
}
vw.g = function (m) {
	if (this.model) {
		return this.model.get(m)
	}
	else if (this.collection && this.collection.get) {
		return this.collection.get(m)
	}
}
vw.s = function (a, b) {
	this.model.set(a, b);
	return this
}
vw.E = function () {
	this.$el.E();
	return this
}
vw.cl = vw.eCl = vw.e = function (fn) {
	var cl = (this.collection || this.cl)
	if (U(fn)) {
		return cl
	}
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.eAlt = function (a, b) {
	var cl = this.collection || this.cl;
	cl.each(a, b)
	return this
}
vw.ECl = function (fn, cl) {
	this.E();
	if (cl) {
		_.e(cl, fn)
		return this
	}
	return this.eCl(fn)
}
vw.eM = function (fn) {
	_.e(this.model, fn);
	return this
}
vw.h = function (a) {
	if (U(a)) {
		return this.$el.h()
	}
	this.$el.h(a);
	return this
}//=vw.H
vw.j = function (fn) {
	var vw = this, j
	if (this.collection) {
		j = this.collection.toJSON()
		if (F(fn)) {
			_.e(j, fn);
			return vw
		}
		return j
	}
	if (this.model) {
		return this.model.toJSON()
	}
}
vw.oC = function () {
	if (!this.model) {
		return false
	}
	this.model.oC.apply(this.model, arguments)
	return this
}
vw.C$ = function (s) {
	this.$el.C$(s);
	return this
}
vw.ds = function () {
	if (this.model) {
		this.model.destroy()
	}
}
V__ = function (ob) {
	ob = ob || {}
	ob.id = D(ob.id) ? ob.id :
	ob.x || ob._ || ob['#']
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
	ob.defaults = ob.defaults || ob.df || ob.d
	//ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
	ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
	//ob.el = ob.el || ob.q
	//if (ob.q) {ob.el = q}
	if (F(ob.i)) {
		ob.initialize = ob.i
	}
	return ob
}
__V = function (ob) {
	return Bb.V.x(V__(ob))
}
_V = function (ob, ob2) {
	var Vw = __V(ob)
	V__(ob2)
	var fn = function (ob, q) {
		var vw = new Vw(ob);
		vw.md = vw.model;
		vw.cl = vw.collection
		vw.q = vw.$el
		if (q) {
			alert('see $$V');
			vw.a2(q)
		}
		return vw
	}
	return ob2 ? fn(ob) : fn
}
$V = function (ob, a, b, c) {
	return _V(ob, a, b, c)()
}
V_ = $v = function (ob) {
	return new Bb.View(ob);
}
$.uV = $.ulV = function (ob) {
	ob = ob || {};
	ob.t = 'ul';
	return $V(ob)
} // make a bbV with t:ul
$.fn.V = function (ob) {
	ob = ob || {};
	ob.el = this;
	return $V(ob)
}
$V$ = function (ob) {
	return Bb.V.x(ob)
}