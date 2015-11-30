

Graphics.fromSource = crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }


cjs.src = Graphics.toSource = src=function f(e){

    var _src=function(a){ a = $.extension(a)

        return s$(a).startsWith('/')? a : '/'+ a }


    //if(Q(e)){$l('q');e=$(e)[0]}

    if( e.image ){ e=e.image}

    if( C(e) ){ e = C(e) }

    if( e.src ){ e = e.src}

    if( e.toDataURL ){  e=tDU(e) }

   return s$(e).contains('data:')?  e

        :  S(e) ?  _src(e)

            : 0}



Graphics.isDataURL=function(d){
    if(U(d)){return false}
    return s$(d).contains('data:')
}
 


 