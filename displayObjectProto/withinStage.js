i.in = i.within = i.inStage = function () {
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
}
i.within = i.inStage = function () {
	var i = this, g = G(arguments), s = i.S(), wthnS
	wthnS = i.x > 0 && i.y > 0
	&& i.x < (s.W() - 100) && i.y < ( s.H() - 100 )
	if (g.n && !wthnS) {
		s.rm()
	}
	return wthnS
}
ob.within = ob.inStage = function () {
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
}
ob.within = ob.inStage = function () {
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
}