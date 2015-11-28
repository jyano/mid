x = ctx = CanvasRenderingContext2D.prototype
x.cv = function () {
	return this.canvas
}
x.H = function () {
	return this.canvas.height
}
x.W = function () {
	return this.canvas.width// return this.cv().width
}
x.u = function () {
	return this.cv().toDataURL()
}

 


x.$ = function () {
	return $(this.cv())
}
x.S = function () {
	this.save();
	return this
}
x.R = function () {
	this.restore();
	return this
}
x._ = x.temp = function (fn) {
	this.S();
	_.b(fn, this)();
	return this.R()
}

shadow(x)
globComp(x)

function shadow(x) {
	x.shC = function (c) {
		this.shadowColor = oO('c', c)
		return this
	}
	x.shX = function (c) {
		this.shadowOffsetX = c
		return this
	}
	x.shY = function (c) {
		this.shadowOffsetY = c
		return this
	}
	x.shB = function (c) {
		this.shadowBlur = c
		return this
	}
}
function globComp(x){

x.globalCompOp = x.o = x.op = x.cO = function (o) {
	this.globalCompositeOperation = o;
	return this
}
x.Ds = x.dO = function () {
	this.o('destination-out');
	return this
}
x.dS = x.dI = function () {
	return this.o('destination-in')
}
x.sD = x.sI = function () {
	this.o('source-in');
	return this
}
x.Sd = x.sO = function () {
	this.o('source-out');
	return this
} // why use this ??x.sd = x.sV= function(){ this.o('source-over'); return this }
x.ds = x.dV = function () {
	this.o('destination-over');
	return this
}

x.SD = x.sT = x.sA = function () {
	this.o('source-atop');
	return this
}

x.DS = x.dT = x.dA = function () {
	this.o('destination-atop');
	return this
}
x.li = function () {
	this.o('lighter');
	return this
}

x.co = function () {
	this.o('copy');
	return this
}
x.xo = function () {
	this.o('xor');
	return this
}
 }