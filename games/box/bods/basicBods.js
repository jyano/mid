$dBD = $bD = b2d.D = b2d.bD = b2d.BD = b2d.dBD = b2d.dD = b2d.dyn = function (x, y) {
	var v, bD
	v = V(x, y)
	bD = new b2BodyDef()
	bD.XY(N(v.x, 100), N(v.y, 100))
	bD.dyn()
	return bD
}
$sBD = b2d.S = b2d.sB = b2d.stat = function (x, y) {
	return $dBD(x, y).stat()
}
$kBD = b2d.kD = function (x, y) {
	return $dBD(x, y).T(1)
}
//basic body creation from body defs
w.cB = function (bD) {
	return this.CreateBody(bD)
}
w.dB = function (x, y) {
	return this.cB($dBD(x, y))
}
w.sB = function (x, y) {
	return this.cB($sBD(x, y))
}
w.kB = function (x, y) {
	return this.cB($kBD(x, y))
}
w.rmB= w.removeBod = w.xB = w.Xx = w.Xb = function (b) {
	var w = this
	if (U(b)) {w.e(function (b) { w.rmB(b) }) }
	else { w.DestroyBody(b) }
	return w
}

BOX1 = function () {
	c = $.c('y', 1800, 1500)
	x = c.ctx()
	$.i('me', function (i) {
		x.drawImage(i, 0, 0)
	})
	
	var DD = b2DebugDraw; //dbD=  //	dbD.SetSprite(x); //  dbD.SetDrawScale(30); //	dbD.SetLineThickness(20) //	dbD.SetFillAlpha(1)// dbD.flag( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	
	
	w = $bW().sDD( $dD(x, 30) )
	
	//.fl( b2DebugDraw.e_shapeBit | DD.e_pairBit | DD.e_aabbBit | DD.e_centerOfMassBit )
	
	
	$bi()
	
	b = $ba()
	$l(w.numBods())
	T.t(function () {
	
		w.DrawDebugData()
		w.step(1 / 20, 10, 8)
		ps = b.GetPosition()
		//$l(ps.x * 30 + ', ' + ps.y * 30)
	
	})
}
BOX = function () {
	w = $bW().sDD($dD($.c('z', 1800, 1500)))
	_.ev(.1, function () { w.go(1 / 5, '+') })
	$bi()
	_.ev(2, function () {$ba() })
	$l('bodyCOunt:' + w.numBods())
}
 
 