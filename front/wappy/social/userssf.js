PROFILE=function(){

    $.boot(

        $.h1('you got a pf?'),

        $.d().id('content'),

       f = $.form().C('r').WH(400).A(
            $.d().A(
                $.lb('about me'),
                $.ta().id('aboutMe')),
            $.d().A(
                $.lb('i enjoy'),
                $.ip().id('iEnjoy')),
            $.d().A(
                $.lb('i seek'),
                $.ip().id('iSeek')),

           $.sbm('save pf'),




           $.bt('undo', function(){
        if(p){

            $('#aboutMe').v(p.aboutMe )
            $('#iEnjoy').v(p.iEnjoy )
            $('#iSeek').v(p.iSeek )

        }

    }),



           $.bt('clearr', function(){
               $('input').v('')
               $('#iEnjoy').v('')
               $('#iSeek').v('' )
           })

       ))

    $.po('/getMyProfile', function(pf){
            
            if(pf){
                $('#aboutMe').v(pf.aboutMe )
                $('#iEnjoy').v(pf.iEnjoy )
                $('#iSeek').v(pf.iSeek )

            }

        })

    $('form').sbm(function(e){$.pD(e)
  

        var data = {
            aboutMe: $('#aboutMe').v(),
            iEnjoy: $('#iEnjoy').v(),
            iSeek: $('#iSeek').v()
        }

        $.po('/myPf', data, function(){

            $.post('/getMyProfile',
                function(pf){
                    p = pf})

                    $l('form data submited..')

        })

    })



}
 



$.pf= $.pf = function(un, theDiv){  //=makeProfile = prof
    // if(pf.aboutMe){div.A(answer('aboutMe', pf.aboutMe)) } if(pf.iEnjoy){div.A(answer('iEnjoy', pf.iEnjoy)) } if(pf.iSeek){div.A(answer('iSeek', pf.iSeek) )}
    answer = function(ques , answ){
        return $.d().A(
            $.h3(ques ),
            $.h4(answ))}
    un = un || 'a'
	
	
    $.get('/pf/' + un,  function(data){

        d = data

        data = {

            aboutMe: d.aboutMe,
            iEnjoy: d.iEnjoy,
            iSeek: d.iSeek

        }

        if(O(data)){

            theDiv = theDiv|| $.divA('b',300,300).A().drag()

            theDiv.A(
                $.h4('about me'),
                $.h5(data.aboutMe),

                $.h4('i enjoy'),
                $.h5(data.iEnjoy),

                $.h4('i seek'),
                $.h5(data.iSeek)
            )

        }})


}


 
showStatus =stat=function(ur, dv){
	$wSts(ur, function(sts){
            dv($.h3('STATUS: '+ sts))
        })

}



STATUS=function(){



    $.fm()


    s1.A(

        $.h1('sts'),

        $.ip().id('stsInput'),

        $.bt('update', function(){
            sts = $('#stsInput').v()

            $.post('/sts', {text: sts}, function(){

                $l('sts updated')
            })
        })


    )












}