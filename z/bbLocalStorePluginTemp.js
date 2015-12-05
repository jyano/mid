function save() {

	// Save the current state of the **Store** to *localStorage*.
	this.localStorage().setItem(
			this.name, this.records.join(",")
	)
}

function update(md) {	 // Update a md by replacing its copy in `this.data`.
	this.localStorage().setItem(this._itemName(md.id),
			this.serializer.serialize(md))
	var mdId = md.id.toString()
	if (!contains(this.records, mdId)) {
		this.records.push(mdId)
		this.save()
	}
	return this.find(md)
}
function create(md) {	 // Add a md, giving it a (hopefully)-unique GUID, if it doesn't already
	// have an id of it's own.
	if (!md.id && md.id !== 0) {
		md.id = guid()
		md.set(md.idAttribute, md.id)
	}
	this.localStorage().setItem(this._itemName(md.id),
			this.serializer.serialize(md))
	this.records.push(md.id.toString())
	this.save();
	return this.find(md)
}
function destroy(md) {// Delete a md from `this.data`, returning it
	this.localStorage().removeItem(this._itemName(md.id));
	var mdId = md.id.toString();
	for (var i = 0, id; i < this.records.length; i++) {
		if (this.records[i] === mdId) {
			this.records.splice(i, 1);
		}
	}
	this.save();
	return md;
}
function find(md) { // Retrieve a md from `this.data` by id.
	return this.serializer.deserialize(
			this.localStorage().getItem(this._itemName(md.id)))
}
function findAll() {
	var result = []
	for (var i = 0, id, data; i < this.records.length; i++) {
		id = this.records[i]
		data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
		if (data != null) result.push(data)
	}
	return result
}
function localSync(method, md, options) {
	// localSync delegate to the md or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
	var store = result(md, 'localStorage') || result(md.collection, 'localStorage');
	var resp, errorMessage;
	//If $ is having Deferred - use it.
	var syncDfd = bb.$ ?
			(bb.$.Deferred && bb.$.Deferred()) :
			(bb.Deferred && bb.Deferred());
	try {
		switch (method) {
			case "read":
				resp = md.id != undefined ? store.find(md) : store.findAll();
				break;
			case "create":
				resp = store.create(md);
				break;
			case "update":
				resp = store.update(md);
				break;
			case "delete":
				resp = store.destroy(md);
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
				options.success(md, resp, options);
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
				options.error(md, errorMessage, options);
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
function sync(met, md, op) {
	
	// Override 'bb.sync' to default to localSync,
	// the original 'bb.sync' is still available in 'bb.ajaxSync'
	return bb.getSyncMethod(md, op).apply(this, [met, md, op])
}
function getSyncMethod(md, options) {
	forceAjaxSync = options && options.ajaxSync
	if (!forceAjaxSync && (result(md, 'localStorage') ||
			result(md.collection, 'localStorage'))) {
		return bb.localSync
	}
	return bb.ajaxSync
}

bbLocStorPLUG  = function () {
	function amd(root, factory) {
		if (typeof exports === 'object' && typeof require === 'function') {
			module.exports = factory(require("backbone"));
		} else if (typeof define === "function" && define.amd) {
			// AMD. Register as an anonymous module.
			define(["backbone"], function (bb) {
				// Use global variables if the locals are undefined.
				return factory(bb || root.bb)
			})
		}
		else {
			factory(bb)
		}
	}
	
	function S4() {// Generate four random hex digits.
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	};
	function guid() {// Generate a pseudo-GUID by concatenating random hexadecimal.
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

// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.
	amd(this, function (bb) {
		createStore()
		bb.LocalStorage.sync = window.Store.sync = bb.localSync = localSync
		bb.ajaxSync = bb.sync
		bb.getSyncMethod = getSyncMethod
		bb.sync = sync
		return bb.LocalStorage
	})
	function createStore() {
		Store = bb.LocalStorage = function (name, serializer) {
			
			// Our Store is represented by a single JS object in *localStorage*. Create it
			// with a meaningful name, like the name you'd give a table.
			// window.Store is deprectated, use bb.LocalStorage instead
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
		}
		extend(bb.LocalStorage.prototype,  {
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
			},
			save: save,
			create: create,
			update: update,
			find: find,
			findAll: findAll,
			destroy: destroy
		})
		 
	}
}
