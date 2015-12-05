$.scr = function (js) {
	var script = $('<script>')
	script.attr('src', js);
	return script
}
$.j = $.js = function (js) {
	$('body').A($.scr(js))
}


$(function(){
//$('body').A(  $('<script src="/us.js">') )
//$('body').A(  $('<script src="/string.js">') )


    $.j('/us.js')
    $.j('/string.js')
    $.j('/both.js')


    //$.j('/jq.js')
    //$.j('/jqSer.js')

    $.j('/bs.js')
    $.j('/frontOb.js')
    $.j('/handy.js')
    $.j('/sty.js')
    $.j('/rules.js')
    $.j('/flex.js')
    $.j('/bb.js')
    $.j('/bbCore.js')
    $.j('/bbLs.js')


    arr = [
        "us",'string', 'both', 'jq', 'jqSer',  'bs', 'frontOb','handy',  'sty',
        'rules', 'flex','flexApps', 'boot', 'bb', 'bbCore',  'bbLs', 'bbTemplate',
        'bbApps', 'avail', 'bbLsApps', 'BfRoll','blog'
    ]






 
}) 