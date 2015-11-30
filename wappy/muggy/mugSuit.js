//// ***

CONTMUG = function () {
	z()
	s = cjs.stage(1000).A()
	s.A(m = mugCont())//.rgc('+')
	// SL(m)
}
 
 
SUIT = function (st) {
	alert('mugCont')
	qu = new cjs.LoadQueue().complete(onMug)
			.manifest([{id: "mug", src: "/myMug"}])
	cont = $Ct()
	cont.flame = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('flame', function (flame) {
				})
		)
	}
	cont.uni = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('uni', function (uni) {
					uni.x(200).y(200)
					cont.mug.sxy(.2).x(300)
				}))
	}
	cont.guy = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('guy', function (guy) {
					guy.spin()
					cont.spin()
				})
		)
	}
	cont.desuit = function () {
		cont.mug.sXY(1).XY(200)
		if (cont.suit) {
			cont.suit.remove()
			cont.suit = null
		}
	}
	function onMug() {
		mug = qu.getResult("mug")
		// cont.bData( mug )//.rgc('+')
		cont.A(cont.mug = $Bm(mug))
	}
	
	mugCont = function (stage) {
		qu = $Ld([{id: "mug", src: "/myMug"}], function (l) {
			var mug = l.get("mug")
			// cont.bData( mug )//.rgc('+')
			ct.A(ct.mug = cjs.bm(mug))
		})
		ct = cjs.container()
		ct.flame = function () {
			ct.desuit()
			ct.A(
					cont.suit = cjs.container().bm('flame', function (flame) {
					})
			)
		}
		cont.uni = function () {
			cont.desuit()
			cont.A(
					cont.suit = cjs.container().bm('uni', function (uni) {
						uni.x(200).y(200)
						cont.mug.sxy(.2).x(300)
					}))
		}
		cont.guy = function () {
			cont.desuit()
			cont.A(
					cont.suit = cjs.container().bm('guy', function (guy) {
						guy.spin()
						cont.spin()
					})
			)
		}
		cont.desuit = function () {
			cont.mug.sXY(1).XY(200)
			if (cont.suit) {
				cont.suit.remove()
				cont.suit = null
			}
		}
		return cont
	}
	return cont
}




 