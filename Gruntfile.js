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
