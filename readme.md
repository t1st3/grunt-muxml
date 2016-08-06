# grunt-muxml [![Build Status Travis](https://travis-ci.org/t1st3/grunt-muxml.svg?branch=master)](https://travis-ci.org/t1st3/grunt-muxml) [![Coverage Status](https://coveralls.io/repos/github/t1st3/grunt-muxml/badge.svg?branch=master)](https://coveralls.io/github/t1st3/grunt-muxml?branch=master)

> An XML parsing and formatting plugin for Grunt


## Install

```
$ npm install --save-dev grunt-muxml
```


## Usage

```js
module.exports = function (grunt) {
	grunt.initConfig({
		'muxml': {
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

	grunt.registerTask('default', [
		'muxml'
	]);
};
```


## Options

See [`muxml`'s options](https://github.com/t1st3/muxml#options), which are all supported.


## Related

* [muxml](https://github.com/t1st3/muxml) | API for muxml
* [muxml-cli](https://github.com/t1st3/muxml-cli) | CLI for muxml
* [gulp-muxml](https://github.com/t1st3/gulp-muxml) | muxml as a [`gulp`](http://gulpjs.com/) plugin


## License

MIT © [t1st3](http://tiste.org)
