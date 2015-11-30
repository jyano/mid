PROFILE = function () {
	$.boot(
			$.h1('you got a profile?'),
			$.div().id('content'),
			f = $.form().C('r').WH(400).A(
					$.div().A(
							$.label('about me'),
							$.textarea().id('aboutMe')),
					$.div().A(
							$.label('i enjoy'),
							$.input().id('iEnjoy')),
					$.div().A(
							$.label('i seek'),
							$.input().id('iSeek')),
					$.submit('save profile'),
					$.button('undo', function () {
						if (p) {
							$('#aboutMe').val(p.aboutMe)
							$('#iEnjoy').val(p.iEnjoy)
							$('#iSeek').val(p.iSeek)
						}
					}),
					$.button('clearr', function () {
						$('input').val('')
						$('#iEnjoy').val('')
						$('#iSeek').val('')
					})
			))
	$.post('/getMyProfile', function (profile) {
		p = profile
		if (p) {
			$('#aboutMe').val(p.aboutMe)
			$('#iEnjoy').val(p.iEnjoy)
			$('#iSeek').val(p.iSeek)
		}
	})
	$('form').submit(function (e) {
		e.preventDefault()
		var data = {
			aboutMe: $('#aboutMe').val(),
			iEnjoy: $('#iEnjoy').val(),
			iSeek: $('#iSeek').val()
		}
		$.post('/myprofile', data, function () {
			$.post('/getMyProfile',
					function (profile) {
						p = profile
					})
			$l('form data submited..')
		})
	})
}
$.profile = function (username, theDiv) {  //=makeProfile = prof
	// if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
	answer = function (question, answer) {
		return $.div().A(
				$.h3(question),
				$.h4(answer))
	}
	username = username || 'a'
	$.get('/profile/' + username, function (data) {
		d = data
		data = {
			aboutMe: d.aboutMe,
			iEnjoy: d.iEnjoy,
			iSeek: d.iSeek
		}
		if (O(data)) {
			theDiv = theDiv || $.divA('b', 300, 300).A().drag()
			theDiv.A(
					$.h4('about me'),
					$.h5(data.aboutMe),
					$.h4('i enjoy'),
					$.h5(data.iEnjoy),
					$.h4('i seek'),
					$.h5(data.iSeek)
			)
		}
	})
}



