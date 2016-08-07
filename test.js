/* global describe,it */

'use strict';

var strictEqual = require('assert').strictEqual;
var grunt = require('grunt');

var tmp = 'tmp/';
var fixtures = 'fixtures/';

describe('grunt-muxml', function () {
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
