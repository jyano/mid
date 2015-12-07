$post = function (q) {
	return {
		un: q.un,
		title: q.b.title,
		content: q.b.content,
		dataURL: q.b.dataURL
	}
}
 
$datetimeMail = $dtMail = $dtMl = function (dt, tx, fr) {
	return {datetime: dt, text: tx, from: fr}
}
$datURL = function (q) {
	return {
		uId: q.uId, dU: q.du
	}
}