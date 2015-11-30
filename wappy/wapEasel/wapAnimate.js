 
 
meSprite=function(){
    return $sprite(   SS ).XY(10).drag()
}




SPRITE=function(sprite){

    sprite = $sprite( sprite || SS ).XY(10).drag()

    stage = createjs.stage('orange', 400 ).tick().A().drag()//.op(.7),
    stage.A( sprite )


        controls={
            jump:function(){ sprite.gotoAndPlay('jump') },
            explode:function(){ sprite.gotoAndPlay('explode') },
            spin:function(){ sprite.gotoAndPlay('spin') },
            stop:function(){ sprite.stop() },
            play:function(){ sprite.play() } }


    $.div('yellow',460, 89).css({
        position:'absolute',
        top: 200,
        left: 300,
        padding:20,
        opacity:.9

    }).A().drag().A(

        $.span(' '),
        $.button('spin',function(){    controls.spin() }), $.span(' '),
        $.button('jump',function(){    controls.jump() }), $.span(' '),
        $.button('explode',function(){   controls.explode()  }), $.span(' '),
        $.button('play',function(){   controls.play()  }), $.span(' '),
        $.button('stop',function(){   controls.stop()  }), $.span(' '),
        $.button('meta', function(){ SPRITE() })

    )

    s = sprite
    return  controls}



SPRITE2=function( ){

    stage = createjs.stage('orange', 400 ).tick().A().drag()//.op(.7),

    stage.A(   sprite = $sprite(   SS ).XY(10).drag() )

}



PACK = function(){

    stage = cjs.stage(800).A()

    //stage.op(.7)

    sprite = $sprite(Pack).XY( 200, 260 ).sXY(1.2).drag()


    stage.A(sprite)

         //.rgc()
    sprite.framerate=6

    sprite.play()


}
 


//make movie
MOVIE=function(){//wap()
z()
    var s=$.canvas('blue', 800, 800).A().stage.tick(),

        div=$.div().A(),

    fn=function(){}

    $.getJSON('/img', function(imgs){

        _.each(imgs, function(v){ v=v.d

            var canvas =  $.canvas(100,100).A().fit(v)

            canvas.click( function(){

                    s.bm(v,function(b){bb=b

                        createjs.bindTransform(b);

                        //fn(b)
                        b.click(function(q){   fn(q)   }) },

                        '+')

                })

            div.A( canvas   )


        })

        part2=function() {
            c = cnt(
                $.row.A(
                    $.div()(div, s),


                    $.div().A(
                        $.button('shake', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})

                                    .to(ww({x: b.x()}, 500))
                                    .to(ww({x: b.x() + 100}), 500)
                                    .to(ww({x: b.x()}), 500)

                            }
                        }),


                        $button('rotate', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})
                                    .to(ww({kxy: 0})).to(ww({kxy: 20}), 500).to(ww({kxy: 0}), 500)
                            }
                        }),


                        $button('size', function () {
                            fn = function (b) {
                                W$.get(b.obj(), {loop: true})
                                    .to(ww({sxy: 1})).to(ww({sxy: 1.3}), 500).to(ww({sxy: 1}), 500)
                            }
                        })
                    )))
        }

        //c.o('$$',function(){  s.sv(ART)})

    })

    return s}



STAGE=function(){z()

    m$$("location=location")

    s=St(600).a().rgc().drg().xy(300)
    s.bm('chicks')
    s.bm('me',function(mm){
        m=mm
        m.rgc()
             m.xy(300)

        cjs.tween(s, [{r:-10000 },300000])
        cjs.tween(m, [{r:100000 },300000])


    })

    s.bm('guy',function(){})



}

CJSSPINNER=function(){z()

    s= cjs.stage('purple', 1000).A().rCenter()

    cjs.tween(s, [{r:-10000 },300000])

    s.bm('me',function(bm){m=bm.XY(500)
        SL(bm)})

    s.A( r = cjs.rectangle(400,400, 'orange', 'red').XY(1200) )
    s.A( r2 = cjs.rectangle(300,300, 'pink', 'red').XY(800) )
    s.A( r3 = cjs.rectangle(300,300, 'green', 'green').XY(0) )
}


RECTS=function(){z()
    x=20
    y=20

    s=cjs.stage(500).A()//.drag()


    h0= cjs.shape().rect(-20,-20,x+40,y+40,'yellow','yellow')
    h1= cjs.shape().rect(-10,-10,x+20,y+20,'red','pink')
    h2= cjs.shape().rect(0,0,x,y,'orange','black')

    s.A(h0, h1, h2)

    SL(h2)
    SL(h2,h1)
    SL(h2,h0)

    RT(h1)
    RT(h1,h2)
    RT(h1,h0)


    SC(h0)
    SC(h0, h2)
    SC(h0, h1)

    a=function(){
        x+=20;
        y+=20
        h1.clear()
        h2.clear()
        h1.rect(-10,-10,x+20,y+20,'black','pink')

        h2.rect(0,0,x,y,'orange','transparent')
    }

   // h0.rect(50,50,30,30,'black','orange')





}



