cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
cjs.stg = cjs.stage = function (a, b, c, d, e) {
	var stage
	cjs.watchKeys()
	//get by canvas ID.. eh, a sloppy hack?? it ok
	if (A(a)) {
		stage = new cjs.Stage(a[0])
	}
	
	//if you pass it a canvas OR a $canvas object
	else if (O(a)) {
		stage = new cjs.Stage($(a)[0])
	}
	
	
	//create a new canvas
	else {
		stage = new cjs.Stage(
				$.canvas(a, b, c, d, e) [0]
		)
	}
	stage.can = stage.c = $(stage.canvas)
	return stage.tick()
}
cjs.S = function (col) {
	z()
	col = col || 'pink'
	s = cjs.stg(col, 800, 500).A()
	return s
}
cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
	var stage, can1, can2
	can1 = $.canvas(a, b, c)
	can2 = $.canvas('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
	stage = new cjs.Stage(can1[0]).tick()
	stage.c = can1
	stage.HUD = new cjs.Stage(can2[0]).tick()
	return stage
}
HUD = function () {
	z()
	s = cjs.HUD('r', 500, 500).A()
	s.bm('guy')
	s.HUD.A().bm('me', function (b) {
		TR(b)
	})
}
STG2 = function () {
	z();
	return cjs.stage(800, 300).A()
}
mockStage = function () {
	z()
	return s = stage = cjs.stage(800, 500).tick().A()
}
STG = function () {
	z();
	s = cjs.stage(1000, 500).A()
	s.bm('me',
			function (bb) {
				b = bb.drag()
			})
}
NEWSTG = function () {
	z()
	//three ways to make a new stage
	s = cjs.stg('r', 100).A().bm('me')
	s.can.drag()
	c = $.canvas('b', 100).A().drag().XY(400)
	s1 = cjs.stg(c)
	s1.A().bm('me')
	c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
	s2 = cjs.stg(['someId'])
	s2.tick().bm('me')
}
cjs.S = cjs.Stage
$St = function () {
	var g = G(arguments),
			cv, st
	if (S(g.f) && $('#' + g.f).length) {
		cv = g.f
	}
	else if (O(g.f)) {
		cv = $(g.f)[0]
	}
	else {
		cv = S(g.f) ?
				$.c(
						g.f || 'p',
						g.s || 1200,
						g.t || 600,
						g[3], g[4])[0] :
				$.c(
						g.f || 1200,
						g.s || 600,
						g.t, g[3])[0]
	}
	st = new cjs.Stage(cv)
	st.cv = st.c = st.can = $(st.canvas)
	st.cv0 = st.cv[0]
	st.xc = st.cv0.getContext('2d')
	if (!g.n) {
		st.can.A()
	}
	//if (g.p) {st.t() }//.t()
	return st.t()
}
St = function () {
	var g = G(arguments);
	z();
	s = st = $St(
			g[0] || 'p',
			1200, 600
	)
	h = $h(0, 0).a2(s)
	if (g.p) {
		SL(h)
	}
	return s
}
cjs.container = cjs.ct = function (a) {
	return new cjs.Container(a)
}
function stage() {
	cjs.stg = cjs.stage = function (a, b, c, d, e) {
		var stage
		cjs.watchKeys()
		//get by canvas ID.. eh, a sloppy hack?? it ok
		if (A(a)) {
			stage = new cjs.Stage(a[0])
		}
		
		//if you pass it a canvas OR a $canvas object
		else if (O(a)) {
			stage = new cjs.Stage($(a)[0])
		}
		
		
		//create a new canvas
		else {
			stage = new cjs.Stage(
					$.canvas(a, b, c, d, e) [0]
			)
		}
		stage.can = stage.c = $(stage.canvas)
		return stage.tick()
	}
	cjs.S = function (col) {
		z()
		col = col || 'pink'
		s = cjs.stg(col, 800, 500).A()
		return s
	}
	cjs.stageHUD = cjs.stageHUD = cjs.HUD = function (a, b, c) {
		var stage, can1, can2
		can1 = $.canvas(a, b, c)
		can2 = $.canvas('X', Number(can1.W()), Number(can1.H())).P('a').XY(0, 0).opacity(.8)
		stage = new cjs.Stage(can1[0]).tick()
		stage.c = can1
		stage.HUD = new cjs.Stage(can2[0]).tick()
		return stage
	}
	cjs.tripleStage = function (color, w, h) {
		var stage, can0, can1, can2
		can0 = $.can(color, w, h).P('a').XY(0, 0)
		can1 = $.can('X', w, h).P('a').XY(0, 0)
		can2 = $.can('X', w, h).P('a').XY(0, 0)//.opacity(.8)
		stage = new cjs.Stage(can1[0]).tick()
		stage.c = can1
		stage.back = new cjs.Stage(can0[0]).tick()
		stage.back.linGrad = function (col1, col2) {
			col1 = oO('c', col1 || 'b');
			col2 = oO('c', col2 || 'r')
			var h = this.H(), w = this.W()
			this.shape.linGrad([col1, col2], [0, 1], 0, 0, 0, h).dr(0, 0, w, h)
		}
		stage.back.shape = stage.back.shape(0, 0, 'w')
		stage.HUD = new cjs.Stage(can2[0]).tick()
		return stage
	}
	HUD = function () {
		z()
		s = cjs.HUD('r', 500, 500).A()
		s.bm('guy')
		s.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	STG2 = function () {
		z();
		return cjs.stage(800, 300).A()
	}
	mockStage = function () {
		z()
		return s = stage = cjs.stage(800, 500).tick().A()
	}
	STG = function () {
		z();
		s = cjs.stage(1000, 500).A()
		s.bm('me',
				function (bb) {
					b = bb.drag()
				})
	}
	NEWSTG = function () {
		z()
		//three ways to make a new stage
		s = cjs.stg('r', 100).A().bm('me')
		s.can.drag()
		c = $.canvas('b', 100).A().drag().XY(400)
		s1 = cjs.stg(c)
		s1.A().bm('me')
		c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
		s2 = cjs.stg(['someId'])
		s2.tick().bm('me')
	}
}
function write() {
	cjs.chalk = function (text, color) {
		color = oO('c', color || 'white')
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
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
$mugTest = function () {
	z();
	s = cjs.stage(800, 800).A()
	s.mug(function (mug) {
		m = mug
	})
}
function dittoDitto() {

//CONTAINER ////////////////////////////////////////////////////////////////
	cjs.stg = cjs.stage = function (a, b, c, d, e) {
		var stage
		cjs.watchKeys()
		//get by canvas ID.. eh, a sloppy hack?? it ok
		if (A(a)) {
			stage = new cjs.Stage(a[0])
		}
		
		//if you pass it a canvas OR a $canvas object
		else if (O(a)) {
			stage = new cjs.Stage($(a)[0])
		}
		
		
		//create a new canvas
		else {
			stage = new cjs.Stage(
					$.canvas(a, b, c, d, e) [0]
			)
		}
		stage.can = stage.c = $(stage.canvas)
		return stage.tick()
	}
	cjs.S = function (col) {
		z()
		col = col || 'pink'
		s = cjs.stg(col, 800, 500).A()
		return s
	}
	HUD = function () {
		z()
		s = cjs.HUD('r', 500, 500).A()
		s.bm('guy')
		s.HUD.A().bm('me', function (b) {
			TR(b)
		})
	}
	STG2 = function () {
		z();
		return cjs.stage(800, 300).A()
	}
	mockStage = function () {
		z()
		return s = stage = cjs.stage(800, 500).tick().A()
	}
	STG = function () {
		z();
		s = cjs.stage(1000, 500).A()
		s.bm('me',
				function (bb) {
					b = bb.drag()
				})
	}
	s = p = cjs.Stage.prototype
	cjs.chalk = function (text, color) {
		color = oO('c', color || 'white')
		if (O(text)) {
			text = 'x: ' + text.x + ', ' + 'y: ' + text.y
		}
		return new cjs.Text(text, "26px Arial", "white").XY(50, 50)
	}
	CHALK = function () {
		w = b2.mW()
		s = w.s
		s.bm('me')
		text = cjs.chalk('some information ....')
		text2 = cjs.chalk('some more').XY(50, 90)
		s.A(text, text2)
	}
	$mugTest = function () {
		z();
		s = cjs.stage(800, 800).A()
		s.mug(function (mug) {
			m = mug
		})
	}
	NEWSTG = function () {
		z()
		//three ways to make a new stage
		s = cjs.stg('r', 100).A().bm('me')
		s.can.drag()
		c = $.canvas('b', 100).A().drag().XY(400)
		s1 = cjs.stg(c)
		s1.A().bm('me')
		c2 = $.canvas('b', 100).A().id('someId').drag().XY(300, 100)
		s2 = cjs.stg(['someId'])
		s2.tick().bm('me')
	}
}