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

