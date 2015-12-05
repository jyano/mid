
 
TWT=function(){

	 $CSS(twtCss)
	 
	 form = $.f().A(
			 $.lb('un'), $.ip().at('name', 'un').id('un'),
			 $.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			 $.bt('post')
			 
			 )
	
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
	 
	tweets = TweetsList()
	tweets.add({un: 'zzzzzzzzz'})
	TweetsView = _V({
		el: div,
		i: function () {
			var vw = this
			this.ren()
			this.collection.on('add', function () {
				vw.ren()
			})
			this.collection.on('remove', function () {
				vw.ren()
			})
		},
		collection: tweets,
		ren: function () {
			var vw = this
			vw.$el.E()
			vw.collection.each(function (md) {
				vw.$el.A(TweetView({
					model: md
				}).ren().el)
			})
			return vw
		}
	})
	appView = tweetsView = TweetsView({
		collection: tweets
	})
	 
 }
  