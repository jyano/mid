
$a.get('/ball', function (q, p) {
	p.j(ball)
})


$a.post('/ball', function (req, res) {
	ball.x = Number(req.body.x)
	ball.y = Number(req.body.y)
	res.json(ball)
})
$a.g('/godzilla', function (q, p) {
	p.j(godzilla)
})
 