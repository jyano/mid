EDIT0 = function () {
	stage = St(800)
	var imgHolder = $div()
	CT(imgHolder, stage).o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder(
				$imageSizeFuncCan(
						img.d, 1, function () {
							stage.bm(img.d,
									function (bm) {
										//bm.rgc('+');
										TR(bm);
									}, '+')
						}
				)
		)
	})
	return stage
}
EDIT1 = function () {
	stage = St(800)
	var imgHolder = $div()
	container = CT(imgHolder, stage)
	container.o('$$', sav(stage, 'edit'))
	eaI(function (img) {
		imgHolder.A(
				$.canvas('X', 100, 100).fit(img.d).click(function () {
					stage.bm(img.d,
							function (bm) {
								bm.rCenter('+');
								TR(bm)
							})
				})
		)
	})
	return stage
}
PROPBOX = function () {
	var imagesDiv = $div()
	dA = $divA('y', 200)(
			$span('prop box'),
			$hr(),
			$span('selected cutout:')
	)
	stage = SuperStage(800)
	littleStage = SuperStage(80)
	dA(littleStage)
	CT(imagesDiv, stage).o('$$', sav(stage, 'edit'))
	eaI(function (image) {
		imagesDiv(
				xc(image.d, 1,
						function () {
							stage.bm(
									image.d,
									function (bm) {
										TR(bm)
										///hmmm only clicks once?
										//does this relate to the draggable stage problem?
										bm.$(function () {
											$l('new selection')
											b = bm
											littleStage.ch('-')
											clone = Do(bm.ob.clone())
											littleStage.a(clone)
											clone.xy(50).sxy(.1)
										})
									}
									, '+')
						})
		)
	})
	return stage
}
AVATAR = function () {
	z()
	//the challenge here is to make the stage draggable but still usable, by dragging it by a wrapper div
	//  s=St(400)
	stage = dragStage().tick()
	//d = qq( stage.ob.canvas )
	//d2=$div().drg().w(500).h(500).c('o')
	//CT(d, stage).o('$$',  sav(stage,'avatar') )
	stage.on('dblclick', function () {
		stage.snap('avatar')
	})
	theDiv = $.div('x').drag()
	$.getJSON('/img',
			function (i) {
				_.each(i, function (img) {
					theDiv.A(
							$.canvas(100, 100).A().fit(img.d).click(
									function () {
										stage.bm(img.d, createjs.bindTransform, '+')
									}))
				})
			})
	//d2( stage )
}
EDIT1 = function () {
	container = $.containerDiv()
	imgHolder = $.div()
	stage = createjs.stage(800).tick()
	container.A(
			imgHolder,
			stage.canvas
	)
	$.getJSON('/img', function (i) {
		_.each(i,
				function (img) {
					var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
					can.click(function () {
						stage.bm(img.d, function (bm) {
							bm.rCenter().X(400).Y(400)
							TR(bm)
						})
					})
					imgHolder.A(can)
				})
	})
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
	return stage
}

EDIT = function () {
	stage = cjs.stage(800).A()
	container = $.containerDiv()
	imgHolder = $.div()
	container.A(imgHolder, stage.canvas)
	$.getJSON('/img', function (i) {
		imgs = i
		_.each(i, function (img) {
			console.log(img.d)
			var can = $.canvas('X', 100, 100).A().fit(img.d) // must be in body in order to use FIT!
			c = can
			can.click(function () {
				stage.bm(img.d,
						function (bm) {
							bm.rCenter().X(400).Y(400);
							TR(bm)
						}
				)
			})
			imgHolder.A(can)
		})
	})
//    return stage
	container.dblclick(function () {
		$.post(
				'/img',
				{d: stage.canvas.toDataURL()},  //, dats: x.dats
				function () {
					window.location = window.location
				})
	})
}
EDIT9 = function () {
	z()
	stage = cjs.stage(800).A()
}


