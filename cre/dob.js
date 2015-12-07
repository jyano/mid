dO = cjs.DisplayObject.prototype
dO.X = function (x, dur) {
	var i = this, g = G(arguments)
	if (U(x)) {
		return i.x
	}
	i.x = g.p ? i.x + x
			: g.n ? i.x - x
			: g.m ? i.x * x
			: g.d ? i.x / x
			: x
	return i
	//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
	dO.Xalt = function (x, duration) {//can add easing :)
		var g = G(arguments)
		if (U(x)) {
			return this.x
		}
		if (g.p) {
			x = this.x + x
		}
		else if (g.n) {
			$l('n')
			x = this.x - x
		}
		else if (g.m) {
			$l('m')
			x = this.x * x
		}
		else if (g.d) {
			$l('d')
			x = this.x / x
		}
		if (N(duration)) {
			tw([this], [{x: x}, duration])
		}
		else {
			this.x = x
		}
		return this
	}
}
dO.Y = function (y, duration) {//make same same x
	var g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(duration)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
	dO.Yalt = function (y, duration) {//make same same x
		var g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(duration)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.Yalt = function (y, duration) {//make same same x
		var g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(duration)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.Yalt = function (y, dur) {
		var i = this, g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(dur)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
}
dO.XY = function (x, y) {
	if (U(x)) {
		return {x: this.x, y: this.y}
	}
	if (O(x)) {
		y = x.y
		x = x.x
	}
	if (U(y)) {
		y = x
	}
	return this.X(x).Y(y)
	dO.XYalt = function (x, y) {
		if (U(x)) {
			return {x: this.x, y: this.y}
		}
		if (O(x)) {
			y = x.y
			x = x.x
		}
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
		dO.XYalt = function (x, y) {
			var i = this, g = G(arguments), v
			if (g.u) {
				return {x: i.x, y: i.y}
			}
			v = V(g.f, g.s)
			x = v.x
			y = N(v.y, v.x)
			return i.X(x).Y(y)
		}
	}
	dO.XYalt = function (x, y) {
		if (U(x)) {
			return {x: this.x, y: this.y}
		}
		if (O(x)) {
			y = x.y
			x = x.x
		}
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
	}
}
dO.W = function (a) {
	var i = this
	if (U(a)) {
		var bds = i.getBounds()
		if (bds) {
			return bds.width * i.scaleX
		}
		return
	}
	i.sX(i.scaleX * a / i.W())
	return i
	dO.Walt = function (a) {
		dO.Walt = function (a) {
			dO.Walt = function (a) {
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
			if (U(a)) {
				return this.getBounds().width * this.scaleX
			}
			this.sX(this.scaleX * a / this.W())
			return this
		}
		if (U(a)) {
			return this.getBounds().width * this.scaleX
		}
		this.sX(this.scaleX * a / this.W())
		return this
	}
}
dO.H = function (a) {
	var i = this
	if (U(a)) {
		if (this.getBounds()) {
			return this.getBounds().height * this.scaleY
		}
		return
	}
	this.sY(this.scaleY * a / this.H())
	return this
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
}
dO.WH = function (w, h) {
	var i = this
	return this.W(w).H(h || w)
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
}
dO.scX = dO.sX = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleX
	}
	dO.scaleX = n
	return dO
}
dO.scY = dO.sY = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleY
	}
	dO.scaleY = n
	return dO
}
dO.scXY = dO.sXY = function (x, y) {
	var dO = this,
			g = G(arguments), v
	if (U(g[0])) {
		return dO
		return {x: dO.sX(), y: dO.sY()}
	}
	v = V(g[0], g[1])
	x = _.tN(v.x)
	y = _.tN(v.y, v.x)
	dO.sX(x)
	dO.sY(y)
	return dO
}
dO.rgX = dO.rX = function () {
	var dO = this, g = G(arguments), rX = g[0]
	if (U(rX)) {
		return dO.regX
	}
	dO.regX = g.p ?
	dO.regX + rX : rX
	return dO
}
dO.rgY = dO.rY = function () {
	var dO = this, g = G(arguments), rY = g[0]
	if (g.p) {
		dO.Y(dO.y + (rY - dO.regY))
	}
	if (U(rY)) {
		return dO.regY
	}
	dO.regY = rY
	return dO
}
dO.rgXY = dO.rXY = function () {
	var dO = this, g = G(arguments),
			x = _.tN(g[0]),
			y = _.tN(g[1], x)
	return dO.rX(x).rY(y)
}
dO.skX = dO.kX = function (skewX) {
	if (U(skewX)) {
		return this.skewX
	}
	this.skewX = skewX;
	return this
}
dO.skY = dO.kY = function (skewY) {
	if (U(skewY)) {
		return this.skewY
	}
	this.skewY = skewY;
	return this
}
dO.skXY = dO.kXY = function (x, y) {
	y = N(y) ? y : x
	return this.kX(x).kY(y)
}
dO.rt = dO.rot = function (rotation) {
	var args = G(arguments);
	rotation = args[0]
	if (args.p) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation + rotation)
	}
	if (args.n) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation - rotation)
	}
	if (U(rotation)) {
		return this.rotation
	}
	this.rotation = rotation
	return this
	dO.rtAlt = function () {
		var dO = this, g = G(arguments), a = g[0]
		if (g.p) {
			return dO.rt(dO.rotation + _.tN(a, 1))
		}
		if (g.n) {
			return dO.rt(dO.rotation - _.tN(a, 1))
		}
		if (U(a)) {
			return dO.rotation
		}
		dO.rotation = a
		return dO
	}
	dO.rotAlt = function (rotation) {
		var args = G(arguments);
		rotation = args[0]
		if (args.p) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation + rotation)
		}
		if (args.n) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation - rotation)
		}
		if (U(rotation)) {
			return this.rotation
		}
		this.rotation = rotation
		return this
	}
}
dO.X = function (x, dur) {
	var i = this, g = G(arguments)
	if (U(x)) {
		return i.x
	}
	i.x = g.p ? i.x + x
			: g.n ? i.x - x
			: g.m ? i.x * x
			: g.d ? i.x / x
			: x
	return i
	//if (N(dur)) {tw([i], [{x: x}, dur]); return i}
	dO.Xalt = function (x, duration) {//can add easing :)
		var g = G(arguments)
		if (U(x)) {
			return this.x
		}
		if (g.p) {
			x = this.x + x
		}
		else if (g.n) {
			$l('n')
			x = this.x - x
		}
		else if (g.m) {
			$l('m')
			x = this.x * x
		}
		else if (g.d) {
			$l('d')
			x = this.x / x
		}
		if (N(duration)) {
			tw([this], [{x: x}, duration])
		}
		else {
			this.x = x
		}
		return this
	}
}
dO.Y = function (y, duration) {//make same same x
	var g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(duration)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
	dO.Yalt = function (y, duration) {//make same same x
		var g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(duration)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.Yalt = function (y, duration) {//make same same x
		var g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(duration)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
	dO.Yalt = function (y, dur) {
		var i = this, g = G(arguments)
		if (U(y)) {
			return this.y
		}
		if (g.p) {
			y = this.y + y
		}
		else if (g.n) {
			y = this.y - y
		}
		else if (g.m) {
			y = this.y * y
		}
		else if (g.d) {
			y = this.y / y
		}
		if (N(dur)) {
			tw([this], [{y: y}, duration])
		}
		else {
			this.y = y
		}
		return this
	}
}
dO.XY = function (x, y) {
	if (U(x)) {
		return {x: this.x, y: this.y}
	}
	if (O(x)) {
		y = x.y
		x = x.x
	}
	if (U(y)) {
		y = x
	}
	return this.X(x).Y(y)
	dO.XYalt = function (x, y) {
		if (U(x)) {
			return {x: this.x, y: this.y}
		}
		if (O(x)) {
			y = x.y
			x = x.x
		}
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
		dO.XYalt = function (x, y) {
			var i = this, g = G(arguments), v
			if (g.u) {
				return {x: i.x, y: i.y}
			}
			v = V(g.f, g.s)
			x = v.x
			y = N(v.y, v.x)
			return i.X(x).Y(y)
		}
	}
	dO.XYalt = function (x, y) {
		if (U(x)) {
			return {x: this.x, y: this.y}
		}
		if (O(x)) {
			y = x.y
			x = x.x
		}
		if (U(y)) {
			y = x
		}
		return this.X(x).Y(y)
	}
}
dO.W = function (a) {
	var i = this
	if (U(a)) {
		var bds = i.getBounds()
		if (bds) {
			return bds.width * i.scaleX
		}
		return
	}
	i.sX(i.scaleX * a / i.W())
	return i
	dO.Walt = function (a) {
		dO.Walt = function (a) {
			dO.Walt = function (a) {
				if (U(a)) {
					return this.getBounds().width * this.scaleX
				}
				this.sX(this.scaleX * a / this.W())
				return this
			}
			if (U(a)) {
				return this.getBounds().width * this.scaleX
			}
			this.sX(this.scaleX * a / this.W())
			return this
		}
		if (U(a)) {
			return this.getBounds().width * this.scaleX
		}
		this.sX(this.scaleX * a / this.W())
		return this
	}
}
dO.H = function (a) {
	var i = this
	if (U(a)) {
		if (this.getBounds()) {
			return this.getBounds().height * this.scaleY
		}
		return
	}
	this.sY(this.scaleY * a / this.H())
	return this
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
	dO.Halt = function (a) {
		if (U(a)) {
			return this.getBounds().height * this.scaleY
		}
		this.sY(this.scaleY * a / this.H())
		return this
	}
}
dO.WH = function (w, h) {
	var i = this
	return this.W(w).H(h || w)
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
	dO.WHalt = function (w, h) {
		return this.W(w).H(h || w)
	}
}
dO.scX = dO.sX = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleX
	}
	dO.scaleX = n
	return dO
}
dO.scY = dO.sY = function (n) {
	var dO = this
	if (U(n)) {
		return dO.scaleY
	}
	dO.scaleY = n
	return dO
}
dO.scXY = dO.sXY = function (x, y) {
	var dO = this,
			g = G(arguments), v
	if (U(g[0])) {
		return dO
		return {x: dO.sX(), y: dO.sY()}
	}
	v = V(g[0], g[1])
	x = _.tN(v.x)
	y = _.tN(v.y, v.x)
	dO.sX(x)
	dO.sY(y)
	return dO
}
dO.rgX = dO.rX = function () {
	var dO = this, g = G(arguments), rX = g[0]
	if (U(rX)) {
		return dO.regX
	}
	dO.regX = g.p ?
	dO.regX + rX : rX
	return dO
}
dO.rgY = dO.rY = function () {
	var dO = this, g = G(arguments), rY = g[0]
	if (g.p) {
		dO.Y(dO.y + (rY - dO.regY))
	}
	if (U(rY)) {
		return dO.regY
	}
	dO.regY = rY
	return dO
}
dO.rgXY = dO.rXY = function () {
	var dO = this, g = G(arguments),
			x = _.tN(g[0]),
			y = _.tN(g[1], x)
	return dO.rX(x).rY(y)
}
dO.skX = dO.kX = function (skewX) {
	if (U(skewX)) {
		return this.skewX
	}
	this.skewX = skewX;
	return this
}
dO.skY = dO.kY = function (skewY) {
	if (U(skewY)) {
		return this.skewY
	}
	this.skewY = skewY;
	return this
}
dO.skXY = dO.kXY = function (x, y) {
	y = N(y) ? y : x
	return this.kX(x).kY(y)
}
dO.rt = dO.rot = function (rotation) {
	var args = G(arguments);
	rotation = args[0]
	if (args.p) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation + rotation)
	}
	if (args.n) {
		rotation = N(rotation) ? rotation : 1
		return this.rT(this.rotation - rotation)
	}
	if (U(rotation)) {
		return this.rotation
	}
	this.rotation = rotation
	return this
	dO.rtAlt = function () {
		var dO = this, g = G(arguments), a = g[0]
		if (g.p) {
			return dO.rt(dO.rotation + _.tN(a, 1))
		}
		if (g.n) {
			return dO.rt(dO.rotation - _.tN(a, 1))
		}
		if (U(a)) {
			return dO.rotation
		}
		dO.rotation = a
		return dO
	}
	dO.rotAlt = function (rotation) {
		var args = G(arguments);
		rotation = args[0]
		if (args.p) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation + rotation)
		}
		if (args.n) {
			rotation = N(rotation) ? rotation : 1
			return this.rT(this.rotation - rotation)
		}
		if (U(rotation)) {
			return this.rotation
		}
		this.rotation = rotation
		return this
	}
}
function mouse() {
	dO.underMouse = dO.uM = function () {
		var dO = this, stg = dO.getStage()
		if (stg.mouseInBounds) {
			var pt = dO.gTL(stg.mouseX, stg.mouseY)
			return dO.hitTest(pt.x, pt.y)
			// alt : return hitTest( pt )
		}
	}
	dO.mouEn = function (en) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.mouseEnabled
		}
		dO.mouseEnabled = g.f ? true : false
		return dO
	}
	dO.$ = dO.click = function (fn) {
		return this.on('click', fn)
	}
	dO.$$ = dO.dblclick = function (fn) {
		return this.on('dblclick', fn)
	}
	events = ['added',
		'mouseover', 'rollover', 'rollout', 'mouseout',
		'mousedown', 'pressmove', 'pressup', 'click', 'dblclick',
		'removed',
		'tick'
	]
}
function rel() {
	dO.in = dO.within = dO.inStage = function () {
		var ob = this,
				st = ob.st(),
				g = G(arguments),
				x = ob.x,
				y = ob.y,
				w = st.W() - 100,
				h = st.H() - 100,
				inn = x > 0 && x < w && y > 0 && y < h
		if (g.n) {
			if (!inn) {
				ob.rm()
			}
		}
		return inn
		function inStage() {
			var args = G(arguments),
					x = this.x,
					y = this.y,
					stg = this.stg(),
					w = stg.W() - 100,
					h = stg.H() - 100,
					withinStage = x > 0 && x < w && y > 0 && y < h
			if (args.n) {
				if (!withinStage) {
					this.remove()
				}
			}
			return withinStage
			var i = this
			var s = i.S(), wthnS
			wthnS = i.x > 0 && i.y > 0
			&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
			if (g.n && !wthnS) {
				s.rm()
			}
			return wthnS
		}
	}
	dO.belowStg = function () {
		return this.y > this.getStage().H()
	}
	dO.toFront = function () {
		return this.ix(this.sib().length - 1)
		toFront = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
		dO.toFrontAlt = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
	}
//rel
	dO.gTL = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return this.globalToLocal(x, y)
	}
	dO.lTG = function () {
		return this.localToGlobal.apply(this, arguments)
	}
	dO.lTL = function () {
		return this.localToLocal.apply(this, arguments)
	}
	dO.in = dO.within = dO.inStage = function () {
		var ob = this,
				st = ob.st(),
				g = G(arguments),
				x = ob.x,
				y = ob.y,
				w = st.W() - 100,
				h = st.H() - 100,
				inn = x > 0 && x < w && y > 0 && y < h
		if (g.n) {
			if (!inn) {
				ob.rm()
			}
		}
		return inn
		function inStage() {
			var args = G(arguments),
					x = this.x,
					y = this.y,
					stg = this.stg(),
					w = stg.W() - 100,
					h = stg.H() - 100,
					withinStage = x > 0 && x < w && y > 0 && y < h
			if (args.n) {
				if (!withinStage) {
					this.remove()
				}
			}
			return withinStage
			var i = this
			var s = i.S(), wthnS
			wthnS = i.x > 0 && i.y > 0
			&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
			if (g.n && !wthnS) {
				s.rm()
			}
			return wthnS
		}
	}
	dO.belowStg = function () {
		return this.y > this.getStage().H()
	}
	dO.toFront = function () {
		return this.ix(this.sib().length - 1)
		toFront = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
		dO.toFrontAlt = function () {
			numChildren = this.parent.children.length
			this.parent.setChildIndex(this, numChildren - 1)
			return this
		}
	}
	dO.gTL = function (x, y) {
		if (O(x)) {
			y = x.y;
			x = x.x
		}
		return this.globalToLocal(x, y)
	}
	dO.lTG = function () {
		return this.localToGlobal.apply(this, arguments)
	}
	dO.lTL = function () {
		return this.localToLocal.apply(this, arguments)
	}
}
function compOp() {
	dO.cO = dO.compOp = function (compOp) {
		var dO = this, g = G(arguments)
		if (g.u) {
			return dO.compositeOperation
		}
		dO.compositeOperation = compOp
		return dO
	}
// dO.o // not good!!!!!
//eh.. unnecessary? could overlap something important? well.. does it or not?
	dO.Ds = dO.dO = function () {
		return this.compOp('destination-out');
	}
	dO.dS = dO.dI = function () {
		return this.compOp('destination-in')
	}
	dO.sD = dO.sI = function () {
		this.compOp('source-in');
		return this
	}
	dO.Sd = dO.sO = function () {
		this.compOp('source-out');
		return this
	} // why use this ??x.sd = x.sV= function(){ this.compOp('source-over'); return this }
	dO.ds = dO.dV = function () {
		this.compOp('destination-over');
		return this
	}
	dO.SD = dO.sT = dO.sA = function () {
		this.compOp('source-atop');
		return this
	}
	dO.DS = dO.dT = dO.dA = function () {
		this.compOp('destination-atop');
		return this
	}
	dO.li = function () {
		this.compOp('lighter');
		return this
	}
	dO.co = function () {
		this.compOp('copy');
		return this
	}
	dO.xo = function () {
		this.compOp('xor');
		return this
	}
}
function family() {
	dO.pa = dO.P = function () {
		return this.parent
	}
	dO.sib = function () {
		return this.P().ch()
	}
	dO.St = dO.S = dO.st = dO.stg = function () {
		return this.getStage()
	}
	dO.pa = dO.P = function () {
		return this.parent
	}
	dO.sib = function () {
		return this.P().ch()
	}
	dO.St = dO.S = dO.st = dO.stg = function () {
		return this.getStage()
	}
}