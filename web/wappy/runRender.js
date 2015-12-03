Y.render = function (page) {
	if (Y[page]) {
		$l('found page: ' + page)
		return Y[page]() || true
	}
}
Y.run = function (app) {
	app = app.toUpperCase()
	if (app = Y[app] || window[app]) {
		app();
		return true
	}
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