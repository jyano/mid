TWEENPOS1 = function () {
	z()
	s = cjs.stage(500).tick().A()
	s.bm('me', function (bm) {
		b = bm
		s.bm('guy', function (guy) {
			g = guy
			guy.XY(200)
			w0 = cjs.tween(guy, [{r: 3000}, 100000])
			w = cjs.tween(bm, [{sx: 3}, 1000]).wait(1000).pause(w0).then({sy: 3}, 4000).play(w0).then({sy: .3}, 4000)
		})
	})
}
TWEENPOS = function () {
	z()
	s = cjs.stage(500).A()
	s.bm('me', function (bm) {
		b = bm;
		s.bm('guy', function (guy) {
			g = guy
			guy.XY(200)
			w0 = cjs.tween(guy, [{r: 90}, 100]).pause().then({r: 3000}, 100000)
			w = cjs.tween(bm, [{sx: 3}, 10000]).play(w0)
		})
		setInterval(function () {
			tweens.rpunch(g)
		}, 2000)
	})
}
TWEENBOX = function () {
	z()
	stage = dragStage().tick()
	stage.bm('me', function (bm) {
		SL(bm)
		cjs.tween(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
		cjs.tween(
				[bm, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
		)
		//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
	})
	dragStage().tick().bm('me', function (bm) {
		b = bm
		SL(bm)
		bm.rgc('+')
		scaleShake(bm)
		rotateShake(bm)
	})
}
//really good
TWEENER = function () {
	z()
	s = createjs.stage(500).tick().A()
	s.bm('me', function (bm) {
		s.bm('guy', function (guy) {
			g = guy
			b = bm
			tween = cjs.tween(bm,
					//pass in objects and they are 'to', 'to', etc..
					[{sx: 2, sy: 2}, 3000], [{a: 0}, 300],
					//make it wait
					1000,
					//pass in a function and it will run when it's its turn
					function () {
						s.bm('chicks', function (b) {
							cjs.tween(b, [{sxy: .2}, 2000])
						})
					}
			).then({x: 200}, 1000).to({alpha: 1, visible: true}, 30000)
			tween3 = cjs.tween(g, [{r: 20}, 10000], [{r: 0}, 3000])
			stop = function () {
				tween.stop();
				tween2.stop()
			}
		})
	})
}
