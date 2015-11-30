
$mug = function (un, fn) {
	
	//make default un YOU (_username)
	$.g('/mugByUn/' + un, function (mug) {
		if (mug) {
			fn(mug)
		}
	})
}


$.mug = $.myMug = function (fn) {$.g('myMug', fn) }
ct._mug = function (sc, fn) {
	var ct = this
	$.g('/myMug', function (mug) {
		ct.bm(mug, sc, fn)
	})
	return ct
}
ct.mug = function () {

	var ct = this, g = G(arguments), o
	o = g.N_ ? {sc: g.f, fn: g.s} : {fn: g.f}
	o.sc = N(o.sc) ? o.sc : 1
	o.fn = o.fn || function () {
	}
	
	$.myMug(function (m) {
		ct.bm(m, o.sc, o.fn)
	})
	
	return ct
}
ct.bData = function (da) {
	return $Bm($.i().src($.parseJSON(da))).a2(this)
}
 LDTX = function () {St()
	$Ld([{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}],
			 function (ld) {st.A($Bm(ld.get("myImage")))}
	 
	 )
	 
}

QMUG = function () {
	$Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
		// mug= s.bData( qu.gR("mug") ).drag()
		St().A($Bm(ld.get("me")).drag())
	})
	///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
}

MUG = function () {St().mug(function (mug) {m = mug	})}
