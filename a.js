console.log('......\n...\n.\n\n\n');
require('./server/serverBoth');
$l(' - mid - \n');

nodeHelperModules()
function nodeHelperModules() {
	$h = http = require('http');
	$p = path = require('path');
	require('./server/superFileSystem')
}
require('./server/expressApp')(__dirname)

//require('./server/database')
//require('./server/middleware')
require('./routing')(__dirname)
$hS = $h.createServer($a)

$hS.listen(80, function () {
	/*
	 var site=false;  //site = 'wap/fullnb'
	 if(site){
	 $l('requiring.. ' + site)
	 require('child_process').spawn('open', [
	 'http://localhost/' +  site
	 ]) }
	 */
	$l('\n port 80 <-\n')
})


require('./server/serverSockets')


 
