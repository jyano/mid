HIT = function () {
	z()
	s = stage = createjs.stage(900, 600).A().tick().mug(function (mug) {
		mug.drag()
		stage.bm('flame', function (flame) {
			flame.drag()
			flame.scaleX = .1
			flame.scaleY = .1
			flame.regX = flame.getBounds().width / 2
			flame.regY = 500
			flame.x = 400
			flame.y = 400
			stage.on('dblclick', function (e) {
				flame.x = e.rawX;
				flame.y = e.rawY
			})
			stage.on('stagemousedown', function (e) {
				localCoords = mug.globalToLocal(e.rawX, e.rawY)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) { //$l('hit')
					stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
				}
				else {
					$l('no hit')
					stage.backgroundColor('yellow')
				}
			})
			stage.on('stagemousemove', function (e) {
				localCoords = mug.globalToLocal(flame.x, flame.y)
				hit = mug.hitTest(localCoords.x, localCoords.y)
				if ($l(hit)) {
					$l('HIT')
					stage.backgroundColor('red')
					$l(e.rawX + ' ' + e.rawY)
				}
				else {
					$l('NO HIT')
					stage.backgroundColor('yellow')
				}
			})
		})
	})
}
//beautiful demo i stole! :)
HITCIRCLES = function () {
	z()
	stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
	container = new createjs.Container()
	stage.A(container.XY(150))
	_.times(25, function () {
		var shape = new createjs.Shape()
		shape.graphics.f(randomHSL()).dc(0, 0, 30)
		holder.A(shape.XY(randomLocation(), randomLocation()))
	})
	cjs.Ticker.on("tick", tick)
	function randomLocation() {
		return Math.random() * 300 - 150
	}
	
	function randomHSL() {
		return cjs.Graphics.getHSL(Math.random() * 360, 100, 50)
	}
	
	function tick(event) {
		holder.rotation += 3
		var numChildren = holder.getNumChildren()
		_.each(holder.children, function (child) {
			child.alpha = child.underMouse() ? 1 : 0.1
		})
		/*
		 for(var i = 0; i < numChildren; i++){  //for each child
		
		 var child = holder.getChildAt(i)
		 child.alpha = 0.1
		 var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
		 if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
		 child.alpha = 1}
		 }
		 */
		stage.update(event)
	}
}


