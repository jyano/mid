 

oOo=function oOo(a,b){
    if(_.isUndefined(b)){return _I(lC(V(oO(a))))}
    if(oOo(a)[lC(b)]){return b}}
Oo=_.defaults(function o(a,b){
    if(D(b)){return o[a] && ( o[a][b] || oOo(a,b))}},ooo)
oO= _.defaults(function oO(a,b,c){
    return _.isUndefined(a)?  _.keys(f)
        :'*'==b?  $r(a)
        :D(c)  ?    oO(oO(c,a), b)
        :_.isUndefined(b)  ?    D(function(x,y){return oO(a,x,y)},oO[a]||{})
        :(oO[a]&&oO[a][b])?
        oO[a][b]
        :b},ooo)
oC=function(c){return oO('c',c)}
oK=function(a){return oO('k',a)}
oT=function(a){return oO('t',a)}
oE=function(a){return oO('e',a)}
oI=function(a){return oO('i',a)}
oS=function(a){return oO('s',a)} //$o=function o(a,b,c){return _.isUndefined(b)?_p(o,a):G(arguments).N?oO(a,b,c):Oo(a,b,c)}
oQ=function(f,m){$(function(){Q(m||mf,f)})}
oO.V =  function(a){return _.values( S(a)? oO(a): a)}

oOo = function oOo(a, b) {
    if (_.isUndefined(b)) {
        return _I(lC(V(oO(a))))
    }
    if (oOo(a)[lC(b)]) {
        return b
    }
}
Oo = _.defaults(function o(a, b) {
    if (D(b)) {
        return o[a] && ( o[a][b] || oOo(a, b))
    }
}, ooo)
oO = _.defaults(function oO(a, b, c) {
    return _.isUndefined(a) ? _.keys(f)
        : '*' == b ? $r(a)
        : D(c) ? oO(oO(c, a), b)
        : _.isUndefined(b) ? D(function (x, y) {
        return oO(a, x, y)
    }, oO[a] || {})
        : (oO[a] && oO[a][b]) ?
        oO[a][b]
        : b
}, ooo)


$r = function (a, b) {
    a = a || 'c'; //cannot be 'color' ?? only abr??
    var values = _.values(oO(a))
    return Oo(a, b) || values[_.random(_.size(values) - 1)]
}