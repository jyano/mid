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
showTabX = shwX = function (a) {
	qi(a).q.tab('show')
	//return a
}
TabX = tabX = function (tabText, func) {
	var args = G(arguments),
			tabText = args[0],
			func = args[1],
			theLi = $liA(
					tabText,
					function () {
						showTab(tabText);
						func()
					})
	theLi.load = function () {
		showTab(tabText);
		func()
	}
	if (args.m) {
		theLi.k('active')
	}
	return theLi
}
tabsX = function (a) {
	var g = G(arguments),
			a = g[0], d, u
	theDiv = $.div('X').WH('auto').A(
			theUlNav = $.ul().K('nav nav-tabs'),
			TABS = $.span()
	)
	//ok so a can already be a tag.. OR, if you pass in an array, it will make it a tag for :)
	if (A(a)) {
		a = $.tab.apply($.tab, a)
	}
	theUlNav(a)
	_.each(g.r, function (a) {
		if (A(a)) {
			a = _a(tab, a)
		}
		;
		theUlNav(a)
	})
	theDiv.load = function () {
		a.children[0].click();
		return theDiv
	}
	return theDiv
}