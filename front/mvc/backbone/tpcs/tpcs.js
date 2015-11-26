(function pre() {
    $l = function (a) {
        console.log.apply(console, arguments);
        return a
    };
    (function loadScripts() {
        $l('tcps:loadScripts')
//$('body').A(  $('<script src="/us.js">') ) //$('body').A(  $('<script src="/string.js">') )
        $.tK = function (k, toAdd) {
            var g = G(arguments),
                t = $.t()
            t.K(k)

            if (A(toAdd)) {

                _.e(toAdd, function (q) {
                    t.A(q)
                })
            }
            return t
        }
        $.fn.v = $.fn.val
        $.fn.v_ = function () {
            var val = this.val();
            this.val('');
            return val
        }
        $.fn.A = $.fn.append;
        $.fn.K = $.fn.addClass
        $.scr = function (js) {
            var script = $('<script>')
            script.attr('src', js);
            return script
        }
        $.j = $.js = function (js) {

            $('body').A($.scr(js)
            )
        }
        $.j('/us.js');
        $.j('/string.js')
        $.j('/both.js') //$.j('/jq.js') //$.j('/jqSer.js')
        $.j('/bs.js');
        $.j('/frontOb.js');
        $.j('/handy.js')
        $.j('/sty.js');
        $.j('/rules.js')
        $.j('/flex.js');
        $.j('/bb.js');
        $.j('/bbCore.js')
        $.j('/bbLs.js')
    }());
    (function superBb() {

        Bb = Backbone
        Bb.Model.prototype.j = function () {
            return this.toJSON()
        }
        Bb.Collection.prototype.j = function () {
            return this.toJSON()
        }
        Bb.M = Bb.Model;
        Bb.M.prototype.idAttribute = '_id'
        Bb.M.x = Bb.M.extend
        Bb.C = Bb.Collection;
        Bb.C.x = Bb.C.extend
        Bb.V = Bb.View;
        Bb.V.x = Bb.V.extend
        Blog = Bb.M.x({

            defaults: {author: '', title: '', url: ''}
        })
        BlogView = Bb.V.x({
            tagName: 'tr',
            template: function (o) {
                return [

                    $('<td>').A(
                        $('<span>').K('author').text(o.author)),

                    $('<td>').A(
                        $('<span>').K('title').text(o.title)),

                    $('<td>').A(
                        $('<span>').K('url').text(o.url)),

                    $('<td>').A(
                        $('<button>').K('btn btn-warning edit-blog').text('Edit'),
                        $('<button>').K('btn btn-danger delete-blog').text('Delete'),
                        $('<button>')
                            .K('btn btn-success update-blog').text('Update')
                            .css('display', 'none'),
                        $('<button>').K('btn btn-danger cancel')
                            .text('Cancel').css('display', 'none')
                    )
                ]
            },
            render: function () {
                var vw = this,
                    nodes = vw.template(this.model.j())
                vw.$el.A(nodes)//_.each(nodes, function(node){ vw.$el.A(node) })
                return vw
            },
            events: {
                'click .edit-blog': 'edit',
                'click .update-blog': 'update',
                'click .cancel': 'cancel',
                'click .delete-blog': 'delete'
            },
            edit: function () {
                var vw = this, author, title, url
                vw.$('.edit-blog').hide()
                vw.$('.delete-blog').hide()
                vw.$('.update-blog').show()
                vw.$('.cancel').show()


                author = this.$('.author').html()
                title = this.$('.title').html()
                url = this.$('.url').html()


                this.$('.author').empty().A(
                    $('<input>').K("form-control author-update").v(author)
                )
                this.$('.title').empty().A(
                    $('<input>').K("form-control title-update").v(title)
                )
                this.$('.url').empty().A(
                    $('<input>').K("form-control url-update").v(url)
                )


            },
            update: function () {
                this.model.set('author', $('.author-update').v())
                this.model.set('title', $('.title-update').v())
                this.model.set('url', $('.url-update').v())
                this.model.save(null, {
                    success: function () {
                        $l('success updated!')
                    }
                })
            },
            cancel: function () {
                blogsView.render()
            },
            delete: function () {
                this.model.destroy()
            }
        })
        Blogs = Bb.C.x({model: Blog, url: 'http://localhost/api/blogs'})
        BlogsView = Bb.V.x({
            el: '.blogs-list',
            initialize: function () {
                var vw = this
                this.collection.on('add', this.render, this)
                this.collection.on('change', function () {
                    setTimeout(function () {
                        vw.render()
                    }, 30)
                }, vw)
                this.collection.on('remove', this.render, this)
                this.collection.fetch({
                    success: function (docs) {
                        if (docs) {
                            //_.each(res.j(), function (item) { $l('got blog with _id: ' + item._id) })
                            $l('there are doc')
                            $l(docs)
                        }
                    }, error: function () {
                        $l('failed to get blogs!')
                    }
                })
            },
            render: function () {
                var vw = this
                vw.$el.html('')
                vw.collection.each(function (blogMd) {
                    vw.$el.A(
                        (new BlogView({model: blogMd})).render().el
                    )
                })
                return this
            }
        })

    }());
}());
$(function tpcsApp(){
    tpcsIndexHtml()
    tp$$ = tps = blogs = new Blogs()
    tp__ = tpsV = blogsView = new BlogsView({ collection: blogs })
})


function tpcsIndexHtml(){


    $('body').A($('<div>').K('container').A(
        $('<h1>').html('Blog App ' + Math.random()),
        $table = $('<table>').K('table')
    ))


    $thead = $('<thead>').A(
        $('<tr>').A(
            $('<th>').html('AuthoR'),
            $('<th>').html('Title'), $('<th>').html('Url'), $('<th>').html('action')),
        $('<tr>').A(
            $('<td>').A($('<input>').K('form-control author-input')),
            $('<td>').A($('<input>').K('form-control title-input')),
            $('<td>').A($('<input>').K('form-control url-input')),
            $('<td>').A($('<button>').html('Add').K('btn btn-primary add-blog'))))

    $table.A(
        $thead,
        $tbody = $('<tbody>').K('blogs-list'))

    $('.add-blog').on('click', function (){
        blogs.create({

            author: $('.author-input').v_(),
            title: $('.title-input').v_(),
            url: $('.url-input').v_()

        })

    })




}