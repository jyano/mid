md.at = md.attributes
md.at = function () {
	return this.attributes
}
md.S = md.save
md.hC = function (at) {
	var md = this,
			g = G(arguments), o
	o = g.F ? {fn: g.f} :
			F(g.s) ? {at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.J = md.tJ = md.toJSON
md.jS = md.tS = function () {
	return _.jS(this.J())
}
md.$l = md.lJ = function () {
	return $l(this.jS())
}
//
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
md.sv = md.save
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
md.a2 = function (a) {
	$l('me.a2')
	return this
	if (!this.q) {
		alert('me.a2 !q');
		return this
	}
	return this.q.a2(a)
}
md.S = md.save
md.hC = function (at) {
	var md = this,
			g = G(arguments), o
	o = g.F ? {fn: g.f} :
			F(g.s) ? {at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.j = md.J = md.tJ = md.toJSON
md.jS = md.tS = function () {
	return _.jS(this.J())
}
md.$l = md.lJ = function () {
	return $l(this.jS())
}