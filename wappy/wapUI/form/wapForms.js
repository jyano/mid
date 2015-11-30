_form = function(){
	var f  = $.f().C('g').pad(4).A(
			bs.fGpD().A(
					$.lb('un: ', 'un'),
					$.ip('un')),
			bs.fGpD().A(
					$.lb('pw: ', 'pw'),
					$.ip('pw')),
			$.sbm('log in')
	)
	return f
}
function sbm(e) {
	$.pD(e)
	var fDat = f.serJ() // $l(formData)
	$.po('/login', formData, verifyLogin)
}
 

function verifyLogin(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle')
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}
 

_LoginForm = function () {

	return  _form().sbm( sbm)
	
	 
}
 

LoginForm = function () {
	$.pop(_LoginForm()).dg()
}
SignUpForm = function () {
	$.pop(_SignUpForm()).dg()
}


unIp=function(){
return	$.d().K('form-group').fontSize(20).name('un').A(
			$.lb('un: ', 'un'),
			$.input().K('form-control').id('uname')
	)
}
pwIp=function(){
	return $.d().K('form-group').A(
			$.lb('pw: ', 'pw'),
			$.pw().id('pw')
	).fontSize(20).name('pw')
}
verify = function () {
	return {
		un: un.fi('input').v(),
		pw: pw.fi('input').v()
	}
}
 
_SignUpForm = function () {

	var unInput, pwInput, submit
	
	return $.f().C('o').pad(4).A(
	
			unInput = unIp(), 
			pwInput = pwIp(),
			submit = $.smBt('sign up').fS(16)
	
	).submit(sbm)
	
}

function sbm(e) {
	e.preventDefault()
	un = unInput.fi('input').v()
	pw = pwInput.fi('input').v()

	$.po('/user', {
		un: un,
		pw: pw
	}, login)
}
_SignUpForm = function () {
	var unInput = $.d().K('form-group').fS(20).nm('un').A(
					$.lb('un: ', 'un'),
					$.ip().K('form-control').id('uname')
			),
			pwInput = $.d().K('form-group').A(
					$.lb('pw: ', 'pw'),
					$.pw().id('pw')
			).fS(20).name('pw'),
			submit = $.smBt('sign up').fS(16), verify,
			form = $.f().C('o').pad(4).A(
					unInput, pwInput,
					submit)
					
	form.submit(function (e) {
		e.preventDefault()
		un = unInput.find('input').val()
		pw = pwInput.find('input').val()
		$.post('/user', {
			un: un,
			pw: pw
		}, function (un) {
			if (un === 'guest') {
				$('.modal').modal('toggle');
				$.pop('try again.. idiot')
			}
			else {
				Y.render('HomePage');
				$.pop('welcome ' + un + '!')
			}
		})
	})
	return form
}

function login(un) {
	if (un === 'guest') {
		$('.modal').modal('toggle');
		$.pop('try again.. idiot')
	}
	else {
		Y.render('HomePage');
		$.pop('welcome ' + un + '!')
	}
}