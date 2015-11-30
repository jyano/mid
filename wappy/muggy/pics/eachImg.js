
eachImage = eaI=function(f){


    $.getJSON('/img',
        function(i){ _.each(i, f) } )
}




sav=function(stage,a){
    return function(){ stage.sv(a) }
}

 
testStage = function(){

    z()

    stage =createjs.stage(800).tick().A()

   stage.mug(function(){}, stage)
   // stage.bm('/me.png')


}

 



rotateShake = function(bm){EaselTween(  [bm,'l'  ],  {r:0},  [ {  r:1}, 1],  [ { r:-1 },1]) }
scaleShake = function(bm){EaselTween(  [bm,'l'  ],  {sxy:1},  [ {  sxy:.95}, 1],  [ { sxy:1.05 },1] ) }

 

INDEXX=function(){z()

    s=dragStage().bm('me',function(bm){b=bm


        SL(b)

        _.times(10,  function(){s.bm('guy',SL)  })

        s.ix(b, 3)
    })



}

 