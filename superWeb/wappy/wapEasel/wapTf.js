TRANSFORM = function () {
	format()
	wMs(function (b, s) {
		b.xy(0, 0)
		b.rgc('+')
		TR(b)
		wMb(function (b) {
			b.xy(50, 50).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(100, 100).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(200, 200).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(300, 300).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(400, 400).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(150, 150).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(250, 250).rgc('+');
			TR(b)
		}, s)
		wMb(function (b) {
			b.xy(350, 350).rgc('+');
			TR(b)
		}, s)
	}, '-')
	s1(bt('rotate', function () {
				s.ch('-')
				wMb(
						function (b, s) {
							s.M(50); //b=Do(bj(b))
							RT(b.xy(400))
							wMb(function (b) {
										b.xy(300).al(.5)
										RT(b, '-')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(200).sxy(1.4), '+')
									}
									, s)
							wMb(function (b) {
										KK(b.xy(100).sxy(.6))
									}
									, s)
						}, s)
			}), $.br(2),
			$button('skew', function () {
				s.ch('-')
				wMb(function (b, s) {
							s.mg(function (b, s) {
								SK(b.xy(300).rgc('+').sxy(1.5))
								s.w(2000).h(2000)
							})
							//b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
						}
						, s)
			}), $.br(2),
			$button('register', function () {
				s.remove()
				wMb(function (b, s) {
					TR(b);
					rg1(b);
					reggy(b)
				}, s)
				wMb(function (b, s) {
					TR(b);
					b.rgc();
					rg1(b);
					reggy(b)
				}, s)
			}),
			$.br(2))
}

 