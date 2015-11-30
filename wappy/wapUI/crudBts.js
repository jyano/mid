$.delBt = function (url, data) {
	var bt
	bt = $.bt('delete', function (el) {
		$.ajax({
			type: 'DELETE',
			data: data,
			url: url,
			success: function () {
				$(el.target).closest('div').rm()
			}
		})
	})
	return bt
}