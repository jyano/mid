$a.PO('/post', function (q, p) {
//create new post
	$m.post.create($post(q), _json(p)
})
Po = Post = $m.posts
$a.G('/posts', function (q, p) {
//get all posts
	Po.fi(_json(p))
	// from most recent
})
$a.G('/post', function (q, p) {

//get User posts (by unsername)
	// from most recent
	Po.fi({un: q.un}, _json(p))
})
$a.G('/userRecentPosts', function (q, p) {
//User recent post(s?)
	Po.fi({un: q.query.un}, // from most recent
			_json(p))
})
$a.G('/postsByTitle', function (q, p) {
//rescent post(s?)
	$m.posts.find(_title(q), _json(p))
})
//create new post
$a.PO('/pst', function (req, res) {
	models.post.create({
				username: req.username,
				title: req.body.title,
				content: req.body.content,
				dataURL: req.body.dataURL
			},
			function () {
			})
})
//get all posts
$a.G('/posts', function (req, res) {
	models.posts.find(function (err, posts) {
		res.json(posts)
	})  // from most recent
})
//get User posts (by unsername)
$a.G('/post', function (req, res) {
	models.posts.find({username: req.username},
			function (err, posts) {
				res.json(posts)
			})  // from most recent
})
//User recent post(s?)
$a.G('/userRecentPosts', function (req, res) {
	models.posts.find({username: req.query.username}, // from most recent
			function (err, posts) {
				res.json(posts)
			})
})
//rescent post(s?)
$a.G('/postsByTitle', function (req, res) {
	models.posts.find({title: req.query.title}, function (err, posts) {
		res.json(posts)
	})
})
$a.g('/api/blogs', function (q, p) {
	Blog.fi(function (z, docs) {
		_.e(docs, function (item) {
			$l('got request for _id: ' + item._id)
		})
		p.se(docs)
	})
})
$a.po('/api/blogs', function (q, p) {
	$l('recieved post request')
	for (var key in q.bd) {
		console.log(key + ': ' + q.body[key])
	}
	var blog = new Blog(q.bd)
	blog.sv(function (z, doc) {
		p.se(doc)
	})
})
$a.del('/api/blogs/:id', function (q, p) {
	Blog.rm({_id: q.pm.id}, function (z, d) {
		p.send({_id: q.params.id})
	})
})
$a.put('/api/blogs/:id', function (q, p) {
	var ID = {_id: q.pm.id}
	Blog.upd(ID, q.bd, function (z, doc) {
				p.se(ID)
			}
	)
})
BLOGX = function (u) {
	z()
	WAPNAV()
	format()
	s1(h1('user ' + u + ' blog'))
	qG('/pstu', {u: u}, function (i) {
		blp(i, s2, '+')
	}, '+')
}
$postsButton = btPst = function () {
	return $.button('see posts', function () {
	})
}
POSTS = function () {
	$.format()
	s1.A(
			dd = $.inputBox({
				boxTitle: 'new post',
				url: '/pst',
				buttonText: 'post',
				func: home,
				inputType: 'textAndTextArea'
			}),
			$.h2('attach:'),
			$.button('pic', function () {
				m = $.pop(ps = $.div().A($.h3('pic select')))
				$.getJSON('/img', function (pics) {
					_.each(pics, function (p) {
						ps.A($.img(p.d).W(40).H(40).click(function () {
							attached.E($.img(p.d).W(20).H(20))
							m.modal('hide')
						}))
					})
				})
			}),
			attached = $.div().A()
	)
	tab2 = [
		'buds',
		function () {
			TABS.E($.h1('bud posts'))
		}
	]
	tab1 = ['all',
		function () {
			TABS.E($.h1('public posts'))
			qGE('/psts',
					function (i) {
						blp(i, TABS, '-')
					})
		}
	]
	tab3 = $.tab('user', function () {
		u = $w['from'] || 'a'
		s1.E(sp('topics: '))
		TABS.E(h1('user ' + u + ' blog'))
		qG('/pstu', {u: u},
				function (i) { //ii=i
					blp(i, TABS, '+')
				}, '+')
	})
	tab4 = $.tab('topic', function () {
		TOPIC = $w['topic'] || 'fantasy'
		TABS.E(h1('posts on ' + TOPIC + ' topic'))
		qG('/pstt', {t: TOPIC}, function (i) {
			blp(i, TABS, '/')
		}, '+')
	})
	tab5 = ['yours',
		function () {
			TABS.E($.h1('your posts'))
			qGE('/pst', function (i) {
				blp(i, TABS, '+')
			})
		}]
	s2.A(
			t = $.tabs(tab1, tab2, tab3, tab4, tab5))
	t.load()
}
$postsButton = btPst = function () {
	return $.button('see posts', function () {
	})
}
POSTS = function () {
	$.format()
	s1.A(
			dd = $.inputBox({
				boxTitle: 'new post',
				url: '/pst',
				buttonText: 'post',
				func: home,
				inputType: 'textAndTextArea'
			}),
			$.h2('attach:'),
			$.button('pic', function () {
				m = $.pop(ps = $.div().A($.h3('pic select')))
				$.getJSON('/img', function (pics) {
					_.each(pics, function (p) {
						ps.A($.img(p.d).W(40).H(40).click(function () {
							attached.E($.img(p.d).W(20).H(20))
							m.modal('hide')
						}))
					})
				})
			}),
			attached = $.div().A()
	)
	tab2 = [
		'buds',
		function () {
			TABS.E($.h1('bud posts'))
		}
	]
	tab1 = ['all',
		function () {
			TABS.E($.h1('public posts'))
			qGE('/psts',
					function (i) {
						blp(i, TABS, '-')
					})
		}
	]
	tab3 = $.tab('user', function () {
		u = $w['from'] || 'a'
		s1.E(sp('topics: '))
		TABS.E(h1('user ' + u + ' blog'))
		qG('/pstu', {u: u},
				function (i) { //ii=i
					blp(i, TABS, '+')
				}, '+')
	})
	tab4 = $.tab('topic', function () {
		TOPIC = $w['topic'] || 'fantasy'
		TABS.E(h1('posts on ' + TOPIC + ' topic'))
		qG('/pstt', {t: TOPIC}, function (i) {
			blp(i, TABS, '/')
		}, '+')
	})
	tab5 = ['yours',
		function () {
			TABS.E($.h1('your posts'))
			qGE('/pst', function (i) {
				blp(i, TABS, '+')
			})
		}]
	s2.A(
			t = $.tabs(tab1, tab2, tab3, tab4, tab5))
	t.load()
}
