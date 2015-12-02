testTabs = function () {
	$.boot(
			$.navTabs(
					$.tab('Home', 'home').K('active'),
					$.tab('Profile', 'profile'),
					$.tab('Messages', 'messages'),
					$.tab('Settings', 'settings')
			).C('r'),
			$.tabContent(
					$.tabPane('home', '+').A(
							$.h1('home'),
							$.ipsum(6)
					),
					$.tabPane('profile').A(
							$.h1('profile'),
							$.ipsum(6)
					),
					$.tabPane('messages').A(
							$.h1('messages'),
							$.ipsum(6)
					),
					$.tabPane('settings').A(
							$.h1('settings'),
							$.ipsum(6)
					)
			).C('b')
	)
}
testTabs1 = function () { // 'active-s' are mismatched on purpose :)
	$.boot(
			$.navTabs(
					$.tab('Home1', 'home1'),
					$.tab('Home', 'home').K('active'),
					$.tab('Profile', 'profile'),
					$.tab('Messages', 'messages')),
			$.tabContent(
					$.tabPane("home1", '+').C('b').A('home1'),
					$.tabPane('home').C('r').A('home'),
					$.tabPane("profile").C('y').A('profile'),
					$.tabPane("messages").C("g").A('messages'))
	)
	$('.nav-tabs a').click(function (e) {
		//    e.preventDefault();  $(this).tab('show')
	})
}
testTabs2 = function () {
	z()
	var ul = $.ul().K('nav nav-tabs').A(
			$.liA('aaaa'),
			$.liA('bbbb').K('active'),
			$.liA('cccc'),
			$.liA('dddd')
	).C('b')
	var display = $.div('y', 300, 400).mar(20)
	var div = $.div('r').pad(30).A(ul, display).A().drag()
}
testTabs3 = function () {
	z()
	$.navTabs().A(
			$.tab('Home'),
			$.tab('Profile').K('active'),
			$.tab('Messages')).A()
	$(function () {
		$('a').click(function () {
			$(this).tab('show')
		})
	})
}
testTabAjax = function () {
	$.boot(
			$.navTabs(
					$.tab('hello', function () {
						alert('hello')
					}),
					$.tab('goodbye', function () {
						$('#stuff').load('/')
					})
			),
			$.div().id('stuff')
	)
}
testTabs4 = function () {
	z()
	var tabBar = $.ul().K("nav nav-tabs")
	tabBar.A(
			$.tab('first', function () {
				alert('1')
			}),
			$.tab('second', function () {
				alert('2')
			}),
			$.tab('third', function () {
				alert('3')
			})
	).A()
}//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
testTabs5 = function () {
	z()
	var tabBar = $.tabs(
			['first', function () {
				$l('1')
				panel.E($.img('me'))
			}],
			['second', function () {
				$l('2')
			}],
			['third', function () {
				$l('3')
			}]
	).A()
}
testTabsAction = function () {
	testTabs()
	$(function () {
		$('a[data-toggle="tab"]')
				.on('show.bs.tab', function (e) {
					ee = e
					$l('tabbed!')
					e.target // newly activated tab
					e.relatedTarget // previous active tab
				})
	})
}
testTabsAction2 = function () {
	// for each tab, use 'on(show)', to automatically fetch/load?
}
