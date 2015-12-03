$ss = require('express-session')
$cnMg = require('connect-mongo')($ss)
$ssSt = new $cnMg({url: 'mongodb://localhost/jy'})
$ssMw = $ss({
	store: $ssSt,
	secret: 'foo',
	resave: true,
	saveUninitialized: true
})
$cP = require('cookie-parser')
$cPMw = $cP('xyz')
$bP = require('body-parser');
$urlBPMw = $bP.urlencoded({
	extended: false,
	limit: '50mb'
})
$jsonBPMw = $bP.json({
	limit: '50mb'
})
$a.use($ssMw)
$a.use($cPMw)
$a.use($urlBPMw)
$a.use($jsonBPMw)
