gr = xGr = CanvasGradient.prototype
gr._aCS=function(){

this.addColorStop.apply(this, arguments)
return this
}

gr.add1CS=function(num,col){
	var gr = this, g = G(arguments)
 
	gr._aCS(num, oO('c', col))
}

gr.addCSOb = function (stopsOb) {
	var gr = this, g = G(arguments)
	
	_.e(stopsOb, function (num, col) {
		gr.add1CS(num, col)
	})
	
	return gr
}

gr.cS = gr.stop = gr.s = gr.c = function ( ) {
	var gr = this, g = G(arguments)
	
	if (A(g.f)) {
		_.e(g, function (arg) {
			gr.stop(arg[0], arg[1])
		})
		
		return gr
	}
	
	return g.O? gr.addCSOb(g.f)
		:gr.add1CS(g.f, g.s) 
}  
 