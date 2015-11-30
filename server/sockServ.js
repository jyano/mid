io = socketIO.listen(httpServer)
io.set('log level', 1)
require('./sockets')(
		io,
		new sessionSocketIO(io, mongoStore, cookieParser)
)





