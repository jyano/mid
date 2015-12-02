 

$get('/un',  function (q, p) {
	p.json( q.un )
} ) //send json of 'my username'
$get('/users',  function (q, p) {
 // *** sends back all the users, but has to parse/filter them first // we only want an ob with THESE FOUR properties {id, username, mug, status} // (NOT all the actual properties on the ob instance)
	Ur.fi( 	p.daFn(  toUser ) )
} ) //p.da( toUser(da) )
$get('/user/:un',  function (q, p) {
	Ur.f1(q.un_(), p.daFn($user))
	
}) //	p.js(toUser(user))


$post('/user', function (q, p, nx) {
	
	Ur.cr(q.b, function (z, u) {
		if (z) { p.js('z'); nx(z) } 
		
		else {
			p.newUserSucc(q, ur)
		}
	})
	//$l(z.code == 11000 ? '!!' : '!');//$d(z);
})//  for posting/creating a new user


$a.de('/user', function (q, p) {
	Ur.rm(q.b, _json(p))
})////delete user  // does this('del') work like post or get (in terms of express)?


$w = $Mw = function (q, p, nx) {
// regular (pre-user) middleware
	miniQP(q, p)
	q.loggedIn = isLoggedIn(q) 
	q.un = q.ss.un;
	// =  p.lc.loggedIn
	//q.un = q.un; p.lc.lI =q.lI = q.loggedIn
	
	nx()
	
}

 

$Mw.ur = $Mw.user =  qp(function (q, p, nx) {
	if (q.lI || q.loggedIn ) {
		Ur.f1(q.un(), function (z, ur) { // if (z) { nx(z) }
			nx.if(z);
			q.parUr(ur);
			nx()
		})
		
		
	}	//$l('.user mw.. loggedIn?= ' + q.loggedIn) //req.li ||//Midware.u =
	
	else { p.se('guest'); return } //$l('mw says NOT logged in :(')
	//auth(q, p, next, function (q, p, nx) {
	//	$md.user.findOne({un: q.un},
	//			function (z, user) {if (z) {next(z)} else if (user) {loginSuccess(q, p, user)}
	//				nx()})})
	//
})

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

 