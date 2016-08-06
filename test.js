/* global describe,it,beforeEach */

'use strict';

var strictEqual = require('assert').strictEqual;
var exec = require('child_process').exec;
var path = require('path');
var grunt = require('grunt');

var execOptions = {
	cwd: path.join(__dirname, '..')
};

var tmp = 'tmp/';
var fixtures = 'fixtures/';

describe('grunt-muxml', function () {
	beforeEach(function (done) {
		grunt.initConfig({
			muxml: {
				dist: {
					files: [{
						expand: false,
						cwd: 'fixtures/',
						src: '*initial.xml',
						dest: 'tmp/'
					}],
					options: {
						strict: true
					}
				}
			}
		});
		grunt.loadTasks('tasks');
		grunt.registerTask('default', ['muxml']);
		exec('grunt muxml', execOptions, function () {
			done();
		});
	});

	var files = [
		''
	];

	files.forEach(function (file) {
		it(file + 'initial.xml', function (done) {
			var actual = grunt.file.read(tmp + file + 'initial.xml');
			var expected = grunt.file.read(fixtures + file + 'expected.xml');
			strictEqual(actual, expected);
			done();
		});
	});
});
