module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'directives/**/*.js'],
      options: {
        // options here to override JSHint defaults
        multistr: true,
        globals: {
          jQuery: false,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'directives/**/*.html'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    open: {
      server: {
        url: 'http://localhost:8080'
      }
    },
    connect: {
      bower: {
        options: {
          port: 8001,
          base: 'bower_components'
        }
      },
      bootstrap: {
        options: {
          port: 8080,
          base: 'directives/bootstrap',
          livereload: true
        }
      },
      foundation: {
        options: {
          port: 8080,
          base: 'directives/foundation',
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('start:bootstrap', ['connect:bower', 'connect:bootstrap']);
  grunt.registerTask('start:foundation', ['connect:bower', 'connect:foundation']);
  grunt.registerTask('default', ['jshint', 'start:bootstrap', 'open', 'watch']);
  grunt.registerTask('bootstrap', ['jshint', 'start:bootstrap', 'open', 'watch']);
  grunt.registerTask('foundation', ['jshint', 'start:foundation', 'open', 'watch']);

};