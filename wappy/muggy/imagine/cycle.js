Cycle1 = function () {
	var cont = new createjs.Container()
	cont.mug(function (mug) {
		mug.sXY(.4)
		cont.bm('uni', function (bitmap) {
			bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
			bitmap.name = 'uni'
			createjs.bindTransform(mug, cont)
			createjs.bindRotate(bitmap, cont)
		})
	})
	return cont
}
Cycle2 = function () {
	var cont = new createjs.Container()
	var qu = new createjs.LoadQueue().complete(graphics).manifest([
		{id: "mug", src: "/getMug"},
		{id: "uni", src: "/uni.png"}
	])
	
	function graphics() {
		cont.bm(
				qu.getResult("uni"),
				function (b) {
					bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = ('uni')
				})
		cont.bm(
				$.img($.parseJSON(qu.getResult("mug"))),
				function (b) {
					mug = b.sXY(.4)
				})
		SL(mug, cont)
		cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
	}
	
	return cont
}
CYCLE = function () {
	z()
	s = $stage(800, 800).A().tick()
	c1 = Cycle1()
	c2 = Cycle2()
	s.A(c1, c2)
}
Cycle1 = function () {
	var cont = new createjs.Container()
	cont.mug(function (mug) {
		mug.sXY(.4)
		cont.bm('uni', function (bitmap) {
			bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
			bitmap.name = 'uni'
			createjs.bindTransform(mug, cont)
			createjs.bindRotate(bitmap, cont)
		})
	})
	return cont
}
Cycle2 = function () {
	var cont = new createjs.Container()
	var qu = new createjs.LoadQueue().complete(graphics).manifest([
		{id: "mug", src: "/getMug"},
		{id: "uni", src: "/uni.png"}
	])
	
	function graphics() {
		cont.bm(
				qu.getResult("uni"),
				function (b) {
					bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = ('uni')
				})
		cont.bm(
				$.img($.parseJSON(qu.getResult("mug"))),
				function (b) {
					mug = b.sXY(.4)
				})
		SL(mug, cont)
		cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
	}
	
	return cont
}
CYCLE = function () {
	z()
	s = $stage(800, 800).A().tick()
	c1 = Cycle1()
	c2 = Cycle2()
	s.A(c1, c2)
}
