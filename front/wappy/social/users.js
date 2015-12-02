USERS = function () {
	b = $.boot()
	i = 0
	b.h1('users')
	b.A(
			$.d('y').id('content').A('users will go here via ajax in a moment...').A($.br(2)
			))
			
	$(function () {
		$.g('/users', function (urs) {
			$('#content').E()
			_.e(urs, function (ur) {
				$l(i++)
				$l(user.un)
				$('#content').A(
						$.div().K("col-xs-6 col-sm-3 col-md-2 col-lg-2").A(
								$.a('', function () {
									window.location = '/wap/user/' + user.un
								}).K('thumbnail').A(
										$.img(user.mug || dfMug),
										$.h4(user.un),
										$.h5('sts: ' + user.sts)
								)
						)
				)
			})
		})
	})
}
 
 
USER = function (a) {

	
	
	//problem: click on a user.. creates a NEW USER?
	un = _pam || a
	if (U(un)) {
		$l('un undefined.  default to -> a')
		un = 'a'
	}
	$.fm()
	$.g('/user/' + un, function (user) {
		u = user
		s1.A(
				$.h1(user.un),
				$.img(user.mug).WH(100),
				$.h4(user.status),
				statusSpan = $.span(),
				image = $.img(),
				messageTextarea = $.textarea().C('w', 'z'),
				$chatButton(_pam, messageTextarea)
		)
	})
	tab1 = $.tab('profile', function () {
		TABS.E();
		$.profile(_pam, TABS)
	})
	tab2 = $.tab('pics',
			function () {
				TABS.E()
				TABS.A('hahaha')
				$.g('/images/' + _pam, function (imgs) {
					_.e(imgs, function (i ) {
						TABS.A(
								$.i(i .d).WH(100)
						)
					})
				})
			})
	tab3 = $.tab('blog', function () {
		TABS.E()
		$.G('/pstu', {u: u}, function (i) {
			blp(i, TABS, '+')
		}, '+')
	})
	tab4 = $.tab('buds', function () {
		TABS.E()
	})
	tab5 = $.tab('groups', function () {
		TABS.E()
	})
	tab6 = $.tab('email', function () {
		
		//TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )
		from = _pam
		var messageTextarea = $.textarea()
		_$un = window['from'] || 'b'
		TABS.E()(
				$.h1('convo with ' + u),
				$.h1('Messages'),
				$.br()
		)
		
		$.GE('/gMsgW', {u: _$un},
				function (message) {
					var c = $.canvas('X', 100)
					$.post('/mug', {u: m.fr}, function (mug) {
						c.fit(mug)
					})
					TABS.A(
							$.row($.col(2, c),
									$.col(10,
											$.h6('from: ' + message.fr),
											$.h4(
													dt(message.dt).dt()
											).K('pull-right'),
											$.h5(m.m))),
							$.hr()
					)
				})
		TABS.A(
				messageTextarea,
				$.bt('new message', function () {
					$.post('/sMsg',
							{
								m: messageTextarea.V(),
								to: from
							})
				}),
				$.br(2)
		)
	})
	s2.A(
			theTabs = $.tabs(tab1, tab2, tab3, tab4, tab5, tab6))
	theTabs.load()
	
}


 