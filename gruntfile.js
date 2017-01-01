'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
          options: {
            jshintrc: '.jshintrc',
            ignores: ['node_modules/**']
          },
          source: {
            files: {
              src: ['src/client/js/**/*.js']
            }
          }
        },
        karma: { // task name
            options: {
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
            // target name
            shopular: {
                options: {
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/shopular.module.js',
                        'src/js/shopular.controller.js',
                        'src/js/storage.service.js',
                        'test/js/shopular.controller.spec.js',
                        'test/js/shopular.service.spec.js'
                    ]
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
