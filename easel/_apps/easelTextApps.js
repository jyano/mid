BASELINE = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
}
LINEH = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(
			t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
	)
	s.A(
			t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
	)
	s.A(
			t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
	)
}
LINEW = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
	s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
}
ALIGN = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
		s.dot(500, 500)
	})
	//textAlign
	s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
}
BASELINE = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
}
LINEH = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(
			t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
	)
	s.A(
			t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
	)
	s.A(
			t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
	)
}
LINEW = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
	s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
}
ALIGN = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
		s.dot(500, 500)
	})
	//textAlign
	s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
}
BASELINE = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('baseline: top').XY(300).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
}
LINEH = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(
			t = cjs.text('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
	)
	s.A(
			t2 = cjs.text('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
	)
	s.A(
			t3 = cjs.text('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
	)
}
LINEW = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.A(t = cjs.text('linewidth 0').XY(300).sXY(4).drag().lineW(0))
	s.A(t2 = cjs.text('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
}
ALIGN = function () {
	z()
	s = cjs.stage(1000).A()
	s.bm('me', function (bm) {
		b = bm
		bm.XY(300).sXY(.2)
		s.dot(300, 300)
	})
	s.bm('me', function (bm) {
		b = bm
		bm.XY(500).sXY(.2)
		s.dot(500, 500)
	})
	//textAlign
	s.A(t = cjs.text('linealign left').XY(300).sXY(4).drag()) //default
	s.A(t2 = cjs.text('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
	s.A(t3 = cjs.text('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
	//textBaseline
	s.A(t = cjs.text('baseline: top').XY(500).sXY(4).drag())
	s.A(t2 = cjs.text('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
	s.A(t3 = cjs.text('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
}
function text() {
	BASELINE = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(t = $T('baseline: top').XY(300).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(300).sXY(4).drag().baseline('middle'))
	}//C+
	LINEH = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(
				t = $T('lineheight -100').XY(300).sXY(4).drag().lineH(-100)
		)
		s.A(
				t2 = $T('lineheight 0').XY(300).sXY(4).drag().baseline('bottom').lH(0)
		)
		s.A(
				t3 = $T('lineheight 100').XY(300).sXY(4).drag().baseline('middle').lH(100)
		)
	}//C-
	LINEW = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.A(t = $T('linewidth 0').XY(300).sXY(4).drag().lineW(0))
		s.A(t2 = $T('linewidth null').XY(300).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('linewidth 100').XY(300).sXY(4).drag().baseline('middle').lW(800))
	}//C-
	ALIGN = function () {
		z()
		s = $St(1000).A()
		s.bm('me', function (bm) {
			b = bm
			bm.XY(300).sXY(.2)
		})
		s.bm('me', function (bm) {
			b = bm
			bm.XY(500).sXY(.2)
		})
		//textAlign
		s.A(t = $T('linealign left').XY(300).sXY(4).drag()) //default
		s.A(t2 = $T('linealign right').XY(300).sXY(4).drag().baseline('bottom').align('right'))
		s.A(t3 = $T('linealign center').XY(300).sXY(4).drag().baseline('middle').align('center'))
		//textBaseline
		s.A(t = $T('baseline: top').XY(500).sXY(4).drag())
		s.A(t2 = $T('baseline: bottom').XY(500).sXY(4).drag().baseline('bottom'))
		s.A(t3 = $T('baseline: middle').XY(500).sXY(4).drag().baseline('middle'))
	}//B+
}
function write() {
	CHALK = function () {
		w = b2d.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
}