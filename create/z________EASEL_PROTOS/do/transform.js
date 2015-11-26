dO.sTf = function () {
	var dO = this, g=G(arguments)
	dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
	return dO
}

dO.gTf=dO.getTransform = function () {
	var dO = this
	return [
		dO.x, dO.y, dO.scaleX, dO.scaleY,
		dO.rotation, dO.skewX, dO.skewY,
		dO.regX, dO.regY
	]
}

 

dO.bd =  dO.bds=dO.bounds = function (a, b, c, d) {
	var dO = this
	dO.nominalBounds = new cjs.Rectangle(a, b, c, d)
	return dO
}


dO.tf =dO.transform = function ( ) {

	var dO=this, g=G(arguments)
	return g.f? dO.sTf.apply(dO, g.A_ ? g.f: g): dO.gTf()
}
 
 

 
 
 