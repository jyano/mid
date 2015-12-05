$.joystick = function () {
	alert('joystick')
	$('#left').on('mousedown mouseover touchenter', function (e) {
		$.K.left = true;
		e.preventDefault()
	})
	$('#left').on('mouseup mouseout touchleave', function () {
		$.K.left = false
	})
	$('#jump').on('mousedown mouseover touchenter', function () {
		$.K.up = true
	})
	$('#jump').on('mouseup mouseout touchleave', function () {
		$.K.up = false
	})
	$('#right').on('mousedown mouseover touchenter', function () {
		$.K.right = true
	})
	$('#right').on('mouseup mouseout touchleave', function () {
		$.K.right = false
	})
}
 