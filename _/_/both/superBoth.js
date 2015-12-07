superString()
superDate()
function superString() {
	S.cR = function (a, b) {
		return s$(a).chompRight(b).s
	}
	S.eR = function (a, b) {
		return s$(a).ensureRight(b).s
	}
	S.cL = function (a, b) {
		return s$(a).chompLeft(b).s
	}
	S.eL = function (a, b) {
		b = b || '/';
		return s$(a).ensureLeft(b).s
	}
	S.r = function (a, b) {
		var g = G(arguments)
		return g.n ? s$(a).chompRight(b).s :
				s$(a).ensureRight(b).s
	}
	_.left = function (a, b) {
		alert('_.left')
		var g = G(arguments)
		return S(b) ? (!g.m ? s$(a).ensureLeft(b).s
				: s$(a).chompLeft(b).s) : 0
	}
	_.slash = function (str) {
		alert('_.slash')
		var hasSlash = str[0] == '/'
		return hasSlash ? str : '/' + str
	} //= _.ensureSlash
	_.ext = S.ext = function (a, b) {
		if (S(a)) {
			return s$(a).contains('.') ? a :
					s$(a).ensureRight(b || '.png').s
		}
	}
	_.crs = function (a) {
		return a.split('/').pop().split('.png')[0]
	}//it's the opposite of 'src' ! //it strips '/me.png' -> 'me'
	_.url = function (a) {
		alert('S.url')
		return 'url("' + a + '")'
	}
	_.iDU = function (a) {
		return s$(a).contains('data:')
	}
	_.src = function (a) {
		a = a || ''
		a = _.ext(a);
		return s$(a).startsWith('/') ? a : '/' + a
	}
	_.fCC = function (a) {
		return String.fromCharCode(a)
	}
	_.tS = function (a) {
		return a.toString()
	}
	_.eW = function (str, fn) {
		
		//use 1:ends With
		if (S(fn)) {
			return s$(str).endsWith(fn)
		}
		//use 2:each(in a string) With
		var arr = _.compact(_.map(str.trim().split(' '),
				function (str) {
					return str.trim()
				}))
		if (fn) {
			_.e(arr, function (str) {
				fn(str)
			})
		}
		return arr
	}
	_.j = function (a, b) {
		return (a || []).join(b || ' ')
	}
	_.tU = _.tUc = _.tUC = function (a) {
		return S(a) ? a.toUpperCase() :
				A(a) ? _.m(a, function (a) {
					return S.tU(a)
				}) : a
	}
	_.iU = function (a) {
		if (S(a)) {
			return s$(a).isUpper()
		}
	}
	_.tLc = _.tL = _.tLC = function (a) {
		return a.toLowerCase()
	}
}
function superDate() {
	$Dt = Date;
	$Dt.n = $Dt.now  //->  cur time - ms since  1970 UTC (N)
	$Dt.H = 3600000
	$Dt.U = $Dt.UTC// ?
	// same pams as longest form  of constructor (2 to 7) -> ms since 1970 UTC (N)
	$Dt.p = $Dt.parse// date as str ->  ms since  1970  UTC (N)
	$D = function () {
		var d = new $Dt() // new $Dt(a,b,c,d,e)
		d.s = d.getSeconds
		d.t = function (m) {  //time  num MSs af/bf 1/1/70
			d.sT = d.setTime
			d.gT = d.getTime
			if (U(m)) {
				return this.gT()
			}
			this.sT(m)
			return this
		}
		d.s = function (s) { //secs 0-59
			// $l('d.s')
			var d = this
			d.sS = d.setSeconds
			d.gS = d.getSeconds
			if (U(s)) {
				return d.gS()
			}
			d.sS(s)
			return d
		}
		d.h = function (m) {  //hour 0-23
			d.gH = d.getHours
			d.sH = d.setHours
			if (U(m)) {
				return this.gH()
			}
			this.sH(m)
			return this
		}
		d.d = d.getDay  // day of   week (from 0-6)
		d.D = function (d) {
			var d = this   //date  day of   month (from 1-31)
			d.gD = d.getDate //
			d.sD = d.setDate
			if (U(d)) {
				return this.gD()
			}
			this.sD(d)
			return this
		}
		d.M = function (m) {  //month 0-11
			d.sM = d.setMonth
			d.gM = d.getMonth
			if (U(m)) {
				return this.getMonth()
			}
			this.setMonth(m)
			return this
		}
		d.m = function (m) {//mins 0-59
			d.gMn = d.getMinutes
			d.sMn = d.setMinutes
			if (U(m)) {
				return this.gMn()
			}
			this.sMn(m)
			return this
		}
		d.ms = function (m) { //ms 0-999
			d.gMs = d.getMilliseconds
			d.sMs = d.setMilliseconds
			if (U(m)) {
				return this.gMs()
			}
			this.sMs(m)
			return this
		}
		d.y = function (y) { //fullYear (year Deprecated -> fullYear )
			d.sY = d.setFullYear   //Sets the year (four digits) of dtOb
			d.gY = d.getFullYear//    year (four digits)
			if (U(y)) {
				return this.gY()
			}
			this.sY(y)
			return this
		}
		//superParse(d)
		//superUTC(d)
		return d
	}
	$D.n = function (a) {
		return $Dt.n(a)
	}
	$D.p = function (a) {
		return $Dt.p(a)
	}
	$D.U = function (a) {
		return $Dt.U(a)
	}
	_.gT = function () {
		return $Dt().getTime()
		//return $D().getTime()
	}
	$now = function () {
		return {t: $D, df: $D.n()}
	}
	$n = function (plus) {//= $nowPlusWhat_InDateForm
		var dateNow
		if (U(plus)) {
			return $D.n()
		}
		//plus=plus||0
		dateNow = $D($D.n() + plus)
		return dateNow
	}
	_.fT = function (times, func) {
		var timeout
		if (N(times)) {
			return _.times(times, function (i) {
				func(i + 1)
			})
		}
		if (F(times)) {
			timeout = N(func) ? func : 100
			func = times
		}
		return setTimeout(func, timeout)
	}
	_.mo = function (n, fn) {
		return N(n) ?
				_.throttle(fn, n * 1000) : _.throttle(n, 1000)
	}
	_.sI = function (a, b) {
		return setInterval(a, b)
	}
	_.ev = function (n, fn) {
		setInterval(fn, n * 1000)
	}
	_.in1 = function (time) {
		time = ( N(time) ? time : 1) * 1000
		cjs.wait = true
		return setTimeout(function () {
			cjs.wait = false
		}, time)
	}//in1
	_.in = function (time, fn) {
		var g = G(arguments),
				o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
		o.s = N(o.s) ? o.s : 1
		o.fn = o.fn || function () {
		}
		return setTimeout(
				function () {
					if (g.m) {
						$.C($r())
					}
					o.fn()
				},
				o.s * 1000)
	}
	_.cI = _.xI = function (a, b) {
		clearInterval(a)
	}
	_.timeout = function (times, func) {
		alert('T')
		var timeout
		if (N(times)) {
			return _.t(
					times, function (i) {
						func(i + 1)
					}
			)
		}
		if (F(times)) {
			timeout = N(func) ? func : 100;
			func = times
		}
		return setTimeout(func, timeout)
	}
	_.inx = function () {
	}
	_.evx = function (a) {
		return a
	}
	_.cT = function (a) {
		return clearTimeout(a)
	}
	_.sT = setTimeout
}
