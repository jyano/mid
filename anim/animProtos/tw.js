tw.t = tw.then = function (tw, a, b) {
	return this.to(cjs.ww(tw), a, b)
}
tw.pos = function (a, b) {
	
	//get or set position of tween (in time in ms)// see w.dr
	if (U(a)) {
		return w.position
	}
	if (b == 'n') {
		b = cjs.Tween.NONE
	}//0
	if (b == 'l') {
		b = cjs.Tween.LOOP
	}//1 default
	if (b == 'r') {
		b = cjs.Tween.REVERSE
	}//2
	tw.setPosition(a, acm(b))
	//default is loop, can use r|n
	return w
}
tw.toggle = function () {
	var isPaused = this._paused
	if (isPaused) {
		this.setPaused(false)
	}
	else {
		this.setPaused(true)
	}
	return this
}
tw.dur = tw.dr = function (a) {//total time duration
	//get time of tween in ms
	//duration:read only
	if (U(a)) {
		return this.duration
	}
}
tw.ignore = function (a) {
	if (U(a)) {
		return this.ignoreGlobalPause
	}
	this.ignoreGlobalPause = a ? true : false;
	return this
}
tw.lp = tw.setLoop = function (a) {
	if (U(a)) {
		return this.loop
	}
	this.loop = a ? true : false
	return this
}
tw.$ = function () {
	var isPaused = this._paused
	if (isPaused) {
		this.setPaused(false)
	}
	else {
		this.setPaused(true)
	}
	return this
}
p = cjs.Tween.prototype
p.toggle = function () {
	var isPaused = this._paused
	if (isPaused) {
		this.setPaused(false)
	}
	else {
		this.setPaused(true)
	}
	return this
}

function ditto(){
	tw = cjs.Tween.prototype
	tw = cjs.Tween.prototype
	tw.t = tw.then = function (tw, a, b) {
		return this.to(cjs.ww(tw), a, b)
	}
	tw.pos = function (a, b) {
		
		//get or set position of tween (in time in ms)// see w.dr
		if (U(a)) {
			return w.position
		}
		if (b == 'n') {
			b = cjs.Tween.NONE
		}//0
		if (b == 'l') {
			b = cjs.Tween.LOOP
		}//1 default
		if (b == 'r') {
			b = cjs.Tween.REVERSE
		}//2
		tw.setPosition(a, acm(b))
		//default is loop, can use r|n
		return w
	}
	tw.toggle = function () {
		var isPaused = this._paused
		if (isPaused) {
			this.setPaused(false)
		}
		else {
			this.setPaused(true)
		}
		return this
	}
	tw.dur = tw.dr = function (a) {//total time duration
		//get time of tween in ms
		//duration:read only
		if (U(a)) {
			return this.duration
		}
	}
	tw.ignore = function (a) {
		if (U(a)) {
			return this.ignoreGlobalPause
		}
		this.ignoreGlobalPause = a ? true : false;
		return this
	}
	tw.lp = tw.setLoop = function (a) {
		if (U(a)) {
			return this.loop
		}
		this.loop = a ? true : false
		return this
	}
	tw.$ = function () {
		var isPaused = this._paused
		if (isPaused) {
			this.setPaused(false)
		}
		else {
			this.setPaused(true)
		}
		return this
	}
}