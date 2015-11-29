guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
QU0 = function () {Q(mf5, function () {$.A(Q.i('me'))})}
QU1 = function () {$Ld(mf1, function (ld) {ld.bm("myImage", $St())})}
QU4 = function () {$Ld(mf3, function (ld) {$St().A(ld.bm("me"), ld.bm("guy", 300, 300))})}
QU2 = function () {St();$Ld(mf2, function (ld) {ld.bm("me", st);ld.bm("guy", st)})}
QU3 = function () {St();$Ld(function (ld) {Q.bm("me", st);Q.bm("guy", st, 300, 300)}).mf("me", guyIt)}




ULE = USINGLAYERSINEASEL = function () {St()

	$Ld(mf5, function (q) {
		
		me = q.bm('me',st).scXY(3);
		guy = q.bm('guy', st).scXY(.5).drag()
		
		$t(function () {
			me.X(guy.x * 2.2 - 140).Y(guy.y * .2)
		})
	})
	
	$.bt('s.sXY(2)', function () {
		st.sXY(2)
	})

}
QU11 = WINDG = function () {
	st = $St($.c(960, 400).id("cv").id())
	$Ld(function (ld) {
		ld.bm("chicks", st, 470).drag()
				.mask = cjs.worldsMostInterestingShape().X(470).a2(st).same()//.drag()//!
	})
}

QU7 = WOAH = TIMSPIN = function () {
	St();
	$Ld(mf5, function () {
		st.qB('guy').scXY(.5, .3).XY(300, 300).spin()
		_.in(3, function () {
			T.f(1)
		});
		_.in(9, function () {
			T.f(1000)
		})
	})
}


//st.c = $(st.canvas) //s.bm('me', function(bb){b=bb })
//q.b('guy', st).XY(300, 300).spin()
//st.qB('guy').XY(300, 300).spin()


