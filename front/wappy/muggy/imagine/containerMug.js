QUEUE=function(){z()

    s= cjs.stage(500).tick().A()

    queue = new cjs.LoadQueue()

    queue.on("complete", handleComplete, this)

    queue.loadManifest(

        [{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])

    function handleComplete(){

        image = queue.getResult("myImage")

        s.A(   cjs.bm(image)   )

    }

}

QUEUEMUG=function(){z()

    s = cjs.stage(500, 500).tick().A()

    qu = Ql().c(graphics, this).l([
        {id:"mug", src:"/getMug" },
        {id:"me", src:"/me.png"}

    ])

    ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
    function graphics(){

       // mug= s.bData( qu.gR("mug") ).drag()

        me = cjs.bm( qu.gR("me") ).drag()
        s.A( me )


    }

}


//// ***
mugCont=function(stage){
	cont = cjs.container()

    cont.flame=function(){
        cont.desuit()
        cont.A(

            cont.suit = cjs.container().bm('flame', function(flame){  })
        )
    }

    cont.uni=function(){
        cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('uni', function(uni){
                uni.x(200).y(200)
                cont.mug.sxy(.2).x(300)

            }))}
    cont.guy=function(){cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('guy', function(guy){

                guy.spin()
                cont.spin()

            })
        )}

    cont.desuit=function(){

        cont.mug.sXY(1).XY(200)
        if(cont.suit){
            cont.suit.remove()
            cont.suit=null
        }
    }
	qu = new cjs.LoadQueue().complete(onMug)
			.manifest([{id: "mug", src: "/myMug"}])
	function onMug(){

        mug = qu.getResult("mug")

        // cont.bData( mug )//.rgc('+')


        cont.A( cont.mug = cjs.bm(mug)  )



    }

    return cont}


CONTMUG=function(){z()

    s= cjs.stage(1000).A()

    s.A(  m = mugCont()  )//.rgc('+')

   // SL(m)

}
//// ***
QUEUE = function () {
	z()
	s = cjs.stage(500).tick().A()
	queue = new createjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest(
			[{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A(cjs.bm(image))
	}
}
QUEUEMUG = function () {
	z()
	s = cjs.stage(500, 500).tick().A()
	qu = Ql().c(graphics, this).l([
		{id: "mug", src: "/getMug"},
		{id: "me", src: "/me.png"}
	])
	////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
	function graphics() {
		
		// mug= s.bData( qu.gR("mug") ).drag()
		me = cjs.bm(qu.gR("me")).drag()
		s.A(me)
	}
}
//// ***
mugCont = function (stage) {
	qu = new cjs.LoadQueue().complete(onMug).manifest([{id: "mug", src: "/myMug"}])
	cont = cjs.container()
	cont.flame = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('flame', function (flame) {
				})
		)
	}
	cont.uni = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('uni', function (uni) {
					uni.x(200).y(200)
					cont.mug.sxy(.2).x(300)
				}))
	}
	cont.guy = function () {
		cont.desuit()
		cont.A(
				cont.suit = cjs.container().bm('guy', function (guy) {
					guy.spin()
					cont.spin()
				})
		)
	}
	cont.desuit = function () {
		cont.mug.sXY(1).XY(200)
		if (cont.suit) {
			cont.suit.remove()
			cont.suit = null
		}
	}
	function onMug() {
		mug = qu.getResult("mug")
		// cont.bData( mug )//.rgc('+')
		cont.A(cont.mug = cjs.bm(mug))
	}
	
	return cont
}
CONTMUG = function () {
	z()
	s = cjs.stage(1000).A()
	s.A(m = mugCont())//.rgc('+')
	// SL(m)
}
//// ***
Cycle1 = function () {
	var cont = new createjs.Container()
	cont.mug(function (mug) {
		mug.sXY(.4)
		cont.bm('uni', function (bitmap) {
			bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
			bitmap.name = 'uni'
			createjs.bindTransform(mug, cont)
			createjs.bindRotate(bitmap, cont)
		})
	})
	return cont
}
Cycle2 = function () {
	var cont = new createjs.Container()
	var qu = new createjs.LoadQueue().complete(graphics).manifest([
		{id: "mug", src: "/getMug"},
		{id: "uni", src: "/uni.png"}
	])
	
	function graphics() {
		cont.bm(
				qu.getResult("uni"),
				function (b) {
					bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
					bitmap.name = ('uni')
				})
		cont.bm(
				$.img($.parseJSON(qu.getResult("mug"))),
				function (b) {
					mug = b.sXY(.4)
				})
		SL(mug, cont)
		cjs.tween([mug, 'l'], [{y: -10}, 200], [{y: 10}, 200], [{y: 0}, 200])
	}
	
	return cont
}
CYCLE = function () {
	z()
	s = $stage(800, 800).A().tick()
	c1 = Cycle1()
	c2 = Cycle2()
	s.A(c1, c2)
}
 