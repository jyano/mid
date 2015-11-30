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

 

Y.clear  =function(){
    z();
    WappyNav()
    
}//= clearApps = fresh








