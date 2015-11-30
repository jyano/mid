TWEEN = function (a) {//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	s = createjs.stage('y', 500, 500).tick().A()
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'], {x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000], [{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
	})
	s.mug(function (bm) {
		b = bm
		TR(bm)
		cjs.tween([bm, 'l'],
				{x: 0, sxy: .7, r: -2},
				[{x: 300, sxy: 2.3, r: 0, a: .2, kx: 60}, 3000],
				[{x: 320, a: 1, sxy: 2, r: -1}, 1000],
				[{rx: 100}, 1000],
				[{ry: 100}, 1000],
				[{r: 50, x: 1400, y: 300}, 3000],
				[{r: 200, x: 1000, y: 200, sxy: 1}, 3000],
				[{r: 100, x: 300, ky: -100}, 1000],
				[{rx: 30, ry: 30, r: 150, x: 500}, 2000],
				[{rx: 20, ry: 50, r: 100, x: 500, kx: 300}, 2000],
				[{kxy: 0, x: 320, y: 0, rxy: 0, sxy: 2, r: -1}, 3000])
	})
}
TWEENART = function (a) {
	
	
	//wMb makes bitmap mug and passes it to a callback
	//optionally? can pass a stage to append it to before the callback runs
	wMb(function (b, s) {
				b.xy(300);
				b.rgc(); //centers it's reg point?
				SK(b)
				cjs.tween(
						[b, 'l'],
						{sxy: .5},
						[{sxy: .7}, 500],
						[{sxy: .5}, 500])
				wMb(function (b) {
					s.a(b)//manual add necessary?
					b.xy(200);
					b.rgc();
					b.wh(200);
					SL(b);
					cjs.tween([b, 'l'], {r: 0}, [{r: 360}, 1000])
					wMb(function (b) {
						s.a(b);
						b.rgc();
						b.xy(600);
						SC(b)
						cjs.tween([b, 'l'], {kxy: 0},
								[{kxy: 20}, 500],
								[{kxy: 0}, 500])
					})
				})
			}, EDIT()
	)
}



