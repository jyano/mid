w.G = function (x, y) {
	var w = this,
			v, currG = w.GetGravity()
	if (U(x)) {
		return currG
	}
	if (N(x)) {
		v = N(y) ? V(x, y) : V(0, x)
	}
	else if (x == 'flip') {
		v = V(-currG.x, -currG.y)
	}
	w.SetGravity(v)
	return w
}
GRAV = function () {
		W({g: 10}).Y()
		balls = function () {
			w.D(100, 100, 'a', 50).d(1)
			w.D(100, 200, 'c', 40).d(1)
			w.D(100, 100, 'd', 50).d(1)
			w.D(100, 200, 'e', 40).d(1)
			w.D(100, 100, 'f', 50).d(1)
			w.D(100, 200, 'h', 40).d(1)
			w.D(100, 100, 'i', 50).d(1)
			w.D(100, 200, 'j', 40).d(1)
			w.D(100, 100, 'k', 50).d(1)
			w.D(100, 200, 'l', 40).d(1)
		};
		balls()
		range = w.pJ(
				w.S(600, 300, 'q', 220, 20),
				w.D(600, 300, 's', 20, 250).lD(10),
				V(1, 0)).lm(-100, 100)
		w.show(function () {
			return 'Welcome to Gravity Range: Current gravity is ' + range.val()
		})
		cjs.t(function () {
			w.G(range.val())
			w.e(function (b) {
				b.I(0, .1)
			})
		})
	}

 
 