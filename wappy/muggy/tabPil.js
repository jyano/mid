$.showTab = function (id) {
	$('#' + id).tab('show')
} //necessary?
$.tab = function (text, lookFor) {
	var args = G(arguments)
	if (F(lookFor)) {
		$l('function')
		var tabText = args[0],
				func = args[1],
				load = function (e) {
					$('#' + tabText).tab('show');
					func()
				}
		theLi = $.li().A($.a(tabText, load))
		theLi.load = load
		if (args.m) {
			theLi.K('active')
		}
		return theLi
	}
	$l('not function')
	var a = $.a(text, '#' + lookFor).attr({'data-toggle': 'tab'})
	return $.li().A(a)
}
$.navTabs = function () {
	var tabs = $.ul().K("nav nav-tabs")
	_.each(arguments, function (arg) {
		tabs.A(arg)
	})
	return tabs
}
$.tabPane = function (id) {
	var args = G(arguments),
			pane = $.div().K("tab-pane fade").id(args[0])
	if (args.p) {
		pane.K('active in')
	}
	return pane
}
$.tabContent = function () {
	var div = $.div().K("tab-content")
	_.each(arguments,
			function (arg) {
				div.A(arg)
			})
	return div
}
$.tabs = function () {

//can pass in a $.tab() -> 'tab'
	//OR can pass in an array, and then $.tab will be called for it, and pass in the pams
	tabsWrapper = $.div('X').WH('auto').A(
			tabBar = $.ul().K("nav nav-tabs"),
			panel = TABS = $.span()
	)
	_.each(arguments,
			function (tab) {
				if (A(tab)) {
					tab = $.tab(tab[0], tab[1])
				}
				tabBar.A(tab)
			})
	tabsWrapper.load = function () {
		tabBar.children().first().first().click()
		return tabsWrapper
	}
	return tabsWrapper
}
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
