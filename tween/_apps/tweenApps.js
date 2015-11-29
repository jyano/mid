 
TWEENPOS1 = function () {
	
	st = _$St().t()
	
	st.bm('me', function (bm) {
	 
		st.bm('guy', function (guy) {
			guy.XY(200)
			w0 = cjs.tween(guy, [{r: 3000}, 100000])
			w = cjs.tween(bm, [{sx: 3}, 1000])
			.wait(1000).pause(w0).then({sy: 3}, 4000)
			.play(w0).then({sy: .3}, 4000)
		})
	})
}



TWEENBOX = function () {
	TWEENBOX = function () {
		z()
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}//A--------
	TWEENBOX = function () {
		z()
		stage = $.dragStage()
		stage.bm('me', function (bm) {
			SL(bm)
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000])
			$Tw([bm, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 100], [{x: 0, sxy: .7, r: -30, a: .5}, 100]
			)
			//  cjs.tween(  [bm,'l'],  {x:0, sxy:.7,r:0},  [ {x:300,sxy:2.3,r:0}, 1000 ],  [ {x:0,sxy:.7,r:-30,a:.5},3000])
		})
		$.dragStage().t().bm('me', function (bm) {
			b = bm
			SL(bm)
			bm.rgc('+')
			scaleShake(bm)
			rotateShake(bm)
		})
	}//A--------
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
TWEENER = function () {
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
	TWEENER = function () {
		Q(['me', 'chicks', 'guy'], function () {
			W()
			guy = w.i.qB('chicks', 300, 300)
			me = w.i.qB('me')
			w0 = $Tw(guy, 200, [{r: 3000}, 100000])
			$Tw(me,
					[{sx: 3}, 1000])
					.wait(1000)
					.pause(w0)
					.then({sy: 3}, 4000)
					.play(w0)
					.then({sy: .3},
					4000)
			/*     .wait(1000).pause(w0).then({sy:3}, 4000)
			 .play(w0).then({sy:.3},4000)
			
			
			 tw =$Tw(
			 w.i.qB('me'),
			 [{sx:2,sy:2}, 3000],
			 [{a:0},300],
			 1000,
			 function(){$Tw(w.i.qB('chicks').spin(),
			 [{sxy:.2}, 2000])
			 }
			
			 )
			
			 */
			//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
			//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
		})
	}//B+++++
	Q(['me', 'chicks', 'guy'], function () {
		W()
		guy = w.i.qB('chicks', 300, 300)
		me = w.i.qB('me')
		w0 = $Tw(guy, 200, [{r: 3000}, 100000])
		$Tw(me,
				[{sx: 3}, 1000])
				.wait(1000)
				.pause(w0)
				.then({sy: 3}, 4000)
				.play(w0)
				.then({sy: .3},
				4000)
		/*     .wait(1000).pause(w0).then({sy:3}, 4000)
		 .play(w0).then({sy:.3},4000)
		
		
		 tw =$Tw(
		 w.i.qB('me'),
		 [{sx:2,sy:2}, 3000],
		 [{a:0},300],
		 1000,
		 function(){$Tw(w.i.qB('chicks').spin(),
		 [{sxy:.2}, 2000])
		 }
		
		 )
		
		 */
		//  tw.then({x: 200}, 1000).to({ alpha:1, visible:true }, 30000)
		//$Tw(Q.b('guy').a2(w.i), [{r: 20},10000], [{r: 0},3000]   )
	})

}//B+++++
TWEENPOS = function () {
	TWEENPOS = function () {
		z()
		s = $St(500).t().A()
		s.bm('me', function (bm) {
			b = bm
			s.bm('guy', function (guy) {
				g = guy
				guy.XY(200)
				w0 = $Tw(guy, [{r: 3000}, 100000])
				w = $Tw(bm, [{sx: 3}, 1000])
						.wait(1000).pause(w0).then({sy: 3}, 4000)
						.play(w0).then({sy: .3}, 4000)
			})
		})
	}///B
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
	z()
	s = $St(500).t().A()
	s.bm('me', function (bm) {
		b = bm
		s.bm('guy', function (guy) {
			g = guy
			guy.XY(200)
			w0 = $Tw(guy, [{r: 3000}, 100000])
			w = $Tw(bm, [{sx: 3}, 1000])
					.wait(1000).pause(w0).then({sy: 3}, 4000)
					.play(w0).then({sy: .3}, 4000)
		})
	})
}///B
WAPTWEEN = function (a) {
	WAPTWEEN = function (a) {
//combo/complex/anim/tween
		//wMs looks like it makes/appends a stage, gives it a bitmap
		//based on your mug, and pass it to a callback
		Q(['me', 'chicks', 'guy'], function () {
			W()
			me = w.i.qB('me')
			$Tw(
					[me, 'l'],
					{x: 0, sxy: .7, r: 0},
					[{x: 300, sxy: 2.3, r: 0}, 1000],
					[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
			)
			TR(me)
			$Tw([me, 'l'],
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
		//$.ev(2, function(){ tweens.rpunch(g) } )
	}//B+++++
//combo/complex/anim/tween
	//wMs looks like it makes/appends a stage, gives it a bitmap
	//based on your mug, and pass it to a callback
	Q(['me', 'chicks', 'guy'], function () {
		W()
		me = w.i.qB('me')
		$Tw(
				[me, 'l'],
				{x: 0, sxy: .7, r: 0},
				[{x: 300, sxy: 2.3, r: 0}, 1000],
				[{x: 0, sxy: .7, r: -30, a: .5}, 3000]
		)
		TR(me)
		$Tw([me, 'l'],
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
	//$.ev(2, function(){ tweens.rpunch(g) } )
}//B+++++
 
TWEENBALLS = function () {
	TWEENBALLS = function () {
		W(400, 400).C('w')._(function () {
			//cjs.rulers()
			w.p(0, 0, 10).stat()
			_.t(8, function () {
				w.D(R(100, 50), R(100, 50), 'b', 30)
			})
			w.$$(function () {
				_.t(8, function () {
					var b = w.D(R(100, 50), R(100, 50), 'b', 30)
					b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
				})
			})
			w.i.T(200, 100, '$$ me')
		})
	}//world//A-----
	W(400, 400).C('w')._(function () {
		//cjs.rulers()
		w.p(0, 0, 10).stat()
		_.t(8, function () {
			w.D(R(100, 50), R(100, 50), 'b', 30)
		})
		w.$$(function () {
			_.t(8, function () {
				var b = w.D(R(100, 50), R(100, 50), 'b', 30)
				b.$h('x', 'X', 1).c('x', 'X', 1).bf(w.s.cv0).cir(30)
			})
		})
		w.i.T(200, 100, '$$ me')
	})
}//world//A-----