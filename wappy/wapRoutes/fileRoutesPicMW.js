$Mw.Pics = $Mw.P = function (q, p, nx) {
//$m.pic.find({u: q.I},
	//		function (z, pics) {
	//			p.l.I = _.m(pics, function () {return _S(pic._id) + pic.e})
	//			nx()
	//		})
	$picByUser(q.I, function (z, pics) {
		p.lc.images = p.lc.I = $arr(function (arr) {
			_.e(pics, function (pic) {
				arr.push(_S(pic._id) + pic.e)
			})
		})
		nx()
	})
}
$Mw.pic = $Mw.p = function (q, p, nx) {
	
	/*
	
	 $md.pic.findById(q.params.p,
	 function (z, i) {
	 if (z) {
	 n(z)
	 }
	 p.lc.image = p.lc.i = '/' + i._id
	 q.image = q.i = i
	 n()
	 })
	 */
	models.pic.findById(
			q.params.p,
			function (z, i) {
				if (z) {
					nx(z)
				}
				p.lc.i = '/' + i._id
				q.i = i
				nx()
			})
}
//upload a dataUrl!!
//$l('req.body.data: ' + req.body.d); $l(da)
//'54d4506172f7e12a05000012';
//upload a dataUrl!!
//if(req.f.png){req.f.i= q.f.png}
// var i=req.f.i
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
$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	$md.pic.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
	$md.pic.find(function (err, data) {
		res.json(data)
	})
})
$a.g('/myPics', $w.user, function (q, p) {
	$md.pic.find({
				user: q.userId
			},
			function (z, pics) {
				p.json(pics)
			})
})
//upload pic
$a.post('/pic', $w.user, function (req, res, next) {
	var imgFile, ext
	if (req.files.png) {
		req.files.i = req.files.png
	}
	imgFile = req.files.i;
	ext = path.extname(imgFile.path) || '.png'
	models.pic.create(
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
//remove a pic
$a.del('/pic', function (req, res) {
	models.pic.remove(req.body, function (err, data) {
		res.json(data)
	})
})
//get all pics(files) (everyone's)
$a.get('/pics', function (req, res) {
	models.pic.find(function (err, data) {
		res.json(data)
	})
})
//change to get pics?
//find all User's pics
$a.get('/myPics', $w.user, function (req, res) {
	models.pic.find({user: req.userId},
			function (err, pics) {
				res.json(pics)
			})
})
//upload pic
$a.post('/pic', $w.user, function (req, res, next) {
	var imgFile, ext
	if (req.files.png) {
		req.files.i = req.files.png
	}
	imgFile = req.files.i;
	ext = path.extname(imgFile.path) || '.png'
	$m.pic.create(
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
//remove a pic
$a.del('/pic', function (req, res) {
	$m.pic.remove(req.body, function (err, data) {
		res.json(data)
	})
})
//get all pics(files) (everyone's)
$a.get('/pics', function (req, res) {
	$m.pic.find(function (err, data) {
		res.json(data)
	})
})
//change to get pics?
//find all User's pics
$a.get('/myPics', $w.user, function (req, res) {
	$m.pic.find({user: req.userId},
			function (err, pics) {
				res.json(pics)
			})
})
///////////////////
////
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
$a.delete('/pic', function (q, p) {
	$l('remove a pic')//remove a pic
	$md.pic.remove(q.body, function (z, d) {
		p.json(d)
	})
})
$a.g('/pics', function (req, res) {  //get all pics(files) (everyone's)
	$md.pic.find(function (err, data) {
		res.json(data)
	})
})
$a.g('/myPics', $w.user, function (q, p) {
	$md.pic.find({
				user: q.userId
			},
			function (z, pics) {
				p.json(pics)
			})
})
 
  