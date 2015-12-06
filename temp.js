$a.g('/z/:app', function (q, p) {
	
	app = q.params.app.toUpperCase()
	 
	html = '-' + $Js( SuperWebFiles, BackboneFiles, ExampleAppFiles )
	
	
	html += '<script>$l("app:  ' + app + '"); ' + app + '()</script>'
	
	p.send(html)
	
	
})

_scrp = function (src) {

	return '<script src="/' + src + '.js"></script>'
	
	var scr = $('<script>')
	scr.attr({src: src});
	return scr
}

_js = function (src) {
	return (src ? '<script src="'+src+'">' : '>')
			+'</script>'}

_js = function(src){return src? 
'<script src="/'+src+'.js"></script>':
			'<script></script>'
			}
$js = function () {
	var g = G(arguments)
	var str = ''
	g.e(function (src) {str += _js(src)})
	return str
}
$jsA = function (jsArr) {return $js.apply($js, jsArr)}
$Js = function (arr) {var g = G(arguments)
	if (A(arr)) {
		var scripts = ''
		g.e(function (arr) {
			scripts += $jsA(A(arr) ? arr : [arr])
		})
		return scripts
	}
	return $jsA(arguments)
}

