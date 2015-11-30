$a.g('/users', function (q, p) {

/////////////. it gives me back {id, username, mug, status}
	$m.user.find(q.body, function (z, users) {if (users) {
		
		p.json(_.m(users, $user
				/*
				 function (u) {
				 return {
				 id: u.id, u: u.username, un: u.username, username: u.username,
				 mug: u.mug || 'no mug', status: u.status || 'no status'
				 }
				 }
				 */
		  ))}})})
$a.get('/user/:un', function (q, p) {
	$m.user.findOne({un: q.params.un}, function (z, user) {
		if (user) {
			p.json($user(user))
			//	p.json(toUser(user))
		}
	})
})
$a.G('/un', function (q, p) {
	p.json(q.un)
})
$a.po('/user', function (q, p, n) {
////////// for posting/creating a new user

	$md.user.create(q.body, function (z, u) {
		if (z) {
			$l(z.code == 11000 ? '!!' : '!');
			$d(z);
			p.json('error');
			n(z)
		}
		else {
			_newUserSucc(q, p, user)
			function _newUserSucc(q, p, user) {
				
				 
				
				
				// _.x(q.ss, {un: u.un,  loggedIn: true}).save(function () { p.json(u.un) })
				
				
				//set session u=u.u (user name= user.username)
				q.ss.un = user.un
				//set session li=true (loggedIn=true)
				q.ss.loggedIn = true
				//save session and send back a json obj of username -so a string? huh?
				//_.extend(q.session, {username: u.username, loggedIn: true})
				q.ss.save(function () {
					p.json(user.un)
				})
			}
		
		}
	})
	 
})
$a.del('/user', function (q, p) {
////delete user  // does this('del') work like post or get (in terms of express)?
	$m.user.remove(q.body, _json(p))
})
$w = $Mw = function (q, p, n) {
// regular (pre-user) middleware
	miniQP(q, p)
	q.loggedIn = isLoggedIn(q) // =  p.lc.loggedIn
	q.un = q.ss.un; //q.un = q.un; p.lc.lI =q.lI = q.loggedIn
	n()
}
$Mw.user = function (q, p, nx) {
	if (q.loggedIn) {
		$l('.user middleware.. loggedIn?= ' + q.loggedIn)
		//req.li ||//Midware.u =
		$m.user.findOne({un: q.un}, function (z, user) {
			if (z) {
				next(z)
			}
			if (user) {
				q.user = p.lc.user = user   //res.locals.U = req.U =
				q.un = p.lc.un = user.un//res.locals.u = req.u =
				q.uId = p.lc.urId = user._id //res.locals.I = req.I =
			}
			nx()
		})
	}
	else {
		$l('mw says NOT logged in :(')
		p.send('guest');
		return
	}
	//auth(q, p, next, function (q, p, nx) {
	//	$md.user.findOne({un: q.un},
	//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
	//				nx()})})
	//
}
// 'user' middleware:
// what can it do?
// it can see is someone is 'authed'
// how does it know?  requests from authorized users have 'loggedIn' property set to true
// so just check that property
// /W =
//var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
// $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
// p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
// if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}