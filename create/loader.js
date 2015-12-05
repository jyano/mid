_mf = [{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}]
_MF = ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
$it = function (i) {
	var _$it = function (i) {
		return {src: _.src(i), id: i}
	}
	return S(i)? _$it(i ):i
	
}
$its = function (its) {
	var g = G(arguments)
	if (!g.A) {
		its = g
	}
	return _.m(its, $it)
}


$Mf = function (mf, fn) {
	return $Ld(fn).mf(mf)
}
_$Ld = function () {
	return new cjs.LoadQueue(true)
}
$Ld =$ld= cjs.lQ =  Q = function () {

//starts off as a fn (obviously)
//but ends up as an obj
// (can use his info to test if its been ran)
	var g = G(arguments), o
	o = g.F_ ? {done: g.f, file: g.s} : 
			(g.A_||g.S_) ? {mf: g.f, done: g.s, file: g.t} :
					g.f
	
	o.mf =  o.mf || ['me', 'guy', 'chicks', 'sun', 'flame', 'earth']
	var ld  = _$Ld()
	if (o.file) {ld.file( o.file )}
	if (o.done) {ld.done(function (e) {
		
		//o.done(function(i) {return ld.i(i)}, e)
		o.done(ld)
		})
		
		}
	if (o.mf) {  ld.mf(o.mf) }
	
	
	Q = ld
	Q.ran = true
	return Q
}
Q.ran = false
Q1 = function (imgs, fn) {

		var q = cjs.lq()

		
		mf = []
	
			_.e(imgs, function (v) {
			
			mf.push({
				src: cjs.src(v),
				id: v
			})
		})
		
		q.manifest(mf)
		
		q.complete(function () {
			fn(q)
		})
}
ld = cjs.LoadQueue.prototype
ld.get = ld.g = ld.gR = ld.i = ld.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
ld.done = ld.rdy = ld.c = ld.complete = function (fn) {
	if (F(fn)) {
		this.on("complete", fn)
	}
	return this
}
ld.bm = ld.b = function (i, ct, x, y) {
	var ld = this
	var bm = _$Bm(ld.get(i))
	if (N(ct)) {
		bm.XY(ct, x)
	}
	else if (O(ct)) {
		bm.a2(ct, x, y)
	}
	return bm
}
ld.mf = function (mf) {
	// q.mf protosig: 
	// (1) 'me',..
	// (2)  {src:'me', id:'him'},.. 
	// (3) [ {src:*, id:*}, 'me',.. ]		
	mf = $its(A(mf) ? mf : G(arguments))
	this.loadManifest(mf)
	return this
}
function fileLoad() {
	ld.dfF = cjs.handleFileLoad = function (e) {
		alert('q.dfF = cjs.handleFileLoad in loaderProto.js')
		images = window['images'] || {}
		if (e.item.type == "image") {
			images[e.item.id] = e.result
		}
	}
	ld.file = ld.f = ld.l = ld.fl = ld.fileload = function (fn) {
		this.on("fileload", fn)
		return this
	}
}
ld.jQuery = ld.$ = function (i) {
	return $(this.i(i))
}
guyIt = {id: "guy", src: "/guy.png"}
myIt = {id: "myImage", src: "/me.png"}
mf1 = [myIt, guyIt];
mf2 = [$it("me"), $it(guyIt)]
mf3 = ["me", guyIt];
mf4 = [myIt, guyIt];
mf5 = ['guy', 'me']
//Q('me', function () {$.A( Q.i('me') )})  
// ok: Q([{src: '/me.png', id: 'me'}], function () {$.A(Q.i('me'))})
QU0 = function () {
	Q(mf5, function () {
		$.A(Q.i('me'))
	})
}
QU1 = function () {
	$Ld(mf1, function (ld) {
		ld.bm("myImage", $St())
	})
}
QU4 = function () {
	$Ld(mf3, function (ld) {
		$St().A(ld.bm("me"), ld.bm("guy", 300, 300))
	})
}
QU2 = function () {
	St();
	$Ld(mf2, function (ld) {
		ld.bm("me", st);
		ld.bm("guy", st)
	})
}
QU3 = function () {
	St();
	$Ld(function (ld) {
		Q.bm("me", st);
		Q.bm("guy", st, 300, 300)
	}).mf("me", guyIt)
}
ULE = USINGLAYERSINEASEL = function () {
	St()
	$Ld(mf5, function (q) {
		me = q.bm('me', st).scXY(3);
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
function later(){
	cjs.mf = cjs.manifest = function () {
		var g = G(arguments)
		var mf = []
		_.e(g, function (i) {
			mf.push($it(i))
		})
		return mf
	}
	cjs.handleFileLoad = function (e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
cjs.man = cjs.makeMan = cjs.makeManifest = function (a) {
	alert('manifest')
	return cjs.mf.apply(null, _.m(a.images, function (i) {
				return _.crs(i)
			})
	)
}
}