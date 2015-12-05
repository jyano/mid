Y.GuestPage = function () {
	z('r')
	ct = $.dC()
			.dg().C('g').al(.9).top(100).left(100)
	jb = $.J('a graphics-based real-time social gaming creativity web app', $.br())
	jb.A(
			$.btL('log in', function () {
				f = $.f().C('green').pad(4)
				f.A(
						$.fG().A($.lb('username: ', 'username'),
								$.ip('username')),
						$.fG().A($.lb('password: ', 'password'),
								$.pw('password')),
						$.sm('log in'))
				f.submit(function (e) {
					e.preventDefault()
					fData = f.serializeJSON()
					$.post('/login', fData, function (un) {
						u = un
						$l('check u!')
						if (un === 'guest') {
							$('.modal').modal('toggle');
							$.pop('try again.. idiot')
						}
						else {
							Y('HomePage');
							$.pop('welcome ' + un + '!')
						}
					})
				})
				$.pop(f).dg()
			}).C('z', 'w'), $.sp(' - '),
			$.btL('sign up', function () {
				usernameInput = $.dK('form-group').fS(20).name('username').A($.lb('username: ', 'username'), $.ip().K('form-control').id('uname'))
				passwordInput = $.dK('form-group').A($.lb('password: ', 'password'), $.pw().id('password')).fS(20).n('password')
				submit = $.bt('sign up').ty('submit').fS(16)
				f = $.f().C('o').pad(4).A(usernameInput, passwordInput, submit).submit(function (e) {
					e.preventDefault()
					$.P('user', {
								username: username = usernameInput.find('input').val(),
								password: password = passwordInput.find('input').val()
							},
							function (username) {
								if (username === 'guest') {
									$('.modal').modal('toggle');
									$.pop('try again.. idiot')
								}
								else {
									Y('HomePage');
									$.pop('welcome ' + username + '!')
								}
							})
				})
				$.pop(f).dg()
			}).C('w', 'z'), $.sp(' - '),
			$.btL('guest', function () {
			}).C('a', 'y')
	)
	ct.A(
			$.dH().h1('jy presents..'),
			jb
	)
	function verify() {
		return {
			username: username.find('input').val(),
			password: password.find('input').val()
		}
	}
}
Y.HomePage = function () {
	z()
	Y.nav()
	Y.run(wappyApp)
	//update username on screen
	$.Gj('loggedIn', function (uN) {
		$('#uname').text(_username = $l(uN))
	})
}
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
_SignUpForm = function () {
	var usernameInput = $.div().K('form-group').fontSize(20).name('username').A(
					$.label('username: ', 'username'),
					$.input().K('form-control').id('uname')
			),
			passwordInput = $.div().K('form-group').A(
					$.label('password: ', 'password'),
					$.password().id('password')
			).fontSize(20).name('password'),
			submit = $.button('sign up').type('submit').fontSize(16),
			verify = function () {
				return {
					username: username.find('input').val(),
					password: password.find('input').val()
				}
			},
			form = $.form().C('o').pad(4).A(
					usernameInput, passwordInput,
					submit)
	form.submit(function (e) {
		e.preventDefault()
		username = usernameInput.find('input').val()
		password = passwordInput.find('input').val()
		$.post('/user', {
			username: username,
			password: password
		}, function (username) {
			if (username === 'guest') {
				$('.modal').modal('toggle');
				$.pop('try again.. idiot')
			}
			else {
				Y.render('HomePage');
				$.pop('welcome ' + username + '!')
			}
		})
	})
	return form
}
_LoginForm = function () {
	var form = $.form().C('green').pad(4).A(
			$.formGroupDiv().A(
					$.label('username: ', 'username'),
					$.textInput('username')),
			$.formGroupDiv().A(
					$.label('password: ', 'password'),
					$.passwordInput('password')),
			$.submitInput('log in')
	)
	form.submit(function (e) {
		e.preventDefault()
		var formData = form.serializeJSON() // $l(formData)
		$.post('/login', formData, verifyLogin)
	})
	function verifyLogin(username) {
		if (username === 'guest') {
			$('.modal').modal('toggle')
			$.pop('try again.. idiot')
		}
		else {
			Y.render('HomePage');
			$.pop('welcome ' + username + '!')
		}
	}
	
	return form
}
LoginForm = function () {
	$.pop(_LoginForm()).drag()
}
SignUpForm = function () {
	$.pop(_SignUpForm()).drag()
}
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