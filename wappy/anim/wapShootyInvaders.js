SHOOTY = function () {St().dg()

	stage.mug(function (mug) {
	 
		 
		key(mug.XY(100, 100).WH(150).SL(), '-')
		// ugun(mug)
	})
	
	cv = ghostMe().A().dg().XY(10)
	
}
function ghostMe() {// how cool.. it 'steals' the drag because its on top but looks like its below
	return $.c('X', 500, 500).fit('me').al(.1)
}
