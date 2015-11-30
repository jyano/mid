$a.G('/myStatus', function (q, p) {
	$m.user.findOne({un: q.un}, function (z, da) {
		p.send(da.status || 'no status')
	})
})
$a.PO('/status', function (q, p) {
	q.user.status = q.body.text
	q.user.save(function () {
		return 'saved!'
	})
})
$a.PO('/changeStatus', function (q, p) {
	q.user.status = q.body.status
	q.user.save(function (z, user) {
		p.json(user.status)
	})
})
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
	 
	