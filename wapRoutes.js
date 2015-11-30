$l('routes.js')

module.exports=function(){

    
   
    $a.get('/wap', function(req,res){ res.render('wap') })
    $a.get('/wap/:app/:pam?', function(req, res){

        res.render('wap', {  app: req.params.app,   pam: req.params.pam    })})

	
    //upload a dataUrl!!
    $a.post('/uplI', $w.user, function(req, res, next){

        //if(req.f.png){req.f.i= q.f.png}

        // var i=req.f.i

        models.img.create(  { u: req.userId, d: req.du },  function(err, img){ //$d(img)



            fs.readFile(img.path, function(err, file){


                fs.writeFile(

                    $d(path.resolve(img.path,'../../p/', img._id.toString())+img.e),

                    file,

                    function(err){

                        img.save(function(err){ if(err){next(err)} else {res.redirect('back')}})

                    })})

        })


    })

	

    //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
    $a.post('/getimagebyid', function(req,res,next){
        $l('dud')

        $l('req.body.data')
        $l(req.body.d)

        models.img.findById(

            //'54d4506172f7e12a05000012',
            req.body.data,

            function(err, data){

                $l('data: ')
                console.dir(data)

                res.send(data)
            })

    })
    $a.post('/dats', function(req,res){
        models.img.findById(  req.body.d, function(err, data){

            if(O(data)){ res.json(data) }

        })
    })
 
}