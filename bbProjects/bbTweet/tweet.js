 
TWT0 = TWTPART1 = $TWT$(function () {
	$l('twt0')
	f = $.f([
		$.lb('un'), $.ip().nm('un').id('un'),
		$.lb('sts'), $.ip().nm('sts').id('sts'),
		$.bt('post')
	])
	$.hr()
	div = $.d('y', 500, 200)
	tweets = TweetsList()
	$l('tweets len: ' + tweets.length)
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
			$l('len: ' + vw.collection.length)
			vw.collection.each(function (md) {
				vw.$el.A(TweetView({model: md}).ren().el)
			})
			return vw
		}
	})
	appView = tweetsView = TweetsView({
		collection: tweets
	})
	f.submit(function (ev) {
		$l('tweets len BEFORE ADD: ' + tweets.length)
		tweets.add(Tweet({
			un: $.v('un'),
			sts: $.v('sts')
		}))
		$l('tweets len AFTER ADD: ' + tweets.length)
		return false
	})
})

TWTVID1=  $TWT$(function(){
	$.f().A(
			$.lb('un'), $.ip().at('name', 'un').id('un'),
			$.lb('sts'), $.ip().at('name', 'sts').id('sts'),
			$.bt('post')
	).submit(function (ev) {
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
		collection: tweets,
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
		el: div,
		collection: tweets
	})
})
	  
	 
 
 //video 1 (see tweetServer for video 2)
 
TWT = TWTVID1 = $TWT$(function () {
 
	f = $.f([
	
				$.lb('un'),
				$.ip().idNm('un'),
				$.lb('sts'), $.ip().idNm('sts'), $.bt('post')]
	)
	
	$.hr()
	div = $.d('y', 500, 200)
	
	f.submit(function (ev) {
		tweets.add({
		
			un: $('#un').v(),
			sts: $('#sts').v()
		})
		
		return false
	})
	
	$l('welcome to TWT')
	
	tweets = TweetsList()
	
	$l('welcome to TWT 2')
	TweetsView = _V({
	
		collection: tweets,
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
		
		ren: function () {
			var vw=this
			this.$el.empty()
			$l('emptied')
			vw.collection.each(function (md) {
				
				 vw.$el.A(
						 TweetView({model: md}).ren().el
				 )
			})
			
			return vw
		}
	})
	 
	appView = tweetsView = TweetsView({
		el: div,
		collection: tweets
	})
})

  