ROLL = function () {
	dirData = [
		{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
		{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
		{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
		{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
		{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
		{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
		{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
		{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
		{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
		{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
	]
	CssOb = {
		'.details': {
			display: 'none'
		},
		'.active': {
			C: 'r'
		},
		body: {
			C: 'z', c: 'w'
		},
		'a.filter': {
			C: 'b',
			c: 'y',
			P: '5px 10px',
			M: '5px',
			'border-radius': '3px',
			'text-decoration': 'none'
		},
		'a.filter:hover': {
			C: 'y',
			c: 'b',
			P: '5px 10px',
			M: '5px',
			'border-radius': '3px',
			'text-decoration': 'none'
		},
		'div#wrapper': {
			display: 'flex',
			'flex-direction': 'column',
			'align-items': 'center'
		},
		'div.tools': {
			display: 'flex',
			'flex-direction': 'column',
			'align-items': 'center'
		},
		'input#searchBox': {c: 'z'}
	}
	tp = {
		ix: function (vw) {
			var recs = this.recs//, o=vw.model.attributes
			return $.sp().A(
					$.h2('There are ' + vw.count() + ' recs'),
					$.dK('recs')
			)
		}
	}
	Roll = {}
	Roll.Rec = Bb.M.x({})
	Roll.Recs = Bb.C.x({
		localStorage: new Store('recs')
	})
	Roll.Ix = Bb.V.x({
		tp: 'ix',
		initialize: function () {
			$l('ix')
			this.recs = new Roll.Recs()
			this.recs.on('all', this.render, this)
			this.recs.fetch()
			this.recs.on('all', this.r, this)
		},
		r: function () {
			this.$el.html(tp[this.tp](this))
			var form = new Roll.Ix.Form()
			this.$('.recs').A(form.r().el)
			return this
		},
		count: function () {
			return _.z(this.recs)
		}
	})
	Roll.Ix.Form = Bb.V.x({
		tagName: 'form',
		initialize: function () {
			$l('Ix.Form')
			this.r()
		},
		r: function () {
			this.$el.A($.h1('afssafsafsfsdfsd'))
			return this
		}
	})
	Roll.Rt = Bb.R.x({
		initialize: function (o) {
			$l('rt')
			this.q = o.q
		},
		routes: {'': '_'},
		_: function () {
			$l('_')
			var vw = new Roll.Ix()
			this.q.E().A(vw.r().el)
		}
	})
	Roll.boot = function (ctDv) {
		new Roll.Rt({
			q: ctDv
		})
		Bb.h.start()
	}
	$Ms('BFROLL')
	$l('------------------- ROLL ----------------------')
	ctDv = $.dK('ct', [
		$.h1('Recs'),
		$.p().A($.a('intro')),
		$.dI('roll', [])
	])
	Roll.boot(ctDv)
}