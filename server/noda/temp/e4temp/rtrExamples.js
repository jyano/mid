exARt = function () {
	$a.rt('/book')
			.g(
			function (q, p) {
				p.s('Get')
			}
	)
			.po(
			function (q, p) {
				p.s('Add')
			}
	)
			.put(
			function (q, p) {
				p.s('book')
			}
	)
}
exRtrRt1 = function () {
	rtr = $e.rt()// cr a rtr as a mu
	rtr.u(
			function (q, p, n) {
				$l($D.n());
				n()
			}
	)  //  load mw in it (it will be spec to this rtr)
	rtr.g(
			'/', function (q, p) {
				p.s('BirdHome')
			}
	)// define  a rt
	rtr.g(
			'/about', function (q, p) {
				p.s('AboutBird')
			}
	)// define a rt
	$a.u('/bird', rtr) //mount  it on a path on the main app
	//app handles reqs to /bird
	// and /bird/about (and calls rt-spec mw)
}
exRtrRt2 = function () {
	// use rtr.route() to avoid duplicate route naming
	rtr = $Rtr()
	rtr.route('/urs/:ur_id')
			.a(
			function (req, res, n) {// runs for a HTTP verbs first think of it as route specific mw!
				n()
			}
	)
			.g(
			function (q, p, n) {
				p.j(q.ur)
			}
	)
			.pu(
			function (q, p, n) {// just exof maybe updg the ur
				q.ur.n = q.params.n// save ur ... etc
				p.j(q.ur);
			}
	)
			.po(
			function (q, p, n) {
				n(Z('!impl'))
			}
	)
			.d(
			function (q, p, n) {
				n(Z('!impld'))
			}
	)
	rtr.g(
			'/ur/:id', function (q, p, n) {
				$l('though this mats');
				n()
			}
	)
	rtr.g(
			'/ur/:id', function (q, p) {
				$l('.. this too');
				p.e()
			}
	)
	rtr.pm(
			'ur_id', function (q, p, n, id) {
				q.ur = {id: id, n: 'TJ'};
				n()
			}
	)
}
poId = function () {
	
	
	// Importations and configurations
	rtr.pm(
			'poId', function (q, p, n) {
				q.po = {
					n: 'PHP', u: 'php.co'
				};
				return n()
			}
	)
	// Find po by ID  // Save po to q
	//mw: fetches story by id
	$a.pm(
			'id', function (q, p, n, id) {
				q.db.g('stys').f1(
						{_id: id},
						function (z, sty) {
							if (!sty) {
								return n(Z('Nothing is found'))
							}
							q.sty = sty
							n()
						}
				)
			}
	)
	rtr.rt('/pos/:poId')
			.a(
			function (q, p, n) {
			}
	)
			.g(
			function (q, p, n) {
				p.j(q.po)
			}
	)
			.po(
			function (q, p, n) {
			}
	)
			.pu(
			function (q, p, n) {
				p.j(q.po)
			}
	)
			.d(
			function (q, p, n) {
				p.j({ms: 'ok'})
			}
	)
}
admin = function () {
	authAdminMw = function (q, p, n) {
		return (q.ss && !q.ss._am) ?
				n(401) : n()
	}
	// Admin route that fetches urs and calls render function
	ADMIN = am = {
		//finds all the users
		main: function (q, p, n) {
			User.fi(
					function (z, urs) {
						if (!urs) {
							return n($z('!urs'))
						}
						p.r('am/index.html', urs)
					}
			)
		}
	}
	// Display list of urs for am dashboard
	$a.g(
			'/admin',
			authAdminMw,
			ADMIN.main
	)
}
username = function () {
	mockDB = USERS = urs = {jy: {em: 'hi@jy.co', site: ' http://jy.co '}}
	fUByUn = function (un, cb) {
		User.f1(
				{un: un},
				function (u) {
					if (u) {
						cb(null, u)
					}
				}
		)
	}
	fUByUnMw = function (q, p, n) {
		var un = q.pm.un;
		if (un) {//$l('pm:',q.pm.un)
			fUByUn(
					un, function (z, u) {
						q.user = u;
						return n()
					}
			)
		}
		else {
			return n()
		}
	}
	$a.g(
			'/v1/u/:un', function (q, p, n) {
				fUByUn(
						q.pms.un,
						function (z, u) {
							return p.r('u', u)
						}
				)
			}
	)
	$a.g(
			'/v1/am/:un', function (q, p, n) {
				fUByUn(
						q.pms.un, function (z, u) {
							return p.r('am', u)
						}
				)
			}
	)
	// The v2 routes that use the custom middleware
	$a.g(
			'/v2/urs/:un', fUByUnMw, function (q, p) {
				return p.r('user', q.user)
			}
	)
	$a.g(
			'/v2/am/:un', fUByUnMw, function (q, p) {
				return p.r('am', q.user)
			}
	)
	$a.g(
			'/v1/stys/:id', function (q, p) {
				p.s(q.sty)
			}
	)
}
mountRtr = function () {
	
	
	// q.baseUrl   URL pt on which rtr inst was mounted.
	greet = $e.Router()
	greet.g(
			'/jp', function (q, p) {
				$l(q.baseUrl)  //greet
				p.sn('Konichiwa!')
			}
	)
	a.u('/greet', greet)
	// load the router on '/greet'
	rtr.g(
			'/ev', function (q, p, n) {
			}
	)
	//  handles any req ends in /evs
	// -depends  where the rtr is "u()'d"
	$a.u('/cal', rtr)
	// only reqs to /cal/*  will be sent to rtr
	//  move static() where u want it
}
dirnm = function () {
	rtr.uSt(__dirname + '/public')
	rtr.u(function (q, p) {
		p.s('He')
	})
	//ex serving files from mult  dirs,
	// precedence to “./public”
	$a.uSt(__dirname + '/public')
	$a.uSt(__dirname + '/files')
	$a.uSt(__dirname + '/uploads')
}
////
exARt = function () {
	$a.rt('/book').g(function (q, p) {
		p.s('Get')
	}).po(function (q, p) {
		p.s('Add')
	})
			.put(function (q, p) {
				p.s('book')
			})
}
exRtrRt1 = function () {
	rtr = $e.rt()// cr a rtr as a mu
	rtr.u(function (q, p, n) {
		$l($D.n());
		n()
	})  //  load mw in it (it will be spec to this rtr)
	rtr.g('/', function (q, p) {
		p.s('BirdHome')
	})// define  a rt
	rtr.g('/about', function (q, p) {
		p.s('AboutBird')
	})// define a rt
	$a.u('/bird', rtr) //mount  it on a path on the main app
//app handles reqs to /bird
// and /bird/about (and calls rt-spec mw)
}
xRtrRt2 = function () {
	// use rtr.route() to avoid duplicate route naming
	rtr = $Rtr()
	rtr.route('/urs/:ur_id')
			.a(function (req, res, n) {// runs for a HTTP verbs first think of it as route specific mw!
				n()
			})
			.g(function (q, p, n) {
				p.j(q.ur)
			})
			.pu(function (q, p, n) {// just exof maybe updg the ur
				q.ur.n = q.params.n// save ur ... etc
				p.j(q.ur);
			})
			.po(function (q, p, n) {
				n(Z('!impl'))
			})
			.d(function (q, p, n) {
				n(Z('!impld'))
			})
	rtr.g('/ur/:id', function (q, p, n) {
		$l('though this mats');
		n()
	})
	rtr.g('/ur/:id', function (q, p) {
		$l('.. this too');
		p.e()
	})
	rtr.pm('ur_id', function (q, p, n, id) {
		q.ur = {id: id, n: 'TJ'};
		n()
	})
}
poId = function () {


// Importations and configurations
	rtr.pm('poId', function (q, p, n) {
		q.po = {
			n: 'PHP', u: 'php.co'
		};
		return n()
	})
// Find po by ID  // Save po to q
	//mw: fetches story by id
	$a.pm('id', function (q, p, n, id) {
		q.db.g('stys').f1({_id: id},
				function (z, sty) {
					if (!sty) {
						return n(Z('Nothing is found'))
					}
					q.sty = sty
					n()
				})
	})
	rtr.rt('/pos/:poId')
			.a(function (q, p, n) {
			})
			.g(function (q, p, n) {
				p.j(q.po)
			})
			.po(function (q, p, n) {
			})
			.pu(function (q, p, n) {
				p.j(q.po)
			})
			.d(function (q, p, n) {
				p.j({ms: 'ok'})
			})
}
admin = function () {
	authAdminMw = function (q, p, n) {
		return (q.ss && !q.ss._am) ?
				n(401) : n()
	}
// Admin route that fetches urs and calls render function
	ADMIN = am = {
		//finds all the users
		main: function (q, p, n) {
			User.fi(function (z, urs) {
				if (!urs) {
					return n($z('!urs'))
				}
				p.r('am/index.html', urs)
			})
		}
	}
// Display list of urs for am dashboard
	$a.g('/admin',
			authAdminMw,
			ADMIN.main
	)
}
username = function () {
	mockDB = USERS = urs = {jy: {em: 'hi@jy.co', site: ' http://jy.co '}}
	fUByUn = function (un, cb) {
		User.f1({un: un},
				function (u) {
					if (u) {
						cb(null, u)
					}
				})
	}
	fUByUnMw = function (q, p, n) {
		var un = q.pm.un;
		if (un) {//$l('pm:',q.pm.un)
			fUByUn(un, function (z, u) {
				q.user = u;
				return n()
			})
		}
		else {
			return n()
		}
	}
	$a.g('/v1/u/:un', function (q, p, n) {
		fUByUn(q.pms.un,
				function (z, u) {
					return p.r('u', u)
				})
	})
	$a.g('/v1/am/:un', function (q, p, n) {
		fUByUn(q.pms.un, function (z, u) {
			return p.r('am', u)
		})
	})
// The v2 routes that use the custom middleware
	$a.g('/v2/urs/:un', fUByUnMw, function (q, p) {
		return p.r('user', q.user)
	})
	$a.g('/v2/am/:un', fUByUnMw, function (q, p) {
		return p.r('am', q.user)
	})
	$a.g('/v1/stys/:id', function (q, p) {
		p.s(q.sty)
	})
}
mountRtr = function () {


// q.baseUrl   URL pt on which rtr inst was mounted.
	greet = $e.Router()
	greet.g('/jp', function (q, p) {
		$l(q.baseUrl)  //greet
		p.sn('Konichiwa!')
	})
	a.u('/greet', greet)
// load the router on '/greet'
	rtr.g('/ev', function (q, p, n) {
	})
//  handles any req ends in /evs
// -depends  where the rtr is "u()'d"
	$a.u('/cal', rtr)
// only reqs to /cal/*  will be sent to rtr
//  move static() where u want it
}
dirnm = function () {
	rtr.uSt(__dirname + '/public')
	rtr.u(function (q, p) {
		p.s('He')
	})
//ex serving files from mult  dirs,
// precedence to “./public”
	$a.uSt(__dirname + '/public')
	$a.uSt(__dirname + '/files')
	$a.uSt(__dirname + '/uploads')
}

function examples(){

//exARt :
	$a.rt('/book').g(function (q, p) {
		p.send('Get')
	})
			.po(function (q, p) {
				p.send('Add')
			}).put(function (q, p) {
				p.send('book')
			})
//exRtrRt1 = function () {
	rtr = $e.rt()// cr a rtr as a mu
	rtr.u(function (q, p, n) {
		$l($D.n());
		n()
	})  //  load mw in it (it will be spec to this rtr)
	rtr.g('/', function (q, p) {
		p.send('BirdHome')
	})// define  a rt
	rtr.g('/about', function (q, p) {
		p.s('AboutBird')
	})// define a rt
	$a.u('/bird', rtr) //mount  it on a path on the main app
//app handles reqs to /bird
// and /bird/about (and calls rt-spec mw)
//xRtrRt2 = function () {
// use rtr.route() to avoid duplicate route naming
	rtr = $Rtr()
	rtr.route('/urs/:ur_id').a(function (req, res, n) {
		
		// runs for a HTTP verbs first think of it as route specific mw!
		n()
	}).g(function (q, p, n) {
		p.j(q.ur)
	}).pu(function (q, p, n) {// just exof maybe updg the ur
		q.ur.n = q.params.n// save ur ... etc
		p.j(q.ur);
	}).po(function (q, p, n) {
		n(Z('!impl'))
	}).d(function (q, p, n) {
		n(Z('!impld'))
	})
	rtr.g('/ur/:id', function (q, p, n) {
		$l('though this mats');
		n()
	})
	rtr.g('/ur/:id', function (q, p) {
		$l('.. this too');
		p.e()
	})
	rtr.pm('ur_id', function (q, p, n, id) {
		q.ur = {id: id, n: 'TJ'};
		n()
	})
//poId = function () {
// Importations and configurations
	rtr.pm('poId', function (q, p, n) {
		q.po = {
			n: 'PHP', u: 'php.co'
		};
		return n()
	})
// Find po by ID  // Save po to q
//mw: fetches story by id
	$a.pm('id', function (q, p, n, id) {
		q.db.g('stys').f1(
				{_id: id},
				function (z, sty) {
					if (!sty) {
						return n(Z('Nothing is found'))
					}
					q.sty = sty
					n()
				}
		)
	})
	rtr.rt('/pos/:poId').a(function (q, p, n) {
	}).g(function (q, p, n) {
		p.j(q.po)
	})
			.po(function (q, p, n) {
			}).pu(function (q, p, n) {
				p.j(q.po)
			}).d(function (q, p, n) {
				p.j({ms: 'ok'})
			})
//admin example:
	authAdminMw = function (q, p, n) {
		return (q.ss && !q.ss._am) ? n(401) : n()
	}
// Admin route that fetches urs and calls render function
	ADMIN = am = {
		//finds all the users
		main: function (q, p, n) {
			User.fi(
					function (z, urs) {
						if (!urs) {
							return n($z('!urs'))
						}
						p.r('am/index.html', urs)
					}
			)
		}
	}
// Display list of urs for am dashboard
	$a.g('/admin', authAdminMw, ADMIN.main)
//username = function () {
	mockDB = USERS = urs = {jy: {em: 'hi@jy.co', site: ' http://jy.co '}}
	fUByUn = function (un, cb) {
		User.f1(
				{un: un},
				function (u) {
					if (u) {
						cb(null, u)
					}
				}
		)
	}
	fUByUnMw = function (q, p, n) {
		var un = q.pm.un;
		if (un) {//$l('pm:',q.pm.un)
			fUByUn(
					un, function (z, u) {
						q.user = u;
						return n()
					}
			)
		}
		else {
			return n()
		}
	}
	$a.g('/v1/u/:un', function (q, p, n) {
		fUByUn(
				q.pms.un,
				function (z, u) {
					return p.r('u', u)
				}
		)
	})
	$a.g('/v1/am/:un', function (q, p, n) {
		fUByUn(
				q.pms.un, function (z, u) {
					return p.r('am', u)
				}
		)
	})
// The v2 routes that use the custom middleware
	$a.g('/v2/urs/:un', fUByUnMw, function (q, p) {
		return p.r('user', q.user)
	})
	$a.g('/v2/am/:un', fUByUnMw, function (q, p) {
		return p.r('am', q.user)
	})
	$a.g('/v1/stys/:id', function (q, p) {
		p.s(q.sty)
	})
//mountRtr = function () {
// q.baseUrl   URL pt on which rtr inst was mounted.
	greet = $e.Router()
	greet.g('/jp', function (q, p) {
		$l(q.baseUrl)  //greet
		p.sn('Konichiwa!')
	})
	a.u('/greet', greet)
// load the router on '/greet'
	rtr.g('/ev', function (q, p, n) {
	})
//  handles any req ends in /evs
// -depends  where the rtr is "u()'d"
	$a.u('/cal', rtr)
// only reqs to /cal/*  will be sent to rtr
//  move static() where u want it
//dirnm:
	rtr.uSt(__dirname + '/public')
	rtr.u(function (q, p) {
		p.s('He')
	})
//ex serving files from mult  dirs,
// precedence to “./public”
	$a.uSt(__dirname + '/public')
	$a.uSt(__dirname + '/files')
	$a.uSt(__dirname + '/uploads')
	examples = function () {
		exARt = function () {
			$a.rt('/book')
					.g(function (q, p) {
						p.s('Get')
					})
					.po(function (q, p) {
						p.s('Add')
					})
					.put(function (q, p) {
						p.s('book')
					})
		}
		exRtrRt1 = function () {
			rtr = $e.rt()// cr a rtr as a mu
			rtr.u(function (q, p, n) {
				$l($D.n());
				n()
			})  //  load mw in it (it will be spec to this rtr)
			rtr.g('/', function (q, p) {
				p.s('BirdHome')
			})// define  a rt
			rtr.g('/about', function (q, p) {
				p.s('AboutBird')
			})// define a rt
			$a.u('/bird', rtr) //mount  it on a path on the main app
//app handles reqs to /bird
// and /bird/about (and calls rt-spec mw)
		}
		exRtrRt2 = function () {
			// use rtr.route() to avoid duplicate route naming
			rtr = $Rtr()
			rtr.route('/urs/:ur_id')
					.a(function (req, res, n) {// runs for a HTTP verbs first think of it as route specific mw!
						n()
					})
					.g(function (q, p, n) {
						p.j(q.ur)
					})
					.pu(function (q, p, n) {// just exof maybe updg the ur
						q.ur.n = q.params.n// save ur ... etc
						p.j(q.ur);
					})
					.po(function (q, p, n) {
						n(Z('!impl'))
					})
					.d(function (q, p, n) {
						n(Z('!impld'))
					})
			rtr.g('/ur/:id', function (q, p, n) {
				$l('though this mats');
				n()
			})
			rtr.g('/ur/:id', function (q, p) {
				$l('.. this too');
				p.e()
			})
			rtr.pm('ur_id', function (q, p, n, id) {
				q.ur = {id: id, n: 'TJ'};
				n()
			})
		}
		poId = function () {


// Importations and configurations
			rtr.pm('poId', function (q, p, n) {
				q.po = {
					n: 'PHP', u: 'php.co'
				};
				return n()
			})
// Find po by ID  // Save po to q
			//mw: fetches story by id
			$a.pm('id', function (q, p, n, id) {
				q.db.g('stys').f1({_id: id},
						function (z, sty) {
							if (!sty) {
								return n(Z('Nothing is found'))
							}
							q.sty = sty
							n()
						})
			})
			rtr.rt('/pos/:poId')
					.a(function (q, p, n) {
					})
					.g(function (q, p, n) {
						p.j(q.po)
					})
					.po(function (q, p, n) {
					})
					.pu(function (q, p, n) {
						p.j(q.po)
					})
					.d(function (q, p, n) {
						p.j({ms: 'ok'})
					})
		}
		admin = function () {
			authAdminMw = function (q, p, n) {
				return (q.ss && !q.ss._am) ?
						n(401) : n()
			}
// Admin route that fetches urs and calls render function
			ADMIN = am = {
				//finds all the users
				main: function (q, p, n) {
					User.fi(function (z, urs) {
						if (!urs) {
							return n($z('!urs'))
						}
						p.r('am/index.html', urs)
					})
				}
			}
// Display list of urs for am dashboard
			$a.g('/admin',
					authAdminMw,
					ADMIN.main
			)
		}
		username = function () {
			mockDB = USERS = urs = {jy: {em: 'hi@jy.co', site: ' http://jy.co '}}
			fUByUn = function (un, cb) {
				User.f1({un: un},
						function (u) {
							if (u) {
								cb(null, u)
							}
						})
			}
			fUByUnMw = function (q, p, n) {
				var un = q.pm.un;
				if (un) {//$l('pm:',q.pm.un)
					fUByUn(un, function (z, u) {
						q.user = u;
						return n()
					})
				}
				else {
					return n()
				}
			}
			$a.g('/v1/u/:un', function (q, p, n) {
				fUByUn(q.pms.un,
						function (z, u) {
							return p.r('u', u)
						})
			})
			$a.g('/v1/am/:un', function (q, p, n) {
				fUByUn(q.pms.un, function (z, u) {
					return p.r('am', u)
				})
			})
// The v2 routes that use the custom middleware
			$a.g('/v2/urs/:un', fUByUnMw, function (q, p) {
				return p.r('user', q.user)
			})
			$a.g('/v2/am/:un', fUByUnMw, function (q, p) {
				return p.r('am', q.user)
			})
			$a.g('/v1/stys/:id', function (q, p) {
				p.s(q.sty)
			})
		}
		mountRtr = function () {


// q.baseUrl   URL pt on which rtr inst was mounted.
			greet = $e.Router()
			greet.g('/jp', function (q, p) {
				$l(q.baseUrl)  //greet
				p.sn('Konichiwa!')
			})
			a.u('/greet', greet)
// load the router on '/greet'
			rtr.g('/ev', function (q, p, n) {
			})
//  handles any req ends in /evs
// -depends  where the rtr is "u()'d"
			$a.u('/cal', rtr)
// only reqs to /cal/*  will be sent to rtr
//  move static() where u want it
		}
		dirnm = function () {
			rtr.uSt(__dirname + '/public')
			rtr.u(function (q, p) {
				p.s('He')
			})
//ex serving files from mult  dirs,
// precedence to “./public”
			$a.uSt(__dirname + '/public')
			$a.uSt(__dirname + '/files')
			$a.uSt(__dirname + '/uploads')
		}
	}
}