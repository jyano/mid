Dirs = {}
Dirs.Libs = ['../art', '', '_', '_/_',   'web', 'handy', 'cret','cret/cretAnim',
  'bone','can', 'clip' , 'z',
  'store'
  ]
Dirs.Apps = ['_/_web', '_/_can', '_/_bone', '_/_cret', '_/_cretAnim' ,'_/cretGames']
Dirs.Data = ['_/_/animData',
	'_/_/both', '_/_/data', '_/_/deps'

]
////////////
FrontDeps = [ 'us', 'string', 'moment', 'jq', 'bb', 'gpc', 'cjs', 'cjsMC',
 'both', 'superBoth', 'ooo', 'bbAppsData','cssData','easelData',
'polyData','gunnerMC','gunnertron',//'meSprite',
'SSData']
///////////

Libs = {}
Libs.SuperWeb = ['oO', 'dfDefs','web', 'superWeb', 'webAnim', 'webSty', 'webRules', 'webFlex',
	'handy', 'handyInputs','handyJQ', 'handyLists','handyUI','ipsum','ll','scrip','superHandy', 
	'clip', 'superClip',
	'can','canDraw', 'superCan', 
	'ctx', 'ctxDraw', 'superCtx', 'canClip', 'localStorage']
Libs.Cret = [
'cret', 'superCret', 'dob','superDob' ,
	'easelDraw', 'easelProtos','easelText','easelMatrix','easelFilters',
 'graphicsDraw', 'movie', 'spriteSheet', 'tween']
Libs.Bone = [ 
	'bone',
	'bbRouter',   'bbTweet', 'bbViews', 'qT_superTemplate', 
	'bbLocalStorage', 'bbImgGal', 'bbDirtpage',
	  'bbBlogRoll',  'bbBookView', 'bbBreakfastRoll', 'bbColls', 'bbDirectoryAdmin', 
	'superBone',
]

Libs.Box = ['bx', 'sep', 'preBox',
	'worldCreation', 'basicBods',
	'box', 'boxDebug', 'boxBool', 'boxMouse',
	'boxShapes', 'polyShape', 'vector', 'worldQuery',
	'boxBodDef', 'boxBods', 'boxFxts', 'boxKlass',
	'ray', 'geo', 'geoDif', 'geoMeet',
	'bush']
/////
Apps = {}
Apps.Web = ['webApps', 'jQueryApps', 'jQAnimApps', 'handyApps', 'rulesApps','flexApps',
	'canApps', 'canDrawApps', 'ctxApps', 'clipperApps', 'serverApps']
Apps.Cret = ['loaderCreateApps', 'loaderCanApps', 'graphicsDrawApps',
	'easelPolyApps', 'easelGradApps', 'easelDrawApps', 'easelColorApps',
	'createApps', 'bitmapFillApps', 'createExamples']
Apps.CretAnim = [
	'animApps', 'flashAnimApps',
	'mcApps', 'movieApps', 'spriteApps', 'SSApps', 'tweenApps'
]
Apps.Bone = [
	'bbAppsBasic', 'bbApps', 'bbAppsMore',
	 'bbCollApps',   'bbCollTemplateApps', 'bbRouterApps', 'bbSyncApps', 'bbViewTemplateApps'
]
$static = function (dirName) {
	$a.use($e.static(__dirname + '/' + dirName))
}
$statics = function (dirs) {
	_.e(dirs, function (dir) {
		_.e(dir, function (dir) {
			$static(dir)
		})
	})
}
$statics([Dirs.Libs, Dirs.Apps, Dirs.Data])
$jsA = function (jsArr) {
	var $js = function () {
		var str = ''
		_.each(arguments, function (src) {
			str += '<script src="/' + src + '.js"></script>'
		})
		return str
	}
	return $js.apply($js, jsArr)
}
$Js = function (arr) {
	if (A(arr)) {
		var scripts = ''
		_.e(arguments, function (arr) {
			arr = A(arr) ? arr : [arr]
			scripts += $jsA(arr)
		})
		return scripts
	}
	return $jsA(arguments)
}
msg = ' - - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  - - - - - -- - - - - - --  -- - - - - -- - - - - -- ' +
' -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - ' +
'--  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - - -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - -'  
$a.g('/z/:app', function (q, p) {
	$l('z')
	app = q.params.app.toUpperCase();  
	$l('app: ' + app)
	

	log ='<script>console.log("'+msg  +'");</script>'
	var html = log + $Js(FrontDeps, Libs.SuperWeb, Libs.Cret, Libs.Bone,
					Apps.Web, Apps.Cret, Apps.CretAnim, Apps.Bone)
	
	html += '<script> $(function(){$l("app:  ' + app + '"); ' + app + '()})</script>'
	
	//$l('here is the html..\n\n'+ html)
	p.send(html)
})