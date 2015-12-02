_toFr = function (to, fr) {
	return {to: to, fr: fr}
}
$toFr = function (q) {
	return __toFr(q.body.to, q.u)
}
$mail = function (to, from, txt) {
	return {to: to, from: from, text: txt}
}
