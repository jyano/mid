Storage = function (name) {
	return $C({
		localStorage: new Store(name)
	})
}
$tp = window['$tp'] || {}
$tp.index =   function (view) {
		
	var recipes = this.recipes
	var html =  $.sp()
	html.A(
			$.h2('There are ' + view.count() + ' recipes'),				
			$.dK('recipes')
	)
	
	return html
}
ROLL = function () {

	
	
	
	Recipe = _M()
	//Recipes = Bb.store('recipes')
	
	Index = _V({
		tp: 'index',
		initialize: function () {
			this.recipes = Storage('recipes')()
			this.recipes.on('all', this.ren, this)
			this.recipes.fetch()
		},
		
		count: function () {
			return _.z(this.recipes)
		},
		
		ren: function () {
			// pass the view itself this time..
			var index = $tp[ this.tp ](this)
			this.$el.html(index)
			var form = Form()
			this.$('.recipes').A(form.ren().el)
			return this
		}
	})
	
	
	
	Form =  _V({
		tagName: 'form',
		initialize: function () {this.ren()},//$l(' Form')
		ren: function () {this.$el.A($.h1('afssafsafsfsdfsd')); return this}
	})

	
	$.d([
		$.h1('Recs'), $.p().A($.a('intro')),
		$.dI('roll', [])
	]).id('root')
	Router = $R({routes: {'': '_'},
		_: function () {
		$('#root').E(
				Index().ren().el)
	}})
	Bb.h.start()
}
/// use root.find
 

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
	//3830: 'the first thing i want to do.. things to do..' 
// 42 asks funny ques !!!!!!
// 56 *** get recipes 'show'
// 57 smart point
//109 del
//111:20 fin!!!!
//120 'i still churn a lot' (unit testing)
//
//121 another ques
//i27 'i use hb bc'
}