$Rec = function (a, b, c, d) {
	return new cjs.Rectangle(a, b, c, d)
}
mx = cjs.Matrix2D.prototype
mx.aTf = function (x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
	x = N(x, 0)
	y = N(y, 0)
	scaleX = N(scaleX, 1)
	scaleY = N(scaleY, 1)
	rotation = N(rotation, 0)
	return this.appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY)
}
$Mx = cjs.m2d = function () {
	var _MxOb = function (mx) {
		return new cjs.Matrix(mx.a, mx.b, mx.c, mx.d, mx.tx, mx.ty)
	}
	var g = G(arguments), o;
	if (A(g.f)) {
		return $Mx.apply(null, g.f)
	}
	o = g.O ? g.f :
			U(g.t) ? {tx: N(g.f), ty: N(g.s)} :
			{a: g.f, b: g.s, c: g.t, d: g.fo, tx: g.fi, ty: g.si}
	var $mxDf = function (o) {//( [a=1]  [b=0]  [c=0]  [d=1]  [tx=0]  [ty=0] )
		o.a = N1(o.a)
		o.b = N0(o.b)
		o.c = N0(o.c)
		o.d = N1(o.d)
		o.tx = N0(o.tx)
		o.ty = N0(o.ty)
		return o
	}
	return _MxOb($mxDf(o))
}
$Tf = $TfMx = $tMx = function (x, y, sx, sy, rt, kx, ky, rx, ry) {
	return $Mx().aTf(x, y, sx, y, rt, kx, ky, rx, ry)
}
h._bfTf = h._bfT = function (img) {
	var g = G(arguments)
	var props = A(g.s) ? g.s : g.r
	return this._bf(img, $Tf(props)) //gant!
}
h._bfTfArrs= h._bfTAs = function (str, tfPropsArr, fn) {
	var h = this, g = G(arguments), o
	o = A(g.s) ?
	{i: g.f, tf: g.s, fn: g.t} :
	{i: g.f, fn: g.s}
	$.i(o.i, function (i) {
		var fn = _.tFn(o.fn)
		fn(h._bf(g.f, $Tf(_.tA(o.tf))))
	})
	return h
}
dO.tf = dO.transform = function () {
	var dO = this, g = G(arguments)
	dO.setTF = dO.sTf = function () {
		var dO = this, g = G(arguments)
		dO.setTransform.apply(g.O && F(g.f.gTf) ? g.f.gTf() : g.f, g)
		return dO
	}
	dO.getTf = dO.gTf = dO.getTransform = function () {
		var dO = this
		return [
			dO.x, dO.y, dO.scaleX, dO.scaleY,
			dO.rotation, dO.skewX, dO.skewY,
			dO.regX, dO.regY
		]
	}
	
	return g.f ?
			dO.sTf.apply(dO, g.A_ ? g.f : g) :
			dO.gTf()
}
dO.setNomBds = dO.bds = dO.bounds = dO.bd = function (a, b, c, d) {
	var dO = this, g = G(arguments)
	dO.nominalBounds = $Rec(a, b, c, d)
	return dO
}
dO.setBds= dO.sBd = dO.gTB = function () {var dO=this, g=G(arguments)
	
	if(g.u){return dO.getTransformedBounds() }
	dO.setBounds.apply(dO, g)
	return dO
}
dO.catProps= dO.gCDP = function () {
	var dO = this
	return dO.getConcatenatedDisplayProps()
}
dO.mx = dO.gM = function () {
	return this.getMatrix()
}
dO.mxMx=dO.cMx= dO.ccMx=dO.gCM = function () {
	var dO = this
	return dO.getConcatenatedMatrix()
}

/*
 getConcatenatedDisplayProps ( [props] ) DisplayProps
 Inherited from DisplayObject: getConcatenatedDisplayProps:999
 Generates a DisplayProps object representing the combined 
 display properties of the object
  and all of its parent Containers up to the highest level ancestor 
  (usually the Stage).
 Parameters:

 [props] DisplayProps optional
 A DisplayProps object to populate with the calculated values. 
 If null, a new DisplayProps object is returned.
 Returns:

 DisplayProps: The combined display properties.
 */



//brilliant demo
MATRIX1 = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$.div('b', 50, 50).A()
	stage = s = cjs.stage(1600, 1000).tick().A()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('e', co)
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
		c.bm('me',
				function (b) {
					b.sXY(.2).XY(100, 80)
					b.on(click, function () {
						$l('lit')
					}, '/')  //on click, log('lit'), just once (remove listener)!
				})
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (bm) {
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function () {
				$l('mid')
			}, '-')  //on click, log('mid'), and stop prop
		})
		c.bm('me', function (bm) {
			bm.sXY(1.5)
			bm.on('click', function () {
				$l('big')
			})  //on click, log('big')
		})
		//on click, log('con')
		c.on('click', function () {
			$l('con')
		})
	})
	stage.ct(function (c) {
				var vn = 0,
						rvn = 0,
						on = 0,
						ron = 0
				c.X(200)
				c.mug(
						function (b) {
							b.sXY(.8).XY(200, 80)
						})
				c.mug(
						function (b) {
							b.sXY(.8).XY(100, 280)
						})
				c.mg(
						function (b) {
							b.sXY(.8).XY(340, 180)
						})
				//this shows over/out vs rollover/rollout
				//over/out get retriggered when switching between connected sprites
				//rollover/rollout does not because it is still touching 'something'
				c.on('mouseover', function () {
					c.X(10, '+');
					$l('v: ' + vn++)
				})
				c.on('rollover', function () {
					c.X(20, '-');
					$l('rv: ' + rvn++)
				})
				c.on('mouseout', function () {
					c.Y(10, '+');
					$l('o: ' + on++)
				})
				c.on('rollout', function () {
					c.Y(20, '-');
					$l('ro: ' + ron++)
				})
			}
	).MV(40)
	stage.container(function (container, stage) {
		container.X(700)
		container.mug(function (bm) {
			bm.sXY(.8).XY(200, 80)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(100, 280)
		})
		container.mug(function (bm) {
			bm.sXY(.8).XY(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		container.on('mouseover', function () {
			$l('mouseover')
			this.sXY(.01, '+')
		})
		container.on('rollover', function () {
			$l('rv')
			this.sXY(.01, '+')
		})
		container.on('mouseout', function () {
		})
		container.on('rollout', function () {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40) //??? mouse events? speed for some mouse checking thing
	stage.container(function (container, stage) {
		container.x = 1400
		container.bm('me', function (bm) {
			
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			SL(bm, stage)
		})
	})
}
MATRIX0 = function () {

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$l('matrix')
	$.div('blue', 50, 50).A()
	stage = s = createjs.stage(1600, 1000).A().tick()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		//b.sxy(.2).xy(100,80)
		//b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!
	})
	//make a container
	stage.ct(function (c, s) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		c.bm('me', function (b) {
			b.sXY(.4).XY(100, 180)
			//b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
		})
		c.b('me', function (b) {
			b.sXY(1.5)
			// b.o('$',fL('big'))  //on click, log('big')
		})
		//on click, log('con')
		//c.o('$',  fL('con'))
	})
	stage.ct(function (c) {
		var vn = 0,
				rvn = 0,
				on = 0,
				ron = 0
		c.X(200)
		c.mug(
				function (b) {
					b.sXY(.8).XY(200, 80)
				})
		c.mug(
				function (b) {
					b.sXY(.8).XY(100, 280)
				})
		c.mg(
				function (b) {
					b.sXY(.8).XY(340, 180)
				})
		//this shows over/out vs rollover/rollout
		//over/out get retriggered when switching between connected sprites
		//rollover/rollout does not because it is still touching 'something'
		// c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
		//c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
		// c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
		//  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})
	})//.MV(40)
	stage.ct(function (c, s) {
		c.x(700)
		c.mg(function (b) {
			b.sxy(.8).xy(200, 80)
		})
		c.mg(function (b) {
			b.sxy(.8).xy(100, 280)
		})
		c.mg(function (b) {
			b.sxy(.8).xy(340, 180)
		})
		//this example shows which sprites are acted upon with over/rollover
		//over only affects one
		//rollover affects ALL
		//if you enter a sprite from outside, they all grow (via rollover),
		//and the one sprite grows double (via over)
		c.o('v', function (g, e) {
			$l('v')
			g.sxy(.01, '+')
		})
		c.o('rv', function (g, e) {
			$l('rv')
			g.sxy(.01, '+')
		})
		c.o('o', function (q, e, g) {
		})
		c.o('ro', function (q, e, g) {
		})
		// in summary,
		// rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
		// BUT, they will all recieve events separately
	}).MV(40)
	stage.ct(function (container, stage) {
		container.X(1400)
		container.bm('me', function (bm) {
			
			//make the little me slide the entire container
			//it acts as a handle! (for its container)
			lit = bm.sXY(.2).XY(100, 80)
			SL(bm, container)
			container.bm('me', function (bm) {
//big me will scale the little me
				big = bm.sXY(2).XY(100, 180)
				SC(bm, lit)
				container.bm('me', function (bm) {
					bm.sXY(.6).XY(150, 180)
					SL(bm)
					RT(bm, big)
				})
			})
		})
//guy slides stage
		container.bm('guy', function (bm) {
			bm.sXY(.4).XY(100, 180)
			createjs.bindSlide(bm, stage)
		})
	})
}
MATRIX = function () {// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')
	z()
	$l('matrix')
	stage = s = createjs.stage(1600, 1000).A().tick()
	// on stage enter, change background color, though you
	// cant see it here because stage fills screen
	// this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
	stage.on('mouseenter', function () {
		$('body').C($r())
	})
	stage.A(container = c = new createjs.Container())
	container.bm('me', function (bm) {
		bm.sXY(.2).XY(100, 80)
		bm.on('click', function () {
			$l('lit')
		}, this, true) //just once
	})
	//make a container
	stage.container(function (container, stage) {
		
		//the little me clicks do not hit the 'big' me underneath it.  that's normal.
		//but it does hit the container.  but this example shows off 'remove', so it only hits once
		//however, it continues to propogate on to the container. hmmm..
// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
		container.bm('me', function (bm) {  //future: c.bm('me', .4, function(bm){})
			bm.sXY(.4).XY(100, 180)
			bm.on('click', function (e) {
				$l('mid')
				e.stopPropagation()
			})
		})
		container.bm('me', function (bm) {
			bm.sXY(1.5)
					.on('click', function () {
						$l('big')
					})
		})
		container.on('click', function () {
			$l('con')
		})
	})
}
