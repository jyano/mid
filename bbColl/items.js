 
ITEMS = function () {
	Ap = {M: {}, V: {}, C: {}}
 
 
		Router = bbR({
			R: {
				'': 'welcome',
				'itemlist': 'showItemList',
				'j': 'j'
			},
			welcome: function () {
				show('welcome')
			},
			j: function () {
			},
			showItemList: function () {
				show('show item list')
			}
		})
		router = Router()
		Ap = {
			M: {}, V: {}, C: {}
		}
		Ap.M.item = bbM({})
		i1 = Ap.M.item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			show('j')
		})
		bbH()
 
		Ap.M.Item = $M({})
		$R({
					r: {
						'': 'welcome',
						itemlist: 'showItemList',
						'j': 'j'
					},
					welcome: function () {
						$.bd().E().A($.h1('welcome'))
					},
					j: function () {
					},
					showItemList: function () {
						$l('showItemList')
						$.bd().A($.h1('show item list'))
					}
				}, '+')
		i1 = Ap.M.Item({n: 'jason', g: 'mason'})
		i1.oR('j', function () {
			$.bd().E().A($.h1('j'))
		})
		//bb.history.start({pushState: true})
		$.bt('add', function () {
			r.n('/itemlist')
		})
 
	Router = bbR({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	router = Router()
	Ap = {
		M: {}, V: {}, C: {}
	}
	Ap.M.item = bbM({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	bbH()
	$Ro = Router = $$R({
		R: {
			'': 'welcome',
			'itemlist': 'showItemList',
			'j': 'j'
		},
		welcome: function () {
			show('welcome')
		},
		j: function () {
		},
		showItemList: function () {
			show('show item list')
		}
	})
	r = router = $R()
	Ap.M.item = $$M({})
	i1 = Ap.M.item({n: 'jason', g: 'mason'})
	i1.oR('j', function () {
		show('j')
	})
	Bb.h.start({pushState: true})
}