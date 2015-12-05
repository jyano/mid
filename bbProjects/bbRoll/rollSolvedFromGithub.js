   //https://github.com/ngauthier/intro-to-backbone-js/blob/master/app/demo/solved.html
   store = new Store("recipes")
   ////
    
	Recipe = Bb.M.x({});
	Recipes = Bb.C.x({localStorage: store})
	Index = Bb.V.x({
		template: template('index'),
		initialize: function () {
			this.recipes = new Recipes();
			this.recipes.on('all', this.ren, this);
			this.recipes.fetch();
		},
		ren: function () {
			this.$el.html(this.template(this));
			this.recipes.each(this.addRecipe, this);
			var form = new Form({collection: this.recipes});
			this.$el.append(form.ren().el);
			return this;
		},
		addRecipe: function (recipe) {
			var view = new Recipe({model: recipe});
			this.$('.recipes').append(view.ren().el);
		},
		count: function () {
			return this.recipes.length;
		}
	})
	Recipe = Bb.V.x({
	
		className: 'well',
		template: template('recipe'),
		events: {
			'click button': 'delete'
		},
		ren: function () {
			this.$el.html(this.template(this));
			return this;
		},
		name: function () {
			return this.model.get('name');
		},
		ingredients: function () {
			return this.model.get('ingredients');
		},
		delete: function () {
			this.model.destroy();
		}
	})
	Form = Bb.V.x({
		tagName: 'form',
		className: 'form-horizontal',
		template: template('form'),
		events: {
			'submit': 'add'
		},
		ren: function () {
			this.$el.html(this.template(this));
			return this;
		},
		add: function (event) {
			event.preventDefault();
			this.collection.create({
				name: this.$('#name').val(),
				ingredients: this.$('#ingredients').val()
			})
			
			this.ren();
		}
	});
  
   
   
   boot = function (container) {
    
	   
	   Router = Bb.R.x({
		   initialize: function (options) {
			   this.el = options.el
		   },
		   routes: {
			   "": "index"
		   },
		   index: function () {
			   var index = new Index();
			   this.el.empty();
			   this.el.append(index.ren().el);
		   }
	   })
	   
	   var router = new Router({el: $(container)})
	   
	   Bb.history.start();
   }

 SOLVED=function(){
	
	 /*
	 
	  $.d().K('container').A(
	  $.d().K('hero-unit').A(
	  
	  )  
	  
	  
	  $.h1().('Breakfast Roll Recipes')
	  
	  $('<p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>),
	  $('<p><a href="http://intro-to-backbone-js.herokuapp.com/"> http://intro-to-backbone-js.herokuapp.com/ </a></p>')
	  <p><a href="index.html">View unsolved version</a></p>
	  </div>
	  <div class='row'>
	  <div class='span12' id='breakfast-roll'>
	  Loading...
	  </div>
	  </div>
	  </div>
	
	  <script type="text/x-mustache-template" id="index-template">
	  <h2>There are {{ count }} recipes</h2>
	  <div class='recipes'></div>
	  </script>
	  <script type="text/x-mustache-template" id="recipe-template">
	  <h3>{{ name }}</h3>
	  <p>{{ ingredients }}</p>
	  <p>
	  <button class='btn btn-danger'>Delete</button>
	  </p>
	  </script>
	  <script type="text/x-mustache-template" id="form-template">
	  <legend>Add a recipe</legend>
	  <fieldset>
	  <div class='control-group'>
	  <label class='control-label' for='name'>Name</label>
	  <div class='controls'>
	  <input type='text' class='input-xlarge' id='name'>
	  </div>
	  </div>
	  <div class='control-group'>
	  <label class='control-label' for='ingredients'>Ingredients</label>
	  <div class='controls'>
	  <input type='text' class='input-xlarge' id='ingredients'>
	  </div>
	  </div>
	  <div class="form-actions">
	  <button type="submit" class="btn btn-primary">Add Recipe</button>
	  </div>
	  </fieldset>
	
	  */
	 boot($('#breakfast-roll'))
 }
 
 function backupHMTL(){
 
 /*
  <div class='container'>
  <div class='hero-unit'>
  <h1>Breakfast Roll Recipes</h1>
  <p>git clone https://github.com/ngauthier/intro-to-backbone-js.git</p>
  <p><a href="http://intro-to-backbone-js.herokuapp.com/">
  http://intro-to-backbone-js.herokuapp.com/
  </a></p>
  <p><a href="index.html">View unsolved version</a></p>
  </div>
  <div class='row'>
  <div class='span12' id='breakfast-roll'>
  Loading...
  </div>
  </div>
  </div>

  <script type="text/x-mustache-template" id="index-template">
  <h2>There are {{ count }} recipes</h2>
  <div class='recipes'></div>
  </script>
  <script type="text/x-mustache-template" id="recipe-template">
  <h3>{{ name }}</h3>
  <p>{{ ingredients }}</p>
  <p>
  <button class='btn btn-danger'>Delete</button>
  </p>
  </script>
  <script type="text/x-mustache-template" id="form-template">
  <legend>Add a recipe</legend>
  <fieldset>
  <div class='control-group'>
  <label class='control-label' for='name'>Name</label>
  <div class='controls'>
  <input type='text' class='input-xlarge' id='name'>
  </div>
  </div>
  <div class='control-group'>
  <label class='control-label' for='ingredients'>Ingredients</label>
  <div class='controls'>
  <input type='text' class='input-xlarge' id='ingredients'>
  </div>
  </div>
  <div class="form-actions">
  <button type="submit" class="btn btn-primary">Add Recipe</button>
  </div>
  </fieldset>
  */
 }