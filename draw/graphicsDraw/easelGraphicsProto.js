gx = cjs.Graphics.prototype
 
//https://en.wikipedia.org/wiki/Form_follows_function
//answer: art follows fiz structure
//art follows form follows function? form is the art
//art/fiz ~ form/function
 
gx.dcO=function(o){o=o ||{}
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	return this.dc(o.x, o.y, o.r)
}
gx._dc=function(){
	
	/*
	
	 dc = drawCircle ( x,  y,   rad  ) Graphics chainable Returns Graphics 
	 var gx = new createjs.Graphics().ss(1);
	 gx.s(cjs.Graphics.getRGB(0,0,0));
	 gx.f(cjs.Graphics.getRGB(255,0,0));
	 gx.dc(0,0,3);
	 var s = new cjs.Shape(g); s.x = 100; s.y = 100;
	 st.addChild(s); st.update();
	
	 */
	var gx=this, g=G(arguments),o
	o = g.O? g.f: 
			N(g.s)? {x: g.f, y: g.s, r: g.t}:
	{r: g.f}
	return gx.dcO(o)
}
gx.dcColO=function(o){var gx=this

	 
	gx.fC(o.fC)
	gx.sC(o.sC)
	gx.ss(o.ss)
	gx.dcO(o.x, o.y, o.r)
	return gx
}
gx.dcCOLO = function (o) {
	var gx = this
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.r = N(o.r, 50)
	o.fC = o.fC || 'z'
	o.sC = o.sC || 'w'
	o.ss = N(o.ss, 4)
	gx.fC(o.fC)
	gx.sC(o.sC)
	gx.ss(o.ss)
	gx.dc(o.x, o.y, o.r)
	return gx
}
gx.DC=function(){
	var gx = this, g = G(arguments), o
	o = g.O ? g.f :
			N(g.s) ? 
			{x: g.f, y: g.s, r: g.t, fC: g.fo, sC: g.fi, ss: g.si} :
			{r: g.f, fC: g.s, sC: g.t, ss: g.fo}
	return gx.dcO(o)
	
}
gx._cir = function (ob) {


}
gx.cir=function(){
	
}
gx.cirs=function(){

}
gx.CIR=function(){

}

gx.__dr = function (x, y, w, h) {
	return this.dr(N(x, 0), N(y, 0), N(w, 50), N(h, 50))
}
gx._drO = function (o) {
	var gx = this, g
	o = o || {}
	o.x=N(o.x,0)
	o.y=N(o.y,0)
	o.w=N(o.w,50)
	o.h=N(o.h,50)
	gx.dr(o.x, o.y, o.w, o.h)
	return gx
}
gx._dr = function () {
	var gx = this, g = G(arguments), o
	o = N(g.t) ?
	{x: g.f, y: g.s, w: g.t, h: g.fo} :
	{w: g.f, h: g.s}
	return gx._drO(o)
}; 

/*
 drawRect ( x  y  w  h ) Graphics chainable
 Defined in drawRect:860
 Maps the familiar ActionScript drawRect() method to the functionally similar rect method.
 Parameters:

 x Number
 y Number
 w Number
 Width of the rectangle
 h Number
 Height of the rectangle
 Returns:

 Graphics: The Graphics instance the method is called on (useful for chaining calls.)
 */