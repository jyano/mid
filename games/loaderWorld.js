 
	WQ = function () {
		var g = G(arguments), o = F(g.t) ?
		{ob: g.f, fn0: g.s, fn: g.t} :
		{ob: g.f, fn: g.s}
		o.ob = o.ob || {}
		o.fn = o.fn || function (w) {
		}
		w = W(o.ob)
		if (o.fn0) {
			o.fn0(w)
		}
		Q(o.ob.I || _MF, function () {
			o.fn(w)
		})//
	}
//by calling W()._(fn)
// basic manifest will load and your function will get w passsed in
// when it is called (when ready)
// to get an image : // var me = w.i.qB("me")
	 TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
		WQ({}, worldRdy)
		function worldRdy() {
			var me, guy
			w.C('p') // <- WQ({C:'r'})
			w.i.A(Q.b('sun'), Q.b('guy'))
			me = w.i.qB("me")
			me.drag()
		}
	}
	  TXWQ = function () {//needs play 
// with WQ.. just pass in a function to be called when ready
// i dont think it receives anything, it dont need it
// to access an image: var me = Q.b('me')
		WQ({}, worldRdy)
		function worldRdy() {
			var me, guy
			w.C('p') // <- WQ({C:'r'})
			w.i.A(Q.b('sun'), Q.b('guy'))
			me = w.i.qB("me")
			me.drag()
		}
	}
	QU5 = MF = function () {
		W().C('r')
		Q(['me', 'guy', 'chicks', 'sun'], function () {
			w.C('g')
			w.i.A(
					Q.b('me'),
					Q.b('guy')
			)
		})
	}