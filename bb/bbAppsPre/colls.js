 
NoteCollection = _C({
	//model: Note,
	//localStorage: new Bb.LocalStorage("choose-some-identifier")
})

TdList = _C({
	//model: Todo,
	//localStorage: new Bb.LocalStorage("td-bb"),
	done: function () {
		return this.fl(function (td) {
			return td.g('done')
		})
	},
	remaining: function () {
		return this.wo.apply(this, this.done())
	},
	nextOrder: function () {
		if (!_.z(this)) {
			return 1
		}
		return this.la().g('order') + 1
	},
	comparator: function (td) {
		return td.g('order')
	}
})
 