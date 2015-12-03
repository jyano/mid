Ml = Mail = $m.mail
Req = $m.req
Ur = User = $m.user
PngFile = Fil = Fl = $m.file
Cut = Cutout = $m.cutout
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
//rm
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