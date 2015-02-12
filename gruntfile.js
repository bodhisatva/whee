'use strict';

module.exports = function(grunt) {

  var watchFiles = {
    serverViews: ['app/views/**/*.html'],
    clientViews: ['public/modules/**/**/*.html'],
    serverJS: ['gruntfile.js', 'server.js', 'app/**/**/*.js'],
    clientJS: ['public/javascript/**/*.js', 'public/*.js', 'public/modules/**/**/*.js'],
    clientCSS: ['public/modules/core/css/header.less', 'public/modules/core/css/home.less', 'public/modules/destinations/css/destinations.less', 'public/modules/shoppingCartButton/css/shopping.cart.button.less']
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },
      clientViews: {
        files: watchFiles.clientViews,
        options: {
          livereload: true
        }
      },
      serverJS: {
        files: watchFiles.serverJS,
        options: {
          livereload: true
        }
      },
      clientJS: {
        files: watchFiles.clientJS,
        options: {
          livereload: true,
        }
      },
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ["less"],
        options: {
          livereload: true,
        }
      }
    },
    less: {
      development: {
        options: {
          paths: watchFiles.clientCSS,
        },
        files: {
          'public/css/app.css': watchFiles.clientCSS
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
    concurrent: {
      default: ['nodemon', 'watch'],
      debug: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true,
        limit: 10
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['concurrent:default']);
  grunt.registerTask('debug', ['lint', 'concurrent:debug']);

};
