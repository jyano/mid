$a.PO('/picOld', function (q, p, n) {
	var imgFile = q.files.png ? q.files.png : q.files.i
	$f.readFile(imgFile.path, function (z, $FILEDATA$) {//img file props
		var nm = imgFile.name
		var sz = imgFile.size
		var mod = imgFile.lastModifiedDate
		var filePath = imgFile.path
		var ext = $p.extname(filePath) || '.png'  //make new mongoose model
		// i create this model too early 
		
		
		PngFile.create({name: nm, ext: ext, size: sz, mod: mod, uId: q.uId}, function (z, imgFileModel) {if (z) {$l(z)			}
		
			
			
			filePath = $p.resolve(filePath, '../../pics/', _.tS(imgFileModel._id)) + imgFileModel.ext
			
			$f.writeFile(filePath, $FILEDATA$, function (z) { //save model
				imgFileModel.path = filePath
				imgFileModel.sv(function (z) {
					if (z) {
						n(z)
					} else {
						p.back()
					}
				})
			})
			
			
		})
	})
})






$a.PO('/picOld2MongoCalls', function (q, p, n) {
	var imgFile = q.files.png ? q.files.png : q.files.i
	$f.readFile(imgFile.path, function (z, $FILEDATA$) {//img file props
		var nm = imgFile.name
		var sz = imgFile.size
		var mod = imgFile.lastModifiedDate
		var filePath = imgFile.path
		var ext = $p.extname(filePath) || '.png'  //make new mongoose model
		// i create this model too early 
		Fl.cr({name: nm, ext: ext, size: sz, mod: mod, uId: q.uId}, function (z, imgFileModel) {
			if (z) {
				$l(z)
			}
			filePath = $p.resolve(filePath, '../../pics/', _.tS(imgFileModel._id)) + imgFileModel.ext
			$f.writeFile(filePath, $FILEDATA$, function (z) { //save model
				imgFileModel.path = filePath
				imgFileModel.sv(function (z) {
					if (z) {
						n(z)
					} else {
						p.back()
					}
				})
			})
		})
	})
})
$a.PO('/pic', function (q, p, nx) {
	var imgFile, ext
	if (q.files.png) {
		q.files.i = q.files.png
	}
	
	
	
	
	imgFile = q.files.i;
	ext = $p.extname(imgFile.path) || '.png'
	
	
	Fl.create({
		user: q.uId, name: imgFile.name,
		size: imgFile.size, modified: imgFile.lastModifiedDate, ext: ext
	}, function (z, flMd) {
	
		
		fs.readFile(imgFile.path, function (z, fl) {
			flMd.path = $p.resolve(imgFile.path,
			 '../../pics/', _.tS(flMd._id) + flMd.ext)
			fs.writeFile(flMd.path, fl, function (z) {
				flMd.sv(function (z) {
					if (z) {
						nx(z)
					}
					else {
						p.rd('back')
					}
				})})})})
	
	
	
	
	
	
	
})


WRITEFILE = $a.PO('/uplI',  function (q, p, nx) { //{u: req.userId, d: req.du}
	
 
	
	PngFile.create($datURL(q), function (z, img) { $f.readFile(img.path, function (z, file) {


					$f.writeFile(
					
							$p.resolve(img.path, '../../p/', _.tS(img._id) ) + img.e,
									  file, function (z) {
										img.save(function (z) {
											_back(p)})}
											
					)})})
	
	
	
	
})



//upload a dataUrl!!
//$l('req.body.data: ' + req.body.d); $l(da)
//'54d4506172f7e12a05000012';
//upload a dataUrl!!
//if(req.f.png){req.f.i= q.f.png}
// var i=req.f.i