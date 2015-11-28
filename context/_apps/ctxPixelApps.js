XX7 = RAW = PX = function () {
	__C()
	i = new Image()
	$(i).load(function (e) {
		x.drawImage(e.target, 0, 0)
		d = x.getImageData(0, 0, 200, 200)
		for (var i = 0; i < d.data.length; i += 4) {
			d.data[i] = 255 - d.data[i];
			d.data[i + 1] = 255 - d.data[i + 1];
			d.data[i + 2] = 255 - d.data[i + 2];
			d.data[i + 3] = 255;
		}
		x.putImageData(d, 0, 0);
	})
	i.src = _.src('me')
}