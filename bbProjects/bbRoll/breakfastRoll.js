$L()
function _pre(){
	bbLocStorPLUG()
	Storage = function (name) {
		return $C({
			localStorage: new Bb.LocalStorage(name)
		})
	}
	$tp = window['$tp'] || {}
	function watchFrom2939to11120() {
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
//nothing 3000
// 'COLLECTION VW PATTERN'
		//9 deps DONT LISTEN
		//10 model
		//1430 coll
//1708 TEMPLATES
//1619 DEFERREDS 
//3:40 rtr
//5:20 vw
// FALSE STARTS 2939 'ive got the code here'///////////////////////
// REAL START: 3013: 'this is the ENTRY POINT to our app'
// 0:30:17 .. shows the 'INDEX' template.. which just produces a one-line h2 the 'count'

//0:33:45 FORM VIEW
//35:39.. so that's how the ivew renders itself!  but how do we count and how do we fetch?
//37:00 so that's all the boiler plate.  questions???
// questions..come back only at 0:38:30
//  0:38:30: 'the first thing i want to do.. things to do..'
// 0:39:30 ???
// 0:42 asks funny ques !!!!!!
/// question goes until....... 
// 0:56 *** get recipes 'show'
// 0:57 smart point

// 1:9:10.. 'completed first part..'
// 1:9:45 del

// entry point? div with id of 'breakfast-roll'..
// yes THE ROOT IS BREAKFSAT=ROLL DIV!!!
// pass in $('#breakfast-roll') (root container) to boot

// boot receives an el and passes that ro the router Router({el: container) (
// so it can instatiate views on that container)
// index router:  container(this.el).E(   Index().render().el  )
// 'INDEX' template just produces a one-line h2 the 'count'   AND  $.dK('recipes')
// form view, on init, will instantiate recipes collection, set events on it, and tell it to fecth
//index page should add a subview for each recipe
// so actually, u put the form in the 'recipes' div which iis within:
// 'breakfast-roll div // (with indexPage div template) 


// SO AT THIS POINT, u should just have only that one h2 in the root (and hence on the page)
//////////////////////////////////////
//111:20 fin!!!!
//120 'i still churn a lot' (unit testing)
//
//121 another ques
//i27 'i use hb bc'
	}
	
	ROLL = function () {
		store = Storage('recipes')
		RecipeM = _M()
		RecipesC = _C({})
		Form = _V({
			tagName: 'form',
			initialize: function () {
				$l('form init')
				this.ren()
			},//$l(' Form')
			ren: function () {
				this.$el.E(
						$.ip().val('name').id('name'),
						$.ip().val('ingredients').id('ingredients'), $.bt('submit'),
						$.bt('ok')
				)
				return this
			}
		})
		Index  = _V({
			tp: function (ob) {
				var html = $.sp()
				html.A(count(ob))
				return html
				function count(ob) {
					return $.h1().A('there are ' + ob.num + ' recipes')
				}
			},
			initialize: function () {
				$l('index  init..')
				this.recipes = store
				this.recipes.on('all', this.ren, this)
				this.recipes.fetch()
			},
			ren: function () {
				// pass the view itself this time..
				$indexEl = this.tp({
					num: _.z(store)
				})//$tp[this.tp](this)
				this.$el.A($indexEl)
				var form = Form().ren()
				//this.$('.recipes').A(form.el)
				$('#root').A(form.el)
				return this
			}
		})
		
		$.d().id('breakfast-roll').K('root').C('o').A('loading...')
		
		
		$('#breakfast-roll').A(
				$.h1('Hi and welcome to BreakfastRoll Recipes!'),
				$.p().A($.a('"intro" (anchor tag)')),
				$.d().id('ct').C('b').A('.. #ct (the container) ..')
		)
		
		Router = $indexRoute($('#ct'), function () {
			$('#ct').A(
					Index({num: _.z(st)}).ren().$el
			)
		})
		Bb.h.start()
	}
//4713 FINISHES FORM TEMPLATE
	$indexRoute = function ($el, fn, add) {
		return $R({
			routes: {'': '_'},
			_: function (ev) {
				$($el).E()
				$l('router says: "_" (index page)')
				fn(ev)
				$l('router says: "_" (index page) FIN')
			}
		})
	}
	$index = function ($el, arr) {
		var fn = function () {
			if (A(arr)) {
				_.e(arr, function (el) {
					$el.A(el)
				})
			}
		}
		var Router = $indexRoute($el, fn)
		return Router
	}
}

ROLL = JUSTENDINGAT53_59 = function () {
	store = Storage('recipes')
	Recipe = _M()
	Recipes = _C({localStorage: store})
	Index = _V({
		initialize: function () {
			$l('index  init..')
			this.recipes = store
			this.recipes.on('all', this.ren, this)
		//	this.recipes.fetch()
		},
		
		ren: function () {this.$el.E(
					$.d([
						$.h1().A('there are ' + _.z(store) + ' recipes'),
						$.d().K('recipes').A('.. recipes will go here')
					]).C('g')
					//	$.h1('Hi and Welclcome to breakfast rollsz!/'),
				//	$.p().A($.a('"intro" anchor')),
				//	$.d().id('ct').C('b').A('.. #ct (the container) ..')
			)
			var form = Form()
			form.ren()
			
			var recipes = this.$('.recipes')
			
			recipes.A('adding to .recpies..')
			recipes.A(form.el)
			
			recipes.A('added to .recpies..')
				
			
			// pass the view itself this time..
			// $indexEl = this.tp({num: _.z(store)})//$tp[this.tp](this)
		//	this.$el.A($indexEl)
		//	var form = Form().ren()
			//this.$('.recipes').A(form.el)
			//$('#root').A(form.el)
			return this
		}
	})
	Form = _V({
	
		
		tagName: 'form',
		initialize: function () {
			$l('form init')
			
			this.recipes = Recipes()
			this.recipes.on('all', this.render, this)
			this.recipes.fetch()
		},
		
		events: {
		
			'submit': 'submit'
		},
		
		submit: function(ev){
			$l('form submit!')
			$.pD(ev)
			$l( this.$('#name').v() )
		},
		ren: function () {
		
			this.$el.E($.d([
					'name: ', $.ip().placeholder('name').id('name'),
					' ingredients : ', $.ip().placeholder('ingredients').id('ingredients'),
					$('<button type="submit">').A('submit'),
					$.hr()
				]).C($r()).css({padding: 10, margin: 10}))
		
			return this
		}
	})
	$.d().id('#breakfast-rolls').css({padding:20, margin:20}).C('o').A('loading .... .... ..')
	Router =  $R({
	
		initialize:function(){$l('router init')},
		
		routes: {'': '_'},
		_: function (ev) {
			$l('router index')
			$('#breakfast-rolls').C('r').E(
					Index().ren().el).C('y')
		}
	})
	Bb.h.start()
}


