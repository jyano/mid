SORT = function () {
	$.x('a', 'sort dont work')
	Chp = $$M()
	chps = $$C({m: Chp})()
	chps.comparator = function (a) {
		return a.tt
	}
	chps.add(Chp({p: 9, tt: "End_"}))
	chps.add(Chp({p: 1, tt: "Beg2_"}))
	chps.add(Chp({p: 5, tt: "Mid_"}))
	chps.add(Chp({p: 1, tt: "Beg_"}))
	$l(chps.pluck('tt'))
	chps.sort()
	$l(chps.pluck('tt'))
/////
	chps = $Cl({m: Chp = $M()})()
	chps.comparator = function (a) {
		return a.tt
	}
	chps.add(Chp({p: 9, tt: "End"}));
	chps.add(Chp({p: 5, tt: "Mid"}));
	chps.add(Chp({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
	chps.sort()
	$l(chps.pluck('tt'))
//// $$M()
	chps = $$C({m: Chp})()
	chps.comparator = function (a) {
		return a.tt
	}
	chps.add(Chp({p: 9, tt: "End_"}))
	chps.add(Chp({p: 1, tt: "Beg2_"}))
	chps.add(Chp({p: 5, tt: "Mid_"}))
	chps.add(Chp({p: 1, tt: "Beg_"}))
	$Ms(chps.pluck('tt'))
	chps.sort()
	$Ms(chps.pluck('tt'))
////
	$.x('a', 'sort dont work')
	chps = $Cl({m: Chp = $M()})()
	chps.comparator = function (a) {
		return a.tt
	}
	chps.add(Chp({p: 9, tt: "End"}));
	chps.add(Chp({p: 5, tt: "Mid"}));
	chps.add(Chp({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
	chps.sort()
	$l(chps.pluck('tt'))
/////
	Chp = $$M()
	chps = $$C({m: Chp})()
	chps.comparator = function (a) {
		return a.tt
	} //$.x(a)
	chps.add(Chp({p: 9, tt: "End"}))
	chps.add(Chp({p: 5, tt: "Mid"}))
	chps.add(Chp({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
///
	Chp = Bb.M.e()
	chps = Bb.C.e({m: Chp}).o()
	chps.comparator = function (a) {
		return a.tt
	} //$.x(a)
	chps.add(Chp.o({p: 9, tt: "End"}))
	chps.add(Chp.o({p: 5, tt: "Mid"}))
	chps.add(Chp.o({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
///
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
////
	Chapter = Backbone.Model
	chapters = new Backbone.Collection
	chapters.comparator =
		//'page'
			function (a) {
				return _z(a)
			}
	chapters.add(
			new Chapter({page: 9, title: "The End"}))
	chapters.add(
			new Chapter({page: 5, title: "The Middle"}))
	chapters.add(
			new Chapter({page: 1, title: "The Beginning"}))
	$l(chapters.pluck('title'))
///
	Chp = Bb.M.e()
	chps = Bb.C.e({m: Chp}).o()
	chps.comparator = function (a) {
		return a.tt
	} //$.x(a)
	chps.add(Chp.o({p: 9, tt: "End"}))
	chps.add(Chp.o({p: 5, tt: "Mid"}))
	chps.add(Chp.o({p: 1, tt: "Beg"}))
	$l(chps.pluck('tt'))
}
function sort() {
	BBSORT = function () {
		Chp = bb.M.e()
		chps = bb.C.e({m: Chp}).o()
		chps.comparator = function (a) {
			return a.tt
		} //$.x(a)
		chps.add(Chp.o({p: 9, tt: "End"}))
		chps.add(Chp.o({p: 5, tt: "Mid"}))
		chps.add(Chp.o({p: 1, tt: "Beg"}))
		$l(chps.pluck('tt'))
	}
	BBSORT = function () {
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
	}
	BBSORT = function () {
		Chapter = Backbone.Model
		chapters = new Backbone.Collection
		chapters.comparator =
			//'page'
				function (a) {
					return _z(a)
				}
		chapters.add(
				new Chapter({page: 9, title: "The End"}))
		chapters.add(
				new Chapter({page: 5, title: "The Middle"}))
		chapters.add(
				new Chapter({page: 1, title: "The Beginning"}))
		$l(chapters.pluck('title'))
	}
}