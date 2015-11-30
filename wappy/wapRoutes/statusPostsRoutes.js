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
$a.PO('/post',  function (q, p) {
//create new post
	$m.post.create($post(q), _json(p)
})


 
$a.G('/posts',  function (q, p) {
//get all posts
	$m.posts.find(_json(p))
	// from most recent
})
 
$a.G('/post',   function (q, p) {

//get User posts (by unsername)
	
	// from most recent
	
	$m.posts.find({un: q.un}, _json(p)) 

})


$a.G('/userRecentPosts', function (q, p) {
//User recent post(s?)
	$m.posts.find({un: q.query.un}, // from most recent
			_json(p))
})



$a.G('/postsByTitle', function (q, p) {
//rescent post(s?)
	$m.posts.find(_title(q), _json(p))
})

 
function more(){

//create new post
	$a.post('/pst', $w.user, function (req, res) {
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
	$a.get('/posts', $w.user, function (req, res) {
		models.posts.find(function (err, posts) {
			res.json(posts)
		})  // from most recent
	})
//get User posts (by unsername)
	$a.get('/post', $w.user, function (req, res) {
		models.posts.find({username: req.username},
				function (err, posts) {
					res.json(posts)
				})  // from most recent
	})
//User recent post(s?)
	$a.get('/userRecentPosts', $w.user, function (req, res) {
		models.posts.find({username: req.query.username}, // from most recent
				function (err, posts) {
					res.json(posts)
				})
	})
//rescent post(s?)
	$a.get('/postsByTitle', $w.user, function (req, res) {
		models.posts.find({title: req.query.title}, function (err, posts) {
			res.json(posts)
		})
	})}
	
	function blog(){
		$a.g('/api/blogs', function (q, p) {
			Blog.find(function (z, docs) {
				docs.forEach(function (item) {
					console.log('got request for _id: ' + item._id)
				})
				p.send(docs)
			})
		})
		$a.post('/api/blogs', function (q, p) {
			$l('recieved post request')
			for (var key in q.body) {
				console.log(key + ': ' + q.body[key])
			}
			var blog = new Blog(q.body)
			blog.save(function (z, doc) {
				p.send(doc)
			})
		})
		$a.delete('/api/blogs/:id', function (q, p) {
			Blog.remove({_id: q.params.id}, function (z, d) {
				p.send({_id: q.params.id})
			})
		})
		$a.put('/api/blogs/:id', function (q, p) {
			Blog.update({_id: q.params.id}, q.body, function (z, doc) {
				p.send({_id: q.params.id})
			})
		})
	}