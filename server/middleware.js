uplod = require('multer')({ dest: 'public/uploads/' }).single('avatar')
$a.use(
    ($ss=require('express-session'))({
        store: new  (require('connect-mongo')($ss))({ url: 'mongodb://localhost/jy'}),
        secret: 'foo',
        resave:true,
        saveUninitialized:true
    })
)
$a.use(($cP=require('cookie-parser'))('xyz'))
$bP=require('body-parser');

$a.use($bP.urlencoded({
extended: false,
limit:'50mb'
}));
$a.use($bP.json({limit:'50mb'}))

 
 
  
    MW.pamPr=function(q,p,n){l('lU');l(modl,'modl');p.l.p=q.p;p.l.pam=q.p['pam'];
        m[modl].findOne({name:q.pam},function(Z,doc){z(Z);if(!doc){l('!doc');q.l[modl]=q[modl]=null;n()}else{q.l[modl]=q[modl]=doc;}n();});n();}
    
MW.setPage=function(q,p,n){li('setPage'); page=q.path;if(q.s.cP==page){} else if (q.s.cP === undefined){cP= q.s.cP='root';} else {lP= q.s.lP= q.s.cP;cP= q.s.cP=page;  //p.l.cP = S.cP  ; p.l.lP = S.lP ;
        l('change recognized..');l(cP,'cP');l(lP,'lP');l(q.s.cP,'q.s.cP');l(q.s.lP,'q.s.lP');  }n();}
    sess = function(s){
        s.s = s.save
        s.rg = s.regenerate    // new SID and Session inst initd at q.ss.
        s.rl = s.reload // ss rl updd in cb
        s.d = s.destroy
        // cannot access session in cb
        // Destroys  ss, removing q.ss  (re-gens next req)
        //destroy session!!!
//  ssStor-based ss's has  met  called destroy(),
//     -used for    destroying ss's from the ssStor
//       –  proper way of tearing down a ssStor-based ss.
//     q.ss.destroy(); -accepts an opl cb
//        ( exd af  ss cleared from  store )
// q.ss.destroy(function () {  p.s('ss deleted') })
        s.t = s.touch  // Upds  maxAge prop   (ss mw usually does this).
        s.c= s.ck= s.cookie
        // s.a= s.maxAge
        s.mA = function (a) {this.c.maxAge = a}
        s.exp = function (a) {this.c.expires = new Date(Date.now() + a)}
        return s
    }


    req = function (q) {
        q.a = q.app;
        q.p = q.params;
        q.q = q.query;
        q.b = q.body;
        q.u = q.url
        q.bU = q.baseUrl;
        q.oU = q.originalUrl;
        q.h = q.hn = q.hostname
        //q.rt = q.route  //q.rt.pt = q.rt.path  // q.pt = q.rt.pt  // q.pt = q.path;
        q.pc = q.protocol  //q.s= q.secure;  q.fr= q.fresh; q.st= q.stale;
        // q.sd= q.subdomains; q.x= q.xhr  // q.ip= q.ip  // q.ips= q.ips
        if (q.session) {

            q.s = q.ss = sess( q.session )

        }
        // q.c= q.ck= q.cookies;
        // q.sC= q.signedCookies
        return q
    }

    res = function (p){


        p.s = p.send;
        p.j = p.json;
        p.jp = p.jsonp
        p.scrs=function(fns){var p=this
            async.series(fns, function (z, scrs) {
                var  str=''
                scrs.forEach(function(js){str += js})
                p.s( scrTag(str) )})}
        p.js=function(JS){var  p=this, fns=[]
            JS.forEach(function(js) {fns.push(function (cb) {
                $f.u8($tJs( js ), function (z,j){cb(null, j) })})})
            p.scrs(fns)
        }
        p.l = p.locals;
        p.r = p.render
        p.rd = function (u) {
            var p = this;
            u = S(u) ? u : 'back';
            p.redirect(u)
        }


        p.xC = p.clearCookie //
        p.fm = p.format;
        p.a = p.append;
        p.e = p.end
        p.lc = p.location;
        p.lk = p.links
        p.f = p.sF = p.sendFile;
        p.at = p.attachment;
        p.dl = p.download
        p.st = p.status;
        p.sS = p.sSt = p.sendStatus
        p.t = p.ty = p.type;
        p.v = p.vary // ?
        p.s4= p.s400 = function(){ return this.STS(400) }

        p.h = p.g = p.hd = function (k,v) {
            var p = this
            //get/set header
            if (U(v)){
                return p.get(k)}
            p.set(k, v)
            return p
        }

        p.cT=function(cT){var p=this

            p.h('Content-Type',cT)
            return p
        }

        p.wH = function (a) {
            this.writeHead(a);
            return this
        };


        p.w = function (a) {
            this.write(a);
            return this
        }

        p.wB = function (a) {
            return this.write(a, 'binary')
        }

        p.e = p.end
        p.tx = function () {
            return this.wH(500, {"Content-Type": "text/plain"})
        }

        p.z = function (z) {
            return this.tx().w(z + "\n").e()
        }
        p.$p=function(){

            var g=G(arguments)

            this.s(
                _p.apply(null,g)
            )
        }
        p.wHwBE = function (a, b) {
            return this.wH(a).wB(b).e()
        }
        p.s403 = p.s4 = function () {
            return this.sTs(403)
        }
        p.ok = function () {
            return this.s('OK')

            n()
        }
        p.c = p.ck = p.cookie;
        // p.a = p.app;   // p.hdS = p.headersSent
        return p

    }

   

    $a.g('/render/:page', function (q, p) {p.render(q.params.page)})
var Midware = function (req, res, next) {
	
	
	
	//   p.l  = p.locals
	//  p.r  = p.render
	// p.s  = p.send
	//  p.j= p.json
	//   p.d  = p.redirect
	// q.b  = q.body
	//q.f  = q.files
	//   q.n  = q.flash
	//   q.s  = q.session
	//q.q= q.query
	// q.p= function(a){return q.params[a]}
	//q.pm= q.params
	//q.p= q.params
	//checks session to see if user is logged in
	res.locals.loggedIn = req.loggedIn = (req.session.username) ? true : false   //=  res.locals.li=  req.li
	req.username = req.session.username
	// $l('MAIN middleware says req.username = ' + req.username)
	next()
}

 
