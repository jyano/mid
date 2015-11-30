/*$js = function (p, da) {
 p.j(da)
 }

 _pFn = function (p, met) {
	return function (z, da) {
		p[met](da)
	}
}

_js = _json = function (p) { return _pFn('json') }
*/



$jFn  =function (p, str) {// pjdX = function (p) {return function (z, da) {p.j(da)}}

	 
		return F(str)? function (z, da) {if (da) {da= str(da);p.j(da)}}:
				function (z, da) {
					if(S(str)){da=  da[str]}; p.j(da)
				}
 
} // = $j = jD = pjd = Js = Json
 