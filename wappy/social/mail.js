$mailButton = btMail = function (message, user) {
	return $.button('mail',
			function () {
				$.post('/sMsg', {m: message.V(), to: user.u}
				)
			})
}
