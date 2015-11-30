
require('./defaultMug')

$a.use( express.favicon() )

$w = middleware =require('./middleware')


$a.use(middleware)


$a.get('/render/:page', function(req, res, next){
    res.render(req.params.page)

})
  

_.each(fileDirs, function(dir){

   $a.use(
       express.static(
           path.join(__dirname, dir)
       ))

})

 