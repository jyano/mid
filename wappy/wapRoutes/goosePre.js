miniQ = function (q) {
	q.ss = q.session;
	return q
}
miniP = function (p) {
	p.lc = p.locals
	return p
}
miniQP = function (q, p) {
	miniQ(q)
	miniP(p)
}
pjdX = _json
json_ = jD = pjd = function (p, str) {
	return function (z, da) {
		S(str) ? p.json(da [str]) :
				p.json(da)
	}
}
$fi = $find = find = function (m, o, f) {
	$m[m].find(o, F(f) ? f : json_(f))
}
$cr = $create = create = function (m, q, p) {
	$m[m].create({
				un: q.un, content: q.body.content
			}, _json(p)
	)
}
$crP = $createP = createP = function (a) {
	$a.PO('/' + a, function (q, p) {
		create(a, q, p)
	})
}
$cre = cre = function (m, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	$m [m].create(o, f)
}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
$recent = rec = function (model, criteria, func) { // **** making errors ******
	func = F(func) ? func : function (err, data) {
		func.j(data)
	}
	$m[model].find(criteria)
			.sort({dt: -1})
			.execFind(func)
}
$recent1 = rec1 = function (a, b, f) {
	$m[a].findOne(b).sort({dt: -1}).execFind(f)
}
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
$rmId = $rmById = rmById = function (m, i, f) {
	if (O(i)) {
		i = i._id
	}
	if (!F(f)) {
		f = pjd(f)
	}
	$m[m].findByIdAndRemove(
			i,
			f
	)
}
$rm = $remove = remove = function (m, o, f) {
	$m[m].remove(o, f)
}
$all = all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	$m[m].find(f)
}
//$N=Number
//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}
jD = pjd = function (res, str) {
	return function (err, data) {
		S(str) ? res.json(data[str]) : res.json(data)
	}
}
pjdX = function (res) {
	return function (err, data) {
		res.json(data)
	}
}
find = function (m, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	models[m].find(o, f)
}
create = function (model, req, res) {
	models[model].create(
			{
				username: req.username,
				content: req.body.content
			},
			function (err, data) {
				res.json(data)
			}
	)
}
createP = function (a) {
	$a.post('/' + a, $w.u, function (q, p) {
		create(a, q, p)
	})
}
cre = function (model, o, f) {
	if (!F(f)) {
		f = pjd(f)
	}
	models[model].create(o, f)
}
//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped
rec = function (model, criteria, func) { // **** making errors ******
	func = F(func) ? func : function (err, data) {
		func.j(data)
	}
	models[model].find(criteria)
			.sort({dt: -1})
			.execFind(func)
}
rec1 = function (a, b, f) {
	models[a].findOne(b).sort({dt: -1}).execFind(f)
}
f1 = function (m, o, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	models[m].findOne(o, f)
}
fById = function (m, o, f) {
	$m[m].findById(o, F(f) ? f : pjd(f))
}
ALL = function (route, model) {
	$a.get(route, function (req, res) {
		models[model].find(function (err, data) {
			return res.json(data)
		})
	})
}
rmById = function (m, i, f) {
	if (O(i)) {
		i = i._id
	}
	if (!F(f)) {
		f = pjd(f)
	}
	models[m].findByIdAndRemove(
			i,
			f
	)
}
remove = function (m, o, f) {
	models[m].remove(o, f)
}
all = function (m, f) {
	if (!F(f)) {
		f = function (err, data) {
			f.json(data)
		}
	}
	models[m].find(f)
}
//$N=Number
//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}

