$t=function(fn){T.t(fn)}
ZNA= ZOENOANIM = function () {
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
ZFR= ZOEFRAMES = function () {
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
}
CHA=CHAR0 = function () {
	showSprite(Sprites.char)
	function showSprite(sprite) {
		z()
		s = cjs.stg(1000).A()
		spr = cjs.sprite(sprite).drag().a2(s)
	}
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
	st = __$St()
	
	p = new stick()
	st.A(p)
	p.XY(300, 100)
	p.S()
}
KEYBOARDWALK  = SID =SIDE= function () {
	$sideSp = side = function () {
		this.initialize();
	}
	$sideSp.prototype = $Sp()
	$sideSp.prototype.Sprite_initialize = side_p.initialize;
	$sideSp.prototype.initialize = function () {
		this.Sprite_initialize(side._SpriteSheet);
		this.paused = false;
	}
	$sideSp.prototype.walkLeft = function () {
		this.gotoAndPlay("walkLeft");
	}
	$sideSp.prototype.takeoff = function () {
		this.gotoAndPlay("takeoff");
	}
	$sideSp._SpriteSheet = $SS({
		images: ["side.png"],
		frames: [[0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [0, 0, 519, 297, 0, 236.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [519, 0, 488, 290, 0, 216.95, 39.5], [0, 297, 352, 315, 0, 253.95, 49.5], [0, 297, 352, 315, 0, 253.95, 49.5], [352, 297, 383, 326, 0, 186.95, 79.5], [352, 297, 383, 326, 0, 186.95, 79.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 623, 550, 337, 0, 315.95, 95.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 960, 520, 534, 0, 315.95, 214.5], [0, 1494, 543, 552, 0, 330.95, 226.5]],
		animations: {walkLeft: [0, 9, true], takeoff: [10, 11, true]}
	})
	st = _$St().t()
	sp = new $sideSp().XY(400, 200).a2(st).walkLeft().sXY(.5).gotoAndStop()
	var lfHeld
	var rtHeld
	var upHeld
	var dnHeld
	var keyDn = false
	document.onkeydown = handleKeyDown
	document.onkeyup = handleKeyUp
	$t(function () {
		if (lfHeld) {
			sp.x -= 15
		}
		if (rtHeld) {
			sp.x += 15
		}
		if (upHeld) {
			sp.y -= 4
		}
		if (dnHeld) {
			sp.y += 4
		}
		
		if (lfHeld && !keyDn  ) {
			sp.scX(.5).p('walkLeft')
			keyDn = true
		}
		if (rtHeld && !keyDn  ) {
			sp.scX(-.5).p('walkLeft')
			keyDn = true
		}
		if (upHeld && !keyDn ) {
			sp.p('takeoff')
			keyDn = true
		}
		
	})
 
	
	
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
			case 37:sp.gotoAndStop('walkLeft')
				keyDn = false;
				lfHeld = false;
				break
			case 39:
				sp.gotoAndStop('walkLeft')
				keyDn = false;
				rtHeld = false;
				break
			case 38:
				sp.gotoAndStop('takeoff')
				keyDn = false
				upHeld = false;
				break
			case 40:
				sp.gotoAndStop('takeoff')
				keyDn = false
				dnHeld = false;
				break
		}
	}
}