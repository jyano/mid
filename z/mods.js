 
Note = _M({
	defaults: function () {
		return {
			content: "Note created on " + new Date().toISOString()
		}
	}
})
 
Td = $M({df: {title: '', completed: false}});

Td = _M({
	df: function () {
		return {
			title: "empty td...",
			order: Tds.nextOrder(),
			done: false
		}
	},
	initialize: function () {
		if (!this.g("title")) {
			this.s({title: this.df().title})
		}
	},
	toggle: function () {
		this.sv({done: !this.g("done")})
	}
})