function instantMsg() {
	sendMessage = iMsg = function (toWho, message) {
		$l('toWho: ' + toWho)
		$l('message: ' + message)
		socket.emit('sendMessage', {m: message, t: toWho, f: _username})
	}
}