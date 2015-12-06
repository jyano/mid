dirData = [
	{ID: '1', fN: 'jason', lN: 'sad', par: 'mom', p: '239-2394', e: 'fasfsd@sd.com'},
	{ID: '2', fN: 'frank', lN: 'fad', par: 'sfad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '3', fN: 'fred', lN: 'fuckman', par: 'dad', p: '239-2394', e: 'fadss@sd.com'},
	{ID: '4', fN: 'rigo', lN: 'sadman', par: '', p: '239-2394', e: 'fas@sd.com'},
	{ID: '5', fN: 'jan', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'fas@sd.com'},
	{ID: '6', fN: 'paul', lN: 'fsamand', par: 'dad', p: '239-2394', e: 'fas@sd.com'},
	{ID: '7', fN: 'steve', lN: 'fsmanad', par: 'mom', p: '239-2394', e: 'rfas@sd.com'},
	{ID: '8', fN: 'scott', lN: 'manfsad', par: 'sfad', p: '239-2394', e: 'afas@sd.com'},
	{ID: '9', fN: 'chad', lN: 'fsadman', par: '', p: '239-2394', e: 'afas@sd.com'},
	{ID: '10', fN: 'greg', lN: 'fsadman', par: '', p: '239-2394', e: 'jas@sd.com'}
]
bksArr = [
	{title: 'yaba daba', author: 'wanda'},
	{title: 'clawface', author: 'deez nuts'},
	{title: 'under the knee', author: 'p .qu rstly'}
]
BBVTdArr = [{t: 'a.com', h: 'a.com'}, {t: 'b.com', h: 'b.com'}, {t: 'c.com', h: 'c.com'}]
codes = {"1": "#pending", "2": "#inProgress", "3": "#completed"}
red = {C: 'r'}
black = {c: 'z'}
displayNone = {display: 'none'}
body = {C: 'z', c: 'w'}
divWrapper = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
divTools = {
	display: 'flex',
	'flex-direction': 'column',
	'align-items': 'center'
}
username = {'font-size': 20, 'text-decoration': 'underline'}
rightBox = {
	float: 'left', width: '250px',
	'margin-left': '20px', border: '3px solid blue'
}
leftBox = {
	float: 'left', padding: '20px', border: '3px solid red'
}
aFilter = {
	C: 'b',
	c: 'y',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
aFilterHelper = {
	C: 'y',
	c: 'b',
	P: '5px 10px',
	M: '5px',
	'border-radius': '3px',
	'text-decoration': 'none'
}
bucCSS = {$leftbox: leftBox, $rightbox: rightBox}
twtCss = {_un: username, _sts: {}}
CssOb = {
	body: body,
	'.details': displayNone,
	'.active': red,
	'a.filter': aFilter,
	'a.filter:hover': aFilterHelper,
	'div#wrapper': divWrapper,
	'div.tools': divTools,
	'input#searchBox': black
}
JQLScss = {
	// {
	// width:250; // float:left;
	// mar:0;
	// background-color:gray;
	// min-height:240;
	// border-radius:10;
	// padding-bottom:15;
	// }
	'.task-list': {
		w: '250px', float: 'left',
		mar: '0px', C: 'gray', 'min-height': '240px',
		'border-radius': '10px', 'padding-bottom': '15px'
	},
	h3: {'text-align': 'center'},
	'.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},
	'.task-list input': {h: '30px'},
	'.task-list input[type="button"]': {w: '100px', mar: '5px'},
	'.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},
	'.td-task > .task-header': {'font-weight': 'bold'},
	'.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
	'.td-task > .task-desc': {'font-size': 'smaller'},
	'#delete-div': {
		C: 'b', bor: '3px dotted #000', mar: '10px', h: '75px',
		'line-height': '75px', 'text-align': 'center'
	}
}
Quiz0 = function (title) {
	this.title = title
}