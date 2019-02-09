var fs = require('fs'),
		translation1 = require('./nj_new_jersey_zip_codes_geo.min.json'),
		translation2 = require('./pa_pennsylvania_zip_codes_geo.min.json');

(function () {
	var key, big, small, res = {};
	if (Object.keys(translation1).length >= Object.keys(translation2).length) {
		big = translation1;
		small = translation2;
	}
	else {
		big = translation2;
		small = translation1;
	}
	for (key in big) {
		if (big.hasOwnProperty(key)) {
			res[key] = (small[key] !== void 0) ? small[key] : big[key];
		}
	}
	fs.writeFileSync('res.json', JSON.stringify(res));
})();