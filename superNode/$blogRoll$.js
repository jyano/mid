BlogSchema = new $mg.Schema({author: $S, title: $S, url: $S})
$mg.model('blog', BlogSchema)
Blog = $mg.model('blog')
$a.get('/api/blogs', function (q, p) {
	Blog.find(function (z, docs) {
		_.e(docs, function (item) {
			$l('got request for _id: ' + item._id)
		})
		p.send(docs)
	})
})

$a.po('/api/blogs', function (q, p) {
	//$l('recieved post request')
	//for (var key in q.body) {$l(key + ': ' + q.body[key])}
	var blog = new Blog(q.body)
	blog.save(function (z, doc) {
		p.send(doc)
	})
})

$a.del('/api/blogs/:id', function (q, p) {
	Blog.rm({_id: q.pm.id}, function (z, d) {
		p.send({_id: q.params.id})
	})
})

$a.put('/api/blogs/:id', function (q, p) {
	Blog.update(ID, q.body, function (z, doc) {
		p.send({_id: q.pm.id})
	})
})
 
