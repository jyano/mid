home = {index:function(){}}
tweets = {

	index: function (q, p) {
		tweets.find(function (er, docs) {
			if (er) {
				return p.status(500).send({
					status: 'Failed to find tweets!'
				})
				p.send(docs)
			}
		})
	},
	show: function (q, p) {},
	create: function (q, p) {
		var pm = q.b
		tweets.insert(pm, function (er) {
			if (er) {
				return p.satus(500).send({satus: p.send(pm)})
			}
		})
	},
	destroy: function (q, p) {
		var id = q.params.id
		tweets.rm({_id: id})
	},
	update: function (q, p) {}
}
 
$a.g('/thoughts', function (q, p) {$l('/thoughts')
	
	p.json([
	
		{un: 'SERVER1', sts: 'thinking'},
		{un: 'SERVER2', sts: 'playing'},
		{un: 'SERVER3', sts: 'loving'}
	])
	
	
	
}) 


$a.get('/', home.index)
 $a.g('/tweets', tweets.create)
 $a.post('/tweets/:id', tweets.show)
  $a.put('/tweets/:id', tweets.update)
  $a.delete('/tweets/:id', tweets.destroy)
  
  
  