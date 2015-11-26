 
 SETTRANSFORM = function () {
	 s = cjs.stage(800).A()
	 s.bm('me', function (me) {
		 b = me
		 b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		 m = b.getMatrix()
		 function tf(a, b, c, d, e, f, g, h, i) {
			 return this.x = a || 0,
					 this.y = b || 0,
					 this.scaleX = null == c ? 1 : c,
					 this.scaleY = null == d ? 1 : d,
					 this.rotation = e || 0,
					 this.skewX = f || 0,
					 this.skewY = g || 0,
					 this.regX = h || 0,
					 this.regY = i || 0,
					 this
		 }
	 })
 }
 cjs.isDisplayOb = function (ob) {
	 return O(ob) && F(ob.getStage)
 }
 testInStage = function () {
	 s = cjs.stg()
	 s.bm('me', function (b) {
		 me = b
		 me.startMoving(10, 10)
		 cjs.tick(function () {
			 $l(me.inStage())
		 })
	 })
 }
 SETTRANSFORM=function(){

    s = cjs.stage(800).A()
    s.bm('me',function(me){

        b=me


        b.setTransform(0,0,2,.5,0,40,4,2,3)

        m = b.getMatrix()

        function tf(a,b,c,d,e,f,g,h,i){
            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}})



}


cjs.isDisplayOb=function(ob){
    return O(ob)  &&  F(ob.getStage)
}
 cjs.iDO = function (i) {
	 return O(i) && F(i.getStage)
 } //cjs.isOb = function (s) {return O(s) && s.parent}
 cjs.rmOb = function (ob) {
	 if (cjs.iDO(ob)) {
		 ob.rm()
	 }
 }
 $Bm = function (i) {
	 var bm
	 var g = G(arguments)
	 if (O(i)) {
		 if ($.iI(i)) {
			 _i = i = $(i)[0];
			 bm = new cjs.Bitmap(i)
			 if (g.p) {
				 bm.drag()
			 }
			 return bm
		 }
		 bm = $Bm(i.i)
		 if (i.al) {
			 bm.al(i.al)
		 }
		 if (i.fl) {
			 bm.fl(i.fl)
		 }
		 if (i.aF2) {
			 bm.aF2(i.aF2)
		 }
		 return bm
	 }
 }
 testInStage = function () {
	 s = cjs.stg()
	 s.bm('me', function (b) {
		 me = b
		 me.startMoving(10, 10)
		 cjs.tick(function () {
			 $l(me.inStage())
		 })
	 })
 }
 SETTRANSFORM = function () {
	 s = cjs.stage(800).A()
	 s.bm('me', function (me) {
		 b = me
		 b.setTransform(0, 0, 2, .5, 0, 40, 4, 2, 3)
		 m = b.getMatrix()
		 function tf(a, b, c, d, e, f, g, h, i) {
			 return this.x = a || 0,
					 this.y = b || 0,
					 this.scaleX = null == c ? 1 : c,
					 this.scaleY = null == d ? 1 : d,
					 this.rotation = e || 0,
					 this.skewX = f || 0,
					 this.skewY = g || 0,
					 this.regX = h || 0,
					 this.regY = i || 0,
					 this
		 }
	 })
 }
 cjs.isDisplayOb = function (ob) {
	 return O(ob) && F(ob.getStage)
 }