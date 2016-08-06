'use strict';

var path = require('path');
var fs = require('fs');
var concatStream = require('concat-stream');
var muxml = require('muxml').default;

module.exports = function (grunt) {
	return grunt.registerMultiTask('muxml', 'Parses and formats XML files', function () {
		var done = this.async();
		var self = this;
		var count = 0;
		this.files.forEach(function (file) {
			if (grunt.file.exists(path.join(file.cwd, file.src[0]))) {
				var stream = fs.createReadStream(path.join(file.cwd, file.src[0])).pipe(muxml(self.data.options));
				stream.pipe(concatStream(function (data) {
					grunt.file.write(path.join(file.dest, file.src[0]), data);
					grunt.log.writeln('File "' + path.join(file.dest, file.src[0]) + '" created.');
					count += 1;
					if (count === self.files.length) {
						done();
					}
				}));
			}
		});
	});
};
