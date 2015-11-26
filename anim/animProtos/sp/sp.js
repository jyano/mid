sp = cjs.Sprite.prototype
sp.p = function (an) {
	var sp = this
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.s = sp.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.N = function (n) {
	this.advance(n);
	return this
}
sp.as = function () {
	return this.spriteSheet.getAnimations()
}
sp.a = function () {
	return this.currentAnimation
}
sp.f = function (f) {
	var g = G(arguments)
	if (U(f)) {
		return g.p ? this.currentFrame : this.currentAnimationFrame
	}
	if (g.p) {
		this.currentFrame = f
	}
	else {
		this.currentAnimationFrame = f
	}
	return this
}
sp.r = _.gS(sp, 'framerate')
sp.e = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
sp.p = function (what) {
	if (U(what)) {
		this.play()
	}
	else {
		this.gotoAndPlay(what)
	}
	return this
}
sp.s = sp.P = function (what) {
	if (U(what)) {
		this.stop()
	}
	else {
		this.gotoAndStop(what)
	}
	;
	return this
}
sp.skip = sp.adv = function (num) {
	this.advance(num);
	return this
}
sp.cA = sp.cAn = sp.currAnim = function () {
	return this.currentAnimation
}
sp.cAF = currAnimFrame = function () {
	return this.currentAnimationFrame
}
sp.cF = sp.cFr = sp.currFrame = function () {
	return this.currentFrame
}
sp.fR = sp.rate = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	this.framerate = rate
	return this
}
sp.end = function (func) {
	func = func || function () {
		n = N(window['n']) ? n : 0
		$l('frame! ' + n++)
	}
	this.on('animationend', func)
	return this
}
sp.p = function (an) {
	var sp = this
	if (U(an)) {
		sp.play()
	}
	else {
		sp.gotoAndPlay(an)
	}
	return sp
}
sp.s = s.P = function (an) {
	var sp = this
	if (U(an)) {
		sp.stop()
	}
	else {
		sp.gotoAndStop(an)
	}
	return sp
}
sp.N = function (n) {
	this.advance(n);
	return this
}
sp.as = function () {
	return this.spriteSheet.getAnimations()
}
sp.a = function () {
	return this.currentAnimation
}
sp.f = function (f) {
	var g = G(arguments)
	if (U(f)) {
		return g.p ? this.currentFrame : this.currentAnimationFrame
	}
	if (g.p) {
		this.currentFrame = f
	}
	else {
		this.currentAnimationFrame = f
	}
	return this
}
sp.r = _.gS(sp, 'framerate')
sp.e = function (fn) {
	fn = fn || function () {
		n = N(window['n'], 0);
		$l('frame! ' + n++)
	}
	this.on('animationend', fn)
	return this
}
s = cjs.Sprite.prototype
s.p = function (what) {
	if (U(what)) {
		this.play()
	}
	else {
		this.gotoAndPlay(what)
	}
	return this
}
s.s = s.P = function (what) {
	if (U(what)) {
		this.stop()
	}
	else {
		this.gotoAndStop(what)
	}
	;
	return this
}
s.skip = s.adv = function (num) {
	this.advance(num);
	return this
}
s.cA = s.cAn = s.currAnim = function () {
	return this.currentAnimation
}
s.cAF = currAnimFrame = function () {
	return this.currentAnimationFrame
}
s.cF = s.cFr = s.currFrame = function () {
	return this.currentFrame
}
s.fR = s.rate = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	this.framerate = rate
	return this
}
s.end = function (func) {
	func = func || function () {
		n = N(window['n']) ? n : 0
		$l('frame! ' + n++)
	}
	this.on('animationend', func)
	return this
}

//
s = cjs.Sprite.prototype
s.p = function (what) {
	if (U(what)) {
		this.play()
	}
	else {
		this.gotoAndPlay(what)
	}
	return this
}
s.s = s.P = function (what) {
	if (U(what)) {
		this.stop()
	}
	else {
		this.gotoAndStop(what)
	}
	;
	return this
}
s.skip = s.adv = function (num) {
	this.advance(num);
	return this
}
s.cA = s.cAn = s.currAnim = function () {
	return this.currentAnimation
}
s.cAF = currAnimFrame = function () {
	return this.currentAnimationFrame
}
s.cF = s.cFr = s.currFrame = function () {
	return this.currentFrame
}
s.fR = s.rate = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	this.framerate = rate
	return this
}
s.end = function (func) {
	func = func || function () {
		n = N(window['n']) ? n : 0
		$l('frame! ' + n++)
	}
	this.on('animationend', func)
	return this
}

//
s = cjs.Sprite.prototype
s.p = function (what) {
	if (U(what)) {
		this.play()
	}
	else {
		this.gotoAndPlay(what)
	}
	return this
}
s.s = s.P = function (what) {
	if (U(what)) {
		this.stop()
	}
	else {
		this.gotoAndStop(what)
	}
	;
	return this
}
s.skip = s.adv = function (num) {
	this.advance(num);
	return this
}
s.cA = s.cAn = s.currAnim = function () {
	return this.currentAnimation
}
s.cAF = currAnimFrame = function () {
	return this.currentAnimationFrame
}
s.cF = s.cFr = s.currFrame = function () {
	return this.currentFrame
}
s.fR = s.rate = function (rate) {
	if (U(rate)) {
		return this.framerate
	}
	this.framerate = rate
	return this
}
s.end = function (func) {
	func = func || function () {
		n = N(window['n']) ? n : 0
		$l('frame! ' + n++)
	}
	this.on('animationend', func)
	return this
}
function spr() {
	sp = cjs.Sprite.prototype
	sp.p = function (an) {
		var sp = this
		if (U(an)) {
			sp.play()
		}
		else {
			sp.gotoAndPlay(an)
		}
		return sp
	}
	sp.s = sp.P = function (an) {
		var sp = this
		if (U(an)) {
			sp.stop()
		}
		else {
			sp.gotoAndStop(an)
		}
		return sp
	}
	sp.N = function (n) {
		this.advance(n);
		return this
	}
	sp.as = function () {
		return this.spriteSheet.getAnimations()
	}
	sp.a = function () {
		return this.currentAnimation
	}
	sp.f = function (f) {
		var g = G(arguments)
		if (U(f)) {
			return g.p ? this.currentFrame : this.currentAnimationFrame
		}
		if (g.p) {
			this.currentFrame = f
		}
		else {
			this.currentAnimationFrame = f
		}
		return this
	}
	sp.r = _.gS(sp, 'framerate')
	sp.e = function (fn) {
		fn = fn || function () {
			n = N(window['n'], 0);
			$l('frame! ' + n++)
		}
		this.on('animationend', fn)
		return this
	}
	sp.p = function (what) {
		if (U(what)) {
			this.play()
		}
		else {
			this.gotoAndPlay(what)
		}
		return this
	}
	sp.s = sp.P = function (what) {
		if (U(what)) {
			this.stop()
		}
		else {
			this.gotoAndStop(what)
		}
		;
		return this
	}
	sp.skip = sp.adv = function (num) {
		this.advance(num);
		return this
	}
	sp.cA = sp.cAn = sp.currAnim = function () {
		return this.currentAnimation
	}
	sp.cAF = currAnimFrame = function () {
		return this.currentAnimationFrame
	}
	sp.cF = sp.cFr = sp.currFrame = function () {
		return this.currentFrame
	}
	sp.fR = sp.rate = function (rate) {
		if (U(rate)) {
			return this.framerate
		}
		this.framerate = rate
		return this
	}
	sp.end = function (func) {
		func = func || function () {
			n = N(window['n']) ? n : 0
			$l('frame! ' + n++)
		}
		this.on('animationend', func)
		return this
	}
	sp.p = function (an) {
		var sp = this
		if (U(an)) {
			sp.play()
		}
		else {
			sp.gotoAndPlay(an)
		}
		return sp
	}
	sp.s = s.P = function (an) {
		var sp = this
		if (U(an)) {
			sp.stop()
		}
		else {
			sp.gotoAndStop(an)
		}
		return sp
	}
	sp.N = function (n) {
		this.advance(n);
		return this
	}
	sp.as = function () {
		return this.spriteSheet.getAnimations()
	}
	sp.a = function () {
		return this.currentAnimation
	}
	sp.f = function (f) {
		var g = G(arguments)
		if (U(f)) {
			return g.p ? this.currentFrame : this.currentAnimationFrame
		}
		if (g.p) {
			this.currentFrame = f
		}
		else {
			this.currentAnimationFrame = f
		}
		return this
	}
	sp.r = _.gS(sp, 'framerate')
	sp.e = function (fn) {
		fn = fn || function () {
			n = N(window['n'], 0);
			$l('frame! ' + n++)
		}
		this.on('animationend', fn)
		return this
	}
	s = cjs.Sprite.prototype
	s.p = function (what) {
		if (U(what)) {
			this.play()
		}
		else {
			this.gotoAndPlay(what)
		}
		return this
	}
	s.s = s.P = function (what) {
		if (U(what)) {
			this.stop()
		}
		else {
			this.gotoAndStop(what)
		}
		;
		return this
	}
	s.skip = s.adv = function (num) {
		this.advance(num);
		return this
	}
	s.cA = s.cAn = s.currAnim = function () {
		return this.currentAnimation
	}
	s.cAF = currAnimFrame = function () {
		return this.currentAnimationFrame
	}
	s.cF = s.cFr = s.currFrame = function () {
		return this.currentFrame
	}
	s.fR = s.rate = function (rate) {
		if (U(rate)) {
			return this.framerate
		}
		this.framerate = rate
		return this
	}
	s.end = function (func) {
		func = func || function () {
			n = N(window['n']) ? n : 0
			$l('frame! ' + n++)
		}
		this.on('animationend', func)
		return this
	}
}