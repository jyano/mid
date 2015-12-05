$.sty=function(h){
	var styleTag=$('<style>').at({type:'text/css'});
	styleTag.h(h)
	return styleTag
}

$rule=function(sel,decs,rulesOb){
	var str
	var SelOb={
		bd:'body',bt:'button',
		sc:'section',nv:'nav',d:'div',
		i:'img',ip:'input'
	}
	if(A(sel)){
		alert('$rule')
		sel='{'+sel[0]+':'+sel[1]+'; '+'}'
	}
	sel=sel.replace('_','.')
		.replace('$','#')
	_.e(
		SelOb,function(v,k){
			if(sel==k){
				sel=v
			}
		}
	)
	return sel+' '+$decBlk(decs,rulesOb)
}
$rules=function(rulesOb){
	var rulesStr='\n\n';
	_.e(
		rulesOb,function(decs,sel){
			rulesStr+=$rule(sel,decs,rulesOb)+'\n'
		}
	)
	rulesStr+='\n'
	return rulesStr
}
$S=$CSS=function(rulesOb){
	var rulesStr
	if(!rulesOb){
		return $l($('style').oh())
	}
	rulesStr=$rules(rulesOb)
	$('head').A($.sty(rulesStr))
	return rulesStr
}
$decBlk=function(decs,rulesOb){
	var decBlkStr=' ',DECS={}
	if(S(decs)){
		$l('$decBlk');
		return decs
	} //for @media ??
	if(decs.pl){
		plugin=function(decsOb,plOb){
			_.e(
				plOb,function(v,k){
					$S.pg[k].apply(decsOb,v)
				}
			)
			return decsOb
		}
		plugin(decs,decsOb.pl)
	}
	if(decs.mx){
		//_.e(decs.mx, function (v, k) {$S.mx[k].apply(decs, v)})
		mixin=function(decsOb,rulesOb){
			//tries to extend from one of its own first
			if(rulesOb&&rulesOb[decsOb.mx]){
				_.x(decsOb,rulesOb[decsOb.mx])
			}
			//then goes to global ($S.mx)
			else{
				_.x(decsOb,$S.mx[decsOb.mx])
			}
		}
		mixin(decs.mx,rulesOb)
	}
	_.e(
		decs,function(v,k){
			var fn
			if(k!=='mx'&&k!=='pl'){
				if(A(v)){
					$l('$decBlk - plugin!');
					$d(v)
					fn=$S.fn[_.f(v)]
					if(F(fn)){
						DECS[oO('s',k)]=fn.apply(null,_.r(v))
					}
					else{
						$l('$decBlk fn not a fn!!')
						if($CSS.df[k]){
							DECS[oO('s',k)]=$CSS.df[k][_.f(v)]
						}
					}
					return
				}
				DECS[oO('s',k)]=(N(v)&&(v>10))?
								String(v)+'px':
								oO(k,v,'R')
			}
		}
	)
	_.e(
		DECS,function(v,k){
			decBlkStr+=k+':'+v+'; '
		}
	)
	return '{ '+decBlkStr+'}'
}
//for meta (see Grail)
$subRules=function(rulesOb){// GRAIL CALLS THIS
	return '{'+$rules(rulesOb)+'}'
	// GRAIL CALLS THIS
}
//to extend
$S.fn={
	// (value-)helper functions:
	// lets you write/call functions that
	//produce a complicated value to a
	//particular property,
	// so you don't have to write out
	// the full location of the function
	// -helps with namespacing
}
$S.fn.B=$S.fn.bor=function(c){return '8px solid '+oO('c',c||'z')}
$S.mx={
	// this lets you associate a selector with a bunch
	// of declarations at once, and you can add more, too
}
$S.mx.icon={
	transition:'background-color ease .2s',
	margin:'0 .5em'
}
$S.pl={
	// these are functions that take pams
	// and ctx-bound to the dec obj
	// so its main use is to add decs directly on it
	// but one function can add multiple decs
	//(plugins)
}
$S.df={}
$S.df.B={}
$S.df.B.b='1px blue border'
 function jQSty(){
	 $load(
			 'sCss', 'backg', 'color',
			 'boxDims', 'text', 'placement'
	 )
	 function placement() {
		 $.fn.dp = $.fn.display = function (display) {
			 if (U(display)) {
				 return this.css('display')
			 }
			 this.css('display', display);
			 return this
		 }
		 $.fn.ov = $.fn.overflow = function (overflow) {
			 if (U(overflow)) {
				 return this.css('overflow')
			 }
			 this.css('overflow', overflow);
			 return this
		 }
		 $.fn.P = $.fn.p = function (pos, x, y) {
			 var e = this, g = G(arguments)
			 if (g.u) {
				 return e.css('position')
			 }
			 e.css('position', oO('p', pos))
			 if (N(g.s)) {
				 e.X(g.s)
			 }
			 if (g.t) {
				 e.Y(g.t)
			 }
			 return e
		 }
		 $.fn.ab = $.fn.abs = function (x, y) {
			 var e = this
			 return e.P('a', x, y)
		 }
		 $.fn.float = function (float) {
			 if (U(float)) {
				 return this.css('float')
			 }
			 this.css('float', float);
			 return this
		 }
		 function flex() {
			 $.fn.fl = function () {
				 this.css('display', 'flex')
				 return this
			 }
			 $.fn.$J = function (a) {
				 this.css('justify-content', a)
				 return this
			 }
			 $.fn.$I = function (a) {
				 this.css('align-items', a)
				 return this
			 }
			 $.fn.$C = function (a) {
				 this.css('align-content', a)
				 return this
			 }
		 }
		
		 flex()
		 function xyz() {
			 $.fn.os = function () {
				 var os = this.offset()
				 return os
			 }
			 $.fn.zi = $.fn.zIndex = function (z) {
				 if (U(z)) {
					 return this.css('z-index')
				 }
				 this.css('z-index', z);
				 return this
			 }
			 $.fn.X = function (l) {
				 var q = this, g = G(arguments)
				 if (N(l)) {
					 q.css(
							 'left',
							 g.p ? q.X() + l :
									 l
					 )
					 return q
				 }
				 l = q.css('left')
				 return l == 'auto' ? 'auto' : parseInt(l)
				 /*
				  $.fn.X = $.fn.left = function (left) {
				  if (N(left)) {
				  return this.css('left', left)
				  }
				  var left = this.css('left')
				  if (left == 'auto') {
				  return 'auto'
				  }
				  return parseInt(left)
				  }
				  */
			 }
			 $.fn.Y = $.fn.top = function (top) {
				 if (N(top)) {
					 return this.css('top', top)
				 }
				 var top = this.css('top')
				 if (top == 'auto') {
					 return 'auto'
				 }
				 return parseInt(top)
				 /*
				  $.fn.Y = $.fn.top = function (top) {
				  if (N(top)) {
				  return this.css('top', top)
				  }
				  var top = this.css('top')
				  if (top == 'auto') {
				  return 'auto'
				  }
				  return parseInt(top)
				  }
				  */
			 } //$.fn.t
			 $.fn.XY = function (x, y) {
				 x = N(x) ? x : 0
				 if (U(y)) {
					 y = x
				 }
				 return this.X(x).Y(y)
				 /*
				  $.fn.XY = function (x, y) {
				  x = N(x) ? x : 0
				  if (U(y)) {
				  y = x
				  }
				  return this.X(x).Y(y)
				  }
				  */
			 }
			 $.fn.L = $.fn.l = $.fn.left = function (l) {
				 var q = this, g = G(arguments)
				 if (N(l)) {
					 q.css('left', l)
					 return q
				 }
				 l = q.css('left')
				 return l == 'auto' ? 'auto' : q.position().left
				 function old() {
					 $.fn.L = function (n) {
						 if (U(n)) {
							 return this.css('left')
						 }
						 this.css('left', n)
						 return this
					 }
				 }
			 }
			 $.fn.R = $.fn.rit = function (right) {
				 if (U(right)) {
					 return this.css('right')
				 }
				 this.css('right', right)
				 return this
			 }
			 $.fn.LR = function (l, r) {
				 var q = this
				 if (O(l)) {
					 r = l.r;
					 l = l.l
				 }
				 if (N(l)) {
					 q.L(l)
				 }
				 if (N(r)) {
					 q.R(r)
				 }
				 return q
			 }
			 $.fn.bot = $.fn.B = function (bottom) {
				 if (U(bottom)) {
					 return this.css('bottom')
				 }
				 this.css('bottom', bottom)
				 return this
			 }
		 }
		
		 xyz()
	 }
	
	 function boxDims() {
		 function wh() {
			 $.fn.ouH = $.fn.outerHeight
			 $.fn.W = function (w) {
				 return w ? this.width(w) : this.width()
			 }
			 $.fn.H = function (h) {
				 return h ? this.height(h) : this.height()
			 }
			 $.fn.WH = function (w, h) {
				 h = h || w;
				 return this.W(w).H(h)
			 }
			 $.fn.MW = $.fn.maxW = function (a) {
				 return this.css('max-width', a)
			 }
			 $.fn.mW = $.fn.minW = function (a) {
				 return this.css('min-width', a)
			 }
			 $.fn.mH = $.fn.minH = function (a) {
				 return this.css('min-height', a)
			 }
			 $.fn.maxH = function (a) {
				 return this.css('max-height', a)
			 }
		 }
		
		 function mar() {
			 $.fn.mgT = function (a) {
				 return this.css("margin-top", a || 0)
			 }
			 $.mar = function () {
				 var g = G(arguments), o
				 o = N(g[3]) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g[3] + 'px' :
						 N(g.t) ? g.f + 'px ' + g.s + 'px ' + g.t + 'px ' + g.f + 'px' :
								 N(g.s) ? g.f + 'px ' + g.s + 'px ' + g.s + 'px ' + g.f + 'px' :
										 N(g.f) ? g.f + 'px ' + g.f + 'px ' + g.f + 'px ' + g.f + 'px' :
												 '10px 10px 10px 10px'
				 return o
			 }
			 $.fn.mar = function (margin) {
				 if (U(margin)) {
					 return this.css('margin')
				 }
				 this.css('margin', margin);
				 return this
			 }
			 $.fn.marBottom = function (margin) {
				 if (U(margin)) {
					 return this.css('marginBottom')
				 }
				 this.css('marginBottom', margin);
				 return this
			 }
			 $.fn.marTop = function (margin) {
				 if (U(margin)) {
					 return this.css('marginTop')
				 }
				 this.css('marginTop', margin);
				 return this
			 }
			 $.fn.marLeft = function (margin) {
				 if (U(margin)) {
					 return this.css('marginLeft')
				 }
				 this.css('marginLeft', margin);
				 return this
			 }
			 $.fn.marRight = function (margin) {
				 if (U(margin)) {
					 return this.css('marginRight')
				 }
				 this.css('marginRight', margin);
				 return this
			 }
			 $.fn.marHor = function (a) {
				 return this.marLeft(a).marRight(a)
			 }
			 $.fn.marVer = function (a) {
				 return this.marTop(a).marBottom(a)
			 }
			 $.fn.mar = function (margin) {
				 if (U(margin)) {
					 return this.css('margin')
				 }
				 this.css('margin', margin);
				 return this
			 }
			 $.fn.mB = $.fn.marBottom = function (margin) {
				 if (U(margin)) {
					 return this.css('marginBottom')
				 }
				 this.css('marginBottom', margin);
				 return this
			 }
			 $.fn.mT = $.fn.marTop = function (margin) {
				 if (U(margin)) {
					 return this.css('marginTop')
				 }
				 this.css('marginTop', margin);
				 return this
			 }
			 $.fn.mL = $.fn.marLeft = function (margin) {
				 if (U(margin)) {
					 return this.css('marginLeft')
				 }
				 this.css('marginLeft', margin);
				 return this
			 }
			 $.fn.mR = $.fn.marRight = function (margin) {
				 if (U(margin)) {
					 return this.css('marginRight')
				 }
				 this.css('marginRight', margin);
				 return this
			 }
			 $.fn.mH = $.fn.marHor = function (a) {
				 return this.marLeft(a).marRight(a)
			 }
			 $.fn.mV = $.fn.marVer = function (a) {
				 return this.marTop(a).marBottom(a)
			 }
			 MARGINAUTO = function () {
				 z()
				 o = outer = $.div('b', 500, 500).A()
				 o.A(i = inner = $.div('r', 100, 100))
				 i.mar('auto')
				 o.mar('auto')
			 }
		 }
		
		 function pad() {
			 $.fn.pdB = function (a) {
				 return this.css("padding-bottom", a || 0)
			 }
			 $.fn.pad = function (a) {
				 return this.css("padding", a || 0)
			 }
			 $.fn.pad = function (padding) {
				 if (U(padding)) {
					 return this.css('padding')
				 }
				 this.css('padding', padding);
				 return this
			 }
			 $.fn.padTop = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingTop')
				 }
				 this.css('paddingTop', padding);
				 return this
			 }
			 $.fn.padBottom = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingBottom')
				 }
				 this.css('paddingBottom', padding);
				 return this
			 }
			 $.fn.padLeft = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingLeft')
				 }
				 this.css('paddingLeft', padding);
				 return this
			 }
			 $.fn.padRight = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingRight')
				 }
				 this.css('paddingRight', padding);
				 return this
			 }
			 $.fn.padHor = function (a) {
				 return this.padLeft(a).padRight(a)
			 }
			 $.fn.padVer = function (a) {
				 return this.padTop(a).padBottom(a)
			 }
			 $.fn.pad = function (padding) {
				 if (U(padding)) {
					 return this.css('padding')
				 }
				 this.css('padding', padding);
				 return this
			 }
			 $.fn.pT = $.fn.padTop = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingTop')
				 }
				 this.css('paddingTop', padding);
				 return this
			 }
			 $.fn.pB = $.fn.padBottom = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingBottom')
				 }
				 this.css('paddingBottom', padding);
				 return this
			 }
			 $.fn.pL = $.fn.padLeft = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingLeft')
				 }
				 this.css('paddingLeft', padding);
				 return this
			 }
			 $.fn.pR = $.fn.padRight = function (padding) {
				 if (U(padding)) {
					 return this.css('paddingRight')
				 }
				 this.css('paddingRight', padding);
				 return this
			 }
			 $.fn.pH = $.fn.padHor = function (a) {
				 return this.padLeft(a).padRight(a)
			 }
			 $.fn.pV = $.fn.padVer = function (a) {
				 return this.padTop(a).padBottom(a)
			 }
		 }
		
		 function bor() {
			 $.fn.bdC = function (a) {
				 return this.css("border-color", oO('c', a || 'r'))
			 }
			 $.fn.borderStyle = function (style) {
				 this.css('border-style', style)
				 return this
			 }
			 $.fn.borderColor = function (c) {
				 this.css('border-color', oO('c', c))
				 return this
			 }
			 $.fn.borderWidth = function (w) {
				 this.css('border-width', w)
				 return this
			 }
			 $.fn.bor = function (border) {
				 if (U(border)) {
					 return this.css('border')
				 }
				 this.css('border', border);
				 return this
			 }
			 $.fn.bS = $.fn.borderStyle = function (style) {
				 this.css('border-style', style)
				 return this
			 }
			 $.fn.bdC = $.fn.borderColor = function (c) {
				 this.css('border-color', oO('c', c))
				 return this
			 }
			 $.fn.bW = $.fn.borderWidth = function (w) {
				 this.css('border-width', w)
				 return this
			 }
			 $.fn.bor = function (border) {
				 if (U(border)) {
					 return this.css('border')
				 }
				 this.css('border', border);
				 return this
			 }
			 $.Ol = $.outline = function OL() {
				 var g = G(arguments), o, ol
				 o = g.N_ ? {w: g.f} :
						 Oo('c', o) ? {c: g.f, w: g.s, s: g.t} : {w: g.f, s: g.s}
				 /*
				  if(S(g.f)){
				  o= g.f.split(' ')
				  ol= _.j([
				  $r('c',o[0]),  oO('ow',o[1]||5) +'px',
				  oO('os',o[2]||'-') ])
				  $l(ol)
				  return ol}
				  ol=  _.j([
				  $r('c',o.c),
				  N(o.w)? o.w+'px'$r('ow',o.w),
				  $r('os',o.s)
				  ])*/
				 //$l( ol )
				 return ol
			 }
		 }
		
		 wh();
		 mar();
		 pad();
		 bor()
	 }
	
	 function sCss() {
		 $.fn.s = $.fn.css
		 $.qs = function f(sty, styVal) {
			 var o = {}
			 if (S(sty)) {
				 addSty(o, sty, styVal)
			 }
			 else {
				 _.e(
						 sty, function (styVal, sty) {
							 addSty(o, sty, styVal)
						 }
				 )
			 }
			 return o
			 function addSty(o, a, b) {
				 if (N(b) && M.abs(b) > 10) {
					 b = String(b) + 'px'
				 }
				 o[oO('s', a)] = oO(a, b, 'R')
				 return o
			 }
		 }
		 $.fn.ss = function () {
			 var g = G(arguments),
					 qs = $.qs(g.f)
			 g.f = qs
			 this.css.apply(this, g)
			 return this
		 }
		 $.fn.k = $.fn.K = function () {
			 $.fn.addClass.apply(this, arguments);
			 return this
		 }
		 $.fn.tK = $.fn.ggK = $.fn.toggleClass
		 $.fn.rK = $.fn.rmK = $.fn.xK = $.fn.removeClass
	 }
	
	 function color() {
		 $.fn.al = function (z) {
			 if (U(z)) {
				 return this.css('opacity')
			 }
			 this.css('opacity', z)
			 return this
		 }
		 $.C = function (Col, col) {
			 var bd = $('body')
			 bd.C(Col)
			 if (col) {
				 bd.col(col)
			 }
			 return $
		 }
		 $.fn.col = function (col) {
			 return this.css('color', oO('c', col))
		 }
		 $.fn.C = function (col, c2) {
			 if (c2) {
				 return this.C(col).col(c2)
			 }
			 if (col == '*') {
				 col = Yano.random()
			 }
			 return this.css('backgroundColor', oO('c', col))
		 }
	 }
	
	 function backg() {
		 $.fn.bg = $.fn.bgI = function (url) {//set background image
			 this.bgI('url("' + $.src(url) + '")');
			 return this
		 }
		 $.fn.bg = function (bg) {
			 if (U(bg)) {
				 return this.css('background')
			 }
			 this.css('background', bg)
			 return this
		 }
		 $.fn.bgP = function (bg) {
			 if (U(bg)) {
				 return this.css('backgroundPosition')
			 }
			 this.css('backgroundPosition', bg)
			 return this
		 }
		 $.fn.pBgI = $.fn.bp = function (x, y) {
			 var g = G(arguments), x = g[0], y = g[1];
			 x = N(x) ? x : 0;
			 y = N(y) ? y : 0;
			 this.css({backgroundPos: x + 'px ' + y + 'px'});
			 return this
		 }
	 }
	
	 function text() {
		 $.fn.T = function () {
			 var g = G(arguments)
			 if (g.u) {
				 return this.text()
			 }
			 this.text(g.f)
			 return this
		 }
		 $.fn.fZ = $.fn.fS = $.fn.fontSize = function (z) {
			 this.css('font-size', z)
			 return this
		 }
		 $.fn.tA = $.fn.textAlign = function (z) {
			 this.css('text-align', z)
			 return this
		 }
		 $.Fo = $.font = $f = function (a, b) {
			 var g = G(arguments)
			 if (O(a)) {
				 return ss(
						 oB(b), {fz: a || 50}
				 )
			 }
			 a = N(a) ? _S(a) : U(a) ? '' : a;
			 var F = 'fantasy', W = 'normal', S = 'normal', Z = px(100);
			 _.e(
					 a.split(' '), function (p) {
						 if (M(p[0])) {
							 p = p.split('/')
							 Z = p[0] + 'px' + p[1] ? '/' + p[1] + 'px' : ''
						 }
						 F = Oo('ff', p) || F
						 W = Oo('fw', p) || W
						 S = Oo('fs', p) || S
					 }
			 )
			 return [W, S, Z, F].join(' ')
		 }
		 $.fn.T0 = function () {
			 var d = this,
					 g = G(arguments)
			 d.E()
			 g.e(
					 function (str) {
						 d.A(
								 $.h3(str)
						 )
					 }
			 )
			 return d
		 }
	 }
 }
 function flex(){
	 $l('flexApps')
	 FLEX = function () {
		 $l('FLEX')
		 $CSS({
			 _sB: {d: '$', $D: 'r', $W: 'w', $J: 'sB'},
			 _sA: {d: '$', $D: 'r', $W: 'w', $J: 'sA'}
		 })
		 d = $.d([
			 $.d('b', 400, 500).K('sB').A(
					 $.d('y', 40, 150),
					 $.d('z', 200, 50),
					 $.d('r', 40, 150),
					 $.d('y', 40, 150),
					 $.d('z', 200, 50),
					 $.d('r', 40, 150)
			 ),
			 $.d('B', 400, 500).K('sB').A(
					 $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 140, 150),
					 $.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 40, 50)
			 ),
			 $.i('me'),
			 $.d('w', 400, 500).K('sA').A(
					 $.d('y', 40, 150), $.d('z', 1000, 50), $.d('r', 140, 150),
					 $.d('y', 40, 150), $.d('z', 10, 50), $.d('r', 40, 50)
			 ),
			 $.d('p', 400, 500).K('sA').A(
					 $.d('y', 40, 150), $.d('z', 300, 50), $.d('r', 140, 150),
					 $.d('y', 40, 150), $.d('z', 200, 50), $.d('r', 40, 50)
			 )
		 ])
		 d.css({
			 'display': 'flex',
			 'justify-content': 'space-between'
		 })
	 }
	 GRAIL = function () {
		 $.bd().E()
		 o = {
			 bd: {f: '24px Helvetica', C: 'a', c: 'b'},
			 'header, footer': {C: 'x', d: 'b', M: 4, P: 5, h_: 100, B: ['bor', 'r'], bRd: '7pt'},
			 $main: {h_: 800, M: 0, P: 0, d: '$', $D: 'r'},
			 '$main > article': {M: 4, P: 5, B: ['bor', 'p'], bRd: '7pt', C: 'g', _: 2, $: '3 1 50%'},
			 '$main > nav': {C: 'o', M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', $: '1 6 30%', $O: -1},
			 '$main > aside': {M: 4, P: 5, B: ['bor', 'g'], bRd: '7pt', C: 'x', $: '1 6 20%', $O: 3},
			 "@media all and (max-width:640px)": $subRules({
				 "#main, #page": {$D: 'c'},
				 "#main>article, #main>nav, #main>aside": {$O: 0},
				 "#main>nav, #main>aside,  header,  footer": {h_: 50, _h: 50}
			 })
		 }
		 $CSS(o)
		 $('<header> heeeeader!!! </header>').A() //$.hdr('header').A()
		 $.d([
			 $.ac('article'),
			 $.nv().A('nav'),
			 $.as('aside')
		 ]).id('main')
		 $.ftr().A('footer').A()
	 }
	 BASIS = function () {
		 $.x('o', 'basis')
		 // http://jsfiddle.net/jakub_g/s5jAB/
		 // Both items have flex-basis: 200px defined.
// In 'equilibrium situation' they'll get those widths exactly.
		 $CSS({
			 _ch: {c: 'w', P: 10, M: 10},
			 _ct: {
				 C: 'y', P: 10,
				 d: '$'
			 },
			 _ch1: {
				 C: "u",
				 $: '8 1 600px'
			 },// If there's more space, the first one grows 5x faster than the second.
			 _ch2: {
				 C: 'g',
				 d: '$', $: '1 2 400px', $W: 'w'
			 }, // If there's less space, the second one shrinks 3x faster than the first.
			 d: {B: ['bor', 'b']}
		 })
		 $.d([$.d([$.h3('Child One'),
			 $.p('Lorem ipsum'), $.p('dolor sit amet'),
			 $.p('This is a bit longer lineThis is a bit longer lineThis is a bit longer' +
			 ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer' +
			 ' lineThis is a bit longer lineThis is a bit longer lineThis is a bit longer lineThis ' +
			 'is a bit longer lineThis is a bit longer lineThis is a bit longer line')]).K('ch ch1'),
			 d = $.d(['Two'
			 ]).K('ch ch2')
		 ]).K('ct')
		 _.t(20, function () {
			 d.A($.d($r(), 40, 40).K('ch1'))
		 })
		 $CSS()
		 /*
		
		  div { border:8px solid Blue; }
		  .ct { display:flex; padding:10px; background-color:Yellow; }
		  .ch { padding:10px; margin:10px; color:White; }
		  .ch1 { flex:8 1 600px; background-color:Purple; }
		  .ch2 { display:flex; flex-wrap:true; flex:1 2 400px; background-color:green; }
		
		
		
		  */
	 }
	 FLEXCT = function () {
		 z()
		 $CSS({
			 '.flex-container': {
				 display: 'flex', 'flex-direction': 'row',
				 $W: 'w', 'justify-content': 'space-around',
				 'align-content': 'flex-start', 'align-items': 'stretch'
			 },
			 '.flex-items-default': {
				 width: '300px', height: '250px',
				 'flex-grow': 0, 'flex-shrink': 0, 'flex-basis': 0
			 },
			 '.flex-item-1': {width: '100px', height: '100px', 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'},
			 '.flex-item-2': {
				 width: '100px', height: '100px',
				 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '200px'
			 },
			 '.flex-item-3': {
				 width: '100px', height: '100px',
				 'flex-grow': 1, 'flex-shrink': 0,
				 'flex-basis': '200px'
			 },
			 '.flex-item-4': {
				 width: '100px', height: '100px',
				 'flex-grow': 1, 'flex-shrink': 0,
				 'flex-basis': '200px'
			 },
			 '.flex-item-5': {
				 width: '100px', height: '100px',
				 'flex-grow': 1, 'flex-shrink': 0, 'flex-basis': '98%'
			 }
		 })
		 d = $.dK('flex-container').A(
				 Item(1), Item(2), Item(3), Item(4), Item(5)
		 )
		 function Item(n) {
			 return $.dK('.flex-item-' + (n || 1)).A(
					 $.i('me')
			 ).css({margin: 20}).C('b')
		 }
	 }
//notSure() 
	 GME = function () {
		 $.x('y', 'gme');
		 $CSS({
			 'html, body': {w: '100%', h: '100%', M: 0, P: 0},
			 'body.box': {d: $, flD: 'column'},
			 'body > *': {P: '.5em'},
			 header: {C: 'b'},
			 article: {C: 'r', $: 1},
			 footer: {C: 'g'},
			 'header.cnt': {'-moz-column-count': 3},
			 'header:not(.cnt)': {'-moz-column-width': 100}
		 })
		 $.hdr().A('Click', $.br(), 'to change', $.br(),
				 'header {column-…}').A()
		 $.ac().A('Click',
				 $.br(),
				 'to', $.br(), 'change', $.br(), 'body {display: …}').A()
		 $.ftr().A()
		 $("header").$(function () {
			 $(this).toggleClass("cnt");
			 logClass();
		 });
		 $("article").$(function () {
			 $.bd().toggleClass("box");
			 logClass()
		 })
		 logClass()
		 function logClass() {
			 var logTxt = "Header: "
			 if ($("header").hasClass("cnt")) {
				 logTxt += "column-count"
			 } else {
				 logTxt += "column-width"
			 }
			 logTxt += "; Body: ";
			 if ($("body").hasClass("box")) {
				 logTxt += "flex-box"
			 }
			 else {
				 logTxt += "block"
			 }
			 $("footer").text(logTxt)
		 }
	 }
	 FB = function () {
		 $.x('o', 'flex')
		 $CSS({
			 _ct: {
				 d: '$',
				 //  define  flow dir
				 // and
				 // if we allow the items to wrap
				 //  Remember this is the same as:
				 $D: 'r',
				 $W: 'w',
				 //      'flex-flow' : 'row wrap',
				 // Then we define how is distributed the remaining space
				 flJC: 'space-around'
			 }
		 })
	 }
 }
EXT = function () {
	$.x('x', 'ext')
	$CSS(
			{
				d: {
					ex: 'icon',
					C: 'y', c: 'o', mx: {size: [250]}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}
BORD = function () {
	$.x('x', 'bordered')
	$CSS(
			{
				_bordered: {
					'border-top': 'dotted 1px black',
					'border-bottom': 'solid 2px black'
				},
				//And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:
				'#menu a': {
					ex: '_bordered',
					c: 'r'
				},
				'.post a': {
					c: 'r',
					ex: '_bordered'
				}
			}
	)
	// $CSS()
}
SIZE = function () {
	$.x('x', 'size')
	$CSS(
			{
				d: {
					C: 'z', c: 'w',
					mx: {
						size: [1250]
					}
				}
			}
	)
	$.d(['hello'])
	$CSS()
}