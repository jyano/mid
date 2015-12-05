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
 