$a.get('/ball', function (req, res) {
	res.json(ball)
})
$a.post('/ball', function (req, res) {
	ball.x = Number(req.body.x)
	ball.y = Number(req.body.y)
	res.json(ball)
})