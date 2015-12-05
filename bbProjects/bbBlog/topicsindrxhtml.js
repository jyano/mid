function tpcsIndexHtml() {
	$('body').A($('<div>').K('container').A(
			$('<h1>').html('Blog App ' + Math.random()),
			$table = $('<table>').K('table')
	))
	$thead = $('<thead>').A(
			$('<tr>').A(
					$('<th>').html('AuthoR'),
					$('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
			$('<tr>').A(
					$('<td>').A($('<input>').K('form-control author-input')),
					$('<td>').A($('<input>').K('form-control title-input')),
					$('<td>').A($('<input>').K('form-control url-input')),
					$('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog'))))
	$table.A(
			$thead,
			$tbody = $('<tbody>').K('blogs-list'))
	$('.add-blog').on('click', function () {
		blogs.create({
			author: $('.author-input').v_(),
			title: $('.title-input').v_(),
			url: $('.url-input').v_()
		})
	})
}