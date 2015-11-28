XP1 = FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.r(120, 120, 100, 100).s('b').s()
 
	x.l(60).s('r').b().l(120, 120).l(100, 100)
			.lt(1000, 10).lt(200, 100).l(100, 400).s()

	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}


XP2 = DRAWAPP = function () {
	__C()
	
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(first)
	function first() {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(then)
	}
	
	function then() {
		x.S()
		x.tl(200, 200);
		draw()
		x.R()
		x.tl(20, 20);
		draw()
	}
}
  