QU1 = function () {
	Q('me', function () {
		$.A(Q.i('me'))
	})
}
QU2 = function () {
	Q(['me'], function () {
		$.A(Q.i('me'))
	})
}
QU3 = function () {
	Q([{src: '/me.png', id: 'me'}], function () {
		$.A(Q.i('me'))
	})
}


//

QU4 = QUEUE = function () {
 
	s = new cjs.Stage($.c('b', 500, 500)[0])
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest([
		{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}
	])
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A($Bm(image))
	}
}
 
QU6=QUEUEMUG = QM = function () {
 
	s = new cjs.Stage($.c('b', 500, 500)[0])
	Q([{id: "mug", src: "/myMug"}],
			function () {
			
				mug = new cjs.Bitmap( $.i(Q.i('mug'))).dg()
			
				
				s.A(mug)
			})
}
 
 
QU8=QU=QUEUE = function () {
 
	s = new cjs.Stage($.c('b', 500, 500)[0])
	
	
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest([
		{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}
	])
	
	
	function handleComplete() {
		image = queue.getResult("myImage")
		s.A($Bm(image))
	}
}


QU9 =MF = function () {
	W().C('r')
	
	Q(['me', 'guy', 'chicks', 'sun'], function () {
		w.C('g')

		
		w.i.A(

				Q.b('me'),
				Q.b('guy')
		)
		
	})
	
	
}
QU7 =QUEUEMUG = QM = function () {
 
	s = new cjs.Stage($.c('b', 500, 500)[0])
	Q([{id: "mug", src: "/myMug"}],
			function () {
				mug = $Bm($.i(Q.i('mug'))).dg()
				s.A(mug)
				})
}

		
QU10 =MNF=MANIFEST = function () {

	s = new cjs.Stage($.c('b',500,500)[0])
	
	Q(['me', 'guy'], function (q) {
	
		s.A(me = q.bm('me'))
		s.A(guy = q.bm('guy'))
		guy.drag()
	
	})
}
 