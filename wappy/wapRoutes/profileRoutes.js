Profile = $m.profile


//get your profile
$a.PO('/getMyProfile',   function (q,p) {
	var un = q.body.un || 'a'
	Profile.findOne({un: q.un}, _json(p)	)
})

$a.PO('/getProfile', function (q,p) {

		 
			var un=  q.body.un|| 'a'
	
			Profile.findOne({
						un: un
					},
					
					 
					   function (err, profile) {
						$l(profile)
						res.send('yes')
						// res.json(profile)
					})
		
})
		
 

//get someones profile
$a.get('/profile/:un', function (q,p) {//$l('/profile/:un'); $l('req.params.un: ' + req.params.un)
	Profile.findOne({un:  q.params.un}, _json(p))
})
//update your profile
$a.PO('/myprofile', function (q, p) {
	Profile.findOne(
			{un: q.un},
			function (err, profile) {
				if (!profile) {
					q.body.un = q.un
					Profile.create(
							q.body, function () {
								p.send('created!')
							})
				}
				else {
					Profile.update({un: q.un},
							q.body, function () {
								p.send('updated!')
							})
				}
			})
})
$a.PO('/updateProfile',
		function (q, p) {
			models.profile.findOneAndUpdate(
					{un: q.body.un},
					q.body.profile
			)
		})
$a.PO('/newProfile',
		function (q, p) {
			Profile.create(
					q.body.profile)
		})

