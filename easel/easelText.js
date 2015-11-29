cjs.T = cjs.Tx = function (text, font, color, x, y) {
	x = N(x) ? x : 600
	y = N(y) ? y : 100
//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	if (N(font)) {
		font = font + 'px Arial'
	}
	font = font || '50px Arial'
	color = color || 'y'
	textOb = new createjs.Text(text, font, oO('c', color))
	textOb.regX = textOb.W() / 2
	textOb.XY(x, y)
	return textOb

}

cjs.text = function (text, color, font, x, y) {


//var g=G(arguments); if(g.N){text.bl( 'alphabetic' )}   //if(g.p){ TR(text) }
	x = N(x) ? x : 100
	y = N(y) ? y : x
	font = font || '20px Arial'
	font = N(font) ? font + 'px Arial' : font
	color = color || 'z'
	var textOb = new createjs.Text(text, font, oO('c', color)).XY(x, y)
	return textOb
}
  
cjs.niceText = function (text, x, y) {
	var t = cjs.text(text, 'yellow', '40px Arial')
	if (N(x)) {
		t.XY(x, y)
	}
	return t.drag()
}

$Tx = function (a, f, c, x, y) {
	var t
	if (N(f)) {
		f = String(f) + "px Arial"
	}
	if (S(c)) {
		c = oO('c', c)
	}
	t = new cjs.Text(a, f, c)
	if (O(x)) {
		if (F(x.cen)) {
			x = x.cen()
		}
		y = x.y
		x = x.x
	}
	if (N(x)) {
		t.X(x)
	}
	if (N(y)) {
		t.Y(y)
	}
	return t
}
$T = function (a, b, c, d, e) {
	var g = G(arguments), o, t
	return new cjs.Text(a, b, c, d, e)
	o = g.O ? g.f :
	{t: g.f, f: g.s, c: g.t, x: g[3], y: g[4]}
	o.f = N(o.f) ? o.f + 'px Arial' : o.f
	o.f = o.f || '50px Arial'
	o.c = o.c || 'y'
	o.x = N(o.x, 600)
	o.y = N(o.y, 100)
	t = new cjs.Text(o.t, o.f, o.c)
	t.XY(o.x, o.y).drag()
	if (g.n) {
		t.regX = t.W() / 2
	}
	if (g.p) {
		t.bl('alphabetic')
	}
	return t.bl('middle')
}
cjs.chalk = function (text, color) {
	color = oO('c', color || 'white')
	if (O(text)) {
		text = 'x: ' + text.x + ', ' + 'y: ' + text.y
	}
	return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
}