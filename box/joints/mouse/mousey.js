$L('def')
function def(){
mJD.sT = function (a, b) {
	var mJD=this
	mJD.target.Set(a, b)
	return mJD
 
}


mJD.mF = function (mF) {
	this.maxForce = mF;
	return this
}
}

mJ.mF = function (fo) {

var mJ=this
	mJ.sMF = function (mF) {
		this.SetMaxForce(mF)
		return this
	}
	return U(fo) ? this.GetMaxForce() :
			this.sMF(fo)
}


mJ.tg = function (a, b) {
	var mJ=this


	mJ.sT = function (a, b) {
		var mJ = this

		mJ.ST = function () {
			var mJ = this
			mJ.SetTarget.apply(mJ, arguments);
			return mJ
		}
		
		return mJ.ST(O(a) ? a : V(a, b))
	}
	
	return (U(a))? this.GetTarget():
			this.sT(a,b)
}



$mJ = $mJD=  function (a, b) {var g = G(arguments)
	var jD = new b2d.MJD()
	if (a) {jD.A(a)}
	if (b) {jD.B(b)}
	return jD
} 


w.mJ= function (b) {var w=this, g = G(arguments)
	
	if( g.u){return 0}
	
	var j =  w.CJ(
			$mJD(w.GGB(), b).sT(mX, mY)
			
	)
	
	
	
	j.mF(300)// * b.mass()
	j.mF(200000)
	j.fq(.5)
	j.dm()
	
	// default freqency is 5!!, maxF 30000, dmRat .7
	//$l('fq: '+ j.fq()+ ', dm: ' + j.dm()+ ', mF: ' + j.mF())
	return j
}

 
w.killMJ = function () {
	var w = this
	
	if ( w._mJ ) {
	
		w.DJ( w._mJ );
		
		w._mJ = 0
	}
	
	return w
}




w.tgMJ = function () {
	var w = this
	
	var b= w.bAt(mX, mY)
	
	w._mJ = w._mJ? w._mJ: 
			b? w.mJ(b):
			 0
	
	if (w._mJ) {  w._mJ.tg(  V(mX, mY)  ) }
	
	return w
}




w.handleMJ = function () {
	var w = this
	
	w._mD ? w.tgMJ() :
			w.killMJ()
	
	return w
}



w.mSetup = function () {

	
	$.md(function (e) {
		$mXY = function (e, x, y) {
			mx = e.clientX - x
			my = e.clientY - y
			mX = mx / 30
			mY = my / 30
		}
		
		var x = w.x
		var y = w.y
		
		w._mD = 1
		
		$mXY(e, x, y)
		
		$.mm(function(e){
			$mXY(e, x, y)
		})
		
		
		// *** need to change to pagex(so can scroll page?).. 
		// but i think it messes up for mobile
	})
	
	
	
	
	
	
	$.mu(function () {
		w._mD = 0
	})
	
}
