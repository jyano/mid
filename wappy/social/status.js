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
//api calls
withStatusX = wUSt = function (user, func) {//with first status?
	qG('/sts1',
			{u: user},
			function (status) {
				func(status.c)
			})
}
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
//avail=bbM({url:'/sts'})
//avails=bbC({model:avail, url:'/sts'})
