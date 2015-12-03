require('./dirs')


module.exports=function routing(dirN){
	
	$a.g('/', function (q, p) {
	
		p.send('it worked jason..'  )
	
	})
	
	
	$a.g('/www/:a?/:p?', function (q, p) {
		
		$l("rendering basic jode.. "+ Math.random())
		
		p.render('basic', {
		
			app: q.params.a,
			pam: q.params.p
		})
	})
	
    _.e(dirs, function (dir) {
    
        $a.use($e.static(dirN + '/' + dir))
	    $a.use($e.static(dirN + '/' + dir + '/_deps'))
	    $a.use($e.static(dirN + '/' + dir + '/_apps'))
	    $a.use(
			    $e.static(dirN + '/' + dir + '/_protos'))
	    $a.use(
			    $e.static(dirN + '/' + dir + '/_data'))
	    
    })


}


 