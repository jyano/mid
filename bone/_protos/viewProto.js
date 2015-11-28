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
	this.q.E();
	return this
}
vw.e = function (a, b) {
	return (this.collection || this.cl).each(a, b)
}
vw.cl = vw.eCl = function (fn) {
	//
	var cl = this.collection
	if (U(fn)) {
		return cl
	}
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.ECl = function (fn) {
	this.E();
	return this.eCl(fn)
}
vw.eM = function (fn) {
	_.e(this.model, fn);
	return this
	function alt() {
		vw.e = function (a, b) {
			var cl = this.collection || this.cl;
			cl.each(a, b)
			return this
		}
	}
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
vw.a2 = function (a) {
	$l('vw.a2')
	if (!this.q) {
		alert('vw.a2 !q');
		return this
	}
	return this.q.a2(a)
}
vw.A = function (ob) {
	var g = G(arguments)
	//if (S(ob)) {ob = this.g(ob)}
	if (ob) {
		this.$el.A(ob)
	}
	if (U(ob) || g.p) {
		this.$el.A()
	}
	return this
}
vw.oC = function () {
	if (!this.model) {
		return false
	}
	this.model.oC.apply(this.model, arguments)
	return this
}
vw.C$ = function (s) {
	alert('vw.C$')
	this.$el.C$(s);
	return this
}
//
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
vw.e = function (a, b) {
	return (this.collection || this.cl).each(a, b)
}
vw.cl = vw.eCl = function (fn) {
	var cl = this.collection
	if (U(fn)) {
		return cl
	}
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.ECl = function (fn) {
	this.E();
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.eM = function (fn) {
	_.e(this.model, fn);
	return this
	function alt() {
		vw.e = function (a, b) {
			var cl = this.collection || this.cl;
			cl.each(a, b)
			return this
		}
	}
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
vw.a2 = function (a) {
	$l('vw.a2')
	if (!this.q) {
		alert('vw.a2 !q');
		return this
	}
	return this.q.a2(a)
}
vw.A = function (ob) {
	var g = G(arguments)
	//if (S(ob)) {ob = this.g(ob)}
	if (ob) {
		this.$el.A(ob)
	}
	if (U(ob) || g.p) {
		this.$el.A()
	}
	return this
}
vw.oC = function () {
	if (!this.model) {
		return false
	}
	this.model.oC.apply(this.model, arguments)
	return this
}
vw.ds = function () {
	if (this.model) {
		this.model.destroy()
	}
}