MW.parameterParse = MW.parameterPrepare=MW.pamPr = function (q, p, n) {
	l('lU');
	l(modl, 'modl');
	p.l.p = q.p;
	p.l.pam = q.p['pam'];


	m[modl].f1({name: q.pam}, function (Z, doc) {
		z(Z);

		if (!doc) {//l('!doc');
			q.l[ modl ] = q[modl] = null; //local
			n()
		}
		else {
		
			q.l[modl] = q[modl] = doc;
		}
		
		n();
	});
	n();
}


MW.setPage = function (q, p, n) {
	li('setPage');
	page = q.path;
	if (q.s.cP == page) {
	} else if (q.s.cP === undefined) {
		cP = q.s.cP = 'root';
	}
	
	else {
		lP = q.s.lP = q.s.cP;
		cP = q.s.cP = page;  //p.l.cP = S.cP  ; p.l.lP = S.lP ;
		l('change recognized..');
		l(cP, 'cP');
		l(lP, 'lP');
		l(q.s.cP, 'q.s.cP');
		l(q.s.lP, 'q.s.lP');
	}
	n();
}
  