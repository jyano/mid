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
