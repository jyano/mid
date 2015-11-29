ld=cjs.LoadQueue.prototype
ld.get= ld.g= ld.gR=ld.i=ld.r=function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
ld.done= ld.rdy =ld.c = ld.complete = function (fn) {
	 
	
	if (F(fn)) {
		this.on("complete", fn)
	}
	
	return this
}
ld.bm = ld.b = function (i, ct, x, y) {var ld=this
	var bm = _$Bm(ld.get(i))
	if (N(ct)) {bm.XY(ct, x)}
	else if (O(ct)) { bm.a2(ct, x, y)  }
	return bm
}
ld.mf = function (mf) {
	  // q.mf protosig: 
	  // (1) 'me',..
	  // (2)  {src:'me', id:'him'},.. 
	  // (3) [ {src:*, id:*}, 'me',.. ]		
	  mf = $its(A(mf) ? mf : G(arguments))
	  this.loadManifest(  mf  )
	  return this
}
function fileLoad(){
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
ld.jQuery=ld.$ = function (i) {
	return $(this.i(i))
}

 


 