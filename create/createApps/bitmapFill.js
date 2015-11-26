 

  
BMCR = function () {
	$St()._(function (st) {
		h = st.h('+')
		h.bC({
			circs: [
				{x: 200, y: 100, r: 150},
				{r: 100}, {x: 300}
			]
		})
	})
}

TXB = function () {
	$St()._(function (st) {
		h = st.h('+')
		h._bfT(Q.i('me'), -100)
		h.dr(0, 0, 500, 200).dr(100, 100, 500, 200).C('z').dr(0, 0, 40, 40)
	})
}
BMFV = function () {
	Q(function () {
		__St()
		im = Q.i('me')
		$im = $(im).A()
		h.bf(im)
		h.cir({x: 40, y: 289, r: 100})
		h.mt(vs1)
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		])//.cp()
		h.mt([
			[750, 20],
			[900, 100], [900, 300], [700, 120]
		], 50, 200)//.cp()
		h.mt([
			[550, 20],
			[800, 100], [700, 300], [500, 120]
		], 0, 50)//.cp()
		h.cir({
			x: 550, y: 20, r: 20, c: 'b'
		})
		h.cir({
			x: 800, y: 100, r: 30, c: 'b'
		})
		h.cir({
			x: 700, y: 300, r: 20, c: 'g'
		})
		h.cir({
			x: 500, y: 120, r: 30, c: 'g'
		})
	})
}
POLLL = function () {
	verts = [
		[[5, 100], [0, -100], [200, -150], [200, 150]],
		[[-50, 50], [-50, -100], [450, -50], [450, 50]]
	]
	W()._(function (w) {
		w.D(250, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'chicks'
		})
		w.D(450, 300).pol({
			v: verts,
			c: {c: 'r', C: 'y', l: 10},
			bf: 'me'
		})
	})
}
POLLB = function () {
	W()._(function (w) {
		v = [[[5, 100], [0, -100], [200, -150], [200, 150]], [[-50, 50], [-50, -100], [450, -50], [450, 50]]]
		w.D(250, 300).pol({
			//c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('chicks'),
			v: v
		})
		w.D(450, 300).pol({
			v: v,
			c: {c: 'r', C: 'y', l: 10},
			bf: Q.i('me')
		})
	})
}
SAND = function () {
	Q(function () {
		__St()
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function () {
			return st.h('+').l(20).bf(ch).bs(me)
		}
		Ch().rec(200, 200, 200, 300)
		Ch().rec(400, 250, 200, 300)
		Ch().rec(600, 250, 200, 300)
		Ch().rec(750, 350, 200, 300)
		Ch().rec(900, 250, 200, 300)
		h = st.h('+')
		h.l(20).bf(me).bs(ch)
		h.rec(200, 200, 200, 300)
		h.rec(400, 250, 200, 300)
		h.rec(600, 250, 200, 300)
		h.rec(750, 350, 200, 300)
		h.rec(900, 250, 200, 300)
	})
}
SAN = function () {
	$St(1000, 500)._(function (st) {
		st.h(810, 410, '+').l(8).bf(Q.i('chicks'), $Mx(1, 0, 0, 1, -800, -400))
				.rec(1600, 800)
		ch = Q.i('chicks')
		me = Q.i('me')
		Ch = function (x, y) {
			var h = st.h(x, y).l(8)
			h.graphics.bf(ch)
			h.bs(me)
			cjs.SL(h)
			return h
		}
		Ch(200, 200).rec(200, 300)
		Ch(400, 250).rec(200, 300)
		Ch(600, 250).rec(200, 300)
		Ch(750, 350).rec(200, 300)
		Ch(900, 250).rec(200, 300)
	})
}
 
 
 