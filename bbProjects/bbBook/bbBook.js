 
$Ms=function(ms){$.h1(ms)}
 

 
$$$=function(ms){
    z()
    $Ms(ms)
}
$.fn.V = function(ob){
    ob = ob || {};
    ob.el = this;
    return $V(ob)
}
      
  
function book(){


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
   /* BOOKVW = function () {
        $.dI('td)
        TdVw = $V({
            t: 'li',

            e: {
                'click .toggle': 'toggleCompleted',
                'dblclick label': 'edit',
                'keypress .edit': 'updateOnEnter',
                'click .destroy': 'clear',
                'blur .edit': 'close'
            },


            Item: function (o) {
                return $.d([$.cb().id('td_complete').at('checked', o.completed ? 'checked' : ''), o.tt])
            },


            i: function (ops) {
                this.ops = ops || {};
                this.model.on('change', _.b(this.r, this))
            }, //  access passed ops inyour view


            // Re-render tt of td item.
            r: function () {
                var v = this
                v.q.h(this.Item(this.md.J())) // this.md.atts ?
                v.input = v.$('.edit')
                return v
            },

            edit: function () {
            },    // executed when td label is double clicked
            close: function () {
            },  // executed when td loses focus
            updateOnEnter: function (e) {
            } // executed on each keypress when in td edit mode, but we'll wait for enter to get in action
        })
        ListVw = $V({
            r: function () {
                // Assume our md exposes items we will display in our list
                _.e(this.g('items'), function (i) {
                    // Createnew instance of ItemVw, passing it spec md item
                    // The itemVw's DOM el is appended after it
                    // has been rendered. Here, 'return this' is helpful
                    // as itemVw renders its md. Later, we ask for its output ("el")
                    this.A(TdVw({md: i}).r().q)
                }, this)
            }
        })
        tdVw = new TdVw()
        // log reference toDOM el that corresponds to view instance
        $l(tdVw.el); // logs <li></li>
    }*/
    
    BCL = function () {
        $.x().h1('BCL but whats up wit dose funcs?')


        BksC = $Cl({
            m: Bk = $M({
                d: {n: '', g: 'fun'},
                url: 'http://localhost:51377/api/Books'
            }),
            d: {pizzaTopping: 'pepperoni'}
        })


        cl1 = BksC()
        cl1.A([Bk({n: "Bk 1"}), {}, {}, Bk({n: "Bk 2"})])
        cl2 = BksC([bk1 = Bk({ID: 1, n: "Bk 1"}), bk2 = Bk({ID: 2, n: "Bk 2"})])
        cl2.A(bk3 = Bk({ID: 3, n: "Bk 3"}))

        add = function () {
            $l('add')
            cl2.A([
                bk4 = Bk({ID: 4, n: "Bk 4"}),
                bk5 = Bk({ID: 5, n: "Bk 5"})
            ])
        }

        add()
        addAt = function (n) {

            cl2.add(bk0 = Bk({n: "Bk 0"}), {at: n || 0})
        }
        change = function () {
            bk3 = Bk({ID: 3, n: "Bk 3"})
            cl2.add(bk3)
            bk3_changed = Bk({ID: 3, n: "Changed Model"})
            cl2.add(bk3_changed, {merge: true})
        }
    }
    BCL = function () {
        $.x().h1('BCL')
        Bk = Bb.M.e({
            d: {ID: '', n: ''},
            id: "ID",
            url: 'http://localhost:51377/api/Books'
        })
        BksC = Bb.C.e({m: Bk})
        cl1 = BksC.o()
        bk1 = Bk.o({ID: 1, n: "Bk 1"})
        bk2 = Bk.o({ID: 2, n: "Bk 2"})
        cl2 = BksC.o([bk1, bk2])
        bk3 = Bk.o({ID: 3, n: "Bk 3"})
        cl2.add(bk3)
        change = function () {
            bk3 = new Bk({ID: 3, n: "Bk 3"})
            cl2.add(bk3)
            bk3_changed = Bk.o({ID: 3, n: "Changed Model"})
            cl2.add(bk3_changed, {merge: true})
        }
        add = function () {
            bk4 = Bk.o({ID: 4, n: "Bk 4"})
            bk5 = Bk.o({ID: 5, n: "Bk 5"})
            cl2.add([bk4, bk5])
        }
        addAt = function (n) {
            bk0 = new Bk({ID: 0, n: "Bk 0"})
            cl2.add(
                bk0, {at: n || 0}
            )
        }

    }
    MODCHANGE = function () {
        $.x()
        Bk = $M({

            d: {ID: "", n: ""},
            i: function () {
                var bk = this;
                $l('init..')


                this.on('change', function () {
                    alert('change')
                    if (bk.hasChanged('ID')) {
                        alert('ID changed')
                    }
                    if (bk.hasChanged('n')) {
                        alert('n changed')
                    }

                })
            },

            showAlert: function () {
                alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }
        })
        bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})
    }
    MODCHANGE = function () {
        $.x()

        Bk = Bb.M.e({

            d: {ID: "", n: ""},
            initiate: function () {

                $l('init..')

                var that = this

                this.on('change', function () {
                    alert('change')
                    if (that.hasChanged('ID')) {
                        alert('ID changed')
                    }
                    if (that.hasChanged('n')) {
                        alert('n changed')
                    }
                })
            },

            showAlert: function () {
                alert('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }

        })
        // ChildBook = Bk.extend({})
        bk = Bk.o({ID: 1, n: "a"})
    }
    MODCHANGE = function () {
        $.x('x', 'modchange')
        Bk = $M({
            d: {ID: "ooooo", n: ""},
            i: function () {
                var bk = this;
                $l('init..')


                bk.$(function () {
                    $l('change')
                    g = G(arguments)
                    o = g[1]
                    m = g[0]

                    if (bk.hC('ID')) {
                        $l('ID changed')
                    }
                    // if(bk.hC('n')){$l('n changed') }
                    bk.hC('n', function () {
                        $l('n changed')
                    })
                })
            },
            show: function () {
                $l('ID: ' + this.g('ID') + ',' + ' n: ' + this.g('n'))
            }
        })
        bk = Bk({ID: 1, n: "a"})
        bk.s({r: 'a'}, {a: 1, b: 2, c: 3})
        _.in(function () {
            bk.s('n', 'z', {a: 1, b: 2, c: 3})
            _.in(function () {
                bk.s({n: 'rfds'}, {a: 1, b: 2, c: 3})
            }, '*')

        }, '*')
    }
    BBSORT = function () {


        Chapter = Backbone.Model

        chapters = new Backbone.Collection

        chapters.comparator =
            //'page'
            function (a) {
                return _z(a)
            }

        chapters.add(
            new Chapter({page: 9, title: "The End"}))


        chapters.add(
            new Chapter({page: 5, title: "The Middle"}))


        chapters.add(
            new Chapter({page: 1, title: "The Beginning"}))


        $l(chapters.pluck('title'))


    }
}
  
  