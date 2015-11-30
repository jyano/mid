$a.PO('/sendMail',   function (q, p) {
	models.mail.create({
				to: q.body.to,
				from: q.un,
				text: q.body.text
			},
			function (z, da) {
				p.json(da)
			}
	)
})
$a.G('/gMsg', function (q, p, nx) {
	var o = {}
	o.map = function () {
		emit(this.from, {
			text: this.text,
			datetime: this.datetime
		})
	}
	o.reduce = function (k, vals) {
		var d
		vals.forEach(function (v) {
			if (!d) {
				d = {datetime: v.datetime, text: v.text, from: k}
			}
			else if (v.datetime > d.datetime) {
				d = {datetime: v.datetime, text: v.text, from: k}
			}
		})
		return d
	}
	models.mail.mapReduce(o,
			function (z, reduction) {
				p.json(
						_.map(reduction, function (val) {
							return val.value
						}))
			})
})
// get mail FROM User, TO a sp. user
$a.G('/myMailFrom',  function (q, p, nx) {
	models.mail.find({to: q.un, from: q.query.un},
			function (z, da) {
				p.json(da)
			})
})
//get all mail TO ===or==== FROM user
$a.G('/myMailWith',   function (q, p) {
	models.mail.find(
			{
				$or: [
					{to: q.un, from: q.query.un},
					{to: q.query.un, from: q.un}
				]
			},
			function (z, da) {
				p.send(da)
			})
})
$a.G('/sentMail',   function (q, p, nx) {
	$l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))
	models.mail.find({from: q.un}, function (z, da) {
		p.send(da)
	})
})
$a.G('/sentMail0',   function (q, p) {
	var o = {};
	o.query = {from: q.un}
	o.map = function () {
		emit(this.to, {
			text: this.text, datetime: this.datetime, from: this.from
		})
	}
	o.reduce = function (k, vals) {
		var da
		vals.forEach(function (val) {
			if (!da) {
				da = {
					datetime: val.datetime,
					mail: val.mail,
					to: k,
					from: val.from
				}
			}
			else if (val.datetime > da.datetime) {
				da = {
					datetime: v.datetime, from: val.from,
					mail: val.mail,
					to: k
				}
			}
		})
		return da
	}
	models.mail.mapReduce(o, function (z, da) {//$l(r)
		// r.find().exec(     function(z,r){   p.j(r)  })
		da = _.map(da,
				function (v) {
					return v.value
				})
		da.sort({datetime: 1})
		p.json(da)
	})
})
  
