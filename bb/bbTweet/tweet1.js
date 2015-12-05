
 
TWT=function(){
	 
	 
	 form = $.f().A(
			 $.lb('un'), $.ip().at('name', 'un').id('un'),
			 $.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			 $.bt('post'))
			 
	
	form.submit(function (ev) {
		 //ev.preventDefault()
		 var un = $('#un').val()
		 var sts = $('#sts').val()
		 var tweet = Tweet({un: un, sts: sts})
		 tweets.add(tweet)
		 $l(tweets.toJSON())
		 return false
	 })
	 
	 $.hr()
	 
	 div = $.d('y', 500, 200) 
	
	Tweet = _M({df: {un: 'fred', sts: 'sleeping'}})
	TweetsList = _C({model: Tweet})
	tweets = TweetsList()
	tweets.add({un: 'zzzzzzzzz'})
	
	TweetView = _V({
		model: Tweet(),
		tagName: 'div',
		ren: function () {
			this.$el.empty().A(
					$.sp(this.model.get('un')).K('un'), 
					$.sp(this.model.get('sts')).K('sts'))
			return this
		}
	})
	
	
	
	TweetsView = _V({
		el: div,
		i: function () {this.ren()},
		collection: tweets,
		ren: function () {
			var vw=this
			vw.$el.E()
			vw.collection.each(function(md){
				var tweet = Tweet({
					un: md.get('un'),
					 sts: md.get('sts')
				})
				var view  = TweetView({ model: tweet })
				vw.$el.A( view.ren().el )
			})}})
	
	
	
	tweetsView = TweetsView({
		collection: tweets
	})
	
	
	//
	
	
	 
	 /*
	  module.exports = function ($a) {
	  $a.g('/', home.index)
	  $a.g('/tweets', tweets.create)
	  $a.po('/tweets/:id', tweets.show)
	  $a.put('/tweets/:id', tweets.update)
	  $a.delete('/tweets/:id', tweets.destroy)
	  }
	  exports = {}
	  */
 }
 
 
TweetsCo = {
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
	show: function (q, p) {
	},
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
	update: function (q, p) {
	}
}