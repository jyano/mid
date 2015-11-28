 
 
 
ZOE = function () {
	W()
	//this is a sprite sheet literal, but not an actual ss
	//cjs.Sp converts it to a ss for us, before passing it in
	// to cjs.Sprite to make the actual sprite object
	x0 = w.S(800, 200, 'r', 40, 40, 0, 0, 45)
	
	i = x0.Sp($SS({
		r: 24,
		i: ["/zoetest.png"],
		f: [
			[0, 0, 512, 256, 0, -133, -143],
			[512, 0, 512, 256, 0, -133, -143],
			[1024, 0, 512, 256, 0, -133, -143]],
		a: {}
	}))
	i.p()
	
	sp = w.S(500, 300, 'X', 40, 40).Sp($SS({
		r: 24,
		i: ["/sprite2.png"],
		f: [
			[0, 0, 128, 128, 0, -176, -161],
			[128, 0, 128, 128, 0, -176, -161],
			[256, 0, 128, 128, 0, -176, -161]],
		a: {
			"weird": {"speed": 1, "frames": [2]},
			"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
		}
	}))// -150,-140)
	// _.e(  sp.as(), function(n){   sp[n]=function(){sp.p(n)}   })
	b = w.D(300, 200, 'r', 40, 40).cn('thrust')
	b.Sp($SS({
		r: 4, i: ["stick.png"],
		f: [
			[0, 0, 512, 512, 0, -22, -2],
			[512, 0, 512, 512, 0, -22, -2],
			[1024, 0, 512, 512, 0, -22, -2],
			[0, 512, 512, 512, 0, -22, -2],
			[512, 512, 512, 512, 0, -22, -2],
			[1024, 512, 512, 512, 0, -22, -2],
			[0, 1024, 512, 512, 0, -22, -2],
			[512, 1024, 512, 512, 0, -22, -2],
			[1024, 1024, 512, 512, 0, -22, -2],
			[0, 1536, 512, 512, 0, -22, -2],
			[512, 1536, 512, 512, 0, -22, -2],
			[1024, 1536, 512, 512, 0, -22, -2]
		],
		a: {
			die: {"frames": [8, 9, 10], "speed": .1, next: false},
			walk: {"frames": [1, 2, 3, 4], "speed": .1},
			jump: {"frames": [5, 6, 7, 0], "speed": .1, next: false}
		}
	}), 40, 0, .6, .6, 20)
	b1 = w.D(200, 200, 'b', 60)
	.Sp('char')//, -150, -110)//.rXY(275,220)
	
	w.S(100, 500, 'r', 100, 100)
	.K('hurt').bS('guy', .6)
	
	w.S(500, 500, 'r', 100, 100).K('fly')
	w.cl('hurt', function () {
		b1.p('hurt')
		//b1.I(10, -20)
	})
	
	w.cl('fly', function () {
		b1.p('fly')
		//b1.I(-10, -20)
	
	})


}//A------
MUMMY = HEADTURNS = PACK = PACKANIM = function () {
	
	W({g: 0, w: '<-'});//w.Z(.1);cjs.rulers();w.showOff()
	
	p = w.D(100, 100, 'X', 100, 100).K('mummy').tr()
	
	p.gx = w.g.ct()
	// you must set reg point BEFORE you scale
	// because once you scale, 'W/H' return u the scaled height
	// but you need to set regX/Y based on original scale
	
	sp = p.Sp(Mummy, 110,110, 2.5).p('walk')
	
	p.Bm('me', 0, -50, -.3, .3)
	// sp.sXY(2, 200,-100)
	// b.bS('me', .3, -5, -22)
	x = w.S(500, 400, 'X', 200, 40, 60, 60, '-')
	//x.rt(90).fR().bS($Sp(Pack).rC().sXY(.4)).p('e4')
	x.Sp(Pack, 0, 0, .5).p('e4')
	
	//.cl(function(){p.I(1000,1000)})
	// p.cl(x, function () { p.lV(10000, -400) })
	
	$.kD({
		u: function () {
			if (p.Y() > 530) {
				p.I(0, -380)
			}
		}, //jumpButtonPressed = true
		U: function () {
		}, //jumpButtonPressed = false
		l: function () {
			p.gx.sX(-1);
			p.direction = 'left'
		},
		r: function () {
			p.gx.sX(1);
			p.direction = 'right'
		}
	})
	
	T.t(function () {
		// p.rot(0)
//		if (p.sp().dir() == 'right') {p.I(100, -2)}
//		else if (p.sp().dir() == 'left') {p.I(-100, -2)}
		// direction='neither' // <-- demumify (doesnt keep walking
		//if(jumpButton is pressed){jump()}
		// p.I(0, 200)
	})
	
	
	gx = w.pack()
			.sen(1)
			.lD(100).aD(100)
	w.$$(function () {
		anim = _.keys(Pack.animations)[_.random(23)]
		$l('changed to ' + anim)
		f1.sp().p(anim)
	})
}//A-
FIRESPR = function () {
	W({g: 100, w: '_'}); //'<-'
	w.Z(.1);
	// cjs.rulers();
	//  w.showOff()
	w.p()
	gx = w.pack(300, 300)
	//gx.fR()
	gx.f(200)
	ya()
	//.lD(100).aD(100)
	w.$$(ya)
	function ya() {
		anim = _.keys(Pack.animations)[_.random(33)]
		$l('changed to ' + anim)
		gx.sp().p(anim)
	}
	
	T.t(function () {
		if (gx.X() < 0) {
			gx = w.pack()
			ya()
		}
	})
}//C+
SPRITE = function (sp) {
	W()
	w.i.A(
			sp = $Sp(sp || SS).XY(10).drag()
	)
	co = {
		jump: function () {
			sp.p('jump')
		},
		explode: function () {
			sp.p('explode')
		},
		spin: function () {
			sp.p('spin')
		},
		stop: function () {
			sp.s()
		},
		play: function () {
			sp.p()
		}
	}
	$.d('y', 460, 89).css({
		position: 'absolute',
		top: 200,
		left: 300,
		padding: 20,
		opacity: .9
	}).A().drag().A($.sp(' '),
			$.bt('spin', function () {
				co.spin()
			}), $.sp(' '),
			$.bt('jump', function () {
				co.jump()
			}), $.sp(' '),
			$.bt('explode', function () {
				co.explode()
			}), $.sp(' '),
			$.bt('play', function () {
				co.play()
			}), $.sp(' '),
			$.bt('stop', function () {
				co.stop()
			}), $.sp(' '),
			$.bt('meta', function () {
				SPRITE()
			})
	)
	return co
}//A+++++
SSBUILDER = function () {
	z();
	cjs.testCanvas = function () {
		return $.d().A($.c(960, 400).id("testCanvas"))
	}
	cjs.testCanvas()
	//canvas=document.getElementById("testCanvas")
	s = stage = $St(["testCanvas"]).tick()
	cjs.Ticker.setFPS(30)
	scale = 0.4
	mc = cjs.gunner().drag()
	w = mc.nominalBounds.width * scale
	mc.tf(100 + w / 2, 100, scale, scale).a2(s)
	label1 = new cjs.Text("MovieClip-vector", "14px Arial", "#111").a2(s).textA("center").transform(mc.x, 30)
	label2 = label1.clone().a2(stage).T("Sprite-raster").X(w + 50, '+')
	b = builder = cjs.builder(mc)
	b.Z(scale).maxW(1024)
	b.async(function (ev) {
		sprite = cjs.sprite(ev.target.spriteSheet)
		sprite.transform(mc.x + w + 50 || 0, mc.y).a2(s).drag()
		mc.gotoAndPlay(0)
		sprite.gotoAndPlay(0)
	})
	img = builder._data.images[0]
	$('body').A(img)


}//B+


 