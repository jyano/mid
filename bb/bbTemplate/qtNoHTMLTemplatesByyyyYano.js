qT = function (fn, ob, $el) {
//QT:
// this will be an attempt to make
// underscore templates, but via qq
// -does not actually use _.template at all
	return fn(ob, $el || $._d())
}
function QTexample() {
	
	function sampleTemplates() {
	
		$tp.thed = function (ob, $el) {
			return $el.A($.thead().A(
					$.tr().k('header').A(
							$.th().A('Name'),
							$.th().A('Age'))
			))
			// $tp.thed :  use like this:  t=qT(thed).a()
		}
		
		$tp.lii = function (ob, $el) {

/// ***********
//	***********
// ***********
// ***********
			//two ways ok!!!!
//can pass:
//1) jq/el
			return $el(
					$.li(ob.me),
					$.li(ob.me)
			)
			//2)
			// or .... array
			return [$.li().A(ob.me), $.li().A(ob.me)]
		}
	}
	e = qT($tp.lii, {me: 'jason'}).a()
}
  