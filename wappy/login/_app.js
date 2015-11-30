Y = {}

Y.directTo = Y.load = load = function(a){  window.location= '/wap/' + a }

Y.run = function(app){

    app = app.toUpperCase()

    app = Y[app] || window[app]

    if(app){app(); return true}

    return false}

Y.render = function(page){



    page = Y[page]

    if(page){page(); return true}

    return false}

$( appInit )
 


Y.GuestPage =  function(){z('r')
  var container= $.containerDiv().A(
      $.headerDiv().A(
          $.ul().K( "nav nav-pills pull-right" ).A(
              $.liA('home').K('active'),
              $.liA('About'),
              $.liA('Contact')),
          $.h1( 'jason yanofski presents..' )),
      $.jumbo(
          'a graphics-based real-time social gaming creativity web app','woo hoo!').A(
          $.buttonL('log in', LoginForm ).C('y','b'),
          $.span(' '),
          $.buttonL('sign up', SignUpForm).C('b','y')),
      $.row(
          $.h1('fun!'),
          $.div().A(
              $.h4('graphics'),
              $.p('cool cool cool'),
              $.h4('social'),
              $.p('cool cool'))))
    container.drag().C('o').opacity(.9).top(100).left(100)}
Y.HomePage =  function(){

    WappyNav( $r()
    ) //load navigator

    Y.run( wappyApp )

    $.getJSON('/loggedIn',

        function(username){

            $l('----' + username)

            $('#uname').text( _username  = username)})

}


 
Y.logOut = function(){
    $.getJSON('/logOut', function(){
        Y.render('GuestPage')})} //logOut =
Y.clear  =function(){
    z();
    WappyNav()}//= clearApps = fresh
    
    
    
function appInit() {
	
	
	//getUserName
	$.getJSON('/loggedIn', function (username) {
		$l('username: ' + username)
		Y._userName = _username = username
		if (username == 'guest' || !username) {
			return Y.render('GuestPage')  //renderGuestPage();
		}  //usr=
		$.get('/getMug', function (mug) {
			Y._userMug = _userMug = mug
		})// =m|mug
		socket.emit('id', username)
		socket.emit('joinRoom', _username)
		Y.render('HomePage')
	})
}
function appInit() {
	
	
	//getUserName
	$.getJSON('/loggedIn', function (username) {
		$l('username: ' + username)
		Y._userName = _username = username
		if (username == 'guest' || !username) {
			return Y.render('GuestPage')  //renderGuestPage();
		}  //usr=
		$.get('/getMug', function (mug) {
			Y._userMug = _userMug = mug
		})// =m|mug
		socket.emit('id', username)
		socket.emit('joinRoom', _username)
		Y.render('HomePage')
	})
}





