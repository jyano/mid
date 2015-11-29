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