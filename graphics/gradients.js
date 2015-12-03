 
x.lG = x.linGrad = function (a, b, c, d) {
	return this.createLinearGradient(a, b, c, d)
}
x.rG = x.radGrad = function (a, b, c, d, e, f) {
	return this.createRadialGradient(a, b, c, d, e, f)
}
x.lg = function () {
	var ctx = this, g = G(arguments), o, gr
	o = g.O ? g.f : N(g.t) ? {x1: g.f, y1: g.s, x2: g.t, y2: g[3]} : {x2: g.f, y2: g.s}
	o.x1 = N(o.x1, 0)
	o.y1 = N(o.y1, 0)
	o.x2 = N(o.x2, 0)
	o.y2 = N(o.y2, 0)
	gr = ctx.createLinearGradient(o.x1, o.y1, o.x2, o.y2)
	if (o.cS) {
		gr.cS(o.cS)
		ctx.c(gr);
		return ctx
	}
	return gr
}
x.lf = x.lG = ctx.lGr = ctx.linGrad = function (a, b, c, d) {
	return this.createLinearGradient(a, b, c, d)
}
x.rf = x.rG = ctx.rGr = ctx.radGrad = function (a, b, c, d, e, f) {
	return this.createRadialGradient(a, b, c, d, e, f)
}
x.pt = x.Pt = function () {
	return this.createPattern()
}
GRD = TESTGRADWORKS = function () {
	z()
	c = $.c('y', 500).A()
	g = c.context.createLinearGradient(50, 0, 500, 100)
	g.addColorStop(.2, 'orange')
	g.addColorStop(.6, 'red')
	g.addColorStop(.8, 'green')
	c.context.fillStyle = g
	c.fillRect()
}
GRADTX = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
TXG = TESTGRAD = function () {
	__C();
	x = c.ctx()
	x.lg(
			{
				cS: {r: 0, r: .1, b: .15, r: .2, y: .5, b: 1},
				x1: 50, x2: 500, y2: 100
			}
	).fr(0, 0, 300)
	x.lg({cS: {o: .2, r: .6, g: .8}, x1: 50, x2: 500, y2: 100}).fr(300, 0, 300)
	//black to white
	// x.lg({cS:{z:0, w:1}, x2: x.W(), y2:0 }).fr()
}
//ABOVE IS GOOD
LINRAD = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LINRAD1 = function () {
	__C()
	x = c.ctx()
	x.lg({x1: 50, y1: 500, y2: 100, cS: {o: .2, r: .6, g: .8}})
	x.fr(0, 0, 100, 100)
}
LINRAD2 = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.linGrad(50, 0, 500, 100).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
//err
RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}
RADGRAD = function () {
	z()
	d = $.c('y', 500)
	c = $.c('y', 500).A()
	c.context.f(
			c.context.radGrad(50, 50, 50, 50, 50, 200).stop([.2, 'o'], [.6, 'r'], [.8, 'g'])
	)
	c.fr()
}