//offical examples:

TRF = TRANSF = function () {
	z()
	degToRad = Math.PI / 180;
	cjs.testCanvas()
	//cjs.sharedCode()
	cjs.utils()
	cjs.slider()
	examples.showDistractor()
	stage = new createjs.Stage("testCanvas")
	stage.enableMouseOver();
	createjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	var img = new Image();
	img.onload = handleImageLoad;
	img.src = "/chicks.png";
	function handleImageLoad(evt) {
		examples.hideDistractor();
		var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
		sliceWidth = imgWidth / sliceCount;
		sliceContainer = new createjs.Container();
		sliceContainer.x = stage.canvas.width / 2;
		for (var i = 0; i < sliceCount; i++) {
			var slice = new createjs.Bitmap(img);
			slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
			slice.cache(0, 0, sliceWidth, imgHeight);
			slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
			sliceContainer.addChild(slice);
		}
		var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
		slider.on("change", handleSliderChange, this);
		stage.addChild(sliceContainer, slider);
		updateEffect(slider.value);
	}
	
	function handleSliderChange(evt) {
		updateEffect(evt.target.value);
	}
	
	function updateEffect(value) {
		var l = sliceContainer.getNumChildren();
		for (var i = 0; i < l; i++) {
			var slice = sliceContainer.getChildAt(i);
			slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
			if (i % 2) {
				slice.skewY = value;
			} else {
				slice.skewY = -value;
				slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
			}
			slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
			slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
			slice.updateCache();
		}
		stage.update();
	}
	
	TRAN1 = function () {
		degToRad = Math.PI / 180;
		cjs.testCanvas()
		cjs.utils()
		cjs.slider()
		examples.showDistractor()
		stage = new createjs.Stage("testCanvas")
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		stage.mouseMoveOutside = true;
		var img = new Image();
		img.onload = handleImageLoad;
		img.src = "/chicks.png";
		function handleImageLoad(evt) {
			examples.hideDistractor();
			var img = evt.target, imgWidth = img.width, imgHeight = img.height, sliceCount = 6;
			sliceWidth = imgWidth / sliceCount;
			sliceContainer = new createjs.Container();
			sliceContainer.x = stage.canvas.width / 2;
			for (var i = 0; i < sliceCount; i++) {
				var slice = new createjs.Bitmap(img);
				slice.sourceRect = new createjs.Rectangle(sliceWidth * i, 0, sliceWidth, imgHeight);
				slice.cache(0, 0, sliceWidth, imgHeight);
				slice.filters = [new createjs.ColorMatrixFilter(new createjs.ColorMatrix())];
				sliceContainer.addChild(slice);
			}
			var slider = new Slider(0, 50, 200, 50).set({x: 20, y: 330, value: 25});
			slider.on("change", handleSliderChange, this);
			stage.addChild(sliceContainer, slider);
			updateEffect(slider.value);
		}
		
		function handleSliderChange(evt) {
			updateEffect(evt.target.value);
		}
		
		function updateEffect(value) {
			var l = sliceContainer.getNumChildren();
			for (var i = 0; i < l; i++) {
				var slice = sliceContainer.getChildAt(i);
				slice.y = Math.sin(value * degToRad) * -sliceWidth / 2;
				if (i % 2) {
					slice.skewY = value;
				} else {
					slice.skewY = -value;
					slice.y -= sliceWidth * Math.sin(slice.skewY * degToRad);
				}
				slice.x = sliceWidth * (i - l / 2) * Math.cos(slice.skewY * degToRad);
				slice.filters[0].matrix//.setColor(Math.sin(slice.skewY * degToRad) * -80);
				slice.updateCache();
			}
			stage.update();
		}
	}
}
TFSP = TFSPIN = TRANSFORMSIMPLE = function () {
	z()
	angle = 0
	img = $.img('me', handleImageLoad)[0]
	function stop() {
		cjs.Ticker.removeEventListener("tick", tick)
	}
	
	function handleImageLoad() {
		canvas = $.canvas('p', 960, 400).id("testCanvas").A()
		stage = cjs.stage(canvas)
		stage.autoClear = true;
		bmp = new createjs.Bitmap(img)
				.rXY(img.width >> 1, img.height >> 1)
				.XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
		stage.A(bmp).update();
		cjs.Ticker.timingMode = cjs.Ticker.RAF
		cjs.tick(tick)
	}
	
	function tick(event) {
		angle += 0.01
		var value = Math.sin(angle) * 360
		bmp.rot(value).sXY(value / 360)
		stage.update(event)
	}
	
	/*
	 TFR2 = TRANSFORMSIMPLE = function () {
	 z()
	 angle = 0
	 img = $.img('me', handleImageLoad)[0]
	 function stop() {
	 cjs.Ticker.removeEventListener("tick", tick)
	 }
	
	 function handleImageLoad() {
	 canvas = $.canvas('p', 960, 400).id("testCanvas").A()
	 stage = cjs.stage(canvas)
	 stage.autoClear = true;
	 bmp = new createjs.Bitmap(img)
	 .rXY(img.width >> 1, img.height >> 1)
	 .XY(canvas.W() >> 1, canvas.H() >> 1).sXY(0.1)
	 stage.A(bmp).update();
	 cjs.Ticker.timingMode = cjs.Ticker.RAF
	 cjs.tick(tick)
	 }
	
	 function tick(event) {
	 angle += 0.01
	 var value = Math.sin(angle) * 360
	 bmp.rot(value).sXY(value / 360)
	 stage.update(event)
	 }
	 }
	 */
}
 