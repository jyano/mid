f1 = function (m, o, f) {
	if (!F(f)) {
		f = function (z, da) {f.j(da)}
	}
	// can pass in EITHER p .. or an ACTUAL function BRILLIANT
	$m[m].f1(o, f)
}



fById = function (m, o, f) {
	$m[m].findById(o, F(f) ? f : pjd(f))
}
ALL = function (route, m ) {
	$a.get(route, function (req, res) {
		$m[m ].find(function (z, data) {
			return res.json(data)
		})
	})
}

all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].find(f)
}
$fi = $find = find = function (m, o, f) {
	$m[m].find(o, F(f) ? f : json_(f))
}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
$f1 = f1 = function (m, o, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].findOne(o, f)
}
$fId = $fById = fById = function (m, o, f) {
	$m[m].findById(o, F(f) ? f : pjd(f))
}
$ALL = ALL = function (route, model) {
	$a.get(route, function (req, res) {
		$m[model].find(function (err, data) {
			return res.json(data)
		})
	})
}
$all = all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].find(f)
}
$find = function () {
	var g = G(arguments)
	$m[g.f].find.apply($m[g.f], g.r)
}
$findAll = function (m, fn) {
	$find(m, {}, fn)
}
$findAllP = function (m, p) {
	$findAll(m, _json(p))
}
find = function (m, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	$m[m].find(o, f)
}

