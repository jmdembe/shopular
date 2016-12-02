'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        karma: {
            frameworks: ['mocha', 'chai'],
            client: {
                mocha: {
                    ui: 'bdd'
                }
            },
            browsers: ['PhantomJS'],
            singleRun: true,
            preprocessors: {
                'src/js/**/*.js': ['coverage']
            },
            reporters: ['dots', 'coverage'],
            coverageReporter: {
                type: 'text-summary',
            }
        },

      registrar: {
          options: {
              files: [
                  'node_modules/angular/angular.js'
              ]
          }
      }
    });
    grunt.ladnpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
