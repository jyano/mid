function createPoly(pts) {
	var res = $pD()
	
	
	_.e(pts,  function (pt) {
		res.addPoint(new Point(pt[0], pt[1]))
	})
	
	
	return res;
}


x.setup=function() {var x=this
	x.clearRect(0, 0, 400, 400)
	x.drawPolyD(pol1, "blue", 0, -30);
	x.drawPolyD(pol2, "red", 0, -30);
	 
	 
}

  
GP = function () {
	GP.pols()
	
	$cv = $.c('c', 400, 400)
	x = $cv.ctx()
	$.br().A()
	_.e(['difference', 'intersection', 'union', 'xor'], function (op) {
		$.bt(op, {
			difference: opFn('difference'),
			intersection: opFn('intersection'),
			union: opFn('union'),
			xor: opFn('xor')
		}[op]).A()
	})

	function opFn(op) {
		return function () {
			x.setup()
			x.drawPolyD(applyOp(op), "green", 0, 150);
		}
		function applyOp(op) {
			return pol1[op](pol2)
		}
	}
	
	x.drawPolyD(pol1, "blue", 0, -30);
	x.drawPolyD(pol2, "red", 0, -30);
}

 

x.drawPolyD=function(pD, col, ox, oy) {
	var x=this
	
	pD.ePol( function (pol, i) {
		x.drawPol(pol.pts(), pD.getCol(i, col), pol.isHole(), ox, oy)
	})
	
}
	
	
	
pD.getCol=function(i,col){
	return getCol(i, this.numPol(), col)
}
	
	
function getCol(i, num, strCol) { 
//if more than one poly produced, use multiple color to display
	return i == 0 ? strCol :
			["#91ab19", "#ab9119", "#e5ce35", "#ab1998"][i % num]
}
 


GP.pols = function () {
	vxs1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211], [105, 200], [141, 163], [48, 139], [74, 117]]
	vxs2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
	pol1 = createPoly(vxs1);
	pol2 = createPoly(vxs2);
}
 
	
	 
 

