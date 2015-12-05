 

 
TdVw = Bb.V.x({
	tagName: "li", //template: _.template($('#item-template').html()),
	events: {
		"click .toggle": "toggleDone",
		"dblclick .view": "edit", "click a.destroy": "clear",
		"keypress .edit": "updateOnEnter", "blur .edit": "close"
	},
	initialize: function () {
		var vw = this, md = vw.model
		vw.l2(md, 'change', vw.r)
		vw.l2(md, 'destroy', vw.rm)
	},
	r: function () {
		var vw = this, md = vw.model, q = vw.$el
		q.html(vw.template(md.J()))
		q.tK('done', md.g('done')) //
		vw.ip = vw.$('.edit')
		return vw
	},
	toggleDone: function () {
		this.model.toggle()
	},
	edit: function () {
		this.$el.k("editing");
		this.ip.fc()
	},
	close: function () {
		var vw = this, md = vw.model
		var v = vw.ip.v();
		if (!v) {
			vw.clear()
		}
		else {
			md.sv({title: v});
			vw.$el.rK("editing")
		}
	},
	updateOnEnter: function (e) {
		if (e.keyCode == 13) {
			this.close()
		}
	},
	clear: function () {
		this.ds()
	}
})
AppVw = Bb.V.x({
	el: $("#todoapp"),
	// statsTemplate: _.template($('#stats-template').html()), // Our template for the line of statistics at the bottom of the app.
	events: {
		"keypress #new-todo": "createOnEnter",
		"click #clear-completed": "clearCompleted",
		"click #toggle-all": "toggleAllComplete"
	},
	initialize: function () {
		var vw = this
		vw.ip = vw.$("#new-todo");
		vw.allCb = vw.$("#toggle-all")[0];
		vw.l2(Tds, 'add', vw.addOne);
		vw.l2(Tds, 'reset', vw.addAll);
		vw.l2(Tds, 'all', vw.render)
		vw.footer = vw.$('footer');
		vw.main = $('#main');
		Tds.fe()
	},
	render: function () {
		var vw = this,
				done = _.z(Tds.done()),
				remaining = _.z(Tds.remaining())
		if (_.z(Tds)) {
			vw.main.sh();
			vw.footer.sh()
			vw.footer.html(vw.statsTemplate({done: done, remaining: remaining}))
		}
		else {
			vw.main.hd();
			vw.footer.hd()
		}
		if (!this.allCb) {
			$l('!this.allCb')
		}
		else {
			this.allCb.checked = !remaining
		}
	},
	addOne: function (td) {
		var vw = new TdVw({model: td})
		this.$("#todo-list").A(vw.r().el)
	},
	addAll: function () {
		Tds.each(this.addOne, this)
	},
	createOnEnter: function (e) {
		if (e.keyCode != 13) {
			return
		}
		if (!this.ip.v()) {
			return
		}
		;
		Tds.cr({title: this.ip.v()});
		this.ip.v('')
	},
	clearCompleted: function () {
		_.iv(Tds.done(), 'destroy');
		return false;
	},
	toggleAllComplete: function () {
		Tds.each(function (td) {
			td.sv({'done': this.allCb.checked})
		})
	}
})
MsView = Bb.V.x({})
MssView = Bb.V.x({})