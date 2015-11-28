cl.A = cl.add
cl.rm = cl.remove
cl.s = function (a, b, c) {
	var cl = this
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
	cl.set(a, b, c)
	return cl
}
//
cl.A = cl.add
cl.rm = cl.remove
cl.s = function (a, b, c) {
	var cl = this
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
	cl.set(a, b, c)
	return cl
}
cl.fl = cl.filter
cl.wo = cl.without
cl.la = cl.last
cl.cr = cl.create
cl.j = cl.toJSON
cl.fe = cl.fetch