SOLAR = function () {$St().bm('guy', function (bm) {
	
		guy = bm
		bm.dg()
		bm.vXY(_.random(10) + 1, _.random(10) + 1)
				.XY(_.random(800), _.random(600))
		bm.startMoving()
		bm.warp()
		
		
		st.bm('sun', 0.2, function (bm) {
			sun = bm
			bm.drag().startMoving(4, 10)
			bm.warp()
			setInterval(
					function () {
						if (
								cjs.bulletHit(sun, guy)) {
							sun.sXY(sun.scaleX + .1, sun.scaleY + .1)
							sun.vx += .2
							sun.vy += .2
						}
					}, 100)
		})
	})
	
	
	
	
	st.mug(0.4, function (bm) {
		mug = bm
		bm.X(400).drag().startMoving(10, 10)
		bm.bounce(0)
	})
	
	
	
	st.bgImg('/space.jpg')
}



