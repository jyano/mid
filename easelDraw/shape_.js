gx=cjs.Graphics.prototype
 

h =  cjs.Shape.prototype 


cjs.isShape=function(h){
    return O(h) && h.graphics
}

cjs.graphics= function(a){return new cjs.Graphics(a)}

cjs.isCont=function(cont){
    if(O(cont)){
        if(cont.addContainer){return true}
        else {return false }
    }
}



 cjs.circ = cjs.circle = function(radius, fc ){

     if(!N(radius)){return cjs.circ(8, radius)}

     fc =  oO('c', fc|| 'z')

     return cjs.shape().f(fc).dc(0,0,radius)
 }



cjs.diamond = function self(width, height, fc,sc){

    fc=fc||'green'
    sc=sc||'white'

    width = width || 100
    height = height || width
    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth,0).lt(0,halfheight)
        .lt(halfwidth,0).lt(0,-halfheight)

    return h}



cjs.rect2   = function self(width, height, x, y, fc, sc){
    width = width || 100
    height = height || width

    x=N(x)?x:0; y=N(y)?y:0
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth+x, -halfheight+y)
        .lt(-halfwidth+x,halfheight+y)
        .lt(halfwidth+x, halfheight+y)
        .lt(halfwidth+x,-halfheight+y)
        .lt(-halfwidth+x,-halfheight+y)

    return h}

cjs.rect= function self(width, height, fc, sc){
    width = width || 100
    height = height || width
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth,halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth,-halfheight).lt(-halfwidth,-halfheight)

    return h}


//canon
cjs.ball=function(z,fc,sc){

    var b= cjs.circle(0,0,z,fc,sc)

    b.r=z
    b.d=z+z

    b.T=function(a){
        if(U(a)){return b.y()-b.r}
        b.y(a+ b.r);return b}
    b.B=function(a){if(U(a)){return b.y()+b.r}
        b.y(a-b.r);return b}
    b.L=function(a){if(U(a)){return b.x()-b.r}
        b.x(a+b.r);return b}
    b.R=function(a){if(U(a)){return b.x()+b.r}
        b.x(a- b.r);return b}
    b.F=1
    b.fall=function(r){b.t(function(){
        if(r){if(ballBox(b,r)){b.F=0}else{b.F=1}}
        if(b.F){b.y(10,'+')}
    })}
    return b}
cjs.circle2=function(r,z,x,y){

    graphics = new cjs.Graphics()
    if( !S( r ) ){  return circle2( 'red', r, z, x )}
    z = N(z) ? z : 32
    x = N(x) ? x : 100
    y = N(y) ? y : 100
    graphics.ss( z/8 ).f( r, 'black' ).dc( 0, 0, z )
    return cjs.shape( graphics ).XY( x || 100, y || 100 )

}
cjs.circle3 = function( x, y, r, fc, sc ){

    var shape, h

    shape = h = cjs.shape()

    if( O(x) ){

        return cir0(   x.x,    x.y,   x.r,    x.fc,   x.sc  ) }

    x = x || 0

    y = y || 0

    r = r || 8

    fc = fc || 'w'

    sc = sc || 'z'

    shape.circle( x, y, r, fc, sc )

    SL( shape )

    return shape }
cjs.box=function( w, h, fc, sc ){

    w = w||200

    h = h||w

    var b=rct(

            0 - w/2, 0-h/2, w, h, fc, sc
    )

    b.wr = w/2

    b.hr = h/2

    b.wd = w

    b.hd = h


    b.top = b.T = function( a ){

        if( U(a) ){ return b.y() - b.hr }

        b.y( a + b.hr )

        return b }


    b.bottom = b.B = function(a){

        if( U(a) ){  return b.y() + b.hr   }


        b.y( a - b.hr )

        return b
    }


    b.left =b.L = function(a){

        if( U(a) ){ return b.x() - b.wr }

        b.x( a + b.wr )

        return b
    }


    b.right =b.R = function(a){

        if(U(a)){ return b.x() + b.wr }
        b.x(a- b.wr);return b}


    b.fall=function(){

        b.t(function(){

            if(b.F){b.y(40,'+')}  //****

            if(ballBox(b,r)){b.F=0}

        })}

    return b}
cjs.ballBox=function(bl,bx,buff){ buff=buff||100
    var b= bl.bottom() >= bx.top()  && bl.top()<=bx.top()+buff  &&

        bl.x()>=bx.left()  &&   bl.x()<=bx.right()

    if(b){bl.bottom(bx.top())}

    return b}







ct = cjs.Container.prototype

cjs.shape= cjs.shp= function(x,y,f,s,width,opt){
    if(cjs.isShape(x)){return new cjs.Shape(x.graphics)}
    var h = new cjs.Shape()
    if(N(x)){h.X(x)}
    if(N(y)){h.Y(y)}
    h.fs(f,s,width)
    if(opt=='drag'){h.drag()}
    // use a switch statement here!  i love it!
    return h
    
}
 
cjs.cirX=function(stg,x,y,r,f,s,width,opt){
    var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
    shp.dc(0,0,r)
    return shp}




 