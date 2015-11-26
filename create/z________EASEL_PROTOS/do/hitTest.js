 
 
 
testInStage = function () {
	s = cjs.stg()
	s.bm('me', function (b) {
		me = b
		me.startMoving(10, 10)
		cjs.tick(function () {
			$l(me.inStage())
		})
	})
}