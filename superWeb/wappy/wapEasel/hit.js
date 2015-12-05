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
randomHSL = function () {
	return cjs.Graphics.getHSL(M.r() * 360, 100, 50)
}

HITCIRCLES = function () {
	//beautiful demo i stole! :)

	$St().drag() // look no .tick() necesary!! look below :)
	
	ct=  $Ct().a2(st).XY(150)
	 
	_.t(25, function () {
		
		var sh  = $Sh(), gx = sh.graphics
		
		gx.f(randomHSL()).dc(0, 0, 30)
		
		holder.A(sh.XY(randomLocation(), randomLocation()))
	
	})
	
	$t(tick)
	
	function randomLocation() {
		return M.r() * 300 - 150
	}
	

	function tick(event) {
		holder.rt( 3,'+')
		
		var numChildren = holder.getNumChildren()
		_.e(holder.children, function (ch) {
			
			ch.al( child.underMouse() ? 1 : 0.1 )
			
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
		 
		st.u(event)
	}
}


