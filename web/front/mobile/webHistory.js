function hist() {
	hst = $w.history
	hst.b = hst.back
	hst.f = hst.forward
	hst.g = hst.go
	hst.l = hst.length
	nvg = navigator
	nvg.o = nvg.onLine
}
wnd = function (a) {
	var g = G(arguments), a = g[0]
	if (g.n) {
		return a.close()
	}
	return $w.open()
}
makeAllExtLinksOpenInNewWindows = function () {
	$("a[href^='http://']").attr('target', '_blank')
}
accessParentFrame = function () {
	frames[0].parent === $w
}
accessChildFrame = function () {
	frames[0].window.location.reload
}
accessTopFrame = function () {
	$w.frames[0].window.top === $w.top
}
accessFrameByName = function (f) {
	$w.frames[f] === $w.frames[0].location.reload
}
open = function (c) {
	$w.open(_S(c),
			'new_window', 'width=310,height=30')
}
//workers
jsBlob = function (f) {
	return new Blob(['(' + f.toString() + ')()'], {
		type: "text/javascript"
	})
}
wrk = function (a) {
	cou = function (a) {
		return $w.URL.createObjectURL(a)
	}
	a = cou(jsBlob(a))
	var g = G(arguments),
			w = g.P ? new Worker(a) : new sharedWorker(a)
	w.t = w.terminate
	w.pm = w.postMessage
	w.m = function (f) {
		w.onmessage = f
	}
	return w
}
work = function () {
	w = wrk(function () {
		postMessage('hi')
	})
	w.m(function (e) {
		$l('Worker said: ' + e.data)
	})
} 