Pf = Profile = $m.profile


//get your profile
$a.PO('/getMyProfile',   function (q,p) {
	var un = q.b.un || 'a'
	
	Pf.f1({un: q.un}, _json(p)	)
})


$a.PO('/getProfile', function (q,p) {
			var un=  q.b.un|| 'a'
			Pf.f1({un: un}, 
					function (z, pf) { p.se('yes')}) //$l(pf)	// res.json(profile)
})
		
 

//get someones profile
$a.get('/profile/:un', function (q,p) {//$l('/profile/:un'); $l('req.params.un: ' + req.params.un)
	Pf.f1({un:  q.pm.un}, _json(p))
})
//update your profile
$a.PO('/myprofile', function (q, p) {
	Pf.f1(
			{un: q.un},
			function (z, pf) {
				if (!pf) {
					q.b .un = q.un
					Pf.cr (
							q.b , function () {
								p.se ('created!')
							})
				}
				else {
					Pf.upd({un: q.un},
							q.b , function () {
								p.se ('updated!')
							})
				}
			})
})

$a.PO('/updateProfile', function (q, p) {
		Pf.f1Upd({un: q.b.un}, q.b.pf)})
		

$a.PO('/newProfile', function (q, p) {Pf.cr(q.b.pf) })

