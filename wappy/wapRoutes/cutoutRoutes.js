 
$a.G('/cutout', function (q, p) {
//find 'my'  cutouts
	$m.cutout.find({un: q.un}, _json(p))
	//      /img
})
$a.G('/cutouts', function (q, p) {
	//find all   images on site?
	$findAll('cutout', _json(p)) // good: $findAllP('cutout', p)
	///allImages
})
$a.G('/cutout/:un', _fByUn('cutout'))
$a.PO('/cutout', function (q, p, next) {
 
 

//new cutout (image)
	$m.cutout.create($cutout(q), _json(p))
	
	//img
})
$a.DEL('/cutout', function (q, p) {
	$m.cutout.remove(q.body, _json(p))
})
$a.PO('/dats', function (q, p) {
	$m.cutout.findById(q.body.d, _json(p))
})
//** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
$a.PO('/getimagebyid', function (q, p, next) {
	
	 $m['cutout'].findById(q.body.data, _send(da))
})
Cutout = $m.cutout
//** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
$a.post('/getimagebyid', function (q, p) {
	//$l('dud'); $l('q.body.data'); $l(q.body.d)
	Cutout.findById(q.body.d, _json(p))
	//Cutout.findById(q.body.data, _send(p) )	//'54d4506172f7e12a05000012'
	// /dats
})