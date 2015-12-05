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