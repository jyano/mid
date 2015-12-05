THOUGHTS = function () {
	$.get('/thoughts', function (obs) {
		_.e(obs, function (ob) {
			$.h1('ob: ' + ob.un)
		})
	})
}