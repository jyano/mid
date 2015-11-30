$.pill = function (name, func) {
	var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#' + name})
	return $.li().A(a)
}
$.navPills = function () {
	return $.ul().K('nav nav-pills')
}
$.pillPane = function (id) {
	var d = $.div().K('pill-pane fade').id(id).attr('role', 'pillpanel')
	return d
}
$.pillContent = function () {
	var div = $.div().K("pill-content")
	_.each(arguments,
			function (arg) {
				div.A(arg)
			})
	return div
}
testPills = function () {
	$(function () {
		$.boot().A(
				$.well($.h1('welcome to pills')),
				n = $.navPills().A(
						$.pill('home'),
						$.pill('profile'),
						$.pill('messages', function () {
							$('body').C('r')
						})
				),
				$.div().K("pill-content").A(
						$.pillPane('home').A('hoooome'),
						$.pillPane('profile').A('prooofile'),
						$.pillPane('messages').A('messsaaaages')
				)
		)
		//   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })
	})
}
PILLS = function () {
	z()
	pills = $.ul().K("nav nav-pills").A(
			$.li().K('active').A($.a('home').toggle('tab')),
			$.li().A($.a('profile').K('profile')),
			$.li().A($.a('messages')))
	div = $.div('b').WH('auto').pad(40).drag()
	content = $.div('y', 300).pad(40).mar(40)
	div.A(pills, content)
	$('a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	})
	// $('a:first').tab('show')
	$('a.profile').on('shown.bs.tab', function (e) {
		content.empty()
		content.A(
				$.div().text('asfdasfdfasd')
		)
	})
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// alert('yay')
		ee = e.target
		e.target // activated tab
		e.relatedTarget // previous tab
	})
}
