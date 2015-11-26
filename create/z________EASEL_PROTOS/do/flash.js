 
dO.flash = function () {
		var dO= this
		dO.opacity(0)
		setTimeout(function () {
		dO.opacity(1)
		}, 300)
		return dO
	}
