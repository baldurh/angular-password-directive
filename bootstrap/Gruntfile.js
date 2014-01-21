module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'script.js'],
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
      files: ['<%= jshint.files %>', 'index.html'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    open: {
      server: {
        url: 'http://localhost:8000'
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '.',
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'connect', 'open', 'watch']);

};