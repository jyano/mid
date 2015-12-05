$mg = require('mongoose')
Schema = $mg.Schema
$mg.connect("mongodb://localhost/final", function () {
	$l(' - mg - ')
})
SCHEMAS = {
	user: {
		username: {type: String, required: true},     //username: {type:String, required:true},
		password: String,
		//m: { type: String, default: '/me.png' },
		//mug: { type: String, default: '/me.png' },  //mugData.. no mugId //mugData.. no mugId
		mug: {
			type: String//, default: require('./defaultMug')
		},
		status: {type: String, default: 'nothing much'},
		buds: [String]
	},
	pic: {
		user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
		//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
		date: {type: Date, default: Date.now},
		modified: Date,
		size: Number,
		name: String,
		ext: String
	},
	img: {
		username: String, u: String,
		date: Date,
		data: String, d: String,
		name: String,
		dats: [Number],
		physicsData: [Number]
	},
	thing: {name: String, age: Number},
	//guy: {n: {type: S, required: true}, m: S, x: N, y: N}, //map:{n:S, guys:O},
	book: {
		userId: {
			type: $mg.Schema.Types.ObjectId,
			ref: 'user', required: true
		},
		title: String,
		chapters: ['chapter']  // ???
	},
	sort: {
		username: {type: String, required: true},
		datetime: {type: Date, default: Date.now},
		title: String,
		items: {type: [{}], default: []}
	},
	status: {
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	},
	availability: {
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		text: String
	},
	post: {
		datetime: {type: Date, default: Date.now},
		username: {type: String, required: true},
		title: String,
		text: String,
		dataURl: String
	},
	message: { //msg
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now},
		title: String,
		text: String
	},
	//buddy request
	buddyRequest: {
		from: {type: String, required: true},
		to: {type: String, required: true},
		datetime: {type: Date, default: Date.now}
	},
	Topic: {
		topic: String,
		items: {type: [{}], default: []}
	}, Message: {
		topicId: Number, //?
		topicName: String,
		text: String,
		score: Number
	}, Comment: {},
	link: {
		title: String,
		url: String
	}
}
$md = $m = {}
for (var model in SCHEMAS) {
	
	//str += (' - ' + model )
	$md[model] = $mg.model(
			model,
			$mg.Schema(SCHEMAS[model])
	)
}
userSchema = new $mg.Schema({
	un: {type: String, required: true},
	pw: String,
	pf: Object,
	mug: {type: String, default: '/me.png'},
	mugURL: String,
	buds: [String]
})
picSchema = new $mg.Schema({
	user: {type: $mg.Schema.Types.ObjectId, ref: 'user', required: true},
	//user: {type: $mg.Schema.Types.ObjectId, ref:'user', required:true},
	date: {type: Date, default: Date.now},
	modified: Date,
	size: Number,
	name: String,
	ext: String
})
imageSchema = new $mg.Schema({
	username: String,
	date: Date,
	data: String,
	name: String,
	dats: [Number],
	physicsData: [Number]
})
satusSchema = new $mg.Schema({
	datetime: {type: Date, default: Date.now},
	username: {type: String, required: true},
	text: String
})
availabilitySchema = new $mg.Schema({
	datetime: {type: Date, default: Date.now},
	username: {type: String, required: true},
	text: String
})
postSchema = new $mg.Schema({
	datetime: {type: Date, default: Date.now},
	username: {type: String, required: true},
	title: String,
	text: String,
	dataURl: String
})
buddyRequestSchema = new $mg.Schema({
	from: {type: String, required: true},
	to: {type: String, required: true},
	datetime: {type: Date, default: Date.now}
})
mailSchema = new $mg.Schema({
	from: {type: String, required: true},
	to: {type: String, required: true},
	datetime: {type: Date, default: Date.now},
	title: String,
	text: String
})
User = $mg.model('User', userSchema)
//	Profile = $mg.model('Profile', pfSchema)
BlogSchema = new Schema({author: String, title: String, url: String})
$mg.model('blog', BlogSchema)
Blog = $mg.model('blog')