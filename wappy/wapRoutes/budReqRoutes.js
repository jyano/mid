Req = $m.req
User = $m.user
_toFr = function (q) {
	return {to: q.body.to, fr: q.u}
}
$a.PO('/acceptRequest',  function (q, p, n) {
	(q.U.buds = q.U.buds || []).push(q.b.u)
	f1('user', {u: q.b.u}, function (z, u) {
		(u.buds || []).push(q.u)
		u.save()
	})
	q.U.save()
})


$a.G('/getRequests',   function (q, p, n) {
	find('req', {to: q.u}, p)
})


$a.PO('/sendRequest', function (q, p) {
	Req.create(_toFr(q), p)
})




$a.G('/buds',  function (q, p, nx) {
	all('user', function (z, u) {
		p.j(_.filter(u, function (u) {
			return _.contains(q.user.buds, u.u)
		}))
	})
})

$a.PO('/buds',   function (q, p) {
	User.findOne(q.body,
			function (z, uu) {
				$l(uu.u)
				$m.user.find(
						function (z, u) {
							p.json(_.filter(u, function (u) {
								return _.contains(uu.buds, u.u)
							}))
						})
			})
})