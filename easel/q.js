q.i = q.r = function (i) {
	i = this.getResult(i);
	i.w = i.width;
	i.h = i.height;
	return i
}
q.$ = function (i) {
	return $(this.i(i))
}
q.m = q.mf = q.manifest = function () {
	// q.m:
// protosig:
// 'me',..
// {src:'me', id:'him'},..
// [ {src:*, id:*}, 'me',.. ]
	var g = G(arguments)
	if (g.u) {
		return this
	}
	var mf = _.m(g.A ? g.f :
			g, function (i) {
		return S(i) ?
		{src: _.src(i), id: i} :
				i
	})
	this.loadManifest(mf)
	return this
}
q.manifest = function (manifest) {
	this.loadManifest(manifest)
	return this
}
q.mf = function () {
	this.loadManifest(cjs.mf.apply(null, arguments))
	return this
}
q.bm = function (img) {
	img = this.getResult(img)
	return cjs.bitmap(img)
}
q.b = q.bm = function (i, ct, x, y) {
	var bm = $Bm(this.i(i));
	if (ct) {
		bm.a2(ct, x, y)
	}
	return bm
}
q.c = q.complete = function (fn) {
	var q = this
	if (F(fn)) {
		q.on("complete", fn)
	}
	return q
}
q.complete = function (func) {
	this.addEventListener("complete", func)
	return this
}
q.dfF = cjs.handleFileLoad = function (e) {
	if (e.item.type == "image") {
		images[e.item.id] = e.result
	}
}
q.f = q.l = q.fl = q.fileload = function (fn) {
	var q = this
	q.on("fileload", fn)
	return q
}
q.fileload = function (func) {
	this.addEventListener("fileload", func)
	return this
}