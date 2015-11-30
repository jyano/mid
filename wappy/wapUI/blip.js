//used for LISTING things (blog posts, etc)
$.blip = blp = function (s, div) {
	
	//topic, datetime, content
	var g = G(arguments),
			s = g[0],
			div = g[1],
			theSpan = $.span(),
			post = s
	post.topic = post.t
	post.user = post.u
	post.datetime = post.dt
	post.content = post.c
	if (g.p) {
		theSpan.A(
				$.button('topic: ' + post.topic,
						function () {
							topic = post.topic;
							tab4.load()
						}),
				$.h3(post.content)
		)
		if (post.datetime) {
			theSpan.A($.h5(dt(post.datetime).dt()))
		}
	}
	else if (g.n) {
		theSpan.A(
				$.button('user: ' + post.user, function () {
					from = post.user;
					tab3.load()
				}),
				$.br(),
				$.button('topic: ' + post.topic, function () {
					topic = s.t;
					tab4.load()
				}),
				$.h3(post.content))
		if (post.datetime) {
			theSpan.A($.h5(dt(post.datetime).dt()))
		}
	}
	else if (g.d) {
		theSpan.A(
				$.button('user: ' + post.user, function () {
					from = post.user;
					tab3.load()
				}),
				$.br(),
				$.h3(post.content)
		)
		if (post.datetime) {
			theSpan.A($.h5(dt(post.datetime).dt()))
		}
	}
	else {
		if (post.datetime) {
			theSpan.A($.h4(dt(post.datetime).dt()))
		}
		theSpan.A(
				$.h1(post.content)
		)
	}
	if (post.du) {
		theSpan.A(
				$.canvas('X', 400).A().fit(post.du)
		)
	}
	theSpan.A($.hr())
	return D(div) ? div.A(theSpan) : theSpan
}

 