$HomePage = Y.HomePage = function () {
	z()
	Y.nav()
	Y.run(wappyApp)
	//update username on screen
	$.Gj('loggedIn', function (uN) {
		$('#uname').text(_username = $l(uN))
	})
}