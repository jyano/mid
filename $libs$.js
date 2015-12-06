Dirs = {}
Dirs.Libs = ['../art', '', '_', 'superWeb', 'gren', 'superBone']
Dirs.Apps = ['_superWeb', '_bone', '_gren', '_grenAnim']
////////////
FrontDeps = ['_polyVerts', 'us', 'string', 'moment', 'jq', 'bb', 'gpc', 'cjs', 'cjsMC', 'both', 'frontOb']
///////////
Libs = {}
Libs.SuperWeb = ['superJQuery', 'handy', 'rules', 'clipper', 'superCanvas', 'context2d']
Libs.Gren = ['easelPre', 'create', 'displayOb', 'easelDraw', 'easelProtos', 'graphicsDraw', 'movie', 'spriteSheet', 'tween']
Libs.Bone = ['bbPre', 'bbBase',
	'bbRouter', 'bbServer', 'bbTweet', 'bbViews', 'qT_superTemplate', 'rainyDay',
	'bbLocalStorage', 'bbItemsNotesTaskTodos', 'bbImgGal', 'bbDirtpage',
	'bbAvail', 'bbBlog', 'bbBook', 'bbBookView', 'bbBreakfastRoll', 'bbColls', 'bbDirectoryAdmin',
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
Apps.Gren = ['loaderCreateApps', 'loaderCanApps', 'graphicsDrawApps',
	'easelPolyApps', 'easelGradApps', 'easelDrawApps', 'easelColorApps',
	'createApps', 'bitmapFillApps', 'createExamples']
Apps.GrenAnim = [
	'animApps', 'flashAnimApps',
	'mcApps', 'movieApps', 'spriteApps', 'SSApps', 'tweenApps'
]
Apps.Bone = [
	'bbApps', 'bbCollApps', '', 'bbCollTemplateApps', 'bbRouterApps', 'bbSyncApps', 'bbViewTemplateApps'
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
$statics([Dirs.Libs, Dirs.Apps])
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
msg = ' - - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  - - - - - -- - - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - - -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - --- - - - - -- - - - - --  -- - - - - -- - - - - --  -- - - - - -'

$a.g('/z/:app', function (q, p) {
	$l('z')
	app = q.params.app.toUpperCase();  
	$l('app: ' + app)
	

	log ='<script>console.log("'+msg  +'");</script>'
	var html = log + $Js(FrontDeps, Libs.SuperWeb, Libs.Gren, Libs.Bone,
					Apps.Web, Apps.Gren, Apps.GrenAnim, Apps.Bone)
	
	html += '<script> $(function(){$l("app:  ' + app + '"); ' + app + '()})</script>'
	
	//$l('here is the html..\n\n'+ html)
	p.send(html)
})
  
  
