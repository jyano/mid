srv = function () {
	var srv
	
	lA = 'listening at ... '
	
	$a.ls(
			$a.port(), function () {
				$l(lA + srv.a().p) // $l(lA+ http:// ' + srv.a + ' : ' +  a.p)
				host = srv.a().a
				port = srv.a().p
				$l('listening still at ' + host + ' ' + port)
			})
}

srv.a = function () {
	var a = this.address()
	a.p = a.port
	a.a = a.address
	return a
}
