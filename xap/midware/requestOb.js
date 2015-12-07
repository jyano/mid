_pm = function (q, pm) {
	return q.params[pm]
}
 
	_byUn = function (q) {
		return _un(_pm(q, 'un'))
	}
	_fByUn = function (m) {
		return function (q, p) {
			$m[m].fi(_byUn(q), _json(p))
		}
	}
 
qp = qpn$ = function (fn, q, p, nx) {
	q = q$(q)
	q.ss = ss$(q.session)
	p = p$(p)
	nx = nx$(nx)
	return function () {
		fn(q, p, nx)
	}
}