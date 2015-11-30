httpServer = http.createServer($a)
httpServer.listen(80, function () {
	$l('BOOOOOOOOX  on port 8080')
})
io = socketIO.listen(httpServer)
io.set('log level', 1)
require('./sockets')(
		io,
		new sessionSocketIO(io, mongoStore, cookieParser)
)
 
  


