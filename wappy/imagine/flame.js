 


 
Flame1=function(){
    var c=new cjs.Container().drag()
    c.bm('flame', function(b){

             tweens.shakeY(b)

            c.mug(function(b){

                b.rCenter()

                tweens.shakeX( tweens.rott(b) )

                    c.bm('flame', tweens.shakeX)

                })

            c.on('dblclick',function(){

                c.bm('flame',
                    function(b){
                        b.sXY(.2)
                        tweens.prod1(b)})

                c.bm('flame',

                    function(b){
                        b.sXY(.2)
                        tweens.prod2(b)



                    })})

        })
    return c}


FLAME=function(){
    s= $stage(800, 800).A().tick()
    f=Flame1().X(300)
    s.A(  f )
}
Flame1 = function () {
	var c = new cjs.Container().drag()
	c.bm('flame', function (b) {
		tweens.shakeY(b)
		c.mug(function (b) {
			b.rCenter()
			tweens.shakeX(tweens.rott(b))
			c.bm('flame', tweens.shakeX)
		})
		c.on('dblclick', function () {
			c.bm('flame',
					function (b) {
						b.sXY(.2)
						tweens.prod1(b)
					})
			c.bm('flame',
					function (b) {
						b.sXY(.2)
						tweens.prod2(b)
					})
		})
	})
	return c
}
FLAME = function () {
	s = $stage(800, 800).A().tick()
	f = Flame1().X(300)
	s.A(f)
}
Flame1 = function () {
	var c = new cjs.Container().drag()
	c.bm('flame', function (b) {
		tweens.shakeY(b)
		c.mug(function (b) {
			b.rCenter()
			tweens.shakeX(tweens.rott(b))
			c.bm('flame', tweens.shakeX)
		})
		c.on('dblclick', function () {
			c.bm('flame',
					function (b) {
						b.sXY(.2)
						tweens.prod1(b)
					})
			c.bm('flame',
					function (b) {
						b.sXY(.2)
						tweens.prod2(b)
					})
		})
	})
	return c
}
FLAME = function () {
	s = $stage(800, 800).A().tick()
	f = Flame1().X(300)
	s.A(f)
}
 