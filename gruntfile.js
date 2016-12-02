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

      shopular: {
          options: {
              files: [
                  'node_modules/angular/angular.js',
                  'node_modules/angular-mocks.js',
                  'src/js/shopular.module.js',
                  'src/js/shopular.controller.js',
                  'src/js/shopular.service.js',
              ]
          }
      }
    });
    grunt.ladnpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
