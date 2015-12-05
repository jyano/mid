//function serverMongoose(){
//	BlogSchema = new Schema({author: String, title: String, url: String})
//	$mg.model('blog', BlogSchema)
//	Blog = $mg.model('blog')
//	BlogSchema = new Schema({author: String, title: String, url: String})
//	mongoose.model('blog', BlogSchema)
//	Blog = mongoose.model('blog')
//}

//container = $('<div>').K('container')
//table = $('<table>').K('table')
//table.A(
//		$('<thead>').A(
//				$('<tr>').A(
//						$('<th>').html('Author'),
//						$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
//				$('<tr>').A(
//						$('<td>').A($('<input>').K('form-control author-input')),
//						$('<td>').A($('<input>').K('form-control title-input')),
//						$('<td>').A($('<input>').K('form-control url-input')),
//						$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog')))),
//		$('<tbody>').K('blogs-list')
//)
//container.A($('<h1>').html('Blog App ' + Math.random()), table)
//$('body').A(container)
//blogs = new Blogs()
//blogsView = new BlogsView({collection: blogs})
//$('.add-blog').on('click', function () {
//	blogs.create({
//		author: $('.author-input').v_(),
//		title: $('.title-input').v_(),
//		url: $('.url-input').v_()
//	})
//})

//Bb.M.prototype.idAttribute = '_id'
//Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
//Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
// 
// 
//BlogView = Bb.V.x({
//	tagName: 'tr',
//	
//	
//	template: function (ob) {
//		return [
//			$('<td>').A(
//					$('<span>').K('author').text(ob.author)),
//			$('<td>').A(
//					$('<span>').K('title').text(ob.title)),
//			$('<td>').A(
//					$('<span>').K('url').text(ob.url)),
//			$('<td>').A(
//					$('<button>').K('btn btn-warning edit-blog').text('Edit'),
//					$('<button>').K('btn btn-danger delete-blog').text('Delete'),
//					$('<button>')
//							.K('btn btn-success update-blog').text('Update')
//							.css('display', 'none'),
//					$('<button>').K('btn btn-danger cancel')
//							.text('Cancel').css('display', 'none')
//			)
//		]
//	},
//	
//	ren: function () {
//		var vw = this,
//				nodes = vw.template(this.model.j())
//		vw.$el.A(nodes)//_.each(nodes, function(node){ vw.$el.A(node) })
//		return vw
//	},
//	
//	events: {
//		'click .edit-blog': 'edit',
//		'click .update-blog': 'update',
//		'click .cancel': 'cancel',
//		'click .delete-blog': 'delete'
//	},
//	
//	edit: function () {
//		var vw = this, author, title, url
//		vw.$('.edit-blog').hide()
//		vw.$('.delete-blog').hide()
//		vw.$('.update-blog').show()
//		vw.$('.cancel').show()
//		author = this.$('.author').html()
//		title = this.$('.title').html()
//		url = this.$('.url').html()
//		this.$('.author').empty().A(
//				$('<input>').K("form-control author-update").v(author)
//		)
//		this.$('.title').empty().A(
//				$('<input>').K("form-control title-update").v(title)
//		)
//		this.$('.url').empty().A(
//				$('<input>').K("form-control url-update").v(url)
//		)
//	},
//	
//	update: function () {
//		this.model.set('author', $('.author-update').v())
//		this.model.set('title', $('.title-update').v())
//		this.model.set('url', $('.url-update').v())
//		this.model.save(null, {
//			success: function () {
//				$l('success updated!')
//			}
//		})
//	},
//	cancel: function () {
//		blogsView.render()
//	},
//	delete: function () {
//		this.model.destroy()
//	}
//})
//
//
//BlogsView = Bb.V.x({
//	el: '.blogs-list',
//	initialize: function () {
//		var vw = this
//		this.collection.on('add', this.render, this)
//		this.collection.on('change', function () {
//			setTimeout(function () {
//				vw.render()
//			}, 30)
//		}, vw)
//		this.collection.on('remove', this.render, this)
//		this.collection.fetch({
//			success: function (docs) {
//				if (docs) {
//					//_.each(res.j(), function (item) { $l('got blog with _id: ' + item._id) })
//					$l('there are doc')
//					$l(docs)
//				}
//			}, error: function () {
//				$l('failed to get blogs!')
//			}
//		})
//	},
//	render: function () {
//		var vw = this
//		vw.$el.html('')
//		vw.collection.each(function (blogMd) {
//			vw.$el.A(
//					(new BlogView({model: blogMd})).render().el
//			)
//		})
//		return this
//	}
//})
//
//  
//$(function tpcsApp() {
//
//	tpcsIndexHtml()
//
//	tp$$ = tps = blogs = new Blogs()
//	
//	tp__ = tpsV = blogsView = new BlogsView({collection: blogs})
//
//
//})
//function ditto() {
//	$.tK = function (k, toAdd) {
//		var g = G(arguments),
//				t = $.t()
//		t.K(k)
//		if (A(toAdd)) {
//			_.e(toAdd, function (q) {
//				t.A(q)
//			})
//		}
//		return t
//	}
//	$l = function (a) {
//		console.log.apply(console, arguments);
//		return a
//	}
//	$.fn.v = $.fn.val
//	$.fn.v_ = function () {
//		var val = this.val();
//		this.val('');
//		return val
//	}
//	$.fn.A = $.fn.append;
//	$.fn.K = $.fn.addClass
//	Bb = Backbone
//	Bb.Model.prototype.j = function () {
//		return this.toJSON()
//	}
//	Bb.Collection.prototype.j = function () {
//		return this.toJSON()
//	}
//	Bb.M = Bb.Model;
//	Bb.M.x = Bb.M.extend
//	Bb.C = Bb.Collection;
//	Bb.C.x = Bb.C.extend
//	Bb.V = Bb.View;
//	Bb.V.x = Bb.V.extend
//	Bb.M.prototype.idAttribute = '_id'
//	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
//	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
//	BlogView = Bb.V.x({
//		tagName: 'tr',
//		template: function (o) {
//			return [
//				$('<td>').A(
//						$('<span>').K('author').text(o.author)),
//				$('<td>').A(
//						$('<span>').K('title').text(o.title)),
//				$('<td>').A(
//						$('<span>').K('url').text(o.url)),
//				$('<td>').A(
//						$('<button>').K('btn btn-warning edit-blog').text('Edit'),
//						$('<button>').K('btn btn-danger delete-blog').text('Delete'),
//						$('<button>')
//								.K('btn btn-success update-blog').text('Update')
//								.css('display', 'none'),
//						$('<button>').K('btn btn-danger cancel')
//								.text('Cancel').css('display', 'none')
//				)
//			]
//		},
//		render: function () {
//			var vw = this,
//					nodes = vw.template(this.model.j())
//			vw.$el.A(nodes)//_.each(nodes, function(node){ vw.$el.A(node) })
//			return vw
//		},
//		events: {
//			'click .edit-blog': 'edit',
//			'click .update-blog': 'update',
//			'click .cancel': 'cancel',
//			'click .delete-blog': 'delete'
//		},
//		edit: function () {
//			var vw = this, author, title, url
//			vw.$('.edit-blog').hide()
//			vw.$('.delete-blog').hide()
//			vw.$('.update-blog').show()
//			vw.$('.cancel').show()
//			author = this.$('.author').html()
//			title = this.$('.title').html()
//			url = this.$('.url').html()
//			this.$('.author').empty().A(
//					$('<input>').K("form-control author-update").v(author)
//			)
//			this.$('.title').empty().A(
//					$('<input>').K("form-control title-update").v(title)
//			)
//			this.$('.url').empty().A(
//					$('<input>').K("form-control url-update").v(url)
//			)
//		},
//		update: function () {
//			var md = this.model
//			md.set('author', $('.author-update').v())
//			md.set('title', $('.title-update').v())
//			md.set('url', $('.url-update').v())
//			md.save(null, {
//				success: function () {
//					$l('success updated!')
//				}
//			})
//		},
//		cancel: function () {
//			blogsView.render()
//		},
//		delete: function () {
//			this.model.destroy()
//		}
//	})
//	BlogsView = Bb.V.x({
//		el: '.blogs-list',
//		initialize: function () {
//			var vw = this
//			this.collection.on('add', this.render, this)
//			this.collection.on('change', function () {
//				setTimeout(function () {
//					vw.render()
//				}, 30)
//			}, vw)
//			this.collection.on('remove', this.render, this)
//			this.collection.fetch({
//				success: function (docs) {
//					if (docs) {
//						//_.each(res.j(), function (item) { $l('got blog with _id: ' + item._id) })
//						$l('there are doc')
//						$l(docs)
//					}
//				}, error: function () {
//					$l('failed to get blogs!')
//				}
//			})
//		},
//		render: function () {
//			var vw = this
//			vw.$el.html('')
//			vw.collection.each(function (blogMd) {
//				vw.$el.A(
//						(new BlogView({model: blogMd})).render().el
//				)
//			})
//			return this
//		}
//	})
//	$(function () {
//		container = $('<div>').K('container')
//		table = $('<table>').K('table')
//		table.A(
//				$('<thead>').A(
//						$('<tr>').A(
//								$('<th>').html('Author'),
//								$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
//						$('<tr>').A(
//								$('<td>').A($('<input>').K('form-control author-input')),
//								$('<td>').A($('<input>').K('form-control title-input')),
//								$('<td>').A($('<input>').K('form-control url-input')),
//								$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog')))),
//				$('<tbody>').K('blogs-list')
//		)
//		container.A($('<h1>').html('Blog App ' + Math.random()), table)
//		$('body').A(container)
//		blogs = new Blogs()
//		blogsView = new BlogsView({collection: blogs})
//		$('.add-blog').on('click', function () {
//			blogs.create({
//				author: $('.author-input').v_(),
//				title: $('.title-input').v_(),
//				url: $('.url-input').v_()
//			})
//		})
//	})
//}
//function gall() {
//	_vw = function (o) {
//		o = o || {}
//		if (F(o.i)) {
//			o.initialize = o.i
//		}
//		if (o.q) {
//			o.el = q
//		}
//		return o
//	}
//	Bb = Backbone
//	Bb.Model.prototype.j = function () {
//		return this.toJSON()
//	}
//	Bb.Collection.prototype.j = function () {
//		return this.toJSON()
//	}
//	Bb.M = Bb.Model;
//	Bb.M.x = Bb.M.extend
//	Bb.C = Bb.Collection;
//	Bb.C.x = Bb.C.extend
//	Bb.V = Bb.View;
//	Bb.V.x = Bb.V.extend
//	Bb.M.prototype.idAttribute = '_id'
//	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
//	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
//}
//function tpcsIndexHtml() {
//	$('body').A($('<div>').K('container').A(
//			$('<h1>').html('Blog App ' + Math.random()),
//			$table = $('<table>').K('table')
//	))
//	$thead = $('<thead>').A(
//			$('<tr>').A(
//					$('<th>').html('AuthoR'),
//					$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
//			$('<tr>').A(
//					$('<td>').A($('<input>').K('form-control author-input')),
//					$('<td>').A($('<input>').K('form-control title-input')),
//					$('<td>').A($('<input>').K('form-control url-input')),
//					$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog'))))
//	$table.A(
//			$thead,
//			$tbody = $('<tbody>').K('blogs-list'))
//	$('.add-blog').on('click', function () {
//		blogs.create({
//			author: $('.author-input').v_(),
//			title: $('.title-input').v_(),
//			url: $('.url-input').v_()
//		})
//	})
//}
//USERSX = function () {
//	CT(h1('Users: '), br(), rr = row())
//	getUsers(function (u) {
//		_e(u, function (u) {
//			qP('/dud', {d: u.m}, function (m) {
//				rr(tn(pg(u.u), br(), m).o(function () {
//					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
//							xc().w(300).h(300).f(m), s = h1(), d = _d(),
//							ms = ta().c('w', 'z'), bt('mail', function () {
//								qP('/sMsg', {m: ms.V(), to: u.u})
//							}),
//							bt('chat', function () {
//								iMsg(u.u, ms.V())
//							}),
//							bt('buddy-request', function () {
//								qP('/sRq', {to: u.u})
//							})))
//					prof(u.u, d)
//					wUSt(u.u, function (s) {
//						d(h1('STATUS: ' + s))
//						d(bt('comment', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see feed', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see blog', function () {
//									BLOG(u.u)
//								}),
//								bt('challenge', function () {
//									qP('/sRq', {to: u.u})
//								}))
//					})
//				}))
//			})
//		})
//	})
//	tab1 = ['users', function () {
//	}]
//	tab2 = ['a', function () {
//	}]
//	tab3 = ['a', function () {
//	}]
//	tab4 = ['a', function () {
//	}]
//	s2(t = tabs(tab1, tab2, tab3, tab4))
//	t.load()
//}
//USERSX = function () {
//	CT(h1('Users: '), br(), rr = row())
//	getUsers(function (u) {
//		_e(u, function (u) {
//			qP('/dud', {d: u.m}, function (m) {
//				rr(tn(pg(u.u), br(), m).o(function () {
//					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
//							xc().w(300).h(300).f(m), s = h1(), d = _d(),
//							ms = ta().c('w', 'z'), bt('mail', function () {
//								qP('/sMsg', {m: ms.V(), to: u.u})
//							}),
//							bt('chat', function () {
//								iMsg(u.u, ms.V())
//							}),
//							bt('buddy-request', function () {
//								qP('/sRq', {to: u.u})
//							})))
//					prof(u.u, d)
//					wUSt(u.u, function (s) {
//						d(h1('STATUS: ' + s))
//						d(bt('comment', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see feed', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see blog', function () {
//									BLOG(u.u)
//								}),
//								bt('challenge', function () {
//									qP('/sRq', {to: u.u})
//								}))
//					})
//				}))
//			})
//		})
//	})
//	tab1 = ['users', function () {
//	}]
//	tab2 = ['a', function () {
//	}]
//	tab3 = ['a', function () {
//	}]
//	tab4 = ['a', function () {
//	}]
//	s2(t = tabs(tab1, tab2, tab3, tab4))
//	t.load()
//}
//USERSX = function () {
//	CT(h1('Users: '), br(), rr = row())
//	getUsers(function (u) {
//		_e(u, function (u) {
//			qP('/dud', {d: u.m}, function (m) {
//				rr(tn(pg(u.u), br(), m).o(function () {
//					win(_d()(br(), hr(), h3('User: ' + u.u), br(),
//							xc().w(300).h(300).f(m), s = h1(), d = _d(),
//							ms = ta().c('w', 'z'), bt('mail', function () {
//								qP('/sMsg', {m: ms.V(), to: u.u})
//							}),
//							bt('chat', function () {
//								iMsg(u.u, ms.V())
//							}),
//							bt('buddy-request', function () {
//								qP('/sRq', {to: u.u})
//							})))
//					prof(u.u, d)
//					wUSt(u.u, function (s) {
//						d(h1('STATUS: ' + s))
//						d(bt('comment', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see feed', function () {
//									iMsg(u.u, ms.V())
//								}),
//								bt('see blog', function () {
//									BLOG(u.u)
//								}),
//								bt('challenge', function () {
//									qP('/sRq', {to: u.u})
//								}))
//					})
//				}))
//			})
//		})
//	})
//	tab1 = ['users', function () {
//	}]
//	tab2 = ['a', function () {
//	}]
//	tab3 = ['a', function () {
//	}]
//	tab4 = ['a', function () {
//	}]
//	s2(t = tabs(tab1, tab2, tab3, tab4))
//	t.load()
//}
//$a.PO('/post', function (q, p) {
////create new post
//	$m.post.create($post(q), _json(p)
//})
//Po = Post = $m.posts
//$a.G('/posts', function (q, p) {
////get all posts
//	Po.fi(_json(p))
//	// from most recent
//})
//$a.G('/post', function (q, p) {
//
////get User posts (by unsername)
//	// from most recent
//	Po.fi({un: q.un}, _json(p))
//})
//$a.G('/userRecentPosts', function (q, p) {
////User recent post(s?)
//	Po.fi({un: q.query.un}, // from most recent
//			_json(p))
//})
//$a.G('/postsByTitle', function (q, p) {
////rescent post(s?)
//	$m.posts.find(_title(q), _json(p))
//})
////create new post
//$a.PO('/pst', function (req, res) {
//	models.post.create({
//				username: req.username,
//				title: req.body.title,
//				content: req.body.content,
//				dataURL: req.body.dataURL
//			},
//			function () {
//			})
//})
////get all posts
//$a.G('/posts', function (req, res) {
//	models.posts.find(function (err, posts) {
//		res.json(posts)
//	})  // from most recent
//})
////get User posts (by unsername)
//$a.G('/post', function (req, res) {
//	models.posts.find({username: req.username},
//			function (err, posts) {
//				res.json(posts)
//			})  // from most recent
//})
////User recent post(s?)
//$a.G('/userRecentPosts', function (req, res) {
//	models.posts.find({username: req.query.username}, // from most recent
//			function (err, posts) {
//				res.json(posts)
//			})
//})
////rescent post(s?)
//$a.G('/postsByTitle', function (req, res) {
//	models.posts.find({title: req.query.title}, function (err, posts) {
//		res.json(posts)
//	})
//})
//$a.g('/api/blogs', function (q, p) {
//	Blog.fi(function (z, docs) {
//		_.e(docs, function (item) {
//			$l('got request for _id: ' + item._id)
//		})
//		p.se(docs)
//	})
//})
//$a.po('/api/blogs', function (q, p) {
//	$l('recieved post request')
//	for (var key in q.bd) {
//		console.log(key + ': ' + q.body[key])
//	}
//	var blog = new Blog(q.bd)
//	blog.sv(function (z, doc) {
//		p.se(doc)
//	})
//})
//$a.del('/api/blogs/:id', function (q, p) {
//	Blog.rm({_id: q.pm.id}, function (z, d) {
//		p.send({_id: q.params.id})
//	})
//})
//$a.put('/api/blogs/:id', function (q, p) {
//	var ID = {_id: q.pm.id}
//	Blog.upd(ID, q.bd, function (z, doc) {
//				p.se(ID)
//			}
//	)
//})
//BLOGX = function (u) {
//	z()
//	WAPNAV()
//	format()
//	s1(h1('user ' + u + ' blog'))
//	qG('/pstu', {u: u}, function (i) {
//		blp(i, s2, '+')
//	}, '+')
//}
//$postsButton = btPst = function () {
//	return $.button('see posts', function () {
//	})
//}
//POSTS = function () {
//	$.format()
//	s1.A(
//			dd = $.inputBox({
//				boxTitle: 'new post',
//				url: '/pst',
//				buttonText: 'post',
//				func: home,
//				inputType: 'textAndTextArea'
//			}),
//			$.h2('attach:'),
//			$.button('pic', function () {
//				m = $.pop(ps = $.div().A($.h3('pic select')))
//				$.getJSON('/img', function (pics) {
//					_.each(pics, function (p) {
//						ps.A($.img(p.d).W(40).H(40).click(function () {
//							attached.E($.img(p.d).W(20).H(20))
//							m.modal('hide')
//						}))
//					})
//				})
//			}),
//			attached = $.div().A()
//	)
//	tab2 = [
//		'buds',
//		function () {
//			TABS.E($.h1('bud posts'))
//		}
//	]
//	tab1 = ['all',
//		function () {
//			TABS.E($.h1('public posts'))
//			qGE('/psts',
//					function (i) {
//						blp(i, TABS, '-')
//					})
//		}
//	]
//	tab3 = $.tab('user', function () {
//		u = $w['from'] || 'a'
//		s1.E(sp('topics: '))
//		TABS.E(h1('user ' + u + ' blog'))
//		qG('/pstu', {u: u},
//				function (i) { //ii=i
//					blp(i, TABS, '+')
//				}, '+')
//	})
//	tab4 = $.tab('topic', function () {
//		TOPIC = $w['topic'] || 'fantasy'
//		TABS.E(h1('posts on ' + TOPIC + ' topic'))
//		qG('/pstt', {t: TOPIC}, function (i) {
//			blp(i, TABS, '/')
//		}, '+')
//	})
//	tab5 = ['yours',
//		function () {
//			TABS.E($.h1('your posts'))
//			qGE('/pst', function (i) {
//				blp(i, TABS, '+')
//			})
//		}]
//	s2.A(
//			t = $.tabs(tab1, tab2, tab3, tab4, tab5))
//	t.load()
//}
//$postsButton = btPst = function () {
//	return $.button('see posts', function () {
//	})
//}
//POSTS = function () {
//	$.format()
//	s1.A(
//			dd = $.inputBox({
//				boxTitle: 'new post',
//				url: '/pst',
//				buttonText: 'post',
//				func: home,
//				inputType: 'textAndTextArea'
//			}),
//			$.h2('attach:'),
//			$.button('pic', function () {
//				m = $.pop(ps = $.div().A($.h3('pic select')))
//				$.getJSON('/img', function (pics) {
//					_.each(pics, function (p) {
//						ps.A($.img(p.d).W(40).H(40).click(function () {
//							attached.E($.img(p.d).W(20).H(20))
//							m.modal('hide')
//						}))
//					})
//				})
//			}),
//			attached = $.div().A()
//	)
//	tab2 = [
//		'buds',
//		function () {
//			TABS.E($.h1('bud posts'))
//		}
//	]
//	tab1 = ['all',
//		function () {
//			TABS.E($.h1('public posts'))
//			qGE('/psts',
//					function (i) {
//						blp(i, TABS, '-')
//					})
//		}
//	]
//	tab3 = $.tab('user', function () {
//		u = $w['from'] || 'a'
//		s1.E(sp('topics: '))
//		TABS.E(h1('user ' + u + ' blog'))
//		qG('/pstu', {u: u},
//				function (i) { //ii=i
//					blp(i, TABS, '+')
//				}, '+')
//	})
//	tab4 = $.tab('topic', function () {
//		TOPIC = $w['topic'] || 'fantasy'
//		TABS.E(h1('posts on ' + TOPIC + ' topic'))
//		qG('/pstt', {t: TOPIC}, function (i) {
//			blp(i, TABS, '/')
//		}, '+')
//	})
//	tab5 = ['yours',
//		function () {
//			TABS.E($.h1('your posts'))
//			qGE('/pst', function (i) {
//				blp(i, TABS, '+')
//			})
//		}]
//	s2.A(
//			t = $.tabs(tab1, tab2, tab3, tab4, tab5))
//	t.load()
//}
//BLOGX = function (u) {
//	z()
//	WAPNAV()
//	format()
//	s1(h1('user ' + u + ' blog'))
//	qG('/pstu', {u: u}, function (i) {
//		blp(i, s2, '+')
//	}, '+')
//}
//$postsButton = btPst = function () {
//	return $.button('see posts', function () {
//	})
//}
//POSTS = function () {
//	$.format()
//	s1.A(
//			dd = $.inputBox({
//				boxTitle: 'new post',
//				url: '/pst',
//				buttonText: 'post',
//				func: home,
//				inputType: 'textAndTextArea'
//			}),
//			$.h2('attach:'),
//			$.button('pic', function () {
//				m = $.pop(ps = $.div().A($.h3('pic select')))
//				$.getJSON('/img', function (pics) {
//					_.each(pics, function (p) {
//						ps.A($.img(p.d).W(40).H(40).click(function () {
//							attached.E($.img(p.d).W(20).H(20))
//							m.modal('hide')
//						}))
//					})
//				})
//			}),
//			attached = $.div().A()
//	)
//	tab2 = [
//		'buds',
//		function () {
//			TABS.E($.h1('bud posts'))
//		}
//	]
//	tab1 = ['all',
//		function () {
//			TABS.E($.h1('public posts'))
//			qGE('/psts',
//					function (i) {
//						blp(i, TABS, '-')
//					})
//		}
//	]
//	tab3 = $.tab('user', function () {
//		u = $w['from'] || 'a'
//		s1.E(sp('topics: '))
//		TABS.E(h1('user ' + u + ' blog'))
//		qG('/pstu', {u: u},
//				function (i) { //ii=i
//					blp(i, TABS, '+')
//				}, '+')
//	})
//	tab4 = $.tab('topic', function () {
//		TOPIC = $w['topic'] || 'fantasy'
//		TABS.E(h1('posts on ' + TOPIC + ' topic'))
//		qG('/pstt', {t: TOPIC}, function (i) {
//			blp(i, TABS, '/')
//		}, '+')
//	})
//	tab5 = ['yours',
//		function () {
//			TABS.E($.h1('your posts'))
//			qGE('/pst', function (i) {
//				blp(i, TABS, '+')
//			})
//		}]
//	s2.A(
//			t = $.tabs(tab1, tab2, tab3, tab4, tab5))
//	t.load()
//}
////avail=bbM({url:'/sts'})
////avails=bbC({model:avail, url:'/sts'})
//BLOGX = function (u) {
//	z()
//	WAPNAV()
//	format()
//	s1(h1('user ' + u + ' blog'))
//	qG('/pstu', {u: u}, function (i) {
//		blp(i, s2, '+')
//	}, '+')
//}