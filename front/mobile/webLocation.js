function location() {
	$loc = function () {
		$w.location = $w.location// = rl
	}
	$rl = function () {
		location.reload(true) // = r
	}
	loc = $w.location
	loc.h = loc.href
	loc.hn = loc.hostname
	loc.ha = loc.hashn
	loc.H = loc.host
	loc.p = loc.port
	loc.pn = loc.pathname
	loc.P = loc.protocol
	loc.s = loc.search
	loc.rl = loc.reload
	loc.H = loc.host
	loc.rp = loc.replace
	loc.a = loc.assign
}