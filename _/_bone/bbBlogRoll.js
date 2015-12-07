BLOG = BLOGROLL = function () {html()
	Bb.Model.prototype.idAttribute = '_id'
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({
		model: Blog,
		url: '/api/blogs'
	})
	viewOb = {model: new Blog, tagName: 'tr'}
	viewOb.genCh = viewOb.generateChildren = function (ob) {
		ob = ob || {};
		var authorIp = $.sp(ob.author).K('author')
		var titleIp = $.sp(ob.title).K('title')
		var urlIp = $.sp(ob.url).K('url')
		return [
			$('<td>').A(authorIp),
			$('<td>').A(titleIp),
			$('<td>').A(urlIp),
			$('<td>').A(
					$.bt('Edit', function () {
					}).K('btn btn-warning edit-blog'),
					$.bt('Delete', function () {
					}).K('btn btn-danger delete-blog'),
					//FROM VIDEO 3
					$.bt('Update', function () {
					}).K('btn btn-success update-blog')
							.css('display', 'none'),
					//FROM VIDEO 3
					$.bt('Cancel', function () {
					}).K('btn btn-danger cancel')
							.css('display', 'none')
			)]
	}
	viewOb.render = viewOb.ren = function () {
		var vw = this
		var adultSelf = vw.model.toJSON()
		var children = vw.genCh(adultSelf)
		_.e(children, function (childEl) {
			childEl.a2(vw.$el)
		 
		})
		return vw
	}
	viewOb.events = {
		'click .edit-blog': 'edit',
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'
	}
	_BlogView = Bb.V.x(viewOb)
	BlogView = _BlogView.extend({
		edit: function () {
			var vw = this
			$l('edit button clicked!')
			vw.$('.edit-blog').hide()
			vw.$('.delete-blog').hide()
			vw.$('.update-blog').show()
			vw.$('.cancel').show()
			var author = this.$('.author').html()
			var title = this.$('.title').html()
			var url = this.$('.url').html()
			this.$('.author').E().A(
					$.ip().K("form-control author-update").val(author))
			this.$('.title').E().A(
					$.ip().K("form-control title-update").val(title))
			this.$('.url').E().A(
					$.ip().K("form-control url-update").val(url))
			// use .h( or .H( instead of E().A(
		},
		update: function () {
			this.model.set('author', $('.author-update').v())
			this.model.set('title', $('.title-update').v())
			this.model.set('url', $('.url-update').v())
			this.model.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.ren()
		},
		delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = Bb.V.x({
		collection: blogs = tp$$ = tps = new Blogs(),
		el: '.blogs-list',
		initialize: function () {
			var vw = this, cl = vw.collection
			vw.collection.on('add', this.ren, this)
		vw.collection.on('change', function () {
				setTimeout(function () {
					vw.ren()
				}, 30)
			}, vw)
		
		vw.collection.on('remove', this.ren, this)
			vw.collection.fetch({
				success: function (docs) {
					$l('success')
					if (docs) {
						$l('there are doc')
						$l(docs)
						_.each(docs.toJSON(), function (item) {
							$l('got blog with _id: ' + item._id)
						})
					}
				},
				error: function () {
					$l('failed to get blogs!')
				}
			})
		},
		
		ren: function () {
			var vw = this
			vw.$el.html('')
			vw.collection.each(function (blog) {
				var blogView = new BlogView({model: blog})
				vw.$el.A(blogView.ren().el)
			})
			return this
		}
	})
	tp__ = tpsV = blogsView = new BlogsView({})
	Bb.M.prototype.idAttribute = '_id'
}
function html() {
	$h1 = $('<h1>').html('Yano Blog App ' + M.r())
	$ctDiv = $('<div>').K('container')
			.A($h1).A()
	$table = $('<table>').K('table').a2($ctDiv)
	$thead = $('<thead>').a2($table)
	$thTr = $('<tr>').a2($thead)
	$thTr.A(
			$('<th>').html('AuthoR'),
			$('<th>').html('Title'),
			$('<th>').html('Url'),
			$('<th>').html('action'))
	$tbody = $('<tbody>').K('blogs-list').a2($table)
	$tr = $('<tr>').a2($thead)
	$.ip().K('form-control author-input').a2($('<td>').a2($tr))
	$.ip().K('form-control title-input').a2($('<td>').a2($tr))
	$.ip().K('form-control url-input').a2($('<td>').a2($tr))
	$bt = $.bt('Add', function () {
		blogs.create({
			author: $('.author-input').val(),
			title: $('.title-input').val(),
			url: $('.url-input').val()
		})
	})
	$bt.K('btn btn-primary add-blog').a2($('<td>').a2($tr))
}
function about(){
//  meb
BLOGVID2WORKS = function () {
	html();
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({
		model: Blog,
		url: 'http://localhost/$blogRoll$'
	})
	viewOb = {model: new Blog, tagName: 'tr'}
	viewOb.genCh = viewOb.generateChildren = function (ob) {
		ob = ob || {};
		var authorIp = $.sp(ob.author).K('author')
		var titleIp = $.sp(ob.title).K('title')
		var urlIp = $.sp(ob.url).K('url')
		return [
			$('<td>').A(authorIp),
			$('<td>').A(titleIp),
			$('<td>').A(urlIp),
			$('<td>').A(
					$.bt('Edit', function () {
					}).K('btn btn-warning edit-blog'),
					$.bt('Delete', function () {
					}).K('btn btn-danger delete-blog'),
					//FROM VIDEO 3
					$.bt('Update', function () {
					}).K('btn btn-success update-blog')
							.css('display', 'none'),
					//FROM VIDEO 3
					$.bt('Cancel', function () {
					}).K('btn btn-danger cancel')
							.css('display', 'none')
			)]
	}
	viewOb.render = viewOb.ren = function () {
		var vw = this
		var adultSelf = vw.model.toJSON()
		var children = vw.genCh(adultSelf)
		_.e(children, function (childEl) {
			childEl.a2(vw.$el)
		})
		return vw
	}
	viewOb.events = {
		'click .edit-blog': 'edit',
		'click .update-blog': 'update',
		'click .cancel': 'cancel',
		'click .delete-blog': 'delete'
	}
	_BlogView = Bb.V.x(viewOb)
	BlogView = _BlogView.extend({
		edit: function () {
			var vw = this
			$l('edit button clicked!')
			vw.$('.edit-blog').hide()
			vw.$('.delete-blog').hide()
			vw.$('.update-blog').show()
			vw.$('.cancel').show()
			var author = this.$('.author').html()
			var title = this.$('.title').html()
			var url = this.$('.url').html()
			this.$('.author').E().A(
					$.ip().K("form-control author-update").val(author))
			this.$('.title').E().A(
					$.ip().K("form-control title-update").val(title))
			this.$('.url').E().A(
					$.ip().K("form-control url-update").val(url))
			// use .h( or .H( instead of E().A(
		},
		update: function () {
			this.model.set('author', $('.author-update').v())
			this.model.set('title', $('.title-update').v())
			this.model.set('url', $('.url-update').v())
			this.model.save(null, {
				success: function () {
					$l('success updated!')
				}
			})
		},
		cancel: function () {
			blogsView.ren()
		},
		delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = Bb.V.x({
		collection: blogs = tp$$ = tps = new Blogs(),
		el: '.blogs-list',
		initialize: function () {
			var vw = this, cl = vw.collection
			this.collection.on('add', this.ren, this)
			this.collection.on('change', function () {
				setTimeout(function () {
					vw.ren()
				}, 30)
			}, vw)
			this.collection.on('remove', this.ren, this)
			/*	this.collection.fetch({
			 success: function (docs) {
			 if (docs) {
			 $l('there are doc')
			 $l(docs)
			 _.each(docs.toJSON(), function (item) {
			 $l('got blog with _id: ' + item._id)
			 })
			 }
			 },
			 error: function () {
			 $l('failed to get blogs!')
			 }
			 })*/
		},
		ren: function () {
			var vw = this
			vw.$el.html('')
			vw.collection.each(function (blog) {
				var blogView = new BlogView({model: blog})
				vw.$el.A(blogView.ren().el)
			})
			return this
		}
	})
	tp__ = tpsV = blogsView = new BlogsView({})
	Bb.M.prototype.idAttribute = '_id'
}
//https://www.youtube.com/watch?v=a-ijUKVIJSw
//VIDEO ONE
// start 7:00
// div .container wraps all
//----- h1 in div
//------ add a table
//--thead ---tr ---th's title author url action
//--tbod? (in vid2)
//each 'blogRoll' is a tr
//inject trs into tbody
//9:15 MAKES BLOG MODEL
//defaults all: ''
//10:05 tests model
//11:30 makes blogs collection
//////////////////////////////////////////////////////
//VIDEO two:
//2:00 makes indiv blog model view
//8:00 starts on BlogsView with init fn, on 'add'
//8:40 makes render fn, empty $el, then each(this.model.toArray) <- blogs
// for each do what? append a rendred view el (of it)
//11:00
// make new row in thead (tbody is for blog views (blogs))..
// put 3 inputs, 1 bt.. in td's in the new tr
//12:30 make ADD functionality
// var blog = new Blog({**data from ip fields**)
//13:30 console log test
//14:20 
// blogs.add(blog)
//14:45 instantiate new BlogsView AND DONE (he fixes errors; you not :))
//////////////////////////////
//VIDEO FOUR:
// 0:40 INSTALL NODE
// 1:10 INSTALL EXPRESS (AFTER CREATING PACKAGE.JS FILE)
// 2:50 MAKES A SERVER.JS FILE AND GOES INTO IT...
// 3:10 makes express server 
// 3:40 static files ('/public')
// 4:40 actually makes the 'public' directory and moves his files into it (index.html, scripts.js)
// then makes a js folder, and puts his scripts folder in THAT
// then changes the path of that file in his index.html file
// 6:15.. finally, he tests just the originally functionallity working on local host
// 7:00 SETUP MONGO
// talks about /data/db and file permissions
// 8:50 makes shortcuts with alias in separate file ..  and shows how!!!!
// 9:30 runs mongod
//  10:00 instals mongoose finally
// 11:00 REAL START? connects to mongoose
// monodb://localhost/blogroll
// ** creates db automatically and collection too
// 11:45 FINALLY MAKES THE BLOG SCHEMA
// 12:30  FINALLY MAKES THE BLOG MODEL 
//12:50 TEST IT OUT  makes new blog and calls SAVE
//uses 'mongo' to check test in terminal
//VIDEO FIVE:
// 3:50 switches finally to server side code
}