$TWT$ = $TWTAPP$ = function (fn) {
	return function () {
		$CSS(twtCss)
		TWTmvc()
		if (fn) {
			fn()
		}
	}
	function TWTmvc() {
		Tweet = _M({
			initialize: function () {
				$l('new Tweet model')
			},
			df: {un: 'fred', sts: 'sleeping'}
		})
		TweetsList = _C({
			url: '/tweets',
			model: Tweet
		})
		TweetView = _V({
			events: {
				'click .edit': function (ev) {
					$.pD(ev)
					this.$('.sts').edFoc()
				},
				'click .delete': function (ev) {
					$.pD(ev)
					tweets.remove(this.model)
				},
				'blur .sts': 'close',
				'keypress .sts': function (ev) {
					if ((ev.which) == 13) {
						this.close()
					}
				}
			},
			close: function () {
				var vw = this
				vw.model.set('sts', vw.$('.sts').T())
				vw.$('.sts').ed(0)//.rmAt('contenteditable')
			},
			ren: function () {
				this.$el.E(
						$.sp(this.model.get('un')).K('un'),
						': ',
						$.sp(this.model.get('sts')).K('sts'),
						$.a('[details]').K('details'),
						$.a('[edit]').K('edit'),
						$.a('[delete]').K('delete'),
						$.br()
				)
				return this
			}
		})
	}
}
TWT00 = TWTPART1WORKS = $TWT$(function () {
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
	Tweet = _M({df: {un: 'fred', sts: 'sleeping'}})
	TweetsList = _C({model: Tweet})
	tweets = TweetsList()
	tweets.add({un: 'zzzzzzzzz'})
	TweetView = _V({
		events: {
			'click .edit': function (ev) {
				ev.preventDefault()
				this.$('.sts').at('contenteditable', true).focus()
			},
			'click .delete': function (ev) {
				ev.preventDefault()
				tweets.remove(this.model)
			},
			'blur .sts': 'close'
		},
		close: function () {
			var sts = this.$('.sts').text()
			this.model.set('sts', sts)
			this.$('.sts').removeAttr('contenteditable')
		},
		model: Tweet(),
		tagName: 'div',
		ren: function () {
			this.$el.empty().A(
					$.sp(this.model.get('un')).K('un'), ': ',
					$.sp(this.model.get('sts')).K('sts'),
					$.a('[edit]').K('edit'), $.a('[delete]').K('delete')
			)
			return this
		}
	})
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
				vw.$el.A(TweetView({model: md}).ren().el)
			})
			return vw
		}
	})
	appView = tweetsView = TweetsView({
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
})

 