Y.GuestPage = function () {
	z('r')
	var container = $.containerDiv().A(
			$.headerDiv().A(
					$.ul().K("nav nav-pills pull-right").A(
							$.liA('home').K('active'),
							$.liA('About'),
							$.liA('Contact')),
					$.h1('jason yanofski presents..')),
			$.jumbo(
					'a graphics-based real-time social gaming creativity web app', 'woo hoo!').A(
					$.buttonL('log in', LoginForm).C('y', 'b'),
					$.span(' '),
					$.buttonL('sign up', SignUpForm).C('b', 'y')),
			$.row(
					$.h1('fun!'),
					$.div().A(
							$.h4('graphics'),
							$.p('cool cool cool'),
							$.h4('social'),
							$.p('cool cool'))))
	container.drag().C('o').opacity(.9).top(100).left(100)
}
Y.HomePage = function () {
	WappyNav($r()
	) //load navigator
	Y.run(wappyApp)
	$.getJSON('/loggedIn',
			function (username) {
				$l('----' + username)
				$('#uname').text(_username = username)
			})
}
Y.logOut = function () {
	$.getJSON('/logOut', function () {
		Y.render('GuestPage')
	})
} //logOut =
