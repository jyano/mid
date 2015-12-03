ob.keyControls = function (num) {
	var args = G(arguments),
			that = this
	if (args.P) {
		$.kD('left', function () {
			that.toL(num)
		})
		$.kD('right', function () {
			that.toR(num)
		})
	}
	if (args.N) {
		$.kD('up', function () {
			that.toU(num)
		})
		$.kD('down', function () {
			that.toD(num)
		})
	}
}
 