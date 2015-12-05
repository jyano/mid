Bb = bb = Backbone
Bb.U = Bb.Utility
Bb.S = Bb.Sync
Bb.x = Bb.e = function (ob) {
	ob = ob || {}
	var Ev = Bb.E.extend(ob)
	return function (a, b, c, d) {
		return new Ev(a, b, c, d)
	}
}
Bb.E = Bb.Ev = Bb.Events;
Bb.E.x = Bb.E.extend
Bb.E.b = Bb.E.bind;
Bb.E.tr = Bb.E.trg = Bb.E.trigger
Bb.sEv = function (md) {
	md.b = md.bind
	md.O = md.o$ = md.oAl = function (fn) {
		return this.on('all', fn)
	}//passes event name as 1st ag
	md.oZ = md.oE = md.oEr = function (a, b, c) {
		return this.on('error', a, b, c)
	} //"error" (model_or_collection, resp, options)
// — when model's or collection's request to remote server has failed.
	md.oA = function (fn) {
		return this.on('add', fn || function (m) {
			m.at = m.attributes
			$l('E$???????????? (in md.oA')//E$(m) // a.A(m)
		})
	}//when a md is "added" to cl (model, collection, options)
	md.oC = md.oCh = function (n, fn) {
		var g = G(arguments), o
		o = g.F ? {fn: g.f} : {at: g.f, fn: g.s}
		// "change" (model, options)    "change:[attribute]" (model, value, options)
		return g.at ?
				this.on('change:' + o.at, o.fn) :
				this.on('change', o.fn)
	}//=md.$
	md.oRm = function (a, b, c) {
		return this.on('remove', a, b, c)
	}// "remove" (md, cl, ops)  — when md rmd from a collection.//=md.oH=md.o_
	md.oR = md.oRt = function (n, f) {
		var o = this
		//"route:[name]" (params)
		// — Fired by the router when a specific route is matched.
		// "route" (route, params)
		// — Fired by the router when any route has been matched.
		//"route" (router, route, params)
		// — Fired by history when any route has been matched.
		if (U(f)) {
			return o.on('route', n)
		}
		return o.on('route:' + n, f)
	}
	md.oI = md.oIv = function (a, b, c) {
		//"invalid" (model, error, options)
		// — when a model's validation fails on the client.
		return this.on('invalid', a, b, c)
	}
	md.oSo = function (a, b, c) {
		// "sort" (collection, options) — when the collection has been re-sorted.
		return this.on('sort', a, b, c)
	}
	md.oD = md.oDs = function (a, b, c) {
		// "destroy" (model, collection, options)
		// — when a model is destroyed.
		return this.on('destroy', a, b, c)
	}//=md.oX
	md.oS = md.oSy = function (a, b, c) {
		// "sync" (model_or_collection, resp, options)
		// — when a model or collection has been successfully synced with the server.
		return this.on('sync', a, b, c)
	}
	md.oQ = md.oRq = function (a, b, c) {
		return this.on('request', a, b, c)
	}// "request" (model_or_collection, xhr, options)
// — when a model or collection has started a request to the server.
	md.oRs = function (fn, a, b, c) {
		// "reset" (collection, options)
		// — when the collection's entire contents have been replaced.
		return this.on('reset', fn, a, b, c)
	}
	md.tr = function (a, b) {
		this.trigger(a, b);
		return this
	}
	return md
};
Eve = function () {
	var e = _({}).extend(Backbone.Events)
	e.o = e.bind
	e.e = e.trigger
	return e
}
rtr = ro = rt = Bb.Router.prototype;
vw = Bb.View.prototype;
cl = Bb.Collection.prototype
function tpcsIndexHtml() {
	$('body').A($('<div>').K('container').A(
			$('<h1>').html('Blog App ' + Math.random()),
			$table = $('<table>').K('table')
	))
	$thead = $('<thead>').A(
			$('<tr>').A(
					$('<th>').html('AuthoR'),
					$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
			$('<tr>').A(
					$('<td>').A($('<input>').K('form-control author-input')),
					$('<td>').A($('<input>').K('form-control title-input')),
					$('<td>').A($('<input>').K('form-control url-input')),
					$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog'))))
	$table.A(
			$thead,
			$tbody = $('<tbody>').K('blogs-list'))
	$('.add-blog').on('click', function () {
		blogs.create({
			author: $('.author-input').v_(),
			title: $('.title-input').v_(),
			url: $('.url-input').v_()
		})
	})
}
function loadScripts() {
	$l('tcps:loadScripts')
//$('body').A(  $('<script src="/us.js">') ) //$('body').A(  $('<script src="/string.js">') )
	$.j('/us.js');
	$.j('/string.js')
	$.j('/both.js') //$.j('/jq.js') //$.j('/jqSer.js')
	$.j('/bs.js');
	$.j('/frontOb.js');
	$.j('/handy.js')
	$.j('/sty.js');
	$.j('/rules.js')
	$.j('/flex.js');
	$.j('/bb.js');
	$.j('/bbCore.js')
	$.j('/bbLs.js')
}
$RoApp = function (name, fn) {
	startRtr = function (name) {
		Bb.h.start({
			pushState: true,
			root: "/mvc/" + name + "/"
		})
	}
	$Fn(name, function () {
		Ap = {M: {}, V: {}, C: {}}
		$l('name: ' + (name = _.tU(name)))
		$rtHeader(name)
		d = $.dI('ct').fS(40)
		fn();
		startRtr(name)
	})
}
$rR = function (ob) {
	return _$r({r: ob})
}
Ap = {M: {}, C: {}, V: {}, T: {}}
Bb.M = Bb.Model;
Bb.M.x = Bb.M.extend
md = Bb.Model.prototype;
Bb.sEv(md)
md.g = md.get;
md.s = function (a, b, c) {
	var md = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ? true : false
		}
	}
	md.set(a, b, c)
	return md
}
md.sv = md.S = md.save
md.at = function () {
	return this.attributes
}
md.hC = function (at) {
	var md = this, g = G(arguments), o
	o = g.F ? {fn: g.f} : F(g.s) ?
	{at: g.f, fn: g.s} : {}
	if (o.fn) {
		if (md.hC(o.at)) {
			o.fn()
		}
		return this
	}
	return this.hasChanged(at)
}
md.a2 = function (a) {
	if (!this.q) {
		return this
	}
	return this.q.a2(a)
}
md.jS = md.tS = function () {
	return _.jS(this.J())
}
md.j = md.J = md.tJ = md.toJSON
md.$l = md.lJ = function () {
	return $l(this.jS())
}
md.l = function () {
	$l(JSON.stringify(this.toJSON()))
	return this
}
md.l1 = md.lT1 = md.lTo1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
md.l2 = md.lT = md.lTo = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
__M = function (ob) {
	ob = ob || {} // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s} //o=o||{}
	ob.initialize = ob.initialize || ob.i || function () {
	}
	function init() {
		if (ob.fn) {
			ob.i = o.fn
		}
		ob._i = ob.initialize
		if (!F(ob.initialize) && F(ob.i)) {
			ob.initialize = ob.i
		}
		ob.initializeX = function (op) {
			this.q = this.$el
			this.a2 = function (a) {
				return this.q.a2(a)
			}
			//$l('gen init..')
			this.g = function (a) {
				if (a) {
					return this.model.get(a)
				}
			}
			this.A = function (ob) {
				var g = G(arguments),
						q = this.q
				if (S(ob)) {
					ob = this.g(ob)
				}
				if (ob) {
					q.A(ob)
				}
				if (U(ob) || g.p) {
					q.A()
				}
				return q
			}
			_.b(ob._i, this)(op)
		}
	}
	
	ob.className = ob.className || ob.k
	ob.defaults = ob.defaults || ob.df || ob.d
	ob.events = ob.events || ob.ev || ob.e
	ob.id = D(ob.id) ? ob.id : ob.x
	ob.idAttribute = ob.idAttribute || ob._id
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.render = ob.render || ob.rr || ob.rn || ob.r
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.validate = ob.validate || ob.v
	return Bb.M.x(ob || {})
}
_M = function (ob, a, b, c) {
	ob = ob || {}
	var g = G(arguments), Md;
	Md = __M(ob, a, b, c)
	return function (ob, q) {
		var md = new Md(ob || {})
		if (q) {
			md.a2(q)
		}
		return md
	}
}
$M = function (op, a, b, c) {
	//if (U(op)) {return _$M()}
	return _M(op, a, b, c)()
}
$Df = function (ob) {
	return $M({df: ob})
}
M_ = $m = function (ob) {
	var m = new Bb.Model(ob);
	return m
}
md.j = function () {
	return this.toJSON()
}
md.idAttribute = '_id'
md.V = function (Vw, ob) {
	ob = ob || {}
	ob.m = this
	return Vw(ob)
}
md._V = function (ob) {
	return this.V(_V(ob))
}
M$ = function (ob) {
	alert('M$')
	ob = O(ob) ? ob : {}
	var Md, md
	Md = Bb._M(ob)
	md = new Md(ob)
	return md
}
toMdOb = function (a) {
	alert('toMdOb')
	a = O(a) ? a : {}
	if (a.i) {
		a.initialize = _v(a.i)
	}
	if (a.I) {
		a.initialize = _v(a.I)
	}
	if (a.d) {
		a.defaults = a.d
	}
	if (a.D) {
		a.defaults = a.D
	}
	if (a.v) {
		a.validate = a.v
	}
	if (a.V) {
		a.validate = a.V
	}
	a.idAttribute = '_id'
	return a
}
sMd = function (m) {
	alert('sMd')
	m.at = m.attributes
	m.s = function (a, b, c) {
		if (O(a) && O(b)) {
			if (b.v) {
				b.validate = b.v ? true : false
			}
		}
		if (S(a) && O(c)) {
			if (c.v) {
				c.validate = c.v ? true : false
			}
		}
		return m.set(a, b, c)
	}
	m.g = m.get
	m.j = m.toJSON
	m.o = m.on
	Bb.sEv(m)
	return m
}
bbM = function (a) {
	alert('bbM')
	a = ob(a)
	if (a.i) {
		a.initialize = _v(a.i)
	}
	if (a.I) {
		a.initialize = _v(a.I)
	}
	if (a.d) {
		a.defaults = a.d
	}
	if (a.D) {
		a.defaults = a.D
	}
	if (a.v) {
		a.validate = a.v
	}
	if (a.V) {
		a.validate = a.V
	}
	a.idAttribute = "_id"
	var m = Backbone.Model.extend(a)
	sMd(m)
	return function (a) {
		var o = new m(a)
		sMd(o)
		return o
	}
}
//md.o = function () {var g = G(arguments);this.on.apply(this, g)}
/*
 // escape   has     unset    clear – parse  pa P – clone  cl– toJSON
 – url     u – urlRoot  uR– sync   sy fetch  F  – save  S – destroy
 – validate    vl – validationError  vE – isValid   iV
 – attributes– changed  – isNew iN – hasChanged  hC  – previous p
 – previousAttributes  pA – changedAttributes cA
 */
//Bb._M=function(ob){return  Bb.M.extend(ob)}
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
Bb.C = Bb.Collection;
Bb.C.x = Bb.C.extend;
cl = Bb.Collection.prototype;
Bb.sEv(cl)
cl.g = cl.get
cl.s = function (a, b, c) {
	var cl = this
	if (O(a) && O(b)) {
		if (b.v) {
			b.validate = b.v ? true : false
		}
	}
	if (S(a) && O(c)) {
		if (c.v) {
			c.validate = c.v ?
					true : false
		}
	}
	cl.set(a, b, c)
	return cl
}
cl.A = cl.a = function () {
	var cl = this,
			g = G(arguments), ar
	this.add(g.A ? g.f : g);
	return this
}
cl.rm = cl.r = cl.remove
cl.cr = cl.create
cl.fe = cl.fetch
cl.att = cl.atr = cl.attributes
cl.b = cl.bind
cl.tJ = cl.j = cl.toJSON
cl.lJ = cl.l = function () {
	$l(this.toJSON());
	return this
}
cl.ls2 = cl.l2 = function (a, b, c, d) {
	return this.listenTo(a, b, c, d)
}
cl.ls1 = cl.l1 = function (a, b, c, d) {
	return this.listenToOnce(a, b, c, d)
}
cl.fl = cl.filter
cl.wo = cl.without
cl.la = cl.last
cl.V = function (Vw, ob) {
	ob = ob || {}
	ob.m = this
	return Vw(ob)
}
//cl.o= function(){var g=G(arguments); this.on.apply(this, g) }
cl.tr = function (a, b) {
	this.trigger(a, b);
	return this
}
cl.oRm = function (a, b, c) {
	return this.on('remove', a, b, c)
}   // "remove" (model, collection, options) — when a model is rcl from a collection.
cl.oX = cl.oD = function (fn) {
	return this.on('destroy', fn)
} // "destroy" (model, collection, options) — when a model is destroyed.
cl.oR = cl.oRs = function (fn) {
	return this.on('reset', fn)
}  // "reset" (collection, options) — when the collection's entire contents have been replaced.
cl.oSo = function (a, b, c) {
	return this.o('sort', a, b, c)
}    // "sort" (collection, options) — when the collection has been re-sorted.
cl.oC = cl.oCh = function (n, fn) {
	if (U(fn)) {
		return this.on('change', n)
	}
	return this.on('change:' + n, fn)
} // "change" (model, options)  — when a model's attributes have changed. // "change:[attribute]" (model, value, options)  — when a specific attribute has been updated.
cl.oQ = cl.Rq = function (mdCl, fn) {
	return this.on('request', fn)
}      // on start of md|cl SERVER request function passed(md_or_cl,  xhr, op)
cl.oS = cl.oSy = function (a, b, c) {
	return this.o('sync', a, b, c)
} // "sync" (model_or_collection, resp, options) — when a model or collection has been successfully synced with the server.
cl.oZ = cl.oE = cl.oEr = function (a, b, c) {
	return this.o('error', a, b, c)
} //"error" (model_or_collection, resp, options) — when model's or collection's request to remote server has failed.
cl.oIv = function (a, b, c) {
	return this.on('invalid', a, b, c)
}  //"invalid" (model, error, options) — when a model's validation fails on the client.
cl.o$ = cl.oAl = function (fn) {
	return this.on('all', fn)
}   //passes event name as 1st ag
cl.oA = function (fn) {
	fn = fn || function (m) {
		m.at = m.attributes
		m.s = function (a, b, c) {
			if (O(a) && O(b)) {
				if (b.v) {
					b.validate = b.v ? true : false
				}
			}
			if (S(a) && O(c)) {
				if (c.v) {
					c.validate = c.v ? true : false
				}
			}
			return m.set(a, b, c)
		}
		m.g = m.get
		m.j = m.toJSON
		m.o = m.on
		E$(m)
		a.A(m)
	}
	return this.on('add', fn)
} // "add" (model, collection, options) — when a model is added to a collection.
cl.j = function () {
	return this.toJSON()
}
_C = function (ob) {
	_$$C = function (ob) {
		ob = ob || {}
		//var g=G(arguments), o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
		if (!F(ob.initialize) && F(ob.i)) {
			ob.initialize = ob.i
		}
		if (!O(ob.collection) && (O(ob.cl) || O(ob.c))) {
			ob.collection = ob.cl || ob.c
		}
		if (!O(ob.model) && (O(ob.md) || O(ob.m))) {
			ob.model = ob.md || ob.m
		}
		//ob.model= ob.model || ob.md || ob.m
		//if(ob.m){ob.model= ob.m}
		ob.defaults = ob.defaults || ob.df || ob.d
		ob.id = D(ob.id) ? ob.id : ob.x
		ob.idAttribute = ob.idAttribute || ob._id
		ob.events = ob.events || ob.ev || ob.e
		ob.validate = ob.validate || ob.v
		function more() {
			if (ob.fn) {
				ob.i = ob.fn
			}
			ob.initialize = ob.initialize || ob.i
			ob._i = ob.initialize
			ob.id = D(ob.id) ? ob.id : ob.x
			ob.className = ob.className || ob.k
			ob.tagName = ob.tagName || ob.tn || ob.t
			ob.defaults = ob.defaults || ob.df || ob.d
			ob.events = ob.events || ob.ev || ob.e
			ob.render = ob.render || ob.rr || ob.r
			ob.tagName = ob.tagName || ob.tn || ob.t
			ob.collection = ob.collection || ob.cl || ob.c
			// ob.render= ob.render || ob.rr || ob.r
			ob.render = ob.render || ob.rn
		}
		
		return Bb.C.x(ob || {})
	}
	var Cl = _$$C(ob)
	return function (ob, b, c, d) {
		ob = ob || {}
		var cl
		ob.collection = ob.collection || ob.cl || ob.c
		ob.model = ob.model || ob.md || ob.m
		cl = new Cl(ob, b, c, d) //if(q){cl.a2(q)}
		cl.q = cl.$el
		cl.a2 = function (a) {
			return cl.q.a2(a)
		}
		cl.g = function (a) {
			if (a) {
				return cl.model.get(a)
			}
		}
		/*
		 cl.A=function(ob){
		
		 var g=G(arguments)
		 if(S(ob)){ob = cl.g(ob)}
		 if(ob){this.$el.A(ob)}
		 if(U(ob) || g.p){ this.$el.A() }
		 return this.$el
		 }
		 //_.b(ob._i,cl) (op)
		 */
		return cl
	}
} // = $$C 
$C = $Cl = function (ob, a, b, c) {
	return _C(ob, a, b, c)()
}
C_ = function (ob) {
	return _C()(ob)
	C$Alt = function (a) {
		var b, c
// $.ext(Bb.Collection)
		//if(U(a)){var c=new Bb.Collection; return sCl(c)}
		a = O(a) ? a : {}
		if (a.m) {
			a.model = a.m
		}
		c = Bb.C.x(a)
		return function (o) {
			o = O(o) ? o : {}
			//if(o.m){o.model= o.m}
			b = new c(o)
			return b
		}
	}
	C$Alpha = function (a) {
		var b, c
// $.ext(Bb.Collection)
		//if(U(a)){var c=new Backbone.Collection; return sCl(c)}
		a = O(a) ? a : {}
		if (a.m) {
			a.model = a.m
		}
		c = Backbone.Collection.extend(a)
		return function (o) {
			o = O(o) ? o : {}
			//if(o.m){o.model= o.m}
			b = new c(o)
			o.o = o.on
			E$(o)
			return b
		}
	}
} //C$ =
$c = $cl = function (ob) {
	var m = new Bb.Collection(ob);
	return m
}
C$ = function (a) {
	var b, c
// $.ext(bb.Collection)
	//if(U(a)){var c=new bb.Collection; return sCl(c)}
	a = O(a) ? a : {}
	if (a.m) {
		a.model = a.m
	}
	c = bb.Collection.extend(a)
	return function (o) {
		o = O(o) ? o : {}
		//if(o.m){o.model= o.m}
		b = new c(o)
		o.o = o.on
		E$(o)
		return b
	}
}
Bb.V = Bb.View;
Bb.V.x = Bb.V.extend;
vw = Bb.View.prototype;
Bb.sEv(vw)
vw.A = function (ob) {
	var g = G(arguments)
	if (S(ob)) {
		ob = this.g(ob)
	}
	if (ob) {
		this.$el.A(ob)
	}
	if (U(ob) || g.p) {
		this.$el.A()
	}
	return this
}
vw.a2 = function (a) {
	if (this.$el && this.$el.a2) {
		return this.$el.a2(a)
	}
}
vw.g = function (m) {
	if (this.model) {
		return this.model.get(m)
	}
	else if (this.collection && this.collection.get) {
		return this.collection.get(m)
	}
}
vw.s = function (a, b) {
	this.model.set(a, b);
	return this
}
vw.E = function () {
	this.$el.E();
	return this
}
vw.cl = vw.eCl = vw.e = function (fn) {
	var cl = (this.collection || this.cl)
	if (U(fn)) {
		return cl
	}
	if (cl) {
		_.e(cl, fn)
	}
	return this
}
vw.eAlt = function (a, b) {
	var cl = this.collection || this.cl;
	cl.each(a, b)
	return this
}
vw.ECl = function (fn, cl) {
	this.E();
	if (cl) {
		_.e(cl, fn)
		return this
	}
	return this.eCl(fn)
}
vw.eM = function (fn) {
	_.e(this.model, fn);
	return this
}
vw.h = function (a) {
	if (U(a)) {
		return this.$el.h()
	}
	this.$el.h(a);
	return this
}//=vw.H
vw.j = function (fn) {
	var vw = this, j
	if (this.collection) {
		j = this.collection.toJSON()
		if (F(fn)) {
			_.e(j, fn);
			return vw
		}
		return j
	}
	if (this.model) {
		return this.model.toJSON()
	}
}
vw.oC = function () {
	if (!this.model) {
		return false
	}
	this.model.oC.apply(this.model, arguments)
	return this
}
vw.C$ = function (s) {
	this.$el.C$(s);
	return this
}
vw.ds = function () {
	if (this.model) {
		this.model.destroy()
	}
}
V__ = function (ob) {
	ob = ob || {}
	ob.id = D(ob.id) ? ob.id :
	ob.x || ob._ || ob['#']
	ob.model = ob.model || ob.md || ob.m
	ob.collection = ob.collection || ob.cl || ob.c
	ob.tagName = ob.tagName || ob.tn || ob.t
	ob.className = ob.className || ob.k //if (ob.k) {ob.className = ob.k}
	ob.defaults = ob.defaults || ob.df || ob.d
	//ob.render = ob.render ||ob.R|| ob.rn || ob.rr || ob
	ob.events = ob.events || ob.E || ob.ev || ob.e // || {$: function () {}}//; EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}; _.e(ob.events, function (v, k) {if (EVob[k]) {ob.events[EVob[k]] = v}})
	//ob.el = ob.el || ob.q
	//if (ob.q) {ob.el = q}
	if (F(ob.i)) {
		ob.initialize = ob.i
	}
	return ob
}
__V = function (ob) {
	return Bb.V.x(V__(ob))
}
_V = function (ob, ob2) {
	var Vw = __V(ob)
	V__(ob2)
	var fn = function (ob, q) {
		var vw = new Vw(ob);
		vw.md = vw.model;
		vw.cl = vw.collection
		vw.q = vw.$el
		if (q) {
			alert('see $$V');
			vw.a2(q)
		}
		return vw
	}
	return ob2 ? fn(ob) : fn
}
$V = function (ob, a, b, c) {
	return _V(ob, a, b, c)()
}
V_ = $v = function (ob) {
	return new Bb.View(ob);
}
$.uV = $.ulV = function (ob) {
	ob = ob || {};
	ob.t = 'ul';
	return $V(ob)
} // make a bbV with t:ul
$.fn.V = function (ob) {
	ob = ob || {};
	ob.el = this;
	return $V(ob)
}
peep = [{n: 'a', a: 11}, {n: 'b', a: 46}, {n: 'c', a: 13}]
Bb.R = Bb.Router;
Bb.R.x = Bb.R.extend
rtr.n = function (url, op) {
	this.navigate(url, op);
	return this
}
rtr.N = function (url) {//normal navigate,
// but i change the default
// to auto trigger the route fn
	return this.n(url, {trigger: true})
}
rtr.rt = function (rt, fn) {
	var rtr = this
	if (O(rt)) {
		_.e(rt, function (v, k) {
			rtr.rt(k, v)
		})
	}
	else {
		this.on('route:' + rt, fn)
	}
	return this
}  // rtr.A = ro.oR =
rtr.rp = function (url, op) {
	return this._n(url, _.x({replace: true},
			G(arguments).n ? {trigger: true} : {}))
}//navigate: replace
_R = function (ob) {//metaClass
	ob = ob || {}
	if (ob.i) {
		ob.initialize = ob.i
	}
	if (ob.$) {
		ob.initialize = function () {
			Bb.h.start({pushState: true})
			if (F(ob.$)) {
				ob.$()
			}
		}
	}
	if (ob.x) {
		ob.index = ob.x
	}
	if (ob.h) {
		ob.home = ob.h
	}
	ob.routes = ob.R ? ob.R : ob.routes || ob.rt || ob.r || {}
	ob.routes[''] = ob.routes[''] || 'index'
	ob.routes = _.x({'': '_'}, ob.routes)
	ob.routes['*other'] = 'd'
	ob = _.x({
		_: function () {
			$l('INDEX ( _ ) ')
		},
		d: function (other) {
			$l('DEFAULT(d): "' + other + '"')
		}
	}, ob)
	return Bb.R.x(ob)
	//return function (a, b, c, d) {return new Rt(a, b, c, d)}
} //metaClass.. no need for 'new' //= $$R
$R = function (ob) {
	var Rt = _R(ob)
	var rt = new Rt()
	rt._ = function () {
		Bb.history.start()
	}
	rt.$ = function () {
		Bb.history.start({pushState: true})
	}
	return rt
}
_$r = function (ob) {
	var rt = $R(ob)
	rt._()
	return rt
}
Bb.h = Bb.history
Bb.h.tr = Bb.h.trigger
Bb.h.s = Bb.h.start
Bb.H = Bb.History