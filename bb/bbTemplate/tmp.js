TMP = function () {
	TMPWORKS = function () {
		$.x('b')
		data = {n: 'j', a: 20, o: 'p'}
		$V({
			t: 'li', i: function () {
				$l(this.model)
				this.r()
			},
			r: function () {
				this.A().A(
						$.h1(this.tp(this.model.toJSON())))
			},
			tp: tp = _.tp(
					'<%=n%> ( ((( (((( -  -<%=a%>-  - )))) )) ) - <%=o%>'
			),
			x: 'some-per',
			k: 'per'
		})({
			m: Per = $M()(data)//=== M({df:data})()
		})
	}
	TMP = function () {
		$.x('r');
		data = {n: 'j', a: 20, o: 'p'}
		$V({
			t: 'li',
			i: function () {
				$l(this.model);
				this.r()
			},
			r: function () {
				this.A().A(this.tp(this.model.toJSON()))
			},
			tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
			x: 'some-per',
			k: 'per'
		})({
					m: Per = $M({
						d: data
					})()
				}
		)
	}
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}
TMP = function () {
	$.x('r');
	$V({
		t: 'li', x: 'some-per', k: 'per',
		tp: tp = _.tp('<%= n %> (<%= a %>) - <%= o %>'),
		r: function () {
			this.A().A(this.tp(this.model.toJSON()))
		},
		i: function () {
			$l(this.model);
			this.r()
		}
	})({m: Per = $M({d: {n: 'j', a: 20, o: 'p'}})()})
}