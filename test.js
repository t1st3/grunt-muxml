/* global describe,it */

'use strict';

const strictEqual = require('assert').strictEqual;
const grunt = require('grunt');

const tmp = 'tmp/';
const fixtures = 'fixtures/';

describe('grunt-muxml', () => {
	const files = [
		''
	];

	files.forEach(file => {
		it(file + 'initial.xml', done => {
			const actual = grunt.file.read(tmp + file + 'initial.xml');
			const expected = grunt.file.read(fixtures + file + 'expected.xml');
			strictEqual(actual, expected);
			done();
		});
	});
});
