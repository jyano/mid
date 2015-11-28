createPoly = function (points) {
	var res = $pD()
	for (var i = 0; i < points.length; i++) {
		res.addPoint(new Point(points[i][0], points[i][1]));
	}
	return res;
}

vs1 = v1 = [[61, 68], [145, 122], [186, 94], [224, 135], [204, 211],
	[105, 200], [141, 163], [48, 139], [74, 117]]
vs2 = v2 = [[131, 84], [224, 110], [174, 180], [120, 136], [60, 167]]
colsArr = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]
vertices1 = [
	[61, 68],
	[145, 122],
	[186, 94],
	[224, 135],
	[204, 211],
	[105, 200],
	[141, 163],
	[48, 139],
	[74, 117]
];
poly1 = p1 = createPoly(vertices1);
vertices2 = p2 = [
	[131, 84],
	[224, 110],
	[174, 180],
	[120, 136],
	[60, 167],
];
poly2 = createPoly(vertices2);
 
opFns={}
opFns.difference = function (e) {
	clearScreen();
	drawPoly(poly1, "blue", 0, -30);
	drawPoly(poly2, "red", 0, -30);
	var diff = poly1.difference(poly2);
	drawPoly(diff, "green", 0, 150);
}
opFns.intersection = function (e) {
	clearScreen();
	drawPoly(poly1, "blue", 0, -30);
	drawPoly(poly2, "red", 0, -30);
	var diff = poly1.intersection(poly2);
	drawPoly(diff, "green", 0, 150);
}
opFns.union = function (e) {
	clearScreen();
	drawPoly(poly1, "blue", 0, -30);
	drawPoly(poly2, "red", 0, -30);
	var diff = poly1.union(poly2);
	drawPoly(diff, "green", 0, 150);
}
opFns.xor = function (e) {
	clearScreen();
	drawPoly(poly1, "blue", 0, -30);
	drawPoly(poly2, "red", 0, -30);
	var diff = poly1.xor(poly2);
	drawPoly(diff, "green", 0, 150);
}

getPolygonVertices = function (poly) {
	var vertices = [];
	var numPoints = poly.getNumPoints();
	var i;
	for (i = 0; i < numPoints; i++) {
		vertices.push([poly.getX(i), poly.getY(i)]);
	}
	return vertices;
}
 
 
drawSinglePoly = function (vertices, strokeColor, hole, ox, oy) {
	var i;
	if (ox == undefined)    ox = 0;
	if (oy == undefined)    oy = 0;
	x.beginPath();
	x.moveTo(vertices[0][0] + ox, vertices[0][1] + oy);
	for (i = 1; i < vertices.length; i++) {
		x.lineTo(vertices[i][0] + ox, vertices[i][1] + oy);
	}
	x.lineWidth = 12
	x.strokeStyle = strokeColor;
	x.fillStyle = "rgba(255, 0, 0, 0.1)";
	if (hole == true) {
		x.fillStyle = "#ffffff";
	}
	x.closePath();
	x.stroke();
	x.fill();
}


clearScreen = function () {
	x.clearRect(0, 0, 400, 400);
}
colors = ["#91ab19", "#ab9119", "#e5ce35", "#ab1998"]//if more than one poly produced, use multiple color to display
GP = function () {$('<title>GPCJS example</title>').A()
	$cv = $('<canvas id="canvas" width="400px" height="400px">').A();
	canvas = $cv[0];
	x =  $cv.ctx()
	
	
	
 
	
	
	
	drawPoly(poly1, "blue", 0, -30);
	drawPoly(poly2, "red", 0, -30);

	GP.opBtns()
}

drawPoly = function (polygon, strokeColor, ox, oy) {
	var num = polygon.getNumInnerPoly();
	var i;
	for (i = 0; i < num; i++) {
		var poly = polygon.getInnerPoly(i);
		var vertices = getPolygonVertices(poly);
		if (i == 0) {
		
			drawSinglePoly(vertices, strokeColor, poly.isHole(), ox, oy);
		}
		else {
			drawSinglePoly(vertices, colors[i % num], poly.isHole(), ox, oy);
		}
	}
}



GP.opBtns = function () {
	opsArr = ['difference', 'intersection', 'union', 'xor']
	$.br().A()
	_.e(opsArr, function (op) {
		$.bt(op, opFns[op]).A()
	})
}

