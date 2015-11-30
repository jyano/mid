
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

 
 
INDEXX=function(){z()

    s=dragStage().bm('me',function(bm){b=bm


        SL(b)

        _.times(10,  function(){s.bm('guy',SL)  })

        s.ix(b, 3)
    })



}

 