sS = ss = cjs.SpriteSheet.prototype
sS.flp = sS.addFlipped = function (a, b, c) {
	cjs.SpriteSheetUtils.addFlippedFrames(this, a || true, b || false, c || false)
	return this
}
cjs.sSU = cjs.SpriteSheetUtils
$SS = function (ss) {
	ss.images = ss.images || ss.i
	ss.animations = ss.animations || ss.a
	ss.frames = ss.frames || ss.f
	ss.framerate = ss.framerate || ss.r
	ss = new cjs.SpriteSheet(ss)
	//fix source (needs a '/')
	//ss.images[ 0 ] = _.ensureSlash( ss.images[0] )
	//set next to false, on all anims
	// _.e(ss.animations, function(an){an.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return ss
}
cjs.spriteSheet = function (a) {
	return new cjs.SpriteSheet(a)
}
cjs.parseZoe = function (sprObj) {
	
	
	//fix source (needs a '/')
	sprObj.images[0] = S.eL(sprObj.images[0])
	//set next to false, on all anims
	//_.e(sprObj.animations, function(anim){anim.next = false})
	//to do: parse it! (get rid of unnecessary json strings in keys)
	return sprObj
}