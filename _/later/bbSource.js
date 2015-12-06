function eventsApi(iteratee, events, name, callback, opts) {
	var i = 0, names
	if (name && typeof name === 'object') {
		if (callback !== void 0 && 'context' in opts && opts.context === void 0) {
			opts.context = callback
		}
		for (names = _.k(name); i < names.length; i++) {
			events = eventsApi(iteratee, events, names[i], name[names[i]], opts)
		}
	}
	else if (name && eventSplitter.test(name)) {
		for (names = name.split(eventSplitter); i < names.length; i++) {
			events = iteratee(events, names[i], callback, opts)
		}
	}
	else {
		events = iteratee(events, name, callback, opts)
	}
	return events
}
function internalOn(obj, name, callback, context, listening) {
	obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
		context: context,
		ctx: obj,
		listening: listening
	})
	if (listening) {
		var listeners = obj._listeners || (obj._listeners = {});
		listeners[listening.id] = listening;
	}
	return obj
}
function onApi(events, name, callback, op) {
	if (callback) {
		var handlers = events[name] || (events[name] = []);
		var context = op.context, ctx = op.ctx, listening = op.listening;
		if (listening) listening.count++;
		handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	}
	return events;
};
function offApi(events, name, callback, op) {
	if (!events) return;
	var i = 0, listening;
	var context = op.context, listeners = op.listeners;
	if (!name && !callback && !context) {
		var ids = _.k(listeners);
		for (; i < ids.length; i++) {
			listening = listeners[ids[i]];
			delete listeners[listening.id];
			delete listening.listeningTo[listening.objId];
		}
		return;
	}
	var names = name ? [name] : _.k(events);
	for (; i < names.length; i++) {
		name = names[i];
		var handlers = events[name];
		if (!handlers) break;
		var remaining = [];
		for (var j = 0; j < handlers.length; j++) {
			var handler = handlers[j];
			if (
					callback && callback !== handler.callback &&
					callback !== handler.callback._callback ||
					context && context !== handler.context
			) {
				remaining.push(handler);
			} else {
				listening = handler.listening;
				if (listening && --listening.count === 0) {
					delete listeners[listening.id];
					delete listening.listeningTo[listening.objId];
				}
			}
		}
		if (remaining.length) {
			events[name] = remaining;
		} else {
			delete events[name];
		}
	}
	if (_.z(events)) return events;
}
function onceMap(map, name, callback, offer) {
	if (callback) {
		var once = map[name] = _.o(function () {
			offer(name, once);
			callback.apply(this, arguments);
		});
		once._callback = callback;
	}
	return map;
}
function triggerApi(objEvents, name, cb, args) {
	if (objEvents) {
		var events = objEvents[name];
		var allEvents = objEvents.all;
		if (events && allEvents) allEvents = allEvents.slice();
		if (events) triggerEvents(events, args);
		if (allEvents) triggerEvents(allEvents, [name].concat(args));
	}
	return objEvents;
}
function triggerEvents(events, args) {
	var ev, i = -1, l = events.length,
			a1 = args[0], a2 = args[1], a3 = args[2];
	switch (args.length) {
		case 0:
			while (++i < l) (ev = events[i]).callback.call(ev.ctx);
			return;
		case 1:
			while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1);
			return;
		case 2:
			while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2);
			return;
		case 3:
			while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
			return;
		default:
			while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
			return;
	}
}
Events = Bb.Events = {}
Events.trigger = function (n) {
	var Ev = this
	if (!Ev._events) {
		return Ev
	}
	var len = M.max(0, _.z(arguments) - 1), args = Array(len)
	for (var i = 0; i < len; i++) {
		args[i] = arguments[i + 1]
	}
	eventsApi(triggerApi, Ev._events, n, void 0, args)
	return Ev
}
Events.on = function (name, callback, context) {
	return internalOn(this, name, callback, context);
}
Events.l2 = Events.listenTo = function (obj, name, callback) {
	if (!obj) return this;
	var id = obj._listenId || (obj._listenId = _.uI('l'));
	var listeningTo = this._listeningTo || (this._listeningTo = {});
	var listening = listeningTo[id];
	if (!listening) {
		var thisId = this._listenId || (this._listenId = _.uI('l'));
		listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	}
	internalOn(obj, name, callback, this, listening);
	return this;
}
Events.off = function (name, callback, context) {
	if (!this._events) return this;
	this._events = eventsApi(offApi, this._events, name, callback, {
		context: context,
		listeners: this._listeners
	});
	return this;
}
Events.stopListening = function (obj, name, callback) {
	var listeningTo = this._listeningTo;
	if (!listeningTo) return this;
	var ids = obj ? [obj._listenId] : _.k(listeningTo);
	for (var i = 0; i < ids.length; i++) {
		var listening = listeningTo[ids[i]];
		if (!listening) break;
		listening.obj.off(name, callback, this);
	}
	if (_.iE(listeningTo)) this._listeningTo = void 0;
	return this;
}
Events.once = function (name, callback, context) {
	var events = eventsApi(onceMap, {}, name, callback, _.b(this.off, this));
	return this.on(events, void 0, context);
}
Events.l1 = Events.l21 = Events.listenToOnce = function (obj, name, callback) {
	var events = eventsApi(onceMap, {}, name, callback, _.b(this.stopListening, this, obj));
	return this.listenTo(obj, events);
};
Events.bind = Events.on;
Events.unbind = Events.off;
_.x(Bb, Events)
function sourceIthink() {
	function routeHist() {
		Router = Bb.Router = function (op) {
			op || (op = {});
			if (op.routes) this.routes = op.routes;
			this._bindRoutes();
			this.initialize.apply(this, arguments);
		};
		_.x(Router.prototype, Events, {
			initialize: function () {
			},
			route: function (route, name, callback) {
				if (!_.iRE(route)) route = this._routeToRegExp(route);
				if (F(name)) {
					callback = name;
					name = '';
				}
				if (!callback) callback = this[name];
				var router = this;
				Bb.history.route(route, function (fragment) {
					var args = router._extractParameters(route, fragment);
					if (router.execute(callback, args, name) !== false) {
						router.trigger.apply(router, ['route:' + name].concat(args));
						router.trigger('route', name, args);
						Bb.history.trigger('route', router, name, args);
					}
				});
				return this;
			},
			execute: function (callback, args, name) {
				if (callback) callback.apply(this, args);
			},
			navigate: function (fragment, op) {
				Bb.history.navigate(fragment, op);
				return this;
			},
			_bindRoutes: function () {
				if (!this.routes) return;
				this.routes = _.rs(this, 'routes');
				var route, routes = _.k(this.routes);
				while ((route = routes.pop()) != null) {
					this.route(route, this.routes[route]);
				}
			},
			_routeToRegExp: function (route) {
				route = route.replace(escapeRegExp, '\\$&')
						.replace(optionalParam, '(?:$1)?')
						.replace(namedParam, function (match, optional) {
							return optional ? match : '([^/?]+)';
						})
						.replace(splatParam, '([^?]*?)');
				return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
			},
			_extractParameters: function (route, fragment) {
				var pams = route.exec(fragment).slice(1);
				return _.m(pams, function (pam, i) {
					if (i === pams.length - 1) return pam || null;
					return pam ? decodeURIComponent(pam) : null;
				});
			}
		});
		History = Bb.History = function () {
			this.handlers = [];
			this.checkUrl = _.b(this.checkUrl, this);
			if (typeof window !== 'undefined') {
				this.location = window.location;
				this.history = window.history;
			}
		};
		History.started = false;
		_.x(History.prototype, Events, {
			interval: 50,
			getSearch: function () {
				var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
				return match ? match[0] : '';
			},
			atRoot: function () {
				var pt = this.location.pathname.replace(/[^\/]$/, '$&/');
				return (pt === this.root) && !this.getSearch();
			},
			matchRoot: function () {
				var pt, root
				pt = this.decodeFragment(this.location.pathname);
				root = pt.slice(0, this.root.length - 1) + '/'
				return root === this.root;
			},
			decodeFragment: function (fragment) {
				return decodeURI(fragment.replace(/%25/g, '%2525'));
			},
			getHash: function (window) {
				var match = (window || this).location.href.match(/#(.*)$/);
				return match ? match[1] : ''
			},
			getPath: function () {
				var pt = this.decodeFragment(
						this.location.pathname + this.getSearch()
				).slice(this.root.length - 1);
				return pt.charAt(0) === '/' ?
						pt.slice(1) : pt
			},
			getFragment: function (frg) {
				var routeStripper = /^[#\/]|\s+$/g
				if (frg == null) {
					frg = (this._usePushState || !this._wantsHashChange) ?
							this.getPath() : this.getHash()
				}
				return frg.replace(routeStripper, '')
			},
			start: function (op) {
				if (History.started) throw new Error('Bb.history has already been started');
				History.started = true;
				this.op = _.x({root: '/'}, this.op, op);
				this.root = this.op.root;
				this._wantsHashChange = this.op.hashChange !== false;
				this._hasHashChange = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
				this._useHashChange = this._wantsHashChange && this._hasHashChange;
				this._wantsPushState = !!this.op.pushState;
				this._hasPushState = !!(this.history && this.history.pushState);
				this._usePushState = this._wantsPushState && this._hasPushState;
				this.fragment = this.getFragment();
				this.root = ('/' + this.root + '/').replace(rootStripper, '/');
				if (this._wantsHashChange && this._wantsPushState) {
					if (!this._hasPushState && !this.atRoot()) {
						var root = this.root.slice(0, -1) || '/';
						this.location.replace(root + '#' + this.getPath());
						return true;
					} else if (this._hasPushState && this.atRoot()) {
						this.navigate(this.getHash(), {replace: true});
					}
				}
				if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
					this.iframe = document.createElement('iframe');
					this.iframe.src = 'javascript:0';
					this.iframe.style.display = 'none';
					this.iframe.tabIndex = -1;
					var body = document.body;
					var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
					iWindow.document.open();
					iWindow.document.close();
					iWindow.location.hash = '#' + this.fragment;
				}
				var addEventListener = window.addEventListener || function (eventName, listener) {
							return attachEvent('on' + eventName, listener)
						}
				if (this._usePushState) {
					addEventListener('popstate', this.checkUrl, false);
				}
				else if (this._useHashChange && !this.iframe) {
					addEventListener('hashchange', this.checkUrl, false);
				}
				else if (this._wantsHashChange) {
					this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
				}
				if (!this.op.silent) {
					return this.loadUrl()
				}
			},
			stop: function () {
				var removeEventListener = window.removeEventListener || function (eventName, listener) {
							return detachEvent('on' + eventName, listener);
						};
				if (this._usePushState) {
					removeEventListener('popstate', this.checkUrl, false);
				} else if (this._useHashChange && !this.iframe) {
					removeEventListener('hashchange', this.checkUrl, false);
				}
				if (this.iframe) {
					document.body.removeChild(this.iframe);
					this.iframe = null;
				}
				if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
				History.started = false;
			},
			route: function (route, callback) {
				this.handlers.unshift({route: route, callback: callback});
			},
			checkUrl: function (e) {
				var current = this.getFragment();
				if (current === this.fragment && this.iframe) {
					current = this.getHash(this.iframe.contentWindow);
				}
				if (current === this.fragment) return false;
				if (this.iframe) this.navigate(current);
				this.loadUrl();
			},
			loadUrl: function (fragment) {
				if (!this.matchRoot()) return false;
				fragment = this.fragment = this.getFragment(fragment);
				return _.so(this.handlers, function (handler) {
					if (handler.route.test(fragment)) {
						handler.callback(fragment);
						return true;
					}
				});
			},
			navigate: function (frg, op) {
				$l('navigate (in bb src)')
				var root, url
				if (!History.started) {
					return false
				}
				if (!op || op === true) {
					op = {trigger: !!op}
				}
				frg = this.getFragment(frg || '')
				$l('frg: ' + frg + ' (in bb src)')
				root = this.root
				if (frg === '' || frg.charAt(0) === '?') {
					root = root.slice(0, -1) || '/'
				}
				url = root + frg
				frg = this.decodeFragment(frg.replace(pathStripper, ''))
				if (this.frg === frg) {
					return
				}
				this.frg = frg
				if (this._usePushState) {
					this.history[
							op.replace ? 'replaceState' : 'pushState'
							]({}, document.title, url)
				}
				else if (this._wantsHashChange) {
					this._updateHash(this.location, frg, op.replace);
					if (this.iframe && (frg !== this.getHash(this.iframe.contentWindow))) {
						var iWindow = this.iframe.contentWindow
						if (!op.replace) {
							iWindow.document.open();
							iWindow.document.close()
						}
						this._updateHash(iWindow.location, frg, op.replace)
					}
				}
				else {
					return this.location.assign(url)
				}
				if (op.trigger) {
					return this.loadUrl(frg)
				}
			},
			_updateHash: function (location, fragment, replace) {
				if (replace) {
					var href = location.href.replace(/(javascript:|#).*$/, '');
					location.replace(href + '#' + fragment);
				} else {
					location.hash = '#' + fragment;
				}
			}
		})
		Bb.history = new History;
	}
	
	function modl() {
		Model = Bb.Model = function (attributes, op) {
			var attrs = attributes || {};
			op || (op = {});
			this.cid = _.uI(this.cidPrefix);
			this.attributes = {};
			if (op.collection) this.collection = op.collection;
			if (op.parse) attrs = this.parse(attrs, op) || {};
			attrs = _.d({}, attrs, _.rs(this, 'defaults'));
			this.set(attrs, op);
			this.changed = {};
			this.initialize.apply(this, arguments);
		};
		_.x(Model.prototype, Events, {
			changed: null,
			validationError: null,
			idAttribute: 'id',
			cidPrefix: 'c',
			initialize: function () {
			},
			toJSON: function (op) {
				return _.cl(this.attributes);
			},
			sync: function () {
				return Bb.sync.apply(this, arguments);
			},
			get: function (attr) {
				return this.attributes[attr];
			},
			escape: function (attr) {
				return _.es(this.get(attr));
			},
			has: function (attr) {
				return this.get(attr) != null;
			},
			matches: function (attrs) {
				return !!_.it(attrs, this)(this.attributes);
			},
			set: function (key, val, op) {
				if (key == null) return this;
				var attrs;
				if (typeof key === 'object') {
					attrs = key;
					op = val;
				} else {
					(attrs = {})[key] = val;
				}
				op || (op = {});
				if (!this._validate(attrs, op)) return false;
				var unset = op.unset;
				var silent = op.silent;
				var changes = [];
				var changing = this._changing;
				this._changing = true;
				if (!changing) {
					this._previousAttributes = _.cl(this.attributes);
					this.changed = {};
				}
				var current = this.attributes;
				var changed = this.changed;
				var prev = this._previousAttributes;
				for (var attr in attrs) {
					val = attrs[attr];
					if (!_.iEq(current[attr], val)) changes.push(attr);
					if (!_.iEq(prev[attr], val)) {
						changed[attr] = val;
					} else {
						delete changed[attr];
					}
					unset ? delete current[attr] : current[attr] = val;
				}
				this.id = this.get(this.idAttribute);
				if (!silent) {
					if (changes.length) this._pending = op;
					for (var i = 0; i < changes.length; i++) {
						this.trigger('change:' + changes[i], this, current[changes[i]], op);
					}
				}
				if (changing) return this;
				if (!silent) {
					while (this._pending) {
						op = this._pending;
						this._pending = false;
						this.trigger('change', this, op);
					}
				}
				this._pending = false;
				this._changing = false;
				return this;
			},
			unset: function (attr, op) {
				return this.set(attr, void 0, _.x({}, op, {unset: true}));
			},
			clear: function (op) {
				var attrs = {};
				for (var key in this.attributes) attrs[key] = void 0;
				return this.set(attrs, _.x({}, op, {unset: true}));
			},
			hasChanged: function (attr) {
				if (attr == null) return !_.iE(this.changed);
				return _.h(this.changed, attr);
			},
			changedAttributes: function (diff) {
				if (!diff) return this.hasChanged() ? _.cl(this.changed) : false;
				var old = this._changing ? this._previousAttributes : this.attributes;
				var changed = {};
				for (var attr in diff) {
					var val = diff[attr];
					if (_.iEq(old[attr], val)) continue;
					changed[attr] = val;
				}
				return _.z(changed) ? changed : false;
			},
			previous: function (attr) {
				if (attr == null || !this._previousAttributes) return null;
				return this._previousAttributes[attr];
			},
			previousAttributes: function () {
				return _.cl(this._previousAttributes);
			},
			fetch: function (op) {
				op = _.x({parse: true}, op);
				var model = this;
				var success = op.success;
				op.success = function (resp) {
					var serverAttrs = op.parse ? model.parse(resp, op) : resp;
					if (!model.set(serverAttrs, op)) return false;
					if (success) success.call(op.context, model, resp, op);
					model.trigger('sync', model, resp, op);
				};
				wrapError(this, op);
				return this.sync('read', this, op);
			},
			save: function (key, val, op) {
				var attrs;
				if (key == null || typeof key === 'object') {
					attrs = key;
					op = val;
				} else {
					(attrs = {})[key] = val;
				}
				op = _.x({validate: true, parse: true}, op);
				var wait = op.wait;
				if (attrs && !wait) {
					if (!this.set(attrs, op)) return false;
				} else {
					if (!this._validate(attrs, op)) return false;
				}
				var model = this;
				var success = op.success;
				var attributes = this.attributes;
				op.success = function (resp) {
					model.attributes = attributes;
					var serverAttrs = op.parse ? model.parse(resp, op) : resp;
					if (wait) serverAttrs = _.x({}, attrs, serverAttrs);
					if (serverAttrs && !model.set(serverAttrs, op)) return false;
					if (success) success.call(op.context, model, resp, op);
					model.trigger('sync', model, resp, op);
				};
				wrapError(this, op);
				if (attrs && wait) this.attributes = _.x({}, attributes, attrs);
				var met = this.isNew() ? 'create' : (op.patch ? 'patch' : 'update');
				if (met === 'patch' && !op.attrs) op.attrs = attrs;
				var xhr = this.sync(met, this, op);
				this.attributes = attributes;
				return xhr;
			},
			destroy: function (op) {
				op = _.cl(op)
				var model = this,
						success = op.success,
						wait = op.wait,
						xhr = false,
						destroy = function () {
							model.stopListening();
							model.trigger('destroy', model, model.collection, op);
						}
				op.success = function (resp) {
					if (wait) {
						destroy()
					}
					if (success) {
						success.call(op.context, model, resp, op)
					}
					if (!model.isNew()) {
						model.trigger('sync', model, resp, op)
					}
				}
				if (this.isNew()) {
					_.do(op.success)
				}
				else {
					wrapError(this, op);
					xhr = this.sync('delete', this, op)
				}
				if (!wait) {
					destroy()
				}
				return xhr
			},
			url: function () {
				var base =
						_.rs(this, 'urlRoot') ||
						_.rs(this.collection, 'url') ||
						urlError();
				if (this.isNew()) return base;
				var id = this.get(this.idAttribute);
				return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
			},
			parse: function (resp, op) {
				return resp;
			},
			clone: function () {
				return new this.constructor(this.attributes);
			},
			isNew: function () {
				return !this.has(this.idAttribute);
			},
			isValid: function (op) {
				return this._validate({}, _.d({validate: true}, op));
			},
			_validate: function (attrs, op) {
				if (!op.validate || !this.validate) return true;
				attrs = _.x({}, this.attributes, attrs);
				var error = this.validationError = this.validate(attrs, op) || null;
				if (!error) return true;
				this.trigger('invalid', this, error, _.x(op, {validationError: error}));
				return false;
			}
		});
		addUnderscoreMethods(Model, {
					keys: 1, values: 1, pairs: 1, invert: 1,
					pick: 0, omit: 0, chain: 1, isEmpty: 1
				}, 'attributes'
		)
		Collection = Bb.Collection = function (mds, op) {
			op || (op = {});
			if (op.model) this.model = op.model;
			if (op.comparator !== void 0) this.comparator = op.comparator;
			this._reset();
			this.initialize.apply(this, arguments);
			if (mds) this.reset(mds, _.x({silent: true}, op));
		};
		_.x(Collection.prototype, Events, {
			model: Model,
			initialize: function () {
			},
			toJSON: function (op) {
				return this.map(function (md) {
					return md.toJSON(op)
				})
			},
			sync: function () {
				return Bb.sync.apply(this, arguments)
			},
			add: function (mds, op) {
				return this.set(mds, _.x({merge: false}, op, {add: true, remove: false}))
			},
			remove: function (mds, op) {
				op = _.x({}, op);
				var singular = !A(mds);
				mds = singular ? [mds] : _.cl(mds);
				var removed = this._removeModels(mds, op);
				if (!op.silent && removed) this.trigger('update', this, op);
				return singular ? removed[0] : removed;
			},
			set: function (mds, op) {
				if (mds == null) return;
				op = _.d({}, op, {add: true, remove: true, merge: true});
				if (op.parse && !this._isModel(mds)) mds = this.parse(mds, op);
				var singular = !A(mds);
				mds = singular ? [mds] : mds.slice();
				var at = op.at;
				if (at != null) at = +at;
				if (at < 0) at += this.length + 1;
				var set = [];
				var toAdd = [];
				var toRemove = [];
				var modelMap = {};
				var add = op.add;
				var merge = op.merge;
				var remove = op.remove;
				var sort = false;
				var sortable = this.comparator && (at == null) && op.sort !== false;
				var sortAttr = S(this.comparator) ? this.comparator : null;
				for (var i = 0; i < mds.length; i++) {
					model = mds[i]
					var existing = this.get(model);
					if (existing) {
						if (merge && model !== existing) {
							var attrs = this._isModel(model) ? model.attributes : model;
							if (op.parse) attrs = existing.parse(attrs, op);
							existing.set(attrs, op);
							if (sortable && !sort) sort = existing.hasChanged(sortAttr);
						}
						if (!modelMap[existing.cid]) {
							modelMap[existing.cid] = true;
							set.push(existing);
						}
						mds[i] = existing
					} else if (add) {
						model = mds[i] = this._prepareModel(model, op);
						if (model) {
							toAdd.push(model);
							this._addReference(model, op);
							modelMap[model.cid] = true;
							set.push(model);
						}
					}
				}
				if (remove) {
					for (i = 0; i < this.length; i++) {
						model = this.models[i];
						if (!modelMap[model.cid]) toRemove.push(model);
					}
					if (toRemove.length) this._removeModels(toRemove, op);
				}
				var orderChanged = false;
				var replace = !sortable && add && remove;
				if (set.length && replace) {
					orderChanged = this.length != set.length || _.so(this.models, function (model, index) {
						return model !== set[index];
					});
					this.models.length = 0;
					splice(this.models, set, 0);
					this.length = this.models.length;
				} else if (toAdd.length) {
					if (sortable) sort = true;
					splice(this.models, toAdd, at == null ? this.length : at);
					this.length = this.models.length;
				}
				if (sort) this.sort({silent: true});
				if (!op.silent) {
					for (i = 0; i < toAdd.length; i++) {
						if (at != null) op.index = at + i;
						model = toAdd[i];
						model.trigger('add', model, this, op);
					}
					if (sort || orderChanged) this.trigger('sort', this, op);
					if (toAdd.length || toRemove.length) this.trigger('update', this, op);
				}
				return singular ? mds[0] : mds;
			},
			reset: function (mds, op) {
				op = op ? _.cl(op) : {};
				for (var i = 0; i < this.models.length; i++) {
					this._removeReference(this.models[i], op);
				}
				op.previousModels = this.models;
				this._reset();
				mds = this.add(mds, _.x({silent: true}, op));
				if (!op.silent) this.trigger('reset', this, op);
				return mds;
			},
			push: function (model, op) {
				return this.add(model, _.x({at: this.length}, op));
			},
			pop: function (op) {
				var model = this.at(this.length - 1);
				return this.remove(model, op);
			},
			unshift: function (model, op) {
				return this.add(model, _.x({at: 0}, op));
			},
			shift: function (op) {
				var model = this.at(0);
				return this.remove(model, op);
			},
			slice: function () {
				return slice.apply(this.models, arguments);
			},
			get: function (obj) {
				if (obj == null) return void 0;
				var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
				return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
			},
			at: function (index) {
				if (index < 0) index += this.length;
				return this.models[index];
			},
			where: function (attrs, first) {
				return this[first ? 'find' : 'filter'](attrs);
			},
			findWhere: function (attrs) {
				return this.where(attrs, true);
			},
			sort: function (op) {
				var comparator = this.comparator;
				if (!comparator) throw new Error('Cannot sort a set without a comparator');
				op || (op = {});
				var length = comparator.length;
				if (F(comparator)) comparator = _.b(comparator, this);
				if (length === 1 || S(comparator)) {
					this.models = this.sortBy(comparator);
				} else {
					this.models.sort(comparator);
				}
				if (!op.silent) this.trigger('sort', this, op);
				return this;
			},
			pluck: function (attr) {
				return _.iv(this.models, 'get', attr);
			},
			fetch: function (op) {
				op = _.x({parse: true}, op);
				var success = op.success;
				var collection = this;
				op.success = function (resp) {
					var met = op.reset ? 'reset' : 'set';
					collection[met](resp, op);
					if (success) success.call(op.context, collection, resp, op);
					collection.trigger('sync', collection, resp, op);
				};
				wrapError(this, op);
				return this.sync('read', this, op);
			},
			create: function (model, op) {
				op = op ? _.cl(op) : {};
				var wait = op.wait;
				model = this._prepareModel(model, op);
				if (!model) return false;
				if (!wait) this.add(model, op);
				var collection = this;
				var success = op.success;
				op.success = function (model, resp, callbackOpts) {
					if (wait) collection.add(model, callbackOpts);
					if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
				};
				model.save(null, op);
				return model;
			},
			parse: function (resp, op) {
				return resp;
			},
			clone: function () {
				return new this.constructor(this.models, {
					model: this.model,
					comparator: this.comparator
				});
			},
			modelId: function (attrs) {
				return attrs[this.model.prototype.idAttribute || 'id'];
			},
			_reset: function () {
				this.length = 0;
				this.models = [];
				this._byId = {};
			},
			_prepareModel: function (attrs, op) {
				if (this._isModel(attrs)) {
					if (!attrs.collection) attrs.collection = this;
					return attrs;
				}
				op = op ? _.cl(op) : {};
				op.collection = this;
				var model = new this.model(attrs, op);
				if (!model.validationError) return model;
				this.trigger('invalid', this, model.validationError, op);
				return false;
			},
			_removeModels: function (mds, op) {
				var removed = [];
				for (var i = 0; i < mds.length; i++) {
					var model = this.get(mds[i]);
					if (!model) continue;
					var index = this.indexOf(model);
					this.models.splice(index, 1);
					this.length--;
					if (!op.silent) {
						op.index = index;
						model.trigger('remove', model, this, op);
					}
					removed.push(model);
					this._removeReference(model, op);
				}
				return removed.length ? removed : false;
			},
			_isModel: function (model) {
				return model instanceof Model;
			},
			_addReference: function (model, op) {
				this._byId[model.cid] = model;
				var id = this.modelId(model.attributes);
				if (id != null) this._byId[id] = model;
				model.on('all', this._onModelEvent, this);
			},
			_removeReference: function (model, op) {
				delete this._byId[model.cid];
				var id = this.modelId(model.attributes);
				if (id != null) delete this._byId[id];
				if (this === model.collection) delete model.collection;
				model.off('all', this._onModelEvent, this);
			},
			_onModelEvent: function (event, model, collection, op) {
				if ((event === 'add' || event === 'remove') && collection !== this) return;
				if (event === 'destroy') this.remove(model, op);
				if (event === 'change') {
					var prevId = this.modelId(model.previousAttributes());
					var id = this.modelId(model.attributes);
					if (prevId !== id) {
						if (prevId != null) delete this._byId[prevId];
						if (id != null) this._byId[id] = model;
					}
				}
				this.trigger.apply(this, arguments);
			}
		})
		addUnderscoreMethods(Collection, {
			forEach: 3, each: 3, map: 3, collect: 3, reduce: 4, foldl: 4, inject: 4, reduceRight: 4, foldr: 4,
			find: 3, detect: 3, filter: 3, select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3,
			include: 3, includes: 3, contains: 3, invoke: 0, max: 3, min: 3, toArray: 1,
			size: 1, first: 3, head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3,
			last: 3, without: 0, difference: 0, indexOf: 3,
			shuffle: 1, lastIndexOf: 3, isEmpty: 1, chain: 1, sample: 3, partition: 3,
			groupBy: 3, countBy: 3, sortBy: 3, indexBy: 3
		}, 'models')
		View = Bb.View = function (op) {
			this.cid = _.uI('view')
			_.x(this, _.pk(op, [
				'model', 'collection', 'el', 'id',
				'attributes', 'className', 'tagName', 'events'
			]))
			this._ensureElement();
			this.initialize.apply(this, arguments)
		}
		_.x(View.prototype, Events, {
			_ensureElement: function () {
				if (!this.el) {
					var atts = _.x({}, _.rs(this, 'attributes'))
					if (this.id) {
						atts.id = _.rs(this, 'id')
					}
					if (this.className) {
						atts['class'] = _.rs(this, 'className')
					}
					;
					this.setElement(this._createElement(_.rs(this, 'tagName')));
					this._setAttributes(atts)
				}
				else {
					this.setElement(_.rs(this, 'el'))
				}
			},
			_createElement: function (tagN) {
				return document.createElement(tagN)
			},
			_setAttributes: function (atts) {
				this.$el.attr(atts)
			},
			tagName: 'div',
			initialize: function () {
			},
			render: function () {
				return this
			},
			$: function (sel) {
				return this.$el.find(sel)
			},
			remove: function () {
				this._removeElement();
				this.stopListening();
				return this
			},
			_removeElement: function () {
				this.$el.rm()
			},
			setElement: function (el) {
				this.undelegateEvents();
				this._setElement(el);
				this.delegateEvents();
				return this
			},
			_setElement: function (el) {
				this.$el = el instanceof Bb.$ ? el : Bb.$(el);
				this.el = this.$el[0]
				this.q = this.$el
			},
			delegate: function (evN, sel, listener) {
				this.$el.on(evN + '.delegateEvents' + this.cid, sel, listener);
				return this
			},
			undelegate: function (evN, sel, listener) {
				this.$el.off(evN + '.delegateEvents' + this.cid, sel, listener);
				return this
			},
			delegateEvents: function (ev) {
				ev || (ev = _.rs(this, 'ev'));
				if (!ev) return this;
				this.undelegateEvents();
				for (var key in ev) {
					var met = ev[key];
					if (!F(met)) {
						met = this[met]
					}
					;
					if (!met) {
						continue
					}
					;
					var match = key.match(delegateEventSplitter);
					this.delegate(match[1], match[2], _.b(met, this))
				}
				return this
			},
			undelegateEvents: function () {
				if (this.$el) this.$el.off('.delegateEvents' + this.cid);
				return this
			}
		})
	}
	
	function person() {
		Person0 = function (o) {
			this.name = o.name
			this.age = o.age
			this.job = o.job
			//this.work=function(){}
		}
		Person0.prototype.work = function () {
			return this.name + ' is working'
		}
		PEOPLE = function () {
			$.x();
			mds();
			vws();
			cls();
			clVw()
			_.in(.2, function () {
				pCV.r()
			}, '*')
			_.in(.4, function () {
				pCV.r()
			}, '*')
			_.in(.2, function () {
				pCV.r()
			})
			_.in(.4, function () {
				pCV.r()
			})
			Person = _M({
				I: function () {
				}, // this.oV(function(mod, err){$l(err)})
				D: {name: 'john doe', age: 30, job: 'worker'},
				V: function (ats) {
					if (ats.age < 0) {
						return 'age below zero, stupid!'
					}
				},
				work: function () {
					return this.g('name') + ' is working'
				}
			})
			p = Person({name: 'yano', age: 34})
			p.oV(function (mod, err) {
				$l(err)
			})
			personView = bbV({
				t: 'li',
				k: 'person',
				i: 'some-person',
				I: function () {
					this.R()
				},
				T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
				R: function () {
					var t = this
					//this works, but doesnt use a template
					// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
					t.H(t.T(t.J()))
				}
			})
			v = personView({m: p})
			peopleCol = bbC({m: Person})
			//pC=new peopleCol()
			//pC.add(p)
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
			peopleView = bbV({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
			pcv = peopleView({cl: pC})
			pcv.R()
			$b()(pcv.el)
			//$b()(pcv.q)
		}
		PEOPLE = function () {
			$.x();
			mds();
			vws();
			cls();
			clVw()
			function mds() {
				Per = $$M({
					i: function () {
						//this.oV(function(mod, err){$l(err)})
					},
					d: {n: 'doe', a: 30, j: 'wrk'},
					validate: function (ats) {
						if (ats.age < 0) {
							return 'a < 0!'
						}
					},
					work: function () {
						return this.g('n') + ' is working'
					}
				})
				Person = $$M({
					I: function () {
					}, // this.oV(function(mod, err){$l(err)})
					D: {name: 'john doe', age: 30, job: 'worker'},
					V: function (ats) {
						if (ats.age < 0) {
							return 'age below zero, stupid!'
						}
					},
					work: function () {
						return this.g('name') + ' is working'
					}
				})
				Person0 = function (o) {
					this.name = o.name
					this.age = o.age
					this.job = o.job
					//this.work=function(){}
				}
				Person0.prototype.work = function () {
					return this.name + ' is working'
				}
				Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
				Person = $$M({
					I: function () {
					}, // this.oV(function(mod, err){$l(err)})
					D: {name: 'john doe', age: 30, job: 'worker'},
					V: function (ats) {
						if (ats.age < 0) {
							return 'age below zero, stupid!'
						}
					},
					work: function () {
						return this.g('name') + ' is working'
					}
				})
				Per = $$M({d: {n: 'a', a: 20, o: 'p'}})
				Per = $M({
					d: {lame: true},
					i: function () {
						var t = this
						t.on('error', function (m, e) {
							alert(3);
							$l(e)
						})
						t.on('change:n',
								function (m, e) {
									alert(3);
									$l(e)
								})
					},
					v: function (at) {
						if (at.n == 'rigo') {
							return "n cant be rigo!"
						}
					}
				})
				p = Per({n: "rigo", a: 7})
				p = Per({})
				p1 = Per({n: 'b'})
				p2 = {n: 'c'}
				Person0.prototype.work = function () {
					return this.name + ' is working'
				}
				p = Person({name: 'yano', age: 34})
				p.oV(function (mod, err) {
					$l(err)
				})
				p1 = Per({n: 'j'})
				p2 = Per({n: 'y'})
				p = Per({n: 'y', a: 34})
				p = Per({name: 'yano', age: 34})
				p.oIv(function (mod, z) {
					$l(z)
				})
			}
			
			function vws() {
				PerV = $$V({
					t: 'li',
					x: 'some-per', k: 'per',
					tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
					r: function () {
						this.$el.A('fasdfsfasd')
						_m = this.model
						//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
					},
					i: function () {
						this.r()
					}
				})
				PerV = $$V({
					t: 'li',
					x: 'some-per', k: 'per',
					tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
					r: function () {
						this.$el.A('fasdfsfasd')
						_m = this.model
						//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
					},
					i: function () {
						this.r()
					}
				})
				PerV = $$V({
					tn: 'li',
					k: 'person', x: 'some-person',
					i: function () {
						this.r()
					},
					tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
					r: function () {
						var t = this, q = this.$el
						//this works, but doesnt use a template
						// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
						q.html(q.text(t.j()))
					}
				})
				personView = $$V({
					t: 'li',
					k: 'person',
					i: 'some-person',
					I: function () {
						this.R()
					},
					T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
					R: function () {
						var t = this
						//this works, but doesnt use a template
						// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
						t.H(t.T(t.J()))
					}
				})
				v = personView({m: p})
				v = pV = PerV({m: p})
			}
			
			function cls() {
				peopleCol = $$C({m: Person})
				PerC = $$C({m: Per})
				pC = PerC([
					{n: 'rigo', a: 29},
					{n: 'j', a: 2},
					{n: 's', j: 'gx'}
				])
				Pers = $$C({model: Per})
				pers = Pers([p1, p2])
				Pers = $$C({model: Per})
				pers = Pers([p1, p2])
				Pers = $Cl({m: Per})
				pers = Pers()
				p1 = pers.add(p)
				pers.add(p2)
				pers.rm(p1)
				pC = peopleCol([
					{name: 'rigo', age: 29},
					{name: 'jan', age: 2},
					{name: 'sal', job: 'graphics'}
				])
				pC.at(1).s('name', 'joejoe')
				pC.add(p)
				pC.at(1).n('joejoe')
				pC.at(1).s('name', 'joejoe')
				peop = $cl()
				peop.comparator = function (a, b) {
					return a.g('n') < b.g('n') ? -1 : 1
				}
				peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
				peop.indexOf(rob)//0
				peop.indexOf(tom)//2
				pC = PepC()
				peopleCol = $$C({m: Person})
				pC.A([p, p1, p2])
				pC = PepC()
				pC.A([p, p1, p2])
				PepC = $$C({m: Per})
				pC = peopleCol([
					{name: 'rigo', age: 29},
					{name: 'jan', age: 2},
					{name: 'sal', job: 'graphics'}
				])
				pC.at(1).s('name', 'joejoe')
			}
			
			function clVw() {
				peopleView = $$V({
					t: 'ul',
					I: function () {
						$l('hi')
						$l(this.cl)
					},
					R: function () {//var t=this
						this.cl.each(
								function (person) {
									
									//$l(person.get('name'))
									var v = personView({m: person})
									//$l(v.el)
									this.$el.append(v.el)
									//t.q( v.el  )
								}, this)
					}
				})
				PerColV = $$V({
					tn: 'ul',
					i: function () {
						$l('hi')
						$l(this.cl)
					},
					r: function () {//var t=this
						this.cl.each(function (p) {
							var v, pV  //$l(p.g('n'))
							pV = PerV.o({m: p}) //$l(pV.el)
							this.$el.append(pV.el) //t.q( pV.el  )
						}, this)
					}
				})
				PepV = $$V({
					cl: PepC, el: ul = $.ul(),
					i: function () {
					},
					r: function () {
						ul = this.$el.E()
						this.j(function (md) {
							PerV({m: md}, ul)
						})
					}
				})
				pCV = PepV({cl: pC})
				pCV = PerColV({cl: pC})
				pCV.r()
				$.A(pCV.el)//pC=new peopleCol() //pC.add(p)
				peopleView = $$V({
					t: 'ul',
					I: function () {
						$l('hi')
						$l(this.cl)
					},
					R: function () {//var t=this
						this.cl.each(
								function (person) {
									
									//$l(person.get('name'))
									var v = personView({m: person})
									//$l(v.el)
									this.$el.append(v.el)
									//t.q( v.el  )
								}, this)
					}
				})
				PepV = $$V({
					cl: PepC, el: ul = $.ul(),
					i: function () {
					},
					r: function () {
						ul = this.q.E()
						this.J(function (md) {
							PerV.o({m: md}, ul)
						})
					}
				})
				pCV = PepV({cl: pC})
				pcv = peopleView({cl: pC})
				pcv.R()
				peopleView = $$V({
					t: 'ul',
					I: function () {
						$l('hi')
						$l(this.cl)
					},
					R: function () {//var t=this
						this.cl.each(
								function (person) {
									
									//$l(person.get('name'))
									var v = personView({m: person})
									//$l(v.el)
									this.$el.append(v.el)
									//t.q( v.el  )
								}, this)
					}
				})
			}
			
			_.in(.2, function () {
				pCV.r()
			}, '*')
			_.in(.4, function () {
				pCV.r()
			}, '*')
			_.in(.2, function () {
				pCV.r()
			})
			_.in(.4, function () {
				pCV.r()
			})
		}
		function mds() {
			Per = _M({
				i: function () {
					//this.oV(function(mod, err){$l(err)})
				},
				d: {n: 'doe', a: 30, j: 'wrk'},
				validate: function (ats) {
					if (ats.age < 0) {
						return 'a < 0!'
					}
				},
				work: function () {
					return this.g('n') + ' is working'
				}
			})
			Person = _M({
				I: function () {
				}, // this.oV(function(mod, err){$l(err)})
				D: {name: 'john doe', age: 30, job: 'worker'},
				V: function (ats) {
					if (ats.age < 0) {
						return 'age below zero, stupid!'
					}
				},
				work: function () {
					return this.g('name') + ' is working'
				}
			})
			Person0 = function (o) {
				this.name = o.name
				this.age = o.age
				this.job = o.job
				//this.work=function(){}
			}
			Person0.prototype.work = function () {
				return this.name + ' is working'
			}
			Per = _M({d: {n: 'a', a: 20, o: 'p'}})
			Person = _M({
				I: function () {
				}, // this.oV(function(mod, err){$l(err)})
				D: {name: 'john doe', age: 30, job: 'worker'},
				V: function (ats) {
					if (ats.age < 0) {
						return 'age below zero, stupid!'
					}
				},
				work: function () {
					return this.g('name') + ' is working'
				}
			})
			Per = _M({d: {n: 'a', a: 20, o: 'p'}})
			Per = $M({
				d: {lame: true},
				i: function () {
					var t = this
					t.on('error', function (m, e) {
						alert(3);
						$l(e)
					})
					t.on('change:n',
							function (m, e) {
								alert(3);
								$l(e)
							})
				},
				v: function (at) {
					if (at.n == 'rigo') {
						return "n cant be rigo!"
					}
				}
			})
			p = Per({n: "rigo", a: 7})
			p = Per({})
			p1 = Per({n: 'b'})
			p2 = {n: 'c'}
			Person0.prototype.work = function () {
				return this.name + ' is working'
			}
			p = Person({name: 'yano', age: 34})
			p.oV(function (mod, err) {
				$l(err)
			})
			p1 = Per({n: 'j'})
			p2 = Per({n: 'y'})
			p = Per({n: 'y', a: 34})
			p = Per({name: 'yano', age: 34})
			p.oIv(function (mod, z) {
				$l(z)
			})
		}
		
		function vws() {
			PerV = _V({
				t: 'li',
				x: 'some-per', k: 'per',
				tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
				r: function () {
					this.$el.A('fasdfsfasd')
					_m = this.model
					//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
				},
				i: function () {
					this.r()
				}
			})
			PerV = _V({
				t: 'li',
				x: 'some-per', k: 'per',
				tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
				r: function () {
					this.$el.A('fasdfsfasd')
					_m = this.model
					//    this.$el.A(this.tp(m  ))  // this.model.toJSON()
				},
				i: function () {
					this.r()
				}
			})
			PerV = _V({
				tn: 'li',
				k: 'person', x: 'some-person',
				i: function () {
					this.r()
				},
				tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
				r: function () {
					var t = this, q = this.$el
					//this works, but doesnt use a template
					// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
					q.html(q.text(t.j()))
				}
			})
			personView = _V({
				t: 'li',
				k: 'person',
				i: 'some-person',
				I: function () {
					this.R()
				},
				T: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
				R: function () {
					var t = this
					//this works, but doesnt use a template
					// t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
					t.H(t.T(t.J()))
				}
			})
			v = personView({m: p})
			v = pV = PerV({m: p})
		}
		
		function cls() {
			peopleCol = _C({m: Person})
			PerC = _C({m: Per})
			pC = PerC([
				{n: 'rigo', a: 29},
				{n: 'j', a: 2},
				{n: 's', j: 'gx'}
			])
			Pers = _C({model: Per})
			pers = Pers([p1, p2])
			Pers = _C({model: Per})
			pers = Pers([p1, p2])
			Pers = $Cl({m: Per})
			pers = Pers()
			p1 = pers.add(p)
			pers.add(p2)
			pers.rm(p1)
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
			pC.add(p)
			pC.at(1).n('joejoe')
			pC.at(1).s('name', 'joejoe')
			peop = $cl()
			peop.comparator = function (a, b) {
				return a.g('n') < b.g('n') ? -1 : 1
			}
			peop.A(tom = $m({n: 'T'})).A(rob = $m({n: 'R'})).A(tim = $m({n: 'T'}))
			peop.indexOf(rob)//0
			peop.indexOf(tom)//2
			pC = PepC()
			peopleCol = _C({m: Person})
			pC.A([p, p1, p2])
			pC = PepC()
			pC.A([p, p1, p2])
			PepC = _C({m: Per})
			pC = peopleCol([
				{name: 'rigo', age: 29},
				{name: 'jan', age: 2},
				{name: 'sal', job: 'graphics'}
			])
			pC.at(1).s('name', 'joejoe')
		}
		
		function clVw() {
			peopleView = _V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
			PerColV = _V({
				tn: 'ul',
				i: function () {
					$l('hi')
					$l(this.cl)
				},
				r: function () {//var t=this
					this.cl.each(function (p) {
						var v, pV  //$l(p.g('n'))
						pV = PerV.o({m: p}) //$l(pV.el)
						this.$el.append(pV.el) //t.q( pV.el  )
					}, this)
				}
			})
			PepV = _V({
				cl: PepC, el: ul = $.ul(),
				i: function () {
				},
				r: function () {
					ul = this.$el.E()
					this.j(function (md) {
						PerV({m: md}, ul)
					})
				}
			})
			pCV = PepV({cl: pC})
			pCV = PerColV({cl: pC})
			pCV.r()
			$.A(pCV.el)//pC=new peopleCol() //pC.add(p)
			peopleView = _V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
			PepV = _V({
				cl: PepC, el: ul = $.ul(),
				i: function () {
				},
				r: function () {
					ul = this.q.E()
					this.J(function (md) {
						PerV.o({m: md}, ul)
					})
				}
			})
			pCV = PepV({cl: pC})
			pcv = peopleView({cl: pC})
			pcv.R()
			peopleView = _V({
				t: 'ul',
				I: function () {
					$l('hi')
					$l(this.cl)
				},
				R: function () {//var t=this
					this.cl.each(
							function (person) {
								
								//$l(person.get('name'))
								var v = personView({m: person})
								//$l(v.el)
								this.$el.append(v.el)
								//t.q( v.el  )
							}, this)
				}
			})
		}
	}
	
	delegateEventSplitter = /^(\S+)\s*(.*)$/
	rootStripper = /^\/+|\/+$/g;
	pathStripper = /#.*$/;
	optionalParam = /\((.*?)\)/g;
	namedParam = /(\(\?)?:\w+/g;
	splatParam = /\*\w+/g;
	escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
	eventSplitter = /\s+/;
	slice = Array.prototype.slice
	splice = function (array, insert, at) {
		at = Math.min(Math.max(at, 0), array.length);
		var tail = Array(array.length - at);
		var length = insert.length;
		for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
		for (i = 0; i < length; i++) array[i + at] = insert[i];
		for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	}
	addMethod = function (length, met, attribute) {
		switch (length) {
			case 1:
				return function () {
					return _[met](this[attribute]);
				};
			case 2:
				return function (value) {
					return _[met](this[attribute], value);
				};
			case 3:
				return function (iteratee, context) {
					return _[met](this[attribute], cb(iteratee, this), context);
				};
			case 4:
				return function (iteratee, defaultVal, context) {
					return _[met](this[attribute], cb(iteratee, this), defaultVal, context);
				};
			default:
				return function () {
					var args = slice.call(arguments);
					args.unshift(this[attribute]);
					return _[met].apply(_, args);
				};
		}
	}
	addUnderscoreMethods = function (Class, mets, att) {
		_.e(mets, function (len, met) {
			if (_[met]) Class.prototype[met] = addMethod(len, met, att)
		})
	}
	cb = function (itee, instance) {
		return F(itee) ? iteratee :
				(O(itee) && !instance._isModel(itee)) ? modelMatcher(itee) :
						S(itee) ? function (md) {
							return md.get(itee)
						} :
								itee
	}
	modelMatcher = function (attrs) {
		var matcher = _.mt(attrs);
		return function (model) {
			return matcher(model.attributes)
		}
	}
	extend = function (protoProps, staticProps) {
		var parent = this,
				child = (protoProps && _.h(protoProps, 'constructor')) ? protoProps.constructor :
						function () {
							return parent.apply(this, arguments)
						}
		_.x(child, parent, staticProps)
		var Surrogate = function () {
			this.constructor = child
		}
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate
		if (protoProps) _.x(child.prototype, protoProps)
		child.__super__ = parent.prototype;
		return child
	}
	urlError = function () {
		throw new Error('A "url" property or function must be specified')
	}
	wrapError = function (md, op) {
		var z = op.error;
		op.error = function (resp) {
			if (z) {
				z.call(op.context, md, resp, op)
			}
			;
			md.trigger('error', md, resp, op)
		}
	}
	Bb.sync = function (met, md, op) {
		var metMap = metMap = {'create': 'POST', 'update': 'PUT', 'patch': 'PATCH', 'delete': 'DELETE', 'read': 'GET'},
				type = metMap[met], pams = {type: type, dataType: 'json'}, error
		_.d(op || (op = {}), {
			emulateHTTP: Bb.emulateHTTP,
			emulateJSON: Bb.emulateJSON
		})
		if (!op.url) {
			if (false) {
				pams.url = _.rs(md, 'url') || urlError()
			}
		}
		if (op.data == null && md && (met === 'create' || met === 'update' || met === 'patch')) {
			pams.contentType = 'application/json'
			pams.data = JSON.stringify(op.attrs || md.toJSON(op))
		}
		if (op.emulateJSON) {
			pams.contentType = 'application/x-www-form-urlencoded';
			pams.data = pams.data ? {model: pams.data} : {}
		}
		if (op.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
			pams.type = 'POST';
			if (op.emulateJSON) pams.data._met = type;
			var beforeSend = op.beforeSend;
			op.beforeSend = function (xhr) {
				xhr.setRequestHeader('X-HTTP-Method-Override', type);
				if (beforeSend) {
					return beforeSend.apply(this, arguments)
				}
			}
		}
		if (pams.type !== 'GET' && !op.emulateJSON) {
			pams.processData = false
		}
		error = op.error;
		op.error = function (xhr, textStatus, errorThrown) {
			op.textStatus = textStatus;
			op.errorThrown = errorThrown;
			if (error) {
				error.call(op.context, xhr, textStatus, errorThrown)
			}
		}
		return op.xhr = Bb.ajax(_.x(pams, op));
		md.trigger('request', md, xhr, op)
	}
	Bb.ajax = function () {
		return Bb.$.ajax.apply(Bb.$, arguments)
	}
	Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
}