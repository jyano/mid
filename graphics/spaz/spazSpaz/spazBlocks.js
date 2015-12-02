_pre()

ART = function () {
	ob = {}
	ob.cirs = function () {
		w.i.cir('b', 800, 200, 150)
		h = w.i.h('+').cir({r: 100, c: 'b', C: 'X', l: 20, lf: 1}, [
				{x: 250, y: 300}, {x: 450, y: 300}, {x: 250, y: 500}
			])
	 
		w.i.cir()
		h = w.i.h().drag().lf({}).dc()
				.c('b', 'g', 10).lf({y2: 400})
				.dc(300, 300, 50)
		h.c('*').dc(100, 200, 50).dc(100, 250, 50)
		h.c('***').dc(200, 200, 50).dc(200, 250, 50)
		h.c({C: 'r'}).dc(300, 300, 50)
		h.cir({
			r: 50, x: 500, y: 200,
			C: ['y', 2],
			rf: {c1: 'u', c2: 'o', x1: 10, y1: 10, r2: 30}, //, y1:100,x2:100},
			rs: {c1: 'y', c2: 'u', x1: -20, y1: -20, r1: 40, r2: 40}
		})
	}
	ob.pols = function () {
		w.C('w')
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
		w.i.h(100, 100, '+').cir({c: 'x', r: 100})
		w.i.pol(100, 200, [[-100, -10], [0, 100], [100, 20]], 'r', 'w', 10, '+')
		w.i.pol(100, 100, [[-40, 40], [-40, -40], [40, -40], [40, 30]], 'b', 'w')
		w.i.pol(200, 200, [[-20, -80], [-100, -200], [100, 5]])
	}
	ob.strokeHandle = function () {
			w.cir({x: 500, y: 350, r: 100, c: 'b', C: 'z', l: 20}).stat()
			w.D(800, 350).cir({
				r: 100,
				c: 'y',
				C: 'z', l: 100})}
	W.btns(ob)
	TEXTBALLS = function () {
		W([400, 400], {}).C('w')._(function () {
			b = w.D(200, 200, 'b', 80)
			b.gx = b.gx || w.g.ct()
			b.gx.qB('chicks').rC().sXY(.1).Y(30)
			nice = w.i.T(0, 140, 'nice', 100, 'o')
			b.bS(nice)
		})
	}
}
DEV = function () {
	W([1200, 600, 1400, 800], {g: 50, t: 0}).stats()
	//  w.dr(100, 100, 100, 100, '-')
	//  w.dr(100, 200, 100, 100, '+')
	w.dl('r', 0, 100, 5000, 5000, '-')
	w.dl('p', 0, 200, 5000, 2000)
	w.dl('b', 0, 300, 5000, 3000, '+')
	wh = w.S(400, 350, 'w', [[300, 220, '-']])
	or = w.S(400, 200, 'o', 300, 50)
	pi = w.S(400, 500, 'x', 300, 50)
	y = w.ship(150, 200).damp(1, 10).rot(90).lD(0).rot(120).lV(1);
	w.track(y, 600, 300, '!')
	b = w.D(700, 200, 'b', 100)
	me = w.me()
}
TFS = TFSET = function () {
	W()._(function () {
		me = w.i.qB('me')
		me.drag()
		me.grow()
		i = w.i.qB('me').XY(200, 200)
		ball = w.ball()
		_.in(3, function () {
			w.C('b');
			ball.bS(i)
		})
		//  me.startMoving(10, 10)
		T.t(function () {
			iS = i.inStage()
			$l(iS)
		})
		b = w.i.qB('me')
		b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		//m = b.getMatrix()
		function tf(a, b, c, d, e, f, g, h, i) {
			return this.x = a || 0,
					this.y = b || 0,
					this.scaleX = null == c ? 1 : c,
					this.scaleY = null == d ? 1 : d,
					this.rotation = e || 0,
					this.skewX = f || 0,
					this.skewY = g || 0,
					this.regX = h || 0,
					this.regY = i || 0,
					this
		}
	})
}
SHOW = DOTS = SCALE = function () {
	W()
	r = 10
	w.y(200, 200)
	w.S(400, 300, 'r', 40);
	w.S(290, 350, 'b', 40);
	w.S(280, 220, 'y', 40)
	w.S(100, 100, 'r', 80, 80)
	bb = w.D(600, 400, 'o', 150, 150)
	bb.bS('me')//cant attach to above at the moment..
	b23 = w.D(400, 100)
	b23.rec('r', 20, 40, 0, 0, 180).fr(0).r(0)
	b23.rec('b', 20, 40, 0, 0, 90).fr(0).r(0)
	w.S(100, 200, 'b', 50).f().dot()
	w.S(100, 300, 'r', 80, 80)
			.f().dot().C('p').dot().C('x') //overwrites dot?
	T.t(function () {
		var p = bb.wP(80, -80)
		w.dot(p)
		bb.I(0, -200, p)
	})
	w.show(function () {
		var msg = 'num: ' + w.n()
		$l(msg)
		return msg
	})
}
ARMSEN = function () {
	W()
	b33 = w.D(500, 300, 'r', [[40], ['b', 30, 100, 'arm', '-']])
	w.b(function (cx) {
		if (cx.w('arm')) {
			b33.I(50, 50)
		}
		if (cx.w('arm', w.right)) {
			w.C($r())
		}
	})
	b3 = w.D(100, 100, 'b', [
		[40],
		[100, 200, 100],
		[50, 200],
		[200, 200, 300, 400]
	])
	_.in(2, function () {
		b3.fs(function (f) {
			f.sen(1)
			$l('shape type: ' + f.GetShape().m_type)
		})
	})
}
WVS = WORLDVERTS = function () {
	W()
	b = w.S(500, 200, 'o', [
		[[-100, 0], [0, -100], [100, 0]]
	]).rt(25)
	f = b.f()
	v = f.wV()
	w.S(400, 200, 'w', [v])
	_.e(v, function (v) {
		w.dot(v)
	})
	w.S(600, 200, [f.wV('+')])
}
GRAD = function () {
	ob = {}
	ob.linkedCirs= function () {
 
		h = w.i.h().dc(100, 100, 50)
		h1 = w.i.h(-100, -100, '+').c('b', 'r', 10)
		h1.dc(200, 200, 50)
		h1.dc(400, 200, 50)
		h1.dc(600, 200, 50)
		h1.dc(300, 300, 50)
		h1.c('r', 'b', 30).dc(400, 400, 50).dc(500, 500, 50).f().dc(600, 600, 50)
		
	}
	ob.candy=function(){
		//the most beautiful orange candy ball!!
		// linear stroke, radial fill !!! and orange :)
		w.i.h(200, 200, '+').cir({
			r: 50,
			C: ['y', 10],
			lf: {c1: 'u', c2: 'o', y1: 100, x2: 100},
			ls: {c1: 'u', c2: 'o'}
		})
		w.D(100, 100).cir({r: 35, lf: {c1: 'o', c2: 'y'}})
	}
	ob.mick = function () {
		w.mick(700, 100, {c1: 'b', c2: 'X'})
		w.mick(700, 300, {c2: 'b'})
		w.mick(100, 100, {y2: 10})
		w.mick(100, 200, {y2: 200})
		w.mick(100, 300, {x2: 100})
		b = w.D(300, 200)
		b.cir({r: 50, x: 0, y: 0, lf: {c1: 'o', c2: 'b', X1: 400}})
		b.cir({r: 100, x: 200, y: 0, lf: {c1: 'o', c2: 'b'}})
		b.cir({r: 100, x: 100, y: 100, lf: {c1: 'o', c2: 'b'}})
	}
	ob.greyScale= function () {
		
		w.i.h(1000, 300).pol({v: v1, lf: 1})
		w.bg.h(900, 300).pol({v: v1, rf: 1})
		w.D(600, 200).pol({v: verts, c: 'y', C: 'y', l: 5, rf: 1})
		w.D(700, 200).pol({v: verts, c: 'y', C: 'y', l: 5, lf: 1})
		function tween() {
			h = w.s.h()
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.c({l: 20, C: 0, ls: 1})
			h.dc(50).dc(200, 0, 100).dc(100, 100, 100)
			h.twL(
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200],
					[{r: 25}, 200], [{r: -25}, 400], [{r: 0}, 200])
			h.twL(
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200],
					[{sxy: 1.5}, 200], [{sxy: .5}, 400], [{sxy: 1}, 200]
			)
		}
		
		tween()
	}
	ob.tetris = function () {
		w.i.h(100, 100, '+')
				.c({l: 20, C: 'y', lf: {c1: 'b'}})
				.dc(100)
				.dr(300, 100)
		w.$h(200, 450, 'w', 20, '+')
				.lf({x: -100, c1: 'r', c2: 'y'})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		w.gx.ct(600, 200).rec(
				{w: 300, h: 200, c: 'r', C: 'o', l: 10, a: -5},
				{w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20})
				.rec({w: 100, h: 200, a: 20, c: 'b', C: 'w', l: 20}).XY(50, 50)// c: {l:20, C:'y'},, lf:{c1:'b',c2:'z'}  //lf:{c1:'r', c2:'b'}//lf:['r','b']//,  bf:1
		w.gx.ct(600, 450)
				.rec({w: 200, h: 100, c: 'r', C: 'o', l: 10, a: -5})
				.rec({w: 100, h: 200, c: 'r', C: 'o', l: 10, a: 5})
		w.$h(900, 200, '+').lf(['b', 'y'])
				.dr2({w: 200, h: 200})
		w.$h(900, 400, '+')
				.lf({c1: 'r', c2: 'y', x1: -100})
				.dr2({w: 300, h: 100, x: 0, y: -100}, {w: 100, h: 300})
		b = w.D(800, 300)
		b.rec({w: 250, h: 300, bm: 'me'})
		b.rec({w: 200, h: 200, lf: 1, l: 2})
		w.gx.rec(145, 120, 10, 80, 'o')
		w.$h(200, 200, '+')
				.rec(145, 120, 100, 200, 'u', 'y', 20)
	}
	ob.gradPoly = function () {
		//two ways to make the same thing
		lf = {c1: 'b', c2: 'o', y1: 200, y2: 700}
		v = [[300, 300], [320, 200], [640, 400], [280, 650]]
		w.bg.h().pol({lf: lf, v: v})
		w.bg.h(200, 0).lf(lf).mt(v)
	}
	W.btns(ob)
}
BMP = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	ob = {}
	
	
	ob.clouds = function () {
		//h.bf
		w.i.h(800, 100, '+')
				.bf('me', function (h) {
					h.dc(80).dc(90, 0, 68)
				})
		h = w.i.h(50, 200, '+')
		h.bf('chicks', function (h) {
			_h = h
			h.dc({r: 80}
					//, {r: 50, x: 100}, {r: 100, x: 400}
			)
		})
		w.I.h(200, 200, '+').bf('chicks').dc(100)
		w.timSnowman()
		 
	}
	
	ob.cubes = function () {
		w.D(600, 300, 'r', 400, 300)
				.bS(h = w.bg.h().al(.5).bf('sun'))
		h.rec({w: 400, h: 300})
		function bfr() {
			w.bfR(600, 300, 'guy', 100, 100, 'X')
			w.bfR(300, 300, 'sun', 100, 100, 'z')
			w.bfR(300, 300, 'chicks', 100, 100)
		}
		
		bfr()
	}
	ob.arrows = function () {
		w.p();
		//w.i.h(350, 150, '+').pol({v: v1, bf: 'me'})
		w.D(550, 200).pol({
			c: 'o', C: 'z', l: 25,
			bf: 'chicks',
			v: [[-100, 0], [0, -200], [100, -50], [0, -50]]
		})
		//h.bV //w.pol
		w.D(400, 500).pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]]})
		w.bg.Bm('me').sXY(6.2).X(500).al(.2)
		w.D(500, 400).pol({
			v: [[-100, 0], [0, -600], [100, -50], [0, -50]],
			c: 'X', C: 'r', l: 50, bf: 'me', bs: 'chicks'
		})
	
		boomerang()
		function boomerang(){
			w.i.h(350, 150, '+')
					.pol({v: v1, bf: 'me'})
			w.D(950, -200)
					.pol({c: 'o', C: 'z', l: 25, bm: 1, v: v1})
			w.D(500, 200)
					.pol({v: [[-100, 0], [0, -100], [100, -50], [0, -50]], c: 'y', C: 'r', l: 5, bm: 1})
		}
	}
	ob.gems = function () {
		w.i.h(400, 300, '+').bV({v: verts})
		w.D(800, 300).pol({
			v: verts,
			c: 'r', C: 'y', l: 10,
			bf: 'me'
		})
 
		w.timTrapezoid(200, 300)
	}
	ob.super=function(){
		h = w.i.h(100, 300, '+')
		h.bR({
			i: 'chicks',
			hs: [
				{w: 150, h: 500},
				{w: 150, h: 500, x: 200},
				{w: 150, h: 500, x: 400},
				{w: 150, h: 500, x: 600}
			]//, fn:function(){}
		})
		w.D(200, 160).cir(
				{r: 120, rf: {c1: 'r', c2: 'b'}},
				{r: 150, C: 'y', l: 2, bf: 'me'}
		)}
	ob.sensor = function () {
		w.D(300, 200)
				.cir(
				{r: 20},
				// {r:20, y:-20},
				// {r:20, x:20, lf:{ c1:'b' },y:30},
				// {x:50, s:1, rf:1},
				// {x:100,r:50,c:'r',C:'x',l:10, s:1},
				{y: -100, r: 50, bf: 'me'}
		)
		w.D(800, 300).cir({w: 50, h: 100, r: 50, bf: 'me'}, {r: 50, x: 100, lf: 1, l: 15},
				{w: 40, h: 40, x: 100, c: 'y'},
				{w: 40, h: 40, x: 200, c: 'b', C: 'o', l: 10},
				{w: 200, h: 20, y: 200, s: 1, lf: {c1: 'g', c2: 'y'}})
	}
	W.btns(ob)
}
BFCIR = CHICKBALLS = function () {
	W(1600, 1200)._(function () {
		_.t(14, function () {
			w.D(R(1100, 50), R(1100, 50))
					.cir({
						bf: 'chicks',
						r: R(180, 50)
					})
		})
		w.y()
		w.p()
	})
}
FXS = function () {
	ob = {}
	ob.norm = function () {
		w.i.autoClear = false
		w.D(800, 300, 'b', 10).d(1)
		w.D(800, 300, 'x', 10, 10).d(1)
		w.D(800, 300, 'b', 200).d(1)
		w.D(800, 300, 'x', 200, 200).d(1)
		w.D(800, 300, 'b', 100).d(1)
		w.D(800, 300, 'x', 100, 100).d(1)
	}
	ob.balls = function () {
		w.C('w')
		w.D(600, 300, 'y', 50, 10, 10, '-').
				rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
		w.D(600, 300, 'y', 50, 10, 10, '-')
				.cir({
					k: 'cir', r: 50, x: 200, y: -100,
					d: .2, b: .8, f: 100, c: 'x'
				})
	}
	ob.domi = function () {
		w.D(300, 500, 'r', 40, 200)
		l = w.D(380, 500, 'r', 40, 200)
		w.e$(function () {
			var b = this.B()
			if (b == l) {
				b.I(-10, 0, V(0, -50))
			}
			else {
				b.I(10, 0, V(0, -50))
			}
		})
	}
	ob.door = function () {
		
		//  w.D(100, 100, cjs.somePolyFixt)
		//  w.D(200, 100, cjs.compoundShape)
		// w.D(300, 100, cjs.compoundShape2 )
		// w.D(400, 100, cjs.compoundStar)
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	ob.cata = function () {
		b = w.D(800, 300)
		b.cir('r', 100)
		b.cir('b', 80, 0, -60)
		b.cir('g', 'w', 60, 0, -140)
		b.cir('*', '*', 20, 0, -140)
		b = w.D(300, 300)
		b.cir('o', 20)
		b.cir('b', 100, 140, 0)
		b.cir('r', 20, 100, 100)
		b.cir('b', 20)
		b.cir(20, 100, 100).C('r')
		w.D(600, 300, 'b', [['b', 50, 50, 50]])
				.cir({c: 'o', r: 50})
		w.D(600, 300, 'y', [['b', 50, 50, 50]])
				.cir({c: 'b', r: 50, x: 50})
	}
	ob.recs = function () {
		w.S(100, 200, 'r', 50, 50)
		w.S(200, 200, 'g', 80, 140, 30, 140, 25)
		w.S(500, 400, 'w', [
			[20, 20, -100, 50, 60],
			[100, 120, 0, 0, 100],
			[100, 20],
			[10, 300]])
		b = w.D(1000, 300)
		b.rec(100, 50)
		b.rec('z', 100, 50, -100, -100)
		b.rec('o', 100, 50, -100, 0, 25)
		b.rec('g', 100, 100)
		b.rec('y', 100, 100, 50, 50)
		b.rec('p', 100, 100, -150, -150, 45)
	}
	ob.cups = function (o) {
		b = w.D(280, 500, 'r', cup)
		w.D(600, 500, 'b', cup2)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.D(100, 100, 'o', 30)
		w.S(150, 220, 'u', 50, 100)
		TEMPLE = function () {
			b = w.S(600, 200)
			b.pol([-100, 0], [0, -100], [100, 0])
			b.rec(400, 20, 0, 0, 45)
			b.rec({x: 20, y: 300, w: 400, h: 20, lf: ['g', 'w']})
			b.cir({r: 50, lf: ['g', 'w']})
		}
		TEMPLE()
	}
	ob.radio = function () {
		w.S(50, 50, 'x', 20).d(.1)
		y = w.y(1000, 400, '+')
		w.S(400, 200, 10)
		_.t(10, function () {
			w.D(700, 300, 'r', [[7]])
		})
		b = w.D(200, 300, 'z', 10)
		b.cir({r: 100, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'o', C: 'x'})
		b.cir({x: 200, y: 100, c: 'r', C: 'w'})
	}
	ob.puz = function () {
		w.ship().tr()
		_.t(10, function () {
			w.D(400, 400, [
				['r', 20, 0, 0],
				['b', 20, 100, 0],
				['y', 20, 0, 100]
			])
		})
	}
	ob.cirSensor = function () {
		function hologram() {
			b = w.D(30, 40)
			b.cir({r: 100, c: 'w', rg: 1})
			b.cir({r: 100, x: 500, c: 'w', lg: 1, s: 1})
			r = w.S(600, 300, 'r', 12, '-')
			r.cir('b', 30, 100, 200, '-')
			r.cir({c: 'g', r: 30, x: 100, s: 1}, '-')
			r.cir({c: 'w', r: 30})
			r.cir({c: 'z', y: -100})
			r.cir(['y', 30, 200, 100])
		}
		
		hologram()
		w.orangeBumps()
		//body with 1 cir
		w.D(500, 400, {r: 100, c: 'y', t: 'c'})
		//body with 3 cirs
		b = w.D(300, 400, [['b', 50, 50, 0, '-'], ['y', 50]])
		b.cir({r: 20, x: 100, c: 'w', lg: 1, s: 1, t: 'c'})
	}
	ob.recSensor = function () {
		x = w.S().stat()
		x.rec(400, 20)
		f = x.rec('b', 400, 20, 0, -100, 18).C('b')
		w.dot(700, 400)
		r = x.f('w', 100, 100, 100, 100)
		x.rec({x: 200, y: -100, w: 400, h: 20, c: 'y', C: 'x'})
		w.S(500, 400, 'b', 20, 200, '-')
		more()
		function more() {
			
			//simple off-cir-sen
			w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
			//simple off-rec-sen
			w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		}
		
		sensBalls()
		function sensBalls() {
			w.S(600, 600, 'g', 20, 1000)
			w.D(100, 400, 'z', [
				[50],
				[10, 300, '-']])
			w.D(700, 400, 'y', [
				[50],
				['r', 10, 300, '-'],
				['o', 50, 100, 0]])
		}
	}
	ob.polySensor = function () {
		
		
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
	}
	W.btns(ob)
}


POL = function () {
	ob = {}
	ob.simp = function () {
		
		//$.rulers()
		//simple off-cir-sen
		w.D(600, 300, 'y', 50, 10, 10, '-').cir(15)
		//simple off-rec-sen
		w.S(600, 300, 'o', 50, 200, 10, 10, 45, '-').cir(15)
		//simple pol-sen
		w.D(200, 300, 'x', [-100, 0], [0, -100], [100, 30], '-').cir(15)
		w.D(200, 200, 'y', 10, 20).pol()
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
		w.D(400, 500, 'o', [['w', [30, 30], [20, 40], [10, 10]]]).pol([-100, 0], [0, -100], [100, 40])//.C('g')
		b = w.D(100, 300)
		b.pol({
			s: 1, c: 'o', C: 'y',
			v: [[-200, -100], [0, -200], [100, -100]]
		})
		b.pol({
			c: 'y', C: 'o',
			v: [[-100, 0], [0, -200], [100, 20], [0, -150]]
		})
	}
	
	ob.origami = function () {
		b = w.D(400, 400)
		b.pol([-300, 0], [0, -100], [10, 150])
		b.pol('y', [[-10, 0], [0, -100], [100, -50]])
		b.pol([[-200, 0], [0, -100], [10, 150]])
		b.pol({
			c: 'r', v: [
				[-100, 0],
				[0, -100],
				[100, -50]
			]
		})
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		moo()
		function moo() {
			b = w.D(400, 400)
			b.pol('o', [-300, 0], [0, -100], [10, 150])
			b.pol('y', [[-10, 0], [0, -100], [100, -50]])
			b.pol(['b', [-200, 0], [0, -100], [10, 150]])
			b.pol({
				c: 'r', v: [
					[-100, 0],
					[0, -100],
					[100, -50]
				]
			})
		}
	}
	ob.boat = function () {
		b = w.D(300, 300).fixRot()
		b.pol('g', [[0, 0], [0, -200], [100, 0]])
		b.pol('b', [[0, 30], [-300, -20], [100, 0]])
		b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		b2 = w.D(300, 300)
		b2.pol('r', [[0, 0], [0, -20], [10, 0]])
		b2.pol([[0, 30], [-30, -20], [10, 0]])
		boat2()
		function boat2() {
			b = w.D(300, 300).fixRot()
			b.pol('g', [[0, 0], [0, -200], [100, 0]])
			b.pol('b', [[0, 30], [-300, -20], [100, 0]])
			b.pol('p', [[0, 30], [-30, -20], [10, 0]])
		}
	}
	ob.diagnal = function () {
		w.pol(400, 500, [[-100, 0], [0, -100], [100, -50], [0, -50]])
	}
	ob.triangles = function () {
		w.D(500, 430).pol('r', [[-100, 0], [0, -20], [40, 50]])
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		w.D(600, 300).pol('r', [[-100, 0], [0, -100], [200, 50]])
		w.D(800, 200).pol('b', [-100, 0], [0, -100], [200, 50])
		w.D(200, 200, 'y', 10, 20).pol({c: 'r'})
		w.D(600, 300, 'b', [
			[[-100, -20], [0, -100], [10, 10]]
		])
		w.D(400, 400, 'p', [-100, 0], [0, -100], [100, -20]) //pass in points alone !!!!
		w.S(500, 200, 'b', [-100, 0], [0, -100], [100, -20])
		w.S(200, 200, 'o', [[[-100, 0], [0, -100], [100, -20]]])
		w.S(300, 300, 'w', [-100, 0], [0, -100], [100, -20], '-')
	}
	ob.tan = function () {
		w.D(300, 300, 't', 56, 56).rot(45).d(1).damp(1000, 1000)
		w.D(280, 260).rot(90).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(342, 321).den(1).damp(1000, 1000)
				.pol([V(-40, 20), V(0, -20), V(40, 20)])
		w.D(304, 220).rot(180).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(346, 262).damp(1000, 1000).rot(270).den(1).damp(1000, 1000)
				.pol([V(-80, 40), V(0, -40), V(80, 40)])
		w.D(237, 324).den(1).damp(1000, 1000)
				.pol([V(-56, 28), V(0, -28), V(56, 28)])
		w.D(240, 267).den(1).damp(1000, 1000)
				.pol([V(-90, 20), V(-45, -20), V(45, -20), V(0, 20)])
		w.e(function (b) {
			// b.stat()
		})
	}
	ob.bed = function () {
		w.D(400, 100, 'y', guyInBed)
		w.D(100, 100, 'r', [
			[guyInBed]
		])
		w.D(600, 300, 'b', [
			[guyInBed],
			['w', dick]
		])
		w.D(400, 100, guyInBed)
		_.t(15, function (i) {
			w.D(100 + (i * 60), 300, pin)
		})
	}
	ob.drones = function () {
		w.ball()
		b = w.S(400, 300)
		b.f('o', 50)
		b.f('r', 50, 50)
		b.f('b', 50, 50, 50)
		b.f('g', 50, 50, 50, 50)
		b.f('w', 50, 50, 50, 50, 50)
		b.f('u', [-100, 0], [0, -50], [200, -10])
		w.D(600, 300).f([
			['o', 50],
			['r', 50, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300).f('y', [
			[50],
			['r', 250, 50],
			['b', 50, 50, 50],
			['g', 50, 50, 50, 50],
			['w', 50, 50, 50, 50, 50],
			['u', [-100, 0], [0, -50], [200, -10]]])
		w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
		w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
	}
	ob.poly = function () {
		w.D(500, 400, [-100, 0], [0, -100], [100, 50], [0, -70])
		w.D(200, 300).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bm: 1
		})
		b2d.somePolyFixt = [
			[
				[-100, 0], [0, -100],
				[100, 0], [60, 50]]]
		w.D(100, 100, b2d.somePolyFixt)
		b3 = w.D(300, 300)
		b3.pol('g', [[-150, 0], [-120, -20], [-80, -50], [0, -30]])
		b3.pol('r', [[-30, 0], [0, -30], [40, -20]])
		b3.pol('o', [[-30, -30], [-20, -50], [10, -20]])
		w.D(400, 400, [
			['b', 30],
			['y', [-100, 0], [0, -100], [100, -20], [50, 20]]])
	}
	ob.turtles = function () {
		w.P()
		// y.thr()
		//turtle
		w.D(600, 280, [
			['b', 700, 40, 0, -100],
			['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
			['y', [10, -10], [20, -30], [50, -15], [45, -5]],
			['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
			['y', [-10, 10], [-10, -10], [0, -10], [0, 10]]
		])
		//, ['x', 10, 55,-12, '-'], ['u', 30,40, 75,-12 ,'-']
		w.verts = function (x, y, arrs) {
			var w = this
			var b = w.D(x, y)
			_.e(arrs, function (f) {
				b.pol(f)
			})
			return b
		}
		w.verts(400, 280, turtle)
		w.vertsKin = function (x, y, arrs) {
			var w = this,
					b = w.S(x, y)//Kin
			_.e(arrs, function (g) {
				b.pol(g[0], _.r(g))
			})
			return b
		}
		p.track()
		t = w.vertsKin(400, 570, turtle).fR()
		t2 = w.vertsKin(700, 570, turtle2)
		_.ev(1, function () {
			//t2.lV(5,0)
			_.in(1, function () {
				$l('ok')
				// p.lV(-500,500)
				p.I(-5000, 500)
			})
		})
	}
	ob.birds = function () {
		_.t(20, thing)
		function thing() {
			w.D(R(600), R(300, 200), [
				['p', [-20, -20], [0, -30], [10, 10]],
				['n', [0, 0], [30, -50], [50, -10]]
			])
		}
	}
	W.btns(ob)
}
BPL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 200).pol(vs1)
}
BPOL = function () {
	W()
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
	w.D(200, 400).pol(vs1)
	w.D(800, 400).pol($pD(vs1))
	w.D(800, 400).pol('o', $pD(vs1))
	w.D(500, 400).pol({vs: vs1, c: 'r'})
	w.D(800, 400).pol({vs: $pD(vs1), c: 'b'})
}
BALLS = function () {
	W([1200, 600, 2400, 600], {g: 10}).y('+')
	_.t(10, function (i) {
		w.D(100 + i * 100, 100)
				.cir({
					r: 35,
					lf: {c1: '*', c2: '*'}
				}).d(.1)
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
	})
	_.t10(function (i) {
		w.D(100 + i * 100, 100).cir({
			r: 20,
			lf: 1
		}).d(.1)
		w.S(100 + i * 140, 160).cir({
			r: 50,
			rf: {c1: '*', c2: '*'}
		}).d(.1)
	})
}
TURTS = function () {
	W([1200, 600, 2400, 600], {g: 10})
	turtle = [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12],
		['u', 30, 40, 75, -12]
	]
	w.D(400, 280, turtle, '-')  //this changes the data object for future uses !!!
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-'],
		['u', 30, 40, 75, -12, '-']
	])
	w.D(600, 280, [
		['g', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]],
		['y', [10, -10], [20, -30], [50, -15], [45, -5]],
		['y', [-50, 10], [-50, -10], [-40, -10], [-40, 10]],
		['y', [-10, 10], [-10, -10], [0, -10], [0, 10]],
		['x', 10, 55, -12, '-']
	])
	w.D(600, 280, [
		['x', 300, 20],
		['u', 30, 40, '-'],
		['p', 40, 10, 10]
	])
}
BMRECS = function () {
	W()
	w.i.h(200, 300).dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
	})
	w.i.h().dg().bf('me', function (h) {
		h.rec({w: 500, h: 200})
		w.D(600, 300, 'b', 500, 200).bS(h)
	})
}
W.btns = function (btns) {
	W()
	$BoxBtns = function (btns) {
		var d = $.div('b').H(200).abs().A().drag().al(.3)
		d.XY(200, 640)
		d.fontSize(40)
		d.css('color', 'white')
		_.e(btns, function (fn, text) {
			d.A($BoxBtn(text, fn))
		})
		return d
	}
	function $BoxBtn(txt, fn) {
		var bt = $.sp().C('z').XY(100, 40).css('margin', 20)
		bt.A(txt)
		bt.$($BoxBtnFn(fn, btns))
		return bt
	}
	
	$BoxBtns(btns)
}
function $BoxBtnFn(fn, btns) {
	return function () {
		W()
		y = w.y().tr()
		$BoxBtns(btns)
		F(Q) ? w._(fn) : fn()
	}
}
function _pre() {
	cup = [
		[20, 20],
		[100, 40, 0, 40, 0],
		[200, 40, -80, -40, 260],
		[200, 40, 80, -40, -80]
	]
	cup2 = [
		[100, 40, 0, 40, 0],
		['g', 200, 40, -80, -40, 260],
		['g', 200, 40, 80, -40, -80],
		[100]
	]
	cup3 = [
		[100, 40, 0, 40, 0],
		[200, 40, -80, -40, 260],
		[200, 40, 80, -40, -80],
		[34, -80, -130],
		[34, 80, -130]
	]
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	w.tit = function (x, y) {
		var w = this
		return w.i.h(x, y).rf('d', 'o', 10, 100).dc(100)
	}
	w.mick = function (x, y, lf) {
		var w = this
		var g = G(arguments)
		var h = w.i.h(x, y, '+')
		h.c({l: 20, C: 0, lf: lf || 1})
		h.dc(50)
		h.dc(200, 0, 100)
		h.dc(100, 100, 100)
		return h
	}
	ADV = function () {
		ob = {}
		ob.QUERY = function () {
			W().Y()
			w.dot(600, 300)
			w.S(200, 300, 'b', 100).$(function () {
				this.C('***')
			})
			w.S(200, 500, 'g', 100).K('g').cir({x: 100, r: 80, c: 'r'}).$(function () {
				this.C('w')
			})
			w.D(1100, 500, 'o', 80).d(.1).$(function () {
				this.B().I(100, -2000)
			})
			w.S(600, 400, 'b', 100, 300)
			w.S(800, 400, [['b', 100], ['o', 200, 100]]).f().$(function () {
				this.kill()
			})
			w.e('g', function (b) {
				b.$$(function () {
					this.B().C('z');
					this.C('w')
				})
			})
			_.in(function () {
				w.q(600, 300, function (f) {
					f.C('r')
				})
			})
			w.$(function (o) {
				w.ball({x: o.x, y: o.y, r: 8})
			})
			w.$$(function (o) {
				w.S(o.x, o.y, 'x', [[20, 10]])
			})
			w.e$(function (o) {
				this.C('y');
				$l('mass: ' + this.B().mass().toFixed(3))
			})
		}
		ob.CLONE = function () {
			b2d.Common.Math.b2Transform.prototype.toArr = function () {
				var tf = this,
						pos = tf.position,
						R = tf.R,
						col1 = R.col1,
						col2 = R.col2
				return [pos.x, pos.y, col1.x, col1.y, col2.x, col2.y]
			}
			W().Y().P().P().P()
			var tf = null
			b = w.D(100, 100, 'b', 100, 200)
			b2 = w.D(900, 200, 'p', 100, 150)
			T.t(function () {
				var trf
				trf = b.transform().toArr()
				if (tf) {
					b2.SetTransform(b2d.tf(tf))
				}
				_.in(1, function () {
					tf = trf
				})
			})
			b1 = w.D(400, 400, 'x', [
				[100, 100, 10], [100, 200],
				['y', 20, 0, 100],
				['b', 20, 0, -100],
				['g', 20, 200, 0]])
			_.in(1, cl);
			//_.ev(10, cl);
			function cl() {
				c = b1.X(300, '+').I(100000, -1000).clone()
			}
		}
		ob.FORCES = function () {
			W({g: 50})
			//dummy
			w.ball()
			//linVel
			_.t(3, function () {
				w.D(300, 300, 'y', 20).K('lV')
			})
			_.ev(1, function () {
				w.e('lV', function (b) {
					b.lV(0, 20)
				})
			})
			//F('+') <-constant
			w.D(100, 100, 'o', 10).F(40, -60, '+')
			b = w.D(300, 500, 'z', 30, 80).rot(1).fixRot()
			t = {
				i: function () {
					b.I(V(10, -30), b.wC())
				},
				v: function () {
					b.lV(10, -60)
				},
				f: function () {
					cjs.t(function () {
						b.F(V(0, -3), b.wC())
					})
				}
			}
		}
		ob.DENROT = function () {
			W(0) //w=b2d.m({g:0})
//by default, bodies have density = 0
//bodies cannot rotate by force, if their density is 0
//so by default, bodies wont rotate!!!! but still some mass
//can even change its density to 0, to suddenly freeze it...
			//something weird.. if it was already rotating it keeps rotating, and i think its rotation is affected by forces of others..
			//however others don't rot in response (assuming they also have den-0).  then once it stops rotating, switches back to frozen again?? hmmm.. maybe the rotation is affected only by friction/damping.. and the forces only change its x/y?  test it...
			r = w.D(300, 300, 'y', 400, 20).bo(.5)
			r2 = w.D(300, 300, 'w', 400, 10)
			r3 = w.D(300, 300, 'w', 400, 10)
			r4 = w.D(300, 300, 'w', 400, 10)
			r5 = w.D(300, 300, 'w', 400, 10)
			flipDen = function (r) {
				var d = r.den()
				if (d == 0) {
					r.den(1)
				} else {
					r.den(0)
				}
			}
			flipStage = function () {
				if (w.s.X() == 0 && w.s.Y() == 0) {
					w.s.XY(10000, 10000)
				}
				else {
					w.s.XY(0, 0)
				}
			}
			flipStage()
			_.ev(6, function () {
				flipDen(r);
				flipDen(r2);
				flipDen(r3);
				flipStage()
			})
		}
	}
	MJT = function () {
		ob = {
			STACK: function () {
				W({m: 'ball', w: 0})
				w.S(500, 600, 'y', 1000, 20)
				b = w.D(500, 200, 'o', 40).K('ball')
				w.boxesStat([350, 260, 880, 30])
				w.D(310, 120, 't', 60, 60)
				w.D(320, 120, 't', 60, 60)
				w.D(340, 120, 't', 60, 60)
				w.D(350, 120, 't', 60, 60)
				w.D(370, 120, 't', 60, 60)
				w.D(380, 120, 't', 60, 60)
				w.D(550, 120, 't', 60, 60)
				w.D(570, 120, 't', 60, 60)
				w.D(580, 120, 't', 60, 60)
				w.S(1000, 400, 'x', 200, 200)
				w.S(1200, 200, 'x', 200, 200)
			},
			MJJ: function () {
				W([1200, 600, 2400, 600], {g: 10, m: 'm'}).Y('+')
				w.D(100, 200, 'y', 150, 100).K('imp')
				w.D(500, 400, 'y', 50, 100).K('imp')
				w.D(300, 400, 'r', 50, 50);
				w.D(800, 400, 'r', 50, 50);
				w.D(1200, 400, 'r', 50, 50);
				w.D(1600, 400, 'b', 100, 100).K('m')
				w.e$('imp', function () {
					this.B().I(0, -50)
				})  // w.e('imp', function(b){b.$(function(){ this.B().I(0,-50) }) })
			}
		}
		W.btns(ob)
	}
	$$FLYBOX = function (fn) {
		W(800, 700, 900, 700)._(function () {
			w.y().tr()
			fn()
		})
	}
	w.timTrapezoid = function (x, y) {
		var w = this
		return w.D(x, y).pol({
			v: [[0, 100], [0, -100], [200, -150], [200, 150]],
			c: 'y', C: 'w', l: 5,
			bf: 'guy'
		})
	}
	w.timSnowman = function () {
		var w = this
		var h = w.i.h(300, 300, '+').bf('guy')
		h.dc(100)
		h.dc(20, -220, 50)
		h.dc(20, -120, 90)
		return h
	}
	w.orangeBumps = function () {
		var w = this
		w.i.cir(100, 100, 10, 'r', 'y')
		w.S(300, 300, 'o', 10)
		w.S(430, 300, 'o', 10)
		w.S(300, 370, 'o', 10)
		w.S(210, 320, 'o', 10)
		return w
	}
	function test() {
		CNC = function () {
			w = {W: 1200, H: 600}
			w.I = $St('z', w.W, w.H, 0, 0).t()
			w.s = $St('X', w.W, w.H, 0, 0).t()//.aC(0)
			w.canvas = w.s.canvas
			w.can = $(w.canvas)
			w.ctx = w.can.ctx('2d')
			w.bg = w.s.ct();
			w.g = w.s.ct();
			w.fg = w.s.ct()
			w.i = $St('b', w.W, w.H, 0, 0).t()
			/*
			 ii = w.I
			 s= w.s
			 bg= w.bg
			 g= w.g
			 fg= w.fg
			 i= w.i
			 */
			_.in(1, function () {
				w.i.bm('me', '+')
			})
		}
	}
	
	LVR = LEFTOVER = function () {
		w.bg.bm('me', 6.2, function (bm) {
			bm.X(500)
		})
// b.cir({k: 'cir', r: 50, x: 200, y: -100, d: .2, b: .8, f: 100, c: 'x'})
// b.rec({x: 100, y: 100, w: 10, h: 100, c: 'x'})
// w.D(400,500,'o',[['w',[30,30],[20,40],[10,10]]]).pol([-100, 0], [0,-100], [100, 40]).C('g')
//	_.in(4, function(){w.s.al(0)})
	}
	function uncaughtAssertion() {
		SIF2 = function () {
			W()
			b2d.somePolyFixt = [
				[
					[-100, 0], [0, -100],
					[100, 0], [60, 50]]]
			b2d.compoundShape = [
				[50, 10],
				[60, 30, 0, 0, 40],
				[120, 30, 0, 0, 29],
				[60, 10, 0, 50, 60],
				[84, 10, 15, 80, -120]
			]
			b2d.compoundShape2 = [
				[50, 10],
				[20, 20],
				[20, 10, 0, 0, 10],
				[40, 10, 50, 0, 45],
				[84, 10, 15, 80, -120],
				[60, 10, 0, 50, 60]
			]
			b2d.compoundStar = [
				[10, 10],
				[20],
				[4, 80, 10, 30, 135],
				[4, 80, 0, 0, 45],
				[4, 80, 100, 0, 90],
				[4, 80, 0, 0, 180]
			]
			w.D(100, 100, b2d.somePolyFixt)
			w.D(200, 100, b2d.compoundShape)
			w.D(300, 100, b2d.compoundShape2)
			w.D(400, 100, b2d.compoundStar)
			w.D(600, 300, 'b', 200, 100).cir('z', 10, 40, 50)
			w.D(600, 300, 'z', [[200, 100], ['o', 10, 40, 50]])
		}
		STAR = function () {
			W()
			b2d.compoundStar = [
				[10, 10],
				[20],
				[4, 80, 10, 30, 135],
				[4, 80, 0, 0, 45],
				[4, 80, 100, 0, 90],
				[4, 80, 0, 0, 180]
			]
			w.D(400, 100, b2d.compoundStar)
		}
		MO5 = function () {
			W()
			b2d.compoundShape = [
				[50, 10],
				[60, 30, 0, 0, 40],
				[120, 30, 0, 0, 29],
				[60, 10, 0, 50, 60],
				[84, 10, 15, 80, -120]
			]
			w.D(200, 100, b2d.compoundShape)
			b2d.compoundShape2 = [
				[50, 10],
				[20, 20],
				[20, 10, 0, 0, 10],
				[40, 10, 50, 0, 45],
				[84, 10, 15, 80, -120],
				[60, 10, 0, 50, 60]
			]
			w.D(300, 100, b2d.compoundShape2)
		}
	}
}
BAD = function () {
	ob = {}
	ob.test = function () {
		ii = w.I = $St('z', w.W, w.H, 0, 0).t()
		s = w.s = $St('X', w.W, w.H, 0, 0).t()
		w.canvas = w.s.canvas
		w.can = $(w.canvas)
		w.ctx = w.can.ctx('2d')
		bg = w.bg = w.s.ct()
		g = w.g = w.s.ct()
		fg = w.fg = w.s.ct()
		i = w.i = $St('X', w.W, w.H, 0, 0).t()
		g.bm('me', function (bb) {
			b = bb.drag()
		})
		i.bm('me', function (bb) {
			b = bb.drag()
		})
	}
	ob.me=function () {
		
		//cjs.me=function(fn){Q(['me'], function(q){fn(q.getResult('me'))})}
		cjs.me(function (i) {
			h.c({
				l: 200,
				rf: ['w', 'u', 800],
				rs: {c1: 'w', c2: 'x', r2: 800}
			}).dc({x: 0, y: 0, r: 200})
			s.h().c({
				l: 200,
				lf: {c1: 'w', c2: 'u', y2: 200},
				ls: {c1: 'u', c2: 'w', s1: 0, s2: 1, x1: 0, y1: 0, x2: 0, y2: 200}
			}).dc({x: 0, y: 0, r: 200}).drag()
			s.h().lf('y', 'r', 10).dc({r: 200}).c({
				l: 0,
				c: 'y',
				//lf: {c1:'u',c2:'w',s1:0,s2:1,x1:0, y1:0,x2:0,y2:200},
				bs: i, bf: i
			}).dc({r: 200}).drag()
			s.h(40, 10, 'b', 8).rf({c1: 'r', c2: 'd', r2: 100}).dc(0, 50, 40).drag()
		})
	}
	ob.alpha = function () {
		h = w.i.h(50, 200, '+')
		h.bC({
			hs: [{r: 80}, {r: 50, x: 100},
				{r: 100, x: 400}]
		})
	}
	ob.tits = function () {
		_.t(8, function () {
			w.tit(R(200, 300), R(200, 100))
		})
		o = {c1: 'b', c2: 'o', x1: 0, y1: 0, r1: 10, x2: 0, y2: 0, r2: 100}
		h = $h(300, 300).a2(s).al(.8).rf(o).dc(100).drag()
	}
	ob.tits2 = function () {
		/*
		 _.evx(.1, function(){
		 o.r1++;o.r2++;o.x1--
		 h.rf(o).dc(100)})
		 //*/
		$h(500, 100).a2(s).rf('r', 'y',
				100, 100, 0,
				100, 100, 50
		).dc(50, 50, 100).drag()
	}
	ob['h.bR({hS:})'] = function () {
		b = w.D(600, 300, 'r', 100, 300)
		h = w.i.h().bR({hs: [{w: 100, h: 300}]})
		b.bS(h)
	}
	ob.shapes=function(){
		h1 = w.i.h('+').cir({
			C: 'X',
			lf: {X1: 650, X2: 220, Y1: 950, Y2: 520},
			r: 100
		}, [{x: 750, y: 300}, {x: 950, y: 300}, {x: 750, y: 500}])}
	ob.rs3 = function () {
		w.bmR(600, 300, 'b', 100, 300)
		w.bmR(300, 300, 100, 300)
	}
	W.btns(ob)
}
META = function () {
	W([800, 600], {w: 'L'}).C('w')._(function () {
		$.rulers()
		//initial me
		p = w.p(200, 200, 5).stat()
		//initial balls
		_.t(5, function Ball() {
			w.D(R(200, 50), R(-100), $r(), 30)
		})
		_.ev(3, MetaBall)
	})
	function MetaBall() {
		var b = w.D(400, 400, 'b', 80)
		b.$h('x', 'X', 1).c('x', 'X', 1).bf(
				w.s.cv0,
				cjs.m2d(.6, .1, .1, .6, -40, 180)
		).cir(80)
	}
}
polData()
function polData(){
	turtle2 = [['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]], ['yellow', [-60, -30], [-50, -60], [-20, -45], [-15, -35]], ['yellow', [-50, 10], [-50, -10], [-40, -10], [-40, 10]], ['yellow', [-10, 10], [-10, -10], [0, -10], [0, 10]]]
	dick = [
		[50, 300, 0, -100],
		[50, 100, 150],
		[50, -100, 150]
	]
	guyInBed = [
		[30],
		[20, 30, 30],
		[100, 30]
	]
	cjs.somePolyFixt = [
		[
			[-100, 0], [0, -100],
			[100, 0], [60, 50]]]
	cjs.compoundShape = [
		[50, 10],
		[60, 30, 0, 0, 40],
		[120, 30, 0, 0, 29],
		[60, 10, 0, 50, 60],
		[84, 10, 15, 80, -120]
	]
	cjs.compoundShape2 = [
		[50, 10],
		[20, 20],
		[20, 10, 0, 0, 10],
		[40, 10, 50, 0, 45],
		[84, 10, 15, 80, -120],
		[60, 10, 0, 50, 60]
	]
	cjs.compoundStar = [
		[10, 10],
		[20],
		[4, 80, 10, 30, 135],
		[4, 80, 0, 0, 45],
		[4, 80, 100, 0, 90],
		[4, 80, 0, 0, 180]
	]
	v1 = [[-100, 0], [0, -100], [100, -50], [0, -50]]
	turtle = [
		['green', [0, 0], [-50, -10], [-40, -20], [0, -40], [20, -10]]
		, ['yellow', [10, -10], [20, -30], [50, -15], [45, -5]]
		, ['yellow',
			[-50, 10], [-50, -10], [-40, -10], [-40, 10]
		]
		, ['yellow',
			[-10, 10], [-10, -10], [0, -10], [0, 10]
		]
	]
	pin = [
		['o', [-20, 20], [0, -80], [20, 20], [0, -40]],
		['w', 8, 0, -75],
		['w', 8, -20, 20],
		['w', 8, 20, 20]
	]
	p1 = [[-50, 50], [-50, -50], [50, -50], [50, 50]]
	p2 = [[-100, 0], [-100, -100], [0, -100], [0, 0], [-98, 2]]
	vs1 = [
		[61, 68],
		[145, 122],
		[186, 94],
		[224, 135],
		[204, 211],
		[105, 200],
		[141, 163],
		[48, 139],
		[74, 117]
	]
}
function edge() {
	ASEDG = function () {
		W().C('z')
		w.edg(100, 500, 1000, 0)
		w.edg(50, 50, 100, 500)
		w.edg(0, 0, 1000, 100)
		w.D(410, 100, 'w', 30)
		// w.p(300,200,'standard')
	}
	HILLS = function () {
		W().P()
		w.edg(100, 100, 500, 300)
		w.edg(100, 200, 500, 400)
		w.edg(100, 300, 500, 500)
		w.edg(1000, 100, 600, 300)
		w.edg(1000, 200, 600, 400)
		w.edg(1000, 300, 600, 500)
		w.D(410, 100, 'r', 20)
	}
	CONEDGE = WORLDCLICK = WELDEDGE = function () {
		W([1200, 600, 2400, 600], {g: 10}).C('r')
		w.Y(450, 400)
		w.edgs([
			[100, 300], [500, 500], [600, 400], [300, 250], [100, 300]
		])
		x = w.edgAr([400, 400, 500, 200],
				[500, 200, 550, 600],
				[550, 600, 400, 400]).X(1200).track()
		w.D(700, 350, 'b', 20)
		w.D(700, 350, 'r', 20)
		w.D(700, 350, 'y', 20)
		w.$(function (x, y) {
			var v = w.sToW(x, y)
			w.S(v.x, v.y, 'z', [[10, 10, '-']])
		})
		// cjs.t(function(){$l(w.mx + ', ' + w.my) })
	}
	DRAWEDG1 = function () {
		W();
		var p1, p2, d, l
		w.p(400, 100);
		w.S(200, 200, 'r', 400, 20)
		w.$(function (v) {
			if (!p1) {
				p1 = v;
				return
			}
			if (!p2) {
				p2 = v
			} else {
				p1 = p2;
				p2 = v
			}
			w.edg(p1.x, p1.y, p2.x, p2.y).K('line')
			w.rC(function (f) {
				f.B().dot()
			}, p1, p2)
		})
	}
}