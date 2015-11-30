MOUSEENTERSTAGE = function () {
	z()
	stage = s = cjs.stage(500, 500).A().tick()
	s.bm('me')
	s.on('mouseenter', function () {
		$('body').prepend('once<br>')
	}, null, true)
	s.on('mouseenter', function () {
		$('body').prepend('many<br>')
	}, null, false)
}
HANDLEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
		}
		b.on('pressmove', b)
	})
}
REMOVEEVENT = function () {
	z()
	s = createjs.stage(500, 500).A().tick()
	s.bm('me', function (b) {
		me = b
		cb = b.on('pressmove', function () {
			this.x++
		})
	})
	s.bm('guy', function (b) {
		b.handleEvent = function () {
			this.y++
			me.off('pressmove', cb)
		}
		b.on('pressmove', b)
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

