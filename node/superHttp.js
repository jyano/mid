$h = ht = http = require("http")
$h.io = function (fn) {
	return $io(this, fn)
}
$h.ls = $h.listen
$h.s = $h.Srv = function ($a, port, fn) {
	var $h = this
	if (U($a)) {
		return $h.createServer()
	}
	var srv = ht.createServer($a)
	if (port) {
		fn = fn || function () {
			$l('listening port ' + port)
		}
		srv.listen(port, fn)
	}
	return srv
}
$h.init = function () {
	var $h = this
	http.createServer(app).listen(app.get('port'), function () {
		console.log("Express server listening on port " + app.get('port'));
	})
	$s = $h.Server($a)
	return $h
}
	
	 
 