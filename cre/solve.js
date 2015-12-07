
CONNECT=function(){z();//m$$('location=location')

    stage = createjs.stage(1000).tick().A()

    pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)

    stage.A(pink)

    container = new createjs.Container()
    stage.A(container)

    green = cjs.circle( 200,'green','purple').XY(320,300)//.rXY(100)
    yellow = cjs.circle( 100,'yellow','purple').XY(250)
    red= cjs.circle( 40,'red','purple').XY(200,100)
    orange = cjs.circle( 20,'orange','purple').XY(300)

    container.A(green, yellow, red, orange )

    LS(yellow, container)
    SL(green)
    SL(green,pink)

    SL(yellow)
    SL(red,container)
    SL(orange, red)

}


 
MOUSEENTERSTAGE=function(){z()
    stage = s = cjs.stage(500, 500).A().tick()

    s.bm('me')

    s.on('mouseenter', function(){
        $('body').prepend('once<br>')
    }, null, true)

    s.on('mouseenter', function(){
        $('body').prepend('many<br>')
    }, null, false)}



HANDLEEVENT=function(){z()

    s=createjs.stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){
            this.x++
        })
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++}

        b.on('pressmove', b)



    })



}

REMOVEEVENT=function(){z()

    s = createjs.stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
            me.off('pressmove', cb)
        }

        b.on('pressmove', b)

    })



}


BUBBLE=function(){z()

    stage = cjs.stage(500, 500).tick().A()

    output = new createjs.Text(
            "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
            "13px courier").lWH(280,13).XY(190,10)


    background = new createjs.Shape().N("background")

    background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)


   label=new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150/2, 60/2)
       .N('label')
       .tA("center")
       .tB("middle")


    button = new createjs.Container().XY(20).N('button').A(background, label)

    // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
    // button.mouseChildren = false;

    stage.A(button, output)

    // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:


    _.each([stage,button,label,background], function(target){
        target.on("click", handleClick, false);
        target.on("click", handleClick, true)
    })

    stage.update()
}

function handleClick(e){

    if (e.currentTarget == stage && e.eventPhase == 1) {
        // this is the first dispatch in the event life cycle, clear the output.

        output.text = "target : eventPhase : currentTarget\n"}


    output.text += e.target.name + " : " + e.eventPhase+" : " + e.currentTarget.name+"\n";

    if (e.currentTarget == stage && e.eventPhase == 3) {
        // this is the last dispatch in the event life cycle, render the stage.
        stage.update()
    }


}

//SPACE BOWLING
BOWL=function(){


    stage = s = createjs.stage(1000,1000).tick().A()

    //append a container to the stage

    container = c = new createjs.Container()
    stage.A(container)

    plX= stage.W()/2

    plY=150

    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls

    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    circle = cjs.circle(plX, plY, plR, 'yellow')

    container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp = plr/(nRng-1)


    aA=[]


    var ast = function(x,y,r,m,f){

        return {

            x:x, y:y, radius:radius,

            m:m,  //?

            f:f,

            vX:0, vY:0, player:false}

       }


    _.times(nRng, function(r){

        var crR=0,
            ang=0,
            rngR=0

        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}

        _.times(crR, function(a){var x=0,y=0

            if(r==nRng-1){x=plX;y=plY}

            else{

                x=plX+(rngR*cos((ang*a)*PI/180))
                y=plX+(rngR*sin((ang*a)*PI/180))-350}

            aA.push( ast(x,y,10,5,0.95) )

            container.A(
                cjs.circle(10,'black').XY(x,y))


        })

    })
}





GRID=function(){z()

    stage = s = createjs.stage(1000,1000).tick().A()
    container = c = new createjs.Container()

    stage.A(container)



    cjs.bindSlide(container)

    rows=5;
    cols=6;
    sqP=12;
    sqS=80

    sqSP=sqS + sqP

    _.times(rows * cols, function(i){

         drawSquare(container,


                 sqSP * (i % cols),

                 sqSP * Math.floor(i/cols)
        )

    })

    function drawSquare(container,x,y){
        var rectangle = new createjs.Shape()
        container.A(rectangle)
        rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
        if(x){rectangle.X(x)}
        if(y){rectangle.Y(y)}
        return rectangle}}


testShape = function(){z()

    stage = createjs.stage(600).tick().A()
    shape = new createjs.Shape()
    stage.A(shape)
    shape.graphics.f('red').s('black').dc(400,400,200).dr(100,0,200,200)

}



TANGLE=function(){z()

    a = $.divA('r',50,50).XY(50).A().pad(10)

    b = $.divA('b',100,100).XY(100).A().pad(10)

    c = $.divA('g',200,200).XY(200).A().pad(10)

    d = $.divA('y',400,400).XY(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }

        if( bb ){ bb.A( aa.P('static') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}




ZX=function(){

    z()
    a = $.editDiv().A().C('a')
    b = $.editDiv().A().C('b')

}


 





