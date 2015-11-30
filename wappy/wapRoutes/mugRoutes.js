$a.PO('/changeMug', function (q, p) {  // could be a put?
	q.user.mug = q.body.url
	q.user.save(_send(p))
})
$a.G('/myMug', function (q, p) {
	$l('--------testing myMug--------')
	$l('q.body: ' + q.body)
	$l('q.un: ' + q.un)
	$md.user.findOne({un: q.un},
	
	  function (z, u) {
		  $l('in findOne callback')
		  $l('da: ' + da)
		p.send(u.mug)
	})
})
$a.g('/mugByUsername/:un', function (q, p) {
	//$l('q.params.un: ' + q.params.un)
	
	$md.user.findOne({un: q.params.un}, function (z, u) {
		p.send(u.mug)
	})
})
$a.del('/user', function (q, p, nx) {
	$md.user.remove(q.body, function (z, da) {
		p.json(da)
	})
})
testMyMug = function () {
	z()
	$.h1('testing myMug ...').A()
	$.get('/myMug', function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
testMugByUsername = function (username) {
	z()
	username = username || 'ss'
	$.h1('testing mugByUsername ...').A()
	$.get('/mugByUsername/' + username, function (data) {
		z()
		$.h1('in callback..').A()
		$.img(data).A().C('black').drag()
	})
}
testDefaultMug = function () {
	z()
	$.img(defaultMug).A()
}
testChangeMug = function () {
	//it automatically changes your userMug to the defaultMug
	$.post('/changeMug', {url: defaultMug},
			function () {
				z()
				TWEEN()
			})
}
  