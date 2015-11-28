ob.spin = function () {
	this.tweenLoop([{r: 360}, 4000]);
	return this
}
function spin() {
	ob.spin = function () {
		this.tweenLoop([{r: 360}, 4000]);
		return this
	}
	ob.spin = function () {
		this.tweenLoop([{r: 360}, 4000]);
		return this
	}
}
function tween() {
	ob.tween = function () {
		var args = G(arguments), tween
		args.unshift(this)
		__tween = tween = cjs.tween.apply(null, args)
		return tween
	}
	ob.tweenLoop = function () {
		var args = G(arguments), tween
		args.unshift([this, 'l'])
		tween = __tween = cjs.tween.apply(null, args)
		return tween
	}
}
function tween() {
	ob.tw = ob.tween = function () {
		var args = G(arguments), tween
		args.unshift(this)
		__tween = tween = cjs.tween.apply(null, args)
		return tween
	}
	ob.twL = ob.tweenLoop = function () {
		var args = G(arguments), tween
		args.unshift([this, 'l'])
		tween = __tween = cjs.tween.apply(null, args)
		return tween
	}
}
ob.tween = function () {
	var args = G(arguments), tween
	args.unshift(this)
	__tween = tween = cjs.tween.apply(null, args)
	return tween
}
ob.tweenLoop = function () {
	var args = G(arguments), tween
	args.unshift([this, 'l'])
	tween = __tween = cjs.tween.apply(null, args)
	return tween
}
i = cjs.DisplayObject.prototype
i.tw = function () {
	var i = this, g = G(arguments), tw
	g.unshift(i)
	tw = _tw = $Tw.apply(null, g)
	return tw
}
i.twL = function () {
	var g = G(arguments), tw, i = this
	g.unshift([this, 'l'])
	return tw = _tw = $Tw.apply(i, g)
}
i.sp = i.spin = function () {
	this.twL([{r: 360}, 4000]);
	return this
}
i.grow = function () {
	this.tw([{sxy: 10}, 10000])
	return this
}
function ditto() {
	i = cjs.DisplayObject.prototype
	i.tw = function () {
		var i = this, g = G(arguments), tw
		g.unshift(i)
		tw = _tw = $Tw.apply(null, g)
		return tw
	}
	i.twL = function () {
		var g = G(arguments), tw, i = this
		g.unshift([this, 'l'])
		return tw = _tw = $Tw.apply(i, g)
	}
	i.sp = i.spin = function () {
		this.twL([{r: 360}, 4000]);
		return this
	}
	i.grow = function () {
		this.tw([{sxy: 10}, 10000])
		return this
	}
}