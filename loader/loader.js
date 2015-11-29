_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']

cjs.loadQueue = cjs.lq = function (mf, func) {
	var q = new cjs.LoadQueue(true)
	if (A(mf)) {
		q.loadManifest(cjs.mf.apply(null, mf))
	}
	if (F(func)) {
		q.complete(function () {
			func(function (img) {
				return q.getResult(img)
			})
		})
	}
	return q
}
cjs.handleFileLoad = function (e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
cjs.mf = cjs.manifest = function (a) {
	var g = G(arguments),
			mf = []
	_.each(g, function (v) {
		mf.push({
			src: cjs.src(v),
			id: v
		})
	})
	return mf
}
cjs.makeManifest = cjs.makeMan = function (a) {
	return cjs.manifest.apply(null, _.map(a.images, function (i) {
				return Graphics.fromSource(i)
			})
	)
}
 
 
Q = function () {//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
	var g = G(arguments),
			o = g.A_ || g.S_ ? {m: g.f, c: g.s, f: g.t} :
					g.F_ ? {c: g.f, f: g.s} :
							g.f
	o.m = o.m || _MF
	Q = (new cjs.LoadQueue)
	Q.ran = true
	if (o.f) {
		Q.f(o.f)
	}
	if (o.c) {
		Q.c(function (e) {
			o.c(function qFn(i) {
				return Q.i(i)
			}, e)
		})
	}
	if (o.m) {
		Q.m(o.m)
	}
	return Q
};
Q.ran = false
Q1 = function (imgs, fn) {

		var q = cjs.lq()

		
		mf = []
	
			_.e(imgs, function (v) {
			
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		
		q.manifest(mf)
		
		q.complete(function () {
			fn(q)
		})
}


 
 