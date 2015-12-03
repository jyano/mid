LSTD = function () {
	$.x();
	$Ms('BBlS')
	Td = Bb.M.x({
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
	TdList = Bb.C.x({
		model: Todo,
		localStorage: new Bb.LocalStorage("td-bb"),
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
	Tds = new TdList
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
	App = new AppVw
}
BABY = function () {
	z()
	m = new Bb.M({})
	$d(m)
}
MINLS = function () {
	z()  //Minimal Bb.localStorage example
	//THE MODEL AND THE COLLECTION
	//In order to use Bb.localStorage to save a model
	// we also need a collection.
	// The `localStorage` property of the collection
	// needs to be set to a new Bb.LocalStorage object
	// with an identifier for the collection
	// that is used when reading or writing the model values to LocalStorage.
	//The defaults function of the model
	// returns an object with a content property
	// that makes it easy to identify when the model was added to the collection
	// and if it's new or has been fetched from local storage.
	//ADDING AND SAVING NOTE MODELS
	//Bb collections have a fetch method that retrieves models from the server or,
	// in this case, local storage.
	//Before calling save on the model we need to add it to the collection,
	// otherwise Bb would attempt to use an Http request to store it on a server.
	Note = Bb.M.x({
		defaults: function () {
			return {
				content: "Note created on " + new Date().toISOString()
			}
		}
	})
	NoteCollection = Bb.C.x({
		model: Note,
		localStorage: new Bb.LocalStorage("choose-some-identifier")
	})
	myNotes = new NoteCollection()
	myNotes.fetch();
	note1 = new Note();
	myNotes.add(note1);
	note1.sv()
	myNotes.models.forEach(function (md) {
		$l("Md in cl: " + md.g("content"))
	})
}
LS1 = function () {
	z();
	$Ms('LS1')
	bksArr = [
		{title: 'yaba daba', author: 'wanda'},
		{title: 'clawface', author: 'deez nuts'},
		{title: 'under the knee', author: 'p .qu rstly'}
	]
	Bks = Bb.C.x({
		model: Bb.M,
		localStorage: new Bb.LocalStorage('bks')
	})
	bks = new Bks(bksArr)
	Dude = Bb.M
	d = new Dude()
	d1 = Dude.c
	//bks.save()
}
function more() {
	bbLocStorPLUG = function () {
		(function (root, factory) {
			if (typeof exports === 'object' && typeof require === 'function') {
				module.exports = factory(require("backbone"));
			} else if (typeof define === "function" && define.amd) {
				// AMD. Register as an anonymous module.
				define(["backbone"], function (bb) {
					// Use global variables if the locals are undefined.
					return factory(bb || root.bb);
				});
			} else {
				factory(bb);
			}
		}(this, function (bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
			function S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			};
// Generate a pseudo-GUID by concatenating random hexadecimal.
			function guid() {
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			};
			function isObject(item) {
				return item === Object(item);
			}
			
			function contains(array, item) {
				var i = array.length;
				while (i--) if (array[i] === item) return true;
				return false;
			}
			
			function extend(obj, props) {
				for (var key in props) obj[key] = props[key]
				return obj;
			}
			
			function result(object, property) {
				if (object == null) return void 0;
				var value = object[property];
				return (typeof value === 'function') ? object[property]() : value;
			}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
			bb.LocalStorage = window.Store = function (name, serializer) {
				if (!this.localStorage) {
					throw "bb.localStorage: Environment does not support localStorage."
				}
				this.name = name;
				this.serializer = serializer || {
					serialize: function (item) {
						return isObject(item) ? JSON.stringify(item) : item;
					},
					// fix for "illegal access" error on Android when JSON.parse is passed null
					deserialize: function (data) {
						return data && JSON.parse(data);
					}
				};
				var store = this.localStorage().getItem(this.name);
				this.records = (store && store.split(",")) || [];
			};
			extend(bb.LocalStorage.prototype, {
				// Save the current state of the **Store** to *localStorage*.
				save: function () {
					this.localStorage().setItem(this.name, this.records.join(","));
				},
				// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
				// have an id of it's own.
				create: function (model) {
					if (!model.id && model.id !== 0) {
						model.id = guid()
						model.set(model.idAttribute, model.id)
					}
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					this.records.push(model.id.toString())
					this.save();
					return this.find(model)
				},
				// Update a model by replacing its copy in `this.data`.
				update: function (model) {
					this.localStorage().setItem(this._itemName(model.id),
							this.serializer.serialize(model))
					var modelId = model.id.toString()
					if (!contains(this.records, modelId)) {
						this.records.push(modelId)
						this.save()
					}
					return this.find(model)
				},
				// Retrieve a model from `this.data` by id.
				find: function (model) {
					return this.serializer.deserialize(
							this.localStorage().getItem(this._itemName(model.id)))
				},
				// Return the array of all models currently in storage.
				findAll: function () {
					var result = []
					for (var i = 0, id, data; i < this.records.length; i++) {
						id = this.records[i]
						data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
						if (data != null) result.push(data)
					}
					return result
				},
				// Delete a model from `this.data`, returning it.
				destroy: function (model) {
					this.localStorage().removeItem(this._itemName(model.id));
					var modelId = model.id.toString();
					for (var i = 0, id; i < this.records.length; i++) {
						if (this.records[i] === modelId) {
							this.records.splice(i, 1);
						}
					}
					this.save();
					return model;
				},
				localStorage: function () {
					return localStorage;
				},
				// Clear localStorage for specific collection.
				_clear: function () {
					var local = this.localStorage(),
							itemRe = new RegExp("^" + this.name + "-");
					// Remove id-tracking item (e.g., "foo").
					local.removeItem(this.name);
					// Match all data items (e.g., "foo-ID") and remove.
					for (var k in local) {
						if (itemRe.test(k)) {
							local.removeItem(k);
						}
					}
					this.records.length = 0;
				},
				// Size of localStorage.
				_storageSize: function () {
					return this.localStorage().length;
				},
				_itemName: function (id) {
					return this.name + "-" + id;
				}
			})
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
			bb.LocalStorage.sync = window.Store.sync = bb.localSync = function (method, model, options) {
				var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
				var resp, errorMessage;
				//If $ is having Deferred - use it.
				var syncDfd = bb.$ ?
						(bb.$.Deferred && bb.$.Deferred()) :
						(bb.Deferred && bb.Deferred());
				try {
					switch (method) {
						case "read":
							resp = model.id != undefined ? store.find(model) : store.findAll();
							break;
						case "create":
							resp = store.create(model);
							break;
						case "update":
							resp = store.update(model);
							break;
						case "delete":
							resp = store.destroy(model);
							break;
					}
				} catch (error) {
					if (error.code === 22 && store._storageSize() === 0)
						errorMessage = "Private browsing is unsupported";
					else
						errorMessage = error.message;
				}
				if (resp) {
					if (options && options.success) {
						if (bb.VERSION === "0.9.10") {
							options.success(model, resp, options);
						} else {
							options.success(resp);
						}
					}
					if (syncDfd) {
						syncDfd.resolve(resp);
					}
				} else {
					errorMessage = errorMessage ? errorMessage
							: "Record Not Found";
					if (options && options.error)
						if (bb.VERSION === "0.9.10") {
							options.error(model, errorMessage, options);
						} else {
							options.error(errorMessage);
						}
					if (syncDfd)
						syncDfd.reject(errorMessage);
				}
				// add compatibility with $.ajax
				// always execute callback for success and error
				if (options && options.complete) options.complete(resp);
				return syncDfd && syncDfd.promise();
			};
			bb.ajaxSync = bb.sync
			bb.getSyncMethod = function (model, options) {
				forceAjaxSync = options && options.ajaxSync
				if (!forceAjaxSync && (result(model, 'localStorage') ||
						result(model.collection, 'localStorage'))) {
					return bb.localSync
				}
				return bb.ajaxSync
			}
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'
			bb.sync = function (met, md, op) {
				return bb.getSyncMethod(md, op).apply(this, [met, md, op])
			}
			return bb.LocalStorage
		}))
	}
	BBLS = function () {
		$.x()
		bbLocStorPLUG()
		Cl = bb.C.e({
			localStorage: new bb.LocalStorage('clN')
		})
	}
	bbLocStorPLUG = function () {
		(function (root, factory) {
			if (typeof exports === 'object' && typeof require === 'function') {
				module.exports = factory(require("backbone"));
			} else if (typeof define === "function" && define.amd) {
				// AMD. Register as an anonymous module.
				define(["backbone"], function (Backbone) {
					// Use global variables if the locals are undefined.
					return factory(Backbone || root.Backbone);
				});
			} else {
				factory(Backbone);
			}
		}(this, function (Backbone) {
// A simple module to replace `Backbone.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
// Generate four random hex digits.
			function S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			};
// Generate a pseudo-GUID by concatenating random hexadecimal.
			function guid() {
				return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
			};
			function isObject(item) {
				return item === Object(item);
			}
			
			function contains(array, item) {
				var i = array.length;
				while (i--) if (array[i] === item) return true;
				return false;
			}
			
			function extend(obj, props) {
				for (var key in props) obj[key] = props[key]
				return obj;
			}
			
			function result(object, property) {
				if (object == null) return void 0;
				var value = object[property];
				return (typeof value === 'function') ? object[property]() : value;
			}

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use Backbone.LocalStorage instead
			Backbone.LocalStorage = window.Store = function (name, serializer) {
				if (!this.localStorage) {
					throw "Backbone.localStorage: Environment does not support localStorage."
				}
				this.name = name;
				this.serializer = serializer || {
					serialize: function (item) {
						return isObject(item) ? JSON.stringify(item) : item;
					},
					// fix for "illegal access" error on Android when JSON.parse is passed null
					deserialize: function (data) {
						return data && JSON.parse(data);
					}
				};
				var store = this.localStorage().getItem(this.name);
				this.records = (store && store.split(",")) || [];
			};
			extend(Backbone.LocalStorage.prototype, {
				// Save the current state of the **Store** to *localStorage*.
				save: function () {
					this.localStorage().setItem(this.name, this.records.join(","));
				},
				// Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
				// have an id of it's own.
				create: function (model) {
					if (!model.id && model.id !== 0) {
						model.id = guid();
						model.set(model.idAttribute, model.id);
					}
					this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
					this.records.push(model.id.toString());
					this.save();
					return this.find(model);
				},
				// Update a model by replacing its copy in `this.data`.
				update: function (model) {
					this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
					var modelId = model.id.toString();
					if (!contains(this.records, modelId)) {
						this.records.push(modelId);
						this.save();
					}
					return this.find(model);
				},
				// Retrieve a model from `this.data` by id.
				find: function (model) {
					return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
				},
				// Return the array of all models currently in storage.
				findAll: function () {
					var result = [];
					for (var i = 0, id, data; i < this.records.length; i++) {
						id = this.records[i];
						data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
						if (data != null) result.push(data);
					}
					return result;
				},
				// Delete a model from `this.data`, returning it.
				destroy: function (model) {
					this.localStorage().removeItem(this._itemName(model.id));
					var modelId = model.id.toString();
					for (var i = 0, id; i < this.records.length; i++) {
						if (this.records[i] === modelId) {
							this.records.splice(i, 1);
						}
					}
					this.save();
					return model;
				},
				localStorage: function () {
					return localStorage;
				},
				// Clear localStorage for specific collection.
				_clear: function () {
					var local = this.localStorage(),
							itemRe = new RegExp("^" + this.name + "-");
					// Remove id-tracking item (e.g., "foo").
					local.removeItem(this.name);
					// Match all data items (e.g., "foo-ID") and remove.
					for (var k in local) {
						if (itemRe.test(k)) {
							local.removeItem(k);
						}
					}
					this.records.length = 0;
				},
				// Size of localStorage.
				_storageSize: function () {
					return this.localStorage().length;
				},
				_itemName: function (id) {
					return this.name + "-" + id;
				}
			});
// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead
			Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function (method, model, options) {
				var store = result(model, 'localStorage') || result(model.collection, 'localStorage');
				var resp, errorMessage;
				//If $ is having Deferred - use it.
				var syncDfd = Backbone.$ ?
						(Backbone.$.Deferred && Backbone.$.Deferred()) :
						(Backbone.Deferred && Backbone.Deferred());
				try {
					switch (method) {
						case "read":
							resp = model.id != undefined ? store.find(model) : store.findAll();
							break;
						case "create":
							resp = store.create(model);
							break;
						case "update":
							resp = store.update(model);
							break;
						case "delete":
							resp = store.destroy(model);
							break;
					}
				} catch (error) {
					if (error.code === 22 && store._storageSize() === 0)
						errorMessage = "Private browsing is unsupported";
					else
						errorMessage = error.message;
				}
				if (resp) {
					if (options && options.success) {
						if (Backbone.VERSION === "0.9.10") {
							options.success(model, resp, options);
						} else {
							options.success(resp);
						}
					}
					if (syncDfd) {
						syncDfd.resolve(resp);
					}
				} else {
					errorMessage = errorMessage ? errorMessage
							: "Record Not Found";
					if (options && options.error)
						if (Backbone.VERSION === "0.9.10") {
							options.error(model, errorMessage, options);
						} else {
							options.error(errorMessage);
						}
					if (syncDfd)
						syncDfd.reject(errorMessage);
				}
				// add compatibility with $.ajax
				// always execute callback for success and error
				if (options && options.complete) options.complete(resp);
				return syncDfd && syncDfd.promise();
			};
			Backbone.ajaxSync = Backbone.sync;
			Backbone.getSyncMethod = function (model, options) {
				var forceAjaxSync = options && options.ajaxSync;
				if (!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
					return Backbone.localSync;
				}
				return Backbone.ajaxSync;
			};
// Override 'Backbone.sync' to default to localSync,
// the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
			Backbone.sync = function (method, model, options) {
				return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
			};
			return Backbone.LocalStorage;
		}));
	}
	BBLS = function () {
		$.x()
		bbLocStorPLUG()
		Cl = bb.C.e({
			localStorage: new bb.LocalStorage('clN')
		})
	}
}