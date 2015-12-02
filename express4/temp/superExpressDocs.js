 
// approach re-us
// single // ‘/urs/:ur_id’ path  and  add handlers
// for mult HTTP mets.
rtrOb = function () {
	
	// 1 rtr ob: isolatd inst of (mw+rts) (mini $a)
// -bhvs ~mw (can be passed to its(or other rtr's) 'use' met
// $e-apps start w 1 app-rtr and  $e has rtr-factMet
//   use  rtr for spec root URLs to sep rts into fls, mini-apps
//rtr = $e.rtr([{}]) //ops:
//   caseSensitive=f ->   /Foo ~ /foo
//   mergeParams=f	 preserve req.params vals from the par rtr ->
// {   !(par~ch)?->ch   }
// strict (routing) = f  ->   /foo  ~ /foo/
// $e.Router(rt): cr modlar mountbe rtHlrs!
// full mw&routg systems!
// mini-apps! ..read step by step:
}
multCb = function () {

//FUNCTIONS:  rte handlers can be:  fn, [fn], combo
	$a.g('/ex/a', function (q, p) {
		p.s('Hello from A!')
	})//   rt handled w 1 cb
	$a.g('/ex/b', function (q, p, n) {
		$l('p sent by n');
		n()
	}, fn2)//  rt handled w >1 cb  (use n object)
// You can provide mult cbs
// that bhv as mw to handle a req.
// but these cbs may  invoke n('rt')
// to bypass remaing rt-cbs
}
mat = function () {//*MATCHING:
	//   reqs -> ap end points called URIs, can be: strs   str-patts    RE
//  rt: pt + met+ 1+handlers)    // ex    $a.met(srvPt, [cb...], cb),    Expps uses path-to-regexp
	//  ?, +, *, () subsets of RE cntrparts
//   hyphen, dot  interpreted literally by string-based paths
//  Query strings   not a part of the rt path for matching
//  '/ab?cd'    +acd  +abcd// ab(cd)?e    mat   abe  abcde
// 'ab+cd'   match abcd abbbbcd         'ab*cd'   match abcd abRAxOMcd
	$a.g(/a/, function (q, p) {
		p.s('/a/')
	})// mat * w 'a' in rt name:
	$a.g(/.*fly$/, function (q, p) {
		p.s('/.*fly$/')
	})//   mat butterfly,dragonfly,  not butterflyman
//  following mats both:  g / commits / 71 dbb9c              g / commits / 71 dbb9c. .4 c084f9
	rr.g(/^\/commits\/(\w+)(?:\.\.(\w+))?$/,
			function (q, p) {
				from = q.params[0]
				to = q.params[1] || 'HEAD'
				p.s('commit range ' + from + '..' + to)
			})
	//    rtr.param([name,] cb )
//  ‘.’ char  can’t capture   char  in   capturing regexp.
//    can’t use '/user-.+/' to capt e 'users-gami',
// use [\\s\\S] or [\\w\\W] instead (as in '/user-[\\s\\S]+/'.
//captures '1-a_6' but not '543-azser-sder'
	rr.g('/[0-9]+-[[\\w]]*', function () {
	})
//  /[0-9]+-[[\\S]]*       capts '1-a_6' and '543-az(ser"-sder'    but not '5-a s'
//  [[\\s\\S]]*  capts all (equivalent to '.*')
}
mounting = function () {

// rtr.use([path], [function, ...] function)
	rtr.u(function (q, p, n) {
		$l('%s %s %s',
				q.method,
				q.url,
				q.path
		);
		n()
	})
	rtr.u('/bar', function (q, p, n) {
		n()
	});
	//   will invoked if  pt starts w
	// /bar from  mount point
	rtr.u(function (q, p, n) {
		p.s('Hi')
	});// always invoked
	$a.u('/foo', rtr);
	$a.ls(3000);
//The “mount” path is stripped ,
// !vs,  to  mw fn ( more decoupled )
}
pam = function () {
// PARAM:
// $a.param([n], cb)
// can add cb trgs to rt-pams
// (n is pam name | [n,n..] )
	$a.pm('user',
// when :user is present in a route path,
			// you may map user loading logic
			// to automatically provide req.user to the route,
			// or perform validations on the parameter input.
			function (req, res, next, id) {
				User.find(id, function (err, user) {  // try to get details from User md
					if (err) {
						next(err)
					}
					else if (user) {
						// and attach it to req
						req.user = user;
						next()
					}
					else {
						next(new Error('failed to load user'))
					}
				})
			})
//   pm cb fns are local to  rtr where twas defined, -!inherited by mounted apps/routers.
//   pm cbs defined on the app, trgd only by rt pams defined on app rts
//    pm cbs called only once
//   Add cb trigs to route pams,
// where name is the name of the pam or [pam]
//  cb-fn pams: qOb, pOb, nMW, pam val
// ex ://ur is present in a route path,
//  you may map ur loading logig to autoProvide
//q.ur  to the route, or perform vds o the param ip
	rtr.pm('ur', function (q, p, n, id) {
		// try to g the ur details
		// from the ur model and attach it to  qOb
		ur.fi(id, function (z, ur) {
			if (ur) {
				q.ur = ur;
				n()
			}
			else {
				n($z('failed to load ur'))
			}
		})
	})
// Param cb fns
// are local to the router on which they are defined.
//They are not inhertd by mountd apps or rtrs
//hence, param cbs dfnd on rtr will be trgd only
//  by route pams dfnd on rtr rts
// param  cbs    only called once per req-resp-cyc, even
// if the pam is  matched in mul  rtss, ex:
}
resp = function () {


//$gl: ff:file
//  8t: octet ~~:stream    ':as_
	/*
	 dl: 	Prompt for a file to be downloaded
	 end  : end p process
	 json(p) 	-> j[(jp+support)]
	 redirect: rdQ
	 render rr vw tp
	 sendFile	-> ff('8t~~)
	 sts: status
	 STS:  sendStatus: set status code and return page(status code, set to string
	 (as the response body)
	 ~ (set pStsCd &  -> stsCd2s('pBd))
	 send -> *
	 // If none of them is called from a rt handler,
	 the client req will be left hanging.
	 */
//    $a.rt : cr ptChainbRtHlrs
// create path-chainable-route-handlers
}
next = function () {


// *smart routing:
//  impose pre-conditions on a rt,
// then pass control to subsequent rts
// (if there’s no reason to proceed with the curr rt)
	cb0 = function (q, p, n) {
		$l('CB0');
		n();
	}
	cb1 = function (q, p, n) {
		$l('CB1');
		n();
	}
	cb2 = function (q, p) {
		p.s('Hello from C!');
	}
	$a.g('/ex/c', [cb0, cb1, cb2])
// 2 combos of fns and [fn]
	$a.g('/ex/d', [function (q, p, n) {
				$l('CB0');
				n()
			},
				function (q, p, n) {
					$l('CB1');
					n();
				}],
			function (q, p, n) {
				$l('p sent by n');
				n()
			},
			function (q, p) {
				p.s('from D!')
			})
}
depc = function () {


//  ex: the  rtr.param(name, cb) sign remains same,
// but instead of a mw cb,
//     a cust data type checking fn has been defined
// to vd the data type of the uder id
	rtr.pm(function (pm, validator) {
		return function (q, p, n, val) {
			if (validator(val)) {
				n()
			}
			else {
				p.sendStatus(403)
			}
		}
	})
	rtr.pm('id', function (candidate) {
		return !isNaN(parseFloat(candidate))
				&& isFinite(candidate)
	})
	$a.pm('styId', function (q, p, n, styId) {
		q.sty = sty   // Fetch  sty by  ID (styId)
		// from   db, sv sty ob into q ob
	})
	$a.pm('elId', function (q, p, n, elId) {
		
		// Fetch the el by its ID (elId) from a db
		// Narrow down the search when q.sty is provided
		// Save the found el ob into q ob
		q.el = el
	})
	$a.g('/v1/stys/:styId/els/:elId',
			function (q, p) {
				// Now we auto g the sty and el in the q ob
				p.s({
					sty: q.sty, el: q.el
				})
			})
	$a.po('/v1/stys/:styId/els',
			function (q, p) {
				// Now we auto g the sty in the q ob
				// We use sty ID to cr  a new el for that sty
				p.s({
					sty: q.sty,
					el: newEl
				});
			})
	$a.pm('v3Un', function (q, p, n, un) {
		$l('Un pm was is detected: ', un)
		fUByUn(un, function (z, u) {
			if (z) {
				return n(z)
			}
			;
			q.user = u;
			return n()
		})
	})
	$a.g('/v3/urs/:v3Un', function (q, p, n) {
		return p.r('u', q.user)
	})
	$a.g('/v3/am/:v3Un', function (q, p, n) {
		return p.r('am', q.user)
	})
}
// rtr.all(pt, [cb,...]cb)
// useful  for mapping “  global” logic  for spec
// pt prefixes| arbitrary  mats
//     rtr.all('*',  Auth, loadU)   ~   rtr.all('*',  Auth)
// if you placed this rt at top,
// it  would req that a rts from that point on,
// would  req  auth,  auto load a ur
//  rtr.met(path, [cb,... ]  cb  )
// can  provide  mult  cbs
// cbs   behave just like   mw, except
// may invoke  n('route')      to   bypass   remaining   rt cb's
//  g   po    pu  d  a
// head(h)
//  options(o)
// trace(tr)
//  copy(cp)
//  lock(lo)
//  connect(cn)
//  move(m)
// merge(mr)
// m-search(ms) ?  mkcol(mc) ?   patch(pa)
//  purge(pr)
//  propfind(pf)
// proppatch(pp)
// unlock(ul)
//  report(r)  notify(n)
// search(s)
// mkactivity(mk)
// checkout(ch)
// subscribe(ss)
//    unsubscribe(uss)
//Even if you use  pt patt ( or set  pt patts  )
// load/assign greet rtr on/to 2 pt patts.
// a.u(['/gre+t', '/hel{2}o'], greet)
// to load the router,
//  baseUrl prop rets  matd str, !patts
// q.baseUrl of /greet/jp is /greet
//  /hello is baseUrl of /hello/
// q.baseUrl is sim  to the
// mountpath prop of the app ob,
// except app.mountpath returns
// the matched path pattern(s).
o = {
	h: 'head',
	o: 'options',
	tr: 'trace',
	cp: 'copy',
	lo: 'lock',
	cn: 'connect', pf: 'propfind',
	pp: 'proppatch',
	ul: 'unlock',
	s: 'search',
	mk: 'mkactivity',
	ch: 'checkout',
	ss: 'subscribe',
	uss: 'unsubscribe',
	n: 'notify', r: 'report',
	m: 'move',
	mr: 'merge',
	ms: 'm-search',
	mc: 'mkcol(mc)', pa: 'patch', pr: 'purge'
}