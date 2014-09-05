/*
 * grunt-ng-sass-colors
 * https://github.com/amey/grunt-ng-sass-colors
 *
 * Copyright (c) 2014 Amey Sakhadeo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    ng_sass_colors: {
      default_options: {
        options: {
          module: 'ameyms'
        },
        files: {
          'tmp/default_options.js': ['test/fixtures/testing1.scss', 'test/fixtures/testing2.scss']
        }
      },
      custom_options: {
        options: {
          module: 'ameyms',
          quotes: '"',
          variablesLike: /color[_\-].+/i
        },
        files: {
          'tmp/custom_options.js': ['test/fixtures/testing1.scss', 'test/fixtures/testing2.scss']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'ng_sass_colors', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
