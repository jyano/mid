$a.PO('/uplI', function (q, p, nx) {
	var datURL = $datURL(q) //{u: req.userId, d: req.du}
	$m.file.create(datURL, function (z, img) {
		$f.readFile(img.path,
				function (z, file) {
					$f.writeFile(
							$p.resolve(img.path, '../../p/', _.tS(img._id) + img.e, file, function (z) {
										img.save(function (z) {
											if (z) {
												$l('z');
												nx(z)
											}
											else {
												$l('uploaded');
												_back(p)
											}
										})
									}
							)
				}
		)
	})
})
$a.po('/pic', uplod, $w.user, function (q, p, n) {
	$l('post new pic')
	bd = q.body
	$l('q.file: ')
	$l(q.file)
	//when a user uploads a pic..
	// by default, it first goes to /public/uploads..
	// but then i automatically copy it to /pic/uploads..
	// example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
	//notice file names are different
	//the first name is random at time of orig file save
	//new name is based on mongoId (also came from random when pic saved to db)
	//i save by mongo id so it can be easily fetched!
	$f.rF = $f.readFile
	$f.wF = $f.writeFile
	$p = path
	$p.rs = $p.resolve
	var i = q.file//q.files.png || q.files.i
	$md.pic.create(Pic(q.userId, i), function (z, pic) {  //if (z) {$l('ERR:' + z)}
		copyFileTo(i.path, newPath(i, pic), function () {
			pic.save(function (z) {
				if (z) {
					$l('z');
					n(z)
				} else {
					$l('pic saved');
					p.redirect('/wap/uploads')
				}
			})
		}) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
	})
	function copyFileTo(origPath, newPath, fn) {
		$f.rF(origPath, function (z, fileData) {
			$f.wF(newPath, fileData, fn)
		})
	}
	
	function newPath(i, pic) {
		var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)  //$l('origPath: ' + i.path); $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
		function _id(pic) {
			return pic._id.toString()
		}
		
		return newPath
	}
	
	function Pic(id, i) {
		return {
			user: id, ext: $p.extname(i.path) || '.png',
			//name: i.name,
			size: i.size//, modified: i.lastModifiedDate
		}
	}
})
//upload pic
$a.post('/pic', $w.user, function (q, p, nx) {
	var imgFile, ext
	if (q.files.png) {
		q.files.i = q.files.png
	}
	imgFile = q.files.i;
	ext = $p.extname(imgFile.path) || '.png'
	Fl.create({
		user: q.uId,
		name: imgFile.name,
		size: imgFile.size,
		modified: imgFile.lastModifiedDate, ext: ext
	}, function (z, pic) {
		if (z) {
			$l(z)
		}
		fs.readFile(imgFile.path, function (z, fl) {
			pic.path = $p.resolve(
					imgFile.path, '../../pics/',
					_.tS(pic._id) + pic.ext
			fs.writeFile(pic.path, fl, function (z) {
				pic.sv(function (z) {
					if (z) {
						nx(z)
					}
					else {
						p.rd('back')
					}
				})
			})
		})
	})
})
//upload pic
$a.PO('/pic', function (q, p, nx) {
	var imgFile, ext
	if (req.files.png) {
		req.files.i = req.files.png
	}
	imgFile = req.files.i;
	ext = path.extname(imgFile.path) || '.png'
	Fl.create(
			{user: req.userId, name: imgFile.name, size: imgFile.size, modified: imgFile.lastModifiedDate, ext: ext},
			function (err, pic) {
				if (err) {
					$l(err)
				}
				fs.readFile(imgFile.path, function (err, file) {
					pic.path = path.resolve(imgFile.path, '../../pics/', pic._id.toString()) + pic.ext
					fs.writeFile(pic.path, file, function (err) {
						pic.save(function (err) {
							if (err) {
								next(err)
							} else {
								res.redirect('back')
							}
						})
					})
				})
			})
})
$a.po('/pic', uplod, $w.user, function (q, p, n) {
	$l('post new pic')
	bd = q.body
	$l('q.file: ')
	$l(q.file)
	//when a user uploads a pic..
	// by default, it first goes to /public/uploads..
	// but then i automatically copy it to /pic/uploads..
	// example:
//    origPath: public/uploads/58bfc.JPG
//    newPath: public/pics/55e32.JPG
	//notice file names are different
	//the first name is random at time of orig file save
	//new name is based on mongoId (also came from random when pic saved to db)
	//i save by mongo id so it can be easily fetched!
	$f.rF = $f.readFile
	$f.wF = $f.writeFile
	$p = path
	$p.rs = $p.resolve
	var i = q.file//q.files.png || q.files.i
	Fl.create(Pic(q.userId, i), function (z, pic) {  //if (z) {$l('ERR:' + z)}
		copyFileTo(i.path, newPath(i, pic), function () {
			pic.save(function (z) {
				if (z) {
					$l('z');
					n(z)
				} else {
					$l('pic saved');
					p.redirect('/wap/uploads')
				}
			})
		}) //<- $f.rF(i.path,  function(z, fileData){$f.wF(newPath(i, pic), fileData,  savedToFile)})
	})
	function copyFileTo(origPath, newPath, fn) {
		$f.rF(origPath, function (z, fileData) {
			$f.wF(newPath, fileData, fn)
		})
	}
	
	function newPath(i, pic) {
		var newPath = $p.rs(i.path, '../../pics/', _id(pic) + pic.ext)  //$l('origPath: ' + i.path); $l('newPath: ' + newPath)   //for some reason extensions are saved with a starting '.'
		function _id(pic) {
			return pic._id.toString()
		}
		
		return newPath
	}
	
	function Pic(id, i) {
		return {
			user: id, ext: $p.extname(i.path) || '.png',
			//name: i.name,
			size: i.size//, modified: i.lastModifiedDate
		}
	}
})
$post('/myPics', function (q, p) {
	Fl.fi({user: q.userId}, _json(p))
})
//upload a dataUrl!!
//$l('req.body.data: ' + req.body.d); $l(da)
//'54d4506172f7e12a05000012';
//upload a dataUrl!!
//if(req.f.png){req.f.i= q.f.png}
// var i=req.f.i