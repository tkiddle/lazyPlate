module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['./js/**/*.js', '!./js/build/*.min.js', '!./js/vendor/*.js'], // When these files change - not index.min.js
				tasks: ['concat:js', 'uglify'] // Run these tasks
			}
		},
		concat: {
			js: {
				src: ['./js/**/*.js', '!./js/build/*.min.js', '!./js/vendor/*.js'],
				dest: './js/build/index.min.js'
			}
		},
		uglify: {
      js: {
        files: {
          './js/build/index.min.js': ['./js/build/index.min.js']
        }
      }
    },
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', 'watch');
};
