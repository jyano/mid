 

$a.po('/login', function (q, p, nx) {
	var ss = q.ssUser.findOne({un: q.body.un, pw: q.body.pw}, function (z, user) {
		//$l('/login')
		//$l('un: ' + q.body.un)
		//$l('pw: ' + q.body.pw)
		//$l(q.body.un);
		//$l(q.body.pw)
		//$l('/login')
		//$l('un: ' + q.body.un)
		//$l('pw: ' + q.body.pw)
		//$l(q.body.un);
		//$l(q.body.pw)
		//$l(q.body.un + ', ' + q.body.pw)
		//$l(q.body.un)
		//$l(q.body.pw)
		
				
				if (z) {nx(z)}
				
				if (!user) { $l('FAIL!!'); p.json('guest')}
				
				else {
					
					$l('logged in: ' + u + ' !')
				 	 ss.un = user.un
					 ss.loggedIn = ss.li =true  // q.ss.un = q.ss.u = user.un //q.ss.loggedIn = q.ss.li = true //_.extend(q.session, {un: u.un, loggedIn: true}) // _.x(q.ss, {un: u.un, loggedIn: true})
					
					ss.save(function () {
								$l('ss saved ' +  ss.un + ', ' + user.un)
								p.json(user.un)
							
							})
							
						 
					
				
				}
			 		
			})
})

$logOut(function (q, p) {
	q.ss.un = q.ss.u = null
	q.ss.loggedIn = q.ss.li = false
	q.ss.un = null
	q.ss.loggedIn = false
	//_.x(q.ss, {un: null, loggedIn: false})
	q.ss.save(function () {
		p.json('false')
	})
})

$a.G('/loggedIn', function (q, p) {
	$l('loggedIn? q.loggedIn: ' + q.loggedIn + ', q.un: ' + q.un)
	$l('loggedIn?')
	$l('q.loggedIn: ' + q.loggedIn)
	$l('q.un: ' + q.un)
	p.json(q.un)
})
 