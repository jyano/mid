BLOG = BLOGROLL = function () {
	//https://www.youtube.com/watch?v=a-ijUKVIJSw
	
	container = $('<div>').K('container')
	$('body').A(container.A(
			$('<h1>').html('Blog App ' + Math.random()),
			$table = $('<table>').K('table')))
	
	$thead = $('<thead>').A(
			$('<tr>').A(
					$('<th>').html('AuthoR'),
					$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
			$('<tr>').A(
					$('<td>').A($('<input>').K('form-control author-input')),
					$('<td>').A($('<input>').K('form-control title-input')),
					$('<td>').A($('<input>').K('form-control url-input')),
					$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog'))))
	$table.A($thead,
			$tbody = $('<tbody>').K('blogs-list'))
			
	$('.add-blog').on('click', function () {
		blogs.create({
			author: $('.author-input').v_(),
			title: $('.title-input').v_(),
			url: $('.url-input').v_()
		})
	})
	
	Bb.M.prototype.idAttribute = '_id'
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
	BlogView = Bb.V.x({
		tagName: 'tr',
		template: function (ob) {
			return [
				$('<td>').A(
						$('<span>').K('author').text(ob.author)),
				$('<td>').A(
						$('<span>').K('title').text(ob.title)),
				$('<td>').A(
						$('<span>').K('url').text(ob.url)),
				$('<td>').A(
						$('<button>').K('btn btn-warning edit-blog').text('Edit'),
						$('<button>').K('btn btn-danger delete-blog').text('Delete'),
						$('<button>')
								.K('btn btn-success update-blog').text('Update')
								.css('display', 'none'),
						$('<button>').K('btn btn-danger cancel')
								.text('Cancel').css('display', 'none')
				)
			]
		},
		ren: function () {
			var vw = this,
					nodes = vw.template(this.model.j())
			vw.$el.A(nodes)//_.each(nodes, function(node){ vw.$el.A(node) })
			return vw
		},
		events: {
			'click .edit-blog': 'edit',
			'click .update-blog': 'update',
			'click .cancel': 'cancel',
			'click .delete-blog': 'delete'
		},
		edit: function () {
			var vw = this, author, title, url
			vw.$('.edit-blog').hide()
			vw.$('.delete-blog').hide()
			vw.$('.update-blog').show()
			vw.$('.cancel').show()
			author = this.$('.author').html()
			title = this.$('.title').html()
			url = this.$('.url').html()
			this.$('.author').empty().A(
					$('<input>').K("form-control author-update").v(author)
			)
			this.$('.title').empty().A(
					$('<input>').K("form-control title-update").v(title)
			)
			this.$('.url').empty().A(
					$('<input>').K("form-control url-update").v(url)
			)
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
			blogsView.render()
		},
		delete: function () {
			this.model.destroy()
		}
	})
	BlogsView = Bb.V.x({
		el: '.blogs-list',
		initialize: function () {
			var vw = this
			this.collection.on('add', this.render, this)
			this.collection.on('change', function () {
				setTimeout(function () {
					vw.render()
				}, 30)
			}, vw)
			this.collection.on('remove', this.render, this)
			this.collection.fetch({
				success: function (docs) {
					if (docs) {
						//_.each(res.j(), function (item) { $l('got blog with _id: ' + item._id) })
						$l('there are doc')
						$l(docs)
					}
				}, error: function () {
					$l('failed to get blogs!')
				}
			})
		},
		render: function () {
			var vw = this
			vw.$el.html('')
			vw.collection.each(function (blogMd) {
				vw.$el.A(
						(new BlogView({model: blogMd})).render().el
				)
			})
			return this
		}
	})
	blogs = new Blogs()
	blogsView = new BlogsView({collection: blogs})
	
	
	// tp$$ = tps = blogs = new Blogs()
	// tp__ = tpsV = blogsView = new BlogsView({collection: blogs})
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
}
 