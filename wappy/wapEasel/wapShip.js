SHIP = function () {
	angleInDegrees = function self(y, x) {
		if (O(y)) {
			return self(y.vy, y.vx)
		}
		var d = tDeg(Math.atan(y / x))
		if (x < 0) {
			d = Math.abs(d) + 90;
			if (y < 0) {
				d = Math.abs(d) + 90
			}
		}
		return d
	}
	ship = function (stage) {
		t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)
		t.graphics.f('o').s('z').mt(0, 0).lt(0, 40).lt(80, 20).lt(0, 0)
		kD('d', function () {
			t.rt(6, '+')
		})
		kD('u', function () {
			t.rt(6, '-')
		})
		if (stage) {
			stage.A(t)
			stage.on('stagemousedown', function (event) {
				e = event
				t.vX((e.rawX - t.x) / 100, '+')
				t.vY((e.rawY - t.y) / 100, '+')
				if (t.vx > 10) {
					t.vX(10)
				}
				if (t.vy > 10) {
					t.vY(10)
				}
			})
		}
		setInterval(function () {
			t.X(t.vx, '+').Y(t.vy, '+')
			t.rotation = angleInDegrees(t)
		}, 10)
		return t
	}
	PL = 1;
	aA = []
	div = $.div('yellow').pad(10)
	div.A(
			$.h1('controls'),
			b1 = $.button('start', function () {
				PL = 1;
				b1.hd();
				b2.sh()
			}),
			b2 = $.button('stop', function () {
				PL = 0;
				b2.hd();
				b1.sh()
			}).hide(),
			$.button('sgun', function () {
				sgun(guy)
			})
	)
	boot = $.boot()
	stage = createjs.stage(800, 600).tick()
	boot.A(
			div,
			stage.canvas
	)
	guy = ship(stage)
	// kD('s',function(){ $l('bang')})
	// _.times(100,function(){var a=ast();a.a();a.p()})
	// stage.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )
	sgun(guy)
}