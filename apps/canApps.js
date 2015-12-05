function canApps() {
	CAN3 = THREECANS = function () {
		c1 = $.can('a', 800, 400)
		c2 = $.can('b', 800, 400)
		c3 = $.can('X', 800, 400)
	}
	CV1 = FLOATCV = function () {
		__C()
		x.b('r', 'b', 50)
		x.mt(100, 100, 300, 300).f().s()
		x.b('b', 'r', 50).a(100, 75, 50).f().s()
	}
	CV2 = PIX = function () {
		c = $.c('y', 900, 500).A()
		c.draw('me', 100, 100)
		setTimeout(
				function () {
					c.pD(c.gD(100, 100, 500, 500), 120, 120)
					c.f("r").fr(10, 10, 50, 50)
					imgData = c.gD(10, 10, 50, 50)
					c.pD(imgData, 10, 70)
				}, 200
		)
	}
	CV3 = SHAD = function () {
		c = $.c('b', 700).A()
		c.draw('me', 100, 100)
		c.shadowColor('r').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
		c.draw('me', 200, 200)
		c.shadowColor('y').shadowBlur(100).shadowOffsetX(200).shadowOffsetY(100)
		c.shadowColor('g')
		c.draw('me', 0, 300)
		c.shadow('p', 30, 200, 20)
		c.draw('guy', 400, 200)
	}
	CV4 = CANFIT = function () {
		c = __C();
		c.fit('me')
		m = $.c(800).fit('me')
		g = $.c('b', 600).fit('guy')
	}
	CV5 = CANBOR = function () {
		$CSS({
			canvas: {
				B: '33px dashed red'
			}
		})
		__C()
		x.jD('me')
	}
	CV6 = FANN = function () {
		$l('fan')
		x = $.c('y', 1000, 800).A()
		y = $.c('x', 400).A()
		x.$$(function () {
			x.fit('me')
		})
		x.fit('me')
		guidewires = false
		dragging = false
		mousedown = {}
		loc = {}
		restoreDrawingSurface = function () {
		}
		updateRubberband = function (m) {
			x.ln(
					mousedown.x,
					mousedown.y,
					m.x,
					m.y
			)
		}
		drawGuidewires = function () {
		}
		x.MD(
				function (X, Y) {
					dragging = true
					mousedown = {x: X, y: Y}
				}
		)
		x.MM(
				function (X, Y) {
					if (dragging) {
						restoreDrawingSurface()
						updateRubberband({x: X, y: Y})
					}
					if (guidewires) {
						drawGuidewires(loc.x, loc.y)
					}
				}
		)
		x.MU(
				function (X, Y) {
					dragging = false
					restoreDrawingSurface()
					updateRubberband({x: X, y: Y})
				}
		)
	}
	function canBad() {
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
	}
	
	function rub() {
		RUB1 = function () {
			loc = {}
			rr = null
			guidewires = false
			dragging = false
			mousedown = {}
			data = null
			c = can = $.c('y', 1000, 800).fit('me')
			c.$$(function () {
				c.fit('me')
			})
			c.MD(
					function (x, y) {
						data = can.gD()
						dragging = true
						mousedown = {x: x, y: y}
					}
			)
			c.MM(
					function (X, Y) {
						var m = {x: X, y: Y},
								d = mousedown
						if (dragging) {
							can.pD(data)
							can.ln(d.x, d.y, d.x, m.y)
							can.ln(d.x, d.y, m.x, d.y)
							can.ln(m.x, m.y, m.x, d.y)
							can.ln(m.x, m.y, d.x, m.y)
						}
					}
			)
			c.MU(
					function (X, Y) {
						dragging = false
						var d = mousedown, x1, x2, y1, y2
						if (X > d.x) {
							x1 = d.x;
							x2 = X
						} else {
							x1 = X;
							x2 = d.x
						}
						if (Y > d.y) {
							y1 = d.y;
							y2 = Y
						} else {
							y1 = Y;
							y2 = d.y
						}
						rr = [x1, y1, x2, y2]
						can.pD(data)
						can.crop(rr)
						// data = can.gD()
					}
			)
		}
		RUB = function () {
			z()
			can = $.c('y', 1000, 800).A()
			can.$$(function () {
				can.fit('me')
			})
			can.fit('me')
			guidewires = false
			dragging = false
			mousedown = {}
			loc = {}
			rr = null
			data = null
			can.MD(function (x, y) {
				data = can.gD()
				dragging = true
				mousedown = {x: x, y: y}
			})
			can.MM(function (X, Y) {
				var m = {x: X, y: Y}, d = mousedown
				if (dragging) {
					can.pD(data)
					can.ln(d.x, d.y, d.x, m.y)
					can.ln(d.x, d.y, m.x, d.y)
					can.ln(m.x, m.y, m.x, d.y)
					can.ln(m.x, m.y, d.x, m.y)
				}
			})
			can.MU(function (X, Y) {
				dragging = false
				var d = mousedown, x1, x2, y1, y2
				if (X > d.x) {
					x1 = d.x;
					x2 = X
				} else {
					x1 = X;
					x2 = d.x
				}
				if (Y > d.y) {
					y1 = d.y;
					y2 = Y
				} else {
					y1 = Y;
					y2 = d.y
				}
				rr = [x1, y1, x2, y2]
				can.pD(data)
				can.crop(rr)
				//    data=can.gD()
			})
		}
	}
	
	function canFormat() {
		CAN1 = function () {
			var picHolder
			$.fm()
			s2.A(picHolder = $.sp().id('pics'))
			$.getJSON('/img', function (i) {
				_.e(i, withImage)
			})
			function withImage(img) {
				dataUrl = img.d
				can = $.c(100, 100)
				can.click(
						function () {
							var mouse = $('#mouse')
							mouse.val('click')
							mouse.change()
							mug = img.d
						}
				)
				picHolder.A(can)
				can.fit(dataUrl)
			}
			
			s2.A(
					x = canvas = $.c('yellow', 1000, 800)
			)
			setInterval(
					function () {
						//  x.bc()
					}, 10000
			)
			s1(
					$.lb('mouse'),
					$.sl('none', 'click', 'enter', 'leave', 'move').id('mouse').o(
							function (s) {
								x.q.ub()
								if (s == 'click') {
									x.$(
											function (X, Y) {
												x.Cd(mug, X, Y)
											}
									)
								}
								if (s == 'enter') {
									x.ME(function (X, Y) {
										x.Cd(mug, X, Y)
									})
								}
								if (s == 'leave') {
									x.ML(function (X, Y) {
										x.Cd(mug, X, Y)
									})
								}
								if (s == 'move') {
									x.MD(function () {
										x.MM(function (X, Y) {
											x.Cd(mug, X, Y)
										})
									})
									x.MU(function () {
										x.q.ub('mousemove')
									})
								}
							}
					),
					$.lb('global comp'),
					sl.apply(this, V(oO('g'))).$(function (v) {
						x.gc(v)
					}),
					//gct=tx(),bt('gc:global composition',function(){x.gc(gct.V())}),
					$.bt(
							'SAVE(sv)', function () {
								x.sv()
							}
					), $.br(2),
					$.bt(
							'CUT(dots)', function () {
								x.q.q.unbind()
								qi('mouse').v('none')
								x.dots()
							}
					), $.br(2),
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
						x.d($w['mug'] || 'me')
					}), $.br(2),
					$.bt('dC:draw center', function () {
						x.dC($w['mug'] || 'me')
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
					$.bt(
							'tictactoe', function () {
								x.ln(tictactoe)
							}
					), $.br(4),
					$.bt(
							'sampLinGrad', function () {
								x.sampLinGrad()
							}
					),
					$.br(2),
					$.bt(
							'sampRadGrad', function () {
								x.sampRadGrad()
							}
					),
					$.br(2),
					$.bt(
							'xxx', function () {
								xxx('barney')
							}
					), $.br(2),
					$.bt(
							'bads', function () {
								bad(x, 200, 8)
							}
					), $.br(2),
					$.bt(
							'coins', function () {
								coin(x, 200, 8)
							}
					), $.br(2)
			)
		}
	}
	
	function canHull() {
		FULLCAN = function () {
			$('html').css(
					{
						height: '100%'//, of:'h'
					}
			)
			$('body').css(
					{
						margin: 0,
						//g:0,
						height: '100%'
					}
			)
			var s = 'Click or tap the screen to start the game',
					fo = 'bold 16px Arial',
					x = $.c('pink', $('body').W(), $('body').H()).A()
			// x.fs( x.lg().a(0,'y').a(1,'z') ).fr().fs('y').fo(fo).ftc(s, 30)
			$.i(
					'me', function (image) {
						image = $(image.target)
						var origW = image.W()
						image.W(Math.round((50 * cW()) / 100))
						image.H(Math.round((image.W() * image.H() ) / origW))
						x.draw(
								image,
								x.W() / 2 - image.W() / 2,
								x.H() / 2 - image.H() / 2
						)
					}
			)
		}
		HULL = function () {
			z()
			c = $.c('y', 800, 400).id('canvas').A()
			window.onload = init
			function init() {
				var canvas = c[0],        // main canvas element
						fps = 10,                                        // drawing frames per second
						convex = new Convex(),                            // convex hull
						dots = []                                     // dots, which are not in the convex hull
				// adjust canvas proportions
				// canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight;
				// assign canvas context
				ctx = canvas.getContext("2d");
				setInterval(
						function () {
							
							// get a blank canvas //// clear
							ctx.clearRect(0, 0, ctx, canvas.width, ctx.canvas.height)
							// draw convex dots
							convex.draw()
							// draw dots
							dots.map(function (dot) {
								dot.draw()
							})
						}, 1000 / fps
				)
				// clicked on canvas
				c.click(
						function (evt) {
							var x = evt.clientX - canvas.getBoundingClientRect().left,
									y = evt.clientY - canvas.getBoundingClientRect().top
							// clear convex
							convex.dots = []
							// add dot
							dots.push(new Dot(new V(x, y)))
						}
				)
				$.bt(
						'draw convex', function () {
							// move dots to canvas
							dots.map(function (dot) {
								convex.addDot(dot)
							})
							// clear dots
							dots = []
						}
				).A()
			}
			
			var Dot = function (pos) {
				this.pos = pos
			}
			Dot.prototype = {
				draw: function () {
					ctx.beginPath();
					ctx.arc(this.pos.x, this.pos.y, 2, 0, Math.PI * 2);
					ctx.fill();
					ctx.closePath();
				}
			}
			Convex = function () {
				this.dots = []
			} // a convex hull
			Convex.prototype = {
				draw: function () {
					var _this = this, refDots;
					// loop through dots
					this.dots.map(
							function (el) {
								var dotAfter;
								// draw dot
								el.draw();
								refDots = _this.copyDots(_this.dots); // copy dots
								// remove el from reference dots
								for (var i = 0; i < refDots.length; i++) {
									if (refDots[i] != el) continue;
									refDots.splice(i, 1);
								}
								// get dot after this dot
								dotAfter = _this.getDotAfter(_this.dots, el);
								// draw direct line
								ctx.moveTo(el.pos.x, el.pos.y);
								ctx.lineTo(dotAfter.pos.x, dotAfter.pos.y);
								ctx.stroke();
							}
					)
				},
				addDot: function (dot) {
					// the dot cannot be added, because it wouldn't be a convex anymore
					if (this.isDotInsideConvex(this.dots, dot)) return;
					// add dot intentionally
					this.dots.push(dot);
					// less than four dots are always a convex
					if (this.dots.length < 4) return;
					// remove dots, which are not in the convex (anymore)
					this.composeConvexHull();
				},
				composeConvexHull: function () {
					var refDots,        // all dots, except the one we are testing
							dot,            // the dot, supposed to be in the new convex
							newDots = [];    // dots, which are definitely part of the convex
					// loop dots
					for (var i = 0; i < this.dots.length; i++) {
						
						// reset dots reference
						refDots = this.copyDots(this.dots);
						// assig dot to the current index
						dot = refDots[i];
						// remove dot from refDots
						for (var h = 0; h < refDots.length; h++) {
							if (h != i) continue;
							refDots.splice(h, 1);
							break;
						}
						// the dot is not inside of the convex, therefore add it
						if (!this.isDotInsideConvex(refDots, dot)) {
							newDots.push(dot);
						}
					}
					// assign new convex
					this.dots = newDots;
				},
				//  copy dots object,, this is done due to call by reference
				copyDots: function (ref) {
					var dots = [];
					ref.map(
							function (dot) {
								dots.push(new Dot(new V(dot.pos.x, dot.pos.y)));
							}
					);
					return dots;
				},
				isDotInsideConvex: function (convexDots, dot) {
					var dotBefore, dotAfter, sign;
					// at least three dots required for a convex
					if (convexDots.length < 3) return false;
					// the dot is definitely not inside the convex hull
					if (this.dotOutsideConvexRect(convexDots, dot)) return false;
					// assign dot before to the closest dot by the angle, which is negative
					dotBefore = this.getDotBefore(convexDots, dot);
					// assign dot after to the closest dot by the angle, which is positive
					dotAfter = this.getDotAfter(convexDots, dot);
					// dot on the inside of the line from dotBefore to dotAfter
					return dot.pos.getSide(dotBefore.pos, dotAfter.pos) == 1;
				},
				//  is the dot outside of the convex rectangle?
				dotOutsideConvexRect: function (convexDots, dot) {
					var outside = [true, true, true, true];
					for (var i = 0; i < convexDots.length; i++) {
						if (convexDots[i].pos.x < dot.pos.x)
							outside[0] = false;
						if (convexDots[i].pos.x > dot.pos.x)
							outside[1] = false;
						if (convexDots[i].pos.y < dot.pos.y)
							outside[2] = false;
						if (convexDots[i].pos.y > dot.pos.y)
							outside[3] = false;
					}
					return outside[0] || outside[1] || outside[2] || outside[3];
				},
				//  get middle position as vector from the bounding dots
				getCenter: function (dots) {
					var rect = {xMin: dots[0].pos.x, xMax: dots[0].pos.x, yMin: dots[0].pos.y, yMax: dots[0].pos.y};
					dots.map(
							function (dot) {
								if (dot.pos.x < rect.xMin) rect.xMin = dot.pos.x;
								if (dot.pos.x > rect.xMax) rect.xMax = dot.pos.x;
								if (dot.pos.y < rect.yMin) rect.yMin = dot.pos.y;
								if (dot.pos.y > rect.yMax) rect.yMax = dot.pos.y;
							}
					);
					return new V((rect.xMin + rect.xMax) / 2, (rect.yMin + rect.yMax) / 2);
				},
				//   get the closest dot before dot from dots
				getDotBefore: function (dots, dot) {
					var center, bgRad = -Math.PI * 2, dotBefore;
					center = this.getCenter(dots);
					dotRad = center.angleTo(dot.pos);
					dots.map(
							function (needleDot) {
								var needleRad = center.angleTo(needleDot.pos),
										refRad = needleRad - dotRad;
								if (refRad > 0) refRad = -(Math.PI * 2 - refRad);
								if (refRad <= bgRad) return;
								bgRad = refRad;
								dotBefore = needleDot;
							}
					);
					return dotBefore;
				},
				//  get the closest dot after dot from dots
				getDotAfter: function (dots, dot) {
					var center, smRad = Math.PI * 2, dotAfter
					center = this.getCenter(dots)
					dotRad = center.angleTo(dot.pos)
					dots.map(
							function (needleDot) {
								var needleRad = center.angleTo(needleDot.pos),
										refRad = needleRad - dotRad;
								if (refRad > 0) refRad = -(Math.PI * 2 - refRad)
								if (refRad >= smRad) return
								smRad = refRad
								dotAfter = needleDot
							}
					)
					return dotAfter
				}
			}
			var V = function (x, y) {
				this.x = x
				this.y = y
			}
			V.prototype = {
				subtract: function (v) {
					return new V(this.x - v.x, this.y - v.y);
				},
				// this = center, v = destination
				angleTo: function (v) {
					var ref = this.subtract(v)
					return Math.atan2(ref.y, ref.x) + Math.PI
				},
				// 0 = on line, 1 = inside, -1 = outside
				getSide: function (v1, v2) {
					return Math.sign((v2.x - v1.x) * (this.y - v1.y) - (v2.y - v1.y) * (this.x - v1.x))
				}
			}
		}
	}
	
	function _pre() {
		tictactoe = [
			[[200, 0], [200, 600]],
			[[400, 0], [400, 600]],
			[[0, 200], [600, 200]],
			[[0, 400], [600, 400]]
		]
		sh1 = [[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]]
		sh2 = [[[10, 0], [19, 19], [10, 9], [9, 9], [0, 19], [9, 0]], [[8, 13], [12, 13]], [[9, 14], [9, 18]], [[10, 14], [10, 18]]]
	}
	
	function ctxApps() {
		XX1 = SDW = function () {
			__C()
			x.xShadow = 3
			x.yShadow = 3
			x.shadowBlur = 10
			x.shadowStyle = 'red'
			x.r(188, 40, 200, 100).f('r')
					.shC('#999').shB(20).shX(15).shY(15).f()
		}
		CXTF = CTXTRANSFORM = function () {
			__C()
			x.fR(0, 0, 250, 100)
			x.sT(3, 2, -2, 1, 400, 10).f('r').fR(0, 0, 250, 100)
			x.sT(1, .5, -.5, 1, 30, 10).f('b').fR(0, 0, 250, 100)
		}
		function ctxBad() {
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
		}
	}
} 