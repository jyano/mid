//https://www.youtube.com/watch?v=PqtYcHyyWJA
// Introduction to Backbone.js by  Nick Gauthier
// BreakfastRoll Recipe Database
//project: just a recipe database for breakfast roles
// recipes have only name, ingredients list (but we'll cheat and make them both strings.. should be straightforward)
// goal:
//user can add/delete recipes
//use local storage
 //NOT edit/update, just create, distroy, list and SHOW
 //HAS A LEGIT REPO TO CLONE IF U WANT
 //(THIS IS DITPAGE WITH ONLY MESSAGES, BUT WITH A DELETE BT)
 //uses TWITTER BS
 //uses custom CSS
 
 
$Roll = function () {
	var Roll = {}
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
	//$Ms('BFROLL');//$l('------------------- ROLL ----------------------')
	return Roll
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
 
ROLL = function () {
	Roll = $Roll()
	els = [$.h1('Recs'),
		$.p().A($.a('intro')), $.dI('roll', [])
	]
	
	ctDv = $.dK('ct', els)
	Roll.boot = function (ctDv) {
		new Roll.Rt({
			q: ctDv
		})
		Bb.h.start()
	}
	
	Roll.boot(ctDv)
}

  

  
 
