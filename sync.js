function learn(){
/*



 bb’s Sync API
 We prevly discussed how bb supports RESTful persistence via its fetch() and create() mets on Cls and save(), and destroy() mets on Mds.
 Now we are going to takecloser look at bb’s sync met which underlies these operations.

 The bb.sync met is integral part of bb.js. It assumesjQ-like $.ajax() met, so HTTP pams are organized based on jQ’s API.
 Since some legacy servers may not support JSON-formatted requests and HTTP PUT and DELETE operations,
 bb can be configured to emulate these capabilities using two configuration vars shown below with their default vals:

 bb.emulateHTTP = false; // set to true if server cannot handle HTTP PUT or HTTP DELETE
 bb.emulateJSON = false; // set to true if server cannot handle app/json requests
 The inline bb.emulateHTTP option should be set to true if extended HTTP mets are not supported by server.
 The bb.emulateJSON option should be set to true if server does not understand MIME type for JSON.


 Lib = bb.Cl.x({ url : fn() { return '/lib'}})

 // Define atts for our md
 attrs = {
 tt  : "The Tempest",
 author : "Bill Shakespeare",
 length : 123
 };

 // Createnew Lib instance
 lib = new Lib;

 // Createnew instance ofmd within our cl
 lib.create(attrs, {wait: false});

 // Update with just emulateHTTP
 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
 emulateHTTP: true
 });

 // Check ajaxSettings being used for our request
 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
 $l(this.ajaxSettings.type === 'POST'); // true
 $l(this.ajaxSettings.contentType === 'app/json'); // true

 // Parse data for request to confirm it is as expected
 data = JSON.parse(this.ajaxSettings.data);
 $l(data.id === '2-the-tempest');  // true
 $l(data.author === 'Tim Shakespeare'); // true
 $l(data.length === 123); // true
 Similarly, we could just update using emulateJSON:

 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
 emulateJSON: true
 });

 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
 $l(this.ajaxSettings.type === 'PUT'); // true
 $l(this.ajaxSettings.contentType ==='app/x-www-form-urlencoded'); // true

 data = JSON.parse(this.ajaxSettings.data.md);
 $l(data.id === '2-the-tempest');
 $l(data.author ==='Tim Shakespeare');
 $l(data.length === 123);
 bb.sync is called every time bb tries to read, save, or delete mds. It uses jQ or Zepto’s $.ajax() impls to make these RESTful requests, however this can be overridden as per your needs.

 Overriding bb.sync

 The sync fn may be overridden globally as bb.sync, or atfiner-grained level, by addingsync fn tobb cl or to individual md.

 Since all persistence is handled by bb.sync fn, alternative persistence layer can be used by simply overriding bb.sync withfn that has same signature:

 bb.sync = fn(met, md, ops) {
 };
 The metMap below is used by standard sync impl to map met parameter to HTTP operation and illustrates type of action required by each met argument:

 metMap = {
 'create': 'POST',
 'update': 'PUT',
 'patch':  'PATCH',
 'delete': 'DELETE',
 'read':   'GET'
 };
 If we wanted to replace standard sync impl with one that simply logged calls to sync, we could do this:

 id_counter = 1;
 bb.sync = fn(met, md) {
 $l("I've been passed " + met + " with " + _.jS(md));
 if(met === 'create'){ md.set('id', id_counter++); }
 };
 Note that we assignunique id to any created mds.

 The bb.sync met is intended to be overridden to support other persistence backends.
 The built-in met is tailored tocertain breed of RESTful JSON APIs - bb was originally extracted fromRuby on Rails app, which uses HTTP mets like PUT in same way.

 The sync met is called with three pams:

 met: One of create, update, patch, delete, or read
 md: The bb md object
 ops: May include success and error mets
 Implementingnew sync met can use following pattern:

 bb.sync = fn(met, md, ops) {

 fn success(result) {
 // Handle successful results from MyAPI
 if (ops.success) {
 ops.success(result);
 }
 }

 fn error(result) {
 // Handle error results from MyAPI
 if (ops.error) {
 ops.error(result);
 }
 }

 ops || (ops = {});

 switch (met) {
 case 'create':
 return MyAPI.create(md, success, error);

 case 'update':
 return MyAPI.update(md, success, error);

 case 'patch':
 return MyAPI.patch(md, success, error);

 case 'delete':
 return MyAPI.destroy(md, success, error);

 case 'read':
 if (md.cid) {
 return MyAPI.find(md, success, error);
 } else {
 return MyAPI.findAll(md, success, error);
 }
 }
 };
 This pattern delegates API calls tonew object (MyAPI), which could bebb-style class that supports evs.
 This can be safely tested separately, and potentially used with libraries other than bb.

 There are quitefew sync impls out there. The following examples are all avail on GitHub:

 bb localStorage: persists to  bw’s local storage
 bb offline: supports working offline
 bb Redis: uses Redis key-val store
 backbone-parse: integrates bb with Parse.com
 backbone-websql: stores data to WebSQL
 bb Caching Sync: uses local storage as cache for other sync impls
 Dependencies
 The official bb.js documentation states:

 bb’s only hard dependency is either Underscore.js ( >= 1.4.3) or Lo-Dash. For RESTful persistence, history support via bb.Rt and DOM manipulation with bb.Vw, include json2.js,
 and either jQ ( >= 1.7.0) or Zepto.
 What this translates to is that if you require working with anything beyond mds, you will need to includeDOM manipulation lib
 such as jQ or Zepto. Underscore is primarily used for its utility mets (which bb relies upon heavily) and json2.js for legacy  bw JSON support if bb.sync is used.

 */
	BBEXT = function () {
		// https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
	}
	function learnBbSync() {
		/*
		
		
		
		 bb’s Sync API
		 We prevly discussed how bb supports RESTful persistence via its fetch() and create() mets on Cls and save(), and destroy() mets on Mds.
		 Now we are going to takecloser look at bb’s sync met which underlies these operations.
		
		 The bb.sync met is integral part of bb.js. It assumesjQ-like $.ajax() met, so HTTP pams are organized based on jQ’s API.
		 Since some legacy servers may not support JSON-formatted requests and HTTP PUT and DELETE operations,
		 bb can be configured to emulate these capabilities using two configuration vars shown below with their default vals:
		
		 bb.emulateHTTP = false; // set to true if server cannot handle HTTP PUT or HTTP DELETE
		 bb.emulateJSON = false; // set to true if server cannot handle app/json requests
		 The inline bb.emulateHTTP option should be set to true if extended HTTP mets are not supported by server.
		 The bb.emulateJSON option should be set to true if server does not understand MIME type for JSON.
		
		
		 Lib = bb.Cl.x({ url : fn() { return '/lib'}})
		
		 // Define atts for our md
		 attrs = {
		 tt  : "The Tempest",
		 author : "Bill Shakespeare",
		 length : 123
		 };
		
		 // Createnew Lib instance
		 lib = new Lib;
		
		 // Createnew instance ofmd within our cl
		 lib.create(attrs, {wait: false});
		
		 // Update with just emulateHTTP
		 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
		 emulateHTTP: true
		 });
		
		 // Check ajaxSettings being used for our request
		 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
		 $l(this.ajaxSettings.type === 'POST'); // true
		 $l(this.ajaxSettings.contentType === 'app/json'); // true
		
		 // Parse data for request to confirm it is as expected
		 data = JSON.parse(this.ajaxSettings.data);
		 $l(data.id === '2-the-tempest');  // true
		 $l(data.author === 'Tim Shakespeare'); // true
		 $l(data.length === 123); // true
		 Similarly, we could just update using emulateJSON:
		
		 lib.first().save({id: '2-the-tempest', author: 'Tim Shakespeare'}, {
		 emulateJSON: true
		 });
		
		 $l(this.ajaxSettings.url === '/lib/2-the-tempest'); // true
		 $l(this.ajaxSettings.type === 'PUT'); // true
		 $l(this.ajaxSettings.contentType ==='app/x-www-form-urlencoded'); // true
		
		 data = JSON.parse(this.ajaxSettings.data.md);
		 $l(data.id === '2-the-tempest');
		 $l(data.author ==='Tim Shakespeare');
		 $l(data.length === 123);
		 bb.sync is called every time bb tries to read, save, or delete mds. It uses jQ or Zepto’s $.ajax() impls to make these RESTful requests, however this can be overridden as per your needs.
		
		 Overriding bb.sync
		
		 The sync fn may be overridden globally as bb.sync, or atfiner-grained level, by addingsync fn tobb cl or to individual md.
		
		 Since all persistence is handled by bb.sync fn, alternative persistence layer can be used by simply overriding bb.sync withfn that has same signature:
		
		 bb.sync = fn(met, md, ops) {
		 };
		 The metMap below is used by standard sync impl to map met parameter to HTTP operation and illustrates type of action required by each met argument:
		
		 metMap = {
		 'create': 'POST',
		 'update': 'PUT',
		 'patch':  'PATCH',
		 'delete': 'DELETE',
		 'read':   'GET'
		 };
		 If we wanted to replace standard sync impl with one that simply logged calls to sync, we could do this:
		
		 id_counter = 1;
		 bb.sync = fn(met, md) {
		 $l("I've been passed " + met + " with " + _.jS(md));
		 if(met === 'create'){ md.set('id', id_counter++); }
		 };
		 Note that we assignunique id to any created mds.
		
		 The bb.sync met is intended to be overridden to support other persistence backends.
		 The built-in met is tailored tocertain breed of RESTful JSON APIs - bb was originally extracted fromRuby on Rails app, which uses HTTP mets like PUT in same way.
		
		 The sync met is called with three pams:
		
		 met: One of create, update, patch, delete, or read
		 md: The bb md object
		 ops: May include success and error mets
		 Implementingnew sync met can use following pattern:
		
		 bb.sync = fn(met, md, ops) {
		
		 fn success(result) {
		 // Handle successful results from MyAPI
		 if (ops.success) {
		 ops.success(result);
		 }
		 }
		
		 fn error(result) {
		 // Handle error results from MyAPI
		 if (ops.error) {
		 ops.error(result);
		 }
		 }
		
		 ops || (ops = {});
		
		 switch (met) {
		 case 'create':
		 return MyAPI.create(md, success, error);
		
		 case 'update':
		 return MyAPI.update(md, success, error);
		
		 case 'patch':
		 return MyAPI.patch(md, success, error);
		
		 case 'delete':
		 return MyAPI.destroy(md, success, error);
		
		 case 'read':
		 if (md.cid) {
		 return MyAPI.find(md, success, error);
		 } else {
		 return MyAPI.findAll(md, success, error);
		 }
		 }
		 };
		 This pattern delegates API calls tonew object (MyAPI), which could bebb-style class that supports evs.
		 This can be safely tested separately, and potentially used with libraries other than bb.
		
		 There are quitefew sync impls out there. The following examples are all avail on GitHub:
		
		 bb localStorage: persists to  bw’s local storage
		 bb offline: supports working offline
		 bb Redis: uses Redis key-val store
		 backbone-parse: integrates bb with Parse.com
		 backbone-websql: stores data to WebSQL
		 bb Caching Sync: uses local storage as cache for other sync impls
		 Dependencies
		 The official bb.js documentation states:
		
		 bb’s only hard dependency is either Underscore.js ( >= 1.4.3) or Lo-Dash. For RESTful persistence, history support via bb.Rt and DOM manipulation with bb.Vw, include json2.js,
		 and either jQ ( >= 1.7.0) or Zepto.
		 What this translates to is that if you require working with anything beyond mds, you will need to includeDOM manipulation lib
		 such as jQ or Zepto. Underscore is primarily used for its utility mets (which bb relies upon heavily) and json2.js for legacy  bw JSON support if bb.sync is used.
		
		 */
	}
	}
RESTPERSIST0 = function () {
	
	//RESTful Persistence
	//Thus far, all of our example data has been created in  bw. For most single page apps, mds are derived fromdata store residing onserver.
	//This is area in which bb dramatically simplifies code you need to write to perform RESTful synchronization withserver throughsimple API on its mds and cls.
// Fetching mds from server
// Cls.fetch() retrieves set of mds from server in form ofJSON array by sending HTTP GET request to URL spec by cl’s url property (which may befunction).
// When this data is received,set() will be executed to update cl.
	Td = $M({df: {tt: '', completed: false}})
	TdsCl = $Cl({md: Td, url: '/tds'})
	tds = TdsCl();
	tds.fetch(); // sends HTTP GET to /tds
}
SAVEMDTOSERVER = function () {
	
	
	// bb can retrieve entire cl of mds from server at once, but updates to mds are performed individually using md’s save() met.
	//  When save() is called on a md that was fetched from server, it constructs a URL by appending md’s id to cl’s URL and sends HTTP PUT to server.
	// If md is new instance that was created in  bw (i.e. it doesn’t have id) then HTTP POST is sent to cl’s URL. Cls.create() can be used to createnew md, add it to cl,  and send it to server insingle met call.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2);
	td2.s('tt', 'go fishing');
	td2.S(); // sends HTTP PUT to /tds/2
	tds.create({tt: 'Try out code samples'}); // sends HTTP POST to /tds and adds to cl
//     As mentioned earlier,md’s validate() met is called automatically by save() and will trigger invalid event on md if validation fails.
	//  Deleting mds from server
	//  A md can be rmd from containing cl and server by calling its destroy() met. Unlike Cl.rm() which only rmsmd fromcl, Md.destroy() will also send HTTP DELETE to cl’s URL.
	Td = $M({df: {tt: '', completed: false}});
	TdsCl = $Cl({md: Td, url: '/tds'});
	tds = TdsCl();
	tds.fetch();
	td2 = tds.g(2)
	td2.destroy(); // sends HTTP DELETE to /tds/2 and rms from cl
	// Calling destroy onMd will return false if md isNew:
	td = new Bb.Md();
	$l(td.destroy())  // false
	// Options
	// Each RESTful API met accepts a variety of ops.
	//  Most importantly, all mets accept success and error cbs which can be used
	//  to custize handling of server responses.
	//  Specifying {patch: true} option to Md.save() will cause it to use HTTP PATCH to send only changed atts (i.e. partial updates) to server
	//  instead of entire md; i.e. md.save(attrs, {patch: true}):
	// Save partial using PATCH
	md.clear().set({id: 1, a: 1, b: 2, c: 3, d: 4});
	md.save();
	md.save({b: 2, d: 4}, {patch: true});
	$l(this.syncArgs.met);
	// 'patch'
	// Similarly, passing {reset: true} option to Cl.fetch() will result in cl being updated using reset() rather than set().
}
CID0 = function () {

// to uniquely identify mds  use:
// id --- unique identifier (int|S, e.g.,UUID) -can be used to fetch md from cl
//Internally, Bb.Cl contains [md] enumerated by md.id, if md insts have one.
// When cl.g(id) is called, arr checked for existence of md inst  with corresp  id.
// cid--- (client id), auto-gen-d at md creation -can be used to fetch md from cl,
// helpful when you don’t have true id (   not (or not yet) saving it to db  )
// tdCid = tds.g(td2.cid)
//  idAttribute( df=id)----  identifying attr name of md returned from server (i.e. id in your db).
//  -tells bb which data field from server should be used  to populate id property (think of it as a mapper).
// if your server sets unique attr on your md named “userId” then you would set idAttribute to “userId” in your md definition.
//  The val of md’s idAttribute should be set by server when md is saved. -shouldn’t need to set it manually, unless further control is required.
}
AVAILSRV = function () {
	$.x('x');
	Ap = {M: {}, C: {}, V: {}, T: {}}
	M$ = function (ob) {
		ob = O(ob) ? ob : {}
		var Md, md
		Md = bb._M(ob)
		md = new Md(ob)
		return md
	}
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').C('y', 'r'),
				$.br(), $.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail'))
	}
	Ap.M.Avail = M$({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.$el.A(Ap.T.Avail(this.model))
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'false')
			newAvail = this.$el.fi('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.rm()
		},
		editAvail: function () {
			this.$el.fi('#avail').at('contenteditable', 'true')
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		I: function () {
			this.render()
		},
		R: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.$el.html('')
					t.$el.A("<h1>Avails List</h1>")
					t.collection.each(function (m) {
						t.$el.A(Ap.V.Avail({model: m}).render().el)
						return t
					}, t)
				}
			})
		}
	})
	//  avs=Ap.C.Avails()
	//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		Ap.M.Avail({
			c: $('#newAvail').v()
		}).save()
		v.render()
	}).A()
	$.dI('availsDiv')
	$.ip('new avail').id('newAvail').A()
	$.bt('ok', function () {
		var m = Ap.M.Avail({
			c: qiv('newAvail')
		})
		m.save()
		m.on('destroy', function () {
			alert('i am the model and i was destroyed')
		})
		v.render()
	})
	$.dI('availsDiv')
	Ap.T.Avail = function (model) {
		return $.d('g', 400, 100).mar(20).A(
				$.h4(model.g('c')).id('avail').col('y', 'r'),
				$.br(),
				$.sp('delete').id('deleteAvail'),
				$.sp(' '), $.sp('edit').id('editAvail'),
				$.sp(' '), $.cb().id('selAvail')
		)
	}
	Ap.M.Avail = bb.M.e({urlRoot: '/avail'})
	Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
	Ap.V.Avail = bb.V.e({
		r: function () {
			this.q(
					Ap.T.Avail(this.model)
			)
			return this
		},
		ev: {
			'click #deleteAvail': 'deleteAvail',
			'click #editAvail': 'editAvail',
			'blur #avail': 'changeAvail'
		},
		changeAvail: function () {
			qq(this.$el.find('#avail')).cE(0)
			var newAvail = this.$el.find('#avail').text()
			this.model.s('c', newAvail)
			this.model.save()
		},
		deleteAvail: function () {
			this.model.destroy()
			this.$el.remove()
		},
		editAvail: function () {
			this.$el.find('#avail').cE(1)
		}
	})
	Ap.V.Avails = bb.V.e({
		el: '#availsDiv',
		i: function () {
			this.render()
		},
		r: function () {
			var t = this
			t.collection.fetch({
				success: function () {
					t.q.H('')
					t.q($.h1('Avails List'))
					t.e(
							function (m) {
								t.q(
										Ap.V.Avail({m: m}).r().el)
								return t
							}, t)
				}
			})
		}
	})
	avs = Ap.C.Avails.o()
	avs.on('destroy', function (j) {
		alert('i am col and i was destroyed')
		v.trigger('modelDeleted')
	})
	v = Ap.V.Avails.o({cl: avs})
	v.on('modelDeleted', function () {
		alert('modDel')
	})
	bb.M.e({
		d: {prop: 3},
		test: function () {
			$(this.get('prop'))
		},
		test2: function (a) {
			$l('prop: ' + this.get('prop'))
		},
		happy: function (a) {
			this.test2(a)
		}
	})
	AVAIL = function () {
		$.x('x');
		Ap = {M: {}, C: {}, V: {}, T: {}}
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').C('y', 'r'),
					$.br(), $.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail'))
		}
		Ap.M.Avail = M$({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.$el.A(Ap.T.Avail(this.model))
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'false')
				newAvail = this.$el.fi('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.rm()
			},
			editAvail: function () {
				this.$el.fi('#avail').at('contenteditable', 'true')
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			I: function () {
				this.render()
			},
			R: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.$el.html('')
						t.$el.A("<h1>Avails List</h1>")
						t.collection.each(function (m) {
							t.$el.A(Ap.V.Avail({model: m}).render().el)
							return t
						}, t)
					}
				})
			}
		})
		//  avs=Ap.C.Avails()
		//  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			Ap.M.Avail({
				c: $('#newAvail').v()
			}).save()
			v.render()
		}).A()
		$.dI('availsDiv')
		$.ip('new avail').id('newAvail').A()
		$.bt('ok', function () {
			var m = Ap.M.Avail({
				c: qiv('newAvail')
			})
			m.save()
			m.on('destroy', function () {
				alert('i am the model and i was destroyed')
			})
			v.render()
		})
		$.dI('availsDiv')
		Ap.T.Avail = function (model) {
			return $.d('g', 400, 100).mar(20).A(
					$.h4(model.g('c')).id('avail').col('y', 'r'),
					$.br(),
					$.sp('delete').id('deleteAvail'),
					$.sp(' '), $.sp('edit').id('editAvail'),
					$.sp(' '), $.cb().id('selAvail')
			)
		}
		Ap.M.Avail = Bb.M.e({urlRoot: '/avail'})
		Ap.C.Avails = C$({model: Ap.M.Avail, url: '/avail'})
		Ap.V.Avail = Bb.V.e({
			r: function () {
				this.q(
						Ap.T.Avail(this.model)
				)
				return this
			},
			ev: {
				'click #deleteAvail': 'deleteAvail',
				'click #editAvail': 'editAvail',
				'blur #avail': 'changeAvail'
			},
			changeAvail: function () {
				qq(this.$el.find('#avail')).cE(0)
				var newAvail = this.$el.find('#avail').text()
				this.model.s('c', newAvail)
				this.model.save()
			},
			deleteAvail: function () {
				this.model.destroy()
				this.$el.remove()
			},
			editAvail: function () {
				this.$el.find('#avail').cE(1)
			}
		})
		Ap.V.Avails = Bb.V.e({
			el: '#availsDiv',
			i: function () {
				this.render()
			},
			r: function () {
				var t = this
				t.collection.fetch({
					success: function () {
						t.q.H('')
						t.q($.h1('Avails List'))
						t.e(
								function (m) {
									t.q(
											Ap.V.Avail({m: m}).r().el)
									return t
								}, t)
					}
				})
			}
		})
		avs = Ap.C.Avails.o()
		avs.on('destroy', function (j) {
			alert('i am col and i was destroyed')
			v.trigger('modelDeleted')
		})
		v = Ap.V.Avails.o({cl: avs})
		v.on('modelDeleted', function () {
			alert('modDel')
		})
		Bb.M.e({
			d: {prop: 3},
			test: function () {
				$(this.get('prop'))
			},
			test2: function (a) {
				$l('prop: ' + this.get('prop'))
			},
			happy: function (a) {
				this.test2(a)
			}
		})
	}
}

OSYNC = function () {
	$.x('x', 'osync')
	Bb.sync = function (met, md) {
		$l(met + ': ' + _.jS(md))
		md.s('id', 1)
	}
	bk = new Bb.M({
		tt: "The Rough Riders",
		au: "Theodore Roosevelt"
	})
	bk.S()
	bk.S({au: "Teddy"})
	// save accepts success and error cbs in the options hash,
	// which will be passed the args (md, resp, ops).
	// If a server-side validation fails, return a non-200 HTTP response code,
	// along with an error response in text or JSON.
	bk.save("au", "F.D.R.", {
		error: function () {
			$l('error')
		},
		success: function () {
			$l('success')
		}
	})
}
OBJECT = function () {
	OBJECT = function () {
		$.fm()
		s1.A('your objects', $.br(2), t = $.ip(),
				$.bt('new object', function () {
					$.P('newObj',
							{t: t.V()})
				}))
		$.eG('objs', function (o) {
			s1.A($.h2(o.t).$(function () {
				s2.E($.h1(o.t), tt = $.ip(),
						$.bt('new sub-object', function () {
							$.P('newObj', {t: tt.V()})
						}))
			}))
			_.e(o.i, function (i) {
				s1.A(h3(i))
			})
		})
		$.eG('objs', function (o) {
			s1.A($.h2(o.t).$(function () {
				s2.E($.h1(o.t), tt = $.ip(),
						$.bt('new sub-object', function () {
							$.P('newObj', {t: tt.V()})
						}))
			}))
			s1.A('your objects', $.br(2), t = $.ip(),
					$.bt('new object', function () {
						$.P('newObj',
								{t: t.V()})
					}))
			_.e(o.i, function (i) {
				s1.A(h3(i))
			})
		})
		$.eG('objs', function (o) {
			s1.A($.h2(o.t).$(function () {
				s2.E($.h1(o.t), tt = $.ip(),
						$.bt('new sub-object', function () {
							$.P('newObj', {t: tt.V()})
						}))
			}))
			_.e(o.i, function (i) {
				s1.A(h3(i))
			})
		})
	}
	$.fm()
	s1.A('your objects', $.br(2), t = $.ip(),
			$.bt('new object', function () {
				$.P('newObj',
						{t: t.V()})
			}))
	$.eG('objs', function (o) {
		s1.A($.h2(o.t).$(function () {
			s2.E($.h1(o.t), tt = $.ip(),
					$.bt('new sub-object', function () {
						$.P('newObj', {t: tt.V()})
					}))
		}))
		_.e(o.i, function (i) {
			s1.A(h3(i))
		})
	})
}
 
 