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
CJSLAY = function () {
	Q(['me', 'guy'], function (q) {
		st = $St()
		me = q.bm('me').a2(st).sXY(3)
		guy = q.bm('guy').a2(st).sXY(.5).drag()
		$.bt('s.sXY(2)', function () {
			st.sXY(2)
		}).A()
		cjs.t(function () {
			me.X(guy.x * 2.2 - 140)
			me.Y(guy.y * .2)
		})
	})
}//B-
PEEP = PEEPHOLE = WIND = function () {
	W()._(function () {
		$.hdr().A($.h1('grahics winding')).A()
		bm = w.i.qB('chicks').X(470).drag()
		h = w.i.h()
		h.graphics.f("pink").dr(20, 20, 450, 360)
				.arc(160, 160, 110, 0, M.PI * 2, true).closePath()
				.arc(330, 240, 110, 0, M.PI * 2, true).closePath()
		bm.mask = h.same().X(470)
	})
}//B+
WOAH = SPINTIMTIM = function () {
	Q(['guy', 'me'], function () {//z()
		st = $St($.c('p', 1200, 600)[0]).A();
		st.c = $(st.canvas) //s.bm('me', function(bb){b=bb.drag() })
		st.qB('guy').XY(300, 300).spin()
		st.qB('guy').XY(300, 300).sXY(.5, .3).spin()
		T.t(function () {
			st.u()
		})
		_.in(3, function () {
			T.f(1)
		})
		_.in(9, function () {
			T.f(1000)
		})
	})
}//C+
EASELPHYS = function () {
	i.vX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.vY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.jX = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vx = this.vx + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vx = this.vx - a
			}
			else {
				this.vx = this.vx * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vx
		}
		this.vx = a;
		return this
	}
	i.jY = function (a) {
		var g = G(arguments);
		a = g[0]
		if (g.p) {
			this.vy = this.vy + a;
			return this
		}
		else if (g.n) {
			if (N(a)) {
				this.vy = this.vy - a
			}
			else {
				this.vy = this.vy * -1
			}
			return this
		}
		else if (U(g[0])) {
			return this.vy
		}
		this.vy = a
		return this
	}
	i.move = function () {
		return this.X(this.vx || 0, '+').Y(this.vy || 0, '+')
	}
	$St().bm('me', function (b) {
		b.go(10, 10)
		cjs.t(function () {
			$l(b.inStage())
		})
	})
}
//offical examples:
WINDG = function () {
	cjs.manifest(function (q) { //$.header().A($.h1('grahics winding')).A()
		$.div().A($.canvas(960, 400).id("testCanvas"))
		s = stage = cjs.stg(["testCanvas"])
		h = shape = cjs.worldsMostInterestingShape().a2(stage).drag()
		bm = cjs.bm(q("chicks"), '-').a2(s).X(470).drag()
		bm.mask = h.same().X(470)
	})
}
