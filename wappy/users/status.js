showStatus = stat = function (user, theDiv) {
	withStatus(user,
			function (status) {
				theDiv($.h3('STATUS: ' + status))
			})
}
STATUS = function () {
	$.format()
	s1.A(
			$.h1('status'),
			$.input().id('statusInput'),
			$.button('update', function () {
				status = $('#statusInput').val()
				$.post('/status', {text: status}, function () {
					$l('status updated')
				})
			})
	)
}