examples = {}
examples.showDistractor = function (id) {
	var div = id ? document.getElementById(id) : document.querySelector("div canvas").parentNode;
	div.className += " loading"
}
examples.hideDistractor = function () {
	var div = document.querySelector(".loading")
	div.className = div.className.replace(/\bloading\b/)
}
cjs.promote = function (subclass, prefix) {
	var subP = subclass.prototype, supP = getProto(subP)
	
	function getProto(subP) {
		return (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__
	}
	
	if (supP) {
		subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
		for (var n in supP) {
			if (subP.hasOwnProperty(n) && (F(supP[n]))) {
				subP[prefix + n] = supP[n]
			}
		}
	}
	return subclass
}
//  Simple slider control for EaselJS examples.
function Slider(min, max, width, height) {
	this.Shape_constructor();
	this.min = this.value = min || 0;
	this.max = max || 100;
	this.width = width || 100;
	this.height = height || 20;
	this.values = {};
	this.trackColor = "#EEE";
	this.thumbColor = "#666";
	this.cursor = "pointer";
	this.on("mousedown", this._handleInput, this);
	this.on("pressmove", this._handleInput, this);
}

p = cjs.extend(Slider, createjs.Shape);
p._checkChange = function () {
	var a = this, b = a.values;
	if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
		b.min = a.min;
		b.max = a.max;
		b.value = a.value;
		b.width = a.width;
		b.height = a.height;
		return true;
	}
	return false
}
p._handleInput = function (evt) {
	var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
	val = Math.max(this.min, Math.min(this.max, val));
	if (val == this.value) {
		return;
	}
	this.value = val;
	this.dispatchEvent("change")
}
p.isVisible = function () {
	return true;
};
p.draw = function (ctx, ignoreCache) {
	if (this._checkChange()) {
		var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
		this.graphics.clear()
				.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
				.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
	}
	this.Shape_draw(ctx, true)
}

Slider = cjs.promote(Slider, "Shape")

cjs.worldsMostInterestingShape = function () {
	var h = cjs.shape()
	h.graphics.f("pink").dr(20, 20, 450, 360)
			.arc(160, 160, 110, 0, Math.PI * 2, true).closePath()
			.arc(330, 240, 110, 0, Math.PI * 2, true).closePath()
	return h
}
cjs.manifest = function (fn) {
	_manifest_ = [{
		id: "chicks", src: "/chicks.png"
	},
		{id: "me", src: "/me.png"},
		{id: "guy", src: "/guy.png"},
		{id: "sun", src: "/sun.png"}]
	var q = cjs.loadQueue()
	q.complete(function () {
		fn(function (getResult) {
			return q.getResult(getResult)
		})
	})
			.manifest(_manifest_)
}
cjs.testCanvas = function () {
	return $.div().A($.canvas(960, 400).id("testCanvas")).A()
}
cjs.utils = function () {
}
cjs.extend = function (subclass, superclass) {
	function o() {
		this.constructor = subclass
	}
	
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o())
}
cjs.promoteX = function (subclass, prefix) {
	var subP = subclass.prototype, supP = (Object.getPrototypeOf && Object.getPrototypeOf(subP)) || subP.__proto__;
	if (supP) {
		subP[(prefix += "_") + "constructor"] = supP.constructor; // constructor is not always innumerable
		for (var n in supP) {
			if (subP.hasOwnProperty(n) && (typeof supP[n] == "function")) {
				subP[prefix + n] = supP[n];
			}
		}
	}
	return subclass
}
cjs.slider = function () {
	/**
	 * Simple slider control for EaselJS examples.
	 **/
	function Slider(min, max, width, height) {
		this.Shape_constructor();
		// public properties:
		this.min = this.value = min || 0;
		this.max = max || 100;
		this.width = width || 100;
		this.height = height || 20;
		this.values = {};
		this.trackColor = "#EEE";
		this.thumbColor = "#666";
		this.cursor = "pointer";
		this.on("mousedown", this._handleInput, this);
		this.on("pressmove", this._handleInput, this);
	}
	
	var p = createjs.extend(Slider, createjs.Shape);
// public methods:
	p.isVisible = function () {
		return true;
	};
	p.draw = function (ctx, ignoreCache) {
		if (this._checkChange()) {
			var x = (this.width - this.height) * Math.max(0, Math.min(1, (this.value - this.min) / (this.max - this.min)));
			this.graphics.clear()
					.beginFill(this.trackColor).drawRect(0, 0, this.width, this.height)
					.beginFill(this.thumbColor).drawRect(x, 0, this.height, this.height)
		}
		this.Shape_draw(ctx, true)
	}
// private methods:
	p._checkChange = function () {
		var a = this, b = a.values;
		if (a.value !== b.value || a.min !== b.min || a.max !== b.max || a.width !== b.width || a.height !== b.height) {
			b.min = a.min;
			b.max = a.max;
			b.value = a.value;
			b.width = a.width;
			b.height = a.height;
			return true;
		}
		return false
	}
	p._handleInput = function (evt) {
		var val = (evt.localX - this.height / 2) / (this.width - this.height) * (this.max - this.min) + this.min;
		val = Math.max(this.min, Math.min(this.max, val));
		if (val == this.value) {
			return;
		}
		this.value = val;
		this.dispatchEvent("change")
	}
	window.Slider = createjs.promote(Slider, "Shape");
}
cjs.sharedCodeX = function () {
	if (document.body) {
		setupEmbed()
	}
	else {
		document.addEventListener("DOMContentLoaded", setupEmbed)
	}
	function setupEmbed() {
		if (window.top != window) {
			document.body.className += " embedded"
		}
	}
	
	var o = window.examples = {}
	o.showDistractor = function (id) {
		var div = id ? document.getElementById(id) :
				document.querySelector("div canvas").parentNode;
		div.className += " loading"
	}
	o.hideDistractor = function () {
		var div = document.querySelector(".loading")
		div.className = div.className.replace(/\bloading\b/)
	}
}
