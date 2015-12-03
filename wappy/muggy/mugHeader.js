// or is this supposed to be modal header? ?
mugHeader = function () {
	return row(
			col(2).k('text-center')(qim('me').Z(.7), $h5('hi')),
			col(3)(
					$h4('pics'),
					$h5('place to upload'))
	).a()()
}
