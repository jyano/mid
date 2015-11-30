QUEUE = function () {
	z()
	s = cjs.stage(500).tick().A()
	queue = new cjs.LoadQueue()
	queue.on("complete", handleComplete, this)
	queue.loadManifest([{id: "myImage", src: "/me.png"}, {id: "guyImage", src: "/guy.png"}])
	function handleComplete() {
		s.A(cjs.bm(queue.get("myImage")))
	}
}
QUEUEMUG = function () {
	$Ld([{id: "mug", src: "/getMug"}, {id: "me", src: "/me.png"}], function (ld) {
		// mug= s.bData( qu.gR("mug") ).drag()
		St().A($Bm(ld.get("me")).drag())
	})
	///// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
}

 