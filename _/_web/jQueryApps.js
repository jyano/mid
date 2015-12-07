JQ1=MAG=FRIDGEMAG = function () {
	z();
	word = function (text, c1, c2) {
		var s = $.sp(text).C(c1, c2).A().drag()
		return s
	}
	w = word('hello', 'b', 'g');
	word('sicko', 'g', 'b');
	word('why, i oughta..', 'p', 'x');
	word('it was raining..', 'j', 'k');
	word('who ya gonna call?', 'h', 'i');
	word('dag nabit!', 'f', 'g');
	word('i like', 'd', 'e');
	word('tomorrow', 'a', 'c');
	word('me', 'r', 'b')
}
JQ2=BOR=BORDERS = function () {
	z();
	$.fn.an = $.fn.animate
	_.t(10, change)
	function change() {
		$.i('me', 100).A().C('g')
				.css(
				{
					borderStyle: 'dashed', borderWidth: '20px'
				}
		)
				.animate(
				{
					"border-top-width": 10
				}, 1000
		)
				.an({"border-bottom-width": 10}, 1000)
				.an({"border-left-width": 10}, 1000)
				.an({"border-right-width": 10}, 1000)
				.an({"padding-top": 10}, 1000)
				.an({"padding-bottom": 10}, 1000)
				.an({"padding-left": 10}, 1000)
				.an({"padding-right": 10}, 1000)
				.an({"margin-top": 10}, 1000)
				.an({"margin-bottom": 10}, 1000)
				.an({"margin-left": 10}, 1000)
				.an({"margin-right": 10}, 1000)
				.an({"margin-top": 0}, 1000)
				.an({"margin-bottom": 0}, 1000)
				.an({"margin-left": 0}, 1000)
				.an({"margin-right": 0}, 1000)
				.an({"padding-top": 0}, 1000)
				.an({"padding-bottom": 0}, 1000)
				.an({"padding-left": 0}, 1000)
				.an({"padding-right": 0}, 1000)
				.an({"border-top-width": 0}, 1000)
				.an({"border-bottom-width": 0}, 1000)
				.an({"border-left-width": 0}, 1000)
				.an({"border-right-width": 0}, 1000)
	}
	
	/*
	 $.img('me').WH(100).A().C('g').bs('-')  //bs??
	
	 .j({bt: 40}, 1000)
	
	 .j({bb: 40}, 1000)
	 .j({bl: 40}, 1000)
	 .j({br: 40}, 1000)
	 .j({gt: 40}, 1000)
	 .j({gb: 40}, 1000)
	 .j({gl: 40}, 1000).j({gr: 40}, 1000).j({mt: 40}, 1000)
	 .j({mb: 40}, 1000).j({ml: 40}, 1000).j({mr: 40}, 1000)
	 .j({mt: 0}, 1000).j({mb: 0}, 1000).j({ml: 0}, 1000).j({mr: 0}, 1000)
	 .j({gt: 0}, 1000).j({gb: 0}, 1000).j({gl: 0}, 1000).j({gr: 0}, 1000)
	 .j({bt: 0}, 1000)
	 .j({bb: 0}, 1000).j({bl: 0}, 1000).j({br: 0}, 1000)
	 };
	 */
}
JQ3=HOVERBOX = function () {
	z();
	d = $.d('o', 500, 500, '+').id('test')
	y = $.c('p', 400).K('box').hd();
	d.A(y);
	$('#test').hover(function () {
		$('.box').stop().fadeTo(200, 1)
	}, function () {
		$('.box').stop().fadeTo(200, 0)
	})
}
JQ4=TANGLE = function () {
	z()
	a = $.divA('r', 50, 50).XY(50).A().pad(10)
	b = $.divA('b', 100, 100).XY(100).A().pad(10)
	c = $.divA('g', 200, 200).XY(200).A().pad(10)
	d = $.divA('y', 400, 400).XY(400).A().pad(10)
	y = function (aa, bb, cc, dd) {
		if (aa && U(bb)) {
			aa.A().P('a')
		}
		if (bb) {
			bb.A(aa.P('static'))
		}
		if (dd) {
			dd.A(cc.P('s'))
		}
	}
}
 
///
 