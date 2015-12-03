function dirt() {
	DIRTPAGE = function () {
		$.x()
		var newMsBox, newTopic, newMs, searchBox
		MsM = bb.M.e({})
		MsC = bb.C.e({m: 'MsM'})
		MsView = bb.V.e({})
		MssView = bb.V.e({})
		$.h1().A(
				$.a('Dirtpage', '/wap/dirtpage/')
		).A()
		$.dI('content')
		if (wappyPam) {
			newMsBox = $.d().WH('auto').A(
					$.h1('new ms'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						var newMs = $('#newMs').v()
						$.P('messages', {
							tpc: wappyPam, ms: newMs
						}, function () {
							loadResults()
						})
					}))
			$('#cont').A($.h1('the ' + wappyPam + ' page'),
					newMsBox, $.dI('res'))
			function loadRes() {
				$.G('topics/' + wappyPam, function (msgs) {
					$('#results').ht($.h5('len: ' + msgs.length))
					_.e(msgs, function (ms) {
						$('#res').A($.h6(ms.ms))
					})
				})
			}
			
			loadRes()
		}
		else {
			newMsBox = $.d().WH('auto').A(
					$.h1('new message'),
					$.ip().K('form-control').id('newTopic'),
					$.ip().K('form-control').id('newMs'),
					$.bt('ok', function () {
						newTopic = $('#newTopic').v()
						newMs = $('#newMs').v()
						$.P('msgs', {topic: newTopic, message: newMs}, function () {
						})
					})
			)
			searchBox = $.d().WH('auto').A(
					$.h1('search'),
					$.ip().K('form-control').id('searchInput'),
					$.bt('ok', function () {
						window.location = '/wap/dirtpage/' + $('#searchInput').v()
						searchInput = $('#searchInput').v()
						$.G('topics/' + searchInput, function (msgs) {
							$('#res').ht($.h5('len: ' + msgs.length))
							_.e(msgs, function (ms) {
								$('#res').A($.h6(ms.ms))
							})
						})
					})
			)
			$.dI('res')
			$('#cont').A(newMsBox, searchBox)
			$.eG('msgs', function (ms) {
				$('#res').A($.h2().A(
								$.a('topic: ' + ms.topic, '/wap/dirtpage/' + ms.topic)),
						$.h3('ms: ' + ms.ms)
				)
			})
		}
	}
}
function obj() {
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
	}
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
	}
}
 
function book() {
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	BOOK = function () {
		$.fm()
		toBook = function () {
			Y.run('book')
		}
		s1.A(
				$.h1('BOOK').$(toBook),
				bookName = $.ip(),
				$.bt('new book', function () {
					$.P('newBook', {name: bookName.V()},
							toBook)
				}),
				$.hr())
		$.Gj('books', function (bks) {
			s1.A($.h3('books:'))
			_.e(bks, function (bk) {
				s1.A($.sp().C('x').$(function () {
							$.P('delBook', {book: bk._id}, toBook)
						}),
						$.bt(bk.name, function () {
							s2.A($.h2('CHAPTER: ' + bk.name),
									chapterTitleInput = $.ip(),
									$.bt('new chapter',
											function () {
												$.P('newChapter', {
													chapterTitle: chapterTitleInput.V(),
													book: bk._id
												}, function () {
													chapterView(bk, c)
												})
											}), $.hr())
							$.eGj('chapters', {book: bk._id}, function (ch) {
								s2.A($.bt(ch.title, function () {
									chapterView(bk, ch)
								}), $.br(2))
							})
						}), $.br(2))
			})
		})
		chapterView = function (b, c) {
			s2.E();
			s1.E();
			s1.A($.h1('BOOK').$(toBook))
			$.Gj('chapters', {book: bk._id}, function (chapters) {
				s1.A($.h3('chapters:'))
				s2.A($.h3('pages:'))
				_.e(chapters, function (ch) {
					s1.A($.sp('x').$(function () {
								$.P('delChapter', {chapter: ch._id}, function () {
									chapterView(bk, ch)
								})
							}),
							$.bt(ch.title, function () {
								chapterView(bk, ch)
							}), $.br(2))
				})
			})
			s2.A($.h1('chapter: ' + ch.title))
			s2.A(pageNameInput = $.ip(),
					$.bt('new page', function () {
						$.P('newPage', {
							pageName: pageNameInput.V(), chapter: ch._id
						})
					}), $.hr())
			$.eGj('/pages', {chapter: ch._id}, function (pg) {
				s2.A($.bt(pg.name, function () {
					pageView(bk, ch, pg)
				}), $.br(2))
			})
		}
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
	pageView = function (bk, ch, pg) {
		s1.E();
		s2.E()
		s1.A($.h1('BOOK').$(ldr('book')))
		s1.A($.h1('CHAPTER ' + ch.title).$(function () {
			chapterView(book, ch)
		}))
		$.Gj('/pages', {chapter: ch._id},
				function (pgs) {
					s1.A($.h3('pages'))
					_.e(pgs, function (pg) {
						s1.A($.bt(pg.name, function () {
									sectionView(ch)
								}), $.br(2)
						)
					})
				})
		s2.A($.h1('page: ' + pg.name))
		$.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
				function (sc) {
					s2.A($.bt(sc.section, function () {
								sectionView(bk, ch, pg)
							}), $.br(2)
					)
				})
	}
}
function notes() {
	server = {
		d: 2,
		n: 2,
		docs: {
			1: {text: 'this is a doc', id: 1}
		},
		notes: {
			1: {1: {text: 'note'}, 2: {text: 'another note'}}
		},
		get: {
			'/docs': function (q, p) {
				var res = []
				for (var doc in docs) {
					if (docs.hasOwnProperty(doc)) {
						res.push(docs[doc])
					}
				}
				p.json(res)
			},
			'/docs/:did/notes': function (q, p) {
				var res = [], n = notes[q.params.id]
				for (var note in n) {
					if (n.hasOwnProperty(note)) {
						res.push(n[notes])
					}
				}
			}
		},
		post: {
			'/docs': function (q, p) {
				var doc = q.body
				doc.id = d++
				docs.doc.id = doc
				p.json(doc)
			},
			'/docs/:did/notes': function (q, p) {
				var note = q.body, id = q.params.id
				note.id = n++
				if (!notes[id]) {
					notes[id] = {}
				}
				notes[id][notes.id] = note
				p.json(note)
			}
		},
		put: {
			'docs/:id': function (q, p) {
				docs[q.params.id] = q.body
				p.json(q.body)
			},
			'docs/:did/notes:nid': function (q, p) {
				notes[q.params.id][q.params.nid] = q.body
				p.json(q.body)
			}
		}
	}
	Note = Bb.M.x({})
	Notes = Bb.C.x({
		m: Note,
		i: function (mds, op) {
			this.doc = op.doc
		},
		u: function () {
			return this.doc.url() + '/notes'
		}
	})
	Doc = Bb.M.x({
		i: function (op) {
			this.notes = new Notes([], {doc: this})
		},
		addNote: function (tx) {
			this.notes.create({
				text: tx
			})
		}
	})
	Docs = Bb.C.x({
		m: Doc, u: '/documents',
		i: function () {
			this.on('reset', this.getNotes, this)
		},
		getNotes: function () {
			this.each(function (doc) {
				doc.notes = new Notes([], {doc: doc})
				doc.notes.fetch()
			})
		}
	})
	ds = new Docs()
	ds.fetch()
}
 
	_vw = function (o) {
		o = o || {}
		if (F(o.i)) {
			o.initialize = o.i
		}
		if (o.q) {
			o.el = q
		}
		return o
	}
	Bb = Backbone
	Bb.Model.prototype.j = function () {
		return this.toJSON()
	}
	Bb.Collection.prototype.j = function () {
		return this.toJSON()
	}
	Bb.M = Bb.Model;
	Bb.M.x = Bb.M.extend
	Bb.C = Bb.Collection;
	Bb.C.x = Bb.C.extend
	Bb.V = Bb.View;
	Bb.V.x = Bb.V.extend
	Bb.M.prototype.idAttribute = '_id'
	Blog = Bb.M.x({defaults: {author: '', title: '', url: ''}})
	Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
	GAL = IMAGEGALLERY = function () {
		z();
		function addEdit() {
		}
		
		function imgLs() {
		}
		
		function imgGal() {
			ImgGal = {
				init: function (o) {
					//get list of images rendered at top
					this.imgs = o.imgs;
					ImgGal.ImgLs.init()
					//to get the addEdit Img on screen .. so that whenever you // load the  (add fresh?) it goes to the add image view
					ImgGal.ImgLs.show(o.imgs)
					ImgGal.AddEditImg.init()
					//init this img view which handles displaying images when we click on them
					ImgGal.AddEditImg.addNewImg()
					ImgGal.ImgVwr.init()
				}
			}
			function showImg() {
				ImgGal.ImgVwr = {
					init: function () {
						this.$main = $('#main')
					},
					show: function (imgM) {
						this.$main.A(
								new Img_({
									model: imgM
								}).r().$el
						)
					}
				}
				Img_ = Bb.v(_vw({
					i: function () {
						this.$main = $('#main')
						this.showImgTp = function (img) {
							var i = $.i('img')
							return $.d().A(i)
						}
					},
					r: function () {
						var els = this.$main.A(
								this.showImgTp(this.model))
						this.$el.A(els)
						return this
					}
				}))
			}
		}
		
		$Ms('Image Gallery')
		$.a('video', 'https://www.youtube.com/watch?v=VERQEr-bVTs')
	}
 
