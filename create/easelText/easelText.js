 
cjs.isText = function (t) {
	if (O(t)) {
		return (  t.textBaseline   )
	}
}
cjs.text = function (text, font, color, x, y) {
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
cjs.niceText = function (text, x, y) {
	var t = cjs.text(text, 'yellow', '40px Arial')
	if (N(x)) {
		t.XY(x, y)
	}
	return t.drag()
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
 

$load('cts','shape','tran','text')

 
function text() {
	cjs.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	$T = function (a, f, c, x, y) {
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
	cjs.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
 
	
}
function ditto() {
	cjs.iT = function (t) {
		if (O(t)) {
			return (t.textBaseline)
		}
	}
	$T = function (a, f, c, x, y) {
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
	cjs.niceText = function (text, x, y) {
		var t = cjs.text(text, 'yellow', '40px Arial')
		if (N(x)) {
			t.XY(x, y)
		}
		return t.drag()
	}
 
}
ct.T = ct.Tx = function () {
	var ct = this, g = G(arguments), o, t
	o = g.O ? g.f :
			g.N_ ? {x: g.f, y: g.s, t: g.t, f: g[3], c: g[4]} :
					N(g.s) ? {t: g.f, x: g.s, y: g.t, f: g[3]} :
							_.x({t: g.f, f: g.s, c: g.t},
									N(g[3]) && N([4]) ? {x: g[3], y: g[4]} :
									{y: g[3]})
	o.f = N(o.f) ? o.f + 'px Arial' : o.f
	o.f = o.f || '50px Arial'
	o.c = oO('c', o.c || 'y')
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.t = String(o.t)
	t = $T(o.t, o.f, o.c).XY(o.x, o.y).a2(this).drag()
	if (g.n) {
		t.regX = t.W() / 2
	}
	t.bl('middle')
	if (g.p) {
		t.bl('alphabetic')
	}
	if (!g.n) {
		t.rX(t.mW() / 2)
	}
	return t
	//o.x = N(o.x, this.St().cen().x)
	/* if(g.p){
	 tO = cjs.T(g.f, 'y', '40px Arial')
	 if(N(g[3])){ tO.XY(g[3], g[4]) }
	 return tO
	 }*/
	old = function () {
		ct.T = ct.Tx = ct.text = function (t, f, c, x, y) {
			var ct = this, o, cX
			st = this.getStage()
			cX = st.cen().x
			o = (N(x) && U(y)) ? {y: x, x: cX} :
					U(x) ? {x: cX, y: 100} :
					{t: t, f: f, c: c, x: x, y: y}
			var t = cjs.T(o.t, o.f, o.c, o.x, o.y)
			ct.A(t)
			return t
		}
	}
}
 
 