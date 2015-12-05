Y = {}
Y.directTo = Y.load = load = function (a) {
	window.location = '/wap/' + a
}
Y.run = function (app) {
	app = app.toUpperCase()
	app = Y[app] || window[app]
	if (app) {
		app();
		return true
	}
	return false
}
Y.render = function (page) {
	page = Y[page]
	if (page) {
		page();
		return true
	}
	return false
}
$(appInit)
Y.clear = function () {
	z();
	WappyNav()
}//= clearApps = fresh
require('./defaultMug')
require('./dirs')
$a.u($mw = require('./mw'))
$a.g('/render/:page', function (q, p, nx) {
	p.render(
			q.params.page)
})
$a.get('/play/:app/:pam?', function (req, res) {
	res.render('play', {app: req.params.app, pam: req.params.pam})
})
$a.get('/game/:app/:pam?', function (req, res) {
	res.render('game', {app: req.params.app, pam: req.params.pam})
})
$a.get('/pinball', function (req, res) {
	res.render('pinball')
})
$a.get('/ui/:app/:pam?', function (req, res) {
	res.render('ui', {app: req.params.app, pam: req.params.pam})
})
function wap() {
	$a.get('/wap', function (req, res) {
		res.render('wap')
	})
	$a.get('/wap', function (req, res) {
		res.render('wap')
	})
	$a.get('/wap/:app/:pam?', function (req, res) {
		res.render('wap', {app: req.params.app, pam: req.params.pam})
	})
	$a.get('/wap/:app/:pam?', function (req, res) {
		res.render('wap', {app: req.params.app, pam: req.params.pam})
	})
}
function mounts() {
	$a.g('/', function (q, p) {
		p.send('this is a test')
	})
	$a.get('/', function (req, res) {
		res.send('this is a test')
	})
	$a.g('/web/:a/:p?', function (q, p) {
		p.render('web', {
			app: q.params.a,
			pam: q.params.p
		})
	})
	$a.g('/play/:a/:p?', function (q, p) {
		p.render('play', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/wap/:a/:p?', function (q, p) {
		p.render('wap', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
		p.render('mvc', {app: q.params.a, pam: q.params.p})
	})
	$a.g('/web/:a/:p?', function (q, p) {
		p.render('web', {
			app: q.params.a,
			pam: q.params.p
		})
	})
	$a.g('/play/:a/:p?', function (q, p) {
		p.render('play', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/wap/:a/:p?', function (q, p) {
		p.render('wap', {
			app: q.params.a, pam: q.params.p
		})
	})
	$a.g('/mvc/:a/:p?/:p2?/:p3?', function (q, p) {
		p.render('mvc', {app: q.params.a, pam: q.params.p})
	})
}
function staticRoutes(){
function superWeb() {
	$a.use($e.static('./../core/both'))
	$a.use($e.static('./../core/both/deps'))
	$a.use($e.static('./../core/canvas'))
	$a.use($e.static('./../core/jquery'))
	$a.use($e.static('./../core/jquery/deps'))
}
function create() {
	$a.use($e.static('./../core/create'))
	$a.use($e.static('./../core/create/deps'))
	$a.use($e.static('./../core/anim'))
}
function front() {
	$a.use($e.static('./../mvc/knockout'))
	$a.use($e.static('./../mvc/knockout/deps'))
	$a.use($e.static('./../mvc/bootstrap'))
	$a.use($e.static('./../mvc/bootstrap/deps'))
	$a.use($e.static('./../mvc/jqueryUI'))
	$a.use($e.static('./../mvc/jqueryUI/deps'))
	$a.use($e.static('./../mvc/backbone'))
	$a.use($e.static('./../mvc/backbone/deps'))
	$a.use($e.static('./../mvc/dirtpage'))
	$a.use($e.static('./../mvc/knockout'))
	$a.use($e.static('./../mvc/bootstrap'))
	$a.use($e.static('./../mvc/jqueryUI'))
}
function box() {
	$a.use($e.static('./../boxCore/geo'))
	$a.use($e.static('./../boxCore/polygon'))
	$a.use($e.static('./../boxCore/polygon/deps'))
	$a.use($e.static('./../joints'))
	$a.use($e.static('./../joints/advanced'))
	$a.use($e.static('./../joints/distance'))
	$a.use($e.static('./../joints/mouse'))
	$a.use($e.static('./../joints/prismatic'))
	$a.use($e.static('./../joints/revolute'))
	$a.use($e.static('./../joints/weld'))
	$a.use($e.static('./../controllers'))
	$a.use($e.static('./../collisions'))
}
}
function stat() {
	_.e(fileDirs, function (dir) {
		$a.u(
				$e.static(
						$p.j(__dirname, dir)))
	})
	module.exports = function routing(dirN) {
		_.e(dirs, function (dir) {
			$a.use($e.static(dirN + '/' + dir))
		})
	}
}
