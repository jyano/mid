x._d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	var x = this
	if (g.S_ && g.f.length < 10000) {
		if (O(window['Q'])) {
			g[0] = Q.i(g[0])
		}
		else {
			return $.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
		}
	}
	if (g[0] == this) {
		g[0] = g[0].cv()
	}
	g[1] = N(g[1], 0)
	g[2] = N(g[2], 0)
	this.drawImage.apply(this, g)
	return this
}
x.d = function (i, p2, p3, p4, p5) {
	var g = G(arguments), o
	o = {i: g.f, x: g.s, y: g.t}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	if (O(o.i)) {
		this.drawImage($(o.i)[0], o.x, o.y)
		return this
	}
	if (S(o.i)) {
		if (O(window['Q'])) {
			o.i = Q.i(o.i)
		}
		else {
			$.i(g[0], function (e, i) {
				$l('in $.i in x._d')
				x._d(i[0], p2, p3, p4, p5)
			})
			return this
		}
	}
	if (o.i.width) {
		o.x = o.x - o.i.width / 2
		o.y = o.y - o.i.height / 2
	}
	this._d(o.i, o.x, o.y)
}
x.dC = function f(i, x, y) {
	var that = this
	i = i || 'me'
	x = x || 100
	y = y || 100
	if (U(x)) {//draw img in center of can
		$.i(i, function (i) {
			that.draw(i, (that.W() / 2) - (i.W() / 2), (that.H() / 2) - (i.H() / 2))
		})
	}
	else {//draw it by specifying location of its center
		y = y || x
		$.i(i, function (i) {
			that.dr(i, x - i.W() / 2, y - i.H() / 2)
		})
	}
	return this
} //draw it where u say, but as if its reg point was its center
x.drawRegCenter = function f(i, x, y) {
	var that = this
	$.i(i, function (e, i) {
		that.draw(i[0],
				(that.W() / 2) - (i.W() / 2),
				(that.H() / 2) - (i.H() / 2))
	})
	return this
}
x.fit = function f(i, x, y) {
	i = i || 'me'
	x = N(x, 0)
	y = N(y, 0)
	this.d(i, x, y, this.W(), this.H())
	return cv
}
x.jD = function (img, p1, p2, p3, p4) {
	var x = this, i = new Image
	$(i).load(function (i) {
		D(p4) ? x.drawImage(i.target, p1, p2, p3, p4) :
				D(p3) ? x.drawImage(i.target, p1, p2, p3, p3) :
						x.drawImage(i.target, p1 || 0, p2 || 0)
	})
	i.src = _.src(img)
	return i
}
 