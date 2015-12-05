Y.chan = function (chan, fn) {
	alert('Y.chan')
	chan = io.connect('http://localhost/' + chan)
	if (fn) {
		chan.on('connect', fn)
	}
	return chan
}