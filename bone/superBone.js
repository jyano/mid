Bb.M.prototype.idAttribute = '_id'
function mod(){
	$Df = function (ob) {
		return $M({df: ob})
	}
}
function rtr(){
_$r = function (ob) {
	var rt = $R(ob)
	rt._()
	return rt
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
}
function vew(){
	md = Bb.Model.prototype;
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.model
		ob.m = ob.md = ob.m = this
		return Vw(ob)
	}
	md._V = function (ob) {
		return this.V(_V(ob))
	}
	Bb.View.prototype.C$ = function (s) {
		this.$el.C$(s);
		return this
	}
	Bb.eParse = function (e) {
		e = e || {}
		_.e(e, function (v, k) {
			if (k == '$') {
				e['click'] = v
			}
			if (k == '$$') {
				e['dblclick'] = v
			}
		})
		return e
	}
}
function col(){
	vw.C$ = function (s) {
		this.$el.C$(s);
		return this
	}
}
function boneQuery(){
	Bb.tr = Bb.trV = Bb.trVw =  function (ob) {
		ob = _.x(ob || {}, {tagName: 'tr'})
		var view = Bb.V.x(ob)
		return view
	}
	Bb.ul = $.uV = $.ulV = function (ob) {
		ob = ob || {};
		ob.tagName = 'ul';
		return $V(ob)
	} // make a bb view with t:ul
}
function queryBone(){

	$.fn.$V = function (ob) {
		ob = ob || {};
		ob.el = this;
		return $V(ob)
	}//$.fn.V
	
	$.fn.C$ = function () {
		return this.C($r())
	}
}

QVR = function () {
	q = $.dI('d1', 'r', 500, 500)
	Vw = _V({
		ren: function () {
			q.A($.ul(['hello']))
		},
		i: function () {
			this.ren()
		}
	})
	q.V({
		r: function () {
		},
		i: function () {
		}
	})()
}
MDVW = function () {
	md.V = function (Vw, ob) {
		ob = ob || {}
		ob.m = this
		return Vw(ob)
	}
	m = $M({d: {n: 'j', a: 20, o: 'p'}})
	m.V($$V({
		t: 'li', _: 'some-per', k: 'per',
		r: function () {
			this.$el.A('n').A()
		},
		i: function () {
			this.r()
		}
	}))
	_.in(2, function () {
		$.C('R')
		$l('- - --- - - - - ')
		m.l()
	})
	function old() {
		PERVY = function () {
			$.x('n')
			$$V({
				t: 'li', _: 'some-per', k: 'per',
				r: function () {
					this.A('n').A()
				},
				i: function () {
					$l(this.model);
					this.r()
				}
			})({
				m: $M({d: {n: 'j', a: 20, o: 'p'}})
			}) //-> p.V(PerV)
		}
	}
}
$L('mod', 'rtr', 'vew', 'col', 'boneQuery','queryBone')