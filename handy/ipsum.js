$.ips = function (len) {
	len = len || 1;
	var str = '';
	_.t(len, function () {
		str = str + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
	});
	return str
}
$.ipsP = function (len) {
	return $.p().A($.ipsum(len))
}
$.fn.ips = $.fn.ipsum = function () {
	var that = this
	_.each(arguments, function (num) {
		that.A($.ipsum(num))
	})
	return this
}
$.fn.ipsumP = function () {
	var el = this
	_.e(arguments, function (num) {
		el.A($.ipsumP(num))
	})
	return el
}
ips1 = 'dolor sit amet, consectetuer adipi nibh euismod tincidunt ut laoreet dolore magna aliquam' +
'erat volutpat. Ut wisi enim ad mini corper suscipit lobortis nisl ut a commodo consequat.'
ips2 = l1 = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam' +
'erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo' +
'consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat' +
'nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore' +
'te feugait nulla facilisi.'
ips3 = l2 = 'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper' +
'suscipit lobortis nisl ut aliquip ex ea commodo consequat.' +
'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,' +
'vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan' +
'et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue' +
'duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,' +
'consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt' +
'ut laoreet dolore magna aliquam erat volutpat.'
