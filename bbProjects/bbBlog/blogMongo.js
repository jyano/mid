BlogSchema = new Schema({author: String, title: String, url: String})
$mg.model('blog', BlogSchema)
Blog = $mg.model('blog')
BlogSchema = new Schema({author: String, title: String, url: String})
mongoose.model('blog', BlogSchema)
Blog = mongoose.model('blog')