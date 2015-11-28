 
ob.Y = function (y, duration) {//make same same x
	var g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(duration)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
}
ob.XY = function (x, y) {
	if (U(x)) {
		return {x: this.x, y: this.y}
	}
	if (O(x)) {
		y = x.y
		x = x.x
	}
	if (U(y)) {
		y = x
	}
	return this.X(x).Y(y)
}

ob.Y = function (y, duration) {//make same same x
	var g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(duration)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
}
ob.XY = function (x, y) {
	if (U(x)) {
		return {x: this.x, y: this.y}
	}
	if (O(x)) {
		y = x.y
		x = x.x
	}
	if (U(y)) {
		y = x
	}
	return this.X(x).Y(y)
}

ob.Y = function (y, duration) {//make same same x
	var g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(duration)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
}
ob.XY = function (x, y) {
	if (U(x)) {
		return {x: this.x, y: this.y}
	}
	if (O(x)) {
		y = x.y
		x = x.x
	}
	if (U(y)) {
		y = x
	}
	return this.X(x).Y(y)
}

i.Y = function (y, dur) {
	var i = this, g = G(arguments)
	if (U(y)) {
		return this.y
	}
	if (g.p) {
		y = this.y + y
	}
	else if (g.n) {
		y = this.y - y
	}
	else if (g.m) {
		y = this.y * y
	}
	else if (g.d) {
		y = this.y / y
	}
	if (N(dur)) {
		tw([this], [{y: y}, duration])
	}
	else {
		this.y = y
	}
	return this
}
i.XY = function (x, y) {
	var i = this, g = G(arguments), v
	if (g.u) {
		return {x: i.x, y: i.y}
	}
	v = V(g.f, g.s)
	x = v.x
	y = N(v.y, v.x)
	return i.X(x).Y(y)
}