 
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']



Q=function(){var g=G(arguments),
		o= g.A_ || g.S_ ? {m: g.f, c: g.s, f: g.t} :
				g.F_? {c:g.f, f: g.s}:
						g.f
						
	o.m = o.m || _MF
	
	Q = (new cjs.LoadQueue)
	Q.ran=true
	if (o.f) {Q.f(o.f)}
	if (o.c) {
		Q.c(function (e) {
			o.c(function qFn(i) {
			return Q.i(i)}, e)
		})
	}
	
	if(o.m){Q.m(o.m)}
	return Q
}; Q.ran=false



//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
WQ = function () {
	alert('WQ')
	var g = G(arguments), o = F(g.t) ?
	{ob: g.f, fn0: g.s, fn: g.t} :
	{ob: g.f, fn: g.s}
	o.ob = o.ob || {}
	o.fn = o.fn || function (w) {}
	w = W(o.ob)
	if (o.fn0) {o.fn0(w)}
	Q(o.ob.I || _MF, function () {
		o.fn(w)
	})//
}
function loadqueue() {
//LOADQUEUE
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
	Q = function (imgs, func) {
		var q = cjs.lq()
		mf = []
		_.each(imgs, function (v) {
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		q.manifest(mf)
		q.complete(function () {
			func(q)
		})
	}
	MANIFEST = function () {
		s = cjs.S()
		Q(['me', 'guy'], function (q) {
			s.A(me = q.bm('me'))
			s.A(guy = q.bm('guy'))
			guy.drag()
		})
	}
	WHYQ = function () {
		cjs.Keys.l = cjs.Keys.left = false
		cjs.Keys.r = cjs.Keys.right = false
		cjs.Keys.u = cjs.Keys.up = false
		cjs.Keys.d = cjs.Keys.down = false
		$.kU('l', function () {
			if ($.test) {
				$l('left lifted')
			}
			cjs.Keys.l = cjs.Keys.left = false
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('l', function () {
			if ($.test) {
				$l('left pressed')
			}
			cjs.Keys.l = cjs.Keys.left = true
			cjs.Keys.dir = 'left'
		})
		$.kD('r', function () {
			if ($.test) {
				$l('right pressed')
			}
			cjs.Keys.r = cjs.Keys.right = true
			cjs.Keys.dir = 'right'
		})
		$.kU('r', function () {
			if ($.test) {
				$l('right lifted')
			}
			cjs.Keys.r = cjs.Keys.right = false
		})
		$.kD('u', function () {
			if ($.test) {
				$l('up pressed')
			}
			cjs.Keys.u = cjs.Keys.up = true
		})
		$.kU('u', function () {
			if ($.test) {
				$l('up lifted')
			}
			cjs.Keys.u = cjs.Keys.up = false
		})
		$.kD('d', function () {
			if ($.test) {
				$l('down pressed')
			}
			cjs.Keys.d = cjs.Keys.down = true
		})
		$.kU('d', function () {
			if ($.test) {
				$l('down lifted')
			}
			cjs.Keys.d = cjs.Keys.down = false
		})
	}
}