FETCH = EVTSAVE = function () {
	m = $M({
		n: 'j'
	})
	
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
}
FETCH = EVTSAVE = function () {
	m = bb.M.x({
		n: 'j'
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
}
FETCH = EVTSAVE = function () {
	m = Bb.M.e({n: 'j'})
	Don = Bb.M.e({
		d: {n: null, sprink: 0, cream: 0},
		u: function () {
			return this.id ? '/dn/' + this.id : '/dn'
		}
	})
	bc = bostonCream = Don.o({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S() //save
	Dons = Bb.C.e({m: Don, url: "/dn"})
	dons = Dons.o()
	dons.fetch()
	// donuts.at(0); -> gets donuts by index.
	// donuts.get(0); -> gets donuts by id.
	// donuts.each(function(d){$l(d.get("name"))})
	// donuts.select(function(d){return d.get("name").length>2})// Select donuts with names longer than 2
	// donuts.map(function(d){return d.get("name")})
	Shop = Bb.M.e({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		},
		df: {n: "z"}
	}).o()
	Shop.oA(function (dn) {
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({n: "Lem"})
	ev = Bb.E()
	ev.b("fun:had", function () {
		alert("wee!")
	})
	ev.tr("fun:had")  //it'll alert "wee!"
}
FETCH = EVTSAVE = function () {
	m = Bb.M.x({
		n: 'j'
	})
	Don = $M({
		//defaults
		d: {n: null, sprink: 0, cream: 0},
		//u? url?
		u: function () {
			return '/dn/' + this.id || ''
		}
	})
	bc = bostonCream = Don({n: 'Bos', cream: 1})
	bc.s({sprink: 1}).S()  //save
	Dons = $Cl({m: Don, url: "/dn"})
	dons = Dons()
	dons.fetch() //f F
	dons.at(0)  // a -> gets donuts by index.
	dons.get(0) // g   -> gets donuts by id.
	dons.each(function (d) { // e
		$l(d.get("name"))
	})
	dons.select(function (d) {//sl
		return d.get("name").length > 2
	})// Select donuts with names longer than 2
	dons.map(function (d) {//m
		return d.get("name")
	})
	Shop = $m({
		i: function () {
			this.dons = Dons()
			this.dons.url = 'shops/' + this.id + "/dn"
		}, df: {n: "z"}
	})
	Shop.oA(function (dn) { //on ? alert added?
		alert("added " + dn.g('n'))
	})
	lem = Shop.dons.A({
		n: "Lem"
	})
	//////
}