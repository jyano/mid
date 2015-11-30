



//used for LISTING things (blog posts, etc)
$.blip = blp=function(s, div){

    //topic, datetime, content

    var g=G(arguments),
        s=g[0],

        div=g[1],

        theSpan = $.span(),
        post=s

    post.topic = post.t
    post.user = post.u
    post.datetime = post.dt
    post.content = post.c

    if(g.p){

        theSpan.A(

            $.button('topic: '+ post.topic,
                function(){
                    topic = post.topic;  tab4.load()  }   ),

            $.h3( post.content )

        )
        if(post.datetime){
            theSpan.A($.h5( dt(post.datetime).dt() ) )
        }




    }


    else if(g.n){

        theSpan.A(
            $.button('user: '+ post.user, function(){from=post.user;tab3.load()}),

            $.br(),

            $.button( 'topic: '+post.topic, function(){topic=s.t;tab4.load()}),



            $.h3(post.content) )


        if(post.datetime){
            theSpan.A( $.h5( dt(post.datetime).dt() ) )
        }
    }

    else if(g.d){

        theSpan.A(

            $.button('user: '+post.user, function(){
                from=post.user;
                tab3.load()}),

            $.br(),


            $.h3(post.content)
        )

        if(post.datetime){
            theSpan.A($.h5( dt(post.datetime).dt() ) )
        }

    }

    else {

        if(post.datetime){
            theSpan.A($.h4( dt(post.datetime).dt() ) )
        }

        theSpan.A(



            $.h1(post.content)
        )

    }

    if(post.du){

        theSpan.A(

            $.canvas('X', 400).A().fit( post.du )

    )}


    theSpan.A($.hr())


    return D(div)? div.A( theSpan ): theSpan

}

//api calls
withStatusX = wUSt=function(user,func){//with first status?

    qG('/sts1',

        {u: user},

        function(status){ func(status.c) })
}

$mailButton = btMail=function(message, user){

   return $.button('mail',

       function(){

           $.post('/sMsg',   {m: message.V(), to: user.u}

           )})}

$chatButton  =function(username, message){ //= btChat  //_$username,  messageTextarea


    mmm=message

    return $.button('chat',


        function(){

        $l('send message')

        //$l('message: '+ message.V())

        $l('toWho: '+ username)

        $l('from: '+ _username)


           // mo= {  message: message.V(),  toWho:username,  from:_username  }

            socket.emit('sendPrivateMessage',

            {  message: message.V(),  toWho:username,  from:_username  }

        )


    })

}

 
 
//avail=bbM({url:'/sts'})

//avails=bbC({model:avail, url:'/sts'})

c3X=function(a){ return $.canvas(300).A().fit(a) }



johnX=function(){

    var o={}

    o.d=3

    o.a=function(){o.d++}

    o.g=function(){return o.d}

    return o}


fredX=function(){
    var o = john();

    o.m =function(){o.d--}
    return o
}



REQUESTSX=function(){var c=CT(),d=dv('y',800,600)
    c(d(h1('Buddy requests'),br(),
        MB=_d().w(600).h(500)( )).$$(function(){d.drg()}))
    qG('/gRq',function(msgs){_e(msgs,function(msg){MB(_d()(
        h6('from '+msg.fr+' on '+msg.dt),
        h5(msg.m),
        bt('accept',function(){qP('/yRq',{u:msg.fr})}),bt('deny'),hr()))})})}
USERSX=function(){

    CT(h1('Users: '),br(),rr=row())
    getUsers(function(u){




        _e(u,function(u){  qP('/dud',{d:u.m}, function(m){
            rr(tn(pg(u.u),br(),m).o(function(){
                win(_d()(br(),hr(),h3('User: '+ u.u), br(),
                    xc().w(300).h(300).f(m), s=h1(),  d=_d(),
                    ms=ta().c('w','z'),bt('mail',function(){qP('/sMsg',{m:ms.V(),to:u.u})}),
                    bt('chat',function(){iMsg(u.u,ms.V())}),
                    bt('buddy-request',function(){qP('/sRq',{to:u.u})})))

                prof(u.u, d)

                wUSt(u.u,function(s){
                    d(h1('STATUS: '+s))
                    d(bt('comment',function(){iMsg(u.u,ms.V())}),
                        bt('see feed',function(){iMsg( u.u, ms.V())}),
                        bt('see blog',function(){BLOG(u.u)}),
                        bt('challenge',function(){qP('/sRq',{to:u.u})}))})}))})})})



    tab1=['users',function(){


    }]

    tab2=['a',function(){}]
    tab3=['a',function(){}]
    tab4=['a',function(){}]

    s2(t=tabs(tab1,tab2,tab3,tab4))
    t.load()

}


BLOGX=function(u){

    z()
    WAPNAV()

    format()

    s1(h1('user '+u+' blog'))


    qG('/pstu',{u:u}, function(i){blp(i, s2, '+')},'+')}

