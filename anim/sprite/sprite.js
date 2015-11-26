function sheet() {
	sS = ss = cjs.SpriteSheet.prototype
	sS.flp = sS.addFlipped = function (a, b, c) {
		cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
		return this
	}
	cjs.sSU = cjs.SpriteSheetUtils
	$SS = function (ss) {
		ss.images = ss.images || ss.i
		ss.animations = ss.animations || ss.a
		ss.frames = ss.frames || ss.f
		ss.framerate = ss.framerate || ss.r
		ss = new cjs.SpriteSheet(ss)
		//fix source (needs a '/')
		//ss.images[ 0 ] = _.ensureSlash( ss.images[0] )
		//set next to false, on all anims
		// _.e(ss.animations, function(an){an.next = false})
		//to do: parse it! (get rid of unnecessary json strings in keys)
		return ss
	}
	cjs.spriteSheet = function (a) {
		return new cjs.SpriteSheet(a)
	}
	cjs.parseZoe = function (sprObj) {
		
		
		//fix source (needs a '/')
		sprObj.images[0] = S.eL(sprObj.images[0])
		//set next to false, on all anims
		//_.e(sprObj.animations, function(anim){anim.next = false})
		//to do: parse it! (get rid of unnecessary json strings in keys)
		return sprObj
	}
}
$Sp = function (ss, x, y) {
	var g = G(arguments), sp
	//call a spritesheet by name
	if (S(ss)) {
		ss = cjs._sp[ss]
	}
	//it if it is a ss lit, it makes it into a ss
	//make a sprite
	sp = new cjs.Sprite(ss.images || ss.i ? $SS(ss) : ss)
	sp.ss = sp.spriteSheet
	sp.XY(N(x, 0), N(y, 0))
	return sp
}
$Sp = function (ss, x, y) {
	var g = G(arguments), sp
	//call a spritesheet by name
	if (S(ss)) {
		ss = cjs._sp[ss]
	}
	//it if it is a ss lit, it makes it into a ss
	//make a sprite
	sp = new cjs.Sprite(ss.images || ss.i ? $SS(ss) : ss)
	sp.ss = sp.spriteSheet
	sp.XY(N(x, 0), N(y, 0))
	return sp
}

 
cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
	if (spriteSheet.images) {
		spriteSheet = cjs.parseZoe(spriteSheet)
		spriteSheet = new cjs.SpriteSheet(spriteSheet)
	}
	return new cjs.Sprite(spriteSheet)
}
cjs.sprite100 = function (a) {
	var spr = cjs.sprite(a)
	spr.rXY(50)
			.opacity(.8)
	return spr
}
cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
	if (spriteSheet.images) {
		spriteSheet = cjs.parseZoe(spriteSheet)
		spriteSheet = new cjs.SpriteSheet(spriteSheet)
	}
	return new cjs.Sprite(spriteSheet)
}
cjs.sprite100 = function (a) {
	var spr = cjs.sprite(a)
	spr.rXY(50)
			.opacity(.8)
	return spr
}
meSprite = function () {
	return $Sp($SS).XY(10).drag()
}


 
cjs.sSU = cjs.SpriteSheetUtils
function more() {
	$spriteSheet = function (ss) {
		return new createjs.SpriteSheet(ss)
	}
	Sp = function (ss, func, stage) {
		return Ql({
			m: makeManifest(ss),
			c: function (i) {
				var sprite = EaselSprite(new createjs.SpriteSheet(s))
				if (stage) {
					stage.A(sprite)
				}
				if (func
				) {
					func(SuperSprite(sprite), sprite)
				}
			}
		})
	}
	SuperSprite = function (x) {
		var o = Do(x)
		o.ob = x
		o.sS = o.ss = o.ob.spriteSheet
		o.numFrames = o.nF = function () {
			return o.sS.getNumFrames()
		}
		o.getAnim = o.gA = function (a) {
			return U(a) ? o.sS.getAnimations()
					:
					o.sS.getAnimation(a)
		}
		//set/get NEXT animation on an animation
		o.next = o.gAN = function (anim1, nextAnim) {
			var g = G(arguments), anim1 = g[0], nextAnim = g[1],
					theAnim = o.gA(anim1)
			//if you just pass in the anim1 string
			if (U(nextAnim)) {
				
				//set its next to itself
				if (g.p) {
					theAnim.next = theAnim;
					return o
				}
				//set its next to false
				if (g.n) {
					theAnim.next = false;
					return o
				}
				//get its next
				return theAnim.next
			}
			theAnim.next = nextAnim
			//loop the TWO anims
			if (g.p) {
				o.gA(nextAnim).next = anim1
			}
			return o
		}
		o.play = o.p = function (a, b) {
			var g = G(arguments),
					a = g[0],
					b = g[1],
					l = g.f,
					n
			if (U(a)) {
				o.ob.play();
				return o
			}
			if (U(b)) {
				if (g.n) {
					o.next(a, false)
				}
				if (g.p) {
					o.next(a, a)
				}
				o.ob.gotoAndPlay(a)
				return o
			}
			_.each(g.r, function (a) {
				o.next(l, a)
				l = a
			})
			o.next(g.l, g.isPlaying ? false : g.f)
			o.play(g.f)
		}
		o.stop = o.s = function (a) {
			if (D(a)) {
				o.ob.gotoAndStop(a)
			} else {
				o.ob.stop()
			}
			;
			return o
		}
		o.isPlaying = o.P = function () {
			return !o.ob.paused
		}
		o.frame = o.currentFrame = o.cF = o.cf = function (num) {
			var args = G(arguments), num = args[0]
			if (args.p) {
				return o.frame(
						o.frame() + ( N(num) ? num : 1 )
				)
			}
			if (args.n) {
				return o.frame(
						o.frame() - ( N(num) ? num : 1 )
				)
			}
			if (U(num)) {
				return o.ob.currentFrame
			}
			$l(num)
			return o.isPlaying() ? o.play(num) : o.stop(num)
		}
		o.anim = o.cA = o.ca = function (a) {
			return U(a) ?
					o.ob.currentAnimation :
					o.isPlaying() ? o.play(a) : o.stop(a)
		}
		o.advance = o.av = function (a) {
			o.ob.advance(a);
			return o
		}
		o.oC = o.cm = function (a) {
			o.ob.on('complete', a)
		}
		//will run each loop
		o.oAe = o.ae = function (a) {
			o.o('animationend', a);
			return o
		}
		o.rate = o.fR = o.frameRate = o.fr = function (a) {
			var g = G(arguments), a = g[0]
			if (g.p) {
				return o.fr(o.fr() + (N(a) ? a : 1))
			}
			if (g.n) {
				return o.fr(o.fr() - (N(a) ? a : 1))
			}
			if (g.m) {
				return o.fr(o.fr() * (N(a) ? a : 2))
			}
			if (g.d) {
				return o.fr(o.fr() / (N(a) ? a : 2))
			}
			if (U(a)) {
				return o.ob.framerate
			}
			$l(a)
			o.ob.framerate = a;
			return o
		}
		o.cAF = o.caf = function (a) {
			if (U(a)) {
				return o.ob.currentAnimationFrame
			}
		}
		return o
	}
}
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
STICK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new createjs.SpriteSheet({
		images: ["/stick.png"],
		frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
	});
	stick_p = stick.prototype = new createjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	__S()
	p = new stick()
	st.A(p)
}
STK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new createjs.SpriteSheet({
		images: ["/stik.png"],
		frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
	})
	stick_p = stick.prototype = new createjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	__S()
	p = new stick()
	st.A(p)
	p.XY(300, 100)
	p.gotoAndStop()
}
SIDE = function () {
	(function (window) {
		side = function () {
			this.initialize();
		}
		side._SpriteSheet = new createjs.SpriteSheet({
			images: ["/side.png"],
			frames: [
				[0, 0, 519, 297, 0, 236.95, 39.5],
				[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5],
				[519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5],
				[519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5],
				[0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5],
				[352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5],
				[0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5],
				[0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]
			],
			animations: {
				walkLeft: [0, 9, 'walkLeft', 1],
				takeoff: [10, 14, 'takeoff']
			}
		});
		var side_p = side.prototype = new createjs.Sprite();
		side_p.Sprite_initialize = side_p.initialize;
		side_p.initialize = function () {
			this.Sprite_initialize(side._SpriteSheet);
			this.paused = false;
		}
		side_p.walkLeft = function () {
			this.gotoAndPlay("walkLeft");
		}
		side_p.takeoff = function () {
			this.gotoAndPlay("takeoff");
		}
		window.side = side;
	}(window));
	__S()
	st.A(p = new side())
	p.XY(400, 200)
	p.walkLeft()
	p.sXY(.5)
	p.gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				p.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				p.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				p.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				p.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
	
	T.t(function () {
		if (lfHeld) {
			p.x -= 15
		}
		if (rtHeld) {
			p.x += 15
		}
		if (upHeld) {
			p.y -= 4
		}
		if (dnHeld) {
			p.y += 4
		}
		if (lfHeld && keyDn == false) {
			p.sX(.5)
			p.gotoAndPlay('walkLeft')
			keyDn = true
		}
		if (rtHeld && keyDn == false) {
			p.sX(-.5)
			p.gotoAndPlay('walkLeft')
			keyDn = true
		}
		if (upHeld && keyDn == false) {
			p.gotoAndPlay('takeoff')
			keyDn = true
		}
	})
}

function more(){
	MUMMYFLIP = function () {
		w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
		b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
				cjs.sprite(Mummy).a2(w.s).drag()
						.rXY(20, 22).sXY(2).XY(200))
		b.coll(function () {
			b.linVel(0)
		})
		b.sprite.p('walk')
		cjs.tick(function () {
			b.rT(0)
			if (b.direction == 'right') {
				b.I(4, -2)
			}
			else if (b.direction == 'left') {
				b.I(-4, -2)
			}    // direction='neither' // <-- demumify (doesnt keep walking
			//if(jumpButton is pressed){jump()}
		})
		$.kD({
			u: function () {
				//jumpButtonPressed = true
				if (b.Y() > 530) {
					b.I(0, -80)
				}
			},
			U: function () {
				//jumpButtonPressed = false
			},
			l: function () {
				b.sprite.sX(-2)
				b.direction = 'left'
			},
			r: function () {
				b.sprite.sX(2)
				b.direction = 'right'
			}
		})
	}
	cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
		ssb = new createjs.SpriteSheetBuilder()
		if (mc) {
			ssb.A(mc)
		}
		return ssb
	}
	cjs.spriteSheet = function (a) {
		return new cjs.SpriteSheet(a)
	}
	cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
		if (spriteSheet.images) {
			spriteSheet = cjs.parseZoe(spriteSheet)
			spriteSheet = new cjs.SpriteSheet(spriteSheet)
		}
		return new cjs.Sprite(spriteSheet)
	}
	cjs.sprite100 = function (a) {
		var spr = cjs.sprite(a)
		spr.rXY(50)
				.opacity(.8)
		return spr
	}
	ZOENOANIM = function () {
		z()
		spr = cjs.sprite({
			"framerate": 24,
			"images": ["/zoetest.png"],
			"frames": [
				[0, 0, 512, 256, 0, -133, -143],
				[512, 0, 512, 256, 0, -133, -143],
				[1024, 0, 512, 256, 0, -133, -143]
			],
			"animations": {}
		})
		s = cjs.stg(1000).A()
		s.A(spr)
	}
	ZOEFRAMES = function () {
		z()
		spr = cjs.sprite({
			"framerate": 24,
			"images": ["/sprite2.png"],
			"frames": [
				[0, 0, 128, 128, 0, -176, -161],
				[128, 0, 128, 128, 0, -176, -161],
				[256, 0, 128, 128, 0, -176, -161]
			],
			"animations": {
				"weird": {"speed": 1, "frames": [2]},
				"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
			}
		})
		anis = spr.spriteSheet._animations
		// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
		s = cjs.stg(1000).A()
		s.A(spr.drag())
	}
	CHAR0 = function () {
		showSprite(Sprites.char)
		function showSprite(sprite) {
			z()
			s = cjs.stg(1000).A()
			spr = cjs.sprite(sprite).drag().a2(s)
		}
	}
	CHAR = function () {
		w = b2d.W().debug()
		w.begin(function (cx) {
			if (cx.with('hurt')) {
				b.p('hurt').I(100, -200)
			}
			if (cx.with('fly')) {
				b.p('fly').I(-100, -200)
			}
		})
		b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
		guyBrick(100).K('hurt')
		guyBrick(500).K('fly')
		function guyBrick(x) {
			return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
		}
	}
	cjs.parseZoe = function (sprObj) {
		
		
		//fix source (needs a '/')
		sprObj.images[0] = _.ensureSlash(sprObj.images[0])
		//set next to false, on all anims
		//_.each(sprObj.animations, function(anim){anim.next = false})
		//to do: parse it! (get rid of unnecessary json strings in keys)
		return sprObj
	}
	STICK = function () {
		w = b2d.W({grav: 3})
				.chalk('spritebox example').debug()
		w.spriteBox({
			"framerate": 4,
			"images": ["stick.png"],
			"frames": [
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
			"animations": {
				"die": {"frames": [8, 9, 10], "speed": .1, next: false},
				"walk": {"frames": [1, 2, 3, 4], "speed": .1},
				"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
			}
		}, 300, 200, .25).mario()
		w.rect(600, 200, 50, 50, 'p')
		w.circ(600, 100, 40, 'b')
	}
//OLD
	THRUSTSCROLL = function () {
		z()
		// s = cjs.stage('green', 1000).A()
		//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
		w = b2.mW({grav: 0})
		p = w.player('thrust')
		//sp = cjs.sprite( Mummy ).drag()
		// w.s.A( sp )
		// sp.sXY( 2 ).XY( 200 )
		//  sp.gotoAndPlay('walk')
		// sp.rXY( 20, 22 )
		// b = b2.box( 100, 100, 50, 88).uD('mummy')
		// b.bindSprite2(sp)
		direction = 'right'
		cjs.tick(function () {
			w.eachBody(function (body) {
				if (body.uD() != 'player') {
					body.X(body.X() + p.X())
				}
			})
		})
		tr = w.A(b2.dynamicDef(), b2.triangleFixt)
		moveLeft = function () {
			w.eachBody(function (body) {
				if (body.uD() != 'player') {
					body.X(body.X() + 10)
				}
			})
		}
		moveRight = function () {
			w.eachBody(function (body) {
				if (body.uD() != 'player') {
					body.X(body.X() - 10)
				}
			})
		}
	}
	moveEachBodyButGuy = function () {
		$.kD('l', function () {
			w.eachBody(function (body) {
				if (body.K() != 'guy') {
					body.X(body.X() + 20)
				}
			})
		})
		$.kD('r', function () {
			w.eachBody(function (body) {
				if (body.K() != 'guy') {
					body.X(body.X() - 20)
				}
			})
		})
		$.kD('d', function () {
			w.eachBody(function (body) {
				if (body.K() != 'guy') {
					body.Y(body.Y() - 20)
				}
			})
		})
		$.kD('u', function () {
			w.eachBody(function (body) {
				if (body.K() != 'guy') {
					body.Y(body.Y() + 20)
				}
			})
		})
	}
	BUTME = function () {
		w = b2d.W({
			grav: 0, walls: []
		})
		//p = w.player('thrust').XY(500,100)
		w.brick(100, 300, 200, 30).rT(30)
		w.brick(400, 200, 400, 100).rT(30)
		g = w.box(400, 300, 30, 30).bindSprite('guy').K('guy')
		moveEachBodyButGuy()
		cjs.tick(function () {
			// w.each(function(b){ b.rT(  b.rT() + 10) })
			g.XY(400, 300)
		})
	}
	BUTMEBETTER = function () {
		z()
		w = b2.mW({
			grav: 0,
			walls: []
		})
		//p = w.player('thrust').XY(500,100)
		w.bumper(200, 200, 100)
		w.bumper(600, 300, 100)
		g = w.box(400, 300, 30, 30).bindSprite('guy').K('guy')
		moveEachBodyButGuy()
	}}
	function ditto(){
		MUMMYFLIP = function () {
			w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right
			b = b2d.box(100, 100, 50, 88).K('mummy').bindSprite2(
					cjs.sprite(Mummy).a2(w.s).drag()
							.rXY(20, 22).sXY(2).XY(200))
			b.coll(function () {
				b.linVel(0)
			})
			b.sprite.p('walk')
			cjs.tick(function () {
				b.rT(0)
				if (b.direction == 'right') {
					b.I(4, -2)
				}
				else if (b.direction == 'left') {
					b.I(-4, -2)
				}    // direction='neither' // <-- demumify (doesnt keep walking
				//if(jumpButton is pressed){jump()}
			})
			$.kD({
				u: function () {
					//jumpButtonPressed = true
					if (b.Y() > 530) {
						b.I(0, -80)
					}
				},
				U: function () {
					//jumpButtonPressed = false
				},
				l: function () {
					b.sprite.sX(-2)
					b.direction = 'left'
				},
				r: function () {
					b.sprite.sX(2)
					b.direction = 'right'
				}
			})
		}
		cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function (mc) {
			ssb = new createjs.SpriteSheetBuilder()
			if (mc) {
				ssb.A(mc)
			}
			return ssb
		}
		Sprites = {}
		Sprites.char = {
			framerate: 24,
			images: ["/char.png"],
			frames: [
				[0, 0, 256, 256, 0, -159, -138],
				[256, 0, 256, 256, 0, -159, -138],
				[512, 0, 256, 256, 0, -159, -138],
				[768, 0, 256, 256, 0, -159, -138],
				[1024, 0, 256, 256, 0, -159, -138],
				[1280, 0, 256, 256, 0, -159, -138],
				[1536, 0, 256, 256, 0, -159, -138],
				[0, 256, 256, 256, 0, -159, -138],
				[256, 256, 256, 256, 0, -159, -138],
				[512, 256, 256, 256, 0, -159, -138]],
			animations: {
				df: {"frames": [0]},
				jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
				die: {"frames": [4, 5], speed: .1, next: false},
				hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
				fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
				nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}
			}
		}
		Sprites.char2 = {
			framerate: 24,
			images: ["/char2.png"],
			"frames": [
				[0, 0, 256, 256, 0, -159, -138],
				[256, 0, 256, 256, 0, -159, -138],
				[512, 0, 256, 256, 0, -159, -138],
				[768, 0, 256, 256, 0, -159, -138],
				[1024, 0, 256, 256, 0, -159, -138],
				[1280, 0, 256, 256, 0, -159, -138],
				[1536, 0, 256, 256, 0, -159, -138],
				[0, 256, 256, 256, 0, -159, -138],
				[256, 256, 256, 256, 0, -159, -138],
				[512, 256, 256, 256, 0, -159, -138]
			],
			animations: {
				df: {"frames": [0]},
				jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1, next: false},
				die: {"frames": [4, 5], speed: .1, next: false},
				hurt: {"frames": [4, 4, 4, 5, 5, 5, 4, 4, 5, 5, 4, 5, 0], speed: .4, next: false},
				fly: {"frames": [6, 6, 7, 8, 9], speed: .3},
				nuts: {frames: [3, 8, 2, 9, 2, 4, 5, 6, 5, 4, 5, 3]}
			}
		}
		ss = cjs.SpriteSheet.prototype
		ss.addFlipped = function (a, b, c) {
			cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
			return this
		}
		cjs.spriteSheet = function (a) {
			return new cjs.SpriteSheet(a)
		}
		cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
			if (spriteSheet.images) {
				spriteSheet = cjs.parseZoe(spriteSheet)
				spriteSheet = new cjs.SpriteSheet(spriteSheet)
			}
			return new cjs.Sprite(spriteSheet)
		}
		cjs.sprite100 = function (a) {
			var spr = cjs.sprite(a)
			spr.rXY(50)
					.opacity(.8)
			return spr
		}
		ZOENOANIM = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/zoetest.png"],
				"frames": [
					[0, 0, 512, 256, 0, -133, -143],
					[512, 0, 512, 256, 0, -133, -143],
					[1024, 0, 512, 256, 0, -133, -143]
				],
				"animations": {}
			})
			s = cjs.stg(1000).A()
			s.A(spr)
		}
		ZOEFRAMES = function () {
			z()
			spr = cjs.sprite({
				"framerate": 24,
				"images": ["/sprite2.png"],
				"frames": [
					[0, 0, 128, 128, 0, -176, -161],
					[128, 0, 128, 128, 0, -176, -161],
					[256, 0, 128, 128, 0, -176, -161]
				],
				"animations": {
					"weird": {"speed": 1, "frames": [2]},
					"bald": {"speed": 1, "frames": [1, 1, 1, 1]}
				}
			})
			anis = spr.spriteSheet._animations
			// aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })
			s = cjs.stg(1000).A()
			s.A(spr.drag())
		}
		CHAR0 = function () {
			showSprite(Sprites.char)
			function showSprite(sprite) {
				z()
				s = cjs.stg(1000).A()
				spr = cjs.sprite(sprite).drag().a2(s)
			}
		}
		CHAR = function () {
			w = b2d.W().debug()
			w.begin(function (cx) {
				if (cx.with('hurt')) {
					b.p('hurt').I(100, -200)
				}
				if (cx.with('fly')) {
					b.p('fly').I(-100, -200)
				}
			})
			b = w.ball(200, 200, 60).bindSprite2(cjs.sprite(Sprites.char).rXY(275, 220))
			guyBrick(100).K('hurt')
			guyBrick(500).K('fly')
			function guyBrick(x) {
				return w.brick(x, 500, 100, 100).bindSprite('guy', .6)
			}
		}
		cjs.parseZoe = function (sprObj) {
			
			
			//fix source (needs a '/')
			sprObj.images[0] = _.ensureSlash(sprObj.images[0])
			//set next to false, on all anims
			//_.each(sprObj.animations, function(anim){anim.next = false})
			//to do: parse it! (get rid of unnecessary json strings in keys)
			return sprObj
		}
		STICK = function () {
			w = b2d.W({grav: 3})
					.chalk('spritebox example').debug()
			w.spriteBox({
				"framerate": 4,
				"images": ["stick.png"],
				"frames": [
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
				"animations": {
					"die": {"frames": [8, 9, 10], "speed": .1, next: false},
					"walk": {"frames": [1, 2, 3, 4], "speed": .1},
					"jump": {"frames": [5, 6, 7, 0], "speed": .1, next: false}
				}
			}, 300, 200, .25).mario()
			w.rect(600, 200, 50, 50, 'p')
			w.circ(600, 100, 40, 'b')
		}
//OLD
		THRUSTSCROLL = function () {
			z()
			// s = cjs.stage('green', 1000).A()
			//spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"
			w = b2.mW({grav: 0})
			p = w.player('thrust')
			//sp = cjs.sprite( Mummy ).drag()
			// w.s.A( sp )
			// sp.sXY( 2 ).XY( 200 )
			//  sp.gotoAndPlay('walk')
			// sp.rXY( 20, 22 )
			// b = b2.box( 100, 100, 50, 88).uD('mummy')
			// b.bindSprite2(sp)
			direction = 'right'
			cjs.tick(function () {
				w.eachBody(function (body) {
					if (body.uD() != 'player') {
						body.X(body.X() + p.X())
					}
				})
			})
			tr = w.A(b2.dynamicDef(), b2.triangleFixt)
			moveLeft = function () {
				w.eachBody(function (body) {
					if (body.uD() != 'player') {
						body.X(body.X() + 10)
					}
				})
			}
			moveRight = function () {
				w.eachBody(function (body) {
					if (body.uD() != 'player') {
						body.X(body.X() - 10)
					}
				})
			}
		}
		moveEachBodyButGuy = function () {
			$.kD('l', function () {
				w.eachBody(function (body) {
					if (body.K() != 'guy') {
						body.X(body.X() + 20)
					}
				})
			})
			$.kD('r', function () {
				w.eachBody(function (body) {
					if (body.K() != 'guy') {
						body.X(body.X() - 20)
					}
				})
			})
			$.kD('d', function () {
				w.eachBody(function (body) {
					if (body.K() != 'guy') {
						body.Y(body.Y() - 20)
					}
				})
			})
			$.kD('u', function () {
				w.eachBody(function (body) {
					if (body.K() != 'guy') {
						body.Y(body.Y() + 20)
					}
				})
			})
		}
		BUTME = function () {
			w = b2d.W({
				grav: 0, walls: []
			})
			//p = w.player('thrust').XY(500,100)
			w.brick(100, 300, 200, 30).rT(30)
			w.brick(400, 200, 400, 100).rT(30)
			g = w.box(400, 300, 30, 30).bindSprite('guy').K('guy')
			moveEachBodyButGuy()
			cjs.tick(function () {
				// w.each(function(b){ b.rT(  b.rT() + 10) })
				g.XY(400, 300)
			})
		}
		BUTMEBETTER = function () {
			z()
			w = b2.mW({
				grav: 0,
				walls: []
			})
			//p = w.player('thrust').XY(500,100)
			w.bumper(200, 200, 100)
			w.bumper(600, 300, 100)
			g = w.box(400, 300, 30, 30).bindSprite('guy').K('guy')
			moveEachBodyButGuy()
		}
	}
$load('sheet', 'spr', 'builder')
$Sp = function (ss, x, y) {
	var g = G(arguments), sp
	//call a spritesheet by name
	if (S(ss)) {
		ss = cjs._sp[ss]
	}
	//it if it is a ss lit, it makes it into a ss
	//make a sprite
	sp = new cjs.Sprite(ss.images || ss.i ? $SS(ss) : ss)
	sp.ss = sp.spriteSheet
	sp.XY(N(x, 0), N(y, 0))
	return sp
}
$Sp = function (ss, x, y) {
	var g = G(arguments), sp
	//call a spritesheet by name
	if (S(ss)) {
		ss = cjs._sp[ss]
	}
	//it if it is a ss lit, it makes it into a ss
	//make a sprite
	sp = new cjs.Sprite(ss.images || ss.i ? $SS(ss) : ss)
	sp.ss = sp.spriteSheet
	sp.XY(N(x, 0), N(y, 0))
	return sp
}
cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
	if (spriteSheet.images) {
		spriteSheet = cjs.parseZoe(spriteSheet)
		spriteSheet = new cjs.SpriteSheet(spriteSheet)
	}
	return new cjs.Sprite(spriteSheet)
}
cjs.sprite100 = function (a) {
	var spr = cjs.sprite(a)
	spr.rXY(50)
			.opacity(.8)
	return spr
}
cjs.sprite = $sprite = function (spriteSheet) {
//EaselSprite= J$=
	if (spriteSheet.images) {
		spriteSheet = cjs.parseZoe(spriteSheet)
		spriteSheet = new cjs.SpriteSheet(spriteSheet)
	}
	return new cjs.Sprite(spriteSheet)
}
cjs.sprite100 = function (a) {
	var spr = cjs.sprite(a)
	spr.rXY(50)
			.opacity(.8)
	return spr
}
meSprite = function () {
	return $Sp($SS).XY(10).drag()
}
cjs.sSU = cjs.SpriteSheetUtils
function more() {
	$spriteSheet = function (ss) {
		return new createjs.SpriteSheet(ss)
	}
	Sp = function (ss, func, stage) {
		return Ql({
			m: makeManifest(ss),
			c: function (i) {
				var sprite = EaselSprite(new createjs.SpriteSheet(s))
				if (stage) {
					stage.A(sprite)
				}
				if (func
				) {
					func(SuperSprite(sprite), sprite)
				}
			}
		})
	}
	SuperSprite = function (x) {
		var o = Do(x)
		o.ob = x
		o.sS = o.ss = o.ob.spriteSheet
		o.numFrames = o.nF = function () {
			return o.sS.getNumFrames()
		}
		o.getAnim = o.gA = function (a) {
			return U(a) ? o.sS.getAnimations()
					:
					o.sS.getAnimation(a)
		}
		//set/get NEXT animation on an animation
		o.next = o.gAN = function (anim1, nextAnim) {
			var g = G(arguments), anim1 = g[0], nextAnim = g[1],
					theAnim = o.gA(anim1)
			//if you just pass in the anim1 string
			if (U(nextAnim)) {
				
				//set its next to itself
				if (g.p) {
					theAnim.next = theAnim;
					return o
				}
				//set its next to false
				if (g.n) {
					theAnim.next = false;
					return o
				}
				//get its next
				return theAnim.next
			}
			theAnim.next = nextAnim
			//loop the TWO anims
			if (g.p) {
				o.gA(nextAnim).next = anim1
			}
			return o
		}
		o.play = o.p = function (a, b) {
			var g = G(arguments),
					a = g[0],
					b = g[1],
					l = g.f,
					n
			if (U(a)) {
				o.ob.play();
				return o
			}
			if (U(b)) {
				if (g.n) {
					o.next(a, false)
				}
				if (g.p) {
					o.next(a, a)
				}
				o.ob.gotoAndPlay(a)
				return o
			}
			_.each(g.r, function (a) {
				o.next(l, a)
				l = a
			})
			o.next(g.l, g.isPlaying ? false : g.f)
			o.play(g.f)
		}
		o.stop = o.s = function (a) {
			if (D(a)) {
				o.ob.gotoAndStop(a)
			} else {
				o.ob.stop()
			}
			;
			return o
		}
		o.isPlaying = o.P = function () {
			return !o.ob.paused
		}
		o.frame = o.currentFrame = o.cF = o.cf = function (num) {
			var args = G(arguments), num = args[0]
			if (args.p) {
				return o.frame(
						o.frame() + ( N(num) ? num : 1 )
				)
			}
			if (args.n) {
				return o.frame(
						o.frame() - ( N(num) ? num : 1 )
				)
			}
			if (U(num)) {
				return o.ob.currentFrame
			}
			$l(num)
			return o.isPlaying() ? o.play(num) : o.stop(num)
		}
		o.anim = o.cA = o.ca = function (a) {
			return U(a) ?
					o.ob.currentAnimation :
					o.isPlaying() ? o.play(a) : o.stop(a)
		}
		o.advance = o.av = function (a) {
			o.ob.advance(a);
			return o
		}
		o.oC = o.cm = function (a) {
			o.ob.on('complete', a)
		}
		//will run each loop
		o.oAe = o.ae = function (a) {
			o.o('animationend', a);
			return o
		}
		o.rate = o.fR = o.frameRate = o.fr = function (a) {
			var g = G(arguments), a = g[0]
			if (g.p) {
				return o.fr(o.fr() + (N(a) ? a : 1))
			}
			if (g.n) {
				return o.fr(o.fr() - (N(a) ? a : 1))
			}
			if (g.m) {
				return o.fr(o.fr() * (N(a) ? a : 2))
			}
			if (g.d) {
				return o.fr(o.fr() / (N(a) ? a : 2))
			}
			if (U(a)) {
				return o.ob.framerate
			}
			$l(a)
			o.ob.framerate = a;
			return o
		}
		o.cAF = o.caf = function (a) {
			if (U(a)) {
				return o.ob.currentAnimationFrame
			}
		}
		return o
	}
}
BUSH = BUSHSPRITESHEET = function () {
	(function (window) {
		bush_instance_1 = function () {
			this.initialize();
		}
		bush_instance_1._SpriteSheet = new createjs.SpriteSheet({
			images: ["Untitled-1.png"],
			frames: [[0, 0, 123, 150, 0, 0.6500000000000057, 0.25], [0, 150, 236, 190, 0, 74.65, 20.25], [0, 150, 236, 190, 0, 74.65, 20.25]]
		});
		var bush_instance_1_p = bush_instance_1.prototype = new createjs.Sprite();
		bush_instance_1_p.Sprite_initialize = bush_instance_1_p.initialize;
		bush_instance_1_p.initialize = function () {
			this.Sprite_initialize(bush_instance_1._SpriteSheet);
			this.paused = false;
		}
		b = window.bush_instance_1 = bush_instance_1;
	}(window))
	//St()//st.A(b);st.u()
}
BSH = BUSHMC = function () {
	lib = {},
			img = {}
	ss = {}
	// shortcut to reference prototypes
// library properties:
	lib.properties = {
		width: 550,
		height: 400,
		fps: 24,
		color: "#FF66CC",
		manifest: [
			{src: "images/bush.png", id: "bush"}
		]
	};
// symbols:
	(lib.bush = function () {
		this.initialize(img.bush);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
	(lib.bush_1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {a: 0, b: 1});
		// Layer 1
		this.instance = new lib.bush();
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({
			scaleX: 1.79,
			scaleY: 0.62,
			rotation: -30,
			x: -74.6,
			y: 88.8
		}, 0).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 122, 149);
// stage content:
	(lib.Untitled1 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {"a": 0, "b": 1, c: 2});
		// Layer 1
		this.instance = new lib.bush_1();
		this.instance.setTransform(271.9, 211, 1, 1, 0, 0, 0, 61, 74.5);
		this.timeline.addTween(cjs.Tween.get(this.instance).to({_off: true}, 1).wait(2));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(485.9, 336.5, 122, 149);
	$.C('#D4D4D4')
	$.cv(550, 400).C('#FF66CC').A()
	canvas = document.getElementById("canvas");
	images = images || {};
	loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest)
	function handleFileLoad(evt) {
		if (evt.item.type == "image") {
			images[evt.item.id] = evt.result;
		}
	}
	
	function handleComplete(evt) {
		exportRoot = new lib.Untitled1();
		stage = new createjs.Stage(canvas);
		stage.addChild(exportRoot);
		stage.update();
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
}
STICK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new createjs.SpriteSheet({
		images: ["/stick.png"],
		frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
	});
	stick_p = stick.prototype = new createjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	__S()
	p = new stick()
	st.A(p)
}
STK = function () {
	stick = function () {
		this.initialize()
	}
	stick._SpriteSheet = new createjs.SpriteSheet({
		images: ["/stik.png"],
		frames: [[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55], [0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[0, 0, 250, 347, 0, 99.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[250, 0, 240, 347, 0, 108.94999999999999, 70.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [490, 0, 253, 347, 0, 119.94999999999999, 77.55],
			[490, 0, 253, 347, 0, 119.94999999999999, 77.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [743, 0, 265, 357, 0, 118.94999999999999, 81.55],
			[743, 0, 265, 357, 0, 118.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [0, 357, 262, 339, 0, 123.94999999999999, 81.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [262, 357, 224, 296, 0, 106.94999999999999, 88.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [486, 357, 290, 300, 0, 179.95, 106.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [776, 357, 226, 227, 0, 172.95, 39.55], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [0, 696, 291, 238, 0, 216.95, 17.549999999999997], [291, 696, 285, 299, 0, 189.95, 65.55], [291, 696, 285, 299, 0, 189.95, 65.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [576, 696, 210, 315, 0, 136.95, 82.55], [250, 0, 240, 347, 0, 108.94999999999999, 70.55]]
	})
	stick_p = stick.prototype = new createjs.Sprite();
	stick_p.Sprite_initialize = stick_p.initialize;
	stick_p.initialize = function () {
		this.Sprite_initialize(stick._SpriteSheet);
		this.paused = false;
	}
	__S()
	p = new stick()
	st.A(p)
	p.XY(300, 100)
	p.gotoAndStop()
}
SIDE = function () {
	(function (window) {
		side = function () {
			this.initialize();
		}
		side._SpriteSheet = new createjs.SpriteSheet({
			images: ["/side.png"],
			frames: [
				[0, 0, 519, 297, 0, 236.95, 39.5],
				[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5],
				[519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5],
				[519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5],
				[0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5],
				[352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5],
				[0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5],
				[0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]
			],
			animations: {
				walkLeft: [0, 9, 'walkLeft', 1],
				takeoff: [10, 14, 'takeoff']
			}
		});
		var side_p = side.prototype = new createjs.Sprite();
		side_p.Sprite_initialize = side_p.initialize;
		side_p.initialize = function () {
			this.Sprite_initialize(side._SpriteSheet);
			this.paused = false;
		}
		side_p.walkLeft = function () {
			this.gotoAndPlay("walkLeft");
		}
		side_p.takeoff = function () {
			this.gotoAndPlay("takeoff");
		}
		window.side = side;
	}(window));
	__S()
	st.A(p = new side())
	p.XY(400, 200)
	p.walkLeft()
	p.sXY(.5)
	p.gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	function handleKeyDown(e) {
		switch (e.keyCode) {
			case 37:
				lfHeld = true;
				break
			case 39:
				rtHeld = true;
				break
			case 38:
				upHeld = true;
				break
			case 40:
				dnHeld = true;
				break
		}
	}
	
	function handleKeyUp(e) {
		switch (e.keyCode) {
			case 37:
				p.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				p.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				p.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				p.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
	
	T.t(function () {
		if (lfHeld) {
			p.x -= 15
		}
		if (rtHeld) {
			p.x += 15
		}
		if (upHeld) {
			p.y -= 4
		}
		if (dnHeld) {
			p.y += 4
		}
		if (lfHeld && keyDn == false) {
			p.sX(.5)
			p.gotoAndPlay('walkLeft')
			keyDn = true
		}
		if (rtHeld && keyDn == false) {
			p.sX(-.5)
			p.gotoAndPlay('walkLeft')
			keyDn = true
		}
		if (upHeld && keyDn == false) {
			p.gotoAndPlay('takeoff')
			keyDn = true
		}
	})
}