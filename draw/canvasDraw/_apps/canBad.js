TRANZ = function () {
	z()
	x = $.c('yellow', 1000, 800).A()
	y = $.c('purple', 400).A()
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	identity = function (x) {
		x.stf(1, 0, 0, 1, 0, 0)
	}
	rotate = function (x, a) {
		identity(x)
		x.rt(tRad(a))
	}
	rotateByAngle = function (px, py, a) {
		var x, y
		x = (px * cos(a)) - (py * sin(a))
		y = (py * cos(a)) + (px * sin(a))
	}
	rotateAroundZero = function (px, py, r) {
		var x, y, a = 'angle'
		x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
		y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
	}
	transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
	//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
	//x=x+e,y=y+f
	//to scale, use a,d and set others to 0
}
FLEXCAN = function () {
	z()
	c1 = $.c('r', 200, 400)
	c2 = $.c('b', 50, 50)
	c4 = $.c('y', 100, 10)
	d = $.d().C('o')
	d.A(c1, c2, c4)
	d.css({
		'display': 'flex',
		'justify-items': 'center'
	})
	$('canvas').attr({
		width: 'auto', height: 'auto'
	}).css({
		width: 'auto', height: 'auto',
		'flex-grow': 1,
		'flex-shrink': 1
	})
	$('canvas').e(function () {
		$(this).ctx().jD('me')
	})
}
TXC = PAPGERBAG = function () {
	__C()
	c.dr('me')
	c.paperBag()
}
FAAD = SLOWFADE = function self(opacity) {
	//makes a yellow square and black dot??
	c = $.c('y', 500, 500)
	c.cir(10, 10, 10)
	opacity = U(opacity) ? 0.2 : parseFloat(opacity) - 0.001
	c.al(opacity)
	c.ctx().fS('red')
	c.fillRect()
	if (opacity < 1) {
		setTimeout(
				function () {
					self(opacity)
				}, 30
		)
	}
}
TXTT = function () {
	__C()
	x.b('b', 'g', 30)
	x.T(100, 'Jason Yanofski', 10, 150)
	x.lg({x1: 0, y1: 0, x2: x.W(), y1: 0, cS: {m: 0, b: .5, r: 1}})
	x.T('Jason Yanofski', 10, 290, '-')
}
TEXTTX = function () {
	__C()
	x.b('b', 'g', 30)
	x.T(100, 'Jason Yanofski', 10, 150)
	x.lg({
		x1: 0, y1: 0, x2: x.W(),
		y1: 0, cS: {m: 0, b: .5, r: 1}
	})
	x.T('Jason Yanofski', 10, 290, '-')
}
DRAGSTG = function () {
	Q(function () {
		c = $.c('g', 600, 300)
		f = $.dragFrame(c)
		x = c.ctx()
		x.d('me', 100, 100)
		c.$(function (x1, y1) {
			x.a(x1, y1, 2).s()
		})
	})
}
FLOATCVQ = function () {
	Q(function () {
		__C()
		x.b(400, 100, 'r', 'o', 30).l(600, 400)
		x.b(10, 500).at(150, 20, 150, 170, 50).l(150, 120)
		x.b().a(400, 75, 50, 0, 340, '-')
		x.tl(-100, 0, R(30), 2)
				.b(400, 100, 'x', 'b', 30)
				.l(600, 400)
		x.d('me')
		x.d(x, 300, 300)
		x.d(x, 300, 300)
		//x.scICen('guy', .7)
		//Uncaught TypeError: Cannot read property 'd' of undefined
	})
}
CANN = function () {
	$.format = function () {
		section1 = s1 = $.sp()
		section2 = s2 = $.sp()
		__CT($.R($.xs(3).A(section1), $.xs(9).A(section2)))
	}
	var picHolder
	$.format()
	picHolder = $.sp().id('pics')
	s2.A(
			picHolder
	)
	$.getJSON('/img', function (i) {
		_.e(i, withImage)
	})
	function withImage(img) {
		dataUrl = img.d
		can = $.c(100, 100)
		can.click(function () {
			var mouse = $('#mouse')
			mouse.val('click')
			mouse.change()
			mug = img.d
		})
		picHolder.A(can)
		can.fit(dataUrl)
	}
	
	s2.A(
			c = cv = x = canvas = $.c('y', 1000, 800))
	//  _.ev(10, function(){x.bc()})
	s1.A($.lb('mouse'),
			/*
			 $.scv('none','click','enter','leave','move').id('mouse').o(
			 function(s){
			 x.q.ub()
			 if(s=='click'){
			 x.$(function(X,Y){
			 x.Cd(mug,X,Y)
			 })}
			
			
			 if(s=='enter'){x.ME(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='leave'){x.ML(function(X,Y){x.Cd(mug,X,Y)})}
			 if(s=='move'){x.MD(function(){x.MM(function(X,Y){x.Cd(mug,X,Y)})})
			
			 x.MU(function(){x.q.ub('mousemove')})}
			
			
			 }),
			
			
			 */
			$.label('global comp'),
			//scv.apply(this, V(oO('g')) ).$(function(v){ x.gc(v) }),
			//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
			$.bt('SAVE(sv)', function () {
				x.sv()
			}), $.br(2),
			$.bt('CUT(dots)', function () {
				x.q.q.unbind()
				qi('mouse').v('none')
				x.dots()
			}), $.br(2),
			$.bt('RESTORE(R)', function () {
				x.R()
			}), $.br(2),
			$.bt('bc:change background color', function () {
				x.bc()
			}), $.br(2),
			$.bt('cir:make circle', function () {
				x.cir(100, 100, 100)
			}), $.br(2),
			$.bt('d:draw', function () {
				c.dr(
						$w['mug'] || 'me'
				)
			}), $.br(2),
			$.bt('dC:draw center', function () {
				cv.dC(window['mug'] || 'me')
			}), $.br(2),
			$.bt('me', function () {
				x.me()
			}), $.br(2),
			$.bt('sh1', function () {
				x.ln(sh1)
			}), $.br(2),
			$.bt('sh2', function () {
				x.ln(sh2)
			}), $.br(2),
			$.bt('tictactoe',
					function () {
						x.ln(tictactoe)
					}), $.br(4),
			$.bt('sampLinGrad',
					function () {
						x.sampLinGrad()
					}), $.br(2),
			$.bt('sampRadGrad',
					function () {
						x.sampRadGrad()
					}), $.br(2),
			$.bt('ctxx',
					function () {
						xxx('barney')
					}), $.br(2),
			$.bt('bads',
					function () {
						bad(x, 200, 8)
					}), $.br(2),
			$.bt('coins',
					function () {
						coin(x, 200, 8)
					}), $.br(2)
	)
}
TRANS = function () {
	z()
	x = $.c('y', 1000, 800)
	y = $.c('u', 400)
	x.$$(function () {
		x.fit('me')
	})
	x.fit('me')
	identity = function (x) {
		x.stf(1, 0, 0, 1, 0, 0)
	}
	rotate = function (x, a) {
		identity(x);
		x.rt(tRad(a))
	}
	rotateByAngle = function (px, py, a) {
		var x, y
		x = (px * cos(a)) - (py * sin(a))
		y = (py * cos(a)) + (px * sin(a))
	}
	rotateAroundZero = function (px, py, r) {
		var x, y, a = 'angle'
		x = (px * cos(PI / 4)) - (py * (sin(PI / 4)))
		y = (py * cos(PI / 4)) + (px * (sin(PI / 4)))
	}
	transformEquations = ['x=ax+cy+e', 'y=bx+dy+f']
	//if a=1,b=0,c=0,d=1 then args e,f rep pure translation
	//x=x+e,y=y+f
	//to scale, use a,d and set others to 0
}
CROPP = function () {
	__C()
	$cv = $.c('X', 1200, 600, 100, 100)
	$cv.fit()
	$cv.draw('me')
	$cv.ln(tictactoe)
	_.in(2, function () {
		$cv.crop(100, 100, 900, 500)
	})
}
FULLCAN1 = function () {
	$('html').css({
		height: '100%'//, of:'h'
	})
	$('body').css({
		margin: 0,
		//g:0,
		height: '100%'
	})
	var s = 'Click or tap the screen to start the game',
			fo = 'bold 16px Arial',
			x = $.c('p',
					$('body').W(),
					$('body').H()
			).A()
	//
	// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
	$.i('me', function (image) {
		image = $(image.target)
		var origW = image.W()
		image.W(Math.round((50 * $('body').W()) / 100))
		image.H(Math.round((image.W() * image.H() ) / origW))
		x.draw(
				image,
				x.W() / 2 - image.W() / 2,
				x.H() / 2 - image.H() / 2
		)
	})
} 
 
 