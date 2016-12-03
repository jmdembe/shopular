'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
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
                        'src/js/shopular.service.js',
                        'test/js/shopular.controller.spec.js'
                    ]
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
