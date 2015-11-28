SDW = function () {
	__C()
	x.xShadow = 3
	x.yShadow = 3
	x.shadowBlur = 10
	x.shadowStyle = 'red'
	x.r(188, 40, 200, 100).f('r')
			.shC('#999').shB(20).shX(15).shY(15).f()
}
CANCROP = function () {
	__C()
	x.d("me")
	x.cr()
}
DRAWN = function () {
	__C()
	x.s('u').l(6).lC('round')
}
GCOMP = XORSTAMP = function () {
	__C()
	x.fit('chicks')
	x.xo()
	c.$(function (xx, yy) {
		$.i('me', function (e, i) {
			x.drawImage(
					i[0],
					xx - ($(i).W() / 2), yy - ($(i).H() / 2)
			)
		})
	})
}
VS = function () {
	W()
	b = w.S(400, 200, 'r', 300, 200).rot(-20)//.dot()
	w.pDraw(b.P(), 50, 10).dot()
}
HOL = HOLE = function () {
	W(0)
	b = w.S(400, 400, 'r', 300, 300).f()
	b1 = w.S(400, 400, 'z', 100, 100).f()
	d = M.p(b).D(b1)
	out = w.S(300, 300, 'b', 200, 200)
	inn = w.S(300, 300, 'c', 100, 100)
	out.dif(inn)
	inn.dyn()
}
PXC = function () {
	flatTri = [[400, 0], [800, 100], [120, 120]]
	$.cx().drawPS(flatTri, 'r', 'v')
}
PXX = function () {
	Q('me', function () {
		$.cx().d(Q.i('me')).pol(flatTri)
	})
}
FILLSTY = function () {
	__C()
	x.f('g').r(20, 20, 400, 400).f()
	x.s('b').r(120, 120, 100, 100).s()
}
LINETO = function () {
	__C()
	//x.l(60).s('r').b().l(120, 120).l(100, 100).lt(1000, 10).lt(200, 100).l(100, 400).s()
	x.s('b').b().lt(
			[20, 120],
			[100, 10],
			[170, 130],
			[300, 10],
			[-120, -120],
			[150, 400]
	).s()
}
DRAWAPP = function () {
	__C()
	c.W(window.innerWidth)
	c.H(window.innerHeight)
	function draw() {
		x.s('r').f('o')
		x.fR(400, 300, 100, 220)
		x.f('b').fR(0, 0, 100, 220)
		x.f('r').fr2(0, 0, 100, 220)
		x.jD('me', 400, 500)
		// x.jD('me', 200, 400,800,300)
	}
	
	draw()
	_.in(first)
	function first() {
		x.S()
		x.rt(10)
		draw()
		x.R()
		_.in(then)
	}
	
	function then() {
		x.S()
		x.tl(200, 200);
		draw()
		x.R()
		x.tl(20, 20);
		draw()
	}
}
CXTF = function () {
	x = $.cx().f('y').fR(0, 0, 250, 100)
			.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
			.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
}
CXTF = function () {
	x = $.cx().f('y').fR(0, 0, 250, 100)
			.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
			.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
}
RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
}
DRI=DRAWIMAGE = function () {
	$.C('b')
	$CSS({
		div: {
			C: 'r', P: 10,
			M: 10, B: 10,
		},
		canvas: {outline: 'dashed yellow 20px'}
	})
	d = $.d().A(
			c = $('<canvas>').at({width: 900, height: 400}))
	x = c.ctx()
	i = new Image()
	i.src = '/guy.png'
	$(i).load(function () {
		x.drawImage(i, 100, 100)
	})
	$.i('me', function (i) {
		x.drawImage(i.target, 400, 100, 500, 200)
	})
	$.i('chicks', function (e, i) {
		x.drawImage(i[0], 400, 100, 300, 300)
	})
}