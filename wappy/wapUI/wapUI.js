JQUI=function(){z()

    ('<link rel="stylesheet" href="/jquery-ui.min.css">').A()
    ('<script src="/jquery-ui.min.js">').A()


    t=$.textInput('date').A().datepicker()


d= $.div('b',400,400).A().A(t).pad(20)

}


chatRoomsObject={}
ChatRoom=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'


    var theTextInput=$textInput(),

        theSendButton=$button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,

                username: _username,

                message: theTextInput.V() })

        }),

        thePicButton=$button('pic',function(){  pop('pic select')  }),


        thePopButton=$button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),


        theMessages = $div().id( 'cbi' ).s({overflow:'auto', C:'x'}),

        usersInRoomBox= $div()


    theWindow = $win('chatroom: '+title).id(id).s({

        'min-width':600,  'min-height':400, 'background-color': color

    })



    theWindow(

        row(

            col(8,

                theMessages,
                theTextInput,
                theSendButton,
                thePopButton,
                thePicButton ),

            col(4, $h5('users:'), usersInRoomBox)))


    var updateUsersDiv=function(u){
        usersInRoomBox.E()
        if(A(u)){ _.each(u,


            function(username){

                usersInRoomBox(

                    $h5(username).$(

                        function(){

                            alert('clicked '+username)

                            $.post('/mug', {u: username},

                                function(userMug){

                                    var theH1 = $h1(),

                                        theDiv = $div(),

                                        fullProfileButton=$button('full', function(){
                                                $l('/wap/profiles/'+ username);
                                                window.location='/wap/profiles/'+ username
                                            })


                                    $win(

                                        $div()(

                                            $br(), $hr(), $h3('User: '+ username),

                                            $br(),

                                            xc().w(300).h(300).fit( userMug ),  theH1,   theDiv,

                                            ms = $textarea().c( 'w', 'z' ),

                                            $mailButton( ms, username ),

                                            $chatButton( username, ms ),

                                            fullProfileButton  ) )




                                    showStatus(username, theDiv)

                                    makeProfile(username, theDiv) }

                            )}  )

                )})}
        else { usersInRoomBox($h5('no users'))}}

   var chatController={

        u: updateUsersDiv,
        updateUsersDiv: updateUsersDiv,


        w: theWindow,
        window: theWindow,


        t: function(){return theWindow.toggle()},
        toggle: function(){return theWindow.toggle()},

        b:function(m){  theMessages($h5(m).s({c:'w'}))  },
        write:function(m){  theMessages($h5(m).s({c:'w'}))  },


        s:function(m){  theMessages($h5(m).s({c:'z'}))  },
        writeBlack:function(m){  theMessages($h5(m).s({c:'z'}))  }}



    //old way to store rooms...
    //$w['chat_' +  title]= chatController


    //add room to client rooms list
    chatRoomsObject[title] = chatController


    //repeatedly emit 'room', which launches room user updates!
    setInterval( function(){ socket.emit('room', title)}, 1000)

    return chatController
}
$.chatRoom=function(title, color, id){ title = title||'chatbox';color=color||'b'; id=id||'cbo'

    var theTextInput= $.textInput().K('form-control'),

        theSendButton= $.button('send', function(){

            $l('sending: '+theTextInput.val())

            socket.emit('sendChatMessage', {

                chatRoomName: title,

                username: _username,

                message: theTextInput.val() })  }).K("btn btn-mini" ),


        thePicButton= $.button('pic',function(){  pop('pic select')  }).K("btn btn-mini" ),
        thePopButton= $.button('pop', function(){ socket.emit('p', theTextInput.val(), title)}).K("btn btn-mini" ),


        theMessages = $.div('x').id( 'cbi' ).overflow('auto'),

        usersInRoomBox= $.div()


    theWindow = $.win('chatroom: '+title).id(id).minW(600).minH(400).C(color)

    theWindow.A(

        $.row(

            $.col(8,

                theMessages,
                theTextInput,
                theSendButton,
                thePopButton,
                thePicButton ),

            $.col(4, $.h5('users:'),

            // "<div class="m4"><h5>users:</h5></div>"
            // class should be.. "col-md-4" ?!


                usersInRoomBox
            ))
    )


    var updateUsersDiv=function(u){

        usersInRoomBox.empty()

        if(A(u)){ _.each(u,  function(username){

                usersInRoomBox(

                    $.h5(username).$(

                        function(){

                            alert('clicked '+username)

                            $.post('/mug', {u: username},

                                function(userMug){

                                    var theH1 = $.h1(),

                                        theDiv = $.div(),

                                        fullProfileButton=$button('full', function(){
                                            $l('/wap/profiles/'+ username);
                                            window.location= '/wap/profiles/'+ username
                                        })


                                    $.win(

                                        $.div()(

                                            $.br(), $.hr(), $.h3('User: '+ username),

                                            $.br(),

                                            $.canvas(300, 300).fit( userMug ),  theH1,   theDiv,

                                            ms = $.textarea().C('w','z'),

                                            $mailButton( ms, username ),

                                            $chatButton( username, ms ),

                                            fullProfileButton  ) )

                                    showStatus(username, theDiv)

                                    makeProfile(username, theDiv) }

                            )}  )

                )})}

        else { usersInRoomBox.A($.h5('no users'))}}

    var chatController={

        u: updateUsersDiv,
        updateUsersDiv: updateUsersDiv,

        w: theWindow,
        window: theWindow,


        t: function(){return theWindow.toggle()},
        toggle: function(){return theWindow.toggle()},

        b:function(m){  theMessages.A($.h5(m).col('w'))  },
        write:function(m){  theMessages.A( $.h5(m).col('w'))  },


        s:function(m){  theMessages.A($.h5(m).col('z'))  },
        writeBlack: function(m){  theMessages.A( $.h5(m).col('z')) }}

    //add room to client rooms list
    chatRoomsObject[title] = chatController


    //repeatedly emit 'room', which launches room user updates!
    setInterval( function(){ socket.emit('room', title)}, 1000)

    return chatController
}
  

mugHeader =function(){

    return row(

        col(2).k('text-center')(  qim('me').Z(.7),  $h5('hi') ),

        col(3)(
            $h4('pics'),
            $h5('place to upload'))


    ).a()()

}

Message =msg=function(messageText){


    return $div().k('msg').c('x','z').font(20).T(messageText||'messageText goes here').M(10).P(10).B(0) }

ChatRoom2 =chat=function() {//uses var usr!
    $canvas = _c()



    var uni = $canvas.c('b')

    x = xx(uni).w(1200).h(1000)

    row(
        col(12, $br(40)
        )

    ).pp()

    row(

        col(1,

            dv('x', 200, 800)(
                $ul().id('users')
            )),

        col(11, uni)

    ).pp()


    var usersDiv = qq($('#users'))

    usersDiv( $li( $h3('users!'))  )

    usersDiv( $li( $h3('users!'))  )

    usersDiv(  $li( 'user1')  )


}

//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???


add=function rc( messagesArray, a ){

    var args=G(arguments)

    if(args.n){ messagesArray.E() }

    if( A(a) ){

        _.each(a,
            function(v){
                rc( O(v) ?v.n :v) })}

    else { _.each(

        args,

        function(v){messagesArray($br(),
            msg(v))
        }

    )}
}
 
//runs a fn on the qq of all obs of certain class
all=function(s,func){
    _.each($('.'+s),
        function(m){func(qq(m))})
}

//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

getMessages = gMsgs=function rc(u,M){
    qJ(u,
        function(d){
            add(M,d)

        all('msg', function(m){

            m.$$(pof('/nMsg',{n:m.T()},rc))

        })

        })}


// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
dataValue=dV=function rc(title, content){
    if( U(content) ){return rc(null, title)}
    var data={}
    data.c=data.content=data.message=content.V()
    if(title){data.t =data.title =data.topic=title.V()}

    return data}
joinSelf = function(){

    socket.emit( 'joinRoom',  _username )

}
sendMessage =iMsg=function( toWho, message ){


    $l('toWho: '+ toWho)

    $l('message: '+ message)

    socket.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

}
PrivateChatRoom  = function(roomName){


    //bug.. if they CLOSE the window...this needs to TRIGGER something
    //in this case (removal from the chatRoomsObject)..
    //but more generally, i need to allow a sophisticated options obj to $win

    if(chatRoomsObject[ roomName ]){ $l('already in this room') }

    else {

        ChatRoom(roomName)

        socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
    }



}
$.dangMessage=function(msg){


    var theForm = $.span().delButton()

        theForm.A(   $.h2(msg).K('alert alert-danger')  )

    return theForm.prependTo('body')}
$.floatingInput=function(text, func){

    var args=G(arguments),

        theForm=$.form().K('text-center').C('o').fontSize(20).drag().minW(200 )

    theForm.A(

        $.button(text).type('submit'),
        $.input()

    )

    if( F(func) ){ theForm.submit(func) }


    return theForm}

$.$modalHeader=function(title){
   return $.modalHeader().A(
        $.button('x').K("close").dismiss("modal"),
        $.h4(title).K("modal-title").id("myModalLabel")
    )
}
MOODAL=function(){z()

        var header= $.$modalHeader('title')

        var body=$.modalBody().A(  $.h3('modal body')  )

        var footer= $.modalFooter().A(
            $.button('close').K("btn").dismiss('modal'),
            $.button('save').K("btn").C('r'))

      m= $.div().K("modal fade").id("basicModal").A(
           $.modalDialog().A(
               $.modalContent().A(   header,body,footer )   )
       ).A()

    }